import type { MetadataRoute } from "next";
import { SERVICES } from "@/src/lib/services";
import { PROJECTS } from "@/src/lib/projects";
import { getAllPosts } from "@/src/lib/posts";
import { SITE_URL } from "@/src/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    const staticEntries: MetadataRoute.Sitemap = [
        { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
        { url: `${SITE_URL}/chi-sono`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
        { url: `${SITE_URL}/servizi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${SITE_URL}/progetti`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
        { url: `${SITE_URL}/contatti`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
        { url: `${SITE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
        { url: `${SITE_URL}/cookie`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    ];

    const serviceEntries: MetadataRoute.Sitemap = SERVICES.map((s) => ({
        url: `${SITE_URL}/servizi/${s.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    const projectEntries: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
        url: `${SITE_URL}/progetti/${p.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
        url: `${SITE_URL}/blog/${p.slug}`,
        lastModified: p.date ? new Date(p.date) : now,
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [...staticEntries, ...serviceEntries, ...projectEntries, ...blogEntries];
}
