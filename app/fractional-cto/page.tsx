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
import { getCalendlyUrl, SITE_URL } from "@/src/lib/utils";

const url = `${SITE_URL}/fractional-cto`;

export const metadata: Metadata = {
    title: { absolute: "Fractional CTO per Startup in Italia | Federico Tassara" },
    description:
        "Fractional CTO per founder di startup: roadmap tecnica, team, architettura e due diligence. Da €3.000/mese, remote-first in Italia.",
    alternates: { canonical: url },
    openGraph: {
        title: "Fractional CTO per Startup in Italia",
        description:
            "Leadership tecnica part-time per trasformare priorità di business in roadmap, decisioni e un team più autonomo.",
        url,
        type: "website",
        images: [`${SITE_URL}/opengraph-image`],
    },
    twitter: {
        card: "summary_large_image",
        title: "Fractional CTO per Startup in Italia",
        description:
            "Leadership tecnica part-time per roadmap, architettura, team e due diligence.",
    },
};

const RESPONSIBILITIES = [
    {
        icon: Compass,
        title: "Decisioni tecniche legate al runway",
        desc: "Valuto stack, build-or-buy e architettura in base a obiettivi, vincoli e capitale disponibile, con decisioni documentate.",
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
        title: "Non hai un co-founder tecnico",
        desc: "Devi validare il prodotto, scegliere partner e controllare lo sviluppo senza assumere subito un CTO full-time.",
    },
    {
        title: "Ti prepari a un round o a una due diligence",
        desc: "Vuoi arrivare al confronto con architettura, rischi, costi e roadmap documentati, senza promesse che il prodotto non può sostenere.",
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
    "Sei un founder o un decisore e puoi condividere obiettivi, budget e vincoli reali",
    "Hai un prodotto in validazione o crescita, con team interno o partner di sviluppo",
    "Cerchi una persona responsabile delle decisioni tecniche, non soltanto un advisor occasionale",
];

const NOT_FIT = [
    "Cerchi soltanto capacità di sviluppo aggiuntiva su task già definiti",
    "Vuoi una firma tecnica che confermi decisioni già prese senza metterle in discussione",
    "Ti serve la garanzia di chiudere un round o azzerare ogni rischio tecnico",
];

const PRICING = [
    {
        name: "Advisory operativo",
        commitment: "Da mezza giornata a settimana",
        price: "€3.000–€4.000/mese",
        desc: "Per founder con un team autonomo che hanno bisogno di confronto senior, decisioni e controllo periodico della roadmap.",
    },
    {
        name: "Fractional CTO",
        commitment: "Da uno a due giorni a settimana",
        price: "€5.000–€8.000/mese",
        desc: "Per prendere ownership di roadmap, architettura, team, hiring e relazione tra tecnologia e business.",
    },
    {
        name: "Audit iniziale",
        commitment: "Progetto di 2–4 settimane",
        price: "€4.000–€10.000 una tantum",
        desc: "Per ottenere una baseline indipendente, rischi prioritari e un piano eseguibile prima di decidere l'ingaggio.",
    },
];

const FAQ = [
    {
        q: "Cos'è esattamente un Fractional CTO?",
        a: "Un Fractional CTO assume una parte definita della leadership tecnica senza entrare subito in azienda a tempo pieno. Collega obiettivi di business, roadmap, architettura, team e budget; documenta decisioni e rischi e prepara l'azienda a diventare autonoma.",
    },
    {
        q: "Quando una startup ha bisogno di un Fractional CTO?",
        a: "Quando il founder deve controllare sviluppo e fornitori senza un co-founder tecnico, quando team e processi non crescono allo stesso ritmo o prima di una decisione ad alto impatto, di un round o di una due diligence. Se serve soltanto capacità di sviluppo aggiuntiva, non è il servizio giusto.",
    },
    {
        q: "Quanto costa un Fractional CTO in Italia?",
        a: "I miei ingaggi continuativi partono da €3.000–€4.000 al mese per advisory operativo e arrivano indicativamente a €5.000–€8.000 al mese per un ruolo Fractional CTO da uno a due giorni a settimana. Un audit iniziale di 2–4 settimane è normalmente tra €4.000 e €10.000. Gli importi sono IVA esclusa e lo scope viene definito prima dell'avvio.",
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
    name: "Fractional CTO per startup in Italia",
    description:
        "Servizio di Fractional CTO per founder di startup: roadmap, architettura, team, hiring, due diligence e audit tecnico.",
    url,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Italia" },
    serviceType: "Fractional CTO",
    inLanguage: "it-IT",
    audience: {
        "@type": "BusinessAudience",
        audienceType: "Founder di startup e scaleup",
    },
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
    {
        href: "/blog/come-scegliere-fractional-cto",
        title: "Come scegliere un Fractional CTO",
        desc: "I criteri di valutazione che contano davvero e le domande da fare al primo incontro.",
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
                            Fractional CTO per founder
                        </span>
                        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl md:leading-[1.05]">
                            Fractional CTO per startup: decisioni tecniche senza assumere subito un CTO full-time.
                        </h1>
                        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">
                            Affianco founder pre-seed, seed e startup in crescita per trasformare priorità di business in una roadmap eseguibile, guidare team e fornitori e rendere visibili i rischi prima che consumino runway.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Button href={getCalendlyUrl("hero")} external size="lg">
                                Verifica il fit in 30 minuti
                            </Button>
                            <Button href="#prezzi" variant="outline" size="lg">
                                Vedi modalità e prezzi
                            </Button>
                        </div>
                        <p className="mt-4 text-sm text-muted">
                            Call gratuita, senza proposta preconfezionata. Ingaggi continuativi da €3.000/mese.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink/10 pt-6 text-sm font-medium text-ink-soft">
                            <span>Partner tecnico AKINTU</span>
                            <span>Esperienza diretta da founder tecnico</span>
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
                            Nei primi 30 giorni costruisco una baseline di prodotto, codice, infrastruttura e team; evidenzio i rischi per impatto; allineo una roadmap a 90 giorni con owner e criteri di completamento. Il deliverable cambia in base alla fase, ma deve sempre permettere al founder di decidere meglio.
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

            <section className="py-20 sm:py-24" id="prezzi">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Modalità e prezzi</span>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Un range prima della call, per non perdere tempo.</h2>
                        <p className="mt-5 text-lg leading-relaxed text-muted">Il preventivo dipende da responsabilità, intensità e stato del prodotto. Questi sono i range indicativi che uso per capire subito se budget e aspettative sono compatibili.</p>
                    </div>
                    <div className="mt-12 grid gap-6 lg:grid-cols-3">
                        {PRICING.map((item, i) => (
                            <div key={item.name} className={`anim-fade-up rounded-2xl border p-7 ${i === 1 ? "border-ink bg-ink text-white" : "border-ink/8 bg-white text-ink"}`} style={{ animationDelay: `${i * 50}ms` }}>
                                <h3 className="text-xl font-bold">{item.name}</h3>
                                <p className={`mt-2 text-sm ${i === 1 ? "text-white/65" : "text-muted"}`}>{item.commitment}</p>
                                <p className="mt-6 text-2xl font-bold">{item.price}</p>
                                <p className={`mt-4 text-[15px] leading-relaxed ${i === 1 ? "text-white/75" : "text-muted"}`}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Button href={getCalendlyUrl("pricing")} external size="lg">Verifica budget e fit</Button>
                        <p className="max-w-xl text-sm leading-relaxed text-muted">Importi IVA esclusa. Attività di sviluppo estensive e fornitori terzi non sono inclusi; scope e condizioni vengono definiti prima dell’avvio.</p>
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
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                                    Capisci in 30 minuti se ti serve davvero un Fractional CTO.
                                </h2>
                                <p className="mt-5 max-w-lg text-base text-white/70 sm:text-lg">
                                    Portami fase, obiettivo e problema più urgente. Ti restituisco una prima lettura del fit e del prossimo passo, anche quando non coincide con un mio ingaggio.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 lg:justify-end">
                                <Button
                                    href={getCalendlyUrl("final_cta")}
                                    external
                                    size="lg"
                                    className="bg-white text-ink hover:bg-white/90"
                                >
                                    Verifica il fit
                                </Button>
                                <Button
                                    href="#prezzi"
                                    variant="outline"
                                    size="lg"
                                    className="border-white/25 text-white hover:border-white/50"
                                >
                                    Rivedi i prezzi
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
