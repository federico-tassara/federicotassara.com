import OGImage from "./opengraph-image";

export const runtime = "nodejs";
export const alt = "Federico Tassara — Sviluppatore Web, Mobile & Fractional CTO";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
    return OGImage();
}
