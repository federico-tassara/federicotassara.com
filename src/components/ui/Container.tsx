import { cn } from "@/src/lib/utils";

export function Container({
    children,
    className,
    size = "default",
}: {
    children: React.ReactNode;
    className?: string;
    size?: "sm" | "default" | "lg";
}) {
    const sizes = {
        sm: "max-w-3xl",
        default: "max-w-[1060px]",
        lg: "max-w-[1120px]",
    };
    return (
        <div className={cn("site-container mx-auto w-[86%]", sizes[size], className)}>
            {children}
        </div>
    );
}
