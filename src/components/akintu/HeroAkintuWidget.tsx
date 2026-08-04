"use client";

import { AkintuEmbed } from "@akintu/widget/react";

const AKINTU_CLIENT_KEY =
    "pk_live_0da6fa1d71b1a9ba77485ea79d0cbe1c8606e63fd5a15669";

export function HeroAkintuWidget() {
    return <AkintuEmbed apiKey={AKINTU_CLIENT_KEY} className="w-full" />;
}
