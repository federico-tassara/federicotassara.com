import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ServiceLink } from "@/src/lib/service-navigation";

export function ServiceCard({ service }: { service: ServiceLink; index?: number }) {
    return <Link href={service.href} className="service-card">
        <div className="service-card-heading"><h3>{service.title}</h3><ArrowUpRight size={19} aria-hidden="true" /></div>
        <p>{service.tagline}</p>
    </Link>;
}
