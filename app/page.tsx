import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Code2, Gauge, Eye, Handshake, Lightbulb, Target } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { ServiceCard } from "@/src/components/ui/ServiceCard";
import { ClientsMarquee } from "@/src/components/ui/ClientsMarquee";
import { SERVICES } from "@/src/lib/services";
import { CALENDLY_URL, SITE_URL } from "@/src/lib/utils";
import { getAllPosts } from "@/src/lib/posts";

export const metadata: Metadata = {
    title: {
        absolute: "Sviluppatore Web e Fractional CTO Italia | Federico Tassara",
    },
    description:
        "Sviluppatore Full Stack freelance in Italia. Sviluppo applicazioni web, app mobile, architetture scalabili e consulenza tecnica per startup e aziende.",
    alternates: { canonical: SITE_URL },
    openGraph: {
        title: "Sviluppatore Web e Fractional CTO Italia | Federico Tassara",
        description:
            "Sviluppo app mobile, siti web e piattaforme per startup e aziende italiane. Disponibile per progetti, consulenze e ruolo di CTO part-time.",
        url: SITE_URL,
        type: "website",
    },
};

const PILLARS = [
    { icon: Code2, title: "Qualità del codice", text: "Codice leggibile, testato e manutenibile nel tempo." },
    { icon: Gauge, title: "Performance e scalabilità", text: "Prodotti veloci che reggono crescita reale e picchi di traffico." },
    { icon: Eye, title: "User Experience", text: "Interfacce chiare, accessibili e pensate per chi le usa davvero." },
    { icon: Handshake, title: "Trasparenza", text: "Progressi, scelte tecniche e tempistiche sempre condivisi." },
    { icon: Lightbulb, title: "Innovazione", text: "Tecnologie moderne, integrate dove portano valore concreto." },
    { icon: Target, title: "Orientamento al risultato", text: "Focus su obiettivi di business, non su feature riempitive." },
];

