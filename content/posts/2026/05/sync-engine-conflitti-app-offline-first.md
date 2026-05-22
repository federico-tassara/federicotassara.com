---
title: "Sync engine: sincronizzare i dati e gestire i conflitti in un'app offline-first"
date: "2026-05-19"
author: "Federico Tassara"
category: "Infrastruttura"
project: "mose"
excerpt: "Push, pull, ordine delle operazioni e risoluzione dei conflitti: come funziona il motore di sincronizzazione di un'app offline-first usata da più dispositivi."
tags: ["sincronizzazione", "offline-first", "conflict resolution", "architettura", "backend"]
faq:
  - q: "Cos'è un sync engine?"
    a: "È il componente che allinea i dati tra il dispositivo e il server in un'app offline-first. Si occupa di inviare al server le modifiche locali (push), scaricare quelle remote (pull), applicarle allo store locale e risolvere i casi in cui la stessa informazione è stata modificata in due posti. Lavora sempre in background, senza intervento dell'utente."
  - q: "Cosa succede se due persone modificano lo stesso dato offline?"
    a: "Si genera un conflitto, che il sync engine deve risolvere quando entrambi i dispositivi tornano online. Le strategie vanno dal merge campo per campo (se hanno toccato parti diverse dello stesso record non c'è vero conflitto) al last-write-wins basato sul timestamp dell'ultima modifica. La scelta dipende dal dominio: in alcuni casi una regola di business specifica deve avere la precedenza."
  - q: "Last-write-wins è una buona strategia?"
    a: "È semplice e per molti dati va benissimo, ma ha un limite: la modifica che arriva seconda sovrascrive la prima, che viene persa. Va bene per campi indipendenti e a bassa contesa; è rischiosa per dati critici. Spesso la soluzione migliore è combinare il merge campo per campo (che elimina la maggior parte dei falsi conflitti) con last-write-wins solo come ultima risorsa."
  - q: "Conviene scrivere un sync engine da zero o usare una libreria?"
    a: "Dipende dal modello dei dati. Per casi standard esistono database con sincronizzazione integrata. Quando le regole di conciliazione sono specifiche del dominio — come la precedenza di certi stati su altri — un sync engine su misura, anche minimale, dà più controllo ed è più facile da far evolvere di una libreria piegata a forza."
---

**TL;DR.** Il sync engine è il componente che tiene allineati dispositivo e server in un'app offline-first. Le regole che lo rendono affidabile:

- la sincronizzazione segue un **ordine fisso**: prima i dati, poi i file
- ogni operazione è **idempotente**: applicarla due volte non fa danni
- i conflitti si risolvono con **merge campo per campo**, last-write-wins solo come ultima risorsa
- un'operazione esce dalla coda **solo** dopo conferma del server

Quando più dispositivi lavorano in parallelo e offline — come le due squadre del progetto [MOSE](/progetti/mose) — è il sync engine a decidere se i dati restano coerenti o si corrompono in silenzio.

In un'[app offline-first](/blog/app-offline-first-ambienti-senza-connessione) lo store locale è la fonte di verità e la UI non aspetta mai la rete. Ma prima o poi i dati devono arrivare al server e tornare aggiornati con il lavoro degli altri. Quel "prima o poi", gestito bene, è il sync engine. Gestito male, è la fonte di tutti i bug difficili da riprodurre.

## Il problema: più dispositivi, una sola verità

Finché c'è un solo dispositivo, sincronizzare è facile: si invia ciò che è cambiato e si ricevono gli aggiornamenti. La complessità nasce quando i dispositivi sono due o più e lavorano offline nello stesso periodo.

Nel progetto MOSE ci sono due squadre, ciascuna con il proprio tablet, che lavorano in parallelo in gallerie diverse. Per ore non hanno rete. Quando rientrano in copertura, entrambi i tablet hanno modifiche da inviare e modifiche da ricevere. Il sync engine deve fondere questi flussi senza perdere dati e senza richiedere all'utente di capire cosa è successo.

## L'ordine delle operazioni conta

La prima regola di un sync engine affidabile è che le fasi vanno eseguite in un ordine preciso, e non vanno parallelizzate tra loro. Un ciclo di sincronizzazione tipico è:

1. **push** delle modifiche locali in coda verso il server
2. **pull** del delta dal server, cioè di tutto ciò che è cambiato dopo l'ultima sincronizzazione
3. **applicazione** del delta allo store locale
4. **upload** dei file pesanti (foto, allegati)
5. **salvataggio** del timestamp dell'ultima sincronizzazione riuscita

L'ordine non è arbitrario. I file vanno dopo i dati perché un file deve potersi agganciare a un record che sul server esiste già: caricare prima la foto e poi fallire il push del dato a cui appartiene produce file orfani, irrecuperabili senza intervento manuale. Saltare l'ordine è uno degli errori più comuni e più subdoli.

## Push: la coda di operazioni

