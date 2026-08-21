import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://federicotassara.com";
export const SITE_NAME = "Federico Tassara";
export const SITE_EMAIL = "info@federicotassara.com";
export const CALENDLY_URL = "https://calendly.com/federicotassara/";

export function normalizeAttributionSource(
    value: string | undefined,
    fallback = "website",
): string {
    const source = (value ?? "").trim().slice(0, 120);
    return /^[a-zA-Z0-9_./:-]+$/.test(source) ? source : fallback;
}

export function getCalendlyUrl(content: string) {
    const params = new URLSearchParams({
        utm_source: "federicotassara.com",
        utm_medium: "website",
        utm_campaign: "fractional_cto",
        utm_content: content,
    });

    return `${CALENDLY_URL}?${params.toString()}`;
}

export const ADDRESSES = [
    { city: "Loano", street: "Via Tito Minniti 20", province: "Savona" },
    { city: "Orbassano", street: "Via Strada Torino 43", province: "Torino" },
];

export const SOCIAL = {
    instagram: "https://www.instagram.com/federicotassara_/",
    youtube: "https://www.youtube.com/@federicotassara_dev",
    linkedin: "https://www.linkedin.com/in/federico-tassara/",
};
