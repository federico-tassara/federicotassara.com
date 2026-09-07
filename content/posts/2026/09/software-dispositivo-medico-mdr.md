---
title: "Software dispositivo medico: quando si applica l’MDR"
date: "2026-09-07"
updatedAt: "2026-09-07"
author: "Federico Tassara"
category: "Sviluppo Software"
excerpt: "Software dispositivo medico o app sanitaria? Usa destinazione d’uso, funzione e rischio per capire quando valutare MDR, classe e marcatura CE."
tags: ["software dispositivo medico", "software medicale", "MDR", "SaMD", "healthtech", "marcatura CE software"]
cta:
  title: "Il tuo prodotto può avere una finalità medica?"
  body: "Possiamo chiarire destinazione d'uso, flussi tecnici e punti che richiedono una valutazione regolatoria, prima che codice e comunicazione commerciale prendano direzioni diverse."
  label: "Analizziamo il perimetro"
faq:
  - q: "Quando un software è un dispositivo medico?"
    a: "Un software può qualificarsi come dispositivo medico quando il fabbricante lo destina a una finalità medica prevista dall'MDR e il software svolge un'azione sui dati che va oltre archiviazione, comunicazione o ricerca semplice, a beneficio di singoli pazienti. La valutazione dipende da funzione, dichiarazioni del fabbricante e contesto d'uso."
  - q: "Un'app che conserva dati sanitari richiede la marcatura CE?"
    a: "La sola conservazione di dati sanitari non rende l'app un dispositivo medico. L'app deve comunque rispettare le regole applicabili alla protezione dei dati. Se interpreta quei dati per diagnosi, terapia, previsione o monitoraggio, serve una valutazione MDR sul caso concreto."
  - q: "Come si classifica un software medicale secondo l'MDR?"
    a: "La regola 11 assegna in genere la classe IIa al software che fornisce informazioni usate per decisioni diagnostiche o terapeutiche. Il rischio della decisione può portare alla classe IIb o III. Il software che monitora processi fisiologici ricade in genere in IIa, o IIb per parametri vitali le cui variazioni possono creare un pericolo immediato. Gli altri software ricadono in classe I."
  - q: "Il GDPR e l'MDR sono la stessa verifica?"
    a: "No. Il GDPR disciplina il trattamento dei dati personali, inclusi i dati sulla salute. L'MDR disciplina sicurezza, prestazione e immissione sul mercato dei dispositivi medici. Un prodotto può restare fuori dall'MDR e dover rispettare il GDPR, oppure dover affrontare entrambi i perimetri."
  - q: "Quando coinvolgere uno specialista regolatorio?"
    a: "Prima di fissare claim, backlog e piano di validazione, se il prodotto analizza dati di un paziente, influenza una decisione clinica, monitora parametri fisiologici o promette diagnosi, prevenzione, previsione, prognosi, trattamento o attenuazione di una malattia."
---

Un'app sanitaria non diventa un **software dispositivo medico** perché contiene referti, appuntamenti o dati sulla salute. La classificazione parte dalla finalità che il fabbricante assegna al prodotto e dal modo in cui il software usa le informazioni di un singolo paziente.

Questa distinzione cambia roadmap, budget e prove necessarie prima del mercato. Un'agenda per medici e un algoritmo che suggerisce una decisione terapeutica possono vivere nella stessa piattaforma, ma richiedono analisi diverse. Il team deve separare i moduli e descriverne le funzioni prima di scegliere una classe o escludere l'MDR.

La guida offre un orientamento tecnico per founder e product owner. Un professionista regolatorio deve confermare la qualificazione e la classe sul prodotto concreto.

## La destinazione d'uso precede la tecnologia

