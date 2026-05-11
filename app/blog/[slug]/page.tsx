import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import "highlight.js/styles/github.css";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import {
    getAllPosts,
    getPostBySlug,
    getRelatedPosts,
    processMarkdown,
} from "@/src/lib/posts";
import { CALENDLY_URL, SITE_URL } from "@/src/lib/utils";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return { title: "Articolo non trovato" };
    const url = `${SITE_URL}/blog/${slug}`;
    return {
        title: post.title,
        description: post.excerpt,
        keywords: post.tags,
        alternates: { canonical: url },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            url,
            publishedTime: post.date,
            authors: [post.author],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) notFound();

    const html = await processMarkdown(post.content);
    const related = getRelatedPosts(slug, post.tags, 3);
    const url = `${SITE_URL}/blog/${slug}`;

    const ogImage = `${url}/opengraph-image`;
    const wordCount = post.readingTime * 200;
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.excerpt,
        image: [ogImage],
        datePublished: post.date,
        dateModified: post.date,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: { "@id": `${SITE_URL}/#person` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "it-IT",
        articleSection: post.category,
        wordCount,
        keywords: post.tags.join(", "),
        isPartOf: { "@id": `${SITE_URL}/blog#blog` },
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
            { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <article className="py-16 sm:py-20">
                <Container size="sm">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink"
                    >
                        <ArrowLeft className="size-4" /> Torna al blog
                    </Link>
                    <header className="mt-8">
                        {post.category && (
                            <span className="inline-block rounded-full bg-surface-alt px-3 py-1 text-xs font-medium text-ink-soft">
                                {post.category}
                            </span>
                        )}
                        <h1 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl md:leading-[1.1]">
                            {post.title}
                        </h1>
                        {post.excerpt && (
                            <p className="mt-5 text-lg leading-relaxed text-muted">{post.excerpt}</p>
                        )}
                        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-ink/8 pt-5 text-sm text-muted">
                            <span className="inline-flex items-center gap-1.5">
                                <User className="size-3.5" />
                                {post.author}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <Calendar className="size-3.5" />
                                {new Date(post.date).toLocaleDateString("it-IT", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <Clock className="size-3.5" />
                                {post.readingTime} min lettura
                            </span>
                        </div>
                    </header>

                    <div
                        className="markdown-body mt-10"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />

                    {post.tags.length > 0 && (
                        <div className="mt-12 flex flex-wrap gap-2 border-t border-ink/8 pt-8">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs text-muted"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <aside className="mt-14 rounded-2xl border border-ink/8 bg-surface-alt p-8 sm:p-10">
                        <h2 className="text-2xl font-bold text-ink">Hai un progetto in mente?</h2>
                        <p className="mt-3 text-muted">
                            Una consulenza iniziale gratuita per capire come trasformare la tua idea in
                            un prodotto digitale solido e scalabile.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Button href={CALENDLY_URL} external>
                                Prenota una call
                            </Button>
                            <Button href="/contatti" variant="outline">
                                Scrivimi
                            </Button>
                        </div>
                    </aside>
                </Container>

                {related.length > 0 && (
                    <Container className="mt-20">
                        <h2 className="text-2xl font-bold text-ink">Articoli correlati</h2>
                        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {related.map((rp, i) => (
                                <Link
                                    key={rp.slug}
                                    href={`/blog/${rp.slug}`}
                                    className="group anim-fade-up flex flex-col rounded-2xl border border-ink/8 bg-white p-6 transition-all hover:-translate-y-1 hover:border-ink/20 hover:shadow-lg"
                                    style={{ animationDelay: `${i * 60}ms` }}
                                >
                                    <span className="text-xs text-muted">
                                        {new Date(rp.date).toLocaleDateString("it-IT", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </span>
                                    <h3 className="mt-3 text-lg font-bold leading-snug text-ink group-hover:text-ink-soft">
                                        {rp.title}
                                    </h3>
                                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                                        {rp.excerpt}
                                    </p>
                                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                                        Leggi
                                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </Container>
                )}
            </article>
        </>
    );
}
