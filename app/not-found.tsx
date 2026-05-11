import type { Metadata } from "next";
import Link from "next/link";
import { Home, FileText, Code2, Mail } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";

export const metadata: Metadata = {
    title: { absolute: "Pagina non trovata | Federico Tassara" },
    description: "La pagina che cerchi non esiste o è stata spostata.",
    robots: { index: false, follow: true },
};

const LINKS = [
    {
        href: "/",
        title: "Home",
        desc: "Torna alla pagina principale.",
        icon: Home,
    },
    {
        href: "/servizi",
        title: "Servizi",
        desc: "Sviluppo web, mobile, backend, consulenza.",
        icon: Code2,
    },
    {
        href: "/blog",
        title: "Blog",
        desc: "Articoli e guide su sviluppo e architetture.",
        icon: FileText,
    },
    {
        href: "/contatti",
        title: "Contatti",
        desc: "Scrivimi per parlare del tuo progetto.",
        icon: Mail,
    },
];

export default function NotFound() {
    return (
        <section className="py-20 sm:py-28">
            <Container size="sm">
                <div className="anim-fade-up text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                        Errore 404
                    </span>
                    <h1 className="mt-4 text-5xl font-bold tracking-tight text-ink sm:text-6xl md:text-7xl">
                        Pagina non trovata.
                    </h1>
                    <p className="mt-5 text-lg leading-relaxed text-muted">
                        La pagina che cerchi non esiste, è stata spostata o il link che hai seguito
                        è obsoleto. Da qui puoi ripartire.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <Button href="/" size="lg">
                            Torna alla home
                        </Button>
                        <Button href="/contatti" variant="outline" size="lg">
                            Scrivimi
                        </Button>
                    </div>
                </div>

                <div className="mt-16 grid gap-4 sm:grid-cols-2">
                    {LINKS.map((l, i) => {
                        const Icon = l.icon;
                        return (
                            <Link
                                key={l.href}
                                href={l.href}
                                className="group anim-fade-up flex items-start gap-4 rounded-2xl border border-ink/8 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-sm"
                                style={{ animationDelay: `${i * 60}ms` }}
                            >
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-surface-alt text-ink">
                                    <Icon className="size-5" />
                                </span>
                                <div>
                                    <h2 className="text-base font-bold text-ink group-hover:text-ink-soft">
                                        {l.title}
                                    </h2>
                                    <p className="mt-1 text-sm text-muted">{l.desc}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
