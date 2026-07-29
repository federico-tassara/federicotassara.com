import type { NextConfig } from "next";

const securityHeaders = [
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "SAMEORIGIN" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
    },
    {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
    },
];

// URL della struttura pre-migrazione (senza prefisso /blog/) ancora indicizzati
// su Search Console: senza 301 restituiscono 404 e, dove il post esiste ancora,
// competono in SERP con la versione nuova.
const legacyPostRedirects = [
    "differenza-app-native-react-native",
    "stimare-budget-web-mobile-app",
    "migrare-web-app-legacy-react-nextjs",
    "riscrivere-piattaforma-zero",
    // Contenuti ricreati il 2026-07-29 sugli slug originali, sotto /blog.
    // Nota: "structurare" è un refuso dello slug storico, mantenuto perché
    // è quello indicizzato da Google.
    "notifiche-push-app-react-native",
    "best-practice-structurare-node-express",
    "gestione-autenticazione-ruoli-react",
    "architettura-sistema-ai-backend-frontend",
    "differenza-scaling-verticale-orizzontale",
    // Emerso dal drilldown di copertura del 2026-07-29: aveva gia l'equivalente
    // vivo, ma con zero impression non compariva nel report Prestazioni.
    "vantaggi-nextjs-seo-performance",
].map((slug) => ({
    source: `/${slug}`,
    destination: `/blog/${slug}`,
    permanent: true,
}));

// Stessa migrazione, ma il contenuto non è stato riportato: qui il 301 punta alla
// pagina che copre l'intento più vicino. Se uno di questi post viene ricreato,
// rimuovere la riga corrispondente e ripubblicare sullo slug originale.
const orphanedPostRedirects = [
    ["come-sviluppare-web-app-react", "/servizi/web-development"],
    ["integrare-ai-react-native", "/blog/prototipare-funzionalita-ai-app"],
    ["perche-scegliere-react-prossima-web-app-aziendale", "/servizi/web-development"],
    ["organizzare-progetto-freelance", "/blog/cosa-chiedere-sviluppatore-progetto"],
    ["ai-suggerimenti-personalizzati", "/blog/prototipare-funzionalita-ai-app"],
    ["migliorare-performance-react", "/blog/vantaggi-nextjs-seo-performance"],
    // Aggiunti dopo il drilldown di copertura del 2026-07-29. Sono URL WordPress
    // che Google ricorda ma che non producevano impression, quindi erano invisibili
    // nel report Prestazioni da cui era partita la mappatura.
    ["contact", "/contatti"],
    ["quando-usare-nextjs", "/blog/vantaggi-nextjs-seo-performance"],
    ["integrare-pagamenti-react-native", "/sviluppatore-react-native-italia"],
    ["collaborazione-sviluppatore-freelance-italia", "/blog/cosa-chiedere-sviluppatore-progetto"],
    [
        "riuso-del-codice-tra-react-e-react-native-strategie-efficaci-per-ridurre-tempi-e-costi",
        "/blog/differenza-app-native-react-native",
    ],
    // Questi due erano stati lasciati morire quando non esisteva una destinazione
    // sensata. Ora l'hub automazioni la fornisce.
    ["automazioni-aziendali-ai-api", "/automazione-processi-aziendali"],
    ["casi-d-uso-intelligenza-artificiale-web-mobile", "/automazione-processi-aziendali"],
    ["ai-esperienza-utente-web-app", "/blog/prototipare-funzionalita-ai-app"],
].map(([slug, destination]) => ({
    source: `/${slug}`,
    destination,
    permanent: true,
}));

const nextConfig: NextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [],
    },
    async redirects() {
        return [...legacyPostRedirects, ...orphanedPostRedirects];
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: securityHeaders,
            },
        ];
    },
};

export default nextConfig;
