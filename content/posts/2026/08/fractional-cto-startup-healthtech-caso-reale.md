---
title: "Fractional CTO per una startup healthtech: come ho impostato la prima fase tecnica"
date: "2026-08-21"
updatedAt: "2026-08-21"
author: "Federico Tassara"
category: "Consulenza"
excerpt: "Un caso reale di leadership tecnica per una startup che sviluppa software destinato a centri sanitari privati: revisione iniziale, decisioni sullo stack e criteri verificabili prima del pilota."
tags: ["fractional cto", "healthtech", "startup", "software sanitario", "leadership tecnica"]
cta:
  title: "Devi portare un software sanitario verso il primo pilota?"
  body: "Raccontami cosa esiste già, quali dati tratterà il prodotto e quale decisione tecnica è ancora senza un responsabile. Partiremo dai rischi da rendere verificabili."
  label: "Valutiamo il progetto"
faq:
  - q: "Un Fractional CTO serve anche prima dell'MVP?"
    a: "Sì, quando manca una persona che assuma la responsabilità delle decisioni tecniche. Prima dell'MVP può ordinare i rischi, decidere cosa mantenere e cosa cambiare, definire criteri di completamento e preparare il progetto al pilota senza richiedere subito un CTO interno a tempo pieno."
  - q: "Un Fractional CTO deve riscrivere il software esistente?"
    a: "No. La revisione serve proprio a separare ciò che è valido da ciò che manca. In questo caso la fondazione tecnica era incompleta ma la scelta di base era corretta: mantenerla ha permesso di destinare il lavoro al prodotto e alle protezioni necessarie, invece che a una riscrittura senza beneficio."
  - q: "Come può un founder non tecnico verificare il lavoro?"
    a: "Ogni risultato tecnico può essere accompagnato da una prova osservabile: riavviare il sistema e ritrovare i dati, tentare un accesso tra due organizzazioni di prova, vedere un'attività programmata partire da sola o consegnare il repository a un tecnico terzo seguendo soltanto la documentazione. La verifica non richiede di leggere il codice."
  - q: "Il Fractional CTO si occupa anche della conformità privacy?"
    a: "Può predisporre misure tecniche, descrivere i flussi dei dati e produrre le evidenze necessarie, ma non dovrebbe dichiarare da solo la conformità giuridica. Nel caso descritto il perimetro tecnico è stato separato esplicitamente dal lavoro del consulente privacy incaricato dalla startup."
---

**Nota sulla riservatezza.** Il caso è reale, ma azienda, prodotto e persone restano anonimi. Descrivo il metodo e le decisioni tecniche utili a capire il lavoro di un Fractional CTO; non pubblico dati sanitari, importi, codice o informazioni che possano identificare il cliente.

**TL;DR.** Una startup che sviluppa software per centri sanitari privati mi ha trovato attraverso il sito e mi ha affidato la leadership tecnica del progetto. Non sono partito scegliendo un nuovo stack o promettendo una data di lancio. Ho prima verificato la fondazione esistente, deciso cosa mantenere e trasformato i rischi prima del pilota in risultati controllabili dal founder. Il punto dell’ingaggio non era aggiungere ore di sviluppo: era creare una responsabilità tecnica unica su prodotto, architettura, sicurezza, fornitori e passaggio alla produzione.

## Cosa significava “partire da zero”

In questo progetto partire da zero non significava trovare un repository vuoto. Esistevano già un’architettura, uno schema dei dati e parte del motore applicativo. Mancava però una persona interna che assumesse la responsabilità dell’intero percorso tecnico: distinguere ciò che poteva restare da ciò che andava completato, ordinare i rischi e collegare il lavoro di sviluppo alle condizioni necessarie per portare il prodotto davanti a un primo centro.

È una distinzione importante. Scrivere codice e guidare tecnicamente un prodotto non sono la stessa attività. Il secondo lavoro comprende anche decidere cosa non riscrivere, rendere verificabili le consegne e impedire che account, documentazione e conoscenza restino nelle mani di una sola persona.

