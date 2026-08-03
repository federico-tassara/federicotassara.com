---
title: "Cyber Resilience Act: cosa cambia per chi sviluppa software"
date: "2026-08-03"
updatedAt: "2026-08-03"
author: "Federico Tassara"
category: "Consulenza"
excerpt: "Il Cyber Resilience Act porta obblighi tecnici e segnalazioni dal 2026. Una checklist per produttori e fornitori di software."
tags: ["Cyber Resilience Act", "CRA", "cybersecurity", "software", "SBOM", "compliance"]
faq:
  - q: "Il Cyber Resilience Act si applica anche al software?"
    a: "Sì. Il CRA copre hardware e software immessi sul mercato dell'Unione come prodotti con elementi digitali, compresi componenti venduti separatamente. Non ogni servizio SaaS rientra automaticamente: va verificato se il servizio è parte necessaria del funzionamento di un prodotto con elementi digitali e sotto la responsabilità del produttore."
  - q: "Qual è la prima scadenza operativa del CRA?"
    a: "Dall'11 settembre 2026 i produttori devono segnalare vulnerabilità attivamente sfruttate e incidenti gravi. La prima comunicazione va inviata entro 24 ore dalla conoscenza dell'evento e quella principale entro 72 ore. Le disposizioni principali del Regolamento si applicheranno dall'11 dicembre 2027."
  - q: "CRA e NIS2 sono la stessa cosa?"
    a: "No. La NIS2 riguarda la sicurezza e la continuità delle organizzazioni che rientrano nel suo perimetro; il CRA riguarda i prodotti hardware e software messi sul mercato europeo. Un'azienda può essere soggetta a entrambi: alla NIS2 come organizzazione e al CRA come produttore o distributore di software."
  - q: "Il CRA obbliga a creare una SBOM?"
    a: "Il Regolamento richiede al produttore di identificare e documentare i componenti e le vulnerabilità del prodotto, anche tramite una Software Bill of Materials in formato leggibile dalle macchine. La SBOM è però solo l'inventario: servono anche monitoraggio, valutazione, correzione e comunicazione delle vulnerabilità."
  - q: "Un progetto open source è escluso dal Cyber Resilience Act?"
    a: "Il software libero distribuito fuori da un'attività commerciale è escluso. La sola pubblicazione con licenza open source, però, non rende automaticamente escluso un prodotto commercializzato. Il CRA prevede inoltre obblighi specifici, più limitati, per gli open-source software steward."
---

**TL;DR.** Il Cyber Resilience Act riguarda anche il software. Dall'**11 settembre 2026** partono le segnalazioni obbligatorie per vulnerabilità attivamente sfruttate e incidenti gravi; dall'**11 dicembre 2027** si applica il corpo principale del Regolamento. Per prepararsi non basta attivare uno scanner delle dipendenze: servono responsabilità chiare, inventario dei componenti, gestione delle vulnerabilità, aggiornamenti, logging e prove verificabili del lavoro svolto.

