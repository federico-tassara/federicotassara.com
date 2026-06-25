import type { Metadata } from "next";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Building2,
    Rocket,
    Briefcase,
    Layers,
    Smartphone,
    Package,
    Sparkles,
    Plug,
    LifeBuoy,
    CheckCircle2,
} from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { ClientsMarquee } from "@/src/components/ui/ClientsMarquee";
import { ContactForm } from "@/src/components/contact/ContactForm";
import { FeaturedProject } from "@/src/components/sections/FeaturedProject";
import { Testimonials } from "@/src/components/sections/Testimonials";
import { PROJECTS } from "@/src/lib/projects";
import { CALENDLY_URL, SITE_EMAIL, SITE_URL } from "@/src/lib/utils";

const url = `${SITE_URL}/sviluppo-app-saas`;

export const metadata: Metadata = {
    title: { absolute: "Sviluppo App e SaaS su misura | Federico Tassara" },
    description:
        "Sviluppo applicazioni web, mobile e prodotti SaaS per aziende e startup italiane. Sviluppatore freelance senior, un solo referente, consegne rispettate.",
    alternates: { canonical: url },
    openGraph: {
        title: "Sviluppo App e SaaS su misura",
        description:
            "Sviluppo applicazioni web, mobile e prodotti SaaS per aziende e startup italiane. Un solo referente senior, consegne rispettate.",
        url,
        type: "website",
        images: [`${SITE_URL}/opengraph-image`],
    },
    twitter: {
        card: "summary_large_image",
        title: "Sviluppo App e SaaS su misura",
        description:
            "Sviluppo applicazioni web, mobile e prodotti SaaS per aziende e startup italiane. Un solo referente senior, consegne rispettate.",
    },
};

const SEGMENTS = [
    {
        icon: Building2,
        title: "PMI e imprenditori",
        desc: "Hai un processo che ti ruba ore ogni settimana, o vuoi offrire un servizio digitale ai tuoi clienti. Ti serve un'app che funzioni, integrata con quello che già usi, senza gestire 5 fornitori diversi.",
    },
    {
        icon: Rocket,
        title: "Founder di startup",
        desc: "Stai costruendo qualcosa di nuovo e ti serve un MVP solido da mettere in mano agli utenti, non un prototipo da buttare al primo round. Capisco il problema prima di scrivere codice.",
    },
    {
        icon: Briefcase,
        title: "Aziende strutturate",
        desc: "Hai un progetto interno con specifiche già definite e ti serve uno sviluppatore senior che si integri nel team, rispetti standard di codice e consegni in tempo. Niente onboarding di sei mesi.",
    },
];

const SERVICES = [
    {
        icon: Layers,
        title: "App web e dashboard interne",
        desc: "Gestionali, CRM su misura, portali clienti, strumenti operativi che sostituiscono fogli Excel e processi manuali.",
    },
    {
        icon: Smartphone,
        title: "Applicazioni mobile iOS + Android",
        desc: "Un'unica codebase React Native, pubblicazione sugli store, manutenzione nel tempo. Risparmio del 40-70% rispetto al native puro.",
    },
    {
        icon: Package,
        title: "Prodotti SaaS multi-tenant",
        desc: "Autenticazione, pagamenti ricorrenti, ruoli, billing, infrastruttura pronta a scalare. Stack moderno e production-ready.",
    },
    {
        icon: Sparkles,
        title: "MVP per startup",
        desc: "Dall'idea al primo utente in 6-12 settimane, con un perimetro stretto e priorità chiare. Niente sprechi.",
    },
    {
        icon: Plug,
        title: "Integrazioni e automazioni",
        desc: "API, gateway di pagamento, ERP, CRM, strumenti AI integrati nel prodotto. Il tuo stack esistente continua a funzionare.",
    },
    {
        icon: LifeBuoy,
        title: "Manutenzione e iterazione",
        desc: "Non ti lascio col codice e basta: continuo a sviluppare ed evolvere il prodotto dopo il lancio, con sprint pianificati o on-demand.",
    },
];

const PROOF_POINTS = [
    { value: "10+", label: "Prodotti rilasciati in produzione" },
    { value: "1", label: "Solo referente, senior" },
    { value: "24h", label: "Tempo di risposta" },
    { value: "100%", label: "Codice consegnato al cliente" },
];

