import Image from "next/image";
import { CLIENTS } from "@/src/lib/clients";

// Static row: each logo appears once, with optical alignment for its source asset.
export function ClientsMarquee() {
    return <div className="client-logos">{CLIENTS.map((client, index) => {
        const content = <Image src={client.image} alt={client.name} width={150} height={48} className="client-image" unoptimized />;
        const className = `client-logo client-${index}`;
        return client.href ? <a key={client.name} href={client.href} target="_blank" rel="noopener noreferrer" className={className} aria-label={`${client.name} (nuova scheda)`}>{content}</a>
            : <span key={client.name} className={className}>{content}</span>;
    })}</div>;
}
