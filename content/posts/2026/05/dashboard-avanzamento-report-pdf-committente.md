---
title: "Dashboard e report PDF: dare visibilità al committente di un progetto tecnico"
date: "2026-05-14"
author: "Federico Tassara"
category: "Sviluppo Web"
project: "mose"
excerpt: "Una dashboard web e l'export PDF automatico trasformano i dati di cantiere in rapporti pronti da consegnare. Come è fatta, dove conviene e cosa serve per costruirla."
tags: ["next.js", "dashboard", "reportistica", "pdf", "sviluppo web"]
faq:
  - q: "A cosa serve una dashboard per il committente di un progetto tecnico?"
    a: "A dare visibilità in tempo reale sull'avanzamento del lavoro senza dover chiedere aggiornamenti. Il committente entra, vede a che punto è ogni parte del progetto e all'occorrenza esporta un rapporto. Riduce le email di sollecito, le riunioni di stato e l'attesa del rapporto finale."
  - q: "Conviene generare i PDF lato server o lato client?"
    a: "Per rapporti strutturati e ripetibili conviene generarli lato server, da una libreria che impagina il documento a partire dai dati. È deterministico, non dipende dal browser dell'utente e produce sempre lo stesso risultato. La generazione lato client ha senso solo per esportazioni semplici e occasionali."
  - q: "Quanto costa aggiungere una dashboard a un progetto esistente?"
    a: "Se i dati esistono già in un database o dietro un'API, una dashboard di sola lettura è relativamente economica: si tratta di esporre gli endpoint giusti e costruire le viste. L'incognita è quasi sempre l'autenticazione e la generazione dei documenti, non le pagine in sé."
  - q: "La dashboard deve essere un'app separata?"
    a: "Spesso sì, ed è una buona scelta. Tenere la dashboard del committente come applicazione distinta — con il suo dominio, il suo deploy e i suoi accessi — la mantiene semplice, indipendente dal ciclo di rilascio dell'app operativa e più facile da mettere in sicurezza."
---

**TL;DR.** In un progetto tecnico i dati di avanzamento di solito esistono già: manca lo strato che li rende leggibili a chi commissiona il lavoro. Una dashboard web colma questo vuoto:

- mostra l'**avanzamento in tempo reale**, senza dover chiedere aggiornamenti
- è di **sola lettura**: informa, non interferisce con il lavoro operativo
- esporta **report PDF** generati dai dati, pronti da consegnare o inviare via PEC
- vive come **applicazione separata**, con i propri accessi

Nel progetto [MOSE](/progetti/mose) la dashboard permette al committente di seguire la manutenzione dei tiranti sito per sito e di scaricare rapporti completi di foto.

Quando si costruisce un'app operativa — usata da chi esegue il lavoro — è facile concentrare tutta l'attenzione su chi la usa sul campo. Ma c'è un secondo attore che spesso resta scoperto: chi quel lavoro lo ha commissionato. Non userà mai l'app operativa, eppure ha bisogno di sapere a che punto siamo. La dashboard è il prodotto pensato per lui.

## Il dato c'è già: manca la lettura

In un progetto digitalizzato i dati di avanzamento si accumulano da soli. Ogni intervento registrato dalle squadre, ogni passo completato, ogni foto caricata è già un dato strutturato nel database. Il problema non è produrlo: è renderlo leggibile.

Senza uno strato di lettura dedicato, quel dato resta accessibile solo a chi sa interrogare il database o a chi sviluppa. Il committente, che è la persona più interessata, è anche la più lontana dal dato. La dashboard non crea informazione nuova: prende informazione che esiste già e la presenta a chi non ha altri modi per vederla.

## Cosa mostra una dashboard di avanzamento

Una buona dashboard di avanzamento segue la struttura naturale del progetto, dal generale al particolare. Si entra e si vede il quadro d'insieme — la percentuale complessiva, lo stato dei grandi blocchi di lavoro. Da lì si scende: dal sito alla sua suddivisione, fino al singolo elemento lavorato e al dettaglio del suo intervento.

Nel progetto MOSE questa gerarchia è: i siti, le stanze di ciascun sito, i tiranti di ciascuna stanza, e infine la singola lavorazione con i suoi quattro step e le foto. Lo stesso schema vale per qualsiasi dominio: cantieri e lotti, impianti e componenti, commesse e attività. La regola è far rispecchiare alla navigazione il modo in cui il committente già pensa al progetto.

