import type { ButtonHTMLAttributes, CSSProperties } from "react";

type Variant = "primary" | "secondary" | "danger";

const styles: Record<Variant, CSSProperties> = {
  primary: { background: "var(--color-primary)", color: "var(--color-surface)", border: "1px solid var(--color-primary)" },
  secondary: { background: "var(--color-surface)", color: "var(--color-text)", border: "1px solid var(--color-border)" },
  danger: { background: "var(--color-surface)", color: "var(--color-danger)", border: "1px solid var(--color-danger)" },
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

/** The only button of the product. Use `variant` instead of restyling it. */
export function Button({ variant = "primary", style, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      style={{
        ...styles[variant],
        padding: "var(--space-2) var(--space-4)",
        borderRadius: "var(--radius-full)",
        fontSize: "var(--font-size-md)",
        fontWeight: 500,
        cursor: "pointer",
        ...style,
      }}
    />
  );
}
