import type { MetadataRoute } from "next";
import { SITE_URL } from "@/src/lib/utils";

const AI_BOTS = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "CCBot",
    "Applebot-Extended",
    "Bytespider",
    "Meta-ExternalAgent",
    "Amazonbot",
    "DuckAssistBot",
    "Cohere-AI",
];

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/"],
            },
            ...AI_BOTS.map((ua) => ({
                userAgent: ua,
                allow: "/" as const,
                disallow: ["/api/"],
            })),
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}
