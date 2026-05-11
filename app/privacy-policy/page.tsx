import type { Metadata } from "next";
import { Container } from "@/src/components/ui/Container";
import { SITE_EMAIL, SITE_URL } from "@/src/lib/utils";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Informativa privacy per il sito federicotassara.com.",
    alternates: { canonical: `${SITE_URL}/privacy-policy` },
    robots: { index: true, follow: true },
};

export default function PrivacyPage() {
    return (
        <section className="py-16 sm:py-24">
            <Container size="sm">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    Legale
                </span>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                    Privacy Policy
                </h1>
                <p className="mt-4 text-sm text-muted">
                    Ultimo aggiornamento: 11 maggio 2026
                </p>

                <div className="markdown-body mt-10">
                    <h2>1. Titolare del trattamento</h2>
                    <p>
                        Il titolare del trattamento dei dati personali raccolti tramite questo sito è
                        Federico Tassara, contattabile all’indirizzo email{" "}
                        <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
                    </p>

                    <h2>2. Dati raccolti</h2>
                    <p>
                        Il sito raccoglie i dati che l’utente fornisce volontariamente compilando il
                        modulo di contatto: nome, cognome, indirizzo email e contenuto del messaggio.
                        Vengono inoltre raccolti dati tecnici di navigazione (es. indirizzo IP, tipo di
                        browser) necessari al funzionamento dei servizi e alla protezione contro abusi.
                    </p>

                    <h2>3. Finalità del trattamento</h2>
                    <ul>
                        <li>Rispondere alle richieste inviate tramite modulo di contatto.</li>
                        <li>Adempiere a obblighi di legge.</li>
                        <li>Protezione contro spam e abusi tramite Cloudflare Turnstile.</li>
                        <li>Misurare l’utilizzo del sito in forma aggregata e anonima.</li>
                    </ul>

                    <h2>4. Base giuridica</h2>
                    <p>
                        Il trattamento si fonda sul consenso dell’utente (modulo di contatto), su
                        obblighi di legge e sul legittimo interesse del titolare a tutelare il
                        funzionamento del sito.
                    </p>

                    <h2>5. Servizi di terze parti</h2>
                    <ul>
                        <li>
                            <strong>Resend</strong> — invio delle email del modulo di contatto.
                        </li>
                        <li>
                            <strong>Cloudflare Turnstile</strong> — protezione anti-spam del modulo.
                        </li>
                        <li>
                            <strong>Calendly</strong> — prenotazione di consulenze online.
                        </li>
                    </ul>

                    <h2>6. Conservazione dei dati</h2>
                    <p>
                        I dati forniti tramite il modulo di contatto vengono conservati per il tempo
                        strettamente necessario a gestire la richiesta e, comunque, non oltre 24 mesi.
                    </p>

                    <h2>7. Diritti dell’utente</h2>
                    <p>
                        L’utente può in qualsiasi momento esercitare i diritti previsti dal GDPR
                        (accesso, rettifica, cancellazione, limitazione, portabilità, opposizione)
                        scrivendo a <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
                    </p>

                    <h2>8. Modifiche</h2>
                    <p>
                        Questa privacy policy può essere aggiornata. La data dell’ultimo aggiornamento è
                        riportata in alto.
                    </p>
                </div>
            </Container>
        </section>
    );
}