const FAQ = [
    {
        q: "Quanto costa sviluppare un'app o un SaaS?",
        a: "Dipende dal perimetro. Un MVP serio parte da qualche decina di migliaia di euro, un prodotto completo da molto di più. Dopo la prima call ti mando una stima onesta, scritta, con alternative chiare. Niente cifre buttate via WhatsApp.",
    },
    {
        q: "In quanto tempo è pronto?",
        a: "Un MVP ben definito tra 6 e 12 settimane. Un prodotto completo da 3 a 6 mesi. Lavoro a sprint settimanali con avanzamenti tracciabili, così sai sempre a che punto siamo senza dover chiedere.",
    },
    {
        q: "Sviluppi da solo o con un team?",
        a: "Su progetti piccoli e medi lavoro da solo: meno comunicazione persa, decisioni più veloci, qualità più alta. Su progetti più grandi coinvolgo persone fidate con cui collaboro da anni, restando il referente unico.",
    },
    {
        q: "Cosa succede dopo il lancio?",
        a: "Continuiamo a lavorare insieme. Quasi tutti i clienti restano per far evolvere il prodotto: nuove funzionalità, fix, ottimizzazioni. Ti lascio sempre codice, credenziali e documentazione: non sei mai bloccato con me.",
    },
    {
        q: "Lavori solo con clienti italiani?",
        a: "Sono basato in Italia (Liguria e Piemonte) e lavoro da remoto con clienti in tutta Europa. Per progetti italiani parlo italiano, fatturo italiano, e capisco come si muove il mercato qui.",
    },
    {
        q: "Come capisco se sei la persona giusta?",
        a: "La prima call è gratuita e dura 30 minuti. Se non sono la persona giusta per il tuo progetto te lo dico apertamente, e quando posso ti indirizzo verso qualcun altro più adatto.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Sviluppo App e SaaS", item: url },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: "Sviluppo App e SaaS su misura",
    description:
        "Sviluppo applicazioni web, mobile e prodotti SaaS su misura per PMI, startup e aziende mid-market italiane.",
    url,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Italia" },
    serviceType: "Custom Software Development",
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
        href: "/blog/sviluppare-mvp-tempi-realistici",
        title: "Sviluppare un MVP: tempi realistici",
        desc: "Quanto serve davvero per portare un MVP dal concept al rilascio, fase per fase.",
    },
    {
        href: "/blog/stimare-budget-web-mobile-app",
        title: "Come stimare il budget di una web o mobile app",
        desc: "I fattori che determinano il costo di un progetto e come arrivare a una stima sensata.",
    },
    {
        href: "/blog/vantaggi-nextjs-seo-performance",
        title: "Vantaggi di Next.js per SEO e performance",
        desc: "Perché Next.js è una base solida per un SaaS veloce e ben indicizzato.",
    },
];

