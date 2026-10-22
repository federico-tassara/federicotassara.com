import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { PROJECTS } from "@/src/lib/projects";
import { ProjectVisual } from "@/src/components/ui/ProjectVisual";
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
        images: [`${SITE_URL}/opengraph-image`],
    },
    twitter: {
        card: "summary_large_image",
        title: "Progetti di sviluppo web e app",
        description:
            "App mobile React Native, SaaS, piattaforme community e tool interni con AI: una selezione di lavori.",
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
                    title="Software che ho costruito."
                    description="Una selezione di app mobile, SaaS, piattaforme community e software su misura che ho costruito come fondatore, CTO o partner tecnico."
                    as="h1"
                />
                <div className="portfolio-grid">
                    {["artissima", "club-treccani", "mose", "oraloco", "freedhome", "sinfea", "akintu", "lectum"].map(slug => {
                        const project = PROJECTS.find(p => p.slug === slug)!;
                        return <article key={project.slug} className="portfolio-project">
                            <Link href={`/progetti/${project.slug}`} className="portfolio-image-link" aria-label={`Scopri ${project.title}`}><ProjectVisual slug={project.slug} /></Link>
                            <div className="portfolio-project-title"><h2><Link href={`/progetti/${project.slug}`}>{project.title}</Link></h2><ArrowRight size={22} aria-hidden="true" /></div>
                            <p className="portfolio-role">{project.role}</p>
                            <p className="portfolio-summary">{project.summary}</p>
                            <div className="portfolio-tags">{project.stack.flatMap(s => s.items).slice(0,3).map(t => <span key={t}>{t}</span>)}</div>
                        </article>;
                    })}
                </div>
            </Container>
        </section>
        </>
    );
}
