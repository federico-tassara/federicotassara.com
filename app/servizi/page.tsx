import type { Metadata } from "next";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { ServiceCard } from "@/src/components/ui/ServiceCard";
import { FeaturedProject } from "@/src/components/sections/FeaturedProject";
import { SERVICES } from "@/src/lib/services";
import { CALENDLY_URL, SITE_URL } from "@/src/lib/utils";

export const metadata: Metadata = {
    title: { absolute: "Servizi di sviluppo web, mobile e cloud | Federico Tassara" },
    description:
        "Sviluppo web e mobile, backend e API REST, architettura cloud, automazioni e tech consulting per startup e aziende italiane. Lavoro full-remote.",
    alternates: { canonical: `${SITE_URL}/servizi` },
    openGraph: {
        title: "Servizi di sviluppo web, mobile e cloud",
        description:
            "Sviluppo web, mobile, backend, architettura, automazioni e consulenza tecnica per startup e PMI.",
        url: `${SITE_URL}/servizi`,
        type: "website",
        images: [`${SITE_URL}/opengraph-image`],
    },
    twitter: {
        card: "summary_large_image",
        title: "Servizi di sviluppo web, mobile e cloud",
        description:
            "Sviluppo web, mobile, backend, architettura, automazioni e consulenza tecnica per startup e PMI.",
    },
};

const url = `${SITE_URL}/servizi`;

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Servizi", item: url },
    ],
};

const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${url}#list`,
    name: "Servizi di Federico Tassara",
    inLanguage: "it-IT",
    numberOfItems: SERVICES.length,
    itemListElement: SERVICES.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/servizi/${s.slug}`,
        name: s.title,
    })),
};

export default function ServiziPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
            />
            <section className="py-16 sm:py-24">
                <Container>
                    <div className="anim-fade-up max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            Servizi
                        </span>
                        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl md:leading-[1.05]">
                            Sei aree di lavoro,
                            <br />
                            una visione integrata.
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-muted">
                            Dal prodotto digitale alla consulenza strategica: ti seguo end-to-end o
                            su una fase specifica del progetto, in base a quello che serve davvero.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Button href={CALENDLY_URL} external size="lg">
                                Prenota una call
                            </Button>
                            <Button href="/contatti" variant="outline" size="lg">
                                Scrivimi
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="pb-20 sm:pb-28">
                <Container>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {SERVICES.map((s, i) => (
                            <ServiceCard key={s.slug} service={s} index={i} />
                        ))}
                    </div>
                </Container>
            </section>

            <FeaturedProject slug="mose" />

            <section className="bg-surface-alt py-20 sm:py-28">
                <Container>
                    <SectionTitle
                        eyebrow="Come lavoro"
                        title="Quattro step, zero sorprese."
                        align="center"
                    />
                    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                n: "01",
                                title: "Discovery",
                                text: "Capisco contesto, obiettivi, vincoli e definiamo insieme cosa serve davvero.",
                            },
                            {
                                n: "02",
                                title: "Proposta tecnica",
                                text: "Architettura, stack, tempistiche e budget chiari prima di iniziare.",
                            },
                            {
                                n: "03",
                                title: "Sviluppo iterativo",
                                text: "Lavoro in sprint con feedback continui e demo periodiche.",
                            },
                            {
                                n: "04",
                                title: "Rilascio e supporto",
                                text: "Deploy, monitoraggio e supporto nel tempo per far crescere il prodotto.",
                            },
                        ].map((step, i) => (
                            <div
                                key={step.n}
                                className="anim-fade-up rounded-2xl border border-ink/8 bg-white p-7"
                                style={{ animationDelay: `${i * 60}ms` }}
                            >
                                <span className="text-sm font-bold text-muted">{step.n}</span>
                                <h3 className="mt-3 text-xl font-bold text-ink">{step.title}</h3>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{step.text}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