export default function SviluppoAppSaaSPage() {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
    const featuredProject = PROJECTS.find((p) => p.slug === "lectum") ?? PROJECTS[0];

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

            {/* HERO */}
            <section className="py-16 sm:py-24">
                <Container>
                    <div className="anim-fade-up max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            Sviluppo App & SaaS su misura
                        </span>
                        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl md:leading-[1.05]">
                            Sviluppo app e SaaS su misura per chi ha già un’idea chiara.
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
                            Sono Federico, sviluppatore freelance senior. Progetto e realizzo
                            applicazioni web, mobile e piattaforme SaaS per aziende e startup
                            italiane. Un solo referente, codice mantenibile, scadenze rispettate.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Button href="#contatto" size="lg">
                                Parlami del tuo progetto
                            </Button>
                            <Button href={CALENDLY_URL} external variant="outline" size="lg">
                                Prenota una call
                            </Button>
                        </div>
                        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                            {PROOF_POINTS.map((p) => (
                                <div key={p.label}>
                                    <div className="text-2xl font-bold text-ink sm:text-3xl">
                                        {p.value}
                                    </div>
                                    <div className="mt-1 text-xs leading-snug text-muted">
                                        {p.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* CLIENTS MARQUEE */}
            <section className="border-y border-ink/5 bg-surface-alt py-10 sm:py-12">
                <Container>
                    <div className="mb-6 text-center">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            Aziende e prodotti su cui ho lavorato
                        </span>
                    </div>
                    <ClientsMarquee />
                </Container>
            </section>

            {/* PER CHI È */}
            <section className="py-20 sm:py-24">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            Con chi lavoro
                        </span>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                            Tre tipi di interlocutore, lo stesso approccio.
                        </h2>
                        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                            Niente clienti che “cercano un’idea”: lavoro con chi ha un problema
                            concreto e vuole risolverlo con un prodotto serio.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-5 md:grid-cols-3">
                        {SEGMENTS.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <div
                                    key={s.title}
                                    className="anim-fade-up rounded-2xl border border-ink/8 bg-white p-7 transition-colors hover:border-ink/20"
                                    style={{ animationDelay: `${i * 60}ms` }}
                                >
                                    <span className="flex size-11 items-center justify-center rounded-xl bg-ink text-white">
                                        <Icon className="size-5" />
                                    </span>
                                    <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
                                    <p className="mt-3 text-[15px] leading-relaxed text-muted">
                                        {s.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* COSA COSTRUISCO */}
            <section className="bg-surface-alt py-20 sm:py-24">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            Cosa costruisco
                        </span>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                            Sei tipologie di prodotto, un solo modo di lavorare.
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {SERVICES.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <div
                                    key={s.title}
                                    className="anim-fade-up rounded-2xl border border-ink/8 bg-white p-7 transition-colors hover:border-ink/20"
                                    style={{ animationDelay: `${i * 50}ms` }}
                                >
                                    <span className="flex size-11 items-center justify-center rounded-xl bg-ink text-white">
                                        <Icon className="size-5" />
                                    </span>
                                    <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
                                    <p className="mt-3 text-[15px] leading-relaxed text-muted">
                                        {s.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* PROGETTO IN EVIDENZA */}
            {featuredProject && (
                <section className="py-20 sm:py-24">
                    <Container>
                        <div className="flex flex-wrap items-end justify-between gap-6">
                            <div>
                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                                    Esempio di progetto
                                </span>
                                <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                                    {featuredProject.title}: {featuredProject.tagline}
                                </h2>
                            </div>
                            <Link
                                href="/progetti"
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-ink-soft"
                            >
                                Tutti i progetti
                                <ArrowRight className="size-4" />
                            </Link>
                        </div>
                        <div className="mt-12 grid gap-6 md:grid-cols-2">
                            <p className="text-base leading-relaxed text-muted sm:text-lg">
                                {featuredProject.summary}
                            </p>
                            <div className="rounded-2xl border border-ink/8 bg-white p-7">
                                <ul className="space-y-3">
                                    {featuredProject.features.slice(0, 4).map((f) => (
                                        <li key={f.title} className="flex items-start gap-3">
                                            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-ink" />
                                            <div>
                                                <span className="font-semibold text-ink">
                                                    {f.title}
                                                </span>
                                                <span className="text-muted"> — {f.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6">
                                    <Link
                                        href={`/progetti/${featuredProject.slug}`}
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

            {/* FAQ / OBIEZIONI */}
            <section className="bg-surface-alt py-20 sm:py-24" id="faq">
                <Container size="sm">
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            Domande frequenti
                        </span>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                            Quello che probabilmente ti stai chiedendo.
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

            <FeaturedProject slug="mose" />

            <Testimonials className="bg-surface-alt py-20 sm:py-24" />

            <section className="bg-surface-alt py-20 sm:py-24">
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

            {/* FORM CONTATTO + CTA FINALE */}
            <section className="py-20 sm:py-24" id="contatto">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
                        <div className="anim-fade-up">
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                                Iniziamo
                            </span>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl md:leading-[1.05]">
                                Parlami del tuo progetto.
                            </h2>
                            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                                Rispondo personalmente entro 24 ore lavorative. Bastano tre righe
                                per capire se posso aiutarti — niente questionari, niente database
                                condivisi, niente newsletter.
                            </p>
                            <ul className="mt-8 space-y-3 text-[15px] text-muted">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-ink" />
                                    Risposta personale entro 24 ore lavorative.
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-ink" />
                                    Prima call di 30 minuti gratuita e senza impegno.
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-ink" />
                                    Stima scritta con tempi e costi dopo la call.
                                </li>
                            </ul>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <Button href={CALENDLY_URL} external size="lg" variant="outline">
                                    Preferisci una call?
                                </Button>
                                <Button
                                    href={`mailto:${SITE_EMAIL}`}
                                    size="lg"
                                    variant="ghost"
                                >
                                    Scrivimi via email
                                </Button>
                            </div>
                        </div>

                        <div className="anim-fade-up anim-delay-200">
                            <ContactForm siteKey={siteKey} />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
