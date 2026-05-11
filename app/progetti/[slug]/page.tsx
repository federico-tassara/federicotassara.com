import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Clock } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { PROJECTS, getProject, PROJECT_STATUS_LABEL } from "@/src/lib/projects";
import { getPostsByProject } from "@/src/lib/posts";
import { SITE_URL } from "@/src/lib/utils";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProject(slug);
    if (!project) return { title: "Progetto non trovato" };
    const seoTitle = project.seoTitle ?? `${project.title} — ${project.tagline}`;
    const seoDescription = project.seoDescription ?? project.summary;
    return {
        title: seoTitle,
        description: seoDescription,
        alternates: { canonical: `${SITE_URL}/progetti/${slug}` },
        openGraph: {
            title: seoTitle,
            description: seoDescription,
            url: `${SITE_URL}/progetti/${slug}`,
            type: "website",
        },
    };
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = getProject(slug);
    if (!project) notFound();

    const Icon = project.icon;
    const url = `${SITE_URL}/progetti/${slug}`;
    const relatedPosts = getPostsByProject(slug, 3);

    const dateCreated = project.year.match(/^\d{4}/)?.[0];
    const projectSchema = {
        "@context": "https://schema.org",
        "@type": project.kind,
        "@id": `${url}#software`,
        name: project.title,
        description: project.summary,
        url,
        inLanguage: "it-IT",
        applicationCategory: project.applicationCategory,
        operatingSystem: project.operatingSystem ?? "Web",
        author: { "@id": `${SITE_URL}/#person` },
        creator: { "@id": `${SITE_URL}/#person` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        ...(dateCreated && { dateCreated }),
        keywords: project.stack.flatMap((s) => s.items).join(", "),
        ...(project.url && { sameAs: [project.url] }),
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Progetti", item: `${SITE_URL}/progetti` },
            { "@type": "ListItem", position: 3, name: project.title, item: url },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <section className="py-16 sm:py-24">
                <Container>
                    <Link
                        href="/progetti"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink"
                    >
                        <ArrowLeft className="size-4" /> Tutti i progetti
                    </Link>
                    <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="flex size-12 items-center justify-center rounded-xl bg-ink text-white">
                                    <Icon className="size-5" />
                                </span>
                                <span className="rounded-full border border-ink/10 bg-surface-alt px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink-soft">
                                    {PROJECT_STATUS_LABEL[project.status]}
                                </span>
                            </div>
                            <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl md:leading-[1.05]">
                                {project.title}
                            </h1>
                            <p className="mt-5 text-lg leading-relaxed text-ink-soft sm:text-xl">
                                {project.tagline}
                            </p>
                            {project.description.map((p, i) => (
                                <p key={i} className="mt-4 text-base leading-relaxed text-muted">
                                    {p}
                                </p>
                            ))}
                            <div className="mt-8 flex flex-wrap gap-3">
                                {project.url ? (
                                    <Button href={project.url} external size="lg">
                                        Visita {new URL(project.url).hostname.replace(/^www\./, "")}
                                        <ArrowUpRight className="size-4" />
                                    </Button>
                                ) : (
                                    <Button href="/contatti" size="lg">
                                        Chiedi del progetto
                                    </Button>
                                )}
                                <Button href="/progetti" variant="outline" size="lg">
                                    Altri progetti
                                </Button>
                            </div>
                        </div>
                        <aside className="rounded-2xl border border-ink/8 bg-surface-alt p-7">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">
                                Info progetto
                            </h3>
                            <dl className="mt-5 space-y-4 text-sm">
                                <Row k="Ruolo" v={project.role} />
                                <Row k="Anno" v={project.year} />
                                <Row k="Status" v={PROJECT_STATUS_LABEL[project.status]} />
                                {project.url && (
                                    <Row k="Web" v={new URL(project.url).hostname.replace(/^www\./, "")} />
                                )}
                            </dl>
                        </aside>
                    </div>
                </Container>
            </section>

            <section className="bg-surface-alt py-20 sm:py-24">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            Funzionalità principali
                        </span>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-[2.4rem]">
                            Cosa fa {project.title}.
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-5 sm:grid-cols-2">
                        {project.features.map((f, i) => (
                            <div
                                key={f.title}
                                className="anim-fade-up flex gap-4 rounded-2xl border border-ink/8 bg-white p-7"
                                style={{ animationDelay: `${i * 60}ms` }}
                            >
                                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-ink" />
                                <div>
                                    <h3 className="text-lg font-bold text-ink">{f.title}</h3>
                                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20 sm:py-24">
                <Container>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {project.stack.map((s, i) => (
                            <div
                                key={s.area}
                                className="anim-fade-up rounded-2xl border border-ink/8 bg-white p-7"
                                style={{ animationDelay: `${i * 60}ms` }}
                            >
                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                                    {s.area}
                                </span>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {s.items.map((it) => (
                                        <span
                                            key={it}
                                            className="rounded-full border border-ink/10 bg-surface-alt px-3 py-1 text-sm text-ink-soft"
                                        >
                                            {it}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {relatedPosts.length > 0 && (
                <section className="bg-surface-alt py-20 sm:py-24">
                    <Container>
                        <div className="flex flex-wrap items-end justify-between gap-6">
                            <div>
                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                                    Dal blog
                                </span>
                                <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                                    Articoli su {project.title}.
                                </h2>
                            </div>
                            <Link
                                href={`/blog?project=${project.slug}`}
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-ink-soft"
                            >
                                Tutti gli articoli
                                <ArrowRight className="size-4" />
                            </Link>
                        </div>
                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            {relatedPosts.map((post, i) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group anim-fade-up flex flex-col rounded-2xl border border-ink/8 bg-white p-6 transition-all hover:-translate-y-1 hover:border-ink/20 hover:shadow-lg"
                                    style={{ animationDelay: `${i * 60}ms` }}
                                >
                                    <span className="text-xs text-muted">
                                        {new Date(post.date).toLocaleDateString("it-IT", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </span>
                                    <h3 className="mt-3 text-lg font-bold leading-snug text-ink group-hover:text-ink-soft">
                                        {post.title}
                                    </h3>
                                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs text-muted">
                                        <Clock className="size-3.5" />
                                        {post.readingTime} min lettura
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </section>
            )}
        </>
    );
}

function Row({ k, v }: { k: string; v: string }) {
    return (
        <div className="flex flex-col gap-0.5">
            <dt className="text-xs uppercase tracking-wider text-muted">{k}</dt>
            <dd className="text-ink">{v}</dd>
        </div>
    );
}
