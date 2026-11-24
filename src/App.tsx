import { useState } from "react";
import { Team } from "./pages/Team";
import { Billing } from "./pages/Billing";
import { Settings } from "./pages/Settings";
import { Button } from "./design-system";

type Page = "team" | "billing" | "settings";

export function App() {
  const [page, setPage] = useState<Page>("team");
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", color: "var(--color-text)", padding: "var(--space-8)", maxWidth: 880, margin: "0 auto" }}>
      <nav style={{ display: "flex", gap: "var(--space-2)", marginBottom: "var(--space-6)" }}>
        <Button variant="secondary" onClick={() => setPage("team")}>Team</Button>
        <Button variant="secondary" onClick={() => setPage("billing")}>Billing</Button>
        <Button variant="secondary" onClick={() => setPage("settings")}>Settings</Button>
      </nav>
      {page === "team" && <Team />}
      {page === "billing" && <Billing />}
      {page === "settings" && <Settings />}
    </div>
  );
}
