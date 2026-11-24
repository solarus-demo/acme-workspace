# Acme Workspace

A small SaaS app used to show Solarus: a workspace with its team, its billing and its settings.

## Design system

Everything visual comes from `src/design-system/`:

- **Tokens** (`tokens.css`): colours, spacing (4, 8, 12, 16, 24, 32), radius (6, 10, full) and type sizes (13, 15, 18, 24). Never hard-code a hex value or an off-scale size.
- **Components**: `Button` (variants `primary`, `secondary`, `danger`), `Card`, `Badge` (tones `neutral`, `success`, `accent`) and `Input`. Never rebuild one by hand: add a variant instead.

Import them from `src/design-system`.

## Usage rules

- Use `Button` for every explicit user action.
- Use `Card` for every boxed group of content.
- Use `Input` for every text field.

## Checks

```bash
npm run typecheck
npm run build
```
