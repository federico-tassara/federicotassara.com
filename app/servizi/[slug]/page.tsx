import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { SERVICES, getService } from "@/src/lib/services";
import { CALENDLY_URL, SITE_URL } from "@/src/lib/utils";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = getService(slug);
    if (!service) return { title: "Servizio non trovato" };
    const url = `${SITE_URL}/servizi/${slug}`;
    const seoTitle = service.seoTitle ?? service.title;
    const seoDescription = service.seoDescription ?? service.tagline;
    return {
        title: seoTitle,
        description: seoDescription,
        alternates: { canonical: url },
        openGraph: {
            title: `${seoTitle} | Federico Tassara`,
            description: seoDescription,
            url,
            type: "website",
        },
    };
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const service = getService(slug);
    if (!service) notFound();

    const Icon = service.icon;
    const url = `${SITE_URL}/servizi/${slug}`;

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.title,
        description: service.tagline,
        url,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "Italia" },
        serviceType: service.title,
        inLanguage: "it-IT",
        audience: { "@type": "BusinessAudience" },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `Servizi ${service.title}`,
            itemListElement: service.deliverables.map((d, i) => ({
                "@type": "Offer",
                position: i + 1,
                itemOffered: {
                    "@type": "Service",
                    name: d.title,
                    description: d.description,
                },
            })),
        },
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Servizi", item: `${SITE_URL}/servizi` },
            { "@type": "ListItem", position: 3, name: service.title, item: url },
        ],
    };

    const faqSchema = service.faq && service.faq.length > 0
        ? {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              inLanguage: "it-IT",
              mainEntity: service.faq.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
          }
        : null;

    const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}

            <section className="py-16 sm:py-24">
                <Container>
                    <Link
                        href="/servizi"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink"
                    >
                        <ArrowLeft className="size-4" /> Tutti i servizi
                    </Link>
                    <div className="mt-8 max-w-3xl">
                        <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-ink text-white">
                            <Icon className="size-6" />
                        </span>
                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl md:leading-[1.05]">
                            {service.title}
                        </h1>
                        <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">
                            {service.intro}
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

            <section className="bg-surface-alt py-20 sm:py-24">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                                Cosa posso sviluppare
                            </span>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                                Soluzioni concrete, pensate per durare.
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {service.deliverables.map((d, i) => (
                                <div
                                    key={d.title}
                                    className="anim-fade-up flex gap-4 rounded-2xl border border-ink/8 bg-white p-6"
                                    style={{ animationDelay: `${i * 60}ms` }}
                                >
                                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-ink" />
                                    <div>
                                        <h3 className="text-base font-bold text-ink">{d.title}</h3>
                                        <p className="mt-1 text-[15px] leading-relaxed text-muted">{d.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-20 sm:py-24">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
                        <div className="space-y-3">
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                                Problemi che risolvo
                            </span>
                            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                                Quando ha senso lavorare insieme.
                            </h2>
                            <ul className="mt-6 space-y-3">
                                {service.problems.map((p) => (
                                    <li key={p} className="flex items-start gap-3 text-ink-soft">
                                        <XCircle className="mt-0.5 size-5 shrink-0 text-muted" />
                                        <span className="leading-relaxed">{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {service.technologies && service.technologies.length > 0 && (
                            <div className="rounded-2xl bg-ink p-8 text-white sm:p-10">
                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                                    Stack tecnico
                                </span>
                                <h3 className="mt-3 text-2xl font-bold">Tecnologie che uso.</h3>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {service.technologies.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/90"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </Container>
            </section>

            {service.faq && service.faq.length > 0 && (
                <section className="py-20 sm:py-24" id="faq">
                    <Container size="sm">
                        <div className="max-w-3xl">
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                                FAQ
                            </span>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                                Domande frequenti.
                            </h2>
                            <p className="mt-4 text-base text-muted sm:text-lg sm:leading-relaxed">
                                Le risposte alle domande più comuni su questo servizio.
                            </p>
                        </div>
                        <div className="mt-12 space-y-4">
                            {service.faq.map((f, i) => (
                                <details
                                    key={f.q}
                                    className="anim-fade-up group rounded-2xl border border-ink/8 bg-white p-6 transition-colors hover:border-ink/20 open:border-ink/20"
                                    style={{ animationDelay: `${i * 50}ms` }}
                                >
                                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                                        <span>{f.q}</span>
                                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink-soft transition-transform group-open:rotate-45">
                                            <span className="text-lg leading-none">+</span>
                                        </span>
                                    </summary>
                                    <p className="mt-4 text-[15px] leading-relaxed text-muted">
                                        {f.a}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </Container>
                </section>
            )}

            <section className="bg-surface-alt py-20 sm:py-24">
                <Container>
                    <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                        Altri servizi.
                    </h2>
                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {otherServices.map((s, i) => {
                            const OtherIcon = s.icon;
                            return (
                                <Link
                                    key={s.slug}
                                    href={`/servizi/${s.slug}`}
                                    className="group anim-fade-up flex flex-col rounded-2xl border border-ink/8 bg-white p-6 transition-all hover:-translate-y-1 hover:border-ink/20 hover:shadow-lg"
                                    style={{ animationDelay: `${i * 60}ms` }}
                                >
                                    <span className="flex size-11 items-center justify-center rounded-xl bg-surface-alt text-ink">
                                        <OtherIcon className="size-5" />
                                    </span>
                                    <h3 className="mt-5 text-lg font-bold text-ink">{s.shortTitle}</h3>
                                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.tagline}</p>
                                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-ink">
                                        Scopri
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
