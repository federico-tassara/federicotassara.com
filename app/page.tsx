import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Gauge, Eye, Handshake, Lightbulb, Target } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { ServiceCard } from "@/src/components/ui/ServiceCard";
import { ClientsMarquee } from "@/src/components/ui/ClientsMarquee";
import { HeroAkintuWidget } from "@/src/components/akintu/HeroAkintuWidget";
import { SERVICES } from "@/src/lib/services";
import { CALENDLY_URL, SITE_URL } from "@/src/lib/utils";
import { getAllPosts } from "@/src/lib/posts";

export const metadata: Metadata = {
    title: {
        absolute: "Sviluppatore Web e Fractional CTO Italia | Federico Tassara",
    },
    description:
        "Sviluppatore Full Stack freelance in Italia. Sviluppo applicazioni web, app mobile, architetture scalabili e consulenza tecnica per startup e aziende.",
    alternates: { canonical: SITE_URL },
    openGraph: {
        title: "Sviluppatore Web e Fractional CTO Italia | Federico Tassara",
        description:
            "Sviluppo app mobile, siti web e piattaforme per startup e aziende italiane. Disponibile per progetti, consulenze e ruolo di CTO part-time.",
        url: SITE_URL,
        type: "website",
    },
};

const PILLARS = [
    { icon: Code2, title: "Qualità del codice", text: "Codice leggibile, testato e manutenibile nel tempo." },
    { icon: Gauge, title: "Performance e scalabilità", text: "Prodotti veloci che reggono crescita reale e picchi di traffico." },
    { icon: Eye, title: "User Experience", text: "Interfacce chiare, accessibili e pensate per chi le usa davvero." },
    { icon: Handshake, title: "Trasparenza", text: "Progressi, scelte tecniche e tempistiche sempre condivisi." },
    { icon: Lightbulb, title: "Innovazione", text: "Tecnologie moderne, integrate dove portano valore concreto." },
    { icon: Target, title: "Orientamento al risultato", text: "Focus su obiettivi di business, non su feature riempitive." },
];

export default function Home() {
    const latestPosts = getAllPosts().slice(0, 3);
    return <>
        <section className="home-hero site-container">
            <div>
                <h1>Trasformo idee in <mark>prodotti digitali</mark> scalabili.</h1>
                <p className="hero-description">Progetto e sviluppo applicazioni web e mobile performanti, scalabili e pronte per crescere. Per startup, aziende e prodotti digitali in evoluzione.</p>
                <div className="hero-actions"><Button href={CALENDLY_URL} external>Prenota una consulenza</Button><Link href="/servizi" className="text-sm">Scopri i servizi</Link></div>
                <div className="home-stats">{[["6+", "Anni di esperienza"], ["50+", "Progetti realizzati"], ["20+", "Startup e PMI supportate"]].map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
            </div>
            <figure className="hero-portrait"><Image src="/images/profile.jpeg" alt="Federico Tassara sulle montagne" fill sizes="(min-width: 900px) 430px, 88vw" priority /><figcaption>Federico Tassara<span>Full Stack Developer &amp; Fractional CTO</span></figcaption></figure>
        </section>
        <section className="home-clients" aria-label="Clienti e progetti"><p>Hanno scelto di lavorare con me</p><ClientsMarquee /></section>
        <section className="home-about site-container"><Image src="/images/profile.jpeg" alt="Federico Tassara" width={245} height={305} className="about-portrait" /><div><SectionTitle eyebrow="La mia visione" title="Costruire prodotti che durano." description="Credo nello sviluppo di prodotti digitali pensati per durare, non solo per essere rilasciati. Ogni progetto nasce con una base tecnica solida, è semplice da evolvere e supporta davvero gli obiettivi di business nel tempo." /><p className="mt-5 text-muted leading-relaxed">Non scrivo codice per riempire feature: costruisco prodotti digitali che funzionano, scalano e creano valore reale.</p></div></section>
        <section id="servizi" className="home-services site-container"><SectionTitle eyebrow="Servizi" title="Cosa posso costruire con te." description="Da una web app fino a un'intera architettura cloud: ti accompagno dalla strategia tecnica al rilascio in produzione." /><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{SERVICES.map(s => <ServiceCard key={s.slug} service={s} />)}</div></section>
        <section className="home-pillars site-container"><SectionTitle eyebrow="I pilastri del lavoro" title="Sei principi che guidano ogni progetto." /><div className="pillar-grid">{PILLARS.map(p => <article key={p.title}><h3>{p.title}</h3><p>{p.text}</p></article>)}</div></section>
        {latestPosts.length > 0 && <section className="home-journal site-container"><SectionTitle eyebrow="Ultime notizie" title="Dal blog." description="Articoli, riflessioni e guide pratiche su sviluppo, architettura e prodotto." align="center" /><div className="mt-8 grid gap-6 md:grid-cols-3">{latestPosts.map(post => <Link key={post.slug} href={`/blog/${post.slug}`} className="home-post"><time dateTime={post.date}>{new Date(post.date).toLocaleDateString("it-IT", {day:"numeric",month:"long",year:"numeric"})}</time><h3>{post.title}</h3><p>{post.excerpt}</p><span>Leggi <ArrowRight size={15} aria-hidden="true" /></span></Link>)}</div><div className="mt-8 text-center"><Button href="/blog">Vai al blog</Button></div></section>}
        <div className="site-container pb-16"><HeroAkintuWidget /></div>
        <section className="home-closing"><Container><h2>Hai un’idea? Parliamone,<br /> senza impegno.</h2><p>Una consulenza iniziale gratuita per capire se possiamo lavorare bene insieme e definire i prossimi passi.</p><div className="flex flex-wrap justify-center gap-3"><Button href={CALENDLY_URL} external className="bg-white text-ink hover:bg-white/90">Prendi appuntamento</Button><Button href="/contatti" variant="outline" className="border-white/40 text-white hover:border-white">Scrivimi</Button></div></Container></section>
    </>;
}
