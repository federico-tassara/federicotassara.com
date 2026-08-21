import type { Metadata } from "next";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    Compass,
    Layers,
    Users,
    Target,
    Workflow,
    BookOpen,
} from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { Testimonials } from "@/src/components/sections/Testimonials";
import { SITE_URL } from "@/src/lib/utils";

const url = `${SITE_URL}/fractional-cto`;

export const metadata: Metadata = {
    title: { absolute: "Fractional CTO per Progetti, Startup e PMI | Federico Tassara" },
    description:
        "Fractional CTO per trasformare un progetto in un prodotto sostenibile: strategia, roadmap, architettura e guida tecnica per startup, PMI e imprese.",
    alternates: { canonical: url },
    openGraph: {
        title: "Fractional CTO per Progetti, Startup e PMI",
        description:
            "Una guida tecnica senior per trasformare un progetto in roadmap, decisioni e un prodotto sostenibile.",
        url,
        type: "website",
        images: [`${SITE_URL}/opengraph-image`],
    },
    twitter: {
        card: "summary_large_image",
        title: "Fractional CTO per Progetti, Startup e PMI",
        description:
            "Leadership tecnica part-time per strategia, roadmap, architettura e team.",
    },
};

const RESPONSIBILITIES = [
    {
        icon: Compass,
        title: "Decisioni tecniche legate a budget e priorità",
        desc: "Valuto stack, build-or-buy e architettura in base a obiettivi, vincoli e risorse disponibili, con decisioni documentate.",
    },
    {
        icon: Layers,
        title: "Roadmap che business e team capiscono",
        desc: "Traduco obiettivi commerciali in milestone con scope, dipendenze, responsabili e criteri di completamento.",
    },
    {
        icon: Users,
        title: "Team e fornitori sotto controllo",
        desc: "Definisco i profili, conduco colloqui tecnici e strutturo ownership e processi senza sostituirmi al lavoro quotidiano del team.",
    },
    {
        icon: Target,
        title: "Rischi visibili prima che costino",
        desc: "Audit di codice, infrastruttura e processi con priorità, impatto e piano di mitigazione utile anche in due diligence.",
    },
    {
        icon: Workflow,
        title: "Una cadenza operativa sostenibile",
        desc: "Imposto pianificazione, review, rilascio e monitoraggio nella misura necessaria alla fase del prodotto.",
    },
    {
        icon: BookOpen,
        title: "Leadership tecnica che resta nel team",
        desc: "Affianco tech lead e senior engineer, trasferendo contesto e metodo affinché l'azienda diventi progressivamente autonoma.",
    },
];

const WHEN_YOU_NEED = [
    {
        title: "Hai un progetto ma non una guida tecnica",
        desc: "Devi capire cosa costruire, scegliere partner e controllare lo sviluppo senza assumere subito un CTO full-time.",
    },
    {
        title: "La tua PMI sta lanciando un prodotto digitale",
        desc: "Vuoi collegare obiettivi aziendali, processi e tecnologia prima di impegnare budget e persone nello sviluppo.",
    },
    {
        title: "Il team è cresciuto più dei processi",
        desc: "Priorità che cambiano, ownership poco chiara e decisioni in stallo stanno rallentando sviluppo e business.",
    },
    {
        title: "Hai una decisione tecnica ad alto impatto",
        desc: "Replatforming, scalabilità, sicurezza o make-or-buy richiedono criteri espliciti prima di impegnare mesi di lavoro.",
    },
    {
        title: "Il CTO sta uscendo",
        desc: "Serve una copertura temporanea che protegga continuità, conoscenza e hiring del sostituto stabile.",
    },
    {
        title: "Il prodotto funziona, ma non sai quanto reggerà",
        desc: "Ti serve una lettura indipendente di codice, infrastruttura e team prima della prossima fase di crescita.",
    },
];

const ENGAGEMENT = [
    {
        n: "01",
        title: "Verifica del fit",
        desc: "30 minuti per chiarire fase, problema, decisori e urgenza. Se non sono la figura adatta, te lo dico qui.",
    },
    {
        n: "02",
        title: "Primi 30 giorni",
        desc: "Baseline di prodotto, codice, team e infrastruttura; registro dei rischi e roadmap tecnica a 90 giorni.",
    },
    {
        n: "03",
        title: "Cadenza continuativa",
        desc: "Da mezza giornata a due giorni a settimana: decisioni, roadmap, mentoring e allineamento con il business.",
    },
    {
        n: "04",
        title: "Autonomia ed exit",
        desc: "Decisioni e processi vengono documentati. Quando ha senso, preparo l'onboarding del CTO interno o l'handoff al team.",
    },
];

