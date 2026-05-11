import type { Metadata } from "next";
import { Mail, MapPin, Calendar } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { ContactForm } from "@/src/components/contact/ContactForm";
import { ADDRESSES, CALENDLY_URL, SITE_EMAIL, SITE_URL } from "@/src/lib/utils";

export const metadata: Metadata = {
    title: { absolute: "Contatti — Sviluppatore freelance e Fractional CTO | Federico Tassara" },
    description:
        "Scrivimi per progetti web, app mobile, consulenza tecnica o Fractional CTO. Lavoro full-remote dall'Italia, sedi a Loano (SV) e Orbassano (TO).",
    alternates: { canonical: `${SITE_URL}/contatti` },
    openGraph: {
        title: "Contatti — Sviluppatore freelance e Fractional CTO",
        description:
            "Scrivimi per progetti web, app mobile o consulenza tecnica. Full-remote dall'Italia.",
        url: `${SITE_URL}/contatti`,
        type: "website",
    },
};

const url = `${SITE_URL}/contatti`;

const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${url}#contact`,
    inLanguage: "it-IT",
    name: "Contatti — Federico Tassara",
    description:
        "Contatta Federico Tassara per progetti web, mobile, consulenza tecnica o Fractional CTO.",
    url,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: {
        "@id": `${SITE_URL}/#organization`,
        contactPoint: [
            {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: SITE_EMAIL,
                availableLanguage: ["Italian", "English"],
                areaServed: "IT",
            },
            {
                "@type": "ContactPoint",
                contactType: "sales",
                email: SITE_EMAIL,
                availableLanguage: ["Italian", "English"],
                areaServed: "IT",
            },
        ],
    },
    breadcrumb: { "@id": `${url}#breadcrumb` },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Contatti", item: url },
    ],
};

export default function ContattiPage() {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <section className="py-16 sm:py-24">
            <Container>
                <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
                    <div className="anim-fade-up">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            Contatti
                        </span>
                        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl md:leading-[1.05]">
                            Hai un’idea?
                            <br />
                            Parliamone, senza impegno.
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-muted">
                            Compila il form per raccontarmi il tuo progetto, oppure prenota direttamente
                            una call introduttiva: ti rispondo nel più breve tempo possibile.
                        </p>
                        <div className="mt-8 space-y-5">
                            <Info
                                icon={<Mail className="size-5" />}
                                label="Email"
                                value={SITE_EMAIL}
                                href={`mailto:${SITE_EMAIL}`}
                            />
                            <Info
                                icon={<Calendar className="size-5" />}
                                label="Calendario"
                                value="Prenota una call su Calendly"
                                href={CALENDLY_URL}
                                external
                            />
                            <div className="rounded-2xl border border-ink/8 bg-surface-alt p-6">
                                <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                                    <MapPin className="size-4" /> Sedi fisiche
                                </div>
                                <p className="mt-3 text-sm text-muted">
                                    Lavoro full-remote, ma se serve un incontro in presenza mi trovi qui:
                                </p>
                                <ul className="mt-4 space-y-3 text-sm">
                                    {ADDRESSES.map((a) => (
                                        <li key={a.city}>
                                            <div className="font-medium text-ink">
                                                {a.city} ({a.province})
                                            </div>
                                            <div className="text-muted">{a.street}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Button href={CALENDLY_URL} external size="lg">
                                Prendi appuntamento
                            </Button>
                        </div>
                    </div>

                    <div className="anim-fade-up anim-delay-200">
                        <ContactForm siteKey={siteKey} />
                    </div>
                </div>
            </Container>
        </section>
        </>
    );
}

function Info({
    icon,
    label,
    value,
    href,
    external,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
    href: string;
    external?: boolean;
}) {
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-4 rounded-2xl border border-ink/8 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-sm"
        >
            <span className="flex size-11 items-center justify-center rounded-xl bg-surface-alt text-ink">
                {icon}
            </span>
            <div>
                <div className="text-xs uppercase tracking-wider text-muted">{label}</div>
                <div className="text-ink group-hover:text-ink-soft">{value}</div>
            </div>
        </a>
    );
}
