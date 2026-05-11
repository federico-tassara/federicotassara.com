import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { PostMetadata } from "@/src/lib/posts";

export function PostCard({ post, index = 0 }: { post: PostMetadata; index?: number }) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group anim-fade-up flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white p-7 transition-all hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_20px_50px_-20px_rgba(28,31,51,0.18)]"
            style={{ animationDelay: `${index * 50}ms` }}
        >
            <div className="flex items-center gap-3 text-xs text-muted">
                {post.category && (
                    <span className="rounded-full bg-surface-alt px-2.5 py-1 font-medium text-ink-soft">
                        {post.category}
                    </span>
                )}
                <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("it-IT", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </time>
            </div>
            <h2 className="mt-4 text-xl font-bold leading-snug text-ink group-hover:text-ink-soft">
                {post.title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-3">{post.excerpt}</p>
            <div className="mt-6 flex items-center justify-between text-sm">
                <span className="inline-flex items-center gap-1.5 text-muted">
                    <Clock className="size-3.5" />
                    {post.readingTime} min lettura
                </span>
                <span className="inline-flex items-center gap-1 font-medium text-ink">
                    Leggi
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
            </div>
        </Link>
    );
}
