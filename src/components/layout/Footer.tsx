import Link from "next/link";
import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { SERVICES } from "@/src/lib/services";
import { ADDRESSES, SITE_EMAIL, SOCIAL } from "@/src/lib/utils";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-ink/8 bg-surface-alt">
            <Container className="py-14">
                <div className="grid gap-10 lg:grid-cols-4">
                    <div className="lg:col-span-1">
                        <Link href="/" className="text-lg font-bold tracking-tight text-ink">
                            Federico Tassara
                        </Link>
                        <p className="mt-3 text-sm leading-relaxed text-muted">
                            Full Stack Developer e Fractional CTO. Sviluppo app web e mobile,
                            backend solidi e architetture pronte a crescere.
                        </p>
                        <div className="mt-5 flex items-center gap-2">
                            <SocialIcon href={SOCIAL.instagram} label="Instagram"><Instagram className="size-4" /></SocialIcon>
                            <SocialIcon href={SOCIAL.youtube} label="YouTube"><Youtube className="size-4" /></SocialIcon>
                            <SocialIcon href={SOCIAL.linkedin} label="LinkedIn"><Linkedin className="size-4" /></SocialIcon>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">Naviga</h3>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            <li><Link href="/" className="text-muted hover:text-ink">Home</Link></li>
                            <li><Link href="/chi-sono" className="text-muted hover:text-ink">Chi sono</Link></li>
                            <li><Link href="/blog" className="text-muted hover:text-ink">Blog</Link></li>
                            <li><Link href="/progetti" className="text-muted hover:text-ink">Progetti</Link></li>
                            <li><Link href="/contatti" className="text-muted hover:text-ink">Contatti</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">Servizi</h3>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            {SERVICES.map((s) => (
                                <li key={s.slug}>
                                    <Link href={`/servizi/${s.slug}`} className="text-muted hover:text-ink">
                                        {s.shortTitle}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-1.5">
                                <Link href="/fractional-cto" className="font-medium text-ink hover:text-ink-soft">
                                    Fractional CTO
                                </Link>
                            </li>
                            <li>
                                <Link href="/sviluppatore-react-native-italia" className="font-medium text-ink hover:text-ink-soft">
                                    Sviluppatore React Native
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">Contatti</h3>
                        <ul className="mt-4 space-y-3 text-sm text-muted">
                            <li className="flex items-start gap-2">
                                <Mail className="mt-0.5 size-4 shrink-0" />
                                <a href={`mailto:${SITE_EMAIL}`} className="hover:text-ink">{SITE_EMAIL}</a>
                            </li>
                            {ADDRESSES.map((a) => (
                                <li key={a.city} className="leading-relaxed">
                                    <div className="font-medium text-ink">{a.city} ({a.province})</div>
                                    <div>{a.street}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink/8 pt-6 text-xs text-muted sm:flex-row sm:items-center">
                    <p>© {year} Federico Tassara. Tutti i diritti riservati.</p>
                    <div className="flex gap-5">
                        <Link href="/privacy-policy" className="hover:text-ink">Privacy Policy</Link>
                        <Link href="/cookie" className="hover:text-ink">Cookie</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex size-9 items-center justify-center rounded-full border border-ink/10 bg-white text-ink-soft transition-all hover:-translate-y-0.5 hover:border-ink/30 hover:text-ink"
        >
            {children}
        </a>
    );
}
