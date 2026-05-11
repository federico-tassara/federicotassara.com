import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { CALENDLY_URL, SITE_URL } from "@/src/lib/utils";

export const metadata: Metadata = {
    title: { absolute: "Chi sono — Sviluppatore Full Stack Freelance | Federico Tassara" },
    description:
        "Sono Federico Tassara, sviluppatore Full Stack freelance e Fractional CTO. Sviluppo app web e mobile, architetture scalabili e automazioni per startup e PMI italiane.",
    alternates: { canonical: `${SITE_URL}/chi-sono` },
    openGraph: {
        title: "Chi sono — Sviluppatore Full Stack Freelance",
        description:
            "Sviluppatore Full Stack freelance specializzato in web, mobile, scalabilità e automazioni.",
        url: `${SITE_URL}/chi-sono`,
        type: "profile",
    },
};

const APPROACH = [
    {
        n: "01",
        title: "Tecnico e scalabile",
        text: "Ogni progetto nasce con un'architettura chiara, modulare e manutenibile nel tempo.",
    },
    {
        n: "02",
        title: "Performance",
        text: "Applicazioni rapide, intuitive e ottimizzate per ogni dispositivo, anche sotto carico.",
    },
    {
        n: "03",
        title: "Collaborativo e trasparente",
        text: "Condivido progressi, scelte tecniche e tempistiche con clienti e team, sempre.",
    },
];

const TECH = [
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "Laravel",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "n8n",
    "Tailwind",
];

export default function ChiSonoPage() {
    return (
        <>
            <section className="py-16 sm:py-24">
                <Container>
                    <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
                        <div className="anim-fade-up">
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                                Chi sono
                            </span>
                            <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl md:leading-[1.05]">
                                Full Stack Developer
                                <br />
                                & Fractional CTO.
                            </h1>
                            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                                Mi chiamo <strong className="font-semibold text-ink">Federico Tassara</strong>,
                                sviluppatore full stack freelance con esperienza nella creazione di
                                applicazioni web e mobile per aziende e startup. Lavoro con React,
                                Next.js, React Native, Node.js e Laravel per trasformare idee in{" "}
                                <strong className="font-semibold text-ink">
                                    prodotti digitali funzionanti, scalabili e pronti a crescere
                                </strong>
                                .
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <Button href={CALENDLY_URL} external size="lg">
                                    Prenota una consulenza
                                </Button>
                                <Button href="/progetti" variant="outline" size="lg">
                                    Vedi i progetti
                                </Button>
                            </div>
                        </div>
                        <div className="anim-fade-up anim-delay-200 relative">
                            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-ink/5 to-transparent blur-2xl" aria-hidden />
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

            <section className="bg-surface-alt py-20 sm:py-28">
                <Container>
                    <div className="grid gap-6 sm:grid-cols-3">
                        <Stat value="6+" label="Anni di esperienza" />
                        <Stat value="50+" label="Progetti realizzati" />
                        <Stat value="20+" label="Startup e PMI supportate" />
                    </div>
                </Container>
            </section>

            <section className="py-20 sm:py-28">
                <Container>
                    <SectionTitle
                        eyebrow="Il mio approccio"
                        title="Tre pilastri, un metodo coerente."
                        description="Tre principi guidano il modo in cui costruisco prodotti e collaboro con i team."
                    />
                    <div className="mt-14 grid gap-6 md:grid-cols-3">
                        {APPROACH.map((a, i) => (
                            <div
                                key={a.n}
                                className="anim-fade-up rounded-2xl border border-ink/8 bg-white p-7"
                                style={{ animationDelay: `${i * 80}ms` }}
                            >
                                <span className="text-sm font-bold text-muted">{a.n}</span>
                                <h3 className="mt-3 text-xl font-bold text-ink">{a.title}</h3>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{a.text}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="bg-ink py-20 text-white sm:py-28">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                                Cosa mi distingue
                            </span>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.6rem] md:leading-[1.1]">
                                Più di 50 progetti tra web, mobile e backend.
                            </h2>
                            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
                                Ho collaborato con startup e aziende strutturate, sviluppando soluzioni
                                scalabili e performanti progettate per crescere insieme al business.
                            </p>
                            <ul className="mt-8 space-y-3">
                                {[
                                    "Architetture pensate per evolvere senza rifare tutto da zero",
                                    "Codice testato, documentato e facile da mantenere",
                                    "Esperienza diretta come fondatore e CTO di Oraloco",
                                    "Capacità di parlare sia con team tecnici che con stakeholder business",
                                ].map((point) => (
                                    <li key={point} className="flex items-start gap-3 text-white/80">
                                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-white" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                                Stack tecnico
                            </span>
                            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                                Tecnologie che uso ogni giorno.
                            </h3>
                            <div className="mt-7 flex flex-wrap gap-2">
                                {TECH.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/90"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-20 sm:py-28">
                <Container>
                    <div className="anim-fade-up overflow-hidden rounded-3xl bg-surface-alt p-10 sm:p-16">
                        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl md:leading-[1.05]">
                                    Hai un'idea? Parliamone, senza impegno.
                                </h2>
                                <p className="mt-5 max-w-lg text-base text-muted sm:text-lg">
                                    Una consulenza iniziale per capire se possiamo lavorare bene insieme.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 lg:justify-end">
                                <Button href={CALENDLY_URL} external size="lg">Prendi appuntamento</Button>
                                <Button href="/contatti" variant="outline" size="lg">Scrivimi</Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

function Stat({ value, label }: { value: string; label: string }) {
    return (
        <div className="rounded-2xl border border-ink/8 bg-white p-8 text-center">
            <div className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">{value}</div>
            <div className="mt-2 text-sm text-muted">{label}</div>
        </div>
    );
}
