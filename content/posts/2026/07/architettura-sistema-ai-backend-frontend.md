---
title: "Architettura di un sistema con AI: come si dividono backend e frontend"
date: "2026-07-29"
author: "Federico Tassara"
category: "AI & Automazioni"
excerpt: "Dove mettere la chiamata al modello, come gestire latenza e streaming, chi controlla i costi e cosa fare quando il modello sbaglia. Le scelte architetturali che distinguono un prototipo AI da un sistema che regge in produzione."
tags: ["intelligenza artificiale", "architettura", "backend", "frontend", "llm", "api"]
faq:
  - q: "Posso chiamare un modello AI direttamente dal frontend?"
    a: "No, se la chiamata richiede una chiave API. Tutto quello che sta nel codice del browser è leggibile, quindi la chiave finisce nelle mani di chiunque apra gli strumenti di sviluppo e verrà usata a tue spese. La chiamata va fatta dal tuo server, che espone al frontend un endpoint tuo e tiene la chiave lato server."
  - q: "Quanto incide la latenza di un modello sull'esperienza utente?"
    a: "Molto più di una API tradizionale. Una risposta completa può richiedere da due a trenta secondi a seconda della lunghezza, contro i canonici duecento millisecondi di un endpoint normale. Lo streaming token per token non riduce il tempo totale, ma porta il primo carattere a schermo in meno di un secondo, e nella percezione dell'utente è quello che conta."
  - q: "Come si tengono sotto controllo i costi di un sistema basato su LLM?"
    a: "Il costo cresce con il numero di token in ingresso e in uscita, quindi va misurato per richiesta e attribuito all'utente che l'ha generata fin dal primo giorno. Servono limiti per utente, un tetto giornaliero complessivo e una cache per le richieste ripetute. Senza attribuzione, il primo mese di conto è una sorpresa che nessuno sa spiegare."
  - q: "Che differenza c'è fra un prototipo AI e un sistema in produzione?"
    a: "Il prototipo dimostra che il modello sa fare la cosa. La produzione richiede di gestire il caso in cui non la fa: risposte fuori formato, timeout, il servizio del fornitore non disponibile, contenuti inappropriati. Nella mia esperienza il salto fra i due stadi assorbe più lavoro della funzionalità stessa."
---

**TL;DR.** Un sistema con AI si distingue da una normale applicazione web su quattro fronti:

- la chiamata al modello sta sul server, sempre
- la latenza si misura in secondi, e cambia il modo in cui progetti l'interfaccia
- ogni richiesta ha un costo variabile che qualcuno deve attribuire
- il modello a volte sbaglia, e il sistema deve prevederlo invece di subirlo

Il prototipo che convince in demo ignora tutti e quattro. Il lavoro sta nel colmarli.

Prototipare una funzionalità AI oggi richiede un pomeriggio. Il risultato convince, il cliente approva, e poi comincia la parte che nessuno aveva stimato: rendere quella cosa affidabile per migliaia di richieste al giorno fatte da persone che non sanno cosa sia un prompt.

## La chiamata al modello sta sul server

La prima domanda architetturale ha una sola risposta corretta. Chiamare l'API del modello dal browser espone la chiave: il codice frontend arriva intero all'utente e nessuna offuscazione la nasconde. Chi la trova la usa a tue spese, e il conto lo scopri a fine mese.

Il tuo server espone un endpoint applicativo, riceve la richiesta dal frontend, la arricchisce con il contesto necessario e chiama il fornitore con la chiave che resta sul server. Il frontend non sa quale modello stai usando né come è fatto il prompt.

Questo porta con sé un vantaggio che va oltre la sicurezza: puoi cambiare fornitore o versione del modello senza rilasciare una nuova versione dell'app, e puoi mettere in mezzo controlli, limiti e registrazione delle richieste.

## Cosa cambia rispetto a un endpoint normale

Tre proprietà distinguono una chiamata a un modello da qualsiasi altra API che hai integrato.

La durata si misura in secondi invece che in millisecondi, e varia con la lunghezza della risposta. I timeout predefiniti di molte librerie HTTP stanno sotto quella soglia, e li scopri quando l'endpoint comincia a fallire sulle risposte lunghe.

La risposta cambia a parità di richiesta. Due chiamate identiche restituiscono testi diversi, quindi i test che confrontano l'output con una stringa attesa falliranno senza che nulla sia rotto. Verificare significa controllare proprietà (il JSON è valido, contiene i campi previsti, la lingua è quella giusta) invece di uguaglianze.

