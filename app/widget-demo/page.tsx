import type { Metadata } from "next";

import { AkintuWidgetDemo } from "@/src/components/akintu/AkintuWidgetDemo";
import { Container } from "@/src/components/ui/Container";

export const metadata: Metadata = {
    title: "Demo widget Akintu",
    robots: { index: false, follow: false },
};

export default function WidgetDemoPage() {
    return (
        <section className="min-h-screen bg-surface-alt py-16 sm:py-24">
            <Container>
                <div className="mx-auto max-w-4xl">
                    <header className="mb-10 max-w-2xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            Integrazione npm
                        </p>
                        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                            Test del widget Akintu
                        </h1>
                        <p className="mt-4 leading-relaxed text-muted">
                            Embed e Inline usano il pacchetto npm ufficiale e comunicano con l’API
                            Akintu configurata per questo sito.
                        </p>
                    </header>

                    <AkintuWidgetDemo />
                </div>
            </Container>
        </section>
    );
}
