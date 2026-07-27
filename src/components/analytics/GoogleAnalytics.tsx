"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
    interface Window {
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
    }
}

/**
 * Consent Mode v2 con tutte le categorie negate per impostazione predefinita.
 *
 * Viene reso come script inline (non tramite next/script) perché deve girare
 * durante il parsing dell'HTML, quindi prima che gtag.js venga caricato. Un CMP
 * esterno sblocca la misurazione chiamando gtag('consent', 'update', {...}).
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

function PageViewTracker({ gaId }: { gaId: string }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const query = searchParams.toString();
        window.gtag?.("event", "page_view", {
            send_to: gaId,
            page_path: query ? `${pathname}?${query}` : pathname,
            page_location: window.location.href,
            page_title: document.title,
        });
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
            </Suspense>
        </>
    );
}
