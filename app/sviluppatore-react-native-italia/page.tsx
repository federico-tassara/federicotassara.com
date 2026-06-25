import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Smartphone, Code2, Zap, RefreshCw } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { PROJECTS } from "@/src/lib/projects";
import { CALENDLY_URL, SITE_EMAIL, SITE_URL } from "@/src/lib/utils";

const url = `${SITE_URL}/sviluppatore-react-native-italia`;

export const metadata: Metadata = {
    title: { absolute: "Sviluppatore React Native in Italia | Federico Tassara" },
    description:
        "Sviluppatore React Native freelance in Italia: app iOS e Android cross-platform da codebase unica, MVP per startup, app business e marketplace.",
    alternates: { canonical: url },
    openGraph: {
        title: "Sviluppatore React Native in Italia",
        description:
            "App iOS e Android cross-platform con React Native: MVP, app B2B, marketplace e community.",
        url,
        type: "website",
    },
};

const TYPES = [
    {
        icon: Smartphone,
        title: "MVP per startup",
        desc: "Validazione di un'idea in 8-14 settimane con un'app pubblicata su iOS e Android, pronta per utenti reali.",
    },
    {
        icon: Code2,
        title: "App business e B2B",
        desc: "Gestionali interni, app per operativi sul campo, portali clienti integrati con i sistemi aziendali esistenti.",
    },
    {
        icon: RefreshCw,
        title: "App community e social",
        desc: "Feed, profili, contenuti UGC, chat realtime e moderazione. Pensate per durare e scalare.",
    },
    {
        icon: Zap,
        title: "App con backend custom",
        desc: "SaaS mobile, marketplace, app integrate a piattaforme esistenti. Backend Node.js o Laravel quando serve.",
    },
];

const BENEFITS = [
    {
        title: "Codebase unica iOS + Android",
        desc: "Pubblichi su entrambi gli store senza mantenere due team o due basi di codice separate. Risparmio del 40-70% sui costi di sviluppo rispetto al native puro.",
    },
    {
        title: "Time-to-market più rapido",
        desc: "Un MVP cross-platform si pubblica in 3-5 mesi; gli aggiornamenti sono simultanei. Ideale per chi deve validare un'idea o iterare frequentemente.",
    },
    {
        title: "Performance vicino al native",
        desc: "React Native usa componenti nativi: l'UX è indistinguibile da un'app native per il 90% dei casi d'uso business.",
    },
    {
        title: "Ecosystem maturo nel 2026",
        desc: "Expo, EAS Build, OTA updates, librerie audited. Lo stack è production-ready per startup e enterprise.",
    },
    {
        title: "Possibilità di moduli nativi",
        desc: "Quando serve performance critica (camera avanzata, AR, sensori), si scrive il modulo nativo senza riscrivere l'app intera.",
    },
    {
        title: "Riuso codice con il web",
        desc: "Logica business e tipi TypeScript condivisi con il web Next.js: meno duplicazione, più coerenza.",
    },
];

const STACK = [
    { area: "Framework", items: ["React Native", "Expo", "expo-router"] },
    { area: "Linguaggio", items: ["TypeScript"] },
    { area: "State management", items: ["Zustand", "TanStack Query", "Context API"] },
    { area: "Backend", items: ["Node.js", "Express", "Laravel", "PostgreSQL", "MongoDB"] },
    { area: "Auth", items: ["Clerk", "Supabase Auth", "Google / Apple Sign-In"] },
    { area: "Pagamenti", items: ["Stripe", "RevenueCat", "In-App Purchase"] },
    { area: "Realtime", items: ["WebSocket", "Pusher", "Supabase Realtime"] },
    { area: "Deploy & monitoring", items: ["EAS", "OTA updates", "Sentry", "PostHog"] },
];

