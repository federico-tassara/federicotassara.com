import { Container } from "@/src/components/ui/Container";
import { TESTIMONIALS } from "@/src/lib/testimonials";

type TestimonialsProps = {
    /** Optional eyebrow/heading override. */
    eyebrow?: string;
    title?: string;
    /** Tailwind background utility for the section, to alternate with siblings. */
    className?: string;
};

/**
 * Renders client testimonials. Returns null while there are none, so it is safe
 * to mount on any page now and it will light up automatically once real quotes
 * are added to src/lib/testimonials.ts.
 */
export function Testimonials({
    eyebrow = "Dicono di me",
    title = "Cosa dicono i clienti.",
    className = "py-20 sm:py-24",
}: TestimonialsProps) {
    if (TESTIMONIALS.length === 0) return null;

    return (
        <section className={className}>
            <Container>
                <div className="max-w-3xl">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                        {eyebrow}
                    </span>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                        {title}
                    </h2>
                </div>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {TESTIMONIALS.map((t, i) => (
                        <figure
                            key={`${t.name}-${i}`}
                            className="anim-fade-up flex flex-col rounded-2xl border border-ink/8 bg-white p-6"
                            style={{ animationDelay: `${i * 40}ms` }}
                        >
                            <blockquote className="flex-1 text-[15px] leading-relaxed text-ink-soft">
                                “{t.quote}”
                            </blockquote>
                            <figcaption className="mt-5 text-sm">
                                <span className="font-semibold text-ink">{t.name}</span>
                                <span className="text-muted"> — {t.role}, {t.company}</span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </Container>
        </section>
    );
}
