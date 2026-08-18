---
title: "Integrare gestionale ed e-commerce con le API"
date: "2026-07-21"
updatedAt: "2026-07-21"
author: "Federico Tassara"
category: "Sviluppo web"
excerpt: "Come collegare gestionale, CRM ed e-commerce con le API per far viaggiare ordini, magazzino e anagrafiche senza reinserirli a mano: integrazione diretta o middleware, sincronizzazione in tempo reale o schedulata, costi e cosa fare quando il gestionale non ha API."
tags: ["backend", "api", "integrazioni", "ecommerce", "gestionale", "pmi", "sviluppo web"]
faq:
  - q: "Come si collega il gestionale all'e-commerce?"
    a: "Attraverso le API dei due sistemi: un livello di integrazione legge i dati da uno e li scrive nell'altro secondo regole definite. Quando arriva un ordine sull'e-commerce, viene creato nel gestionale; quando cambia una giacenza nel gestionale, viene aggiornata sullo shop. Se entrambi i sistemi espongono API moderne è relativamente lineare; il lavoro vero è definire cosa sincronizzare, in che direzione e cosa fare in caso di conflitto — non la connessione tecnica in sé."
  - q: "Meglio un'integrazione diretta via API o un middleware?"
    a: "L'integrazione diretta (punto-punto) è più semplice ed economica quando colleghi due soli sistemi e non prevedi di aggiungerne altri. Il middleware — un livello centrale a cui tutti i sistemi si agganciano — conviene da tre sistemi in su: evita il groviglio di connessioni uno-a-uno, centralizza le regole e rende l'aggiunta di un nuovo sistema molto meno costosa. La regola pratica: due sistemi, diretto; tre o più, valuta seriamente il middleware."
  - q: "Quanto costa integrare gestionale, CRM ed e-commerce?"
    a: "Un'integrazione punto-punto tra due sistemi con API documentate parte tipicamente da €4.000–€10.000. Uno scenario con più sistemi, sincronizzazione bidirezionale e gestione degli errori sta più spesso tra €12.000 e €30.000. Il prezzo lo fanno il numero di flussi, la direzione (uni o bidirezionale), la frequenza (tempo reale o schedulata) e soprattutto la qualità delle API dei sistemi coinvolti: un gestionale con API scarse o assenti può costare più di tutto il resto messo insieme."
  - q: "Si possono sincronizzare ordini e magazzino in tempo reale?"
    a: "Sì, se i sistemi lo permettono tramite webhook o API reattive. Ma il tempo reale non è sempre la scelta giusta: costa di più, è più fragile e per molti dati (anagrafiche, listini) una sincronizzazione schedulata ogni pochi minuti o ogni notte è più che sufficiente. Conviene riservare il tempo reale ai dati dove il ritardo ha un costo concreto — tipicamente le giacenze durante le vendite — e schedulare tutto il resto."
  - q: "Cosa succede se il mio gestionale non ha API documentate?"
    a: "È lo scenario più comune con i gestionali datati, e non blocca il progetto. Le strade sono tre: usare eventuali funzioni di import/export file (CSV, XML) con una sincronizzazione schedulata; accedere direttamente al database del gestionale in lettura, se il fornitore lo consente; oppure far sviluppare un connettore dedicato. È il punto da chiarire per primo in ogni valutazione, perché sposta il costo più di qualsiasi altra scelta."
---

**TL;DR.** Quando gestionale, CRM ed e-commerce non si parlano, qualcuno in azienda passa le giornate a reinserire gli stessi dati a mano — e ordini, giacenze e anagrafiche finiscono per non coincidere mai. Le API servono esattamente a questo: far viaggiare i dati tra i sistemi secondo regole definite, senza digitazione manuale. Un'integrazione tra due sistemi con API documentate parte da €4.000–€10.000; scenari con più sistemi e sincronizzazione bidirezionale salgono a €12.000–€30.000. Il costo non lo fa la connessione tecnica, ma tre decisioni: integrazione diretta o middleware, tempo reale o schedulata, e — la più pesante — la qualità delle API dei sistemi che devi collegare.

## Il vero costo di sistemi che non si parlano

Il sintomo è sempre lo stesso: un ordine arriva sull'e-commerce, e qualcuno lo ricopia nel gestionale. Un cliente nuovo entra dal sito, e qualcuno lo reinserisce nel CRM. Una giacenza cambia in magazzino, e sullo shop resta quella vecchia finché non la si aggiorna a mano. Ogni ri-digitazione è tempo perso e un'occasione in più di sbagliare — e più i sistemi crescono, più questo lavoro invisibile pesa.

Il costo non è solo il tempo: è il **disallineamento**. Quando la stessa informazione vive in tre posti aggiornati a mano in momenti diversi, nessuno dei tre è affidabile. Vendi qualcosa che non hai a magazzino, spedisci a un indirizzo vecchio, mandi al reparto ordini un dato che il commerciale ha già cambiato nel CRM. L'integrazione via API elimina la ri-digitazione e — soprattutto — stabilisce quale sistema è la fonte di verità per ogni dato.

## Come funziona un'integrazione via API

