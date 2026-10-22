import Image from "next/image";
import { PROJECT_MEDIA } from "@/src/lib/project-media";

export function ProjectVisual({ slug, featured = false }: { slug: string; featured?: boolean }) {
    const media = PROJECT_MEDIA[slug];
    if (!media) return null;
    return <figure className={`project-visual visual-${media.style}${featured ? " visual-featured" : ""}`}>
        <div className="project-image-frame">
            <Image src={media.src} alt={media.alt} fill sizes={featured ? "(min-width: 900px) 650px, 90vw" : "(min-width: 900px) 540px, 90vw"} />
        </div>
        {media.caption && <figcaption>{media.caption}</figcaption>}
    </figure>;
}
