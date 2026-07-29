import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Workflow, Database, Bot, FileSpreadsheet, PlugZap, LineChart } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { Testimonials } from "@/src/components/sections/Testimonials";
import { CALENDLY_URL, SITE_EMAIL, SITE_URL } from "@/src/lib/utils";

const url = `${SITE_URL}/automazione-processi-aziendali`;

export const metadata: Metadata = {
    title: { absolute: "Automazione Processi Aziendali per PMI | Federico Tassara" },
    description:
        "Automatizzo processi aziendali con n8n e integrazioni API su misura: gestionale, e-commerce, CRM e agenti AI. Per PMI italiane che vogliono togliere lavoro manuale ripetitivo.",
    alternates: { canonical: url },
    openGraph: {
        title: "Automazione Processi Aziendali per PMI",
        description:
            "Workflow n8n, integrazioni API tra gestionale ed e-commerce, agenti AI: meno lavoro manuale, meno errori di trascrizione.",
        url,
        type: "website",
        images: [`${SITE_URL}/opengraph-image`],
    },
    twitter: {
        card: "summary_large_image",
        title: "Automazione Processi Aziendali per PMI",
        description:
            "Workflow n8n, integrazioni API tra gestionale ed e-commerce, agenti AI: meno lavoro manuale, meno errori di trascrizione.",
    },
};

const CAPABILITIES = [
    {
        icon: Workflow,
        title: "Workflow con n8n",
        desc: "Automazioni che collegano CRM, email, calendario e database. Ogni passaggio resta ispezionabile: vedi cosa è passato, cosa è fallito e perché.",
    },
    {
        icon: PlugZap,
        title: "Integrazioni API su misura",
        desc: "Quando i connettori pronti non bastano, scrivo l'integrazione. Gestionali che espongono API parziali, formati proprietari, sistemi legacy senza documentazione.",
    },
    {
        icon: Database,
        title: "Sincronizzazione gestionale ed e-commerce",
        desc: "Anagrafiche, giacenze, ordini e fatture allineati tra i due sistemi, con gestione dei conflitti e dei casi in cui uno dei due non risponde.",
    },
    {
        icon: FileSpreadsheet,
        title: "Uscita dai fogli di calcolo",
        desc: "Quando un Excel condiviso diventa il gestionale di fatto, lo sostituisco con qualcosa che regge più utenti insieme e conserva lo storico.",
    },
    {
        icon: Bot,
        title: "Agenti AI su processi reali",
        desc: "Classificazione documenti, estrazione dati da PDF, smistamento richieste. Con validazione dell'output e una persona che controlla dove la decisione pesa.",
    },
    {
        icon: LineChart,
        title: "Reportistica automatica",
        desc: "Report ricorrenti che si generano e si recapitano da soli, costruiti sui dati che già hai invece che su un'esportazione manuale mensile.",
    },
];

const SIGNALS = [
    {
        title: "Qualcuno ricopia dati da un sistema all'altro",
        desc: "Ordini dall'e-commerce al gestionale, anagrafiche dal CRM alla fatturazione. Ogni trascrizione manuale è tempo speso e un errore che aspetta di succedere.",
    },
    {
        title: "Il file Excel è diventato critico",
        desc: "Ci lavorano in cinque, esiste in tre versioni, e nessuno sa quale sia quella buona. Il momento di sostituirlo è passato da un po'.",
    },
    {
        title: "I report li prepara una persona a mano",
        desc: "Due giorni al mese per esportare, incollare e formattare. Un lavoro che il sistema può fare da solo mentre nessuno lo guarda.",
    },
    {
        title: "Il gestionale non parla con il resto",
        desc: "Il fornitore dice che l'integrazione non è prevista, oppure la quota a listino supera il valore del processo. Spesso l'API c'è e nessuno l'ha mai usata.",
    },
    {
        title: "Le richieste dei clienti arrivano ovunque",
        desc: "Email, WhatsApp, modulo del sito, telefono. Nessun punto unico, nessuno storico, e le cose che si perdono le scopri dai reclami.",
    },
    {
        title: "Hai provato con un tool no-code e si è rotto",
        desc: "Funzionava finché il volume era basso. Sui casi limite ha ceduto, e adesso nessuno sa dove guardare quando un passaggio salta.",
    },
];

const PROCESS = [
    {
        n: "01",
        title: "Mappatura del processo",
        desc: "Guardo come funziona oggi, chi fa cosa e dove si perde tempo. Spesso il candidato migliore non è quello che immaginavi.",
    },
    {
        n: "02",
        title: "Stima e priorità",
        desc: "Per ogni automazione: ore risparmiate al mese, costo di realizzazione, rischio. Partiamo da quella con il rapporto migliore.",
    },
    {
        n: "03",
        title: "Prima automazione in produzione",
        desc: "Un processo completo, funzionante e monitorato. Serve a verificare il ritorno su un caso reale prima di allargare.",
    },
    {
        n: "04",
        title: "Estensione e autonomia",
        desc: "Si aggiungono i processi successivi e ti lascio in grado di modificare i workflow senza dipendere da me per ogni cambiamento.",
    },
];

