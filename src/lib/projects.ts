import type { LucideIcon } from "lucide-react";
import {
    BookOpen,
    Target,
    Receipt,
    Smile,
    Home,
} from "lucide-react";

export type ProjectStatus = "rilasciato" | "in-corso" | "wip" | "privato";

export type ProjectKind =
    | "WebApplication"
    | "MobileApplication"
    | "SoftwareApplication";

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