La [Commissione europea riassume il perimetro del CRA](https://digital-strategy.ec.europa.eu/en/policies/cra-summary) come l'insieme dei prodotti hardware e software messi a disposizione sul mercato dell'Unione. Questo articolo guarda alla parte tecnica. Non è un parere legale: per classificare prodotto e ruolo economico serve un professionista che lavori sul Regolamento; una volta chiarito il perimetro, però, gran parte dell'adeguamento finisce nel backlog del prodotto e nel processo di sviluppo.

## La scadenza vicina non è il 2027

Il CRA è entrato in vigore il 10 dicembre 2024 e sarà pienamente applicabile dall'11 dicembre 2027. Fermarsi a questa data porta a una conclusione sbagliata: “abbiamo ancora più di un anno”.

Dall'**11 settembre 2026** si applica l'articolo 14. Un produttore che viene a conoscenza di una vulnerabilità attivamente sfruttata o di un incidente grave che incide sulla sicurezza del prodotto deve usare la Single Reporting Platform gestita da ENISA. Le finestre indicate dalla Commissione sono strette:

- primo avviso entro **24 ore**;
- notifica principale entro **72 ore**;
- relazione finale entro 14 giorni dalla disponibilità di una misura correttiva, per le vulnerabilità;
- relazione finale entro un mese dalla notifica principale, per gli incidenti gravi.

La [pagina ufficiale sulle segnalazioni CRA](https://digital-strategy.ec.europa.eu/en/policies/cra-reporting) precisa anche un dettaglio facile da perdere: l'obbligo riguarda i prodotti messi a disposizione sul mercato, compresi quelli già immessi prima della piena applicazione del dicembre 2027.

Ventiquattro ore non sono il tempo per capire chi deve occuparsene. Quando arriva un incidente, il canale di escalation, le persone responsabili e le informazioni da raccogliere devono esistere già.

## Prima domanda: stai vendendo un prodotto digitale?

Il CRA usa l'espressione “prodotto con elementi digitali”. Dentro ci sono software, hardware, componenti commercializzati separatamente e le soluzioni di elaborazione remota senza le quali il prodotto non svolgerebbe una delle sue funzioni.

Per un'azienda software, alcuni casi sono abbastanza leggibili:

- un'applicazione desktop venduta con il proprio marchio è un prodotto;
- un firmware o una libreria commercializzata come componente può essere un prodotto;
- un dispositivo con app e backend necessari al suo funzionamento va valutato come insieme;
- un software gratuito distribuito nel corso di un'attività commerciale non è escluso solo perché il prezzo è zero.

Il SaaS puro richiede più attenzione. Il CRA non trasforma automaticamente ogni servizio cloud in un prodotto, ma può includere il “remote data processing” progettato dal produttore quando è necessario al funzionamento del prodotto. La distinzione dipende dall'architettura e dal modo in cui la soluzione viene messa sul mercato, non dall'etichetta scritta sul preventivo.

La seconda domanda è il ruolo: produttore, importatore o distributore. Chi sviluppa o fa sviluppare un prodotto e lo commercializza con il proprio nome è il produttore, anche quando metà dello stack arriva da fornitori esterni. Delegare il codice non delega automaticamente la responsabilità.

## CRA e NIS2: due perimetri che si possono sovrapporre

La [NIS2](/blog/nis2-software-azienda-cosa-controllare) guarda all'organizzazione: gestione del rischio, continuità operativa, incidenti e catena di fornitura dei soggetti inclusi. Il CRA guarda al prodotto che entra nel mercato europeo.

Una società può trovarsi in entrambi i perimetri. Per esempio, un produttore di software industriale può avere obblighi NIS2 per la propria organizzazione e obblighi CRA sul prodotto venduto. I controlli si riusano, ma le evidenze non sono identiche: un piano di continuità aziendale non sostituisce la documentazione tecnica del prodotto; una scansione del repository non sostituisce una procedura di gestione degli incidenti.

Tenere separati i due piani evita sia duplicazioni sia false sicurezze.

## Cosa cambia nel ciclo di sviluppo

Il CRA porta la sicurezza dentro il ciclo di vita del prodotto. La Commissione elenca, tra gli obblighi del produttore, una valutazione del rischio cyber che accompagni pianificazione, progettazione, sviluppo, produzione, consegna e manutenzione. Non è un PDF da scrivere alla fine: deve spiegare perché alcune misure sono state scelte e altre no.

Tradotto nel lavoro quotidiano, significa almeno sette cantieri.

### 1. Inventario del software e SBOM

Devi sapere quali componenti finiscono in ogni release, in quale versione e con quale provenienza. La SBOM rende l'inventario leggibile dalle macchine, ma non risolve il problema da sola.

Un file generato in CI e poi dimenticato non dice:

- quale versione del prodotto contiene il componente vulnerabile;
- se quel componente è effettivamente raggiungibile;
- chi deve valutare l'impatto;
- entro quando va rilasciata la correzione;
- quali clienti devono essere avvisati.

Il valore nasce dal collegamento tra SBOM, release, advisory e processo di patching. È la stessa ragione per cui una buona [struttura del backend](/blog/best-practice-structurare-node-express) riduce il rischio: sapere dove vive una dipendenza accorcia il tempo tra segnalazione e correzione.

### 2. Un processo di vulnerability handling

Serve un punto pubblico e monitorato dove segnalare vulnerabilità, insieme a una procedura interna. Chi riceve la segnalazione? Chi stabilisce gravità e sfruttabilità? Chi decide il rilascio urgente? Chi comunica con i clienti?

Per prodotti piccoli non serve costruire un reparto PSIRT. Serve però che il flusso esista, abbia un proprietario e venga provato. Una casella security@ ignorata è peggio dell'assenza: crea l'illusione di avere un processo.

### 3. Aggiornamenti e periodo di supporto

Il produttore deve dichiarare il periodo durante il quale gestirà le vulnerabilità e indicarne chiaramente la fine. Questa scelta tocca contratti, architettura e budget.

Se il prodotto non ha un meccanismo affidabile di aggiornamento, ogni patch diventa un progetto. Se non sai quante installazioni esistono e quali versioni usano, non puoi stimare l'esposizione. Se supporti release vecchie senza una policy, il debito tecnico diventa anche rischio di conformità.

### 4. Configurazioni sicure per impostazione predefinita

Password standard, endpoint amministrativi esposti, privilegi eccessivi e funzioni diagnostiche lasciate attive sono problemi di prodotto, non errori dell'utente. Le impostazioni iniziali devono ridurre la superficie d'attacco.

Questo include autorizzazioni e separazione dei ruoli. Un controllo presente solo nell'interfaccia non basta: come spiego nell'articolo su [autenticazione e ruoli in React](/blog/gestione-autenticazione-ruoli-react), la decisione finale deve essere applicata dal backend.

### 5. Evidenze nella pipeline di rilascio

Test, scansioni, code review e approvazioni devono lasciare una traccia. Non per accumulare screenshot, ma per poter ricostruire quale controllo è stato eseguito su una determinata release.

Una pipeline utile collega almeno:

- commit e artefatto distribuito;
- risultati dei test;
- dipendenze e SBOM;
- eccezioni di sicurezza approvate;
- persona o processo che ha autorizzato il rilascio.

### 6. Logging che aiuti durante un incidente

Il logging non deve registrare tutto. Deve consentire di capire se una vulnerabilità è stata sfruttata, quali account o dati sono coinvolti e quali versioni del prodotto risultano esposte. Log senza identificatori coerenti o conservati per pochi giorni raramente rispondono alle domande giuste.

Qui un [audit tecnico del software](/blog/audit-tecnico-software-cosa-controllare) è più utile di una checklist generica: parte dai flussi e dagli asset reali, non da un catalogo astratto di controlli.

### 7. Un runbook per le 24 ore

Il runbook deve stare vicino al sistema di incident management e indicare, senza ambiguità:

1. chi apre l'incidente;
2. quali dati tecnici raccogliere;
3. chi valuta se l'evento ricade nell'articolo 14;
4. chi prepara la segnalazione;
5. chi approva e invia;
6. come vengono conservati aggiornamenti ed evidenze.

La decisione giuridica non va lasciata allo sviluppatore di turno. La raccolta tecnica, invece, sì: se non è predisposta, neppure il legale può valutare in tempo.

## Open source: l'esclusione non è una scorciatoia

Il software libero sviluppato o fornito fuori da un'attività commerciale è escluso dal perimetro. Non significa che basti pubblicare il repository con una licenza open source.

Il Regolamento distingue il progetto non commerciale, il prodotto commercializzato e l'open-source software steward che sostiene stabilmente progetti destinati ad attività commerciali. Inoltre, chi incorpora componenti di terzi nel proprio prodotto deve esercitare la dovuta diligenza: la dipendenza open source rimane parte della superficie d'attacco del prodotto finale.

Per chi produce software, la domanda utile non è “questa libreria è open source?”, ma “come rilevo, valuto e correggo le vulnerabilità che introduce?”.

## Una checklist che può partire questa settimana

Non serve attendere la classificazione definitiva di ogni dettaglio per iniziare il lavoro reversibile e utile:

1. elenca prodotti, versioni supportate e modalità di distribuzione;
2. chiarisci con il consulente legale ruolo e perimetro;
3. associa repository, pipeline e dipendenze a ogni prodotto;
4. genera una SBOM per release e verifica che sia riproducibile;
5. assegna un proprietario al processo vulnerabilità;
6. prova il runbook di segnalazione su un incidente simulato;
7. documenta periodo e canali di aggiornamento;
8. individua le release che non puoi aggiornare in modo affidabile;
9. porta i controlli critici dentro la pipeline;
10. conserva le evidenze insieme alla documentazione tecnica.

Il servizio di [Tech Consulting](/servizi/tech-consulting) può aiutare a trasformare il perimetro legale in un piano tecnico, mentre [Architettura e Scalabilità](/servizi/architettura-e-scalabilita) serve quando il problema è strutturale: aggiornamenti impossibili, autorizzazioni fragili, componenti non tracciati o log insufficienti.

## Il risultato da cercare

Essere pronti al CRA non significa avere una cartella chiamata compliance. Significa poter rispondere velocemente a quattro domande: quale prodotto è coinvolto, quali versioni sono esposte, chi prende la decisione e come raggiungiamo gli utenti con una correzione.

Se oggi queste risposte richiedono una settimana di messaggi e fogli Excel, il problema esiste già, anche senza una scadenza normativa. Sistemarlo prima dell'11 settembre riduce il rischio operativo e rende credibile qualunque dichiarazione di conformità futura.

Per esaminare il ciclo di rilascio e trasformare i gap in interventi ordinati per rischio, [scrivimi](/contatti).
