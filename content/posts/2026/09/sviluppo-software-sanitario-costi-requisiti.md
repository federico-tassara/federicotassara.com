---
title: "Sviluppo software sanitario: costi e requisiti 2026"
date: "2026-09-07"
updatedAt: "2026-09-07"
author: "Federico Tassara"
category: "Sviluppo Software"
excerpt: "Sviluppo software sanitario su misura: requisiti, architettura, privacy, costi e verifiche da definire prima del pilota. Valuta il tuo progetto."
tags: ["sviluppo software sanitario", "software sanitario su misura", "healthtech", "software medicale", "costi sviluppo", "privacy by design"]
cta:
  title: "Devi impostare un software sanitario?"
  body: "Porta obiettivo clinico o operativo, utenti, dati trattati e stato del prodotto. Possiamo trasformarli in un perimetro tecnico, una stima e criteri di verifica per il primo pilota."
  label: "Valutiamo il progetto"
faq:
  - q: "Quanto costa sviluppare un software sanitario su misura?"
    a: "Per un primo prodotto non diagnostico che copre un flusso circoscritto, il budget parte spesso da 40.000-100.000 euro. Una piattaforma multi-centro con integrazioni, ruoli, audit e requisiti di esercizio può superare 100.000-250.000 euro. Se il software ha una finalità medica e rientra nell'MDR, vanno stimati anche percorso regolatorio, gestione del rischio, verifiche e documentazione. I numeri sono ordini di grandezza iniziali, non un preventivo."
  - q: "Un software che tratta dati sanitari è sempre un dispositivo medico?"
    a: "No. Conta la destinazione d'uso dichiarata dal fabbricante. Un sistema che gestisce agenda, fatture o archiviazione può restare fuori dall'MDR, pur dovendo rispettare il GDPR. Un software che analizza dati per supportare diagnosi, terapia o monitoraggio può qualificarsi come dispositivo medico. La valutazione richiede il caso concreto."
  - q: "Quali requisiti servono prima di sviluppare un'app sanitaria?"
    a: "Servono almeno una destinazione d'uso scritta, utenti e ruoli, mappa dei dati, confini tra organizzazioni, politica di conservazione, integrazioni previste e criteri di accettazione. Se il prodotto può influenzare una decisione clinica, conviene coinvolgere subito una figura regolatoria."
  - q: "FHIR è obbligatorio per un software sanitario?"
    a: "Non per ogni prodotto. FHIR diventa utile quando il software deve scambiare dati clinici strutturati con sistemi sanitari, cartelle o servizi esterni. La versione, i profili e le terminologie dipendono dall'ecosistema con cui il prodotto dovrà dialogare."
  - q: "Quanto tempo serve per arrivare a un primo pilota?"
    a: "Un flusso non diagnostico ben circoscritto può arrivare al pilota in tre-sei mesi, dopo una fase iniziale di analisi. Integrazioni con sistemi sanitari, migrazioni, requisiti clinici o un percorso MDR possono estendere il calendario. La data acquista senso solo dopo aver definito rischi e prove di accettazione."
---

Un team che avvia lo **sviluppo di un software sanitario** deve progettare il prodotto e le prove che ne dimostreranno l'affidabilità. Login, agenda e dashboard coprono la parte visibile. Isolamento dei dati, tracciabilità, gestione degli errori e procedure di ripristino determinano se un centro può usare il sistema senza affidarsi alla demo.

In **Sinfea**, il progetto healthtech che seguo come Fractional CTO, la prima fase tecnica è partita dalla destinazione d'uso, dai confini tra centri e dai criteri di accettazione. Il codice esistente offriva una base valida. Il lavoro iniziale ha quindi ordinato i rischi che separavano quella base da un pilota controllabile.

Questa guida si rivolge a founder, responsabili di prodotto e strutture che valutano un **software sanitario su misura**. Le indicazioni tecniche non sostituiscono una valutazione legale, clinica o regolatoria.

## Software sanitario e software medicale indicano perimetri diversi

Nel linguaggio comune, “software sanitario” include prodotti molto diversi:

- un'agenda per prenotazioni e stanze;
- un portale che raccoglie documenti e consensi;
- una piattaforma di telemedicina;
- un sistema che suggerisce una diagnosi o una terapia;
- un'app che monitora parametri fisiologici.

