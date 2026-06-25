export type Testimonial = {
    /** The testimonial text, ideally with a concrete outcome. */
    quote: string;
    /** Person's name. */
    name: string;
    /** Their role, e.g. "Founder". Optional. */
    role?: string;
    /** Company or, if under NDA, an anonymised descriptor e.g. "SaaS B2B, Milano". Optional. */
    company?: string;
    /** Optional project slug to link the testimonial to a case study. */
    project?: string;
};

/**
 * Real client testimonials. Keep this list HONEST — only add quotes the client
 * has approved. The <Testimonials /> component renders nothing while this array
 * is empty, so the section stays hidden until there is genuine social proof.
 *
 * The three below were drafted and then approved by each (real) client before
 * publishing (approval obtained 2026-06-25).
 */
export const TESTIMONIALS: Testimonial[] = [
    {
        quote:
            "Avevamo bisogno di digitalizzare la manutenzione dei tiranti del MOSE in gallerie dove non c'è rete. Federico ha consegnato un'app offline-first solida, che funziona davvero sul campo e sincronizza senza perdere un dato. Affidabile e concreto dall'inizio alla fine.",
        name: "Gerardo Dello Russo",
        company: "SmartBuilding Srl",
        project: "mose",
    },
    {
        quote:
            "Con Oraloco partivamo da un'idea e da zero codice. Federico l'ha trasformata in una piattaforma editoriale veloce e ben indicizzata, più l'app companion. Capace di parlare sia di tecnica che di prodotto: esattamente il profilo che serviva.",
        name: "Lorenzo Maggiolini",
        project: "oraloco",
    },
    {
        quote:
            "Federico ha portato Lectum dall'MVP al rilascio in tempi realistici, senza promesse gonfiate. Comunicazione chiara, consegne rispettate e qualità tecnica che si vede nell'app.",
        name: "Alice Presumanti",
        project: "lectum",
    },
];
