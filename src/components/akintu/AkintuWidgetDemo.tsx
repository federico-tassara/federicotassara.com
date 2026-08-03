"use client";

import { AkintuEmbed, AkintuInline } from "@akintu/widget/react";

const akintuApiBaseUrl = process.env.NEXT_PUBLIC_AKINTU_API_URL;
const akintuClientKey = process.env.NEXT_PUBLIC_AKINTU_CLIENT_KEY;

/**
 * Mounts both v1 surfaces from the published npm package. The client key
 * stays in the browser bundle and the widget's in-memory API client; it is not
 * copied into custom-element attributes or browser storage.
 */
export function AkintuWidgetDemo() {
    if (!akintuClientKey) {
        return (
            <p className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
                Configura <code>NEXT_PUBLIC_AKINTU_CLIENT_KEY</code> in <code>.env.local</code> e
                riavvia il server Next.js.
            </p>
        );
    }

    return (
        <div className="grid gap-10">
            <section aria-labelledby="akintu-embed-heading">
                <h2 id="akintu-embed-heading" className="mb-4 text-xl font-semibold text-ink">
                    Embed principale
                </h2>
                <AkintuEmbed apiKey={akintuClientKey} apiBaseUrl={akintuApiBaseUrl} />
            </section>

            <section aria-labelledby="akintu-inline-heading">
                <h2 id="akintu-inline-heading" className="mb-4 text-xl font-semibold text-ink">
                    Inline contestuale
                </h2>
                <AkintuInline
                    apiKey={akintuClientKey}
                    apiBaseUrl={akintuApiBaseUrl}
                    context="servizi-sviluppo-software"
                />
            </section>
        </div>
    );
}
