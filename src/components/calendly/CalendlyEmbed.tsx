"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { CALENDLY_URL } from "@/src/lib/utils";

type CalendlyMessage = {
    event?: string;
};

export function CalendlyEmbed({ source }: { source: string }) {
    const router = useRouter();
    const calendlyUrl = useMemo(() => {
        const url = new URL(CALENDLY_URL);
        url.searchParams.set("embed_type", "Inline");
        url.searchParams.set("embed_domain", "federicotassara.com");
        url.searchParams.set("utm_source", "federicotassara.com");
        url.searchParams.set("utm_medium", "website");
        url.searchParams.set("utm_campaign", "fractional_cto");
        url.searchParams.set("utm_content", source);
        return url.toString();
    }, [source]);

    useEffect(() => {
        const onCalendlyMessage = (message: MessageEvent<CalendlyMessage>) => {
            if (message.origin !== "https://calendly.com") return;
            if (message.data?.event !== "calendly.event_scheduled") return;

            router.replace("/grazie-prenotazione");
        };

        window.addEventListener("message", onCalendlyMessage);
        return () => window.removeEventListener("message", onCalendlyMessage);
    }, [router]);

    return (
        <iframe
            src={calendlyUrl}
            title="Prenota una call con Federico Tassara"
            className="h-[760px] w-full border-0 sm:h-[720px]"
            loading="eager"
        />
    );
}
