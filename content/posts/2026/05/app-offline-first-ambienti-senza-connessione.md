---
title: "App offline-first: progettare software che funziona senza connessione"
date: "2026-05-21"
author: "Federico Tassara"
category: "Sviluppo mobile"
project: "mose"
excerpt: "Come si progetta un'app offline-first che funziona dove non c'è rete: store locale come fonte di verità, coda di sincronizzazione, gestione delle foto e UX. Lezioni dal progetto MOSE."
tags: ["offline-first", "react native", "mobile development", "sincronizzazione", "architettura"]
faq:
  - q: "Che differenza c'è tra un'app offline-first e un'app con cache offline?"
    a: "Un'app con cache mostra dati salvati quando manca la rete, ma le scritture richiedono la connessione: senza rete l'utente è bloccato. Un'app offline-first tratta il dispositivo come fonte di verità: ogni operazione, comprese le scritture, funziona in locale e viene sincronizzata in un secondo momento. La rete diventa un dettaglio di background, non un prerequisito."
  - q: "L'approccio offline-first vale solo per le app mobile?"
    a: "No, ma è lì che serve più spesso, perché i dispositivi mobili lavorano in contesti con connettività incerta. Lo stesso principio si applica a web app installabili (PWA) e a software desktop usato sul campo. La parte difficile — store locale, coda di sincronizzazione, gestione dei conflitti — è identica."
  - q: "Quanto costa in più sviluppare un'app offline-first?"
    a: "Indicativamente il 20-40% in più rispetto a un'app online-only di pari funzionalità, concentrato su sync engine, gestione dei conflitti e testing. Non è un costo da aggiungere a fine progetto: va deciso all'inizio, perché condiziona l'architettura dei dati."
  - q: "Si può rendere offline-first un'app già esistente?"
    a: "Sì, ma raramente è un semplice add-on. Se l'app è stata costruita assumendo che il server risponda sempre, di solito vanno riviste la gestione dello stato e il flusso dei dati. Conviene valutarlo prima di un refactoring importante, non dopo."
---

**TL;DR.** Un'app offline-first non è un'app normale con una cache. È un'app dove:

- lo store locale sul dispositivo è la **fonte di verità**, non il server
- la UI legge e scrive sempre in locale, senza mai aspettare la rete
- ogni modifica entra in una **coda di sincronizzazione** persistente
- la sincronizzazione avviene in background quando la rete torna disponibile

Serve davvero quando l'assenza di connettività non è un'eccezione ma la normalità: cantieri, gallerie, magazzini, mezzi in movimento. È il caso del progetto [MOSE](/progetti/mose), dove le squadre lavorano nei cassoni sotto le paratoie, dove non arriva alcun segnale.

La maggior parte delle app dà per scontata una cosa: che il server risponda. Ogni salvataggio, ogni schermata, ogni azione presuppone una connessione disponibile. Funziona finché la rete c'è. Quando non c'è — e in molti contesti di lavoro reale non c'è — l'app diventa inutilizzabile proprio nel momento in cui servirebbe. Progettare offline-first significa ribaltare questa assunzione fin dall'inizio.

## Cosa significa davvero "offline-first"

C'è molta confusione tra "supporto offline" e "offline-first". Un'app con supporto offline mostra dati già scaricati quando manca la rete: è una modalità degradata, di sola lettura. Un'app offline-first considera l'assenza di rete lo stato normale e la presenza di rete un'opportunità in più.

La differenza pratica si vede sulle scritture. In un'app tradizionale, quando l'utente salva qualcosa l'app chiama il server e aspetta la risposta. Senza rete, quel salvataggio fallisce. In un'app offline-first il salvataggio va sempre a buon fine, perché scrive sul dispositivo; la propagazione al server è un problema separato, gestito dopo.

## Lo store locale è la fonte di verità

È la decisione architetturale che cambia tutto: il dato vero è quello sul dispositivo, non quello sul server. Il server è una copia eventualmente consistente, non l'originale.

In pratica serve uno storage locale veloce e affidabile — su React Native, ad esempio, una soluzione come MMKV o un database embedded. Ogni entità che l'utente può creare o modificare vive lì. La UI non interroga mai direttamente la rete: interroga lo store locale. Questo ha una conseguenza importante: l'app è istantanea, perché non c'è latenza di rete tra un'azione e il suo effetto visibile.

## La UI non aspetta mai la rete

Da questo principio discende una regola ferrea: nessun componente dell'interfaccia chiama direttamente l'API. Mai. Il flusso di ogni salvataggio è sempre lo stesso — l'utente agisce, l'app scrive in locale, l'app accoda l'operazione da sincronizzare, la UI si aggiorna leggendo dallo store. La rete non compare in questa sequenza.

