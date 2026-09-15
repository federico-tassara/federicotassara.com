import type { LucideIcon } from "lucide-react";
import {
    Bot,
    BookOpen,
    Smile,
    Home,
    Waves,
} from "lucide-react";

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
            "AI Employee Platform che usa la conoscenza aziendale per assistere clienti, qualificare lead, consigliare prodotti e gestire prenotazioni.",
        description: [
            "AKINTU trasforma la conoscenza di un'azienda in un collaboratore digitale accessibile dal sito. Acquisisce contenuti web e documenti, li organizza in una base di conoscenza dedicata e li usa per rispondere, consigliare prodotti, qualificare contatti e accompagnare l'utente alla prenotazione.",
            "La piattaforma è multi-tenant e comprende dashboard Next.js, backend Node.js, ricerca semantica con PostgreSQL e pgvector, job asincroni e widget distribuibili su siti custom o tramite plugin WordPress. Come partner tecnico ho seguito architettura, sviluppo del prodotto e affidabilità delle integrazioni.",
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
        url: "https://akintu.io",
        icon: Bot,
        kind: "WebApplication",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        caseStudy: {
            challenge:
                "Molte aziende hanno informazioni commerciali distribuite tra pagine web, documenti e persone. I visitatori devono cercare da soli la risposta o attendere un contatto, mentre i team ripetono le stesse attività di qualificazione e assistenza senza un contesto condiviso.",
            solution:
                "Una piattaforma multi-tenant che acquisisce la conoscenza autorizzata dell'azienda e la rende utilizzabile da un AI Employee. Dashboard, backend e widget sono separati: l'indicizzazione semantica usa PostgreSQL con pgvector, le elaborazioni lunghe passano da code Redis e BullMQ e la distribuzione copre sia siti custom sia WordPress.",
            results: [
                "Pipeline di acquisizione per contenuti web, documenti e PDF con indicizzazione vettoriale per tenant",
                "Widget web riutilizzabile e plugin WordPress per integrare l'esperienza nei siti esistenti",
                "Flussi conversazionali per assistenza, raccomandazioni, qualificazione lead e prenotazioni",
                "Dashboard Next.js con onboarding, analytics e gestione degli abbonamenti Stripe",
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
            "Piattaforma web e mobile dedicata alla community degli appassionati di calciomercato: contenuti, news e community.",
        description: [
            "Oraloco è la piattaforma per chi segue il calciomercato: contenuti editoriali, news e approfondimenti, community attiva e ambiente di confronto fra tifosi e appassionati. Il prodotto include un sito web e un'app mobile companion.",
            "L'obiettivo è creare un punto di riferimento italiano sul calciomercato, con SEO curato, contenuti di qualità e una community moderata.",
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
        url: "https://oraloco.com",
        icon: Smile,
        kind: "WebApplication",
        applicationCategory: "SportsApplication",
        operatingSystem: "Web, iOS, Android",
        caseStudy: {
            challenge:
                "La community italiana del calciomercato è frammentata tra forum datati, gruppi Facebook poco moderati, thread Reddit e X. Mancava un punto di riferimento moderno, curato editorialmente e ottimizzato per la ricerca organica, capace di unire news, approfondimenti e community in un'unica esperienza coerente.",
            solution:
                "Una piattaforma editoriale costruita su Nuxt 3 con SSR/SSG, contenuti di calciomercato strutturati e SEO curato, affiancata da un'app mobile companion in React Native (Expo) per la community e i contenuti in mobilità. Backoffice operatori dedicato per gestire contenuti, utenti e moderazione, con integrazione di Brevo per email transazionali e GTM per analytics.",
            results: [
                "Sito SEO-friendly con SSR/SSG, sitemap dinamica, schema.org strutturato e Core Web Vitals nei target Google",
                "App mobile companion con autenticazione Apple/Google Sign-In e navigazione expo-router",
                "Backoffice interno completo per gestione contenuti editoriali e community",
                "Architettura pensata per scalare a migliaia di pagine indicizzate sul calciomercato italiano",
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
];

export function getProject(slug: string): Project | undefined {
    return PROJECTS.find((p) => p.slug === slug);
}

export function getPublicProjects(): Project[] {
    return PROJECTS;
}
