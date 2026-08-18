import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarCheck, CheckCircle2, Mail } from "lucide-react";
import { Container } from "@/src/components/ui/Container";

export const metadata: Metadata = {
    title: "Appuntamento confermato",
    description: "La tua call con Federico Tassara è stata prenotata con successo.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function GraziePrenotazionePage() {
    return (
        <section className="flex min-h-[calc(100vh-4rem)] items-center py-16 sm:py-24">
            <Container size="sm">
                <div className="anim-fade-up overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-[0_24px_80px_-32px_rgba(28,31,51,0.25)]">
                    <div className="border-b border-ink/8 bg-surface-alt px-6 py-8 text-center sm:px-10 sm:py-10">
                        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-ink text-white shadow-sm">
                            <CheckCircle2 className="size-8" aria-hidden="true" />
                        </div>
                        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            Prenotazione completata
                        </p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                            Appuntamento confermato
                        </h1>
                        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                            Grazie per aver prenotato. Ci sentiamo nel giorno e all’orario che hai
                            scelto per parlare del tuo progetto.
                        </p>
                    </div>

                    <div className="px-6 py-8 sm:px-10 sm:py-10">
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div className="rounded-2xl border border-ink/8 p-5">
                                <CalendarCheck className="size-5 text-ink" aria-hidden="true" />
                                <h2 className="mt-3 font-semibold text-ink">Controlla il calendario</h2>
                                <p className="mt-2 text-sm leading-relaxed text-muted">
                                    Troverai l’appuntamento con il link per collegarti nel calendario
                                    utilizzato durante la prenotazione.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-ink/8 p-5">
                                <Mail className="size-5 text-ink" aria-hidden="true" />
                                <h2 className="mt-3 font-semibold text-ink">Controlla la conferma</h2>
                                <p className="mt-2 text-sm leading-relaxed text-muted">
                                    Calendly ti ha inviato un’email riepilogativa. Se non la trovi,
                                    verifica anche la cartella spam.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 rounded-2xl bg-surface-alt p-5 sm:p-6">
                            <h2 className="font-semibold text-ink">Per rendere utile la call</h2>
                            <p className="mt-2 text-sm leading-relaxed text-muted">
                                Se puoi, prepara una breve descrizione del progetto, il problema
                                principale da risolvere e gli eventuali vincoli di tempi, budget o
                                tecnologia. Partiremo da lì.
                            </p>
                        </div>

                        <div className="mt-8 text-center">
                            <Link
                                href="/fractional-cto"
                                className="inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-ink/25 underline-offset-4 transition-colors hover:decoration-ink"
                            >
                                <ArrowLeft className="size-4" aria-hidden="true" />
                                Torna alla pagina Fractional CTO
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
