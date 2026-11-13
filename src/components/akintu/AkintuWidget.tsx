import { createElement } from "react";
import Script from "next/script";

const clientKey = process.env.NEXT_PUBLIC_AKINTU_CLIENT_KEY;

/** The V2 loader uses the site's production configuration, without granting tracking consent. */
export function AkintuWidget() {
    if (!clientKey) return null;

    return (
        <>
            {createElement("akintu-embed", { "aria-label": "Assistente Akintu" })}
            <Script
                id="akintu-widget-v2"
                src="https://akintu.io/loader/v2/loader.js"
                data-api-key={clientKey}
                data-api-base-url="https://api.akintu.io"
                strategy="afterInteractive"
            />
        </>
    );
}
