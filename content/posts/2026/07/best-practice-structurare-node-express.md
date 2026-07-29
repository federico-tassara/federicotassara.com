---
title: "Come strutturare un progetto Node.js ed Express che regge nel tempo"
date: "2026-07-29"
author: "Federico Tassara"
category: "Sviluppo Web"
excerpt: "Organizzazione per funzionalità, validazione della configurazione all'avvio, controller sottili e un solo punto per gli errori: le scelte di struttura che decidono se un backend Express sarà ancora manutenibile fra due anni."
tags: ["node.js", "express", "backend", "architettura", "best practice", "api"]
faq:
  - q: "Meglio organizzare le cartelle per tipo di file o per funzionalità?"
    a: "Per tipo (controllers/, services/, models/) funziona fino a una quindicina di rotte. Oltre quella soglia ogni modifica ti costringe ad aprire quattro cartelle diverse per seguire un solo flusso. Organizzare per funzionalità tiene vicino il codice che cambia insieme e rende evidente quali parti del sistema si toccano fra loro."
  - q: "Serve TypeScript per un backend Node?"
    a: "Su un progetto che vivrà più di qualche mese e che toccherà più di una persona, sì. Il guadagno non sta nell'evitare errori di battitura, sta nel poter rinominare un campo o cambiare la forma di una risposta API sapendo dove si rompe. Su uno script monouso è peso morto."
  - q: "Dove metto la logica di business in Express?"
    a: "In un layer di servizi che non conosce Express. Il controller legge la richiesta, chiama il servizio, formatta la risposta. Se il servizio riceve req e res come parametri, la logica è legata al trasporto HTTP e non potrai riusarla da un job schedulato, da una coda o da un test."
  - q: "Quanto pesa rifare la struttura di un progetto già avviato?"
    a: "Dipende da quanto la logica di business si è mescolata alle rotte. Se i controller contengono query al database e regole di calcolo, la riorganizzazione tocca ogni file e serve una copertura di test prima di cominciare. Riordinare le cartelle costa poco, districare le responsabilità costa molto."
---

**TL;DR.** Quattro scelte decidono se un backend Express reggerà il secondo anno:

- organizza per funzionalità quando superi la quindicina di rotte
- valida la configurazione all'avvio del processo, non alla prima richiesta che la usa
- tieni Express fuori dal layer che contiene le regole di business
- gestisci gli errori in un solo punto

Nessuna di queste scelte si sente al primo mese. Si sentono tutte quando entra la terza persona nel progetto.

Un backend Express parte bene quasi sempre. Tre rotte, un file, tutto sotto controllo. Il momento in cui smette di funzionare non ha una data: arriva quando aggiungere una funzionalità richiede di aprire sei file, e nessuno sa più quale sia quello giusto da modificare per primo.

## Per tipo o per funzionalità

L'organizzazione che trovi in ogni tutorial raggruppa i file per ruolo tecnico: una cartella `controllers`, una `services`, una `models`, una `routes`. Funziona finché il progetto è piccolo. Su una ventina di rotte comincia a costare: per capire come funziona la fatturazione devi aprire quattro cartelle e ricomporre il flusso a mente.

L'alternativa raggruppa per dominio. Una cartella `fatturazione` che contiene le sue rotte, i suoi servizi, i suoi tipi. Una `utenti`. Una `notifiche`. Il codice che cambia insieme sta insieme, e quando cancelli una funzionalità cancelli una cartella.

Il vantaggio meno ovvio riguarda i confini. Con l'organizzazione per dominio, un import che attraversa due cartelle è visibile e ti fa fermare a pensare. Con l'organizzazione per tipo, tutto importa tutto e nessuno se ne accorge finché non provi a estrarre un pezzo.

La soglia pratica che uso: sotto le quindici rotte lascio l'organizzazione per tipo, sopra passo al dominio. Sotto quella soglia il secondo approccio aggiunge cerimoniale senza restituire nulla.

## La configurazione si valida all'avvio

Il bug che vedo più spesso in produzione ha sempre la stessa forma: una variabile d'ambiente manca, e il processo se ne accorge tre giorni dopo, quando il primo utente colpisce l'unica rotta che la usa.

La soluzione costa venti righe. All'avvio, prima che il server accetti connessioni, leggi tutte le variabili che ti servono, verificale con uno schema e ferma il processo se qualcosa manca. Il resto del codice legge da un oggetto di configurazione già validato, mai da `process.env`.

Il guadagno è che un errore di configurazione diventa un crash immediato al deploy invece di un 500 intermittente a settimane di distanza. Chi fa il deploy lo vede subito, e nessuno passa un pomeriggio a leggere log.

