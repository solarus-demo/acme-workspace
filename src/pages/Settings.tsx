import { useState } from "react";
import { Button, Card } from "../design-system";

export function Settings() {
  const [name, setName] = useState("Acme");
  return (
    <div style={{ display: "grid", gap: "var(--space-4)" }}>
      <Card title="Workspace">
        <label style={{ display: "grid", gap: "var(--space-2)", fontSize: "var(--font-size-md)" }}>
          Workspace name
          {/* Rebuilt by hand when the field needed a wider padding. */}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ border: "1px solid #dad8ce", borderRadius: 10, padding: "8px 12px", fontSize: 15 }}
          />
        </label>
        <Button style={{ marginTop: "var(--space-4)" }}>Save changes</Button>
      </Card>
      <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-danger)", borderRadius: 12, padding: 22 }}>
        <h2 style={{ fontSize: "var(--font-size-lg)", margin: "0 0 6px", color: "var(--color-danger)" }}>Danger zone</h2>
        <p style={{ margin: "0 0 14px", color: "var(--color-text-muted)" }}>Deleting the workspace removes every project. It cannot be undone.</p>
        <button style={{ background: "var(--color-danger)", color: "var(--color-surface)", border: "none", borderRadius: "var(--radius-full)", padding: "var(--space-2) var(--space-4)", fontSize: "var(--font-size-md)" }}>
          Delete workspace
        </button>
      </div>
    </div>
  );
}