Il costo dipende dai token consumati, quindi cresce con la lunghezza del contesto che invii. Un endpoint tradizionale costa uguale a ogni chiamata, questo no.

## Lo streaming e cosa comporta

Aspettare quindici secondi davanti a uno spinner è l'esperienza peggiore che puoi offrire. Lo streaming, che consegna il testo mentre viene generato, non abbrevia il tempo totale, e porta il primo carattere a schermo in meno di un secondo.

Il costo di questa scelta si distribuisce su tutti i livelli. Il backend mantiene una connessione aperta e inoltra i pezzi man mano che arrivano. Il frontend accumula il testo parziale e lo rende via via. Chi gestisce l'infrastruttura deve verificare che nessun proxy o CDN accumuli la risposta prima di inoltrarla, perché a quel punto lo streaming si annulla e torni al comportamento di prima.

E serve gestire l'interruzione. Una connessione che cade a metà lascia una risposta parziale: il frontend deve distinguerla da una completa, e il backend deve fermare la generazione invece di continuare a pagare token per un testo che nessuno leggerà.

## Il controllo dei costi comincia il primo giorno

Il conto di un sistema basato su LLM cresce con l'uso, e senza misurazione nessuno sa spiegare perché. Tre meccanismi da mettere prima del rilascio, non dopo la prima bolletta.

Registra per ogni richiesta i token in ingresso e in uscita e collegali all'utente che l'ha generata. Serve a rispondere alla domanda "chi consuma" invece di guardare un totale.

Imposta limiti per utente e un tetto complessivo giornaliero. Un bug in un ciclo che chiama il modello mille volte al minuto è un incidente che si paga, e il limite lo trasforma in un errore.

Metti in cache le richieste che si ripetono. Nelle applicazioni reali una quota consistente delle domande è identica a qualcosa che hai già elaborato, e restituire il risultato salvato costa zero.

## I prompt sono codice

Il prompt determina il comportamento del sistema quanto il codice che lo circonda, e va trattato con la stessa serietà: versionato nel repository, non incollato in una stringa dentro una funzione né tenuto in un foglio condiviso.

La ragione pratica emerge alla prima modifica. Qualcuno aggiusta una frase per risolvere un caso, e ne rompe altri tre che nessuno riprova. Con i prompt versionati vedi cosa è cambiato e quando, e puoi tornare indietro.

Serve poi un insieme di casi di prova, anche solo venti o trenta esempi con l'esito atteso, da rieseguire a ogni modifica del prompt o cambio di modello. Non è una suite di test tradizionale e non dà risposte binarie, e ti dice se una modifica ha peggiorato le cose prima che lo scoprano gli utenti.

## Quando il modello sbaglia

Un sistema in produzione deve prevedere quattro modi di fallire, e la maggior parte dei prototipi non ne gestisce nessuno.

La risposta arriva fuori formato: hai chiesto un JSON e ricevi testo con il JSON dentro, o un campo mancante. Valida sempre la struttura prima di usarla, e prevedi un secondo tentativo con l'errore in ingresso.

Il fornitore non risponde o restituisce un errore di sovraccarico. Serve un criterio di ripetizione con attesa crescente e, per le funzionalità critiche, un modello alternativo di un altro fornitore.

Il contenuto è sbagliato ma plausibile. Qui la difesa non è tecnica: quando l'output influenza una decisione che conta, una persona deve poterlo verificare, e l'interfaccia deve dichiarare che il testo arriva da un modello.

L'utente prova a manipolare il comportamento con istruzioni nascoste nell'input. Se il prompt include contenuti che arrivano dall'esterno (un documento caricato, il testo di una pagina web), tratta quei contenuti come dati non affidabili e separali dalle istruzioni.

## Conclusione

L'architettura di un sistema con AI ricalca quella di qualsiasi applicazione web su gran parte dei livelli. Le differenze si concentrano in pochi punti: la chiave che resta sul server, la latenza che ridisegna l'interfaccia, il costo variabile da attribuire, e un componente che sbaglia in modi nuovi.

Chi salta questi quattro punti ottiene un prototipo. Chi li affronta ottiene qualcosa che si può rilasciare, e la distanza fra i due stadi supera quasi sempre la stima iniziale.

Se stai valutando come inserire una funzionalità AI in un prodotto esistente e vuoi capire dove sono i rischi prima di partire, [scrivimi](/contatti). Vedi anche come lavoro su [architettura e scalabilità](/servizi/architettura-e-scalabilita), oppure leggi cosa succede quando un [MVP generato con l'AI](/blog/mvp-generato-ai-debito-tecnico-industrializzare) va industrializzato.
