import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { ServiceCard } from "@/src/components/ui/ServiceCard";
import { FeaturedProject } from "@/src/components/sections/FeaturedProject";
import { SERVICES } from "@/src/lib/services";
import { CALENDLY_URL, SITE_URL } from "@/src/lib/utils";

const url = `${SITE_URL}/sviluppo-software-web-mobile`;
const title = "Sviluppo Software Web e Mobile su Misura";
const description = "Sviluppatore software freelance per startup e PMI: applicazioni web, app iOS e Android, SaaS e backend su misura. Dall’analisi al rilascio e alla manutenzione.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", images: [`${SITE_URL}/opengraph-image`] },
    twitter: { card: "summary_large_image", title, description },
};

const FAQ = [
    { q: "Puoi sviluppare sia la web app sia l’app mobile?", a: "Sì. Progetto frontend web, app iOS e Android e backend condiviso. Account, dati e regole di business restano coerenti tra i diversi canali, con interfacce pensate per il contesto d’uso." },
    { q: "Da dove si parte per un software su misura?", a: "Partiamo da utenti, processi e obiettivi. Definiamo le funzionalità necessarie alla prima release, le integrazioni e i vincoli tecnici. Su questa base preparo una proposta con ambito, tempi e budget." },
    { q: "Puoi lavorare su un’applicazione già esistente?", a: "Sì. Valuto codice e infrastruttura prima di proporre modifiche: nuove funzionalità, integrazioni, miglioramenti delle prestazioni o una migrazione graduale. La riscrittura completa va motivata dal contesto." },
    { q: "Segui anche pubblicazione e manutenzione?", a: "Mi occupo del rilascio delle applicazioni web e della preparazione delle app per gli store. Definiamo insieme monitoraggio, aggiornamenti e supporto in base alle esigenze del prodotto." },
];

const schema = [
    { "@context": "https://schema.org", "@type": "Service", "@id": `${url}#service`, name: title, description, url, provider: { "@id": `${SITE_URL}/#organization` }, areaServed: { "@type": "Country", name: "Italia" }, serviceType: "Sviluppo software web e mobile", inLanguage: "it-IT" },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Servizi", item: `${SITE_URL}/servizi` },
        { "@type": "ListItem", position: 3, name: "Sviluppo software web e mobile", item: url },
    ] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
];

export default function SoftwareDevelopmentPage() {
    return <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <section className="py-16 sm:py-24">
            <Container>
                <Link href="/servizi" className="text-sm text-muted hover:text-ink">Tutti i servizi</Link>
                <div className="mt-8 max-w-3xl">
                    <span className="text-xs font-medium text-muted">Sviluppatore software freelance</span>
                    <h1 className="mt-3 text-4xl font-medium tracking-tight text-ink sm:text-5xl md:text-6xl">Sviluppo software web e mobile su misura.</h1>
                    <p className="mt-6 text-lg leading-relaxed text-muted">Realizzo applicazioni web, app iOS e Android e backend per startup e PMI. Seguo il progetto dall’analisi al rilascio, con un unico interlocutore per le scelte tecniche e lo sviluppo.</p>
                    <div className="mt-8 flex flex-wrap gap-3"><Button href={CALENDLY_URL} external size="lg">Parliamo del progetto</Button><Button href="/progetti" variant="outline" size="lg">Vedi i progetti</Button></div>
                </div>
            </Container>
        </section>
        <section className="bg-surface-alt py-20 sm:py-24">
            <Container>
                <SectionTitle eyebrow="Cosa realizzo" title="Dal prodotto web all’app in tasca." description="Scegliamo i canali e le tecnologie in base a chi userà il software, alle integrazioni necessarie e agli obiettivi del prodotto." />
                <div className="mt-8 grid gap-5 md:grid-cols-3">{SERVICES.filter(s => ["web-development", "mobile-development", "backend-e-api"].includes(s.slug)).map(s => <ServiceCard key={s.slug} service={{ href: `/servizi/${s.slug}`, title: s.title, tagline: s.tagline }} />)}</div>
                <p className="mt-8 leading-relaxed text-muted">Per un prodotto in abbonamento, approfondisci lo <Link href="/sviluppo-app-saas" className="underline underline-offset-4">sviluppo di piattaforme SaaS</Link>. Per le app multipiattaforma, trovi dettagli nell’approfondimento sullo <Link href="/sviluppatore-react-native-italia" className="underline underline-offset-4">sviluppo con React Native</Link>.</p>
            </Container>
        </section>
        <section className="py-20 sm:py-24">
            <Container>
                <SectionTitle eyebrow="Quando posso aiutarti" title="Un software che risponde a un’esigenza concreta." />
                <div className="mt-10 grid gap-8 md:grid-cols-3">{[
                    ["Validare un nuovo prodotto", "Definiamo un MVP con le funzionalità essenziali e lo portiamo agli utenti. Il feedback guida i passi successivi, senza costruire subito tutto."],
                    ["Digitalizzare un servizio", "Portali clienti, app per operatori sul campo e gestionali interni: progetto flussi utilizzabili nel lavoro quotidiano e collegati ai sistemi esistenti."],
                    ["Evolvere una piattaforma", "Aggiungo funzionalità e integrazioni, miglioro prestazioni e manutenzione e accompagno le migrazioni necessarie alla crescita."],
                ].map(([heading, text]) => <div key={heading}><h3 className="text-xl font-medium text-ink">{heading}</h3><p className="mt-3 leading-relaxed text-muted">{text}</p></div>)}</div>
            </Container>
        </section>
        <FeaturedProject slug="mose" />
        <section className="py-20 sm:py-24">
            <Container size="sm">
                <SectionTitle eyebrow="FAQ" title="Prima di iniziare." />
                <div className="mt-8 space-y-4">{FAQ.map(({ q, a }) => <details key={q} className="rounded-2xl border border-line p-6"><summary className="cursor-pointer font-medium text-ink">{q}</summary><p className="mt-4 leading-relaxed text-muted">{a}</p></details>)}</div>
            </Container>
        </section>
        <section className="bg-surface-alt py-20">
            <Container>
                <SectionTitle title="Sviluppo, direzione tecnica e processi." description="Il progetto può richiedere anche una guida tecnologica continuativa o un intervento sui flussi operativi dell’azienda." />
                <div className="mt-8 flex flex-wrap gap-3"><Button href="/fractional-cto" variant="outline">Fractional CTO</Button><Button href="/automazione-processi-aziendali" variant="outline">Automazioni aziendali</Button><Button href="/servizi/tech-consulting" variant="outline">Tech Consulting</Button></div>
            </Container>
        </section>
    </>;
}
