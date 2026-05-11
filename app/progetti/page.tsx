import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { PROJECTS, PROJECT_STATUS_LABEL } from "@/src/lib/projects";
import { SITE_URL } from "@/src/lib/utils";

export const metadata: Metadata = {
    title: { absolute: "Progetti di sviluppo web e app | Federico Tassara" },
    description:
        "Una selezione di progetti su cui ho lavorato come fondatore, CTO o partner tecnico: app mobile, SaaS, piattaforme community e tool interni con AI.",
    alternates: { canonical: `${SITE_URL}/progetti` },
    openGraph: {
        title: "Progetti di sviluppo web e app",
        description:
            "App mobile React Native, SaaS, piattaforme community e tool interni con AI: una selezione di lavori.",
        url: `${SITE_URL}/progetti`,
        type: "website",
    },
};

const url = `${SITE_URL}/progetti`;

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Progetti", item: url },
    ],
};

const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${url}#list`,
    name: "Progetti di Federico Tassara",
    inLanguage: "it-IT",
    numberOfItems: PROJECTS.length,
    itemListElement: PROJECTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/progetti/${p.slug}`,
        name: p.title,
    })),
};

export default function ProgettiPage() {
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
                <SectionTitle
                    eyebrow="Progetti"
                    title="Cose che ho costruito."
                    description="Una selezione di progetti su cui ho lavorato come fondatore, CTO o partner tecnico — alcuni rilasciati, altri in sviluppo, alcuni privati."
                    as="h1"
                />
                <div className="mt-14 grid gap-6 md:grid-cols-2">
                    {PROJECTS.map((p, i) => {
                        const Icon = p.icon;
                        return (
                            <Link
                                key={p.slug}
                                href={`/progetti/${p.slug}`}
                                className="group anim-fade-up flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white p-8 transition-all hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_20px_50px_-20px_rgba(28,31,51,0.18)]"
                                style={{ animationDelay: `${i * 70}ms` }}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <span className="flex size-12 items-center justify-center rounded-xl bg-surface-alt text-ink">
                                        <Icon className="size-5" />
                                    </span>
                                    <span className="rounded-full border border-ink/10 bg-surface-alt px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-muted">
                                        {PROJECT_STATUS_LABEL[p.status]}
                                    </span>
                                </div>
                                <h2 className="mt-6 text-2xl font-bold text-ink">{p.title}</h2>
                                <p className="mt-1 text-base text-ink-soft">{p.tagline}</p>
                                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted">
                                    {p.summary}
                                </p>
                                <div className="mt-5 flex flex-wrap gap-1.5">
                                    {p.stack.flatMap((s) => s.items).slice(0, 4).map((s) => (
                                        <span
                                            key={s}
                                            className="rounded-full border border-ink/10 bg-surface-alt px-2.5 py-1 text-xs text-ink-soft"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                                    Scopri il progetto
                                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </Container>
        </section>
        </>
    );
}
