import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: "Federico Tassara – Sviluppatore Web, App Mobile & Fractional CTO",
    description:
        "Sviluppatore Web e Mobile in Italia. Full Stack Developer & Fractional CTO. Sviluppo app iOS/Android, siti web professionali, piattaforme custom e MVP per startup e aziende italiane.",
    keywords: [
        "sviluppatore web Italia",
        "sviluppatore app Italia",
        "sviluppatore mobile freelance",
        "full stack developer Italia",
        "fractional CTO Italia",
        "consulente tecnologico Italia",
        "sviluppo app iOS Android",
        "sviluppatore freelance",
        "sviluppo software su misura",
        "sviluppo MVP startup Italia",
        "realizzazione app",
        "sviluppo siti web professionali",
    ],

    authors: [{ name: "Federico Tassara", url: "https://federicotassara.it" }],
    creator: "Federico Tassara",
    publisher: "Federico Tassara",

    openGraph: {
        title: "Federico Tassara – Sviluppatore Web, Mobile & Fractional CTO in Italia",
        description:
            "Sviluppo app mobile, siti web e piattaforme per startup e aziende italiane. Disponibile per progetti, consulenze e ruolo di CTO part-time.",
        url: "https://federicotassara.it",
        siteName: "Federico Tassara",
        type: "website",
        images: [
            {
                url: "https://federicotassara.it/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Federico Tassara – Sviluppatore Web e Mobile",
            },
        ],
        locale: "it_IT",
    },

    twitter: {
        card: "summary_large_image",
        title: "Federico Tassara – Full Stack Developer & Fractional CTO",
        description:
            "Sviluppo app, siti web e piattaforme personalizzate per aziende e startup italiane.",
        images: ["https://federicotassara.it/og-image.jpg"],
        creator: "@tua_handle_twitter",
    },
    alternates: {
        canonical: "https://federicotassara.it",
    },
};

export default async function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body
                className={`${montserrat.className} antialiased`}
            >
                {children}
                <Toaster />
            </body>
        </html>
    );
}
