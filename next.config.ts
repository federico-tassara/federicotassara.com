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
