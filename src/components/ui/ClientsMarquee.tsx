import Image from "next/image";
import { CLIENTS } from "@/src/lib/clients";

export function ClientsMarquee() {
    if (CLIENTS.length === 0) return null;
    const items = [...CLIENTS, ...CLIENTS];

    return (
        <div
            className="group/marquee relative w-full overflow-hidden"
            style={{
                maskImage:
                    "linear-gradient(to right, transparent 0, black 80px, black calc(100% - 80px), transparent 100%)",
                WebkitMaskImage:
                    "linear-gradient(to right, transparent 0, black 80px, black calc(100% - 80px), transparent 100%)",
            }}
        >
            <div className="marquee-track flex w-max items-center gap-12 py-2 sm:gap-16">
                {items.map((client, i) => {
                    const content = client.image ? (
                        <Image
                            src={client.image}
                            alt={client.name}
                            width={140}
                            height={36}
                            className="h-9 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
                        />
                    ) : (
                        <span className="whitespace-nowrap text-xl font-bold tracking-tight text-muted/70 transition-colors hover:text-ink">
                            {client.name}
                        </span>
                    );
                    return client.href ? (
                        <a
                            key={`${client.name}-${i}`}
                            href={client.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0"
                        >
                            {content}
                        </a>
                    ) : (
                        <span key={`${client.name}-${i}`} className="shrink-0">
                            {content}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}
