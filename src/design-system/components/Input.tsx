import type { InputHTMLAttributes } from "react";

/** The only text field of the product. */
export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      style={{
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-md)",
        padding: "var(--space-2) var(--space-3)",
        fontSize: "var(--font-size-md)",
        background: "var(--color-surface)",
        color: "var(--color-text)",
        ...props.style,
      }}
    />
  );
}
