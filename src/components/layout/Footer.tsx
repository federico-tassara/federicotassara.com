import Link from "next/link";
import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { SERVICE_NAVIGATION } from "@/src/lib/service-navigation";
import { ADDRESSES, SITE_EMAIL, SOCIAL } from "@/src/lib/utils";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer rounded-t-[28px] bg-ink text-white">
            <Container className="py-14">
                <div className="grid gap-10 lg:grid-cols-4">
                    <div className="lg:col-span-1">
                        <Link href="/" className="text-lg font-medium tracking-tight text-white">
                            Federico Tassara
                        </Link>
                        <p className="mt-3 text-sm leading-relaxed text-white/75">
                            Fractional CTO e sviluppatore software web e mobile.
                            Automazioni aziendali e consulenza tecnica per startup e PMI.
                        </p>
                        <div className="mt-5 flex items-center gap-2">
                            <SocialIcon href={SOCIAL.instagram} label="Instagram"><Instagram className="size-4" /></SocialIcon>
                            <SocialIcon href={SOCIAL.youtube} label="YouTube"><Youtube className="size-4" /></SocialIcon>
                            <SocialIcon href={SOCIAL.linkedin} label="LinkedIn"><Linkedin className="size-4" /></SocialIcon>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Naviga</h3>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            <li><Link href="/" className="text-white/75 hover:text-white">Home</Link></li>
                            <li><Link href="/chi-sono" className="text-white/75 hover:text-white">Chi sono</Link></li>
                            <li><Link href="/blog" className="text-white/75 hover:text-white">Blog</Link></li>
                            <li><Link href="/progetti" className="text-white/75 hover:text-white">Progetti</Link></li>
                            <li><Link href="/contatti" className="text-white/75 hover:text-white">Contatti</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Servizi</h3>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            {SERVICE_NAVIGATION.map((s) => (
                                <li key={s.href}>
                                    <Link href={s.href} className="text-white/75 hover:text-white">
                                        {s.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contatti</h3>
                        <ul className="mt-4 space-y-3 text-sm text-white/75">
                            <li className="flex items-start gap-2">
                                <Mail className="mt-0.5 size-4 shrink-0" />
                                <a href={`mailto:${SITE_EMAIL}`} className="hover:text-white">{SITE_EMAIL}</a>
                            </li>
                            {ADDRESSES.map((a) => (
                                <li key={a.city} className="leading-relaxed">
                                    <div className="font-medium text-white">{a.city} ({a.province})</div>
                                    <div>{a.street}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-6 text-xs text-white/75 sm:flex-row sm:items-center">
                    <p>© {year} Federico Tassara. Tutti i diritti riservati.</p>
                    <div className="flex gap-5">
                        <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/cookie" className="hover:text-white">Cookie</Link>
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
            className="flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80 transition-all hover:-translate-y-0.5 hover:border-white/50 hover:text-white"
        >
            {children}
        </a>
    );
}
