---
title: "Autenticazione e gestione dei ruoli in React: come impostarla senza illudersi"
date: "2026-07-29"
author: "Federico Tassara"
category: "Sviluppo Web"
excerpt: "Dove tenere il token, perché le route protette lato client non sono un controllo di sicurezza, e quando conviene passare da ruoli a permessi. Le decisioni che contano in un'app React con più livelli di accesso."
tags: ["react", "autenticazione", "sicurezza", "ruoli", "frontend", "architettura"]
faq:
  - q: "Dove conviene salvare il token di autenticazione in un'app React?"
    a: "Un cookie httpOnly impostato dal server resta la scelta più solida, perché il JavaScript della pagina non può leggerlo e un attacco XSS non riesce a esfiltrarlo. localStorage è più comodo e funziona bene con backend separati, ma qualsiasi script che gira nella pagina lo legge. Se scegli localStorage, la protezione da XSS diventa un requisito, non una buona pratica."
  - q: "Le route protette in React sono una misura di sicurezza?"
    a: "No. Tutto il codice del frontend arriva al browser dell'utente, quindi chiunque può leggerlo, modificarlo e raggiungere qualsiasi schermata. Le route protette servono a evitare che una persona autorizzata veda pagine che non le servono. L'autorizzazione vera la applica il server su ogni singola richiesta."
  - q: "Meglio gestire ruoli o permessi?"
    a: "I ruoli bastano finché sono pochi e stabili (admin, utente, ospite). Quando ti ritrovi a creare ruoli come admin-che-però-non-vede-i-costi, il modello a ruoli ha già ceduto: conviene passare a permessi granulari, con i ruoli come semplici raccolte di permessi. Il passaggio a metà progetto tocca ogni controllo di accesso."
  - q: "Come si gestisce la scadenza della sessione senza far perdere lavoro all'utente?"
    a: "Con un token di accesso a vita breve e un refresh token a vita lunga, e un solo punto nel codice che intercetta le risposte 401 e tenta il refresh prima di riproporre la richiesta. Il punto delicato sono le richieste parallele: se cinque chiamate falliscono insieme, devono attendere un unico refresh invece di lanciarne cinque."
---

**TL;DR.** Tre decisioni valgono più di tutte le altre in un'app React con livelli di accesso:

- il server autorizza, il frontend nasconde
- il posto in cui salvi il token determina a quali attacchi sei esposto
- il modello a ruoli regge finché i ruoli restano pochi

La terza è quella che le persone rimandano, ed è quella che costa di più quando torni a metterci mano.

Un'app con login sembra un problema risolto. Recuperi un token, lo salvi, lo mandi a ogni richiesta, nascondi qualche voce di menu. Funziona, e continua a funzionare finché qualcuno chiede un quarto livello di accesso, o finché un auditor domanda dove venga applicato il controllo.

## Il server autorizza, il frontend nasconde

Il codice React che scrivi finisce nel browser di chi usa l'app. Ogni controllo che metti lì, chi vuole può aggirarlo: basta modificare la risposta di una chiamata, cambiare una variabile negli strumenti di sviluppo o richiedere la rotta a mano.

Questo rende ogni controllo lato client una scelta di interfaccia. Nascondere il pulsante "elimina" a chi non può eliminare evita confusione e riduce gli errori. Impedire l'eliminazione è compito dell'endpoint che riceve la richiesta.

La regola che applico: ogni endpoint verifica in autonomia chi sta chiamando e cosa può fare, senza fidarsi di quello che il client dichiara. Il frontend replica quelle stesse regole per motivi di usabilità, e le due implementazioni vanno tenute allineate.

Il modo per accorgersi di quando divergono è provare a chiamare gli endpoint sensibili con il token di un utente base. Se qualcuno risponde 200, hai trovato un buco che l'interfaccia stava coprendo.

## Dove salvare il token

Le due opzioni portano rischi diversi, e la scelta dipende da come è fatto il tuo backend.

Un cookie httpOnly viene impostato dal server e il JavaScript della pagina non lo legge. Uno script iniettato in un attacco XSS non riesce a portarselo via. Il prezzo è che devi difenderti dal CSRF (con SameSite e un token dedicato) e che la configurazione si complica se frontend e backend stanno su domini diversi.

localStorage semplifica tutto il resto: lo leggi da qualsiasi punto del codice, funziona senza attriti con backend separati, non impone nulla al server. Il prezzo è che qualsiasi codice in esecuzione nella pagina lo legge, incluse le dipendenze che hai installato senza guardarle. Una libreria compromessa nella catena di build ti svuota le sessioni.

