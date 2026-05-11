import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Federico Tassara — Sviluppatore Web, Mobile & Fractional CTO";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    background:
                        "linear-gradient(135deg, #ffffff 0%, #f7f7f9 100%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "72px 80px",
                    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                    color: "#1c1f33",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div
                        style={{
                            width: 14,
                            height: 14,
                            borderRadius: 999,
                            background: "#1c1f33",
                        }}
                    />
                    <div
                        style={{
                            fontSize: 22,
                            fontWeight: 600,
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                            color: "#5a607a",
                        }}
                    >
                        federicotassara.it
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 800,
                            lineHeight: 1.05,
                            letterSpacing: "-0.02em",
                            color: "#1c1f33",
                            display: "flex",
                        }}
                    >
                        Federico Tassara
                    </div>
                    <div
                        style={{
                            fontSize: 38,
                            fontWeight: 500,
                            lineHeight: 1.2,
                            color: "#2a2e4a",
                            maxWidth: 980,
                            display: "flex",
                        }}
                    >
                        Sviluppatore Full Stack & Fractional CTO. Trasformo idee in prodotti
                        digitali scalabili.
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: 32,
                        borderTop: "2px solid #e5e7eb",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            gap: 12,
                            flexWrap: "wrap",
                        }}
                    >
                        {["Web", "Mobile", "Backend", "Cloud", "AI", "Consulting"].map((t) => (
                            <div
                                key={t}
                                style={{
                                    fontSize: 20,
                                    fontWeight: 500,
                                    color: "#5a607a",
                                    background: "#ffffff",
                                    border: "1px solid #e5e7eb",
                                    borderRadius: 999,
                                    padding: "8px 18px",
                                    display: "flex",
                                }}
                            >
                                {t}
                            </div>
                        ))}
                    </div>
                    <div
                        style={{
                            fontSize: 22,
                            fontWeight: 600,
                            color: "#1c1f33",
                            display: "flex",
                        }}
                    >
                        React · Next.js · React Native · Node
                    </div>
                </div>
            </div>
        ),
        { ...size },
    );
}
