---
title: "Protocollo A2A: come comunicano gli agenti AI e differenze con MCP"
date: "2026-08-18"
updatedAt: "2026-08-18"
author: "Federico Tassara"
category: "AI & Automazioni"
excerpt: "Il protocollo A2A coordina agenti AI diversi. Ecco come funziona, cosa cambia rispetto a MCP e quali controlli servono per usarlo in azienda."
tags: ["protocollo A2A", "Agent2Agent", "agenti AI", "MCP", "architettura AI", "sicurezza AI"]
---

Il **protocollo A2A**, abbreviazione di Agent2Agent, permette a un agente AI di scoprire le capacità di un altro agente, affidargli un'attività e riceverne avanzamenti e risultati. Non sostituisce MCP: A2A coordina agenti tra loro, mentre MCP collega un agente a strumenti, API e dati.

Questa distinzione evita un errore comune: trattare ogni protocollo “per agenti” come se risolvesse lo stesso problema. In un sistema reale i due livelli possono convivere, ma vanno progettati con identità, permessi, tracciamento e limiti espliciti. Il protocollo rende interoperabili i messaggi; non rende automaticamente affidabile ciò che gli agenti fanno.

![Schema del protocollo A2A tra agenti e del collegamento MCP a strumenti e dati](/images/blog/protocollo-a2a-vs-mcp.svg)

## Che cos'è il protocollo A2A

