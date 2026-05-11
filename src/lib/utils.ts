import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const SITE_URL = "https://federicotassara.com";
export const SITE_NAME = "Federico Tassara";
export const SITE_EMAIL = "info@federicotassara.com";
export const CALENDLY_URL = "https://calendly.com/federicotassara/";

export const ADDRESSES = [
    { city: "Loano", street: "Via Tito Minniti 20", province: "Savona" },
    { city: "Orbassano", street: "Via Strada Torino 43", province: "Torino" },
];

export const SOCIAL = {
    instagram: "https://www.instagram.com/federicotassara_/",
    youtube: "https://www.youtube.com/@federicotassara_dev",
    linkedin: "https://www.linkedin.com/in/federico-tassara/",
};
