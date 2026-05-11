import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    {
        variants: {
            variant: {
                primary:
                    "bg-ink text-white hover:bg-ink-soft hover:-translate-y-0.5 shadow-sm",
                outline:
                    "border border-ink/15 text-ink hover:border-ink/40 hover:-translate-y-0.5",
                ghost: "text-ink hover:bg-ink/5",
                link: "text-ink underline underline-offset-4 hover:text-ink-soft",
            },
            size: {
                sm: "h-9 px-4 text-sm",
                md: "h-11 px-6 text-sm",
                lg: "h-13 px-8 text-base",
            },
        },
        defaultVariants: { variant: "primary", size: "md" },
    },
);

type ButtonProps = VariantProps<typeof buttonVariants> & {
    href?: string;
    external?: boolean;
    className?: string;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    onClick?: () => void;
};

export function Button({
    href,
    external,
    className,
    children,
    variant,
    size,
    type = "button",
    disabled,
    onClick,
}: ButtonProps) {
    const classes = cn(buttonVariants({ variant, size }), className);

    if (href) {
        if (external || href.startsWith("http") || href.startsWith("mailto:")) {
            return (
                <a
                    href={href}
                    className={classes}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                >
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={classes} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
}