Un'API è, in pratica, la porta d'accesso che un software espone perché altri programmi possano leggere e scrivere i suoi dati in modo controllato. Integrare due sistemi significa costruire un livello che legge da uno e scrive nell'altro secondo regole precise: *quando arriva un ordine sull'e-commerce, crealo nel gestionale*; *quando cambia una giacenza nel gestionale, aggiornala sullo shop*.

La connessione tecnica, quando entrambi i sistemi hanno API moderne, è la parte lineare. Il lavoro vero sta nel definire tre cose per ogni flusso: **cosa** sincronizzare (quali campi), in **quale direzione** (da A a B, o in entrambi i sensi) e cosa fare in caso di **conflitto** (se lo stesso dato cambia da due parti nello stesso momento, chi vince). È lo stesso tipo di ragionamento che serve per gestire la [sincronizzazione dei dati e i conflitti in un'app offline-first](/blog/sync-engine-conflitti-app-offline-first): il problema non è muovere i dati, è decidere quale versione è quella giusta. Questo tipo di lavoro è il cuore dello [sviluppo di backend e integrazioni con sistemi terzi](/servizi/backend-e-api).

Queste fondamenta stanno diventando decisive anche nell'[agentic commerce](/blog/agentic-commerce-ucp-ecommerce-ai): un agente può preparare un acquisto soltanto se catalogo, prezzi, disponibilità e checkout espongono contratti affidabili.

## Integrazione diretta o middleware

Con due soli sistemi da collegare, l'integrazione **diretta** (punto-punto) è la scelta giusta: più semplice, più economica, meno cose che si rompono. Il problema nasce quando i sistemi crescono. Collegare quattro sistemi punto-punto significa potenzialmente sei connessioni separate da mantenere, ognuna con le sue regole: un groviglio che diventa ingestibile in fretta.

Da tre sistemi in su conviene valutare un **middleware**: un livello centrale a cui ogni sistema si aggancia una volta sola. Le regole vivono in un posto solo, e aggiungere un nuovo sistema domani costa una connessione, non N. È una decisione di [architettura](/servizi/architettura-e-scalabilita), e va presa all'inizio: partire diretto "tanto poi vediamo" e ritrovarsi con sei integrazioni intrecciate è uno dei modi più comuni di pagare due volte lo stesso lavoro. La regola pratica: due sistemi, diretto; tre o più, middleware.

## Tempo reale o schedulata: non ti serve sempre l'istantaneo

"Voglio tutto sincronizzato in tempo reale" è la richiesta istintiva, ed è quasi sempre più costosa del necessario. Il tempo reale (via webhook, quando un sistema notifica l'altro nell'istante in cui un dato cambia) è più caro da costruire e più fragile da mantenere. E per la maggior parte dei dati non serve: un'anagrafica cliente o un listino aggiornati ogni pochi minuti, o anche ogni notte, vanno benissimo.

Il criterio è il costo del ritardo. Riserva il tempo reale ai dati dove un ritardo ha una conseguenza concreta — tipicamente le **giacenze durante le vendite**, dove vendere qualcosa che non hai è un danno immediato — e sincronizza tutto il resto in modo schedulato. Distinguere i due casi, invece di trattare tutto come urgente, è una delle leve che abbassano di più il costo di un'integrazione senza toglierti nulla di utile. Spesso questi flussi schedulati sono, a tutti gli effetti, [automazioni di processo](/automazione-processi-aziendali) che tolgono lavoro manuale ripetitivo alle persone.

## Quando il gestionale non ha API

È lo scenario più frequente con i gestionali più datati, e non manda all'aria il progetto: sposta solo dove va speso il budget. Le strade sono tre. La prima è usare le funzioni di **import/export file** (CSV, XML) che quasi tutti i gestionali hanno, con una sincronizzazione schedulata a scambiarsi i file. La seconda è accedere **direttamente al database** del gestionale in lettura, quando il fornitore lo consente. La terza è far sviluppare un **connettore dedicato**.

Qual è la strada giusta dipende dal singolo gestionale, ma il punto va chiarito per primo in qualsiasi valutazione: la qualità (o l'assenza) delle API dei sistemi da collegare sposta il costo più di qualunque altra scelta. Un e-commerce moderno con ottime API collegato a un gestionale chiuso e senza documentazione: il conto lo fa il secondo, non il primo.

## In sintesi

Integrare gestionale, CRM ed e-commerce non è un vezzo tecnico: è togliere dalle spalle delle persone la ri-digitazione manuale e rendere finalmente affidabile ogni dato, stabilendo dove vive la verità. La spesa non la determina la connessione in sé, ma tre decisioni prese bene all'inizio — diretto o middleware, tempo reale o schedulato, e come gestire i sistemi chiusi. Prese male, si pagano per anni in integrazioni fragili da rincorrere.

Se hai sistemi che non si parlano e qualcuno in azienda che ricopia dati a mano, posso aiutarti a mappare i flussi, valutare le API dei tuoi sistemi e disegnare l'integrazione giusta per la tua scala. Approfondisci i servizi di [Backend & API](/servizi/backend-e-api) e [Architettura & Scalabilità](/servizi/architettura-e-scalabilita), oppure — se prima vuoi capire da dove partire — valuta una sessione di [Tech Consulting](/servizi/tech-consulting). Per un confronto sul tuo caso, [scrivimi qui](/contatti).
