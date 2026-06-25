import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { getProject } from "@/src/lib/projects";

type FeaturedProjectProps = {
    /** Project slug to feature, e.g. "mose". */
    slug: string;
    eyebrow?: string;
    /** Tailwind background utility for the section. */
    className?: string;
    /** Max number of result bullets to show. */
    maxResults?: number;
};

/**
 * Surfaces an existing project case study as a "featured project" block on a
 * money page, so the strongest proof assets (e.g. MOSE) are visible in the
 * sales flow instead of being buried under /progetti.
 */
export function FeaturedProject({
    slug,
    eyebrow = "Progetto in evidenza",
    className = "py-20 sm:py-24",
    maxResults = 4,
}: FeaturedProjectProps) {
    const project = getProject(slug);
    if (!project) return null;

    const results = project.caseStudy?.results.slice(0, maxResults) ?? [];

    return (
        <section className={className}>
            <Container>
                <div className="anim-fade-up overflow-hidden rounded-3xl border border-ink/8 bg-white p-8 sm:p-12">
                    <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                                {eyebrow}
                            </span>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                                {project.title}
                            </h2>
                            <p className="mt-4 text-base text-ink-soft sm:text-lg">
                                {project.tagline}
                            </p>
                            {project.caseStudy?.challenge && (
                                <p className="mt-5 text-[15px] leading-relaxed text-muted">
                                    {project.caseStudy.challenge}
                                </p>
                            )}
                            <Link
                                href={`/progetti/${project.slug}`}
                                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
                            >
                                Vedi il caso studio
                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                        </div>
                        {results.length > 0 && (
                            <ul className="space-y-4 lg:border-l lg:border-ink/8 lg:pl-10">
                                {results.map((r) => (
                                    <li key={r} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-ink/70" aria-hidden />
                                        <span>{r}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}
