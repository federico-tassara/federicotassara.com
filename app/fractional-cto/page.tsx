import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, Layers, Users, Target, Workflow, BookOpen } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { Testimonials } from "@/src/components/sections/Testimonials";
import { CALENDLY_URL, SITE_EMAIL, SITE_URL } from "@/src/lib/utils";

const url = `${SITE_URL}/fractional-cto`;

export const metadata: Metadata = {
    title: { absolute: "Fractional CTO in Italia per Startup e PMI | Federico Tassara" },
    description:
        "Fractional CTO part-time per startup e PMI italiane: scelte tecnologiche, roadmap, due diligence, hiring e audit di progetti esistenti. Remote-first.",
    alternates: { canonical: url },
    openGraph: {
        title: "Fractional CTO in Italia per Startup e PMI",
        description:
            "CTO part-time on-demand: scelte tecnologiche, roadmap, due diligence, hiring tech e audit.",
        url,
        type: "website",
        images: [`${SITE_URL}/opengraph-image`],
    },
    twitter: {
        card: "summary_large_image",
        title: "Fractional CTO in Italia per Startup e PMI",
        description:
            "CTO part-time on-demand: scelte tecnologiche, roadmap, due diligence, hiring tech e audit.",
    },
};

const RESPONSIBILITIES = [
    {
        icon: Compass,
        title: "Scelte tecnologiche e architetturali",
        desc: "Definisco lo stack giusto per il prodotto e la fase aziendale, evitando over-engineering e debito tecnico precoce.",
    },
    {
        icon: Layers,
        title: "Roadmap tecnica trimestrale",
        desc: "Trasformo gli obiettivi di business in milestone tecniche misurabili, con scope, dipendenze e rischi espliciti.",
    },
    {
        icon: Users,
        title: "Hiring e gestione del team tech",
        desc: "Definisco profili, conduco colloqui tecnici, struttura il team e processi di lavoro per scalare senza caos.",
    },
    {
        icon: Target,
        title: "Due diligence pre-investimento",
        desc: "Audit di codice, architettura e processi per investitori o acquirenti: report scritto con findings e raccomandazioni.",
    },
    {
        icon: Workflow,
        title: "Process e cadence",
        desc: "Imposto sprint, retrospective, code review, deployment e monitoraggio. Lascio una macchina che funziona dopo l'ingaggio.",
    },
    {
        icon: BookOpen,
        title: "Mentoring tech lead",
        desc: "Affianco tech lead o senior engineer interni nelle decisioni critiche e nella crescita del ruolo.",
    },
];

const WHEN_YOU_NEED = [
    {
        title: "Hai un'idea senza co-founder tecnico",
        desc: "Validi un MVP, gestisci provider esterni, presenti agli investitori — senza dover assumere subito un CTO full-time.",
    },
    {
        title: "Stai preparando un round di investimento",
        desc: "Investitori seri richiedono due diligence tecnica. Un Fractional CTO la guida e ti aiuta a chiudere il round.",
    },
    {
        title: "Il team tech è cresciuto in fretta",
        desc: "5-15 sviluppatori, processi improvvisati, decisioni in stallo: serve qualcuno che imponga struttura senza fermare la velocità.",
    },
    {
        title: "Decisioni di architettura che pesano per anni",
        desc: "Microservizi vs monolite, cloud provider, monorepo, replatforming: scelte da fare con esperienza, non per tentativi.",
    },
    {
        title: "Devi rimpiazzare un CTO uscente",
        desc: "Copertura del ruolo e knowledge transfer mentre l'azienda cerca il sostituto stabile.",
    },
    {
        title: "Hai dubbi sulla qualità del prodotto attuale",
        desc: "Audit indipendente dello stato del codice, infrastruttura e team, con piano d'azione concreto.",
    },
];

const ENGAGEMENT = [
    {
        n: "01",
        title: "Discovery call gratuita",
        desc: "30 minuti per capire contesto, esigenze e se siamo allineati.",
    },
    {
        n: "02",
        title: "Audit iniziale (2-4 settimane)",
        desc: "Analisi prodotto, codice, team, infrastruttura. Report con findings e piano prioritario.",
    },
    {
        n: "03",
        title: "Ingaggio continuativo",
        desc: "1-3 giorni/settimana o pacchetto mensile. Standup ricorrenti, revisione roadmap, supporto decisionale.",
    },
    {
        n: "04",
        title: "Exit pianificata",
        desc: "Knowledge transfer e onboarding del CTO interno o handoff al team, quando l'azienda è pronta.",
    },
];