Sembra un dettaglio, ma è la differenza tra un'app che "a volte si blocca" e un'app che non si blocca mai. Se anche un solo punto del codice fa `await api.salva()` e aspetta la risposta per aggiornare la schermata, quel punto diventa un blocco quando la rete manca. La disciplina di non chiamare mai l'API dai componenti va imposta e verificata, perché è facile da violare per disattenzione.

## La coda di sincronizzazione

Se le scritture non vanno subito al server, da qualche parte vanno ricordate. Quel posto è una coda di operazioni persistente, anch'essa sullo storage locale.

Ogni volta che l'utente modifica qualcosa, oltre ad aggiornare lo store, l'app aggiunge alla coda un'operazione: che cosa è cambiato, su quale entità, quando. La coda sopravvive alla chiusura dell'app e al riavvio del dispositivo — è scritta su disco, non tenuta in memoria. Un'operazione esce dalla coda solo quando il server ne conferma la ricezione. Se la sincronizzazione fallisce, resta lì e verrà ritentata.

Questa coda è il cuore di un'app offline-first. Va progettata con cura: identificatori univoci per evitare di applicare due volte la stessa operazione, un contatore di tentativi, la gestione esplicita degli errori che non vanno ritentati. Ne ho parlato in dettaglio nell'articolo sul [sync engine e la gestione dei conflitti](/blog/sync-engine-conflitti-app-offline-first).

## Le foto sono un caso a parte

Nei progetti reali da campo le foto sono spesso il dato più importante — sono la prova che il lavoro è stato fatto. E sono anche il dato più scomodo da sincronizzare, perché pesano.

La regola: la foto viene salvata subito come file sul dispositivo, e nel dato resta un riferimento a quel file locale. Non passa dalla coda delle operazioni normali, perché un payload da diversi megabyte intaserebbe la sincronizzazione dei dati testuali, che invece deve essere rapida. Un componente dedicato si occupa di caricare le foto in differita, quando c'è banda disponibile, e solo dopo che il dato a cui sono associate è stato sincronizzato — altrimenti si rischiano file orfani sul server. Il file locale, poi, non va mai cancellato dopo l'upload: resta come fallback consultabile offline.

## Rilevare la rete e sincronizzare al momento giusto

L'ultimo pezzo è capire quando sincronizzare. Servono due trigger. Il primo è la transizione da offline a online: appena la connettività torna, parte subito un ciclo di sincronizzazione. Il secondo è un polling periodico mentre si è già online, per recuperare le modifiche fatte dagli altri dispositivi.

Su React Native questo si ottiene con una libreria di monitoraggio della connettività che notifica i cambi di stato. L'importante è che la sincronizzazione sia sempre in background e non interattiva: l'utente non deve mai premere un pulsante "sincronizza" né aspettare una barra di avanzamento. Se se ne accorge, qualcosa nell'architettura non va.

## Cosa cambia nel testing

Un'app offline-first si testa in modo diverso. Non basta provare i flussi "felici" con la rete attiva: vanno simulati esplicitamente lo stato offline, la transizione offline→online, la chiusura dell'app con operazioni ancora in coda, e — il caso più insidioso — due dispositivi che modificano lo stesso dato mentre sono entrambi scollegati.

Questi scenari non emergono da soli durante lo sviluppo, perché in ufficio la rete c'è sempre. Vanno costruiti apposta. È il motivo per cui il testing pesa di più in un progetto offline-first, e va messo a budget fin dall'inizio.

## Quando serve (e quando no) offline-first

Offline-first non è gratis: aggiunge complessità reale. Ha senso quando l'assenza di rete è strutturale — lavoro in gallerie, sotterranei, aree industriali, zone rurali, mezzi in movimento — oppure quando l'app deve essere percepita come istantanea a prescindere dalla qualità della connessione.

Non ha senso per un'app che si usa solo in contesti ben coperti, dove un semplice stato di errore "riprova" è accettabile. La domanda da porsi è: cosa succede all'utente quando la rete non c'è? Se la risposta è "non può lavorare" e quel momento è frequente, allora offline-first non è un extra, è un requisito.

## Conclusione

Progettare offline-first è soprattutto una decisione di architettura, da prendere prima di scrivere codice: store locale come fonte di verità, UI che non aspetta mai la rete, coda di sincronizzazione persistente, gestione separata dei file pesanti. Aggiunta dopo, diventa un refactoring costoso; decisa all'inizio, è solo un modo diverso — e più solido — di costruire l'app.

Se stai pensando a un'app che deve funzionare sul campo, una [consulenza tecnica](/servizi/tech-consulting) può aiutarti a capire se l'offline-first ti serve davvero e quanto incide su tempi e costi. Vedi come ho affrontato il problema nel progetto [MOSE](/progetti/mose), oppure [scrivimi](/contatti) per discutere il tuo caso.
