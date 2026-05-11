import type { Metadata } from "next";
import { Container } from "@/src/components/ui/Container";
import { SITE_EMAIL, SITE_URL } from "@/src/lib/utils";

export const metadata: Metadata = {
    title: "Cookie Policy",
    description: "Informativa cookie per il sito federicotassara.com.",
    alternates: { canonical: `${SITE_URL}/cookie` },
};

export default function CookiePage() {
    return (
        <section className="py-16 sm:py-24">
            <Container size="sm">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    Legale
                </span>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                    Cookie Policy
                </h1>
                <p className="mt-4 text-sm text-muted">
                    Ultimo aggiornamento: 11 maggio 2026
                </p>

                <div className="markdown-body mt-10">
                    <h2>1. Cosa sono i cookie</h2>
                    <p>
                        I cookie sono piccoli file di testo che i siti visitati salvano sul dispositivo
                        dell’utente. Servono a far funzionare il sito, ricordare preferenze o
                        raccogliere informazioni in forma aggregata.
                    </p>

                    <h2>2. Cookie utilizzati su questo sito</h2>
                    <p>Questo sito utilizza esclusivamente cookie tecnici e di terze parti necessari al funzionamento di servizi specifici:</p>
                    <ul>
                        <li>
                            <strong>Cloudflare Turnstile</strong> — verifica anti-spam sul modulo di
                            contatto. Non profila l’utente.
                        </li>
                    </ul>
                    <p>
                        Non sono installati cookie di profilazione o pubblicitari senza consenso esplicito.
                    </p>

                    <h2>3. Gestione dei cookie</h2>
                    <p>
                        L’utente può configurare il proprio browser per bloccare o eliminare i cookie.
                        La disabilitazione di alcuni cookie può limitare l’utilizzo di alcune funzioni
                        del sito (es. il modulo di contatto).
                    </p>

                    <h2>4. Contatti</h2>
                    <p>
                        Per qualsiasi domanda sulla cookie policy, scrivere a{" "}
                        <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
                    </p>
                </div>
            </Container>
        </section>
    );
}
