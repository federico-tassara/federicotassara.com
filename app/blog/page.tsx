import type { Metadata } from "next";
import { Container } from "@/src/components/ui/Container";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { PostCard } from "@/src/components/blog/PostCard";
import { BlogPagination } from "@/src/components/blog/BlogPagination";
import { BlogFilters } from "@/src/components/blog/BlogFilters";
import { getAllPosts, getPaginatedPosts } from "@/src/lib/posts";
import { getProject } from "@/src/lib/projects";
import { SITE_URL } from "@/src/lib/utils";

const PAGE_SIZE = 9;

interface PageProps {
    searchParams: Promise<{ project?: string; page?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
    const { project } = await searchParams;
    const proj = project ? getProject(project) : undefined;
    if (proj) {
        return {
            title: { absolute: `Articoli su ${proj.title} | Blog Federico Tassara` },
            description: `Articoli, guide e aggiornamenti su ${proj.title}: ${proj.tagline}`,
            alternates: { canonical: `${SITE_URL}/blog` },
            robots: { index: false, follow: true },
        };
    }
    return {
        title: { absolute: "Blog — Sviluppo web, mobile e architetture | Federico Tassara" },
        description:
            "Articoli, guide pratiche e riflessioni su sviluppo web, app mobile, architetture scalabili, AI e consulenza tecnica per startup e PMI italiane.",
        alternates: { canonical: `${SITE_URL}/blog` },
        openGraph: {
            title: "Blog — Sviluppo web, mobile e architetture",
            description:
                "Articoli e guide pratiche su sviluppo web, mobile, architetture e consulenza tecnica.",
            url: `${SITE_URL}/blog`,
            type: "website",
            images: [`${SITE_URL}/opengraph-image`],
        },
        twitter: {
            card: "summary_large_image",
            title: "Blog — Sviluppo web, mobile e architetture",
            description:
                "Articoli e guide pratiche su sviluppo web, mobile, architetture e consulenza tecnica.",
        },
    };
}

export default async function BlogPage({ searchParams }: PageProps) {
    const { project, page: pageStr } = await searchParams;
    const page = Math.max(1, Number(pageStr) || 1);

    const { posts, total, totalPages, pageSize } = getPaginatedPosts(page, PAGE_SIZE, { project });
    const allPosts = getAllPosts();
    const activeProject = project ? getProject(project) : undefined;

    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": `${SITE_URL}/blog#blog`,
        name: "Blog di Federico Tassara",
        description:
            "Articoli su sviluppo web e mobile, architetture scalabili, AI e consulenza tecnica.",
        url: `${SITE_URL}/blog`,
        inLanguage: "it-IT",
        publisher: { "@id": `${SITE_URL}/#organization` },
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/blog#breadcrumb`,
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        ],
    };

    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": `${SITE_URL}/blog#list`,
        name: "Articoli del blog",
        numberOfItems: allPosts.length,
        itemListElement: allPosts.slice(0, 20).map((post, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/blog/${post.slug}`,
            name: post.title,
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />
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
                        eyebrow={activeProject ? `Articoli su ${activeProject.title}` : "Blog"}
                        title={
                            activeProject
                                ? `Tutto su ${activeProject.title}.`
                                : "Idee, guide e riflessioni."
                        }
                        description={
                            activeProject
                                ? activeProject.tagline
                                : "Articoli pratici su sviluppo, architettura, AI e prodotto digitale. Scritto per chi vuole capire cosa c'è dietro alle scelte tecniche."
                        }
                        as="h1"
                    />

                    <div className="mt-10">
                        <BlogFilters active={project} />
                    </div>

                    {posts.length === 0 ? (
                        <div className="mt-14 rounded-2xl border border-ink/8 bg-surface-alt p-10 text-center text-muted">
                            Nessun articolo per questo filtro.
                        </div>
                    ) : (
                        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post, i) => (
                                <PostCard key={post.slug} post={post} index={i} />
                            ))}
                        </div>
                    )}
                    <BlogPagination
                        currentPage={page}
                        totalPages={totalPages}
                        totalPosts={total}
                        pageSize={pageSize}
                        queryParams={{ project }}
                    />
                </Container>
            </section>
        </>
    );
}