Fra le due scelgo il cookie httpOnly quando il backend è mio e posso configurarlo. Passo a localStorage quando l'API è di terze parti o quando l'architettura non lascia alternative, e in quel caso metto a budget la protezione da XSS: Content Security Policy stretta, sanificazione di ogni contenuto che arriva dagli utenti, revisione delle dipendenze.

C'è una terza via che vedo consigliare e che sconsiglio: tenere il token solo in memoria, in uno stato React. Resiste a XSS meglio delle altre, e obbliga l'utente a rifare il login a ogni ricarica di pagina. In pratica le persone chiedono di cambiarlo dopo una settimana.

## Ruoli o permessi

Il modello a ruoli assegna a ogni utente un'etichetta e collega i controlli a quell'etichetta. Chi è `admin` vede tutto, chi è `editor` vede una parte. Regge bene con tre o quattro ruoli stabili.

Cede quando arrivano le eccezioni. Il cliente chiede un amministratore che però non veda i dati economici, poi un editor che possa pubblicare solo in una sezione. A quel punto le persone creano ruoli composti, con nomi che descrivono l'eccezione invece del mestiere, e ogni controllo nel codice diventa una lista di ruoli ammessi che nessuno osa più toccare.

Il modello a permessi separa le due cose: definisci azioni granulari (`fatture.leggi`, `fatture.esporta`, `utenti.invita`) e il ruolo diventa una raccolta di permessi. I controlli nel codice interrogano il permesso, mai il ruolo. Aggiungere un'eccezione diventa comporre una raccolta diversa, senza toccare il codice.

Il costo del passaggio a progetto avviato è alto, perché ogni punto in cui hai scritto un controllo sul ruolo va riscritto. La domanda da porsi all'inizio: i livelli di accesso resteranno tre per sempre, o il cliente comincerà a chiedere sfumature? Se hai il dubbio, partire con i permessi costa poco più.

## Le route protette e il momento in cui non sai ancora nulla

Il componente che protegge una rotta deve gestire tre stati, e uno viene dimenticato con regolarità: l'utente è autenticato, l'utente non lo è, e non lo sai ancora perché la verifica della sessione è in corso.

Se tratti il terzo stato come "non autenticato", chi ricarica una pagina interna viene sbattuto al login per una frazione di secondo prima di tornare dove era. Se l'app fa anche un redirect, perde il punto in cui si trovava.

La gestione corretta mostra uno stato di caricamento finché la verifica non risponde, e conserva la rotta richiesta per riportarci la persona dopo il login. Vale anche per il caso opposto: chi ha già una sessione valida e apre la pagina di login va mandato dentro, senza fargli rifare le credenziali.

## Il refresh e le richieste parallele

Un token di accesso a vita breve limita i danni se qualcuno lo intercetta. Il refresh token, a vita più lunga, serve a ottenerne uno nuovo senza chiedere di nuovo le credenziali.

Il meccanismo si concentra in un punto solo: un interceptor sul client HTTP che riconosce la risposta 401, tenta il refresh e ripete la richiesta originale. Sparso in giro per il codice diventa impossibile da mantenere.

Il caso che rompe le implementazioni ingenue sono le richieste parallele. Una schermata ne lancia cinque insieme, il token scade, tutte e cinque ricevono 401 e tutte e cinque avviano un refresh. Quattro di quei refresh useranno un token già consumato e falliranno, e l'utente si ritrova al login senza motivo. L'interceptor deve accorgersi che un refresh è già in corso e mettere in coda le altre richieste in attesa dello stesso risultato.

## Gli errori che trovo negli audit

Quattro ricorrono più degli altri.

Il ruolo letto dal token e usato per autorizzare sul server senza rileggerlo dal database: se revochi i privilegi a qualcuno, quella persona resta amministratore finché il suo token non scade. Il logout che cancella il token dal browser ma lascia la sessione valida sul server, per cui un token copiato prima continua a funzionare. I dati sensibili restituiti dall'API a tutti, con il filtro applicato dal frontend. E i controlli di accesso senza test, che nessuno verifica finché un cliente non vede quello che non doveva.

## Conclusione

L'autenticazione in React ha una parte visibile facile e una parte invisibile che decide se il sistema tiene. Il token va messo dove i rischi che accetti sono quelli che sai gestire, il modello dei permessi va scelto guardando a come cresceranno le richieste, e l'autorizzazione resta un lavoro del server anche quando l'interfaccia la replica.

Se stai impostando un'app con più livelli di accesso e vuoi una lettura del modello prima di scrivere il codice, oppure hai un'app già in produzione da verificare, [scrivimi](/contatti). Vedi anche come affronto [architettura e scalabilità](/servizi/architettura-e-scalabilita) e cosa guardo in un [audit tecnico del software](/blog/audit-tecnico-software-cosa-controllare).
