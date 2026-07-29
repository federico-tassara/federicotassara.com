---
title: "Notifiche push in React Native: cosa serve davvero per farle funzionare"
date: "2026-07-29"
author: "Federico Tassara"
category: "Sviluppo mobile"
excerpt: "Le notifiche push sembrano una funzionalità da mezza giornata e diventano una delle parti più fragili di un'app. Token, permessi, deep link e recapito non garantito: cosa considerare prima di metterle a preventivo."
tags: ["notifiche push", "react native", "mobile development", "firebase", "expo", "architettura"]
faq:
  - q: "Quanto costa implementare le notifiche push in un'app React Native?"
    a: "Per un'app con un backend già esistente, l'integrazione base richiede indicativamente 3-8 giornate di lavoro: setup APNs e FCM, gestione del ciclo di vita dei token, permessi, deep link e testing sui due sistemi operativi. Il costo cresce quando servono notifiche segmentate, rich media, o una logica di invio legata a eventi di business, perché a quel punto il lavoro si sposta sul backend più che sull'app."
  - q: "Meglio Expo Notifications o Firebase Cloud Messaging?"
    a: "Expo Notifications semplifica molto la fase iniziale e va bene per la maggior parte delle app business, perché astrae le differenze tra iOS e Android. Firebase Cloud Messaging conviene quando serve controllo fine sul payload, sulle notifiche silenziose o quando esiste già un'infrastruttura Firebase. La scelta va fatta all'inizio: migrare da uno all'altro a progetto avviato significa rifare la gestione dei token."
  - q: "Le notifiche push arrivano sempre?"
    a: "No, e va detto chiaramente a chi commissiona l'app. APNs e FCM non garantiscono il recapito: la notifica può essere ritardata o scartata se il dispositivo è spento a lungo, se la batteria è bassa, o per limitazioni di sistema sulle notifiche silenziose. Per questo una push non deve mai essere l'unico canale con cui un'informazione critica raggiunge l'utente."
  - q: "Servono account sviluppatore a pagamento per le notifiche push?"
    a: "Su iOS sì: le notifiche push richiedono un Apple Developer Program attivo (99$/anno) per generare la chiave APNs, e non funzionano sul simulatore. Su Android il servizio FCM è gratuito e si testa su emulatore. È una differenza che vale la pena mettere in conto nei tempi, perché il lato iOS dipende da accessi e credenziali che spesso sono in mano al cliente."
---

**TL;DR.** Le notifiche push vengono sottostimate più di qualsiasi altra funzionalità mobile. Mostrare la notifica costa poche ore. Quello che rompe in produzione sta altrove:

- il **ciclo di vita del token**, che cambia senza preavviso e va tenuto allineato col backend
- il **permesso su iOS**, che puoi chiedere una volta sola
- il **deep link**, con tre percorsi di codice diversi a seconda di dove si trova l'app
- il **recapito non garantito**, che resta un vincolo di prodotto e non un difetto da correggere

Durante lo sviluppo nessuno di questi problemi si manifesta. Arrivano tutti dopo il rilascio, distribuiti nei mesi.

"Quanto ci vuole ad aggiungere le notifiche push?" è fra le domande più insidiose di un progetto mobile. Far comparire un messaggio sullo schermo richiede poche ore. Costruire un sistema che continui a funzionare per due anni tocca app, backend e processi del cliente, e la distanza fra le due cose emerge sempre dopo il rilascio.

## Due livelli che le stime confondono

Il primo livello riguarda il trasporto: portare un messaggio dal tuo server al dispositivo. Passa per i servizi di Apple (APNs) e Google (FCM), senza alternative. È standardizzato e sostanzialmente risolto.

Il secondo livello riguarda il prodotto: decidere cosa notificare, a chi, quando, e dove finisce l'utente quando tocca la notifica. Qui non c'è nulla di standard, e qui si concentra il lavoro.

Le stime misurano il primo livello e consegnano il secondo. Quando in analisi qualcuno dice "vogliamo mandare notifiche agli utenti", sta descrivendo logica di business (segmentazione, trigger, frequenza, preferenze) che vive nel [backend](/servizi/backend-e-api) e non in una libreria da installare nell'app.

## Il token è il punto fragile

Ogni installazione riceve un token che la identifica presso APNs o FCM. Per mandare una notifica il tuo server deve avere quel token. Sembra la parte semplice, e rompe per prima.

Il token cambia: quando l'utente reinstalla l'app, quando ripristina il dispositivo da un backup, quando cambia telefono, e può ruotare per conto suo. Se il backend conserva un token vecchio, l'invio parte, il servizio lo accetta, e nessuno riceve nulla. Nessun errore, nessun allarme. Gli utenti smettono di ricevere le notifiche uno alla volta, e te ne accorgi mesi dopo quando qualcuno segnala che "non arrivano più".

