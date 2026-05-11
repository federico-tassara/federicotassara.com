import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

function buildHref(page: number, params?: Record<string, string | undefined>): string {
    const qs = new URLSearchParams();
    if (params) {
        for (const [k, v] of Object.entries(params)) {
            if (v) qs.set(k, v);
        }
    }
    if (page > 1) qs.set("page", String(page));
    const query = qs.toString();
    return query ? `/blog?${query}` : "/blog";
}

function getVisiblePages(current: number, total: number): (number | "ellipsis")[] {
    const pages: (number | "ellipsis")[] = [];
    const delta = 1;
    for (let i = 1; i <= total; i++) {
        if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
            pages.push(i);
        } else if (
            pages[pages.length - 1] !== "ellipsis" &&
            (i === current - delta - 1 || i === current + delta + 1)
        ) {
            pages.push("ellipsis");
        }
    }
    return pages;
}

export function BlogPagination({
    currentPage,
    totalPages,
    totalPosts,
    pageSize,
    queryParams,
}: {
    currentPage: number;
    totalPages: number;
    totalPosts: number;
    pageSize: number;
    queryParams?: Record<string, string | undefined>;
}) {
    if (totalPages <= 1) return null;
    const start = (currentPage - 1) * pageSize + 1;
    const end = Math.min(currentPage * pageSize, totalPosts);
    const visible = getVisiblePages(currentPage, totalPages);
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;

    const baseLink =
        "inline-flex h-10 min-w-10 items-center justify-center rounded-lg border border-ink/10 px-3 text-sm font-medium text-ink-soft transition-colors hover:border-ink/30 hover:text-ink";

    return (
        <nav aria-label="Paginazione blog" className="mt-14 flex flex-col items-center gap-4">
            <ul className="flex flex-wrap justify-center gap-2">
                <li>
                    {prevPage >= 1 ? (
                        <Link href={buildHref(prevPage, queryParams)} rel="prev" aria-label="Pagina precedente" className={baseLink}>
                            <ChevronLeft className="size-4" />
                        </Link>
                    ) : (
                        <span className={cn(baseLink, "pointer-events-none opacity-40")} aria-hidden>
                            <ChevronLeft className="size-4" />
                        </span>
                    )}
                </li>
                {visible.map((p, idx) =>
                    p === "ellipsis" ? (
                        <li key={`e-${idx}`}>
                            <span className={cn(baseLink, "border-transparent")}>…</span>
                        </li>
                    ) : (
                        <li key={p}>
                            {p === currentPage ? (
                                <span aria-current="page" className={cn(baseLink, "border-ink bg-ink text-white hover:text-white")}>
                                    {p}
                                </span>
                            ) : (
                                <Link href={buildHref(p, queryParams)} aria-label={`Vai alla pagina ${p}`} className={baseLink}>
                                    {p}
                                </Link>
                            )}
                        </li>
                    ),
                )}
                <li>
                    {nextPage <= totalPages ? (
                        <Link href={buildHref(nextPage, queryParams)} rel="next" aria-label="Pagina successiva" className={baseLink}>
                            <ChevronRight className="size-4" />
                        </Link>
                    ) : (
                        <span className={cn(baseLink, "pointer-events-none opacity-40")} aria-hidden>
                            <ChevronRight className="size-4" />
                        </span>
                    )}
                </li>
            </ul>
            <p className="text-xs text-muted">
                {start}–{end} di {totalPosts} articoli
            </p>
        </nav>
    );
}
