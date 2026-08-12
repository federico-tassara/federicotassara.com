---
title: "IT Wallet per aziende: integrazione in app e portali"
date: "2026-08-12"
updatedAt: "2026-08-12"
author: "Federico Tassara"
category: "Sviluppo web"
excerpt: "IT Wallet entra nei test con le aziende: cosa cambia per app, portali e servizi privati, tra credenziali, verifiche, privacy e integrazione."
tags: ["IT Wallet", "EUDI Wallet", "identità digitale", "eIDAS", "integrazioni", "app", "API"]
---

Se stai pensando a un pulsante “Entra con **IT Wallet**”, fermati un passo prima. Per usarlo, un'azienda deve essere riconosciuta nell'ecosistema, dichiarare quali attributi chiede e verificare la presentazione ricevuta. La patente visibile nell'app IO è la parte più nota del progetto, ma dice poco sul lavoro necessario dentro un portale o una web app.

Il 23 luglio 2026 il Dipartimento per la trasformazione digitale ha annunciato l'apertura dell'ambiente di test ai fornitori privati di wallet. Per chi sviluppa servizi digitali è un segnale concreto: vale la pena preparare casi d'uso e architettura. Non è ancora, invece, un login di produzione disponibile senza condizioni.

IT Wallet è noto soprattutto come la sezione “Documenti su IO”. Questa è però solo la prima esperienza visibile di un progetto più ampio. Il [Sistema IT-Wallet descritto dal Dipartimento](https://innovazione.gov.it/progetti/sistema-it-wallet/) prevede un portafoglio pubblico nell'app IO, portafogli privati e soggetti pubblici o privati capaci di ricevere attestati elettronici verificati.

Per aziende, SaaS e portali il vantaggio è molto pratico: l'utente potrà dimostrare un'informazione senza caricare una scansione o riscrivere un dato già certificato. Dietro quel passaggio breve ci sono identità, fiducia crittografica, consenso, minimizzazione dei dati e gestione dell'esito.

## Cosa è cambiato nel 2026

Il 23 luglio 2026 il Governo ha comunicato che l'[ambiente di test nazionale è aperto alle aziende private](https://innovazione.gov.it/notizie/comunicati-stampa/il-sistema-it-wallet-apre-ai-test-con-le-aziende-private/). L'ambiente, disponibile da maggio, usa dati non riferibili a cittadini reali e permette agli operatori di verificare l'interoperabilità delle proprie soluzioni con l'infrastruttura nazionale.

Il passaggio va letto con precisione. Non equivale all'apertura indiscriminata di un'API di produzione. Il comunicato riguarda in modo esplicito i fornitori privati di portafogli digitali e colloca la sperimentazione dentro un quadro normativo e tecnico ancora in consolidamento. Il Dipartimento indica inoltre che nuove funzionalità e apertura agli utenti seguono il completamento degli atti nazionali previsti dall'articolo 64-quater del Codice dell'Amministrazione Digitale.

Ci sono quindi tre livelli da non confondere:

1. **Documenti su IO**, già usato dai cittadini per alcune versioni digitali dei documenti;
2. **Sistema IT-Wallet**, l'ecosistema nazionale in costruzione;
3. **EUDI Wallet**, il quadro europeo verso cui il sistema italiano deve convergere.

Un'azienda interessata a ricevere credenziali dovrebbe chiarire tre cose: quale ruolo avrà, quali attributi le servono e quale componente li verificherà. Il pulsante viene dopo.

## Chi è la Relying Party

Nelle specifiche, il soggetto che si affida alle informazioni presentate dal wallet è chiamato **Relying Party**. Può essere un'azienda, una pubblica amministrazione o un altro soggetto che usa una credenziale per autenticare una persona o verificare un attributo.

Le [specifiche tecniche italiane per la Relying Party](https://italia.github.io/eid-wallet-it-docs/versione-corrente/it/relying-party-solution.html) descrivono una soluzione composta, a seconda del caso, da backend, servizi, configurazioni e applicazioni di verifica. È prevista anche la possibilità di usare un intermediario, ma l'intermediario non rende irrilevanti finalità, dati richiesti e responsabilità dell'azienda.

Prendiamo un portale che deve verificare l'età. Chiedere nome, data di nascita, indirizzo e copia del documento sarebbe eccessivo se al servizio basta sapere che l'utente ha superato una soglia. Esperienza, base giuridica e capacità tecnica della Relying Party vanno costruite intorno a quel requisito minimo.

## Quali casi d'uso hanno senso per le aziende

Il wallet diventa utile quando sostituisce una verifica ripetitiva, fragile o invasiva. Alcuni scenari potenziali sono:

- verifica di identità durante l'onboarding di un servizio;
- prova dell'età senza acquisire più dati del necessario;
- verifica di qualifiche, abilitazioni o appartenenza a una categoria;
- accesso a servizi riservati a residenti, studenti o professionisti;
- presentazione di attestati in presenza presso sportelli, strutture o varchi;
- precompilazione controllata di dati già verificati alla fonte.

Sono scenari possibili, non un catalogo già pronto. La disponibilità effettiva dipende dagli attestati ammessi, dal ruolo del soggetto, dalle regole di adesione e dalla fase del sistema. Prima di disegnare il flusso bisogna verificare che la credenziale prevista esista davvero nello scenario scelto.

Io partirei da una tabella come questa:

| Decisione del servizio | Attributo minimo | Perché serve | Cosa non acquisire |
|---|---|---|---|
| Consentire accesso ai maggiorenni | Esito sopra/sotto soglia | Requisito del servizio | Documento completo |
| Applicare una tariffa riservata | Appartenenza alla categoria | Calcolo dell'offerta | Dati non legati allo sconto |
| Abilitare una funzione professionale | Qualifica valida | Controllo dei permessi | Intero storico professionale |
| Precompilare un contratto | Dati identificativi necessari | Ridurre errori e reinserimenti | Attributi estranei al contratto |

Questa matrice impedisce che l'integrazione parta dalla tecnologia e finisca per raccogliere tutto ciò che il sistema riesce a restituire.

## Come funziona un'integrazione IT Wallet

Le specifiche correnti descrivono sia flussi remoti sia flussi di prossimità. Nella [presentazione remota degli attestati](https://italia.github.io/eid-wallet-it-docs/versione-corrente/it/credential-presentation.html), un portale o un'app richiede una presentazione al wallet; l'utente vede chi sta chiedendo quali informazioni e autorizza la condivisione; la Relying Party riceve e verifica il risultato.

Ad alto livello, il flusso è questo:

**Utente → portale o app → richiesta firmata → wallet → consenso → presentazione digitale → verifica backend → sessione o servizio**

Dietro questa sequenza ci sono responsabilità distinte.

### La Relying Party prepara la richiesta

La richiesta deve identificare il soggetto, gli attributi desiderati, lo stato della transazione e le informazioni necessarie a impedire riuso o manomissione. Nel flusso web possono esistere varianti sullo stesso dispositivo e tra dispositivi diversi, per esempio tramite un codice QR.

### Il wallet valuta fiducia e autorizzazione

Il wallet non dovrebbe rispondere a qualunque sito che chieda dati. Verifica l'identità della Relying Party, la catena di fiducia, le politiche applicabili e quali credenziali quel soggetto è autorizzato a richiedere. Poi mostra all'utente il soggetto richiedente e gli attributi coinvolti.

### Il backend verifica la presentazione

Ricevere un oggetto firmato non basta. Il backend deve controllare firma, emittente, validità, destinatario, stato della transazione, eventuale revoca e coerenza con la richiesta originaria. La decisione finale non può vivere soltanto nel frontend: vale lo stesso principio già discusso per [autenticazione e ruoli nelle applicazioni React](/blog/gestione-autenticazione-ruoli-react).

### Il prodotto decide cosa fare con l'esito

Una credenziale valida non dice automaticamente quale azione autorizzare. Il dominio applicativo deve trasformare l'esito in una decisione: aprire una sessione, mostrare una funzione, precompilare un campo o richiedere un controllo ulteriore. Identità digitale e autorizzazione applicativa rimangono due livelli diversi.

## IT Wallet non sostituisce tutta l'autenticazione

Un errore comune è trattare il wallet come sostituto universale di account, sessioni e permessi. Può identificare l'utente o dimostrare un attributo, ma il prodotto deve ancora gestire:

- collegamento tra credenziale e account esistente;
- sessione e scadenza dell'accesso;
- ruoli e permessi interni;
- dispositivi affidabili e segnali di rischio;
- revoca dell'account aziendale;
- operazioni sensibili che richiedono una nuova verifica.

In alcuni servizi la presentazione del wallet può essere sufficiente per una singola operazione. In altri crea o rafforza un'identità che continua a vivere nel sistema aziendale. Progettare questa distinzione evita account duplicati e autorizzazioni scollegate dalla realtà.

## I dati verificati non sono dati da conservare per forza

Uno dei vantaggi del wallet è poter verificare un'informazione senza trasformare ogni interazione in una raccolta documentale. Se il servizio deve sapere che una persona è maggiorenne, conservare la copia completa del documento può essere sproporzionato.

Per ogni attributo vanno decise almeno quattro cose:

1. perché viene richiesto;
2. se basta verificare l'esito o serve conservarne il valore;
3. per quanto tempo mantenere dato e prova della transazione;
4. chi può consultarli nel sistema aziendale.

I log tecnici meritano la stessa attenzione. Un log che replica tutte le credenziali ricevute crea un archivio parallelo di dati personali. È preferibile registrare identificatori di transazione, esito, versione delle regole e dettagli minimi utili ad audit e assistenza.

La privacy non è quindi un testo da aggiungere dopo l'integrazione. Determina payload, database, logging e interfaccia.

## Integrare direttamente o usare un intermediario

Le aziende potranno trovarsi davanti a tre modelli.

| Modello | Quando è sensato | Rischio principale |
|---|---|---|
| Integrazione diretta | Grande volume, competenze interne, controllo strategico | Complessità e manutenzione delle specifiche |
| Intermediario specializzato | Caso standard, time-to-market prioritario | Dipendenza, costi e portabilità |
| Architettura ibrida | Verifica delegata, regole e UX sotto controllo aziendale | Confini di responsabilità poco chiari |

Il prezzo per verifica è solo una voce. Contano anche esportazione dei dati, accesso ai log, residenza e trattamento delle informazioni, gestione delle chiavi, disponibilità del servizio, aggiornamenti delle specifiche e piano di uscita.

È lo stesso problema che emerge quando si deve [integrare un gestionale tramite API](/blog/integrare-gestionale-ecommerce-api): il connettore accelera il progetto, ma il processo e la qualità della decisione restano dell'azienda.

## Da dove partire, senza costruire troppo presto

Non serve aspettare l'apertura generale per chiarire il progetto. Queste attività restano utili anche se tempi o specifiche cambiano.

### 1. Selezionare un solo caso d'uso

Scegliere una verifica frequente, costosa o soggetta a errori. “Integrare IT Wallet” è troppo ampio; “verificare un requisito durante l'onboarding” è misurabile.

### 2. Definire il dato minimo

Separare ciò che serve alla decisione da ciò che sarebbe soltanto comodo avere. Coinvolgere privacy e legale prima di scrivere il payload.

### 3. Disegnare stato e fallback

Il servizio deve funzionare anche quando l'utente non possiede una credenziale compatibile, il wallet non risponde o la verifica fallisce. Il canale alternativo non deve diventare una scorciatoia insicura.

### 4. Isolare l'integrazione

Conviene confinare protocollo wallet e verifiche in un modulo backend. Se cambiano specifiche o fornitore, il resto del prodotto deve continuare a funzionare. Un servizio di [sviluppo backend e API](/servizi/backend-e-api) è il posto giusto per policy, verifica e audit.

### 5. Preparare sicurezza e osservabilità

Chiavi, certificati, nonce, callback e verifiche devono avere proprietari, rotazione e monitoraggio. I controlli richiesti dal [Cyber Resilience Act](/blog/cyber-resilience-act-software-obblighi-2026) e dalla [NIS2](/blog/nis2-software-azienda-cosa-controllare) non si sovrappongono automaticamente a IT Wallet, ma la disciplina operativa — inventario, logging, incidenti e responsabilità — è la stessa.

### 6. Testare accessibilità e comprensione

Il consenso non è reale se la schermata non chiarisce chi chiede cosa e perché. Flussi same-device, cross-device, QR e fallback vanno provati con persone e tecnologie assistive. L'[accessibilità di siti e app](/blog/accessibilita-sito-web-obblighi-eaa-2026) entra nell'architettura del percorso, non soltanto nei colori del pulsante.

## Cosa chiedere prima di approvare il progetto

Prima di acquistare una piattaforma o stimare un'integrazione, servono risposte verificabili:

- quale ruolo avrà l'azienda nell'ecosistema;
- quale attestato è disponibile per il caso d'uso;
- quali attributi verranno richiesti e conservati;
- quale flusso serve: web, mobile o prossimità;
- chi verifica firma, validità e revoca;
- come vengono gestite chiavi e certificati;
- quale alternativa esiste per gli utenti senza wallet;
- quali eventi finiscono nei log;
- come si aggiornano le specifiche senza bloccare il prodotto;
- cosa succede cambiando intermediario.

Se queste risposte mancano, non è ancora possibile produrre un preventivo credibile. Un mockup con “Entra con IT Wallet” mostra l'ultimo metro del percorso e nasconde quasi tutto il lavoro.

## Il criterio con cui deciderei

Se l'integrazione lascia invariati moduli, scansioni e controlli manuali, il badge IT Wallet non sta risolvendo nulla. Il risultato da cercare è un processo più corto, con meno dati raccolti e una verifica più affidabile.

Nel 2026 lavorerei quindi sul caso d'uso, seguirei specifiche e regole di adesione e terrei il prototipo isolato dal resto del prodotto. Solo dopo misurerei quanto lavoro manuale elimina. La [consulenza tecnica](/servizi/tech-consulting) può tradurre questo passaggio infrastrutturale in una scelta concreta: integrare ora, preparare il sistema o aspettare che lo scenario sia maturo.

Per valutare un caso d'uso IT Wallet in un portale, una web app o un'app mobile, puoi descriverlo nella [pagina contatti](/contatti).
