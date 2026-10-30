import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, Mail } from "lucide-react";
import { ContactForm } from "@/src/components/contact/ContactForm";
import { SITE_URL } from "@/src/lib/utils";
import styles from "./page.module.css";
import { CaseStudies } from "./CaseStudies";

const path = "/lp/automazioni-aziendali";
export const metadata: Metadata = {
    title: { absolute: "Automazione dei processi aziendali per PMI | Federico Tassara" },
    description: "Sviluppo automazioni per collegare i software della tua azienda e ridurre le attività manuali. Richiedi un primo confronto sul tuo processo.",
    robots: { index: false, follow: true },
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
        title: "Automatizzo i processi che oggi gestisci a mano.",
        description: "Collego gestionali, CRM e strumenti aziendali. Analisi del processo, sviluppo e supporto con un unico referente.",
        url: `${SITE_URL}${path}`,
        images: [`${SITE_URL}/images/federico-ritratto-professionale.png`],
    },
};

const examples = [
    { title: "Gestione delle richieste", before: "Ricevi richieste via email e inserisci i dati nel CRM, poi avvisi il collega che deve seguirle.", after: "Collego email e CRM per registrare la richiesta, assegnarla al referente e inviare una conferma." },
    { title: "Inserimento degli ordini", before: "Copi ordini e anagrafiche dall’e-commerce al gestionale e controlli che i dati coincidano.", after: "Integro e-commerce e gestionale per trasferire gli ordini e segnalare i dati da verificare." },
    { title: "Preparazione dei report", before: "Esporti i dati da più strumenti e li riunisci in un foglio per preparare il report periodico.", after: "Configuro la raccolta dei dati e l’invio del report, con frequenza e destinatari concordati." },
];

export default function AutomationLandingPage() {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
    return <div className={styles.landing}>
        <header className={styles.header}>
            <Link href="/" className={styles.wordmark}>Federico Tassara<span>Sviluppo software e automazioni</span></Link>
            <a href="#parliamone" className={styles.headerCta}>Richiedi un confronto <ArrowRight size={16} aria-hidden="true" /></a>
        </header>
        <section className={styles.hero} aria-labelledby="landing-title">
            <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>Automazioni aziendali per PMI</p>
                <h1 id="landing-title">Automatizzo i processi che oggi <em>gestisci a mano.</em></h1>
                <p className={styles.lead}>Se il tuo team copia dati tra software, controlla richieste o prepara report a mano, posso automatizzare quei passaggi. Sviluppo le integrazioni tra gli strumenti che usate in azienda.</p>
                <a href="#parliamone" className={styles.cta}>Richiedi un primo confronto <ArrowRight size={18} aria-hidden="true" /></a>
                <p className={styles.note}>Il primo confronto è gratuito. Esaminiamo il processo e i software coinvolti.</p>
                <a href="#esempi" className={styles.exampleLink}>Vedi alcuni esempi <ArrowDown size={15} aria-hidden="true" /></a>
            </div>
            <figure className={styles.portrait}>
                <Image src="/images/federico-ritratto-professionale.png" alt="Federico Tassara, il tuo referente per le automazioni" width={1122} height={1402} sizes="(min-width: 900px) 380px, 85vw" priority />
                <figcaption><strong>Federico Tassara</strong><span>Sviluppatore software e consulente tecnico. Mi occupo dell’analisi, delle integrazioni e del supporto.</span></figcaption>
            </figure>
        </section>
        <CaseStudies />
        <section id="esempi" className={styles.section}>
            <div className={styles.sectionHeading}><p className={styles.eyebrow}>Applicazioni in azienda</p><h2>Richieste, ordini e report</h2><p>Posso intervenire su un singolo processo. Questi sono alcuni esempi; la fattibilità dipende dalle integrazioni disponibili nei tuoi software.</p></div>
            <div className={styles.examples}>{examples.map(example => <article key={example.title} className={styles.example}>
                <h3>{example.title}</h3><div><span className={styles.smallLabel}>Oggi</span><p>{example.before}</p></div><div className={styles.after}><span className={styles.smallLabel}>Il mio intervento</span><p>{example.after}</p></div>
            </article>)}</div>
        </section>
        <section className={styles.section}>
            <div className={styles.sectionHeading}><p className={styles.eyebrow}>Come lavoriamo</p><h2>Dal primo confronto al rilascio</h2></div>
            <div className={styles.method}>
                <article><h3>Analisi del processo</h3><p>Mi mostri i passaggi che seguite e i software che usate. Verifico come collegarli e quali attività richiedono ancora il controllo di una persona.</p></article>
                <article><h3>Proposta e preventivo</h3><p>Ti indico cosa posso automatizzare, i tempi e il costo del lavoro. Concordiamo anche eventuali abbonamenti a servizi esterni e manutenzione.</p></article>
                <article><h3>Sviluppo e verifica</h3><p>Sviluppo l’automazione e la proviamo su casi concordati. Prima del rilascio definiamo come gestire gli errori e chi avvisare.</p></article>
            </div>
        </section>
        <section id="parliamone" className={styles.contact} aria-labelledby="contact-title">
            <div><p className={styles.eyebrow}>Primo confronto gratuito</p><h2 id="contact-title">Descrivimi il processo che vuoi automatizzare</h2><p>Indicami l’attività, i software coinvolti e quanto spesso la svolgete. Ti rispondo per approfondire la richiesta e organizzare un confronto.</p><ul className={styles.reassurance}><li><Check size={17} aria-hidden="true" />Esaminiamo i passaggi manuali</li><li><Check size={17} aria-hidden="true" />Verifichiamo le integrazioni disponibili</li><li><Check size={17} aria-hidden="true" />Definiamo cosa includere nel preventivo</li></ul></div>
            <ContactForm siteKey={siteKey} source="landing_automazioni_pmi" submitLabel="Invia la richiesta" messageLabel="Cosa vuoi automatizzare?" messagePlaceholder="Per esempio: copiamo gli ordini da Shopify nel gestionale e aggiorniamo un foglio Excel. Vorremmo collegare questi passaggi." />
        </section>
        <section className={styles.faq} aria-labelledby="faq-title"><h2 id="faq-title">Costi, strumenti e assistenza</h2>{[
            ["Devo cambiare i software che uso?", "Valuto prima i software che usi. Se dispongono delle integrazioni necessarie, posso collegarli senza sostituirli. Ti segnalo i limiti tecnici durante l’analisi."],
            ["Quanto costa un’automazione?", "Preparo il preventivo dopo aver esaminato il processo. Il costo dipende dai sistemi da collegare e dalle regole da implementare. Distinguo il lavoro di sviluppo dai costi di servizi esterni e assistenza."],
            ["Serve per forza l’intelligenza artificiale?", "Per trasferire dati o inviare notifiche uso integrazioni e regole definite. Posso valutare l’AI per attività come l’estrazione di informazioni dai documenti, concordando con te i controlli sull’output."],
            ["Cosa succede se qualcosa non funziona?", "Configuro la gestione degli errori e le segnalazioni previste dal progetto. Nel preventivo concordiamo il monitoraggio e il supporto, compresi gli interventi necessari se un fornitore cambia le proprie API."],
        ].map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
        <footer className={styles.footer}><div><strong>Federico Tassara</strong><a href="mailto:info@federicotassara.com"><Mail size={14} aria-hidden="true" /> info@federicotassara.com</a></div><div><Link href="/privacy-policy">Privacy Policy</Link><Link href="/cookie">Cookie</Link></div></footer>
    </div>;
}
