import { Badge, Button, Card } from "../design-system";

const invoices = [
  { id: "INV-0412", date: "Nov 1, 2026", amount: "$499.00" },
  { id: "INV-0371", date: "Oct 1, 2026", amount: "$499.00" },
  { id: "INV-0338", date: "Sep 1, 2026", amount: "$99.00" },
];

export function Billing() {
  return (
    <div style={{ display: "grid", gap: "var(--space-4)" }}>
      <Card title="Plan">
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
          <div>
            <div style={{ fontSize: 26, fontWeight: 700 }}>Team · $499 / month</div>
            <p style={{ color: "#6e6c63", margin: "4px 0 0", fontSize: 14 }}>Renews on December 1. Up to 10 projects.</p>
          </div>
          <Badge tone="success">Active</Badge>
          {/* The sales team wanted this one to stand out. */}
          <button style={{ marginLeft: "auto", background: "#f26a2e", color: "#fff", border: "none", borderRadius: 6, padding: "9px 14px", fontSize: 14 }}>
            Upgrade plan
          </button>
        </div>
      </Card>
      <Card title="Invoices">
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "var(--font-size-md)" }}>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} style={{ borderTop: "1px solid var(--color-border)" }}>
                <td style={{ padding: "10px 0" }}>{inv.id}</td>
                <td style={{ color: "var(--color-text-muted)" }}>{inv.date}</td>
                <td>{inv.amount}</td>
                <td style={{ textAlign: "right" }}>
                  <button style={{ background: "transparent", border: "1px solid #dad8ce", borderRadius: 6, padding: "4px 10px", fontSize: 13, cursor: "pointer" }}>
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <Button variant="secondary" style={{ justifySelf: "start" }}>Update payment method</Button>
    </div>
  );
}
