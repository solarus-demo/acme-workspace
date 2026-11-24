import type { ReactNode } from "react";

/** A surface with the standard border, radius and padding. */
export function Card({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <section
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-md)",
        padding: "var(--space-6)",
      }}
    >
      {title ? <h2 style={{ fontSize: "var(--font-size-lg)", fontWeight: 500, margin: "0 0 var(--space-4)" }}>{title}</h2> : null}
      {children}
    </section>
  );
}
