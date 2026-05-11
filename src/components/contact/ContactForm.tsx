"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { TurnstileWidget } from "./TurnstileWidget";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm({ siteKey }: { siteKey: string }) {
    if (!siteKey) {
        return (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-7 sm:p-9">
                <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-700" />
                    <div>
                        <h2 className="text-lg font-bold text-amber-900">
                            Form temporaneamente non disponibile
                        </h2>
                        <p className="mt-2 text-sm text-amber-800">
                            Il modulo di contatto è in manutenzione. Nel frattempo puoi scrivermi
                            direttamente a <a href="mailto:info@federicotassara.com" className="font-semibold underline">info@federicotassara.com</a> o prenotare una call dal pulsante qui a fianco.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
    return <ContactFormInner siteKey={siteKey} />;
}

function ContactFormInner({ siteKey }: { siteKey: string }) {
    const [state, setState] = useState<FormState>("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const [token, setToken] = useState("");
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((f) => ({ ...f, [field]: e.target.value }));

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setErrorMsg("");
        if (!token) {
            setErrorMsg("Completa la verifica anti-spam prima di inviare.");
            setState("error");
            return;
        }
        setState("submitting");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, turnstileToken: token }),
            });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error ?? "Errore durante l'invio.");
            }
            setState("success");
            setForm({ firstName: "", lastName: "", email: "", message: "" });
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : "C'è stato un errore nel tentativo di inviare il modulo. Per favore riprova.";
            setErrorMsg(msg);
            setState("error");
        }
    }

    if (state === "success") {
        return (
            <div className="rounded-2xl border border-ink/8 bg-surface-alt p-10 text-center">
                <CheckCircle2 className="mx-auto size-12 text-ink" />
                <h2 className="mt-5 text-2xl font-bold text-ink">Messaggio inviato.</h2>
                <p className="mt-3 text-muted">
                    Grazie per avermi scritto. Ti rispondo nel più breve tempo possibile.
                </p>
                <button
                    type="button"
                    onClick={() => setState("idle")}
                    className="mt-6 text-sm font-medium text-ink underline underline-offset-4 hover:text-ink-soft"
                >
                    Invia un altro messaggio
                </button>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-ink/8 bg-white p-7 sm:p-9"
            noValidate
        >
            <div className="grid gap-5 sm:grid-cols-2">
                <Field
                    id="firstName"
                    label="Nome"
                    placeholder="Inserisci il tuo nome"
                    value={form.firstName}
                    onChange={handleChange("firstName")}
                    required
                />
                <Field
                    id="lastName"
                    label="Cognome"
                    placeholder="Inserisci il tuo cognome"
                    value={form.lastName}
                    onChange={handleChange("lastName")}
                    required
                />
            </div>
            <div className="mt-5">
                <Field
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="Inserisci il tuo indirizzo email"
                    value={form.email}
                    onChange={handleChange("email")}
                    required
                />
            </div>
            <div className="mt-5">
                <Field
                    id="message"
                    label="Messaggio"
                    placeholder="Scrivi il tuo messaggio qui"
                    value={form.message}
                    onChange={handleChange("message")}
                    required
                    multiline
                />
            </div>

            <div className="mt-6">
                <TurnstileWidget siteKey={siteKey} onToken={setToken} />
            </div>

            {state === "error" && errorMsg && (
                <div className="mt-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                    <AlertCircle className="mt-0.5 size-4 shrink-0" />
                    <span>{errorMsg}</span>
                </div>
            )}

            <div className="mt-7 flex items-center justify-between gap-4">
                <p className="text-xs text-muted">
                    Inviando il modulo accetti la{" "}
                    <a href="/privacy-policy" className="underline underline-offset-2 hover:text-ink">
                        Privacy Policy
                    </a>
                    .
                </p>
                <Button type="submit" disabled={state === "submitting"}>
                    {state === "submitting" ? "Invio…" : "Invia"}
                    {state !== "submitting" && <Send className="size-4" />}
                </Button>
            </div>
        </form>
    );
}

function Field({
    id,
    label,
    placeholder,
    value,
    onChange,
    type = "text",
    required,
    multiline,
}: {
    id: string;
    label: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    type?: string;
    required?: boolean;
    multiline?: boolean;
}) {
    const baseClasses =
        "w-full rounded-lg border border-ink/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/10";
    return (
        <div>
            <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
                {label}
                {required && <span className="ml-1 text-red-500">*</span>}
            </label>
            {multiline ? (
                <textarea
                    id={id}
                    name={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    rows={5}
                    className={baseClasses}
                />
            ) : (
                <input
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={baseClasses}
                />
            )}
        </div>
    );
}
