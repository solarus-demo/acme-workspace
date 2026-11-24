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
      <div style={{ background: "#ffffff", border: "1px solid #c72f1d", borderRadius: 12, padding: 22 }}>
        <h2 style={{ fontSize: 18, margin: "0 0 6px", color: "#c72f1d" }}>Danger zone</h2>
        <p style={{ margin: "0 0 14px", color: "#5f5d55" }}>Deleting the workspace removes every project. It cannot be undone.</p>
        <button style={{ background: "#c72f1d", color: "#fff", border: "none", borderRadius: 999, padding: "8px 16px", fontSize: 15 }}>
          Delete workspace
        </button>
      </div>
    </div>
  );
}