## I controller non contengono regole

Un controller ha tre compiti: leggere quello che arriva dalla richiesta, chiamare qualcuno che sa cosa fare, restituire una risposta nel formato giusto. Tutto quello che sta in mezzo appartiene a un servizio.

La verifica è semplice. Prendi una funzione del tuo layer di servizi e guarda la firma: se accetta `req` e `res`, quella funzione parla HTTP e non potrai chiamarla da un job notturno, da un consumer di coda o da un test senza montare un server finto.

Un servizio che riceve i dati già estratti e restituisce un risultato, invece, lo chiami da dove vuoi. Quando il cliente chiede di esporre la stessa operazione anche via webhook o di eseguirla in batch, il lavoro diventa scrivere un secondo controller sottile. Senza quella separazione, diventa copiare la logica e mantenerne due copie divergenti.

## Un solo punto per gli errori

Express ha un meccanismo dedicato: un middleware con quattro parametri che intercetta tutto quello che le rotte gli passano. Tanti progetti lo ignorano e gestiscono gli errori con try/catch dentro ogni handler, ognuno con un formato di risposta leggermente diverso.

Il risultato lo paga chi consuma l'API. Una rotta risponde `{ error: "..." }`, un'altra `{ message: "..." }`, una terza restituisce l'oggetto errore serializzato con dentro il path dei file del server.

Con un handler centralizzato definisci una volta come si presenta un errore, quali campi escono verso l'esterno e quali restano nei log. I servizi lanciano errori tipizzati che portano con sé il codice HTTP appropriato, il middleware li traduce. Le rotte non contengono try/catch.

Da questo dipende anche la sicurezza: lo stack trace non deve mai raggiungere il client in produzione, e con la gestione sparsa qualcuno prima o poi lo lascia passare.

## La validazione sta al confine

Ogni dato che entra da fuori (body, query string, parametri di rotta, header) va validato prima di toccare qualsiasi logica. Non dopo, non dentro il servizio, non al momento della query.

Il vantaggio pratico riguarda il resto del codice: se la validazione avviene al confine, tutte le funzioni interne lavorano su dati di forma nota e non devono difendersi. Sparisce il controllo difensivo ripetuto in ogni funzione, quello che nasce dal dubbio su cosa possa arrivare.

Con una libreria di schema validi e converti nello stesso passaggio, e il tipo che ottieni descrive quello che hai davvero. Se poi usi TypeScript, quel tipo lo derivi dallo schema invece di scriverlo due volte.

## Cosa rende testabile un backend

La testabilità dipende da una cosa sola: quante dipendenze una funzione va a cercarsi da sola invece di riceverle.

Un servizio che importa il client del database, lo istanzia e lo usa richiede un database vero per essere testato. Lo stesso servizio, se riceve il client come parametro, lo testi con una implementazione finta e senza infrastruttura. La differenza fra queste due versioni è una riga di codice e un ordine di grandezza nella velocità della suite di test.

Non serve un framework di dependency injection. Serve la disciplina di passare le dipendenze invece di importarle nel punto in cui si usano.

## Segnali che la struttura sta cedendo

Cinque sintomi che vedo ricorrere negli audit di codice, in ordine di gravità crescente.

Un file supera le trecento righe e nessuno ricorda cosa contenga per intero. Aggiungere un campo a una risposta API richiede di modificare più di tre file. Due funzioni con nomi diversi fanno la stessa cosa in due domini diversi. Un import circolare che qualcuno ha risolto spostando una riga in fondo al file. I test richiedono un database attivo per verificare un calcolo.

L'ultimo è quello che pesa di più, perché rende costoso ogni intervento successivo e spinge le persone a testare a mano.

## Conclusione

La struttura di un progetto Node non paga il primo mese. Paga quando arriva chi non ha scritto il codice e deve modificarlo senza rompere nulla, e quel momento arriva prima di quanto si preveda.

Le quattro scelte che contano restano poche: dominio invece di tipo oltre una certa dimensione, configurazione validata all'avvio, Express confinato al bordo, errori in un punto solo. Costano un giorno all'inizio del progetto e ne restituiscono molti dopo.

Se hai un backend che è cresciuto e vuoi capire quanto costa rimetterlo in ordine, guardo il codice e ti dico da dove conviene partire: vedi come lavoro su [backend e API](/servizi/backend-e-api), oppure [scrivimi](/contatti). Se il progetto è arrivato al punto in cui ti chiedi se convenga ripartire da zero, ne ho scritto in [riscrivere una piattaforma da zero](/blog/riscrivere-piattaforma-zero).
