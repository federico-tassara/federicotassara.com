"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { SERVICES } from "@/src/lib/services";
import { CALENDLY_URL } from "@/src/lib/utils";
import { cn } from "@/src/lib/utils";

const NAV = [
    { label: "Home", href: "/" },
    { label: "Chi sono", href: "/chi-sono" },
    { label: "Servizi", href: "/servizi", hasDropdown: true },
    { label: "Blog", href: "/blog" },
    { label: "Progetti", href: "/progetti" },
    { label: "Contatti", href: "/contatti" },
];

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <header
            className={cn(
                "fixed inset-x-0 top-0 z-50 transition-all duration-300",
                scrolled
                    ? "border-b border-ink/5 bg-white/85 backdrop-blur-md"
                    : "bg-white/0",
            )}
        >
            <Container className="flex h-16 items-center justify-between sm:h-18">
                <Link
                    href="/"
                    className="text-base font-bold tracking-tight text-ink sm:text-lg"
                    aria-label="Federico Tassara — home"
                >
                    Federico Tassara
                </Link>

                <nav className="hidden items-center gap-1 md:flex">
                    {NAV.map((item) =>
                        item.hasDropdown ? (
                            <div key={item.href} className="group relative">
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                                >
                                    {item.label}
                                    <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                                </Link>
                                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 focus-within:visible focus-within:opacity-100">
                                    <div className="w-72 overflow-hidden rounded-xl border border-ink/8 bg-white shadow-xl">
                                        <ul className="p-2">
                                            {SERVICES.map((s) => (
                                                <li key={s.slug}>
                                                    <Link
                                                        href={`/servizi/${s.slug}`}
                                                        className="block rounded-lg px-3 py-2.5 text-sm text-ink-soft transition-colors hover:bg-surface-alt hover:text-ink"
                                                    >
                                                        {s.shortTitle}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="border-t border-ink/5 p-2">
                                            <Link
                                                href="/fractional-cto"
                                                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface-alt"
                                            >
                                                Fractional CTO
                                            </Link>
                                            <Link
                                                href="/sviluppatore-react-native-italia"
                                                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface-alt"
                                            >
                                                Sviluppatore React Native
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="rounded-md px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                            >
                                {item.label}
                            </Link>
                        ),
                    )}
                </nav>

                <div className="hidden md:block">
                    <Button href={CALENDLY_URL} external size="sm">
                        Prenota consulenza
                    </Button>
                </div>

                <button
                    type="button"
                    onClick={() => setMobileOpen((o) => !o)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink md:hidden"
                    aria-label="Apri menu"
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                </button>
            </Container>

            {mobileOpen && (
                <div className="md:hidden">
                    <div className="border-t border-ink/5 bg-white">
                        <Container className="py-4">
                            <ul className="flex flex-col gap-1">
                                {NAV.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="block rounded-md px-3 py-2.5 text-base font-medium text-ink"
                                        >
                                            {item.label}
                                        </Link>
                                        {item.hasDropdown && (
                                            <ul className="ml-3 mt-1 border-l border-ink/10 pl-3">
                                                {SERVICES.map((s) => (
                                                    <li key={s.slug}>
                                                        <Link
                                                            href={`/servizi/${s.slug}`}
                                                            onClick={() => setMobileOpen(false)}
                                                            className="block rounded-md px-3 py-2 text-sm text-muted"
                                                        >
                                                            {s.shortTitle}
                                                        </Link>
                                                    </li>
                                                ))}
                                                <li>
                                                    <Link
                                                        href="/fractional-cto"
                                                        onClick={() => setMobileOpen(false)}
                                                        className="block rounded-md px-3 py-2 text-sm font-medium text-ink"
                                                    >
                                                        Fractional CTO
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/sviluppatore-react-native-italia"
                                                        onClick={() => setMobileOpen(false)}
                                                        className="block rounded-md px-3 py-2 text-sm font-medium text-ink"
                                                    >
                                                        Sviluppatore React Native
                                                    </Link>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4">
                                <Button
                                    href={CALENDLY_URL}
                                    external
                                    className="w-full justify-center"
                                >
                                    Prenota consulenza
                                </Button>
                            </div>
                        </Container>
                    </div>
                </div>
            )}
        </header>
    );
}
