import type { LucideIcon } from "lucide-react";
import {
    Code2,
    Smartphone,
    Server,
    Layers,
    Workflow,
    Compass,
} from "lucide-react";

export type FaqItem = { q: string; a: string };

export type Service = {
    slug: string;
    title: string;
    shortTitle: string;
    tagline: string;
    intro: string;
    icon: LucideIcon;
    deliverables: { title: string; description: string }[];
    problems: string[];
    technologies?: string[];
    seoTitle?: string;
    seoDescription?: string;
    faq?: FaqItem[];
};

export const SERVICES: Service[] = [
    {
        slug: "web-development",
        title: "Web Development",
        shortTitle: "Web Development",
        seoTitle: "Sviluppo Web App con Next.js e React",
        seoDescription:
            "Sviluppo web app moderne con Next.js e React: SaaS, dashboard, portali B2B/B2C e e-commerce headless ottimizzati per performance e SEO.",
        tagline:
            "Sviluppo web app moderne, veloci e ottimizzate per il business, pensate per crescere insieme al tuo prodotto.",
        intro:
            "Realizzo applicazioni web su misura con React e Next.js, ideali per startup, aziende e prodotti digitali in crescita. Curo prestazioni, esperienza utente e SEO tecnico fin dall’architettura.",
        icon: Code2,
        deliverables: [
            {
                title: "Piattaforme SaaS",
                description:
                    "Applicazioni complete con gestione utenti, ruoli, piani modulari e billing.",
            },
            {
                title: "Dashboard amministrative",
                description:
                    "Gestionali interni e pannelli di controllo con interfacce chiare e flussi efficienti.",
            },
            {
                title: "Portali B2B e B2C",
                description:
                    "Aree riservate, gestione contenuti, comunicazioni e onboarding utenti.",
            },
            {
                title: "E-commerce headless",
                description:
                    "Architetture moderne per negozi rapidi, scalabili e integrabili con il tuo CMS.",
            },
        ],
        problems: [
            "Applicazioni lente o difficili da usare",
            "Codice legacy difficile da mantenere ed estendere",
            "Problemi SEO tecnico e indicizzazione",
            "Esperienza utente non ottimizzata su mobile",
            "Modernizzazione di sistemi vecchi a basso rischio",
        ],
        technologies: ["React", "Next.js", "TypeScript", "Tailwind"],
    },
    {
        slug: "mobile-development",
        title: "Mobile Development",
        shortTitle: "Mobile Development",
        seoTitle: "Sviluppo App Mobile iOS e Android con React Native",
        seoDescription:
            "Sviluppo app mobile iOS e Android con React Native da unica codebase: business app, MVP startup e prodotti pensati per l'uso reale degli utenti.",
        tagline:
            "App mobile iOS e Android affidabili e performanti, progettate per l’utilizzo reale degli utenti.",
        intro:
            "Sviluppo app mobile moderne con React Native, pubblicabili su iOS e Android partendo da un’unica codebase. Riduco costi, tempi e complessità mantenendo qualità nativa.",
        icon: Smartphone,
        deliverables: [
            {
                title: "App per servizi digitali",
                description:
                    "Applicazioni orientate all’uso quotidiano con funzionalità chiare e prestazioni elevate.",
            },
            {
                title: "App business e B2B",
                description:
                    "Soluzioni aziendali per gestione processi e integrazione con sistemi esistenti.",
            },
            {
                title: "MVP per startup",
                description:
                    "Prototipi rapidi per validare il prodotto sul mercato con investimento contenuto.",
            },
            {
                title: "App integrate",
                description:
                    "Connessione fluida con backend, web app e servizi di terze parti.",
            },
        ],
        problems: [
            "Costi elevati dello sviluppo nativo duplicato",
            "Manutenzione di due codebase parallele",
            "App instabili con scarse performance",
            "Difficoltà negli aggiornamenti nel tempo",
            "Tempi lunghi per arrivare a un MVP testabile",
        ],
        technologies: ["React Native", "Expo", "TypeScript"],
        faq: [
            {
                q: "Quanto costa sviluppare un'app mobile in Italia?",
                a: "Un'app mobile cross-platform con React Native in Italia costa indicativamente tra €25.000 e €90.000 per la prima release. Il range dipende da numero di schermate (20-50), integrazioni (pagamenti, push, geolocalizzazione), backend custom e complessità del design. È buona pratica aggiungere il 15-25% di contingency e prevedere €300-1.500/mese per manutenzione e infrastruttura.",
            },
            {
                q: "Meglio app nativa o React Native?",
                a: "React Native conviene quando vuoi una sola codebase per iOS e Android, time-to-market rapido e budget contenuto: copre bene il 90% delle app business. App native (Swift/Kotlin) restano preferibili per giochi, AR/VR, uso intensivo di hardware o quando ogni millisecondo di performance conta.",
            },
            {
                q: "Quanto tempo serve per pubblicare un'app su App Store e Play Store?",
                a: "Da kickoff a pubblicazione: 3-6 mesi per un MVP, 6-12 mesi per una v1 completa. La review Apple richiede 24-72 ore, Google 1-7 giorni. È sensato pianificare un buffer di circa 2 settimane per il primo submit, dove emergono solitamente le richieste di adeguamento da parte degli store.",
            },
            {
                q: "Posso pubblicare la stessa app su iOS e Android?",
                a: "Sì: con React Native si parte da una codebase unica e si pubblica su entrambi gli store. Alcune componenti (in-app purchase, notifiche push, deep link) richiedono configurazioni separate, ma il grosso del lavoro è condiviso.",
            },
        ],
    },
    {
        slug: "backend-e-api",
        title: "Backend & API",
        shortTitle: "Backend & API",
        seoTitle: "Sviluppo Backend e API REST Scalabili",
        seoDescription:
            "Backend solidi e API REST scalabili con Node.js e Laravel: autenticazione, integrazioni, pannelli admin e infrastruttura pensata per crescere.",
        tagline:
            "Backend solidi e API scalabili che fanno funzionare in modo sicuro ed efficiente frontend e app.",
        intro:
            "Costruisco backend robusti e API REST scalabili con Node.js e Laravel, progettati per supportare applicazioni web e mobile moderne, ad alto carico e in crescita.",
        icon: Server,
        deliverables: [
            {
                title: "API REST e backend custom",
                description:
                    "API documentate, performanti e pensate per supportare più client (web, mobile, integrazioni).",
            },
            {
                title: "Sistemi di autenticazione",
                description:
                    "Login, ruoli, permessi e gestione accessi sicuri con best practice consolidate.",
            },
            {
                title: "Integrazioni terze parti",
                description:
                    "Pagamenti, servizi esterni, API di provider per estendere le funzionalità.",
            },
            {
                title: "Pannelli amministrativi",
                description:
                    "Gestione dati, utenti e contenuti con interfacce ad uso interno.",
            },
        ],
        problems: [
            "Strutture backend poco estendibili e fragili",
            "API lente, instabili o senza gestione errori",
            "Autenticazione e protezione dei dati insufficiente",
            "Integrazioni difficili o non documentate",
        ],
        technologies: ["Node.js", "Laravel", "PostgreSQL", "MongoDB"],
    },
    {
        slug: "architettura-e-scalabilita",
        title: "Architettura & Scalabilità",
        shortTitle: "Architettura & Scalabilità",
        seoTitle: "Architettura Cloud e Scalabilità Tecnica",
        seoDescription:
            "Progetto architetture cloud scalabili, CI/CD e ottimizzazione costi/performance per applicazioni web e mobile pensate per crescere nel tempo.",
        tagline:
            "Architetture tecniche stabili e pronte a crescere, riducendo rischi, costi e problemi futuri.",
        intro:
            "Progetto architetture cloud e flussi di deployment orientati alla stabilità e alla crescita nel tempo, con una visione tecnica integrata fra prodotto, team e infrastruttura.",
        icon: Layers,
        deliverables: [
            {
                title: "Architetture cloud scalabili",
                description:
                    "Infrastrutture pronte a crescere con utenti, funzionalità e nuovi mercati.",
            },
            {
                title: "Flussi di deployment",
                description:
                    "Processi di rilascio sicuri, ripetibili e automatizzati con CI/CD.",
            },
            {
                title: "Ottimizzazione performance e costi",
                description:
                    "Analisi e bilanciamento tra qualità del servizio e budget operativo.",
            },
            {
                title: "Supporto alla crescita",
                description:
                    "Accompagnamento nel tempo con consulenza tecnica continuativa.",
            },
        ],
        problems: [
            "Applicazioni che non reggono picchi di traffico",
            "Deployment manuali e soggetti a errori",
            "Ambienti di sviluppo e produzione incoerenti",
            "Costi cloud fuori controllo",
        ],
        technologies: ["AWS", "Docker", "GitHub Actions", "Vercel"],
    },
    {
        slug: "automazioni",
        title: "Automazioni e Ottimizzazione Processi",
        shortTitle: "Automazioni",
        seoTitle: "Automazione Processi Aziendali con n8n",
        seoDescription:
            "Automatizzo workflow tra CRM, email, database e API con n8n: riduco lavoro manuale, errori e aumento efficienza operativa di team e aziende.",
        tagline:
            "Automatizzo processi e workflow aziendali per ridurre il lavoro manuale, gli errori e aumentare l’efficienza operativa.",
        intro:
            "Snellisco processi ripetitivi con n8n, connettendo sistemi, CRM, email marketing e database. L’obiettivo è risparmiare tempo, minimizzare errori e aumentare l’efficienza dei team.",
        icon: Workflow,
        deliverables: [
            {
                title: "Workflow automatizzati",
                description:
                    "Automazioni tra CRM, email marketing, calendario e database aziendali.",
            },
            {
                title: "Integrazioni API",
                description:
                    "Connessione tra piattaforme interne ed esterne con regole personalizzate.",
            },
            {
                title: "Task ripetitivi automatizzati",
                description:
                    "Reportistica, notifiche e operazioni routine completamente automatizzate.",
            },
            {
                title: "Soluzioni personalizzate",
                description:
                    "Workflow su misura per ottimizzare risorse e produttività del team.",
            },
        ],
        problems: [
            "Processi manuali lenti con operazioni ripetitive",
            "Difficoltà di connessione tra strumenti diversi",
            "Workflow non tracciabili o poco efficienti",
            "Reporting manuale e data aggregation complessa",
        ],
        technologies: ["n8n", "Zapier", "Make", "Node.js"],
    },
    {
        slug: "tech-consulting",
        title: "Tech Consulting",
        shortTitle: "Tech Consulting",
        seoTitle: "Tech Consulting e Fractional CTO in Italia",
        seoDescription:
            "Tech Consulting e Fractional CTO part-time per startup e PMI italiane: scelte tecnologiche, roadmap, due diligence e audit di progetti esistenti.",
        tagline:
            "Supporto aziende e startup nelle decisioni tecnologiche per costruire prodotti solidi, sostenibili e pronti a crescere.",
        intro:
            "Affianco fondatori, CTO e team interni nelle scelte tecnologiche, di architettura e roadmap. Trasformo esigenze di business in piani tecnici chiari, eseguibili e misurabili.",
        icon: Compass,
        deliverables: [
            {
                title: "Scelte tecnologiche e architetturali",
                description:
                    "Analisi del contesto progettuale e definizione dello stack più adatto.",
            },
            {
                title: "Roadmap tecnica",
                description:
                    "Trasformazione delle esigenze di business in piani di sviluppo chiari.",
            },
            {
                title: "Revisione di progetti esistenti",
                description:
                    "Valutazione di codice, architettura e processi per ridurre il debito tecnico.",
            },
            {
                title: "Supporto a team interni",
                description:
                    "Affiancamento di CTO, product manager e sviluppatori in fase critica.",
            },
        ],
        problems: [
            "Scelte tecniche improvvisate o stack inadatti",
            "Progetti senza direzione chiara e debito tecnico accumulato",
            "Costi e tempi di sviluppo non prevedibili",
            "Difficoltà nel passare da idea a prodotto scalabile",
        ],
        faq: [
            {
                q: "Cos'è un Fractional CTO?",
                a: "Un Fractional CTO è un Chief Technology Officer part-time o on-demand che porta esperienza senior in azienda senza il costo di un CTO full-time. Si occupa di scelte tecnologiche, architettura, hiring del team tech, due diligence e roadmap di prodotto. Tipicamente lavora 1-3 giorni a settimana o su ingaggi mensili a forfait.",
            },
            {
                q: "Quando una startup ha bisogno di un Fractional CTO?",
                a: "Quando hai un'idea ma nessun co-founder tecnico, prima di un round di investimento (per due diligence), durante una crescita rapida del team tech, o quando devi prendere decisioni di architettura che impatteranno i prossimi 2-3 anni di prodotto.",
            },
            {
                q: "Quanto costa un Fractional CTO in Italia?",
                a: "Le tariffe in Italia variano indicativamente tra €120 e €250/ora, oppure con pacchetti mensili da €3.000 a €15.000 in base a giorni/settimana e seniority. Per startup early-stage esistono modelli misti equity + cash ridotto.",
            },
            {
                q: "Cosa fa un Fractional CTO nelle prime settimane?",
                a: "Tipicamente nelle prime 2-4 settimane si fa audit dello stato attuale (codice, infrastruttura, team), si allineano roadmap tecnica e roadmap di business, si identificano i rischi prioritari e si definisce un piano di intervento misurabile.",
            },
        ],
    },
];

export function getService(slug: string): Service | undefined {
    return SERVICES.find((s) => s.slug === slug);
}