const PROCESS = [
    {
        n: "01",
        title: "Discovery e scoping",
        desc: "Capiamo il target, le 5-10 funzionalità core e i vincoli. Stima preliminare in 1-2 settimane.",
    },
    {
        n: "02",
        title: "Design e architettura",
        desc: "Wireframe, UI design, architettura applicativa e contratti API. Deliverable verificabile prima dello sviluppo.",
    },
    {
        n: "03",
        title: "Sviluppo iterativo",
        desc: "Sprint da 2 settimane con demo, build TestFlight/Play Console e feedback continuo del cliente.",
    },
    {
        n: "04",
        title: "QA, store submit e rilascio",
        desc: "Test su device reali, screenshot, descrizioni store, submit Apple/Google con gestione review.",
    },
    {
        n: "05",
        title: "Manutenzione evolutiva",
        desc: "Supporto dopo il rilascio: bug fix, aggiornamenti iOS/Android, evoluzione delle dipendenze e nuove feature.",
    },
];

const FAQ = [
    {
        q: "Perché scegliere React Native invece di app native?",
        a: "React Native conviene per il 90% delle app business: codebase unica iOS + Android, time-to-market più rapido, costi inferiori del 40-70% rispetto a native pure. Le app native (Swift / Kotlin) restano migliori solo per giochi, AR/VR, uso intensivo di hardware o quando ogni millisecondo di performance conta.",
    },
    {
        q: "Quanto costa sviluppare un'app con React Native in Italia?",
        a: "Un MVP con React Native costa €15.000 – €40.000 (2-4 mesi). Un'app business o B2B €40.000 – €90.000 (4-7 mesi). Marketplace o app social complesse €80.000 – €200.000+. Il range dipende da numero di schermate, backend custom, integrazioni native e moderazione contenuti.",
    },
    {
        q: "React Native va bene anche per app complesse?",
        a: "Sì, oggi React Native è production-ready anche per app complesse. Aziende come Shopify, Discord, Microsoft, Meta usano React Native in produzione. Il limite reale non è la complessità ma casi specifici dove serve hardware deeply native (AR avanzato, audio low-latency, giochi 3D).",
    },
    {
        q: "Quanto tempo serve per un MVP?",
        a: "Da kickoff a pubblicazione: 8-14 settimane per un MVP con 5-15 schermate, autenticazione, profilo utente, backend semplice e push notification. App più complesse (marketplace, social) richiedono 5-9 mesi.",
    },
    {
        q: "Posso aggiornare l'app senza passare dalla review Apple ogni volta?",
        a: "Sì, con Expo EAS Update o CodePush si pushano aggiornamenti del codice JavaScript over-the-air, senza review store. Solo i cambiamenti che toccano la parte native richiedono una nuova build.",
    },
    {
        q: "Posso integrare React Native con un backend già esistente?",
        a: "Sì, l'app comunica con il backend via API REST o GraphQL come qualsiasi client. Se il tuo backend è già documentato, si parte subito; se non lo è, faccio prima un audit per definire i contratti API.",
    },
    {
        q: "Sviluppi anche solo per iOS o solo per Android?",
        a: "Sì, anche se React Native è pensato per entrambi i target dalla codebase unica conviene per quasi tutti i casi. Pubblicare solo su iOS o solo su Android è raro ma supportato.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Sviluppatore React Native Italia", item: url },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: "Sviluppatore React Native in Italia",
    description:
        "Sviluppo app mobile iOS e Android con React Native: MVP, app business, marketplace e community per startup e PMI italiane.",
    url,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Italia" },
    serviceType: "Mobile App Development",
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
        href: "/blog/react-native-vs-flutter-2026",
        title: "React Native vs Flutter nel 2026",
        desc: "Quale framework cross-platform scegliere in base a team, budget ed ecosistema.",
    },
    {
        href: "/blog/differenza-app-native-react-native",
        title: "Differenza tra app native e app React Native",
        desc: "Performance, costi e manutenzione: cosa cambia davvero tra nativo e cross-platform.",
    },
    {
        href: "/blog/app-community-social-react-native",
        title: "App community e social con React Native",
        desc: "Architettura, feed, notifiche e real-time per un'app sociale cross-platform.",
    },
    {
        href: "/blog/app-ecommerce-react-native",
        title: "App e-commerce con React Native",
        desc: "Catalogo, carrello, pagamenti e checkout per un'app di vendita mobile.",
    },
];

