import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/src/lib/services";

export function ServiceCard({ service }: { service: Service; index?: number }) {
    return <Link href={`/servizi/${service.slug}`} className="service-card">
        <div className="service-card-heading"><h3>{service.shortTitle}</h3><ArrowUpRight size={19} aria-hidden="true" /></div>
        <p>{service.tagline}</p>
    </Link>;
}