Il [Regolamento (UE) 2017/745](https://eur-lex.europa.eu/eli/reg/2017/745/oj/ita) considera dispositivo medico anche il software che il fabbricante destina a una o più finalità mediche indicate nella definizione, tra cui diagnosi, prevenzione, monitoraggio, previsione, prognosi, trattamento o attenuazione di una malattia.

Il fabbricante esprime la destinazione d'uso attraverso etichetta, istruzioni, materiali promozionali, dichiarazioni commerciali e valutazione clinica. Il nome della tecnologia non decide nulla. “Intelligenza artificiale”, “supporto” e “benessere” non costituiscono scudi se il prodotto promette di individuare una patologia o orientare una terapia.

Il team dovrebbe scrivere una frase con quattro elementi:

- utente previsto;
- popolazione o paziente interessato;
- informazione elaborata;
- risultato che il software fornisce e uso di quel risultato.

Un esempio amministrativo può dire: “Il personale di segreteria usa il prodotto per prenotare visite e inviare promemoria”. Un esempio con possibile finalità medica può dire: “Il cardiologo usa il prodotto per analizzare i parametri del paziente e ricevere informazioni che supportano una decisione terapeutica”. La seconda frase apre una valutazione MDR.

## Il test in cinque passaggi della guida MDCG

La Commissione europea ha pubblicato nel giugno 2025 la revisione della guida [MDCG 2019-11 sulla qualificazione e classificazione del software](https://health.ec.europa.eu/document/download/b45335c5-1679-4c71-a91c-fc7a4d37f12b_en?filename=mdcg_2019_11_en.pdf). Il documento non sostituisce il regolamento e non offre un parere vincolante. Fornisce però un percorso condiviso dalle autorità e dagli operatori europei.

### 1. Il prodotto è software

Il sistema deve elaborare input secondo un insieme di istruzioni e produrre output. Un documento digitale, un catalogo o una libreria di riferimento senza elaborazione non supera questo primo passaggio.

### 2. Svolge più di archiviazione, comunicazione o ricerca semplice

La guida separa le funzioni che memorizzano, trasferiscono o cercano dati da quelle che compiono un'azione sui dati. Ordinare referti per data o trasmetterli al medico non equivale a calcolare un rischio, individuare un pattern o formulare una raccomandazione.

La parola “semplice” richiede attenzione. Un motore di ricerca che recupera un documento tramite il nome del paziente svolge un compito diverso da un sistema che combina parametri e letteratura per proporre contenuti rilevanti per quel caso.

### 3. L'azione serve il beneficio di singoli pazienti

Un sistema che produce statistiche aggregate per budget o ricerca può non rientrare nella stessa logica di un prodotto che genera un risultato riferito al singolo paziente. Il contesto e la destinazione dichiarata restano decisivi.

### 4. Esiste una finalità medica

Il prodotto deve perseguire una finalità compresa nella definizione dell'MDR o dell'IVDR. Gestione amministrativa, comunicazione e benessere generale possono restare fuori dal campo dei dispositivi medici. Una funzione che supporta diagnosi o trattamento richiede l'analisi.

### 5. Il software guida o influenza un dispositivo

Un modulo può rientrare nel perimetro perché controlla un dispositivo hardware o ne influenza l'uso. In quel caso la classificazione segue anche le regole legate al dispositivo e alla funzione svolta.

Il diagramma MDCG aiuta a formulare le domande. Il fabbricante deve documentare le risposte con esempi di input, elaborazione, output e conseguenze previste.

## Esempi che aiutano a separare i casi

La tabella mostra segnali iniziali, non classificazioni automatiche.

| Funzione | Segnale MDR iniziale | Motivo |
|---|---|---|
| agenda, fatture e gestione delle stanze | basso | attività amministrative senza finalità medica |
| archivio di referti senza interpretazione | basso | conservazione e recupero di documenti |
| videochiamata tra medico e paziente | basso per la comunicazione | il canale trasferisce informazioni senza elaborarle |
| calcolo di un punteggio di rischio individuale | alto | il software agisce sui dati del paziente per produrre informazione clinica |
| suggerimento terapeutico basato su parametri clinici | alto | l'output influenza una decisione terapeutica |
| monitoraggio di un parametro fisiologico | alto | la regola 11 tratta il monitoraggio in modo esplicito |
| dashboard con dati aggregati per capacità del centro | da valutare, spesso basso | l'output può riguardare organizzazione e risorse anziché il singolo paziente |

Due moduli della stessa piattaforma possono ricevere esiti diversi. Una separazione architetturale e documentale evita che un claim clinico ambiguo si estenda a tutto il prodotto senza una scelta consapevole.

## La regola 11 e le classi del software

Dopo la qualificazione, il fabbricante deve classificare il software in base al rischio. La regola 11 dell'allegato VIII dell'MDR stabilisce quattro traiettorie principali.

Il software che fornisce informazioni usate per decisioni diagnostiche o terapeutiche ricade in classe IIa. Se una decisione errata può causare un grave deterioramento dello stato di salute o un intervento chirurgico, la classe sale a IIb. La possibilità di morte o deterioramento irreversibile porta alla classe III.

Il software destinato a monitorare processi fisiologici ricade in classe IIa. Il monitoraggio di parametri vitali passa in IIb quando le variazioni possono creare un pericolo immediato per il paziente. Gli altri software rientrano in classe I.

La gravità deriva dall'uso previsto e dalle conseguenze della decisione, non dalla complessità del codice. Un algoritmo breve può produrre un'informazione ad alto rischio. Una piattaforma con molti moduli può limitarsi a funzioni amministrative.

| Uso dell'output | Possibile classe secondo la regola 11 |
|---|---|
| decisione diagnostica o terapeutica | IIa |
| decisione con rischio di grave deterioramento o chirurgia | IIb |
| decisione con rischio di morte o deterioramento irreversibile | III |
| monitoraggio di processi fisiologici | IIa |
| monitoraggio di parametri vitali con pericolo immediato | IIb |
| altro software qualificato come dispositivo | I |

La tabella non copre tutte le regole e le interazioni possibili. Il fabbricante deve motivare per iscritto la classe selezionata.

## Classe I non significa prodotto privo di obblighi

Un software in classe I richiede comunque un sistema di gestione della qualità proporzionato, gestione del rischio, documentazione tecnica, valutazione clinica, sorveglianza dopo l'immissione sul mercato e registrazioni previste. In molti casi il fabbricante può seguire la procedura di autovalutazione della conformità. Le classi IIa, IIb e III richiedono il coinvolgimento di un organismo notificato nel percorso di conformità.

L'allegato I dell'MDR chiede che il fabbricante sviluppi il software secondo lo stato dell'arte, considerando ciclo di vita, gestione del rischio, sicurezza delle informazioni, verifica e validazione. Queste attività devono produrre documenti collegati al software rilasciato.

Un test automatico acquista valore regolatorio quando il team può collegarlo a un requisito e a un rischio. Un commit privo di tracciabilità rende difficile dimostrare perché una modifica non abbia alterato sicurezza o prestazione.

## GDPR e MDR coprono rischi diversi

Il GDPR si applica al trattamento dei dati personali. I dati sulla salute appartengono alle categorie particolari e richiedono basi, ruoli e misure adeguate. L'MDR disciplina sicurezza, prestazione e immissione sul mercato del dispositivo.

Un portale di prenotazione può restare fuori dall'MDR e trattare dati personali. Un software diagnostico può dover rispettare entrambi i regolamenti. Superare una valutazione privacy non dimostra la conformità come dispositivo medico; la marcatura CE non risolve ruoli, finalità e basi del trattamento.

Il [compendio del Garante sulle piattaforme web e app sanitarie](https://www.garanteprivacy.it/documents/10160/0/Compendio%2Bsul%2Btrattamento%2Bdei%2Bdati%2Bpersonali%2Beffettuato%2Battraverso%2Bpiattaforme%2Bvolte%2Ba%2Bmettere%2Bin%2Bcontatto%2Bi%2Bpazienti%2Bcon%2Bi%2Bprofessionisti%2Bsanitari%2Baccessibili%2Bvia%2Bweb%2Be%2Bapp.pdf/7fc9ca53-f078-af9b-248d-a71dee74da07?version=2.0) richiama valutazione d'impatto, privacy by design, ruoli e sicurezza. Il team tecnico deve fornire mappa dei flussi, fornitori, controlli di accesso, tempi di conservazione e procedure verificabili.

## La decisione MDR cambia il modo di sviluppare

Il team deve integrare requisiti e rischio nel ciclo di lavoro. Ogni funzione parte da un uso previsto e da un pericolo da controllare. La progettazione definisce la misura. Il test produce l'evidenza. La release conserva il collegamento tra i tre elementi.

Questa disciplina influenza attività concrete:

- versioni e configurazioni devono risultare identificabili;
- requisiti, codice e test devono mantenere una relazione tracciabile;
- modifiche ad algoritmi, dati o interfaccia richiedono un'analisi d'impatto;
- vulnerabilità e dipendenze entrano nella gestione del rischio;
- anomalie e feedback dopo il rilascio alimentano sorveglianza e correzioni.

Il team di sviluppo non deve improvvisare il dossier alla fine. Ricostruire decisioni e prove dopo mesi costa più che registrarle durante il lavoro e può lasciare vuoti difficili da colmare.

## Attenzione ai claim sul sito e nelle demo

Il marketing può modificare il perimetro senza toccare il repository. “Aiuta a organizzare il percorso” e “previene le complicanze” descrivono promesse diverse. Screenshot, presentazioni agli investitori e script commerciali devono usare la stessa destinazione d'uso approvata.

Anche una nuova release può cambiare il quadro. Un archivio che aggiunge un punteggio, un alert o una priorità basata sui dati del paziente compie un'azione nuova. Il product owner deve chiedere una valutazione prima di presentare la funzione come piccolo miglioramento.

Un registro dei claim collega prodotto e comunicazione. Per ogni affermazione indica evidenza, pubblico, canale e versione a cui si riferisce. Regulatory, clinico, privacy e sviluppo possono così discutere lo stesso oggetto.

## Intelligenza artificiale e software medicale

L'uso di AI non qualifica da solo il prodotto come dispositivo medico. Un modello che riassume note amministrative presenta un perimetro diverso da un modello che stima il rischio clinico di un paziente.

Il comportamento probabilistico aumenta il lavoro di validazione. Il team deve definire popolazione, dati di ingresso, metriche, soglie, casi esclusi e gestione degli output incerti. Deve anche controllare aggiornamenti del modello e variazioni dei dati nel tempo.

L'eventuale applicazione dell'AI Act segue una valutazione distinta. La classificazione MDR continua a partire dalla finalità medica e dal rischio previsto dall'uso del software. Un consulente regolatorio deve coordinare i due percorsi quando il prodotto rientra in entrambi.

## Una checklist prima del primo pilot

Il founder dovrebbe ottenere un documento con queste risposte:

1. Chi assume il ruolo di fabbricante?
2. Qual è la destinazione d'uso, in una frase approvata?
3. Quali moduli agiscono sui dati del singolo paziente?
4. Quale finalità medica svolge ciascun modulo?
5. Quale regola di classificazione si applica e perché?
6. Quale danno può derivare da un output errato o assente?
7. Quali requisiti e test controllano quel rischio?
8. Quali claim possono usare sito, demo e vendite?
9. Chi valuta privacy, aspetti clinici e conformità regolatoria?
10. Quale evidenza deve esistere prima del pilot?

Un “no MDR” senza motivazione lascia il rischio aperto. Anche la decisione di esclusione merita un memo con funzione, destinazione d'uso e percorso seguito.

## Sinfea: separare il rischio prima delle feature

Sinfea sviluppa software per centri sanitari privati. Nella prima fase da Fractional CTO ho separato persistenza, isolamento tra organizzazioni, regole automatiche e operatività. Ogni area ha ricevuto un criterio che il founder può controllare.

Il progetto mantiene distinto il lavoro tecnico dalla valutazione giuridica e regolatoria. Il team prepara flussi, misure e prove; i professionisti competenti valutano gli obblighi applicabili. Il [caso Sinfea](/blog/fractional-cto-startup-healthtech-caso-reale) documenta questa impostazione senza pubblicare dati sanitari, codice o informazioni riservate.

La guida sullo [sviluppo di software sanitario](/blog/sviluppo-software-sanitario-costi-requisiti) completa il quadro con architettura multi-centro, costi e piano verso il pilot.

## Una scelta da documentare presto

La destinazione d'uso offre al team un confine per prodotto, marketing e sviluppo. Da quel confine discendono qualificazione, classe, rischi e prove.

Rimandare l'analisi può costringere il progetto a riscrivere requisiti e documentazione dopo che il software ha già incorporato decisioni cliniche. Un memo iniziale, rivisto da chi possiede la competenza regolatoria, costa poco rispetto a una roadmap costruita sul perimetro sbagliato.

Se stai progettando una piattaforma healthtech, posso aiutarti a descrivere flussi, architettura e criteri tecnici da portare al consulente regolatorio. Il servizio di [Fractional CTO](/fractional-cto) copre la responsabilità tecnica continuativa; un [audit tecnico](/blog/audit-tecnico-software-cosa-controllare) serve quando esiste già un prodotto da verificare. Per discutere il caso, [scrivimi](/contatti).