const FAQ = [
    {
        q: "Quali processi aziendali conviene automatizzare per primi?",
        a: "Quelli ripetitivi, con regole stabili e un volume misurabile: trasferimento dati tra sistemi, generazione e invio di report ricorrenti, notifiche su eventi, sincronizzazione anagrafiche. Il criterio pratico è il rapporto tra ore risparmiate al mese e ore di lavoro per costruirlo. I processi con molte eccezioni e decisioni discrezionali danno un ritorno peggiore e conviene affrontarli dopo.",
    },
    {
        q: "Quanto costa automatizzare un processo aziendale?",
        a: "Un'automazione singola tra due sistemi che espongono API funzionanti si colloca indicativamente tra 1.500 e 5.000 euro. Il costo cresce quando il gestionale non ha API e serve un'integrazione su misura, quando i dati vanno ripuliti prima di poterli spostare, o quando il processo ha molte diramazioni. La stima si fa dopo la mappatura, mai prima.",
    },
    {
        q: "Perché n8n invece di Zapier o Make?",
        a: "n8n si può installare sui tuoi server, quindi i dati aziendali non transitano da una piattaforma esterna: per chi tratta dati di clienti sotto GDPR è spesso il fattore decisivo. Il costo non cresce con il numero di esecuzioni, il che cambia il conto sui volumi alti. E dove serve una logica che nessun connettore copre, si scrive codice dentro il workflow.",
    },
    {
        q: "Il mio gestionale non ha le API: si può fare qualcosa?",
        a: "Nella maggior parte dei casi sì, e la prima cosa da verificare è se le API esistano davvero: molti gestionali le hanno e non le documentano, o le attivano su richiesta. Quando non ci sono restano l'esportazione programmata di file, l'accesso diretto al database in sola lettura o il ponte tramite un modulo del fornitore. Ognuna porta vincoli diversi, e vanno valutate sul sistema specifico.",
    },
    {
        q: "Che differenza c'è tra un'automazione e un agente AI?",
        a: "Un'automazione esegue regole che hai definito: se arriva questo, fai quello. Il comportamento è prevedibile e ripetibile. Un agente AI interpreta input non strutturati (un'email, un PDF, una richiesta scritta a mano libera) e decide cosa fare. Serve dove le regole fisse non bastano, e in cambio richiede validazione dell'output e supervisione umana sulle decisioni che contano.",
    },
    {
        q: "Quanto tempo serve per vedere il primo risultato?",
        a: "La mappatura richiede pochi giorni. La prima automazione in produzione arriva di solito entro due o quattro settimane, a seconda di quanto siano accessibili i sistemi coinvolti. Preferisco portare un processo completo in produzione presto, invece di progettare per mesi una piattaforma che nessuno ha ancora provato.",
    },
    {
        q: "Cosa succede quando un'automazione si rompe?",
        a: "Ogni workflow che consegno ha registrazione delle esecuzioni e notifica sugli errori, quindi il fallimento arriva a qualcuno invece di restare silenzioso. I passaggi verso sistemi esterni prevedono ritentativi, e i casi che restano bloccati finiscono in una coda visibile da riprendere a mano. Un'automazione che fallisce senza avvisare è peggiore del lavoro manuale che ha sostituito.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Automazione processi aziendali", item: url },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: "Automazione processi aziendali",
    description:
        "Automazione di processi aziendali per PMI italiane: workflow n8n, integrazioni API tra gestionale, e-commerce e CRM, agenti AI su processi documentali.",
    url,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Italia" },
    serviceType: "Automazione processi aziendali",
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
        href: "/blog/automazioni-processi-pmi-cosa-conviene",
        title: "Automazioni per PMI: quali processi conviene automatizzare",
        desc: "Come si sceglie il primo processo da automatizzare e come si stima il ritorno.",
    },
    {
        href: "/blog/integrare-gestionale-ecommerce-api",
        title: "Integrare gestionale ed e-commerce con le API",
        desc: "Cosa sincronizzare, in che direzione, e come gestire i conflitti tra i due sistemi.",
    },
    {
        href: "/blog/agenti-ai-pmi-cosa-sono-da-dove-partire",
        title: "Agenti AI per PMI: cosa sono davvero e da dove partire",
        desc: "Quali processi reggono un agente e quali continuano a richiedere una persona.",
    },
    {
        href: "/blog/da-excel-a-software-su-misura-quando-fare-il-salto",
        title: "Da Excel a software su misura: quando fare il salto",
        desc: "I segnali che dicono che il foglio di calcolo ha esaurito il suo compito.",
    },
    {
        href: "/blog/ritorno-software-su-misura-2026",
        title: "Il ritorno del software su misura nel 2026",
        desc: "Perché le aziende stanno rivalutando il custom rispetto ai gestionali a pacchetto.",
    },
    {
        href: "/blog/prototipare-funzionalita-ai-app",
        title: "Prototipare una funzionalità AI in un'app esistente",
        desc: "Come verificare in fretta se l'AI risolve il problema, prima di investirci.",
    },
];

