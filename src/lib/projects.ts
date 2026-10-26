import type { LucideIcon } from "lucide-react";
import {
    Bot,
    BookOpen,
    Smile,
    Home,
    Waves,
    Target,
} from "lucide-react";

export type ProjectKind =
    | "WebApplication"
    | "MobileApplication"
    | "SoftwareApplication";

export type CaseStudy = {
    challenge: string;
    solution: string;
    results: string[];
    why?: string;
    work?: { title: string; desc: string }[];
    challenges?: { title: string; desc: string }[];
};

export type Project = {
    slug: string;
    title: string;
    tagline: string;
    role: string;
    year: string;
    summary: string;
    description: string[];
    features: { title: string; desc: string }[];
    stack: { area: string; items: string[] }[];
    url?: string;
    icon: LucideIcon;
    kind: ProjectKind;
    applicationCategory: string;
    operatingSystem?: string;
    seoTitle?: string;
    seoDescription?: string;
    caseStudy?: CaseStudy;
};

export const PROJECTS: Project[] = [
    {
        slug: "akintu",
        title: "AKINTU",
        seoTitle: "AKINTU — AI Employee Platform per vendite e assistenza",
        seoDescription:
            "AKINTU trasforma contenuti e processi aziendali in un AI Employee per assistenza, vendita, qualificazione lead e prenotazioni, integrabile su siti e WordPress.",
        tagline: "Il tuo miglior commerciale, disponibile 24/7.",
        role: "Partner tecnico",
        year: "2026",
        summary:
            "Piattaforma AI multi-tenant che trasforma siti e documenti aziendali in assistenza, qualificazione commerciale e prenotazioni.",
        description: [
            "AKINTU acquisiva pagine web, documenti e PDF autorizzati dall'azienda e li trasformava in una base di conoscenza interrogabile. Il visitatore poteva fare domande, ricevere indicazioni sui prodotti, lasciare un contatto o arrivare alla prenotazione senza uscire dalla conversazione.",
            "Come partner tecnico ho progettato l'architettura e sviluppato le parti centrali del prodotto: dashboard, API, pipeline di acquisizione, ricerca semantica, processi asincroni e widget. La stessa piattaforma serviva aziende diverse, mantenendo separati contenuti, configurazioni e conversazioni.",
            "Il prodotto doveva entrare in siti già esistenti. Per questo ho realizzato un widget web indipendente dallo stack del cliente e un plugin WordPress dedicato, con configurazione gestita dalla dashboard.",
        ],
        features: [
            { title: "Conoscenza aziendale", desc: "Ingestione di siti, documenti e PDF in una base di conoscenza separata per ogni azienda." },
            { title: "AI Employee", desc: "Conversazioni orientate ad assistenza, vendita, raccomandazioni e qualificazione dei lead." },
            { title: "Prenotazioni integrate", desc: "Raccolta dei dati necessari e gestione del passaggio dalla conversazione all'appuntamento." },
            { title: "Widget e WordPress", desc: "Distribuzione tramite widget web riutilizzabile e plugin dedicato per siti WordPress." },
        ],
        stack: [
            { area: "Dashboard", items: ["Next.js", "React", "TypeScript"] },
            { area: "Backend", items: ["Node.js", "Express", "BullMQ", "Redis"] },
            { area: "Dati & AI", items: ["PostgreSQL", "pgvector", "RAG"] },
            { area: "Integrazioni", items: ["WordPress", "Stripe", "Google Identity", "Resend"] },
        ],
        icon: Bot,
        kind: "WebApplication",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        caseStudy: {
            why:
                "Nei siti aziendali le informazioni utili sono spesso distribuite tra cataloghi, pagine di servizio, FAQ e documenti. Un visitatore deve ricostruire da solo la risposta e, quando decide di contattare l'azienda, ricomincia da un modulo senza contesto. AKINTU nasce per collegare conoscenza e azione: usare fonti controllate dall'azienda, capire la richiesta e accompagnare la persona verso un prodotto, un contatto qualificato o un appuntamento.",
            challenge:
                "Il sistema doveva recuperare risposte da fonti eterogenee, rispettare i confini tra aziende e continuare a funzionare durante crawling, conversione dei documenti e indicizzazione. Ogni conversazione doveva inoltre raccogliere dati commerciali senza confondere una risposta informativa con una raccomandazione o una prenotazione.",
            solution:
                "Ho separato dashboard, API, worker e componenti di distribuzione. PostgreSQL e pgvector gestivano dati applicativi e ricerca semantica; Redis e BullMQ spostavano le elaborazioni lunghe fuori dalle richieste web. Il widget consumava API dedicate e manteneva isolati stile, configurazione e sessione del cliente.",
            results: [
                "Pipeline di acquisizione per contenuti web, documenti e PDF con indicizzazione vettoriale per tenant",
                "Widget web riutilizzabile e plugin WordPress per integrare l'esperienza nei siti esistenti",
                "Flussi conversazionali per assistenza, raccomandazioni, qualificazione lead e prenotazioni",
                "Dashboard Next.js con onboarding, analytics e gestione degli abbonamenti Stripe",
            ],
            work: [
                {
                    title: "Architettura multi-tenant",
                    desc: "Ho definito i confini tra aziende, utenti, fonti, conversazioni e configurazioni. La separazione copriva query, indicizzazione, job e interfaccia.",
                },
                {
                    title: "Pipeline della conoscenza",
                    desc: "Ho costruito il flusso che acquisiva siti e file, estraeva il testo, lo preparava per la ricerca e lo indicizzava in pgvector. I job asincroni gestivano attività lunghe, tentativi e avanzamento.",
                },
                {
                    title: "Esperienza conversazionale",
                    desc: "Ho collegato recupero delle fonti e azioni applicative. La conversazione poteva rispondere, raccogliere dati, proporre prodotti e preparare una prenotazione mantenendo il contesto.",
                },
                {
                    title: "Distribuzione e gestione",
                    desc: "Ho sviluppato dashboard, widget riutilizzabile e integrazione WordPress. Onboarding, configurazione e billing permettevano di attivare un'azienda senza creare una versione separata del prodotto.",
                },
            ],
            challenges: [
                {
                    title: "Risposte fondate sulle fonti",
                    desc: "La qualità dipendeva dal recupero del contenuto giusto. Ho strutturato ingestione e ricerca per limitare le risposte generiche e mantenere il legame con la conoscenza autorizzata dal cliente.",
                },
                {
                    title: "Isolamento tra aziende",
                    desc: "Contenuti e conversazioni di tenant diversi non potevano mescolarsi. Ho applicato il contesto aziendale a storage, ricerca vettoriale, job e accesso dalla dashboard.",
                },
                {
                    title: "Elaborazioni fuori richiesta",
                    desc: "Crawling e documenti richiedevano tempi incompatibili con una chiamata HTTP. Le code BullMQ rendevano il lavoro ripetibile e permettevano alla dashboard di mostrarne lo stato.",
                },
                {
                    title: "Integrazione in siti diversi",
                    desc: "Il widget doveva convivere con temi, CSS e stack non controllati. Ho ridotto le dipendenze dall'host e separato la configurazione del cliente dal codice incorporato nel sito.",
                },
            ],
        },
    },
    {
        slug: "lectum",
        title: "Lectum",
        seoTitle: "Lectum — App React Native per community di lettori",
        seoDescription:
            "Lectum è un'app mobile React Native per discussioni strutturate sui libri, club di lettura digitali, ricerca per ISBN e gestione della libreria personale.",
        tagline: "I tuoi libri, la tua community.",
        role: "Fondatore tecnico",
        year: "2025",
        summary:
            "App mobile per organizzare letture, discussioni e club intorno ai libri, con struttura per capitoli e protezione dagli spoiler.",
        description: [
            "Lectum riuniva libreria personale, discussioni e club di lettura in una sola app. Ogni conversazione partiva da un libro e poteva essere organizzata per tema o capitolo, così un lettore trovava il contesto prima di intervenire.",
            "Ho ideato il prodotto e seguito l'intero sviluppo tecnico. L'app React Native con Expo condivideva la stessa base di codice tra iOS e Android; il backend Node.js gestiva libri, profili, club, thread e commenti su MongoDB.",
            "La progettazione ha dato priorità alla qualità della conversazione. ISBN e metadati riducevano i duplicati, mentre la struttura dei thread e le regole sugli spoiler permettevano a persone con ritmi di lettura diversi di partecipare allo stesso spazio.",
        ],
        features: [
            { title: "Discussioni sui libri", desc: "Thread strutturati per separare temi: trama, personaggi, interpretazioni." },
            { title: "Club di lettura digitali", desc: "Letture comuni con discussioni organizzate per capitoli e tempi del gruppo." },
            { title: "Ricerca tramite ISBN", desc: "Identificazione univoca e veloce dei titoli per evitare duplicati." },
            { title: "Libreria personale", desc: "Tracciamento dei libri letti, in lettura o da leggere." },
        ],
        stack: [
            { area: "Frontend", items: ["React Native", "Expo", "TypeScript"] },
            { area: "Backend", items: ["Node.js", "Express", "Redis", "BullMQ"] },
            { area: "Database", items: ["MongoDB"] },
        ],
        icon: BookOpen,
        kind: "MobileApplication",
        applicationCategory: "SocialNetworkingApplication",
        operatingSystem: "iOS, Android",
        caseStudy: {
            why:
                "Chi legge con altre persone finisce spesso per usare strumenti diversi: un catalogo per ricordare i libri, una chat per il gruppo e un social per cercare opinioni. Le conversazioni si perdono nel flusso e chi è indietro nella lettura rischia spoiler. Ho progettato Lectum per dare a ogni libro uno spazio ordinato, mantenere memoria delle discussioni e far convivere lettori che procedono a velocità diverse.",
            challenge:
                "Libri, edizioni e ISBN non coincidono sempre, mentre una discussione può riferirsi a un'opera, a un capitolo o a una fase del club. Il modello dati doveva conservare questi legami e sostenere thread annidati senza rendere pesante la navigazione su mobile.",
            solution:
                "Ho modellato il dominio intorno al libro e allo stato di lettura. L'app collegava ricerca ISBN, libreria personale, club e thread; il backend esponeva API dedicate e usava Redis e BullMQ per cache e lavori asincroni. La protezione dagli spoiler usava il punto raggiunto dal lettore come regola.",
            results: [
                "MVP rilasciato in 12 settimane partendo da zero, su iOS e Android da unica codebase",
                "Architettura backend modulare Node.js + Express + MongoDB con caching Redis e queue BullMQ",
                "Schema dati pensato per scalare a thread profondi, commenti annidati e metadata variabili per libro",
                "Community di beta tester attiva con feedback iterativi integrati nella roadmap",
            ],
            work: [
                {
                    title: "Definizione del prodotto",
                    desc: "Ho trasformato l'idea in flussi concreti: trovare un libro, aggiungerlo alla libreria, entrare in un club, seguire una lettura e aprire discussioni legate al punto raggiunto.",
                },
                {
                    title: "App iOS e Android",
                    desc: "Ho sviluppato l'app con React Native, Expo e TypeScript. Una sola base di codice copriva navigazione, profili, libreria, club e discussioni sui due sistemi operativi.",
                },
                {
                    title: "Backend e modello dati",
                    desc: "Ho costruito API e schema MongoDB per libri, edizioni, utenti, club, thread e commenti. Redis e BullMQ sostenevano cache e attività che non dovevano rallentare l'esperienza mobile.",
                },
                {
                    title: "Rilascio e feedback",
                    desc: "Ho portato l'MVP dalla definizione al rilascio e raccolto il feedback dei beta tester. Le osservazioni entravano nella roadmap e guidavano le iterazioni sui flussi più usati.",
                },
            ],
            challenges: [
                {
                    title: "Identità dei libri",
                    desc: "Un titolo può avere più edizioni e più ISBN. Ho separato l'opera dall'edizione per evitare conversazioni duplicate e conservare i metadati utili alla ricerca.",
                },
                {
                    title: "Spoiler e avanzamento",
                    desc: "Ogni lettore può trovarsi in un punto diverso. La struttura per capitoli e lo stato di lettura definivano quali contenuti mostrare e quali proteggere.",
                },
                {
                    title: "Discussioni profonde su mobile",
                    desc: "Thread e commenti annidati diventano difficili da leggere su uno schermo piccolo. Ho lavorato su gerarchia, contesto e navigazione per mantenere chiaro il legame tra risposta e discussione.",
                },
                {
                    title: "Un dominio con molti legami",
                    desc: "Libreria, club, libri e conversazioni condividono dati ma hanno cicli diversi. Ho mantenuto separati i moduli del backend per poter modificare una parte senza propagare dipendenze nel resto del prodotto.",
                },
            ],
        },
    },
    {
        slug: "mose",
        title: "MOSE",
        seoTitle: "MOSE — App offline-first per la manutenzione dei tiranti",
        seoDescription:
            "App mobile offline-first per la manutenzione straordinaria dei tiranti delle paratoie del MOSE: lavoro in ambienti sotterranei senza connettività, foto e sincronizzazione automatica.",
        tagline: "Manutenzione dei tiranti del MOSE, anche dove non c'è rete.",
        role: "Sviluppo full-stack",
        year: "2025",
        summary:
            "App mobile offline-first per la manutenzione straordinaria dei tiranti delle paratoie del MOSE, con backend di sincronizzazione e dashboard per il committente.",
        description: [
            "MOSE è l'app usata dalle squadre tecniche per la manutenzione straordinaria dei tiranti delle paratoie mobili del sistema MOSE di Venezia. Il lavoro si svolge nei cassoni e nelle gallerie di servizio sotto le barriere: ambienti chiusi, sotterranei, dove non esiste connettività. L'app è quindi progettata offline-first — ogni operazione funziona senza rete e si sincronizza da sola al rientro in copertura.",
            "Il prodotto è composto da tre parti: l'app mobile per i tablet in cantiere, un backend che riceve e concilia i dati delle due squadre, e una dashboard web con cui il committente segue l'avanzamento ed esporta i rapporti. Ogni tirante viene lavorato in quattro step documentati con foto, per una tracciabilità completa dell'intervento.",
        ],
        features: [
            { title: "Funziona senza connessione", desc: "Schede, foto e avanzamento vengono salvati in locale sul tablet e restano usabili in galleria, senza alcuna rete." },
            { title: "Sincronizzazione automatica", desc: "Al rientro in copertura i dati delle due squadre si sincronizzano da soli, con risoluzione dei conflitti campo per campo." },
            { title: "Lavorazione in quattro step", desc: "Ogni tirante segue una procedura guidata in quattro fasi, con foto obbligatorie a garanzia della tracciabilità." },
            { title: "Dashboard e report PDF", desc: "Il committente segue l'avanzamento per sito, stanza e tirante ed esporta rapporti PDF pronti per l'invio via PEC." },
        ],
        stack: [
            { area: "Mobile", items: ["React Native", "Expo", "TypeScript"] },
            { area: "Stato & offline", items: ["Zustand", "MMKV"] },
            { area: "Backend", items: ["Node.js", "Express", "MongoDB", "MinIO"] },
            { area: "Dashboard", items: ["Next.js", "Vercel"] },
            { area: "Infrastruttura", items: ["CapRover", "Docker"] },
        ],
        icon: Waves,
        kind: "MobileApplication",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Android, iOS",
        caseStudy: {
            challenge:
                "La manutenzione straordinaria dei tiranti del MOSE si svolge nei cassoni e nelle gallerie sotto le paratoie: ambienti sotterranei senza alcuna connettività. Le squadre registravano gli interventi su carta, con il rischio di schede incomplete, foto scollegate dalla lavorazione e nessuna visibilità in tempo reale per il committente. Trascrivere e impaginare i rapporti a fine cantiere richiedeva giorni di lavoro manuale.",
            solution:
                "Un'app mobile offline-first che digitalizza l'intera procedura: ogni tirante viene lavorato in quattro step con foto obbligatorie, tutto salvato in locale sul tablet e quindi sempre disponibile anche in galleria. Un backend Express + MongoDB riceve i dati delle due squadre e ne concilia le modifiche con una strategia di merge campo per campo. Una dashboard web permette al committente di seguire l'avanzamento e di esportare rapporti PDF completi di foto, pronti per l'invio via PEC.",
            results: [
                "App offline-first: ogni operazione funziona senza rete e si sincronizza da sola al rientro in copertura",
                "Sync engine con coda persistente e risoluzione dei conflitti campo per campo tra le due squadre",
                "Documentazione fotografica vincolata a ogni step, con upload differito su storage S3-compatibile",
                "Dashboard per il committente con avanzamento per sito/stanza/tirante ed export PDF dei rapporti",
            ],
        },
    },
    {
        slug: "oraloco",
        title: "Oraloco",
        seoTitle: "Oraloco — Community e contenuti sul calciomercato",
        seoDescription:
            "Oraloco è la piattaforma per gli appassionati di calciomercato: contenuti editoriali, news e approfondimenti, community moderata e app mobile companion.",
        tagline: "La community degli appassionati di calciomercato.",
        role: "Founder & Fractional CTO",
        year: "2023",
        summary:
            "Piattaforma editoriale e community sul calciomercato, composta da sito pubblico, app mobile e backoffice operativo.",
        description: [
            "Oraloco riuniva news, approfondimenti e discussioni sul calciomercato. Il sito pubblico dava spazio ai contenuti editoriali e alla ricerca organica; l'app mobile portava feed, profili e conversazioni in un'esperienza pensata per l'uso quotidiano.",
            "Come founder e responsabile tecnico ho definito l'architettura del prodotto e coordinato lo sviluppo di sito, app e strumenti interni. Il lavoro comprendeva il frontend Nuxt, l'app React Native, le API e il backoffice usato dalla redazione per pubblicare e moderare.",
            "La parte editoriale e quella community condividevano utenti e contenuti, ma seguivano esigenze diverse. La redazione aveva bisogno di velocità e controllo; i lettori di pagine rapide, accessibili dai motori di ricerca e coerenti tra web e mobile.",
        ],
        features: [
            { title: "Sito editoriale", desc: "Contenuti, news di calciomercato e SEO ottimizzato su Nuxt 3 con sitemap dinamica e schema.org." },
            { title: "App mobile companion", desc: "App React Native (Expo) con autenticazione Google/Apple e feed personalizzato." },
            { title: "Backoffice operatori", desc: "Pannello interno per gestione contenuti, utenti e moderazione." },
            { title: "Community e thread", desc: "Discussioni tematiche, profili utente e interazione social moderata." },
        ],
        stack: [
            { area: "Frontend Web", items: ["Nuxt 3", "Vue", "Tailwind"] },
            { area: "Mobile", items: ["React Native", "Expo", "expo-router"] },
            { area: "Backend", items: ["Node.js", "API REST"] },
            { area: "Integrazioni", items: ["Brevo", "Apple/Google Sign-In", "GTM"] },
        ],
        icon: Smile,
        kind: "WebApplication",
        applicationCategory: "SportsApplication",
        operatingSystem: "Web, iOS, Android",
        caseStudy: {
            why:
                "Il calciomercato genera molte notizie brevi, aggiornamenti e discussioni, ma l'esperienza era distribuita tra siti editoriali, forum e social generalisti. L'idea di Oraloco era costruire un prodotto verticale: una redazione pubblica contenuti verificabili e la community li discute nello stesso ambiente, con strumenti specifici per utenti e moderatori.",
            challenge:
                "Il sito doveva indicizzare molte pagine e restare rapido mentre la redazione pubblicava contenuti con frequenza. App e web dovevano condividere identità e dati senza offrire la stessa interfaccia, mentre il backoffice doveva rendere pubblicazione e moderazione attività gestibili da operatori non tecnici.",
            solution:
                "Ho separato le esperienze per canale mantenendo un backend comune. Nuxt 3 gestiva rendering, pagine editoriali e dati strutturati; React Native ed Expo coprivano feed e community su mobile. Un backoffice dedicato concentrava pubblicazione, utenti e moderazione, mentre Brevo e GTM gestivano comunicazioni e misurazione.",
            results: [
                "Sito SEO-friendly con SSR/SSG, sitemap dinamica, schema.org strutturato e Core Web Vitals nei target Google",
                "App mobile companion con autenticazione Apple/Google Sign-In e navigazione expo-router",
                "Backoffice interno completo per gestione contenuti editoriali e community",
                "Architettura pensata per scalare a migliaia di pagine indicizzate sul calciomercato italiano",
            ],
            work: [
                {
                    title: "Architettura del prodotto",
                    desc: "Ho definito i confini tra contenuti editoriali, community, identità utente e strumenti interni. Web, mobile e backoffice usavano lo stesso dominio senza duplicare le regole applicative.",
                },
                {
                    title: "Sito editoriale",
                    desc: "Ho lavorato sul frontend Nuxt 3 con rendering adatto ai motori di ricerca, sitemap dinamica, dati Schema.org e template per news e approfondimenti.",
                },
                {
                    title: "App mobile",
                    desc: "Ho sviluppato l'esperienza companion con React Native ed Expo, includendo autenticazione Apple e Google, feed, profili e navigazione dedicata alla community.",
                },
                {
                    title: "Operatività della redazione",
                    desc: "Ho costruito il backoffice per contenuti, utenti e moderazione e integrato email transazionali e analytics. Gli operatori potevano lavorare senza intervenire sul codice.",
                },
            ],
            challenges: [
                {
                    title: "Velocità e indicizzazione",
                    desc: "Le pagine editoriali dovevano essere disponibili ai crawler e aprirsi rapidamente anche da mobile. Ho combinato rendering server-side, generazione statica e metadati strutturati in base al tipo di contenuto.",
                },
                {
                    title: "Coerenza tra web e app",
                    desc: "I due canali condividevano account, contenuti e interazioni, ma avevano navigazioni diverse. Ho mantenuto le regole nel backend e adattato la presentazione al contesto d'uso.",
                },
                {
                    title: "Flusso editoriale",
                    desc: "Pubblicare una notizia richiedeva campi, tassonomie e controlli diversi da un post della community. Il backoffice separava i flussi e dava alla redazione strumenti adatti a ciascun contenuto.",
                },
                {
                    title: "Moderazione",
                    desc: "Una community calcistica richiede visibilità sulle conversazioni e interventi rapidi. Ho previsto funzioni operative per gestire utenti e contenuti dal pannello interno.",
                },
            ],
        },
    },
    {
        slug: "freedhome",
        title: "Freedhome",
        seoTitle: "Freedhome — Gestione affitti brevi automatizzata",
        seoDescription:
            "Freedhome è una piattaforma per property manager: gestione prenotazioni, contratti digitali, automazioni operative e reporting per affitti brevi e mid-term.",
        tagline: "Gestione affitti brevi e mid-term, semplificata.",
        role: "Tech partner",
        year: "2024",
        summary:
            "Piattaforma per la gestione di immobili in affitto: prenotazioni, contratti, comunicazioni e automazioni operative.",
        description: [
            "Freedhome è un prodotto per property manager e proprietari che gestiscono affitti brevi o di medio periodo. Centralizza prenotazioni, comunicazioni con gli ospiti, contratti e attività ricorrenti, riducendo il lavoro manuale.",
            "Architettura distribuita con backend dedicato, frontend custom e automazioni n8n per i flussi operativi (check-in, cleaning, comunicazioni).",
        ],
        features: [
            { title: "Gestione prenotazioni", desc: "Calendario unificato, dettaglio ospiti e ciclo di vita della prenotazione." },
            { title: "Contratti digitali", desc: "Generazione e firma dei contratti di locazione con flussi automatizzati." },
            { title: "Automazioni operative", desc: "Workflow n8n per check-in, cleaning, comunicazioni e reminder agli ospiti." },
            { title: "Reporting", desc: "Dashboard con metriche di occupancy, revenue e attività operative." },
        ],
        stack: [
            { area: "Backend", items: ["Node.js", "REST API"] },
            { area: "Frontend", items: ["Next.js", "Tailwind"] },
            { area: "Automazioni", items: ["n8n", "WordPress"] },
        ],
        icon: Home,
        kind: "WebApplication",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        caseStudy: {
            challenge:
                "I property manager che gestiscono affitti brevi e di medio periodo coordinano prenotazioni, contratti, check-in, pulizie e comunicazioni con gli ospiti su strumenti separati: spreadsheet, WhatsApp, email, calendari di terzi. Il risultato sono errori frequenti su date e disponibilità, tempo perso su task ripetitivi e nessuna visibilità sulle metriche operative reali.",
            solution:
                "Una piattaforma che centralizza calendario prenotazioni unificato, generazione contratti digitali, comunicazioni automatiche con gli ospiti e reporting. Automazioni n8n orchestrano i flussi operativi ricorrenti (reminder check-in, comunicazioni cleaning team, follow-up post-soggiorno), riducendo il lavoro manuale e gli errori di sincronizzazione.",
            results: [
                "Gestione end-to-end delle prenotazioni in un solo prodotto, dalla richiesta al check-out",
                "Generazione e gestione contratti di locazione digitali con flussi automatizzati",
                "Workflow n8n per check-in, pulizie, reminder e comunicazioni ricorrenti con ospiti",
                "Dashboard di reporting con metriche di occupancy, revenue e attività operative",
            ],
        },
    },
    {
        slug: "artissima", title: "Artissima", tagline: "Il catalogo digitale dell’arte contemporanea.",
        role: "Sviluppo web", year: "—",
        summary: "Un archivio digitale per esplorare le edizioni della fiera, le gallerie, gli artisti e le opere.",
        description: ["Il catalogo di Artissima raccoglie e rende consultabili le edizioni della fiera. Il lavoro sul software collega gallerie, artisti e opere in un archivio navigabile.", "L’applicazione web organizza i contenuti delle diverse edizioni e mantiene il collegamento con il catalogo corrente della fiera."],
        features: [
            { title: "Archivio delle edizioni", desc: "Consultazione del patrimonio delle diverse edizioni della fiera." },
            { title: "Artisti e gallerie", desc: "Schede collegate per esplorare protagonisti e opere del catalogo." },
            { title: "Contenuti organizzati", desc: "Importazione e organizzazione dei contenuti storici." },
        ],
        stack: [{area:"Applicazione web",items:["Next.js","React","TypeScript"]}],
        icon: BookOpen, kind:"WebApplication", applicationCategory:"ReferenceApplication", operatingSystem:"Web",
    },
    {
        slug: "club-treccani", title: "Club Treccani", tagline: "Una piattaforma digitale per vivere la cultura.",
        role: "Sviluppo web", year: "—",
        summary: "Il sito del Club Treccani: contenuti, iniziative culturali e servizi dedicati alla community degli iscritti.",
        description: ["Club Treccani riunisce contenuti e iniziative culturali in un’esperienza dedicata ai suoi iscritti. Il progetto comprende il sito web e le funzionalità della community.", "Il lavoro di sviluppo riguarda un tema WordPress personalizzato, con percorsi di registrazione, area personale e contenuti riservati."],
        features: [
            {title:"Area personale",desc:"Accesso degli iscritti ai servizi e ai contenuti del Club."},
            {title:"Contenuti culturali",desc:"Pagine e percorsi dedicati a iniziative, esperienze e approfondimenti."},
            {title:"Tema personalizzato",desc:"Interfacce sviluppate intorno all’identità del Club Treccani."},
        ],
        stack:[{area:"Sito e contenuti",items:["WordPress","PHP","JavaScript"]}],
        url:"https://clubtreccani.it",icon:BookOpen,kind:"WebApplication",applicationCategory:"LifestyleApplication",operatingSystem:"Web",
    },
    {
        slug: "sinfea", title: "Sinfea", tagline: "Dalla visione del founder al primo pilota.",
        role: "Fractional CTO", year: "2026",
        summary: "Leadership tecnica e sviluppo di una piattaforma per coordinare i processi operativi dei centri sanitari privati.",
        description: ["Sinfea sviluppa software per centri sanitari privati. Come Fractional CTO seguo le decisioni tecniche e il percorso che porta dalla fondazione esistente al primo pilota.", "Il lavoro mette in relazione prodotto, architettura e verifiche concrete: dati persistenti, accessi separati tra organizzazioni e attività programmate. La schermata presentata usa esclusivamente dati sintetici di dimostrazione."],
        features:[
            {title:"Revisione tecnica",desc:"Valutare ciò che esiste già e decidere cosa mantenere prima di sviluppare."},
            {title:"Processi operativi",desc:"Coordinare attività e avanzamento dei percorsi di lavoro del centro."},
            {title:"Separazione dei dati",desc:"Verificare i confini di accesso tra organizzazioni con ambienti di prova."},
            {title:"Preparazione al pilota",desc:"Trasformare i rischi tecnici in risultati osservabili e verificabili."},
        ],
        stack:[{area:"Leadership tecnica",items:["Architettura","Sicurezza","Workflow","Verifiche di rilascio"]}],
        icon:Target,kind:"WebApplication",applicationCategory:"BusinessApplication",operatingSystem:"Web",
    },
];

export function getProject(slug: string): Project | undefined {
    return PROJECTS.find((p) => p.slug === slug);
}

export function getPublicProjects(): Project[] {
    return PROJECTS;
}