export default function Home() {
    const latestPosts = getAllPosts().slice(0, 3);

    return (
        <>
            {/* HERO */}
            <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10"
                    style={{
                        background:
                            "radial-gradient(800px circle at 50% 0%, rgba(28,31,51,0.06), transparent 60%)",
                    }}
                />
                <Container>
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="anim-fade-up inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-1.5 text-xs font-medium text-ink-soft">
                            <Sparkles className="size-3.5" />
                            Full Stack Developer & Fractional CTO
                        </div>
                        <h1 className="anim-fade-up anim-delay-100 mt-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl md:leading-[1.05]">
                            Trasformo idee in{" "}
                            <span className="relative inline-block">
                                prodotti digitali
                                <span
                                    aria-hidden
                                    className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-ink/10"
                                />
                            </span>{" "}
                            scalabili.
                        </h1>
                        <p className="anim-fade-up anim-delay-200 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                            Progetto e sviluppo applicazioni web e mobile performanti, scalabili e
                            pronte per crescere. Per startup, aziende e prodotti digitali in evoluzione.
                        </p>
                        <div className="anim-fade-up anim-delay-300 mt-9 flex flex-wrap items-center justify-center gap-3">
                            <Button href={CALENDLY_URL} external size="lg">
                                Prenota una consulenza
                                <ArrowRight className="size-4" />
                            </Button>
                            <Button href="/servizi" variant="outline" size="lg">
                                Scopri i servizi
                            </Button>
                        </div>
                    </div>

                    <div className="anim-fade-up anim-delay-500 mt-16 grid gap-4 sm:mt-20 sm:grid-cols-3">
                        <StatItem value="6+" label="Anni di esperienza" />
                        <StatItem value="50+" label="Progetti realizzati" />
                        <StatItem value="20+" label="Startup e PMI supportate" />
                    </div>
                </Container>
            </section>

            {/* CLIENTI */}
            <section aria-label="Clienti e progetti" className="border-y border-ink/8 bg-surface-alt py-10 sm:py-14">
                <Container>
                    <p className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                        Hanno scelto di lavorare con me
                    </p>
                    <ClientsMarquee />
                </Container>
            </section>

            {/* VISIONE */}
            <section className="bg-surface-alt py-20 sm:py-28">
                <Container>
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        <div className="anim-fade-up">
                            <SectionTitle
                                eyebrow="La mia visione"
                                title="Costruire prodotti che durano."
                                description="Credo nello sviluppo di prodotti digitali pensati per durare, non solo per essere rilasciati. Ogni progetto nasce con una base tecnica solida, è semplice da evolvere e supporta davvero gli obiettivi di business nel tempo."
                            />
                            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                                Non scrivo codice per riempire feature: costruisco prodotti digitali che
                                funzionano, scalano e creano valore reale.
                            </p>
                        </div>
                        <div className="anim-fade-up anim-delay-200 relative">
                            <div
                                className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-ink/5 to-transparent blur-2xl"
                                aria-hidden
                            />
                            <div className="overflow-hidden rounded-2xl border border-ink/8 bg-white p-2 shadow-[0_30px_60px_-30px_rgba(28,31,51,0.25)]">
                                <Image
                                    src="/images/profile.jpeg"
                                    alt="Federico Tassara"
                                    width={640}
                                    height={640}
                                    className="aspect-square w-full rounded-xl object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* SERVIZI */}
            <section id="servizi" className="py-20 sm:py-28">
                <Container>
                    <SectionTitle
                        eyebrow="Servizi"
                        title="Cosa posso costruire con te."
                        description="Da una web app fino a un'intera architettura cloud: ti accompagno dalla strategia tecnica al rilascio in produzione."
                        align="center"
                    />
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {SERVICES.map((s, i) => (
                            <ServiceCard key={s.slug} service={s} index={i} />
                        ))}
                    </div>
                </Container>
            </section>

            {/* PILASTRI */}
            <section className="bg-ink py-20 text-white sm:py-28">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                            I pilastri del lavoro
                        </span>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.6rem] md:leading-[1.1]">
                            Sei principi che guidano ogni progetto.
                        </h2>
                    </div>
                    <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                        {PILLARS.map((p, i) => {
                            const Icon = p.icon;
                            return (
                                <div
                                    key={p.title}
                                    className="anim-fade-up bg-ink p-7 transition-colors hover:bg-ink-soft"
                                    style={{ animationDelay: `${i * 60}ms` }}
                                >
                                    <span className="flex size-11 items-center justify-center rounded-lg bg-white/10 text-white">
                                        <Icon className="size-5" />
                                    </span>
                                    <h3 className="mt-5 text-lg font-semibold text-white">{p.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-white/70">{p.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* BLOG PREVIEW */}
            {latestPosts.length > 0 && (
                <section className="py-20 sm:py-28">
                    <Container>
                        <div className="flex flex-wrap items-end justify-between gap-6">
                            <SectionTitle
                                eyebrow="Ultime notizie"
                                title="Dal blog."
                                description="Articoli, riflessioni e guide pratiche su sviluppo, architettura e prodotto."
                            />
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-ink-soft"
                            >
                                Vai al blog
                                <ArrowRight className="size-4" />
                            </Link>
                        </div>
                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            {latestPosts.map((post, i) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group anim-fade-up flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white p-6 transition-all hover:-translate-y-1 hover:border-ink/20 hover:shadow-lg"
                                    style={{ animationDelay: `${i * 80}ms` }}
                                >
                                    <span className="text-xs font-medium text-muted">
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
                                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                                        Leggi
                                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </section>
            )}

            {/* CTA CONTATTI */}
            <section className="py-20 sm:py-28">
                <Container>
                    <div className="anim-fade-up overflow-hidden rounded-3xl bg-ink p-10 text-white sm:p-16">
                        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.05]">
                                    Hai un'idea? Parliamone, senza impegno.
                                </h2>
                                <p className="mt-5 max-w-lg text-base text-white/70 sm:text-lg">
                                    Una consulenza iniziale gratuita per capire se possiamo lavorare bene
                                    insieme e definire i prossimi passi.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 lg:justify-end">
                                <Button
                                    href={CALENDLY_URL}
                                    external
                                    size="lg"
                                    className="bg-white text-ink hover:bg-white/90"
                                >
                                    Prendi appuntamento
                                </Button>
                                <Button
                                    href="/contatti"
                                    variant="outline"
                                    size="lg"
                                    className="border-white/25 text-white hover:border-white/50"
                                >
                                    Scrivimi
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

function StatItem({ value, label }: { value: string; label: string }) {
    return (
        <div className="rounded-2xl border border-ink/8 bg-white p-6 text-center">
            <div className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{value}</div>
            <div className="mt-1.5 text-sm text-muted">{label}</div>
        </div>
    );
}