export default function AutomazioneProcessiAziendaliPage() {
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
                            Automazione processi aziendali
                        </span>
                        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl md:leading-[1.05]">
                            Automazione dei processi
                            <br />
                            aziendali per PMI.
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
                            Collego i sistemi che oggi non si parlano e tolgo dal tavolo il lavoro
                            manuale ripetitivo: workflow con n8n, integrazioni API tra gestionale,
                            e-commerce e CRM, agenti AI sui processi documentali. Si parte da un
                            processo solo, misurando quanto restituisce.
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
                            Di cosa si tratta
                        </span>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                            Meno trascrizioni, meno errori.
                        </h2>
                        <p className="mt-5 text-lg leading-relaxed text-muted">
                            In quasi tutte le PMI con cui lavoro esiste almeno una persona che passa
                            ore a spostare dati da un sistema all&apos;altro: ordini dall&apos;e-commerce al
                            gestionale, anagrafiche dal CRM alla fatturazione, numeri da un&apos;esportazione
                            a un foglio di calcolo. È lavoro che nessuno ha scelto di fare, nato dal
                            fatto che due software non si parlano.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed text-muted">
                            <strong className="font-semibold text-ink">Automatizzare un processo</strong>{" "}
                            significa far fare quel trasferimento al sistema, con controlli sui dati e
                            un avviso quando qualcosa non torna. Il guadagno immediato sono le ore
                            liberate; quello che pesa di più nel tempo è la sparizione degli errori di
                            trascrizione, che oggi si scoprono a valle e costano molto più del tempo.
                        </p>
                    </div>
                </Container>
            </section>

            <section className="py-20 sm:py-24">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            Quando serve
                        </span>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                            Sei situazioni ricorrenti.
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {SIGNALS.map((s, i) => (
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
                            Sei aree di intervento.
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-5 md:grid-cols-2">
                        {CAPABILITIES.map((c, i) => {
                            const Icon = c.icon;
                            return (
                                <div
                                    key={c.title}
                                    className="anim-fade-up flex gap-4 rounded-2xl border border-ink/8 bg-white p-7"
                                    style={{ animationDelay: `${i * 50}ms` }}
                                >
                                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-ink text-white">
                                        <Icon className="size-5" />
                                    </span>
                                    <div>
                                        <h3 className="text-base font-bold text-ink">{c.title}</h3>
                                        <p className="mt-2 text-[15px] leading-relaxed text-muted">
                                            {c.desc}
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
                            Come si procede
                        </span>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                            Un processo alla volta.
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {PROCESS.map((p, i) => (
                            <div
                                key={p.n}
                                className="anim-fade-up rounded-2xl border border-ink/8 bg-white p-7"
                                style={{ animationDelay: `${i * 60}ms` }}
                            >
                                <span className="text-sm font-bold text-muted">{p.n}</span>
                                <h3 className="mt-3 text-xl font-bold text-ink">{p.title}</h3>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.desc}</p>
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
                                Come lavoro
                            </span>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                Automazioni che qualcuno può mantenere dopo di me.
                            </h2>
                        </div>
                        <div>
                            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
                                Sono <strong className="font-semibold text-white">Federico Tassara</strong>,
                                sviluppatore full stack e Fractional CTO. Costruisco automazioni con
                                lo stesso criterio con cui scrivo software di produzione: registrate,
                                monitorate e documentate, perché un workflow che nessuno sa leggere
                                diventa un problema appena cambia qualcosa a monte.
                            </p>
                            <ul className="mt-6 space-y-3">
                                {[
                                    "Parto dal processo esistente, non dallo strumento",
                                    "Stima del ritorno prima di scrivere il primo workflow",
                                    "Registrazione delle esecuzioni e notifica sugli errori",
                                    "Ti lascio in grado di modificare i workflow da solo",
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
                                    Partiamo da un processo.
                                </h2>
                                <p className="mt-5 max-w-lg text-base text-white/70 sm:text-lg">
                                    Call gratuita di 30 minuti: mi racconti dove si perde più tempo
                                    oggi e ti dico se ha senso automatizzarlo, con una stima di
                                    massima.
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
