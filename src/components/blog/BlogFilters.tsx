import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { PROJECTS } from "@/src/lib/projects";

export function BlogFilters({ active }: { active?: string }) {
    const items: { label: string; value?: string }[] = [
        { label: "Tutti" },
        ...PROJECTS.map((p) => ({ label: p.title, value: p.slug })),
    ];

    return (
        <nav aria-label="Filtra articoli per progetto" className="flex flex-wrap gap-2">
            {items.map((it) => {
                const isActive = (it.value ?? "") === (active ?? "");
                const href = it.value ? `/blog?project=${it.value}` : "/blog";
                return (
                    <Link
                        key={it.label}
                        href={href}
                        className={cn(
                            "inline-flex h-9 items-center rounded-full border px-4 text-sm font-medium transition-colors",
                            isActive
                                ? "border-ink bg-ink text-white"
                                : "border-ink/10 bg-white text-ink-soft hover:border-ink/30 hover:text-ink",
                        )}
                    >
                        {it.label}
                    </Link>
                );
            })}
        </nav>
    );
}
