import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectVisual } from "@/src/components/ui/ProjectVisual";

const HIGHLIGHTS = [
    {slug:"mose", title:"MOSE", category:"Mobile · Infrastrutture", heading:"Il software lavora. Anche sotto il livello del mare.", description:"Nei cassoni e nelle gallerie del MOSE non c’è rete. L’app accompagna le squadre nella manutenzione dei tiranti, salva foto e interventi sul tablet e sincronizza tutto al ritorno in copertura.", role:"Sviluppo full-stack · App, backend e dashboard"},
    {slug:"sinfea", title:"Sinfea", category:"Piattaforma web · Sanità", heading:"Un percorso chiaro, dal prodotto al primo pilota.", description:"Affianco il founder nelle decisioni tecniche e nello sviluppo di una piattaforma per i centri sanitari privati. Processi operativi, architettura e verifiche concrete prima del pilota.", role:"Fractional CTO · Leadership tecnica e sviluppo"},
];

export function HomeProjects() {
    return <section className="home-work site-container" aria-labelledby="selected-work-title">
        <div className="work-heading"><h2 id="selected-work-title">Software, nel mondo reale.</h2><Link href="/progetti">Tutti i progetti <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
        {HIGHLIGHTS.map(project => <article key={project.slug} className={`work-feature work-${project.slug}`}>
            <Link href={`/progetti/${project.slug}`} className="work-image-link" aria-label={`Scopri il software ${project.title}`}><ProjectVisual slug={project.slug} featured /></Link>
            <div className="work-copy"><h3>{project.title}</h3><p className="work-category">{project.category}</p><h4>{project.heading}</h4><p>{project.description}</p><p className="work-role">{project.role}</p><Link href={`/progetti/${project.slug}`} className="work-link">Scopri {project.title}<ArrowUpRight size={20} aria-hidden="true" /></Link></div>
        </article>)}
    </section>;
}