## Sola lettura, ma sempre aggiornata

Una scelta progettuale importante: la dashboard del committente è di sola lettura. Non si modifica nulla da lì. Questo non è un limite, è una caratteristica.

La sola lettura tiene la dashboard semplice, riduce drasticamente la superficie di errore e di sicurezza, e soprattutto mantiene una sola fonte di verità: il lavoro si registra dove viene fatto — nell'app operativa — e la dashboard lo riflette. "Aggiornata" non significa che il committente la modifichi: significa che legge i dati reali nel momento in cui li guarda, non un'istantanea vecchia di giorni.

## Il report PDF: dal dato al documento

La dashboard online risponde alla domanda "a che punto siamo adesso?". Ma molti contesti hanno bisogno di un documento: qualcosa da archiviare, allegare a una fattura, inviare via PEC, consegnare a un ente. Qui entra l'export PDF.

Il salto di valore è questo: il rapporto non si impagina più a mano. Si seleziona un intervallo di date, eventualmente si filtra, e il sistema genera un PDF a partire dai dati già presenti — tabelle, riepiloghi e foto comprese. Quello che prima richiedeva giorni di lavoro a fine cantiere diventa un clic. E il documento è sempre coerente, perché nasce dalla stessa fonte della dashboard.

## Generare PDF: dove e come

Sul piano tecnico, per rapporti strutturati e ripetibili conviene generare il PDF lato server, non nel browser dell'utente. Una libreria che impagina il documento a partire dai dati produce un risultato deterministico: identico ogni volta, indipendente dal dispositivo di chi lo scarica.

Due accorgimenti pratici contano più degli altri. Il primo riguarda le immagini: vanno recuperate e gestite in modo che una foto mancante o irraggiungibile non faccia fallire l'intero documento — il PDF deve generarsi comunque. Il secondo riguarda i tempi: un rapporto con molte foto richiede secondi, non millisecondi, quindi la generazione va trattata come un'operazione che può durare, con i giusti margini di timeout. Sono dettagli che non si vedono in demo e si pagano in produzione.

## Autenticazione e accessi

La dashboard mostra dati di un progetto reale: l'accesso va protetto. Ma il committente non è uno sviluppatore, e la soluzione di autenticazione deve esserne all'altezza.

Un approccio che funziona bene è il login con codice via email — l'utente inserisce l'indirizzo, riceve un codice temporaneo, entra. Niente password da gestire, da dimenticare, da reimpostare. E nessuna registrazione libera: gli accessi li crea chi gestisce il progetto. La verità autorevole sull'identità resta sul server; la dashboard si limita a custodire la sessione. È un equilibrio tra sicurezza reale e semplicità d'uso che per un'utenza non tecnica è il punto giusto.

## Perché conviene a tutti

La dashboard conviene al committente per ragioni ovvie: vede l'avanzamento quando vuole, non quando qualcuno glielo comunica, e ottiene i rapporti senza attese. Ma conviene anche a chi sviluppa e a chi esegue il lavoro.

Sparisce gran parte delle email di sollecito e delle riunioni di stato: la risposta a "a che punto siamo?" è un link. La fiducia cresce, perché la trasparenza è strutturale e non va costruita a ogni richiesta. E il rapporto finale smette di essere un picco di lavoro manuale a fine progetto. È un piccolo prodotto che ripaga il suo costo molto in fretta, soprattutto se i dati — come spesso accade — esistono già.

## Conclusione

Una dashboard per il committente non aggiunge funzionalità all'app operativa: aggiunge una lettura. Trasforma dati che già esistono in visibilità e in documenti, e lo fa per la persona che di solito è più lontana dal dato pur essendone la più interessata. Tenuta semplice — sola lettura, applicazione separata, accessi controllati — è uno dei componenti con il miglior rapporto tra valore e costo in un progetto tecnico.

Se hai un progetto i cui dati di avanzamento restano invisibili a chi li commissiona, posso aiutarti a costruire lo strato che li rende leggibili: vedi il servizio di [sviluppo web](/servizi/web-development), il caso [MOSE](/progetti/mose), oppure [scrivimi](/contatti).
