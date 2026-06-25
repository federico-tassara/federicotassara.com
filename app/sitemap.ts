import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { SERVICES } from "@/src/lib/services";
import { PROJECTS } from "@/src/lib/projects";
import { getAllPosts } from "@/src/lib/posts";
import { SITE_URL } from "@/src/lib/utils";

// Last-resort fallback if a source file can't be stat'd at build time.
const FALLBACK_DATE = new Date("2026-05-22T00:00:00.000Z");

/**
 * Real last-modified date for a route, derived from the mtime of the source
 * file(s) that produce it. This keeps <lastmod> honest: it only changes when
 * the underlying content/code actually changes, instead of being `new Date()`
 * (today) on every build.
 */
function fileModified(...relativePaths: string[]): Date {
    let latest = 0;
    for (const rel of relativePaths) {
        try {
            const mtime = fs.statSync(path.join(process.cwd(), rel)).mtimeMs;
            if (mtime > latest) latest = mtime;
        } catch {
            // ignore missing files
        }
    }
    return latest > 0 ? new Date(latest) : FALLBACK_DATE;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const staticEntries: MetadataRoute.Sitemap = [
        { url: `${SITE_URL}/`, lastModified: fileModified("app/page.tsx"), changeFrequency: "monthly", priority: 1 },
        { url: `${SITE_URL}/chi-sono`, lastModified: fileModified("app/chi-sono/page.tsx"), changeFrequency: "yearly", priority: 0.8 },
        { url: `${SITE_URL}/servizi`, lastModified: fileModified("app/servizi/page.tsx"), changeFrequency: "monthly", priority: 0.9 },
        { url: `${SITE_URL}/progetti`, lastModified: fileModified("app/progetti/page.tsx"), changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/blog`, lastModified: fileModified("app/blog/page.tsx"), changeFrequency: "weekly", priority: 0.9 },
        { url: `${SITE_URL}/contatti`, lastModified: fileModified("app/contatti/page.tsx"), changeFrequency: "yearly", priority: 0.7 },
        { url: `${SITE_URL}/fractional-cto`, lastModified: fileModified("app/fractional-cto/page.tsx"), changeFrequency: "monthly", priority: 0.95 },
        { url: `${SITE_URL}/sviluppatore-react-native-italia`, lastModified: fileModified("app/sviluppatore-react-native-italia/page.tsx"), changeFrequency: "monthly", priority: 0.95 },
        { url: `${SITE_URL}/sviluppo-app-saas`, lastModified: fileModified("app/sviluppo-app-saas/page.tsx"), changeFrequency: "monthly", priority: 0.95 },
    ];

    const serviceEntries: MetadataRoute.Sitemap = SERVICES.map((s) => ({
        url: `${SITE_URL}/servizi/${s.slug}`,
        lastModified: fileModified("src/lib/services.ts", "app/servizi/[slug]/page.tsx"),
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    const projectEntries: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
        url: `${SITE_URL}/progetti/${p.slug}`,
        lastModified: fileModified("src/lib/projects.ts", "app/progetti/[slug]/page.tsx"),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
        url: `${SITE_URL}/blog/${p.slug}`,
        lastModified: p.updatedAt
            ? new Date(p.updatedAt)
            : p.date
                ? new Date(p.date)
                : FALLBACK_DATE,
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [...staticEntries, ...serviceEntries, ...projectEntries, ...blogEntries];
}
