import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/src/lib/services";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
    const Icon = service.icon;
    return (
        <Link
            href={`/servizi/${service.slug}`}
            className="group anim-fade-up relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_20px_50px_-20px_rgba(28,31,51,0.18)]"
            style={{ animationDelay: `${index * 60}ms` }}
        >
            <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-surface-alt text-ink transition-colors group-hover:bg-ink group-hover:text-white">
                    <Icon className="size-5" />
                </span>
                <ArrowUpRight className="size-5 text-muted opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-ink">{service.shortTitle}</h3>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{service.tagline}</p>
        </Link>
    );
}
