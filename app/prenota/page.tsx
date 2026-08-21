import type { Metadata } from "next";
import { CalendarCheck, LockKeyhole } from "lucide-react";
import { CalendlyEmbed } from "@/src/components/calendly/CalendlyEmbed";
import { Container } from "@/src/components/ui/Container";
import { normalizeAttributionSource } from "@/src/lib/utils";

export const metadata: Metadata = {
    title: "Prenota una call",
    description: "Scegli giorno e orario per parlare del tuo progetto con Federico Tassara.",
    robots: {
        index: false,
        follow: false,
    },
};

type PrenotaPageProps = {
    searchParams: Promise<{ source?: string }>;
};

export default async function PrenotaPage({ searchParams }: PrenotaPageProps) {
    const { source } = await searchParams;
    const normalizedSource = normalizeAttributionSource(source, "booking_page");

    return (
        <section className="py-12 sm:py-16">
            <Container>
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-ink text-white">
                        <CalendarCheck className="size-6" aria-hidden="true" />
                    </div>
                    <h1 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                        Scegli quando sentirci
                    </h1>
                    <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted">
                        Seleziona un giorno e un orario disponibili. Dopo la conferma riceverai via
                        email tutti i dettagli per collegarti.
                    </p>
                    <p className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-muted">
                        <LockKeyhole className="size-3.5" aria-hidden="true" />
                        I dati della prenotazione sono gestiti tramite Calendly.
                    </p>
                </div>

                <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_20px_60px_-32px_rgba(28,31,51,0.25)]">
                    <CalendlyEmbed source={normalizedSource} />
                </div>
            </Container>
        </section>
    );
}
