"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const cases = [
    {
        id: "freedhome",
        name: "Freedhome",
        logo: "/images/clients/freedhome.png",
        sector: "Affitti e gestione immobiliare",
        title: "Dalla richiesta di affitto alla verifica creditizia",
        description: "Per Freedhome ho sviluppato un’automazione per la verifica dell’affidabilità creditizia dei potenziali coinquilini, dopo l’invio della richiesta di affitto a un proprietario.",
        detail: "Il progetto riguarda la gestione delle candidature e la verifica dei richiedenti all’interno del processo di locazione.",
        scope: ["Richieste di affitto", "Verifica dell’affidabilità creditizia"],
    },
    {
        id: "smart-building",
        name: "Smart Building SRL",
        logo: "/images/clients/smart-building.png",
        sector: "Cantieri e amministrazione",
        title: "Automazione dei flussi amministrativi di cantiere",
        description: "Per Smart Building SRL ho lavorato all’automazione dei flussi legati ai cantieri: fatture in entrata e in uscita, gestione dei fornitori e prima nota.",
        detail: "L’intervento collega le attività di cantiere alla gestione amministrativa, con attenzione ai passaggi tra documenti, fornitori e registrazioni contabili.",
        scope: ["Fatture attive e passive", "Gestione fornitori", "Prima nota"],
    },
];

export function CaseStudies() {
    const track = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);

    useEffect(() => {
        const root = track.current;
        if (!root) return;
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
            }
        }, { root, threshold: 0.6 });
        for (const slide of root.children) observer.observe(slide);
        return () => observer.disconnect();
    }, []);

    function goTo(index: number) {
        const root = track.current;
        const slide = root?.children[index] as HTMLElement | undefined;
        if (!root || !slide) return;
        root.scrollTo({
            left: slide.offsetLeft,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        });
    }

    return <section className={styles.caseCarousel} aria-label="Progetti di automazione" aria-roledescription="carosello">
        <div className={styles.caseNavigation}>
            <div className={styles.caseTabs} aria-label="Scegli il progetto">
                {cases.map((item, index) => <button key={item.id} type="button" aria-pressed={active === index} aria-controls="case-track" onClick={() => goTo(index)}>{item.name}</button>)}
            </div>
            <div className={styles.caseArrows}>
                <button type="button" aria-label="Progetto precedente" aria-controls="case-track" disabled={active === 0} onClick={() => goTo(active - 1)}><ArrowLeft size={18} aria-hidden="true" /></button>
                <button type="button" aria-label="Progetto successivo" aria-controls="case-track" disabled={active === cases.length - 1} onClick={() => goTo(active + 1)}><ArrowRight size={18} aria-hidden="true" /></button>
            </div>
        </div>
        <div ref={track} id="case-track" className={styles.caseTrack} tabIndex={0} aria-label="Scorri i progetti" onKeyDown={(event) => {
            if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                event.preventDefault();
                goTo(Math.max(0, Math.min(cases.length - 1, active + (event.key === "ArrowRight" ? 1 : -1))));
            }
        }}>
            {cases.map((item, index) => <article key={item.id} data-index={index} className={styles.caseSlide} aria-roledescription="slide" aria-label={`${index + 1} di ${cases.length}: ${item.name}`}>
                <div>
                    <div className={styles.caseLogoFrame}><Image src={item.logo} alt={`Logo ${item.name}`} fill sizes="210px" className={styles.carouselLogo} /></div>
                    <p className={styles.eyebrow}>{item.sector}</p>
                    <h2>{item.title}</h2>
                </div>
                <div className={styles.caseDescription}><p>{item.description}</p><p>{item.detail}</p><ul className={styles.caseScope}>{item.scope.map(text => <li key={text}>{text}</li>)}</ul></div>
            </article>)}
        </div>
        <div className={styles.caseBottom}><p aria-live="polite" aria-atomic="true">{active + 1} di {cases.length} · {cases[active].name}</p><a href="#parliamone" className={styles.textLink}>Richiedi un primo confronto <ArrowRight size={16} aria-hidden="true" /></a></div>
    </section>;
}