const FAQ = [
    {
        q: "Cos'è esattamente un Fractional CTO?",
        a: "Un Fractional CTO è un Chief Technology Officer part-time o on-demand che porta esperienza senior in azienda senza il costo di un CTO full-time. Si occupa di scelte tecnologiche, architettura, hiring del team tech, due diligence e roadmap di prodotto. Tipicamente lavora 1-3 giorni a settimana o su ingaggi mensili a forfait.",
    },
    {
        q: "Quando una startup ha bisogno di un Fractional CTO?",
        a: "Quando hai un'idea ma nessun co-founder tecnico, prima di un round di investimento (per due diligence), durante una crescita rapida del team tech, o quando devi prendere decisioni di architettura che impatteranno i prossimi 2-3 anni di prodotto.",
    },
    {
        q: "Quanto costa un Fractional CTO in Italia?",
        a: "Le tariffe in Italia variano indicativamente tra €120 e €250/ora, oppure con pacchetti mensili da €3.000 a €15.000 in base a giorni/settimana e seniority. Per startup early-stage esistono modelli misti equity + cash ridotto.",
    },
    {
        q: "Quanti giorni a settimana lavora un Fractional CTO?",
        a: "Tipicamente da 0,5 a 3 giorni a settimana, con momenti di alta intensità (es. due diligence o lancio di prodotto) e fasi più leggere. Il modello si adatta alla fase dell'azienda.",
    },
    {
        q: "Cosa fa un Fractional CTO nelle prime settimane?",
        a: "Tipicamente nelle prime 2-4 settimane si fa audit dello stato attuale (codice, infrastruttura, team), si allineano roadmap tecnica e roadmap di business, si identificano i rischi prioritari e si definisce un piano di intervento misurabile.",
    },
    {
        q: "Funziona anche se ho già un team tech interno?",
        a: "Sì, è uno scenario molto comune. Il Fractional CTO non sostituisce il team ma lo affianca: porta esperienza esterna, sblocca decisioni in stallo, fa mentoring ai tech lead e tiene una visione integrata con il business.",
    },
    {
        q: "Come si esce dall'ingaggio?",
        a: "L'obiettivo è rendere l'azienda autonoma. L'exit prevede knowledge transfer documentato, onboarding del CTO interno se viene assunto, o handoff al team. La durata tipica di un ingaggio Fractional CTO è 6-18 mesi.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Fractional CTO", item: url },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: "Fractional CTO in Italia",
    description:
        "Servizio di Fractional CTO part-time per startup e PMI italiane: scelte tecnologiche, roadmap, due diligence, hiring tech e audit.",
    url,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Italia" },
    serviceType: "Fractional CTO",
    inLanguage: "it-IT",
    audience: { "@type": "BusinessAudience" },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    inLanguage: "it-IT",
    mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
};

const RELATED_POSTS = [
    {
        href: "/blog/quando-serve-fractional-cto",
        title: "Quando serve un Fractional CTO (e quando no)",
        desc: "Gli scenari concreti in cui ha senso, e i casi in cui è la scelta sbagliata.",
    },
    {
        href: "/blog/cosa-fa-fractional-cto",
        title: "Cosa fa concretamente un Fractional CTO",
        desc: "Attività e deliverable settimana per settimana, oltre i titoli astratti.",
    },
    {
        href: "/blog/quanto-costa-fractional-cto-italia",
        title: "Quanto costa un Fractional CTO in Italia nel 2026",
        desc: "Range reali, modelli di engagement e confronto onesto con un CTO full-time.",
    },
];

