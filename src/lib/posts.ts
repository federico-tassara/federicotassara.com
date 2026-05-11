import fs from "fs";
import path from "path";
import { cache } from "react";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type PostFaqItem = { q: string; a: string };

export interface PostMetadata {
    title: string;
    date: string;
    author: string;
    excerpt: string;
    tags: string[];
    category?: string;
    project?: string;
    faq?: PostFaqItem[];
    slug: string;
    year: string;
    month: string;
    readingTime: number;
}

export interface Post extends PostMetadata {
    content: string;
}

export interface PaginatedPosts {
    posts: PostMetadata[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
}

function calculateReadingTime(content: string): number {
    const words = content.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 200));
}

export const getAllPosts = cache((): PostMetadata[] => {
    if (!fs.existsSync(postsDirectory)) return [];
    const posts: PostMetadata[] = [];

    const years = fs.readdirSync(postsDirectory);
    for (const year of years) {
        if (!/^\d{4}$/.test(year)) continue;
        const yearPath = path.join(postsDirectory, year);
        const months = fs.readdirSync(yearPath);
        for (const month of months) {
            const monthPath = path.join(yearPath, month);
            if (!fs.statSync(monthPath).isDirectory()) continue;
            const files = fs.readdirSync(monthPath);
            for (const filename of files) {
                if (!filename.endsWith(".md")) continue;
                const filePath = path.join(monthPath, filename);
                const fileContents = fs.readFileSync(filePath, "utf8");
                const { data, content } = matter(fileContents);
                const slug = filename.replace(/\.md$/, "");
                posts.push({
                    title: data.title ?? slug,
                    date: data.date ?? "",
                    author: data.author ?? "Federico Tassara",
                    excerpt: data.excerpt ?? "",
                    tags: Array.isArray(data.tags) ? data.tags : [],
                    category: data.category,
                    project: data.project,
                    faq: Array.isArray(data.faq) ? (data.faq as PostFaqItem[]) : undefined,
                    slug,
                    year,
                    month,
                    readingTime: calculateReadingTime(content),
                });
            }
        }
    }

    return posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
});

export function getPaginatedPosts(
    page = 1,
    pageSize = 9,
    filter?: { project?: string; category?: string },
): PaginatedPosts {
    let all = getAllPosts();
    if (filter?.project) all = all.filter((p) => p.project === filter.project);
    if (filter?.category) all = all.filter((p) => p.category === filter.category);
    const total = all.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const start = (page - 1) * pageSize;
    return {
        posts: all.slice(start, start + pageSize),
        total,
        page,
        pageSize,
        totalPages,
    };
}

export function getPostsByProject(projectSlug: string, limit?: number): PostMetadata[] {
    const all = getAllPosts().filter((p) => p.project === projectSlug);
    return limit ? all.slice(0, limit) : all;
}

export function getProjectsWithPosts(): string[] {
    const set = new Set<string>();
    for (const p of getAllPosts()) {
        if (p.project) set.add(p.project);
    }
    return Array.from(set);
}

export const getPostBySlug = cache(async (slug: string): Promise<Post | null> => {
    const all = getAllPosts();
    const meta = all.find((p) => p.slug === slug);
    if (!meta) return null;
    const fullPath = path.join(postsDirectory, meta.year, meta.month, `${slug}.md`);
    try {
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { content } = matter(fileContents);
        return { ...meta, content };
    } catch {
        return null;
    }
});

export function getRelatedPosts(slug: string, tags: string[] = [], limit = 3): PostMetadata[] {
    const all = getAllPosts();
    const others = all.filter((p) => p.slug !== slug);
    if (!tags.length) return others.slice(0, limit);
    const scored = others
        .map((p) => {
            const overlap = (p.tags ?? []).filter((t) => tags.includes(t)).length;
            return { post: p, score: overlap };
        })
        .filter((x) => x.score > 0)
        .sort((a, b) => {
            if (b.score !== a.score) return b.score - a.score;
            return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
        });

    const related = scored.slice(0, limit).map((x) => x.post);
    if (related.length < limit) {
        const fallback = others
            .filter((p) => !related.some((r) => r.slug === p.slug))
            .slice(0, limit - related.length);
        return [...related, ...fallback];
    }
    return related;
}

export async function processMarkdown(content: string): Promise<string> {
    const result = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeHighlight)
        .use(rehypeStringify)
        .process(content);
    return result.toString();
}
