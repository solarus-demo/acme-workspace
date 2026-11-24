import { Card } from "../design-system";
import { InviteDialog } from "../features/team/InviteDialog";

const members = [
  { name: "Maya Laurent", role: "Owner", pending: false },
  { name: "Sam Okafor", role: "Editor", pending: false },
  { name: "Lea Martin", role: "Editor", pending: true },
  { name: "Noah Petit", role: "Viewer", pending: true },
];

export function Team() {
  return (
    <div style={{ display: "grid", gap: 18 }}>
      <InviteDialog />
      <Card title="Members">
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "var(--space-3)" }}>
          {members.map((m) => (
            <li key={m.name} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
              <span style={{ width: 28, height: 28, borderRadius: "50%", background: "#dad8ce" }} />
              <span style={{ fontSize: "var(--font-size-md)" }}>{m.name}</span>
              <span style={{ color: "#8a887f", fontSize: 13 }}>{m.role}</span>
              {m.pending ? (
                <span style={{ marginLeft: "auto", background: "#fff4e8", color: "#b8470f", borderRadius: 3, padding: "2px 6px", fontSize: 12 }}>
                  Pending
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
