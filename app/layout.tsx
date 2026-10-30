import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";
import { SITE_URL } from "@/src/lib/utils";

const geist = localFont({
    src: "../public/fonts/geist.woff2",
    display: "swap",
    weight: "100 900",
    style: "normal",
    variable: "--font-geist",
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Fractional CTO e Sviluppatore Web e Mobile | Federico Tassara",
        template: "%s | Federico Tassara",
    },
    description:
        "Fractional CTO e sviluppatore software web e mobile in Italia. Automazioni aziendali, applicazioni su misura e consulenza tecnica per startup e PMI.",
    authors: [{ name: "Federico Tassara", url: SITE_URL }],
    creator: "Federico Tassara",
    publisher: "Federico Tassara",
    openGraph: {
        title: "Federico Tassara — Sviluppatore Web, Mobile & Fractional CTO in Italia",
        description:
            "Fractional CTO, sviluppo software web e mobile e automazioni aziendali per startup e PMI italiane.",
        url: SITE_URL,
        siteName: "Federico Tassara",
        type: "website",
        locale: "it_IT",
    },
    twitter: {
        card: "summary_large_image",
        title: "Federico Tassara — Full Stack Developer & Fractional CTO",
        description:
            "Sviluppo app, siti web e piattaforme personalizzate per aziende e startup italiane.",
    },
    alternates: { canonical: SITE_URL },
    robots: { index: true, follow: true },
    other: {
        "akintu-site-verification":
            "akv_8198aa0ee8875009b4c49a0d94c596cd64eecb7806c6d92c",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#1c1f33",
    colorScheme: "light",
};

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Federico Tassara",
    url: SITE_URL,
    image: `${SITE_URL}/images/federico-ritratto-professionale.png`,
    jobTitle: "Full Stack Developer & Fractional CTO",
    description:
        "Fractional CTO e sviluppatore software freelance specializzato in applicazioni web e mobile e automazioni aziendali.",
    inLanguage: "it-IT",
    knowsLanguage: ["it", "en"],
    knowsAbout: [
        "React",
        "Next.js",
        "React Native",
        "Node.js",
        "Laravel",
        "TypeScript",
        "Cloud architecture",
    ],
    sameAs: [
        "https://www.instagram.com/federicotassara_/",
        "https://www.youtube.com/@federicotassara_dev",
        "https://www.linkedin.com/in/federico-tassara/",
    ],
    hasOccupation: {
        "@type": "Occupation",
        name: "Full Stack Developer & Fractional CTO",
        occupationLocation: { "@type": "Country", name: "Italia" },
    },
    address: {
        "@type": "PostalAddress",
        streetAddress: "Via Tito Minniti 20",
        addressLocality: "Loano",
        addressRegion: "Savona",
        addressCountry: "IT",
    },
    worksFor: { "@id": `${SITE_URL}/#organization` },
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: "Federico Tassara",
    url: SITE_URL,
    logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/federico-ritratto-professionale.png`,
        width: 1122,
        height: 1402,
    },
    image: `${SITE_URL}/images/federico-ritratto-professionale.png`,
    email: "info@federicotassara.com",
    description:
        "Fractional CTO, sviluppo software web e mobile e automazioni aziendali per startup e PMI.",
    founder: { "@id": `${SITE_URL}/#person` },
    inLanguage: "it-IT",
    areaServed: { "@type": "Country", name: "Italia" },
    address: [
        {
            "@type": "PostalAddress",
            streetAddress: "Via Tito Minniti 20",
            addressLocality: "Loano",
            addressRegion: "Savona",
            addressCountry: "IT",
        },
        {
            "@type": "PostalAddress",
            streetAddress: "Via Strada Torino 43",
            addressLocality: "Orbassano",
            addressRegion: "Torino",
            addressCountry: "IT",
        },
    ],
    serviceType: [
        "Fractional CTO",
        "Sviluppo software web e mobile",
        "Automazioni aziendali",
        "Tech Consulting, architettura e scalabilità",
    ],
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Federico Tassara",
    description:
        "Sito personale di Federico Tassara, sviluppatore Full Stack e Fractional CTO in Italia.",
    inLanguage: "it-IT",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
        "@type": "SearchAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="it" className={geist.variable}>
            <body className="antialiased">
                <div className="site-shell">
                <Header />
                <main id="main-content">{children}</main>
                <Footer />
                </div>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
                />
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-JP1XRSPY3W"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-JP1XRSPY3W');
                    `}
                </Script>
            </body>
        </html>
    );
}
