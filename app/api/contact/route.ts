import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
    firstName?: string;
    lastName?: string;
    email?: string;
    message?: string;
    turnstileToken?: string;
};

async function verifyTurnstile(token: string, ip: string | null): Promise<boolean> {
    const secret = process.env.TURNSTILE_SECRET_KEY;
    if (!secret) return false;

    const body = new URLSearchParams();
    body.append("secret", secret);
    body.append("response", token);
    if (ip) body.append("remoteip", ip);

    try {
        const res = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            { method: "POST", body },
        );
        if (!res.ok) return false;
        const data = (await res.json()) as { success: boolean };
        return data.success === true;
    } catch {
        return false;
    }
}

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
    let payload: Payload;
    try {
        payload = (await request.json()) as Payload;
    } catch {
        return NextResponse.json({ error: "JSON non valido." }, { status: 400 });
    }

    const firstName = (payload.firstName ?? "").trim();
    const lastName = (payload.lastName ?? "").trim();
    const email = (payload.email ?? "").trim();
    const message = (payload.message ?? "").trim();
    const turnstileToken = payload.turnstileToken ?? "";

    if (!firstName || !lastName || !email || !message) {
        return NextResponse.json(
            { error: "Tutti i campi sono obbligatori." },
            { status: 400 },
        );
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid) {
        return NextResponse.json({ error: "Email non valida." }, { status: 400 });
    }

    if (!turnstileToken) {
        return NextResponse.json(
            { error: "Verifica anti-spam mancante." },
            { status: 400 },
        );
    }

    const ip =
        request.headers.get("cf-connecting-ip") ??
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
        null;

    const turnstileOk = await verifyTurnstile(turnstileToken, ip);
    if (!turnstileOk) {
        return NextResponse.json(
            { error: "Verifica anti-spam fallita. Riprova." },
            { status: 400 },
        );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM ?? "noreply@federicotassara.it";
    const to = process.env.RESEND_TO ?? "info@federicotassara.com";

    if (!apiKey) {
        console.warn("[contact] RESEND_API_KEY mancante — messaggio non inviato.");
        return NextResponse.json(
            { error: "Servizio email non configurato." },
            { status: 503 },
        );
    }

    const resend = new Resend(apiKey);

    try {
        const { error } = await resend.emails.send({
            from,
            to,
            replyTo: email,
            subject: `Nuovo messaggio dal sito — ${firstName} ${lastName}`,
            html: `
                <div style="font-family: Arial, sans-serif; color:#1c1f33; line-height:1.6;">
                    <h2 style="margin:0 0 12px;">Nuovo contatto dal sito</h2>
                    <p><strong>Da:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)} &lt;${escapeHtml(email)}&gt;</p>
                    <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
                    <p style="white-space:pre-wrap;">${escapeHtml(message)}</p>
                </div>
            `,
            text: `Da: ${firstName} ${lastName} <${email}>\n\n${message}`,
        });

        if (error) {
            console.error("[contact] resend error", error);
            return NextResponse.json(
                { error: "Errore durante l'invio. Riprova più tardi." },
                { status: 502 },
            );
        }

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("[contact] unexpected", err);
        return NextResponse.json(
            { error: "C'è stato un errore inatteso. Riprova." },
            { status: 500 },
        );
    }
}