Il settore di utilizzo non decide da solo il regime del prodotto. Il [Regolamento europeo sui dispositivi medici](https://eur-lex.europa.eu/eli/reg/2017/745/oj/ita) distingue il software con una specifica finalità medica dal software per scopi generali, anche quando qualcuno usa quest'ultimo in un contesto sanitario.

La destinazione d'uso guida la valutazione. Un'app che conserva referti svolge un compito diverso da un'app che interpreta gli stessi referti per proporre una decisione diagnostica. Entrambe trattano dati delicati. Solo la seconda presenta, in linea di principio, una finalità che può portarla nel campo dei dispositivi medici.

Il team deve chiarire questo punto prima di definire backlog e preventivo. Una frase inserita nel sito, nelle istruzioni o in una presentazione commerciale può descrivere una finalità medica e cambiare il perimetro regolatorio. L'articolo dedicato al [software come dispositivo medico](/blog/software-dispositivo-medico-mdr) approfondisce il test e la classificazione prevista dalla regola 11 dell'MDR.

## Le sette decisioni che servono prima del preventivo

Una lista di schermate non basta a stimare un prodotto sanitario. Il preventivo diventa attendibile quando risponde a sette domande.

### 1. Quale risultato produce il software

La destinazione d'uso deve descrivere utenti, contesto e risultato. “Piattaforma AI per la salute” non offre un confine verificabile. “Il personale del centro configura un percorso, assegna attività al paziente e controlla gli esiti senza ricevere suggerimenti diagnostici” delimita un flusso.

Quella frase influenza dati, test, interfaccia e competenze da coinvolgere. Se il prodotto elabora informazioni per una decisione clinica, il team deve aprire la valutazione MDR prima di consolidare l'architettura.

### 2. Chi può vedere e modificare ogni dato

Medico, segreteria, paziente e amministratore hanno permessi diversi. In un SaaS usato da più strutture, anche il centro costituisce un confine: un utente del centro A non deve leggere dati del centro B, neppure modificando un URL o chiamando l'API fuori dall'interfaccia.

La matrice dei permessi deve coprire lettura, modifica, esportazione e cancellazione. Il backend applica le regole su ogni accesso. Test automatici con due organizzazioni di prova verificano il confine.

### 3. Quali dati entrano, dove restano e quando escono

La mappa comprende dati anagrafici, informazioni sulla salute, documenti, log e copie di backup. Per ciascun gruppo servono origine, finalità, soggetti autorizzati, tempo di conservazione e procedura di eliminazione.

Il [Garante per la protezione dei dati personali](https://www.garanteprivacy.it/documents/10160/0/Compendio%2Bsul%2Btrattamento%2Bdei%2Bdati%2Bpersonali%2Beffettuato%2Battraverso%2Bpiattaforme%2Bvolte%2Ba%2Bmettere%2Bin%2Bcontatto%2Bi%2Bpazienti%2Bcon%2Bi%2Bprofessionisti%2Bsanitari%2Baccessibili%2Bvia%2Bweb%2Be%2Bapp.pdf/7fc9ca53-f078-af9b-248d-a71dee74da07?version=2.0) richiama per le piattaforme sanitarie ruoli, basi giuridiche, valutazione d'impatto, privacy by design e sicurezza. Il consulente privacy definisce gli adempimenti. Il team tecnico deve trasformarli in comportamenti del sistema e produrre le relative evidenze.

### 4. Quali azioni partono senza una persona

Promemoria, controlli programmati e workflow a più passaggi richiedono un motore affidabile. Ogni attività deve tollerare duplicati, ritardi e riavvii. Un job fallito deve lasciare una traccia e consentire un nuovo tentativo senza ripetere effetti già completati.

Il preventivo deve includere coda, scheduler, idempotenza e monitoraggio. Una demo eseguita a mano non misura questi requisiti.

### 5. Con quali sistemi dovrà dialogare

Il prodotto può dover scambiare dati con un gestionale, una cartella clinica, un laboratorio o un servizio regionale. Ogni integrazione aggiunge formati, credenziali, ambienti di test e casi di errore.

[HL7 FHIR](https://hl7.org/fhir/R5/) offre uno standard per lo scambio elettronico di informazioni sanitarie attraverso risorse modulari. Non risolve da solo l'interoperabilità: il progetto deve concordare versione, profili, terminologie e identificativi con il sistema destinatario. Un generico requisito “supporta FHIR” lascia aperte quasi tutte le decisioni che costano lavoro.

### 6. Quale prova chiude ogni consegna

Il founder deve poter verificare il risultato senza leggere il codice. Per la persistenza può creare un dato, riavviare il sistema e ritrovarlo. Per l'isolamento può tentare un accesso incrociato tra due centri. Per il ripristino può chiedere di ricostruire un ambiente da backup e misurare perdita e tempo.

Queste prove entrano nel contratto e nella pipeline. Ridimensionano le discussioni basate su percentuali di avanzamento prive di un comportamento osservabile.

### 7. Quale traguardo deve raggiungere la prima versione

Una presentazione a investitori, un pilot con un centro e un rilascio commerciale richiedono livelli diversi di esercizio. Il pilot deve comunque proteggere dati reali, raccogliere log utili e offrire una procedura in caso di errore.

Il team deve indicare quanti utenti parteciperanno, quali dati useranno e chi li assisterà. Quel confine riduce il primo scope senza abbassare le protezioni legate al rischio.

## Un'architettura adatta a più centri sanitari

Una piattaforma multi-centro richiede un modello di tenancy esplicito. Ogni richiesta deve portare l'identità dell'utente e l'organizzazione attiva fino al livello che interroga il database. Filtrare i dati nell'interfaccia espone il sistema a chiamate dirette o bug nel frontend.

Il progetto deve coprire almeno questi componenti:

| Area | Scelta da rendere verificabile |
|---|---|
| Identità | accesso, recupero account, sessioni e autenticazione forte per i ruoli esposti |
| Autorizzazioni | matrice per ruolo e organizzazione applicata dal backend |
| Dati | vincoli di tenancy, cifratura concordata e migrazioni ripetibili |
| Documenti | storage privato, URL a scadenza, controllo del tipo di file e scansione |
| Audit | accessi e modifiche rilevanti con attore, oggetto e data |
| Lavori automatici | coda persistente, tentativi, idempotenza e coda degli errori |
| Esercizio | log, metriche, alert, backup e prova di ripristino |

Il monolite modulare costituisce spesso una buona base per il primo prodotto. Riduce il numero di componenti da gestire e mantiene chiari i confini interni. I microservizi acquistano senso quando team, carico o requisiti di isolamento giustificano il costo operativo. La guida sull'[architettura di un sistema AI tra backend e frontend](/blog/architettura-sistema-ai-backend-frontend) mostra come separare responsabilità e dati senza moltiplicare servizi.

## Privacy by design tradotta in lavoro tecnico

La scritta “GDPR compliant” non dimostra alcun comportamento. Un progetto serio collega ogni requisito a una scelta e a una prova.

La minimizzazione parte dai campi raccolti. Se il workflow non usa un dato, il modulo non dovrebbe chiederlo. Le autorizzazioni limitano la visibilità al ruolo che svolge il compito. La cifratura protegge trasporto, storage e campi che l'analisi del rischio individua. I log registrano gli eventi utili senza copiare referti o testo clinico nei messaggi di errore.

Il team deve anche progettare esportazione, rettifica e cancellazione. Un comando SQL improvvisato non offre una procedura ripetibile. Un flusso amministrativo con autorizzazione, anteprima, esecuzione e ricevuta consente invece di controllare l'operazione.

La valutazione d'impatto appartiene al titolare del trattamento con il supporto delle figure competenti. Gli sviluppatori forniscono schema dei dati, flussi, fornitori, misure di sicurezza e test. Questa divisione assegna il lavoro a chi possiede le informazioni necessarie.

## Quanto costa sviluppare un software sanitario

I numeri seguenti servono per un primo budget in Italia nel 2026. Non includono IVA, attività cliniche, consulenza legale, certificazione o costi di un organismo notificato.

| Perimetro | Tempo indicativo | Ordine di grandezza |
|---|---:|---:|
| Analisi, mappa dei rischi e prototipo di un flusso | 2-6 settimane | 5.000-20.000 euro |
| MVP non diagnostico per un flusso e un pilot limitato | 3-6 mesi | 40.000-100.000 euro |
| Piattaforma multi-centro con ruoli, audit e integrazioni | 6-12 mesi | 100.000-250.000 euro o più |
| Software con finalità medica soggetto a MDR | dipende da classe e prove | stima tecnica e regolatoria separata |

Cinque fattori spostano il costo: numero di ruoli, logica dei workflow, integrazioni, migrazione dei dati e livello di prova richiesto. Un motore clinico con regole e tracciabilità costa più di un portale con lo stesso numero di pagine.

Il budget deve comprendere il periodo successivo al pilot. Hosting, monitoraggio, assistenza, aggiornamenti di sicurezza e adeguamenti normativi continuano dopo il rilascio. L'articolo sui [costi di sviluppo di un SaaS](/blog/quanto-costa-sviluppare-saas-italia-2026) aiuta a distinguere investimento iniziale e costi ricorrenti.

## Un piano concreto per i primi novanta giorni

Nelle prime due settimane il team definisce destinazione d'uso, utenti, dati, flusso prioritario e criteri del pilot. La stessa fase individua eventuali segnali MDR e coinvolge uno specialista regolatorio prima che marketing e backlog consolidino affermazioni incoerenti.

Il mese successivo produce un percorso verticale: accesso, dato principale, regola di business e uscita. Il percorso usa già il modello di tenancy e i controlli di autorizzazione. Mock e schermate isolate non dimostrano che le parti si scambino dati nel modo previsto.

Il secondo mese consolida persistenza, lavori automatici, audit e gestione degli errori. Il team prepara ambienti separati, rilascio ripetibile e dati di prova. Un [audit tecnico del software](/blog/audit-tecnico-software-cosa-controllare) può verificare la base quando il progetto parte da codice già scritto.

Il terzo mese prepara il pilot: test di accettazione, formazione, supporto, backup e procedura di incidente. Il responsabile del centro deve sapere chi contattare e come sospendere un flusso che produce un esito inatteso.

## Il caso Sinfea

Sinfea sviluppa un prodotto destinato a centri sanitari privati. Il progetto disponeva già di una fondazione tecnica e di parte del motore applicativo. Come Fractional CTO ho verificato la base, mantenuto le scelte valide e organizzato la prima fase attorno a risultati controllabili dal founder.

Il perimetro include persistenza, isolamento tra organizzazioni, attività programmate, rilascio e proprietà degli account. Ogni voce associa il rischio a una prova: due centri di test per l'accesso incrociato, un riavvio per la persistenza, un ambiente pulito per la documentazione di avvio.

Il [caso Sinfea e la prima fase tecnica](/blog/fractional-cto-startup-healthtech-caso-reale) descrive il metodo e i limiti delle informazioni pubblicabili. Non presenta risultati economici prima della conclusione del lavoro.

## Le domande da fare al partner tecnico

Un colloquio con la software house o il responsabile tecnico dovrebbe produrre risposte verificabili:

1. Quale destinazione d'uso avete usato per stimare il prodotto?
2. Chi decide se il software può rientrare nell'MDR?
3. In quale punto il backend impedisce l'accesso tra due centri?
4. Quale dato sensibile potrebbe finire nei log?
5. Come ripetete un job fallito senza duplicarne gli effetti?
6. Chi possiede repository, cloud, dominio e account dei servizi?
7. Quale prova chiude ogni consegna?
8. Quanto tempo serve per ripristinare il sistema da un backup?

Risposte come “usiamo cloud sicuro” o “seguiamo il GDPR” non descrivono una misura. Chiedi configurazioni, responsabilità e test.

## Dal requisito al pilot

Un software sanitario parte da una destinazione d'uso precisa e da un rischio osservabile. Il team può quindi scegliere architettura, protezioni e prove senza accumulare funzioni che non avvicinano al pilot.

Sinfea ha seguito questo ordine: verifica della base, confini tra centri, risultati contrattuali e test comprensibili anche al founder. Lo stesso metodo consente di stimare un nuovo prodotto o recuperare un MVP che ha superato la fase di demo.

Se manca una persona che tenga insieme prodotto, sviluppo e fornitori, puoi valutare il servizio di [Fractional CTO](/fractional-cto). Per trasformare il tuo caso in un perimetro e una stima, [scrivimi](/contatti).