A2A è un protocollo aperto per la collaborazione tra agenti costruiti con framework o fornitori differenti. La [documentazione ufficiale di Agent2Agent](https://a2a-protocol.org/latest/) descrive un modello in cui un agente “client” formula una richiesta e un agente “server” la svolge secondo le capacità che dichiara.

L'unità centrale non è una singola chiamata di funzione, ma un'attività che può durare nel tempo. Un agente che prepara un preventivo, per esempio, potrebbe dover consultare un catalogo, chiedere dati mancanti, attendere un'approvazione e infine produrre un documento. A2A deve quindi rappresentare stati, messaggi e risultati intermedi, non soltanto una coppia richiesta-risposta.

I concetti da conoscere sono pochi:

- l'**Agent Card** pubblica identità, endpoint, capacità e modalità supportate dall'agente;
- un **task** rappresenta il lavoro affidato e il suo stato;
- i **message** portano istruzioni, domande e contesto tra le parti;
- gli **artifact** sono i risultati prodotti, come un report o un file;
- trasporto e autenticazione definiscono come avviene lo scambio e chi può avviarlo.

L'Agent Card aiuta la scoperta, ma non dovrebbe diventare un catalogo indiscriminato di capacità interne. Pubblicare che un agente sa “gestire rimborsi” non significa che ogni client debba poter richiedere un rimborso. La capacità dichiarata e l'autorizzazione effettiva restano due controlli diversi.

## Perché se ne parla ora

L'interesse è cresciuto insieme al passaggio dai chatbot isolati a sistemi composti da più agenti specializzati. Il 17 agosto 2026 Axios ha [riportato il trasferimento di A2A alla Agentic AI Foundation](https://www.axios.com/2026/08/17/a2a-agentic-ai-foundation-open-ai-standards), una sede di governance collegata alla Linux Foundation. È un segnale di consolidamento dell'ecosistema, non la prova che ogni azienda debba adottare subito il protocollo.

Il problema che A2A affronta, però, è concreto. Senza un contratto condiviso, ogni collegamento tra un agente commerciale, uno amministrativo e uno logistico diventa un'integrazione proprietaria. Cambiare framework o aggiungere un fornitore significa riscrivere discovery, stati, gestione degli errori e formato dei risultati.

Un protocollo comune riduce questo accoppiamento. Il beneficio emerge soprattutto quando gli agenti appartengono a sistemi, team o organizzazioni diverse. Dentro una piccola applicazione monolitica, una semplice coda di lavoro e funzioni ben tipizzate possono essere sufficienti e più facili da governare.

## Come avviene una collaborazione A2A

Immaginiamo un agente commerciale che deve verificare se una richiesta cliente è realizzabile.

1. L'agente commerciale scopre, tramite Agent Card, che l'agente logistico può verificare disponibilità e tempi di consegna.
2. Invia un task con codici prodotto, quantità, destinazione e data richiesta.
3. L'agente logistico valida la richiesta. Se manca il CAP, restituisce una domanda invece di inventarlo.
4. Durante l'elaborazione aggiorna lo stato del task.
5. Restituisce un artifact strutturato con disponibilità, data stimata e vincoli.
6. L'agente commerciale usa il risultato per preparare una proposta, senza ricevere accesso diretto al gestionale logistico.

Questa separazione protegge i confini di dominio. L'agente commerciale chiede un risultato di business; non decide quali tabelle interrogare o come calcolare una data. L'agente logistico rimane responsabile delle proprie regole.

Il percorso può essere sincrono per attività brevi oppure asincrono per lavori lunghi. In entrambi i casi servono timeout, idempotenza e una strategia per i task rimasti in uno stato incerto. Ritentare ciecamente una richiesta di lettura può essere innocuo; ritentare una prenotazione o un pagamento può duplicare l'azione.

## A2A vs MCP: la differenza pratica

La [guida di Google ai protocolli per agenti](https://developers.googleblog.com/en/developers-guide-to-ai-agent-protocols/) colloca A2A e Model Context Protocol su livelli complementari. La differenza diventa più chiara osservando chi parla con chi.

| Aspetto | Protocollo A2A | MCP |
|---|---|---|
| Relazione | Agente ↔ agente | Applicazione AI ↔ strumenti e dati |
| Oggetto principale | Task, messaggi, stati, artifact | Tool, resource e prompt |
| Durata | Può gestire lavori lunghi e asincroni | Spesso singole operazioni o sessioni |
| Confine | Delega una capacità a un altro attore | Espone una capacità tecnica all'host AI |
| Esempio | “Verifica la fattibilità della consegna” | `leggi_disponibilita_sku` |
| Controllo da non dimenticare | Fiducia e autorizzazione tra agenti | Permessi dei tool e protezione dei dati |

Un agente logistico raggiunto tramite A2A potrebbe usare al proprio interno un [MCP Server per interrogare dati aziendali](/blog/mcp-server-agenti-ai-dati-aziendali). A2A gestisce la delega tra i due agenti; MCP fornisce all'agente logistico un accesso controllato a magazzino e spedizioni.

Non sempre servono entrambi. Se un unico agente deve soltanto leggere ordini e aprire ticket, MCP può bastare. Se due servizi deterministici devono scambiarsi eventi, una normale API o una coda rimangono spesso la soluzione migliore. A2A acquista senso quando è davvero utile conservare autonomia, descrizione delle capacità e ciclo di vita agentico ai due lati del confine.

## Un esempio aziendale completo

Consideriamo la gestione di una richiesta d'acquisto non standard. Il dipendente scrive: “servono venti monitor entro fine mese, con consegna in tre sedi e budget massimo definito”.

Un agente procurement raccoglie i requisiti e affida a tre agenti fornitore la preparazione di una proposta. Ogni agente fornitore risponde con prezzi, tempi e condizioni in un artifact strutturato. Il procurement confronta le offerte e prepara una raccomandazione. Prima di inviare l'ordine, chiede conferma a una persona autorizzata.

L'architettura separa quattro responsabilità:

- A2A coordina procurement e agenti fornitore;
- MCP può collegare ciascun agente ai propri cataloghi o gestionali;
- le API aziendali applicano prezzi, disponibilità e regole deterministiche;
- il workflow di approvazione conserva la decisione economica in capo a una persona.

Il modello può riassumere e confrontare, ma non dovrebbe inventare termini mancanti né superare il budget perché una frase nel catalogo gli ordina di farlo. Cataloghi, email e allegati sono input non attendibili: vanno trattati come dati, non come nuove istruzioni di sistema.

## Sicurezza: il protocollo non è una policy

L'interoperabilità amplia il numero di soggetti che possono chiedere lavoro a un agente. Per questo la progettazione deve partire dall'identità, non dal prompt.

### Identità e autorizzazioni

Ogni richiesta deve essere attribuibile a un client, a un utente o a un servizio. L'agente server deve verificare permessi sul singolo task e, quando necessario, sul singolo oggetto. Un token valido non equivale al diritto di vedere tutti i clienti o approvare qualsiasi importo.

Conviene applicare il privilegio minimo: capacità di lettura separate da quelle di scrittura, ambiti circoscritti e credenziali brevi. Le operazioni irreversibili richiedono conferme esplicite e controlli deterministici esterni al modello.

### Input non attendibile

Un agente può ricevere pagine, documenti e messaggi preparati da terzi. Questi contenuti potrebbero contenere prompt injection o dati manipolati. Prima di passarli a un altro agente occorre delimitare origine, tipo e livello di fiducia. Campi strutturati e allowlist riducono l'ambiguità rispetto a lunghi blocchi di testo libero.

### Tracciamento e diagnosi

Per ogni task vanno registrati almeno richiedente, agente esecutore, versione della policy, input rilevanti, tool invocati, cambi di stato, output e decisione umana. I log devono evitare segreti e dati personali non necessari, ma consentire di ricostruire perché un'azione è avvenuta.

Questo requisito si collega a una più ampia [architettura AI tra frontend e backend](/blog/architettura-sistema-ai-backend-frontend): l'interfaccia raccoglie intenzione e consenso, mentre il backend applica policy, conserva credenziali e genera audit trail.

### Limiti operativi

Un ciclo di deleghe può consumare tempo e budget senza produrre un risultato. Servono limiti su durata, numero di passaggi, costo e profondità delle chiamate. Anche i fallback devono essere definiti: dopo due tentativi falliti si apre un ticket, si chiede un dato o si passa a una persona; non si continua all'infinito.

## Quando adottare il protocollo A2A

A2A è un candidato sensato quando sono vere più condizioni:

- esistono agenti autonomi con responsabilità e proprietari distinti;
- i task hanno stati, risultati intermedi o tempi non immediati;
- è utile sostituire un agente senza riscrivere il client;
- occorre collaborare tra stack o organizzazioni differenti;
- identità, autorizzazioni e osservabilità sono già progettate.

È probabilmente prematuro quando l'applicazione contiene un solo agente, le operazioni sono poche e sincrone, oppure le API di base sono ancora instabili. Prima di introdurre coordinamento multi-agente, conviene rendere affidabili dati, regole e [integrazioni backend](/servizi/backend-e-api).

Anche la divisione in agenti non va forzata. Separare “agente che legge il nome” e “agente che legge il cognome” aggiunge rete, costi ed errori senza creare un confine di responsabilità. Un buon agente specializzato possiede un obiettivo riconoscibile e un contratto che potrebbe essere mantenuto da un team diverso.

## Checklist per un primo progetto

Prima di realizzare una rete di agenti, risponderei in modo verificabile a queste domande:

1. Quale risultato di business viene delegato e perché non basta un'API?
2. Chi possiede l'agente e risponde dei suoi errori?
3. Come viene pubblicata e aggiornata l'Agent Card?
4. Quale identità accompagna il task e con quali permessi?
5. Quali input arrivano da fonti non attendibili?
6. Quali azioni richiedono approvazione umana?
7. Come vengono gestiti timeout, retry e duplicati?
8. Quali eventi consentono di ricostruire l'esecuzione?
9. Qual è il limite di costo e durata per attività?
10. Cosa accade quando l'agente non sa completare il task?

Un primo rilascio dovrebbe limitarsi a una collaborazione leggibile e reversibile. Per esempio, un agente raccoglie informazioni e un altro produce una bozza, ma nessuno invia comunicazioni o modifica sistemi senza revisione. Dopo aver misurato errori, tempi e richieste di intervento, si può ampliare l'autonomia.

## La scelta architetturale viene prima del protocollo

Il protocollo A2A è utile quando riduce dipendenze reali tra agenti. Non è una scorciatoia per trasformare un processo confuso in automazione affidabile. Se dati, responsabilità e criteri di accettazione non sono chiari, la rete distribuirà l'ambiguità invece di eliminarla.

La sequenza più solida è partire dal processo, identificare i confini di dominio, costruire API e controlli deterministici, quindi scegliere se esporre strumenti con MCP e deleghe con A2A. Una [consulenza su architettura e scalabilità](/servizi/architettura-e-scalabilita) può aiutare a verificare questi confini prima che diventino dipendenze costose.

Se stai valutando agenti collegati a CRM, gestionali o piattaforme proprietarie, il primo passo non è scegliere un framework. È disegnare identità, capacità e punti di controllo. È anche il modo in cui affronto un progetto di [automazione dei processi aziendali](/automazione-processi-aziendali): una decisione misurabile alla volta, con responsabilità esplicite.
