import type { LucideIcon } from "lucide-react";
import {
    BookOpen,
    Target,
    Receipt,
    Smile,
    Home,
    Waves,
} from "lucide-react";

export type ProjectStatus = "rilasciato" | "in-corso" | "wip" | "privato";

export type ProjectKind =
    | "WebApplication"
    | "MobileApplication"
    | "SoftwareApplication";

export type CaseStudy = {
    challenge: string;
    solution: string;
    results: string[];
};

export type Project = {
    slug: string;
    title: string;
    tagline: string;
    status: ProjectStatus;
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
        slug: "lectum",
        title: "Lectum",
        seoTitle: "Lectum — App React Native per community di lettori",
        seoDescription:
            "Lectum è un'app mobile React Native per discussioni strutturate sui libri, club di lettura digitali, ricerca per ISBN e gestione della libreria personale.",
        tagline: "I tuoi libri, la tua community.",
        status: "in-corso",
        role: "Fondatore tecnico",
        year: "2025 — in corso",
        summary:
            "App mobile per discussioni strutturate sui libri, club di lettura digitali e gestione della libreria personale.",
        description: [
            "Lectum nasce dalla volontà di unificare gli strumenti frammentati dedicati ai libri. Mette al centro il libro come oggetto di conversazione: discussioni tematiche, club di lettura, ricerca per ISBN e libreria personale, in un'unica esperienza ordinata e tematica.",
            "L'esperienza si ispira ai forum strutturati ma è più ordinata e tematica rispetto ai feed infiniti: pensata per favorire discussioni di qualità invece che engagement vuoto.",
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
        url: "https://lectum.io",
        icon: BookOpen,
        kind: "MobileApplication",
        applicationCategory: "SocialNetworkingApplication",
        operatingSystem: "iOS, Android",
        caseStudy: {
            challenge:
                "Le conversazioni sui libri online sono distribuite tra Goodreads, Reddit, Discord e gruppi WhatsApp: ogni piattaforma ha pezzi del puzzle ma nessuna offre un'esperienza tematica e ordinata. I lettori che vogliono partecipare a club di lettura organizzati o discutere capitoli senza spoiler hanno strumenti frammentati e UX caotica.",
            solution:
                "Un'app mobile React Native che mette il libro al centro: ricerca per ISBN, thread strutturati per separare trama e personaggi, club di lettura con discussioni organizzate per capitoli, libreria personale e scudo anti-spoiler attivo per default. Sviluppata in public da fondatore tecnico, con cadenza di rilascio quindicinale e roadmap pubblica.",
            results: [
                "MVP rilasciato in 12 settimane partendo da zero, su iOS e Android da unica codebase",
                "Architettura backend modulare Node.js + Express + MongoDB con caching Redis e queue BullMQ",
                "Schema dati pensato per scalare a thread profondi, commenti annidati e metadata variabili per libro",
                "Community di beta tester attiva con feedback iterativi integrati nella roadmap",
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
        status: "in-corso",
        role: "Sviluppo full-stack",
        year: "2025 — in corso",
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
        slug: "varco",
        title: "Varco",
        seoTitle: "Varco — Lead generation con agenti AI per agenzie",
        seoDescription:
            "Varco è uno strumento interno di lead generation con agenti AI: identifica aziende pronte al contatto e genera outreach personalizzato per i clienti dell'agenzia.",
        tagline: "Trova il varco: il momento giusto per contattare un'azienda.",
        status: "wip",
        role: "Founder & Tech Lead",
        year: "2025 — WIP",
        summary:
            "Strumento interno di lead generation che usa agenti AI per identificare aziende pronte a essere contattate.",
        description: [
            "Varco è uno strumento interno usato per trovare lead qualificati per i nostri clienti. Il flusso: creiamo un'azienda cliente in Varco, lanciamo campagne, gli agenti AI trovano lead qualificati, approviamo le email e le inviamo via Instantly. I clienti ricevono lead pronti.",
            "Architettura modulare basata su agenti AI specializzati, code BullMQ, integrazioni Serper per web search e Claude API per il ragionamento. Pensato per essere scalabile orizzontalmente.",
        ],
        features: [
            { title: "Agenti AI specializzati", desc: "Pipeline di agenti che analizzano segnali, qualificano lead e generano outreach personalizzato." },
            { title: "Campagne per cliente", desc: "Gestione separata di aziende, campagne, lead ed email draft con audit trail completo." },
            { title: "Integrazione Instantly", desc: "Invio delle email approvate via Instantly.ai con gestione delle response e follow-up." },
            { title: "Dashboard operatori", desc: "Interfaccia interna su Next.js per gestire approvazioni e monitorare il flusso." },
        ],
        stack: [
            { area: "Backend", items: ["Node.js", "Express", "MongoDB", "BullMQ", "Redis"] },
            { area: "Frontend", items: ["Next.js 15", "shadcn/ui", "Tailwind", "Clerk"] },
            { area: "AI / Agenti", items: ["Claude Sonnet 4.5", "MoltBot", "Serper API"] },
            { area: "Outreach", items: ["Instantly.ai", "n8n"] },
        ],
        icon: Target,
        kind: "WebApplication",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        caseStudy: {
            challenge:
                "Le agenzie marketing che generano lead per i loro clienti perdono molte ore su attività manuali: scraping, qualifica prospect, ricerca segnali di acquisto, scrittura di email outreach personalizzate. La maggior parte del tempo non genera valore — è preparazione. E i lead prodotti spesso non sono qualificati abbastanza per giustificare il costo del processo.",
            solution:
                "Una pipeline di agenti AI orchestrati che identifica aziende pronte al contatto, le qualifica su criteri specifici per cliente e genera email outreach personalizzate. Gli operatori interni approvano le email che vengono inviate via Instantly.ai. Tutto il flusso è auditato, ripetibile e scalabile: una sola persona può gestire decine di campagne in parallelo.",
            results: [
                "Architettura modulare con agenti specializzati basati su Claude Sonnet 4.5, orchestrati da MoltBot",
                "Pipeline asincrona con BullMQ + Redis per processare migliaia di lead senza bloccare la UI",
                "Dashboard operatori Next.js 15 + shadcn/ui per gestione aziende, campagne e approvazioni",
                "Integrazione end-to-end con Instantly.ai, Serper API per ricerca e n8n per side effects",
            ],
        },
    },
    {
        slug: "forfi",
        title: "Forfi",
        seoTitle: "Forfi — SaaS gestione fiscale partita IVA forfettaria",
        seoDescription:
            "Forfi è un SaaS per partite IVA forfettarie italiane: fatturazione elettronica con invio SDI, calcolo tasse, gestione clienti e abbonamenti Stripe.",
        tagline: "Gestione fiscale per partite IVA in regime forfettario.",
        status: "privato",
        role: "Founder & CTO",
        year: "2024 — in corso",
        summary:
            "SaaS per freelance italiani in regime forfettario: fatturazione, spese, calcolo tasse, invio SDI e gestione abbonamenti.",
        description: [
            "Forfi è un SaaS dedicato ai professionisti in regime forfettario. Gestisce fatture elettroniche con invio SDI tramite Aruba, tracciamento spese, calcolo imposte e contributi, e abbonamenti Stripe per i piani di servizio.",
            "Architettura layered MVC rigorosa sul backend, frontend con Next.js 15 e Clerk per l'autenticazione. Storage file su Cloudflare R2 con signed URL.",
        ],
        features: [
            { title: "Fatturazione elettronica", desc: "Emissione, ricezione e invio SDI tramite integrazione Aruba, con counter per anno fiscale." },
            { title: "Gestione clienti e anni fiscali", desc: "Anagrafica clienti, archivio annuale e numerazione automatica delle fatture." },
            { title: "Abbonamenti Stripe", desc: "Piani di servizio con gestione checkout, billing portal e webhook." },
            { title: "Notifiche e email transazionali", desc: "Invio email via Brevo con template personalizzati e queue Bull." },
        ],
        stack: [
            { area: "Backend", items: ["Express", "TypeScript", "MongoDB", "Bull", "Redis"] },
            { area: "Frontend", items: ["Next.js 15", "React Query", "Zustand", "shadcn/ui"] },
            { area: "Auth & Pagamenti", items: ["Clerk", "Stripe"] },
            { area: "Integrazioni", items: ["Aruba SDI", "Brevo", "Cloudflare R2"] },
        ],
        icon: Receipt,
        kind: "WebApplication",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        caseStudy: {
            challenge:
                "I professionisti in regime forfettario in Italia gestiscono fatturazione SDI, tracciamento spese, calcolo imposte e abbonamenti con strumenti separati, spesso vecchi e fiscalmente non aggiornati. Il tempo speso su gestione amministrativa è alto rispetto al valore prodotto, con rischio reale di errori sulle scadenze.",
            solution:
                "Un SaaS dedicato che integra in un solo prodotto: emissione e invio fatture elettroniche via Aruba SDI, anagrafica clienti, anni fiscali separati con numerazione automatica, abbonamenti Stripe per i piani, file storage Cloudflare R2 con signed URL e notifiche transazionali Brevo. Backend layered MVC rigoroso, frontend Next.js 15 con Clerk.",
            results: [
                "Architettura backend con 5 modelli Mongoose (User, Client, Invoice, FiscalYear, InvoiceCounter) e queue Bull dedicata per task fiscali",
                "Invio SDI funzionante con counter automatico per anno fiscale e gestione stati ricevuta",
                "Integrazione Stripe completa con webhook, billing portal e gestione abbonamenti per piani di servizio",
                "Pipeline CI/CD su CapRover (backend) e Vercel (frontend) con ambienti separati staging/produzione",
            ],
        },
    },
    {
        slug: "oraloco",
        title: "Oraloco",
        seoTitle: "Oraloco — Community per appassionati di orologi",
        seoDescription:
            "Oraloco è la piattaforma per appassionati di orologi: contenuti editoriali, schede tecniche, community moderata e app mobile companion in sviluppo.",
        tagline: "La community degli appassionati di orologi.",
        status: "in-corso",
        role: "Founder & Fractional CTO",
        year: "2023 — in corso",
        summary:
            "Piattaforma web e mobile dedicata alla community degli appassionati di orologi: contenuti, community, mercato.",
        description: [
            "Oraloco è la piattaforma per chi ama gli orologi: contenuti editoriali, schede tecniche, community attiva e ambiente di confronto fra collezionisti. Il prodotto include un sito web pubblicato e un'app mobile in sviluppo.",
            "L'obiettivo è creare un punto di riferimento italiano per la cultura orologiera, con SEO curato, contenuti di qualità e una community moderata.",
        ],
        features: [
            { title: "Sito editoriale", desc: "Contenuti, schede orologi e SEO ottimizzato su Nuxt 3 con sitemap dinamica e schema.org." },
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
        url: "https://oraloco.com",
        icon: Smile,
        kind: "WebApplication",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "Web, iOS, Android",
        caseStudy: {
            challenge:
                "La community italiana degli appassionati di orologi è frammentata tra forum vecchi, gruppi Facebook poco moderati e thread Reddit. Mancava un punto di riferimento moderno, curato editorialmente e ottimizzato per la ricerca organica, capace di unire contenuti tecnici e community in un'unica esperienza coerente.",
            solution:
                "Una piattaforma editoriale costruita su Nuxt 3 con SSR/SSG, schede orologi strutturate e SEO curato, affiancata da un'app mobile companion in React Native (Expo) per la community e i contenuti in mobilità. Backoffice operatori dedicato per gestire contenuti, utenti e moderazione, con integrazione di Brevo per email transazionali e GTM per analytics.",
            results: [
                "Sito SEO-friendly con SSR/SSG, sitemap dinamica, schema.org strutturato e Core Web Vitals nei target Google",
                "App mobile companion con autenticazione Apple/Google Sign-In e navigazione expo-router",
                "Backoffice interno completo per gestione contenuti editoriali, schede tecniche e community",
                "Architettura pensata per scalare a migliaia di pagine indicizzate sul mercato italiano degli orologi",
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
        status: "in-corso",
        role: "Tech partner",
        year: "2024 — in corso",
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
];

export function getProject(slug: string): Project | undefined {
    return PROJECTS.find((p) => p.slug === slug);
}

export function getPublicProjects(): Project[] {
    return PROJECTS;
}

export const PROJECT_STATUS_LABEL: Record<ProjectStatus, string> = {
    rilasciato: "Rilasciato",
    "in-corso": "In corso",
    wip: "Work in progress",
    privato: "Progetto privato",
};
