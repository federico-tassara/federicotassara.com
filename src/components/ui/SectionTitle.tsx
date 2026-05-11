import { cn } from "@/src/lib/utils";

type SectionTitleProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
    className?: string;
    as?: "h1" | "h2";
};

export function SectionTitle({
    eyebrow,
    title,
    description,
    align = "left",
    className,
    as = "h2",
}: SectionTitleProps) {
    const Heading = as;
    return (
        <div
            className={cn(
                "max-w-3xl",
                align === "center" && "mx-auto text-center",
                className,
            )}
        >
            {eyebrow && (
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    {eyebrow}
                </span>
            )}
            <Heading className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-[2.6rem] md:leading-[1.1]">
                {title}
            </Heading>
            {description && (
                <p className="mt-4 text-base text-muted sm:text-lg sm:leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
}