La regola che applico: registra il token a ogni avvio dell'app e non solo al primo, e associalo alla coppia utente-dispositivo. Chi ha telefono e tablet ha due token attivi e vuole ricevere su entrambi. Serve poi una procedura che elimini i token che i servizi segnalano come non validi, perché quella risposta APNs e FCM la restituiscono, e quasi nessuno la legge.

Resta il caso del logout. Se un utente esce dall'account e il token resta legato al suo profilo, la persona che userà quel dispositivo dopo riceverà notifiche destinate a qualcun altro. Quello che sembrava un dettaglio tecnico diventa una violazione di privacy.

## Il permesso su iOS si chiede una volta sola

iOS mostra il dialogo di richiesta una volta. Dopo un rifiuto l'app non può riproporlo: l'unica strada resta che la persona apra le impostazioni di sistema e lo attivi a mano, cosa che nessuno fa. In pratica un rifiuto chiude la porta.

Il momento della richiesta diventa quindi una decisione di prodotto. Chiederlo al primo avvio, prima che l'utente capisca cosa fa l'app, è il modo più efficace per farselo negare. Funziona meglio chiederlo dopo che la persona ha completato un'azione che genererà un aggiornamento a cui tiene, e anticiparlo con una schermata dell'app che spiega perché serve, così il dialogo di sistema raggiunge solo chi ha già detto di sì.

Android 13 ha introdotto un permesso esplicito a runtime, dove prima le notifiche erano attive per default. Le due piattaforme si sono avvicinate, e la penalità del rifiuto resta più dura su iOS.

## Il deep link ha tre percorsi diversi

Una notifica che apre l'app sulla schermata iniziale spreca il gesto. La persona l'ha toccata per vedere quella cosa specifica, e ripartire dalla home la costringe a cercarla da sola.

Portarla nel punto giusto significa gestire tre situazioni, che nel codice sono tre percorsi separati: app aperta in primo piano, app in background, app chiusa che la notifica sta avviando da zero. L'ultimo salta più spesso, perché al momento del tocco l'app deve ancora inizializzare stato, autenticazione e navigazione. Se il codice prova a navigare prima che il navigatore esista, non succede niente e la notifica sembra ignorata.

È anche il caso più difficile da notare mentre si sviluppa, quando l'app resta quasi sempre aperta e collegata al debugger.

## Il recapito non è garantito

Né APNs né FCM garantiscono la consegna. Una notifica può arrivare in ritardo o non arrivare: dispositivo spento a lungo, risparmio energetico, limitazioni di sistema. Le notifiche silenziose, quelle che risvegliano l'app per aggiornare dati in background, subiscono restrizioni più severe, e su iOS il sistema decide da solo se eseguirle.

Ne discende un vincolo di progettazione: **una push non può essere l'unico canale con cui un'informazione importante raggiunge l'utente**. Deve restare una scorciatoia verso uno stato che l'app sa comunque mostrare quando viene aperta. Se il modello dati dipende dall'arrivo di una notifica per essere corretto, l'architettura va rivista, e vale lo stesso principio di sincronizzazione che descrivo per le [app offline-first](/blog/app-offline-first-ambienti-senza-connessione).

Questo va spiegato a chi commissiona l'app prima del rilascio. "Le notifiche a volte non arrivano" percepito come difetto segnala una gestione delle aspettative mancata, e non un problema da risolvere in codice.

## Cosa dimenticano i preventivi

Tre voci spariscono dalle stime con regolarità.

Gli **accessi Apple**: le push su iOS richiedono un Apple Developer Program attivo e una chiave APNs generata dall'account del cliente, e non funzionano sul simulatore. Serve un dispositivo fisico per qualsiasi prova. Nella mia esperienza l'attesa per ottenere quelle credenziali supera il tempo di implementazione.

Il **backend di invio**: stabilire chi riceve cosa richiede query, segmentazione e uno storico degli invii per non mandare due volte la stessa notifica. È lavoro server, e cresce con la complessità delle regole.

Le **preferenze utente**: poter scegliere quali notifiche ricevere evita che le persone disattivino tutto dalle impostazioni di sistema, decisione che come il rifiuto del permesso non torna indietro.

## Conclusione

Le notifiche push formano un sottosistema, con una parte visibile poco impegnativa e un impianto sotto che decide se reggeranno. Il lavoro sta nel ciclo di vita dei token, nel momento in cui chiedi il permesso, nella navigazione a partire dalla notifica, e nell'accettare che il recapito resti fuori dal tuo controllo.

Messe a preventivo come funzionalità minore, diventano il punto in cui l'app si degrada senza fare rumore nei mesi dopo il rilascio. Progettate come sottosistema, riportano le persone dentro l'app meglio di qualsiasi altro strumento.

Se stai valutando un'app React Native e vuoi sapere quanto incidono le notifiche su tempi e costi, [scrivimi](/contatti) e guardo il caso specifico. Vedi anche come lavoro allo [sviluppo di app React Native](/sviluppatore-react-native-italia) o la [differenza tra app native e React Native](/blog/differenza-app-native-react-native).