export default function ReactNativeIndexPage() {
    const lectum = PROJECTS.find((p) => p.slug === "lectum");
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
                            React Native · iOS + Android
                        </span>
                        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl md:leading-[1.05]">
                            Sviluppatore React Native in Italia.
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
                            Sviluppo app mobile iOS e Android con React Native da codebase unica.
                            Lavoro con startup, PMI e aziende strutturate per portare prodotti su
                            App Store e Google Play in tempi rapidi, mantenendo qualità nativa.
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
                            Cosa sviluppo
                        </span>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                            Quattro categorie di app, un solo approccio.
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-5 md:grid-cols-2">
                        {TYPES.map((t, i) => {
                            const Icon = t.icon;
                            return (
                                <div
                                    key={t.title}
                                    className="anim-fade-up flex gap-4 rounded-2xl border border-ink/8 bg-white p-7"
                                    style={{ animationDelay: `${i * 60}ms` }}
                                >
                                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-ink text-white">
                                        <Icon className="size-5" />
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-bold text-ink">{t.title}</h3>
                                        <p className="mt-2 text-[15px] leading-relaxed text-muted">
                                            {t.desc}
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
                            Perché React Native
                        </span>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                            Sei vantaggi concreti.
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {BENEFITS.map((b, i) => (
                            <div
                                key={b.title}
                                className="anim-fade-up rounded-2xl border border-ink/8 bg-white p-7"
                                style={{ animationDelay: `${i * 50}ms` }}
                            >
                                <h3 className="text-lg font-bold text-ink">{b.title}</h3>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="bg-ink py-20 text-white sm:py-24">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                                Stack tecnico
                            </span>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                Le tecnologie che uso ogni giorno.
                            </h2>
                            <p className="mt-5 text-base leading-relaxed text-white/70">
                                Stack moderno, audited e production-ready. Stesse librerie usate da
                                team senior in tutto il mondo.
                            </p>
                        </div>
                        <div className="grid gap-5 sm:grid-cols-2">
                            {STACK.map((s) => (
                                <div
                                    key={s.area}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-6"
                                >
                                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                                        {s.area}
                                    </span>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {s.items.map((it) => (
                                            <span
                                                key={it}
                                                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/90"
                                            >
                                                {it}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
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
                            Cinque fasi, processo chiaro.
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
                        {PROCESS.map((p, i) => (
                            <div
                                key={p.n}
                                className="anim-fade-up rounded-2xl border border-ink/8 bg-white p-6"
                                style={{ animationDelay: `${i * 50}ms` }}
                            >
                                <span className="text-sm font-bold text-muted">{p.n}</span>
                                <h3 className="mt-3 text-base font-bold text-ink">{p.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {lectum && (
                <section className="bg-surface-alt py-20 sm:py-24">
                    <Container>
                        <div className="flex flex-wrap items-end justify-between gap-6">
                            <div>
                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                                    Esempio di progetto
                                </span>
                                <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                                    {lectum.title}: {lectum.tagline}
                                </h2>
                            </div>
                            <Link
                                href={`/progetti/${lectum.slug}`}
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-ink-soft"
                            >
                                Tutti i progetti
                                <ArrowRight className="size-4" />
                            </Link>
                        </div>
                        <div className="mt-12 grid gap-6 md:grid-cols-2">
                            <p className="text-base leading-relaxed text-muted sm:text-lg">
                                {lectum.summary}
                            </p>
                            <div className="rounded-2xl border border-ink/8 bg-white p-7">
                                <ul className="space-y-3">
                                    {lectum.features.slice(0, 4).map((f) => (
                                        <li key={f.title} className="flex items-start gap-3">
                                            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-ink" />
                                            <div>
                                                <span className="font-semibold text-ink">{f.title}</span>
                                                <span className="text-muted"> — {f.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6">
                                    <Link
                                        href={`/progetti/${lectum.slug}`}
                                        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink"
                                    >
                                        Scopri il progetto
                                        <ArrowUpRight className="size-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            )}

            <section className="py-20 sm:py-24" id="faq">
                <Container size="sm">
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            FAQ
                        </span>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                            Domande frequenti su React Native.
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
                                    Hai un’app in mente?
                                </h2>
                                <p className="mt-5 max-w-lg text-base text-white/70 sm:text-lg">
                                    Discovery call gratuita per capire scope, tempi e budget realistici
                                    sulla tua idea.
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
