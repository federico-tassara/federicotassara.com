import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";
import { SITE_URL } from "@/src/lib/utils";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-montserrat",
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Sviluppatore Web e Fractional CTO Italia | Federico Tassara",
        template: "%s | Federico Tassara",
    },
    description:
        "Sviluppatore Full Stack freelance in Italia. Sviluppo applicazioni web, app mobile, architetture scalabili e consulenza tecnica per startup e aziende.",
    authors: [{ name: "Federico Tassara", url: SITE_URL }],
    creator: "Federico Tassara",
    publisher: "Federico Tassara",
    openGraph: {
        title: "Federico Tassara — Sviluppatore Web, Mobile & Fractional CTO in Italia",
        description:
            "Sviluppo app mobile, siti web e piattaforme per startup e aziende italiane. Disponibile per progetti, consulenze e ruolo di CTO part-time.",
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
    image: `${SITE_URL}/images/profile.jpeg`,
    jobTitle: "Full Stack Developer & Fractional CTO",
    description:
        "Sviluppatore Full Stack freelance specializzato in applicazioni web e mobile, architetture scalabili e consulenza tecnica.",
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
        url: `${SITE_URL}/images/profile.jpeg`,
        width: 512,
        height: 512,
    },
    image: `${SITE_URL}/images/profile.jpeg`,
    email: "info@federicotassara.com",
    description:
        "Sviluppo applicazioni web e mobile, architetture scalabili e consulenza tecnica per startup e aziende.",
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
        "Web Development",
        "Mobile Development",
        "Backend & API",
        "Cloud Architecture",
        "Tech Consulting",
        "Process Automation",
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
        <html lang="it" className={montserrat.variable}>
            <body className="antialiased">
                <Header />
                <main className="pt-16 sm:pt-18">{children}</main>
                <Footer />
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
            </body>
        </html>
    );
}
