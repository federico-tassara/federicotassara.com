import type { Metadata } from "next";
import { Container } from "@/src/components/ui/Container";
import { SITE_EMAIL, SITE_URL } from "@/src/lib/utils";

export const metadata: Metadata = {
    title: "Cookie Policy",
    description: "Informativa cookie per il sito federicotassara.com.",
    alternates: { canonical: `${SITE_URL}/cookie` },
    robots: { index: false, follow: true },
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
                    Ultimo aggiornamento: 27 luglio 2026
                </p>

                <div className="markdown-body mt-10">
                    <h2>1. Cosa sono i cookie</h2>
                    <p>
                        I cookie sono piccoli file di testo che i siti visitati salvano sul dispositivo
                        dell’utente. Servono a far funzionare il sito, ricordare preferenze o
                        raccogliere informazioni in forma aggregata.
                    </p>

                    <h2>2. Cookie tecnici</h2>
                    <p>
                        Questi cookie fanno funzionare il sito e non richiedono il consenso
                        dell’utente:
                    </p>
                    <ul>
                        <li>
                            <strong>Cloudflare Turnstile</strong> — verifica anti-spam sul modulo di
                            contatto. Non profila l’utente.
                        </li>
                    </ul>

                    <h2>3. Cookie analitici</h2>
                    <p>
                        Il sito misura le visite con Google Analytics 4. Google scrive i cookie
                        analitici solo dopo che l’utente ha prestato il consenso: prima di quel
                        momento la libreria non salva alcun identificatore sul dispositivo, perché
                        il sito imposta tutte le categorie di Consent Mode su “denied”.
                    </p>
                    <ul>
                        <li>
                            <strong>_ga</strong> e <strong>_ga_&lt;ID&gt;</strong> — Google li usa per
                            distinguere i visitatori e le sessioni. Durata massima 24 mesi.
                        </li>
                    </ul>
                    <p>
                        Questo sito non installa cookie pubblicitari. Le finalità di advertising,
                        la personalizzazione degli annunci e la condivisione dei dati con Google a
                        fini pubblicitari restano disattivate.
                    </p>

                    <h2>4. Come gestire o revocare il consenso</h2>
                    <p>
                        L’utente può cambiare o ritirare la propria scelta in qualsiasi momento dal
                        pannello di gestione del consenso presente sul sito. In alternativa può
                        bloccare o eliminare i cookie dalle impostazioni del browser, oppure
                        installare il componente aggiuntivo di Google per la disattivazione di
                        Analytics. Bloccare i cookie tecnici limita alcune funzioni del sito, tra
                        cui l’invio del modulo di contatto.
                    </p>

                    <h2>5. Contatti</h2>
                    <p>
                        Per qualsiasi domanda sulla cookie policy, scrivere a{" "}
                        <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
                    </p>
                </div>
            </Container>
        </section>
    );
}