Il push processa la coda di sincronizzazione: l'elenco persistente delle modifiche fatte in locale e non ancora confermate dal server. Ogni elemento descrive un'operazione — creazione o aggiornamento, su quale entità, con quale contenuto, quando.

Due dettagli rendono il push robusto. Il primo: un'operazione esce dalla coda **solo** dopo una risposta di successo dal server. Se la rete cade a metà, l'operazione resta e verrà ritentata — senza che l'utente se ne accorga. Il secondo: gli errori vanno distinti. Un errore di rete o del server (5xx) è temporaneo, si ritenta. Un errore di validazione (4xx) è permanente: ritentarlo all'infinito è inutile, va invece segnalato. Dopo un certo numero di tentativi falliti, l'operazione va marcata come problematica e mostrata, non rimossa in silenzio.

## Pull: applicare il delta dal server

Il pull chiede al server tutto ciò che è cambiato dopo l'ultima sincronizzazione — il "delta". Restituire solo il delta, e non l'intero dataset, è ciò che rende la sincronizzazione veloce anche su connessioni scarse.

Applicare il delta richiede attenzione. Per ogni documento ricevuto si confronta la sua data di ultima modifica con quella della copia locale. Se in locale non esiste, si inserisce. Se la versione del server è più recente, si sostituisce. Se invece la versione **locale** è più recente — perché l'utente ha appena modificato quel dato e non è ancora stato pushato — non si sovrascrive: la modifica locale è più aggiornata e verrà inviata al prossimo ciclo. Saltare questo controllo significa cancellare il lavoro appena fatto dall'utente.

## Risoluzione dei conflitti: merge campo per campo

Il conflitto vero nasce quando lo stesso record è stato modificato sia in locale sia sul server da quando erano allineati. Ma "stesso record" non significa "stesso conflitto".

La maggior parte dei conflitti apparenti sono falsi. Se una squadra ha aggiornato un campo e l'altra un campo diverso dello stesso record, non c'è alcuna contesa: basta fondere le due modifiche campo per campo. Questo merge granulare elimina da solo la grande maggioranza dei conflitti. Il conflitto reale resta solo quando due dispositivi hanno modificato **lo stesso campo** dello stesso record.

## Last-write-wins e i suoi limiti

Per il conflitto reale la strategia più diffusa è last-write-wins: vince la modifica con il timestamp più recente. È semplice e per molti dati va benissimo. Il limite è evidente: la modifica perdente viene scartata e persa.

Per questo last-write-wins dovrebbe essere l'ultima risorsa, non la prima. E in alcuni casi va sostituita da una regola di dominio. Nel progetto MOSE, ad esempio, se un dispositivo segna una lavorazione come "completata" e un altro la segna come "sospesa", non vince il timestamp: vince sempre "completata", perché una lavorazione finita non può tornare indietro. Sono le regole di business, non il solo orologio, a guidare la conciliazione dei dati importanti.

## Idempotenza e deduplicazione

Le reti inaffidabili producono ambiguità: il server riceve l'operazione, la applica, ma la conferma si perde per strada. Il client non sa se è andata a buon fine e la ritenta. Senza precauzioni, la stessa operazione viene applicata due volte.

La difesa è l'idempotenza. Ogni operazione porta un identificatore univoco generato dal client. Il server tiene traccia degli identificatori già processati e ignora i duplicati. Così ritentare è sempre sicuro: nel dubbio, si ritenta. È una proprietà piccola da implementare e enorme da avere.

## Cosa mostrare all'utente

Un buon sync engine è quasi invisibile. L'utente non deve premere "sincronizza" né leggere log. Servono però pochi segnali chiari: un indicatore di stato per ogni elemento — sincronizzato, in attesa, in conflitto — e una banda che segnala quando si è offline, così che chi lavora sappia che i dati partiranno più tardi.

I conflitti che il sistema risolve da solo non vanno mostrati come allarmi: al massimo un'icona discreta. Vanno invece resi visibili i pochi casi che richiedono attenzione umana — un'operazione bloccata dopo troppi tentativi, un dato che il sistema non sa conciliare. La regola è: rumore zero per ciò che il sistema gestisce, segnale chiaro per ciò che non può gestire.

## Conclusione

Un sync engine non è codice difficile da scrivere, ma è codice difficile da scrivere *bene*: l'ordine delle fasi, l'idempotenza, la distinzione tra conflitti veri e falsi, le regole di dominio sulla conciliazione. Sono dettagli che non si vedono in demo e si pagano in produzione. Vale la pena progettarli con cura fin dall'inizio.

Se stai costruendo un sistema dove più dispositivi o più utenti lavorano sugli stessi dati, posso aiutarti a impostare [architettura e backend](/servizi/backend-e-api) in modo che la sincronizzazione regga. Guarda il caso [MOSE](/progetti/mose) o [scrivimi](/contatti) per discuterne.
