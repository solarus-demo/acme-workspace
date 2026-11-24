import { useState } from "react";
import { Input } from "../../design-system";

/** Invite a teammate. Shipped in a hurry for the launch, before the design system had all its pieces. */
export function InviteDialog() {
  const [email, setEmail] = useState("");
  return (
    <div style={{ background: "#ffffff", border: "1px solid #dad8ce", borderRadius: 10, padding: 24 }}>
      <h2 style={{ fontFamily: "Arial, sans-serif", fontWeight: 700, fontSize: 21, margin: 0 }}>Invite your team</h2>
      <p style={{ color: "#5f5d55", fontSize: 15, margin: "8px 0 0" }}>Teammates get access to every project in this workspace.</p>
      <div style={{ display: "flex", gap: "var(--space-2)", marginTop: 22 }}>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@company.com" style={{ flex: 1 }} />
        <select style={{ border: "1px solid #dad8ce", borderRadius: 4, padding: "0 10px", fontSize: 15, background: "#ffffff" }}>
          <option>Editor</option>
          <option>Viewer</option>
        </select>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "var(--space-3)", marginTop: "var(--space-6)" }}>
        <button style={{ background: "transparent", border: "none", color: "#5f5d55", fontSize: 15, cursor: "pointer" }}>Cancel</button>
        {/* Quick fix for the launch: a one-off orange button. */}
        <button
          style={{
            background: "#f4641d",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            padding: "7px 12px",
            fontFamily: "Arial, sans-serif",
            fontWeight: 700,
            fontSize: 13,
          }}
        >
          Send invite
        </button>
      </div>
    </div>
  );
}