Il contesto aggiungeva tre vincoli non negoziabili:

- il software avrebbe trattato dati sanitari;
- più centri avrebbero usato la stessa piattaforma senza poter vedere i dati altrui;
- alcune attività del percorso dovevano partire e ripetersi automaticamente.

In un prodotto del genere, una demo funzionante non basta. Prima del pilota servono persistenza reale dei dati, isolamento tra organizzazioni, esecuzione affidabile delle regole, procedure operative e un confine chiaro tra responsabilità tecnica e valutazione giuridica.

## La prima decisione: non riscrivere

La revisione iniziale ha prodotto una conclusione meno spettacolare, ma economicamente più utile: **la fondazione tecnica scelta dai progettisti era adatta e andava mantenuta**.

Il sistema era incompleto. Alcune parti esistevano ancora soltanto come specifica; il motore principale lavorava senza usare pienamente il database; mancavano componenti necessari a un prodotto operabile. Questo non rendeva sbagliata l’architettura di base.

Proporre una nuova tecnologia avrebbe spostato tempo e budget dalla costruzione del prodotto alla riscrittura di decisioni già valide. Ho quindi separato due domande che spesso vengono confuse:

1. lo stack scelto è adeguato ai vincoli del prodotto?
2. il prodotto è abbastanza completo e protetto da poter andare in produzione?

La risposta alla prima era sì. Alla seconda, non ancora.

Questa decisione è parte del lavoro di un Fractional CTO quanto una scelta architetturale nuova. La leadership tecnica non si misura dal numero di tecnologie cambiate, ma dalla capacità di spendere il budget dove riduce davvero rischio e incertezza.

## Dalla revisione a una prima fase contrattuale

Una lista di criticità tecniche non è ancora un piano. Per diventarlo deve chiarire priorità, confini e condizioni di completamento.

Ho organizzato la prima fase attorno a dieci risultati. Per ciascuno il documento contrattuale specificava quattro elementi:

- cosa sarebbe stato consegnato, in parole comprensibili;
- perché quel risultato era necessario;
- come il committente avrebbe potuto verificarlo senza leggere il codice;
- quale formulazione tecnica avrebbe potuto usare un professionista terzo.

Il dettaglio che considero più importante è il terzo. Un founder non tecnico non dovrebbe accettare una consegna perché «il team dice che funziona». Deve poter osservare una prova coerente con il rischio coperto.

Per esempio:

- creare un dato, riavviare il sistema e verificare che sia ancora presente;
- usare due organizzazioni di prova e tentare un accesso incrociato;
- programmare un’attività a pochi minuti e vederla partire senza intervento manuale;
- provocare due esiti diversi dello stesso flusso e verificare che seguano i rami corretti;
- affidare repository e istruzioni a un tecnico esterno, su un ambiente pulito, e controllare che riesca ad avviare il sistema senza aiuto.

Sono verifiche semplici da osservare, ma non superficiali. Traducono proprietà tecniche — persistenza, isolamento, elaborazione asincrona, correttezza del workflow e qualità della documentazione — in comportamenti controllabili.

## I rischi ordinati prima del pilota

La prima fase non era una raccolta di feature. Era un lavoro sulle fondamenta che avrebbero reso sensato costruire le feature successive.

### 1. Integrità e correttezza del prodotto

I dati dovevano essere salvati in modo permanente e le operazioni collegate dovevano completarsi insieme oppure essere annullate. Le regole configurate dovevano corrispondere a quelle effettivamente eseguite. I rami di un percorso dovevano rispettare condizioni e priorità, senza scambiare un collegamento mancante per una conclusione corretta.

Qui il rischio non era soltanto un errore tecnico. Se il personale crede che una regola stia sorvegliando una condizione e invece non parte, l’interfaccia comunica una sicurezza che il sistema non offre.

### 2. Separazione e protezione dei dati