export default function FractionalCTOPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <section className="py-16 sm:py-24">
                <Container>
                    <div className="anim-fade-up max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            Fractional CTO
                        </span>
                        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl md:leading-[1.05]">
                            Fractional CTO in Italia
                            <br />
                            per Startup e PMI.
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
                            Porto esperienza senior come Chief Technology Officer part-time, on-demand
                            o in modalità mista: scelte tecnologiche, roadmap, due diligence, hiring
                            tech e audit di progetti esistenti. Remote-first, basato in Italia.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Button href={CALENDLY_URL} external size="lg">
                                Prenota una call
                            </Button>
                            <Button href={`mailto:${SITE_EMAIL}`} variant="outline" size="lg">
                                Scrivimi
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="bg-surface-alt py-20 sm:py-24">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            Cos’è un Fractional CTO
                        </span>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                            Un CTO senior, ma a frazione del costo.
                        </h2>
                        <p className="mt-5 text-lg leading-relaxed text-muted">
                            Un <strong className="font-semibold text-ink">Fractional CTO</strong> è un
                            Chief Technology Officer part-time o on-demand che porta esperienza senior
                            in azienda senza il costo di un CTO full-time (che in Italia parte da
                            €80k-150k/anno). Si occupa di scelte tecnologiche, architettura, hiring
                            del team tech, due diligence e roadmap di prodotto. Lavora tipicamente da
                            mezza giornata a tre giorni a settimana, in base alla fase dell’azienda.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed text-muted">
                            È la soluzione adatta per startup pre-seed e seed che non possono ancora
                            permettersi un CTO interno, per PMI che hanno un team tech ma non una
                            leadership tecnica strutturata, e per aziende in transizione (round di
                            investimento, M&A, sostituzione CTO).
                        </p>
                    </div>
                </Container>
            </section>

            <section className="py-20 sm:py-24">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            Quando ti serve
                        </span>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                            Sei scenari in cui ha senso.
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {WHEN_YOU_NEED.map((s, i) => (
                            <div
                                key={s.title}
                                className="anim-fade-up rounded-2xl border border-ink/8 bg-white p-7"
                                style={{ animationDelay: `${i * 50}ms` }}
                            >
                                <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="bg-surface-alt py-20 sm:py-24">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            Cosa faccio
                        </span>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                            Sei aree di responsabilità.
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-5 md:grid-cols-2">
                        {RESPONSIBILITIES.map((r, i) => {
                            const Icon = r.icon;
                            return (
                                <div
                                    key={r.title}
                                    className="anim-fade-up flex gap-4 rounded-2xl border border-ink/8 bg-white p-7"
                                    style={{ animationDelay: `${i * 50}ms` }}
                                >
                                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-ink text-white">
                                        <Icon className="size-5" />
                                    </span>
                                    <div>
                                        <h3 className="text-base font-bold text-ink">{r.title}</h3>
                                        <p className="mt-2 text-[15px] leading-relaxed text-muted">
                                            {r.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            <section className="py-20 sm:py-24">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            Come lavoriamo insieme
                        </span>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                            Quattro fasi, zero ambiguità.
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {ENGAGEMENT.map((e, i) => (
                            <div
                                key={e.n}
                                className="anim-fade-up rounded-2xl border border-ink/8 bg-white p-7"
                                style={{ animationDelay: `${i * 60}ms` }}
                            >
                                <span className="text-sm font-bold text-muted">{e.n}</span>
                                <h3 className="mt-3 text-xl font-bold text-ink">{e.title}</h3>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{e.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="bg-ink py-20 text-white sm:py-24">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                                Background
                            </span>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                Chi sono e perché potrei essere il match giusto.
                            </h2>
                        </div>
                        <div>
                            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
                                Sono <strong className="font-semibold text-white">Federico Tassara</strong>,
                                sviluppatore Full Stack freelance con esperienza in startup, PMI e
                                progetti enterprise. Founder e Fractional CTO di Oraloco, ho lavorato
                                con stack moderni (React, Next.js, React Native, Node.js, Laravel) e
                                ho seguito prodotti dall’idea al rilascio in più verticali.
                            </p>
                            <ul className="mt-6 space-y-3">
                                {[
                                    "Esperienza diretta come founder tecnico",
                                    "Capacità di parlare sia con team tecnici che con business e investor",
                                    "Approccio pragmatico, niente over-engineering",
                                    "Trasparenza sulle scelte, sui tempi e sui rischi",
                                ].map((p) => (
                                    <li key={p} className="flex items-start gap-3 text-white/80">
                                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-white" />
                                        <span>{p}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-7">
                                <Link
                                    href="/chi-sono"
                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-white/80"
                                >
                                    Vedi profilo completo
                                    <ArrowRight className="size-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-20 sm:py-24" id="faq">
                <Container size="sm">
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            FAQ
                        </span>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                            Domande frequenti.
                        </h2>
                    </div>
                    <div className="mt-12 space-y-4">
                        {FAQ.map((f, i) => (
                            <details
                                key={f.q}
                                className="anim-fade-up group rounded-2xl border border-ink/8 bg-white p-6 transition-colors hover:border-ink/20 open:border-ink/20"
                                style={{ animationDelay: `${i * 40}ms` }}
                            >
                                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                                    <span>{f.q}</span>
                                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink-soft transition-transform group-open:rotate-45">
                                        <span className="text-lg leading-none">+</span>
                                    </span>
                                </summary>
                                <p className="mt-4 text-[15px] leading-relaxed text-muted">{f.a}</p>
                            </details>
                        ))}
                    </div>
                </Container>
            </section>

            <Testimonials />

            <section className="py-20 sm:py-24">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            Approfondimenti
                        </span>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                            Dal blog.
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-6 sm:grid-cols-3">
                        {RELATED_POSTS.map((p, i) => (
                            <Link
                                key={p.href}
                                href={p.href}
                                className="anim-fade-up group flex flex-col rounded-2xl border border-ink/8 bg-white p-6 transition-colors hover:border-ink/20"
                                style={{ animationDelay: `${i * 40}ms` }}
                            >
                                <h3 className="text-base font-semibold text-ink">{p.title}</h3>
                                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{p.desc}</p>
                                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                                    Leggi
                                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="bg-surface-alt py-20 sm:py-24">
                <Container>
                    <div className="anim-fade-up overflow-hidden rounded-3xl bg-ink p-10 text-white sm:p-16">
                        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.05]">
                                    Parliamone in 30 minuti.
                                </h2>
                                <p className="mt-5 max-w-lg text-base text-white/70 sm:text-lg">
                                    Discovery call gratuita per capire la fase dell’azienda, il
                                    contesto tecnico e se ha senso lavorare insieme.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 lg:justify-end">
                                <Button
                                    href={CALENDLY_URL}
                                    external
                                    size="lg"
                                    className="bg-white text-ink hover:bg-white/90"
                                >
                                    Prenota call
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