const FIT = [
    "Hai un progetto concreto e puoi condividere obiettivi, budget e vincoli reali",
    "Sei una startup, una PMI, un'impresa o un professionista con un prodotto da validare o far crescere",
    "Cerchi una persona responsabile delle decisioni tecniche, non soltanto un advisor occasionale",
];

const NOT_FIT = [
    "Cerchi soltanto capacità di sviluppo aggiuntiva su task già definiti",
    "Vuoi una firma tecnica che confermi decisioni già prese senza metterle in discussione",
    "Ti serve la garanzia di chiudere un round o azzerare ogni rischio tecnico",
];

const FAQ = [
    {
        q: "Cos'è esattamente un Fractional CTO?",
        a: "Un Fractional CTO assume una parte definita della leadership tecnica senza entrare subito in azienda a tempo pieno. Collega obiettivi di business, roadmap, architettura, team e budget; documenta decisioni e rischi e prepara l'azienda a diventare autonoma.",
    },
    {
        q: "A chi serve un Fractional CTO?",
        a: "A chi ha un progetto tecnologico ma non una leadership tecnica continuativa: può essere il founder di una startup, una PMI che sta digitalizzando un processo, un'impresa che lancia un nuovo prodotto o un team che deve prendere una decisione ad alto impatto. Se serve soltanto capacità di sviluppo aggiuntiva, non è il servizio giusto.",
    },
    {
        q: "Quanto costa un Fractional CTO in Italia?",
        a: "Non applico un listino unico: l'investimento dipende dal problema, dalle responsabilità e dalla presenza di un team interno o di fornitori. Dopo la prima call propongo un perimetro chiaro, una cadenza e un preventivo. Se basta un audit o un intervento circoscritto, non propongo un ingaggio continuativo.",
    },
    {
        q: "Quanti giorni a settimana lavora un Fractional CTO?",
        a: "Da mezza giornata a due giorni a settimana, in base alle responsabilità. L'advisory leggero copre confronto e controllo periodico; un ingaggio più intenso include ownership di roadmap, architettura, team e hiring.",
    },
    {
        q: "Cosa fa un Fractional CTO nelle prime settimane?",
        a: "Costruisco una baseline di prodotto, codice, infrastruttura e team; ordino i rischi per impatto e probabilità; preparo una roadmap tecnica a 90 giorni con owner e criteri di completamento. Profondità e deliverable vengono concordati in base alla fase del prodotto.",
    },
    {
        q: "Funziona anche se ho già un team tech interno?",
        a: "Sì. Il Fractional CTO affianca sviluppatori e tech lead: chiarisce ownership, sblocca decisioni, rivede roadmap e rischi e fa mentoring. Non sostituisce il team né usa il ruolo per accentrare ogni scelta.",
    },
    {
        q: "Come si esce dall'ingaggio?",
        a: "Con decisioni, rischi e processi documentati. Quando l'azienda è pronta, preparo il knowledge transfer al CTO interno o l'handoff al team. La durata si verifica con checkpoint periodici, invece di creare una dipendenza indefinita.",
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
    name: "Fractional CTO per progetti, startup e PMI in Italia",
    description:
        "Servizio di Fractional CTO per guidare progetti tecnologici: strategia, roadmap, architettura, team, hiring, due diligence e audit tecnico.",
    url,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Italia" },
    serviceType: "Fractional CTO",
    inLanguage: "it-IT",
    audience: {
        "@type": "BusinessAudience",
        audienceType: "Startup, PMI, imprese e professionisti con un progetto tecnologico",
    },
};

const RELATED_POSTS = [
    {
        href: "/blog/fractional-cto-startup-healthtech-caso-reale",
        title: "Fractional CTO per una startup healthtech",
        desc: "Un caso reale: revisione iniziale, decisioni tecniche e criteri verificabili prima del pilota.",
    },
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
    {
        href: "/blog/come-scegliere-fractional-cto",
        title: "Come scegliere un Fractional CTO",
        desc: "I criteri di valutazione che contano davvero e le domande da fare al primo incontro.",
    },
    {
        href: "/blog/fractional-cto-vs-software-house-cto-full-time",
        title: "Fractional CTO, software house o CTO full-time?",
        desc: "Responsabilità, incentivi e segnali concreti per capire quale figura serve davvero.",
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
            <section className="py-16 sm:py-24">
                <Container>
                    <div className="anim-fade-up max-w-4xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            Fractional CTO per progetti, startup e PMI
                        </span>
                        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl md:leading-[1.05]">
                            Fractional CTO per trasformare il tuo progetto in un prodotto tecnologico sostenibile.
                        </h1>
                        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">
                            Che tu sia un founder, una PMI, un’impresa o un professionista con un’idea concreta, ti affianco per definire la strategia tecnica, costruire una roadmap eseguibile e guidare team e fornitori senza assumere subito un CTO full-time.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Button href="/prenota?source=fractional_cto_hero" size="lg">
                                Parliamo del tuo progetto
                            </Button>
                            <Button href="#come-lavoriamo" variant="outline" size="lg">
                                Come funziona
                            </Button>
                        </div>
                        <p className="mt-4 text-sm text-muted">
                            Call gratuita, senza proposta preconfezionata. Capiamo insieme quale guida tecnica serve davvero al progetto.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink/10 pt-6 text-sm font-medium text-ink-soft">
                            <span>Partner tecnico AKINTU</span>
                            <span>Progetti con startup, PMI e imprese</span>
                            <span>Remote-first · Italia</span>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="bg-surface-alt py-20 sm:py-24">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            Il risultato
                        </span>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                            Più chiarezza sulle decisioni che consumano tempo e capitale.
                        </h2>
                        <p className="mt-5 text-lg leading-relaxed text-muted">
                            Un <strong className="font-semibold text-ink">Fractional CTO</strong> assume una parte definita della leadership tecnica: collega roadmap di prodotto, architettura, team e budget senza richiedere subito un’assunzione full-time. Il punto non è aggiungere riunioni, ma creare decisioni documentate e responsabilità chiare.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed text-muted">
                            Nei primi 30 giorni costruisco una baseline di prodotto, codice, infrastruttura e team; evidenzio i rischi per impatto; allineo una roadmap a 90 giorni con owner e criteri di completamento. Il deliverable cambia in base alla fase, ma deve sempre permettere a chi guida il progetto di decidere meglio.
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
                            Sei segnali che il problema è di leadership tecnica.
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
                            Dalle attività ai risultati verificabili.
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

            <section className="py-20 sm:py-24" id="come-lavoriamo">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            Come lavoriamo insieme
                        </span>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                            Un ingresso rapido e un’uscita prevista dall’inizio.
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

            <section className="bg-surface-alt py-20 sm:py-24">
                <Container>
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="rounded-2xl border border-ink/8 bg-white p-8">
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Buon fit</span>
                            <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">Ha senso lavorare insieme se…</h2>
                            <ul className="mt-7 space-y-4">
                                {FIT.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-muted">
                                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-ink" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-ink/8 bg-white p-8">
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Non è il servizio giusto</span>
                            <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">Probabilmente non sono il match se…</h2>
                            <ul className="mt-7 space-y-4">
                                {NOT_FIT.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-muted">
                                        <span className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-full border border-ink/30 text-xs text-ink">×</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
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
                                sviluppatore Full Stack e leader tecnico con esperienza in startup, PMI e progetti enterprise. Sono founder tecnico di prodotti digitali e partner tecnico di <Link href="/progetti/akintu" className="font-semibold text-white underline decoration-white/35 underline-offset-4 hover:decoration-white">AKINTU</Link>; ho seguito software dall’idea al rilascio, inclusi sistemi mobile offline-first, SaaS e piattaforme AI.
                            </p>
                            <ul className="mt-6 space-y-3">
                                {[
                                    "Esperienza diretta come founder e partner tecnico",
                                    "Progetti pubblici con architettura, stack e responsabilità consultabili",
                                    "Comunicazione comprensibile a team, founder e investitori",
                                    "Decisioni, rischi e trade-off documentati",
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
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                                    Hai un progetto in mente? Capiamo quale guida tecnica gli serve.
                                </h2>
                                <p className="mt-5 max-w-lg text-base text-white/70 sm:text-lg">
                                    Raccontami obiettivo, contesto e problema più urgente. Ti restituisco una prima lettura del prossimo passo, anche quando non coincide con un mio ingaggio.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 lg:justify-end">
                                <Button
                                    href="/prenota?source=fractional_cto_final_cta"
                                    size="lg"
                                    className="bg-white text-ink hover:bg-white/90"
                                >
                                    Parliamo del progetto
                                </Button>
                                <Button
                                    href="#come-lavoriamo"
                                    variant="outline"
                                    size="lg"
                                    className="border-white/25 text-white hover:border-white/50"
                                >
                                    Come lavoro
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