Ogni centro doveva poter accedere soltanto ai propri dati. Questo controllo non poteva dipendere dalla memoria di chi avrebbe scritto i singoli endpoint: serviva un meccanismo centralizzato, accompagnato da test automatici di accesso incrociato.

La fase comprendeva inoltre la predisposizione tecnica per cifrare i campi concordati e per estrarre o cancellare i dati riferiti a una singola persona. La selezione esatta dei dati e la valutazione di conformità restavano da coordinare con il consulente privacy.

### 3. Attività automatiche e affidabili

Promemoria, controlli ripetuti ed eventi concatenati dovevano essere elaborati senza che un operatore premesse un pulsante. Una richiesta duplicata non doveva produrre due esecuzioni; un controllo configurato per ripetersi doveva farlo per il numero previsto e poi fermarsi.

Queste proprietà sono poco visibili in una demo, ma determinano se il sistema può funzionare quando nessuno lo sta osservando.

### 4. Produzione e operatività

Portare il prodotto online non significava copiare il codice su un server. Servivano un rilascio automatico, gestione separata delle credenziali, raccolta dei log e un controllo di disponibilità. L’obiettivo era ridurre i passaggi manuali e la dipendenza da una singola persona.

Anche la documentazione rientrava nel risultato, non nelle attività da svolgere «alla fine»: architettura, dati, rilascio, ambienti e procedure operative dovevano rimanere allineati al codice.

### 5. Proprietà degli account e controllo dei costi

I servizi esterni necessari al progetto dovevano essere intestati alla startup, con credenziali amministrative disponibili al committente. Per i servizi a consumo erano previsti limiti e avvisi di spesa.

È un elemento spesso trattato come amministrazione, ma riguarda direttamente l’autonomia tecnica. Se cloud, dominio o servizi critici appartengono al fornitore, cambiare partner diventa più difficile proprio nel momento in cui il rapporto si interrompe.

## Il confine con il consulente privacy

Nel software sanitario è facile usare «GDPR compliant» come formula rassicurante e imprecisa. Ho preferito definire il confine.

Il mio perimetro comprendeva la predisposizione tecnica: descrivere dati e flussi, implementare le misure concordate, produrre evidenze, rendere possibili estrazione e cancellazione e consegnare al consulente le informazioni necessarie. La conformità documentale e giuridica restava al professionista incaricato dalla startup.

Questa separazione non riduce la responsabilità tecnica. Evita che una persona dichiari competenze e garanzie che non appartengono al proprio ruolo.

## Cosa dimostra questo caso, e cosa no

La prima fase è iniziata ed è ancora in corso. Questo non è quindi un caso «prima e dopo»: i documenti disponibili descrivono la revisione iniziale e i criteri concordati, non il completamento né risultati economici misurati. Sarebbe scorretto presentare come ottenuti risultati che, al momento della pubblicazione, sono ancora condizioni da raggiungere.

Il caso dimostra invece come può iniziare un ingaggio di leadership tecnica:

1. verificare la base esistente prima di proporre cambiamenti;
2. separare problemi di architettura da problemi di completezza;
3. ordinare i rischi in funzione del prossimo traguardo reale;
4. tradurre ogni rischio in un risultato verificabile;
5. lasciare account, conoscenza e criteri di accettazione all’azienda.

Quando la prima fase sarà conclusa, il seguito corretto non sarà aggiungere un risultato celebrativo. Sarà documentare quali criteri sono stati superati, quali hanno richiesto correzioni e cosa è cambiato nel passaggio verso il pilota.

Se stai costruendo un prodotto tecnologico e manca una persona che tenga insieme decisioni, sviluppo, fornitori e rischi, trovi il perimetro del mio servizio di [Fractional CTO](/fractional-cto). Per capire prima se il problema richiede leadership continuativa o un intervento circoscritto, puoi leggere [quando serve un Fractional CTO](/blog/quando-serve-fractional-cto) oppure [scrivermi](/contatti).
