"use client";

import { useEffect, useRef } from "react";

declare global {
    interface Window {
        turnstile?: {
            render: (
                el: HTMLElement,
                opts: {
                    sitekey: string;
                    callback: (token: string) => void;
                    "error-callback"?: () => void;
                    "expired-callback"?: () => void;
                    theme?: "light" | "dark" | "auto";
                },
            ) => string;
            reset: (widgetId?: string) => void;
            remove: (widgetId?: string) => void;
        };
    }
}

export function TurnstileWidget({
    siteKey,
    onToken,
}: {
    siteKey: string;
    onToken: (token: string) => void;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);

    useEffect(() => {
        const scriptId = "cf-turnstile-script";
        const render = () => {
            if (!containerRef.current || !window.turnstile) return;
            if (widgetIdRef.current) return;
            widgetIdRef.current = window.turnstile.render(containerRef.current, {
                sitekey: siteKey,
                callback: (token) => onToken(token),
                "expired-callback": () => onToken(""),
                "error-callback": () => onToken(""),
                theme: "light",
            });
        };

        if (window.turnstile) {
            render();
        } else if (!document.getElementById(scriptId)) {
            const s = document.createElement("script");
            s.id = scriptId;
            s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
            s.async = true;
            s.defer = true;
            s.onload = render;
            document.head.appendChild(s);
        } else {
            const i = setInterval(() => {
                if (window.turnstile) {
                    clearInterval(i);
                    render();
                }
            }, 100);
            return () => clearInterval(i);
        }

        return () => {
            if (widgetIdRef.current && window.turnstile) {
                try { window.turnstile.remove(widgetIdRef.current); } catch {}
                widgetIdRef.current = null;
            }
        };
    }, [siteKey, onToken]);

    return <div ref={containerRef} />;
}
