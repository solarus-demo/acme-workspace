type Tone = "neutral" | "success" | "accent";

const tones: Record<Tone, { color: string; background: string }> = {
  neutral: { color: "var(--color-text-muted)", background: "var(--color-surface-muted)" },
  success: { color: "var(--color-success)", background: "var(--color-surface-muted)" },
  accent: { color: "var(--color-primary)", background: "var(--color-surface-muted)" },
};

/** A small status label. */
export function Badge({ tone = "neutral", children }: { tone?: Tone; children: string }) {
  return (
    <span
      style={{
        ...tones[tone],
        borderRadius: "var(--radius-full)",
        padding: "var(--space-1) var(--space-3)",
        fontSize: "var(--font-size-sm)",
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
}
