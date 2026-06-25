export type Testimonial = {
    /** The testimonial text, ideally with a concrete outcome. */
    quote: string;
    /** Person's first name (or full name, if allowed). */
    name: string;
    /** Their role, e.g. "Founder". */
    role: string;
    /** Company or, if under NDA, an anonymised descriptor e.g. "SaaS B2B, Milano". */
    company: string;
    /** Optional project slug to link the testimonial to a case study. */
    project?: string;
};

/**
 * Real client testimonials. Keep this list HONEST — only add quotes you can
 * attribute and, ideally, verify (a LinkedIn recommendation, an email, a signed
 * reference). The <Testimonials /> component renders nothing while this array is
 * empty, so the section stays hidden until you have genuine social proof.
 *
 * Example shape (remove the comment and fill with a real quote):
 *
 * {
 *     quote: "In 10 settimane Federico ha consegnato l'MVP che ci ha permesso di chiudere il primo round.",
 *     name: "Marco",
 *     role: "Founder",
 *     company: "SaaS B2B, Milano",
 *     project: "lectum",
 * },
 */
export const TESTIMONIALS: Testimonial[] = [];
