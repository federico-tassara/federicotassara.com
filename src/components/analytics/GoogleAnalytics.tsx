"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * ID dello scopo "Statistiche" configurato nel Consent Management di Cloudflare
 * Zaraz. Se lo scopo viene ricreato in dashboard, Zaraz genera un ID nuovo e
 * questa costante va aggiornata di conseguenza.
 */
const ZARAZ_ANALYTICS_PURPOSE = "sVpK";

declare global {
    interface Window {
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
        zaraz?: {
            consent?: {
                get: (purposeId: string) => boolean | undefined;
                getAll: () => Record<string, boolean>;
            };
        };
    }
}

/**
 * Consent Mode v2 con tutte le categorie negate per impostazione predefinita.
 *
 * Viene reso come script inline (non tramite next/script) perché deve girare
 * durante il parsing dell'HTML, quindi prima che gtag.js venga caricato.
 */
const CONSENT_DEFAULT = `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
window.gtag=gtag;
gtag('consent','default',{
ad_storage:'denied',
ad_user_data:'denied',
ad_personalization:'denied',
analytics_storage:'denied',
functionality_storage:'granted',
security_storage:'granted',
wait_for_update:500
});
gtag('js',new Date());
`;

function sendPageView(gaId: string, path: string) {
    window.gtag?.("event", "page_view", {
        send_to: gaId,
        page_path: path,
        page_location: window.location.href,
        page_title: document.title,
    });
}

function currentPath(pathname: string, searchParams: URLSearchParams) {
    const query = searchParams.toString();
    return query ? `${pathname}?${query}` : pathname;
}

function PageViewTracker({ gaId }: { gaId: string }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        sendPageView(gaId, currentPath(pathname, searchParams));
    }, [gaId, pathname, searchParams]);

    return null;
}

/**
 * Traduce le scelte del Consent Management di Zaraz in comandi Google Consent Mode.
 *
 * Serve perché zaraz.set("google_consent_update", ...) governa solo i tool caricati
 * da Zaraz, mentre qui gtag.js lo carica il sito. Senza questo ponte il banner
 * registrerebbe la scelta dell'utente senza mai sbloccare la misurazione.
 *
 * Le finalità pubblicitarie restano negate: il sito non usa advertising.
 */
function ZarazConsentBridge({ gaId }: { gaId: string }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const previousConsent = useRef<boolean | null>(null);

    useEffect(() => {
        const sync = () => {
            const granted = window.zaraz?.consent?.get(ZARAZ_ANALYTICS_PURPOSE);
            if (typeof granted !== "boolean") return;

            window.gtag?.("consent", "update", {
                analytics_storage: granted ? "granted" : "denied",
            });

            // Chi accetta dopo il caricamento ha già generato una pageview senza
            // cookie: la reinvia una volta sola, alla transizione da negato a
            // concesso, per non contare due volte chi aveva già accettato prima.
            if (granted && previousConsent.current === false) {
                sendPageView(gaId, currentPath(pathname, searchParams));
            }
            previousConsent.current = granted;
        };

        document.addEventListener("zarazConsentAPIReady", sync);
        document.addEventListener("zarazConsentChoicesUpdated", sync);
        // Zaraz può essere già pronto quando React monta: in quel caso l'evento
        // è passato e lo stato va letto subito.
        sync();

        return () => {
            document.removeEventListener("zarazConsentAPIReady", sync);
            document.removeEventListener("zarazConsentChoicesUpdated", sync);
        };
    }, [gaId, pathname, searchParams]);

    return null;
}

/**
 * Google Analytics 4.
 *
 * Se NEXT_PUBLIC_GA_MEASUREMENT_ID non è configurata il componente non renderizza
 * nulla, quindi il sito gira senza tracciamento finché la variabile resta vuota.
 * Le pageview delle navigazioni client-side le invia PageViewTracker, perciò la
 * config disattiva send_page_view per non contarle due volte.
 */
export function GoogleAnalytics() {
    if (!GA_ID) return null;

    return (
        <>
            <script dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT }} />
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
                {`gtag('config','${GA_ID}',{send_page_view:false});`}
            </Script>
            <Suspense fallback={null}>
                <PageViewTracker gaId={GA_ID} />
                <ZarazConsentBridge gaId={GA_ID} />
            </Suspense>
        </>
    );
}
