// Shared by the homepage, service index and desktop/mobile navigation.
export type ServiceLink = {
    href: string;
    title: string;
    tagline: string;
};

export const PRIMARY_SERVICES: ServiceLink[] = [
    {
        href: "/fractional-cto",
        title: "Fractional CTO",
        tagline: "Direzione tecnologica a fianco di founder e team: strategia, roadmap e decisioni tecniche per far crescere il prodotto.",
    },
    {
        href: "/sviluppo-software-web-mobile",
        title: "Sviluppo software web e mobile",
        tagline: "Applicazioni web, app iOS e Android e backend su misura: dall’idea al rilascio, con supporto nel tempo.",
    },
    {
        href: "/automazione-processi-aziendali",
        title: "Automazioni aziendali",
        tagline: "Collego gestionali, CRM e strumenti aziendali per automatizzare attività ripetitive, ridurre errori e liberare tempo.",
    },
];

export const SERVICE_NAVIGATION: ServiceLink[] = [
    ...PRIMARY_SERVICES,
    {
        href: "/servizi/tech-consulting",
        title: "Tech Consulting",
        tagline: "Audit tecnici, architettura e scalabilità a supporto delle decisioni e della crescita del prodotto.",
    },
];
