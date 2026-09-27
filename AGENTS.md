# Phoenix Yard agent instructions

Read `GROK.md` first.

Phoenix Yard. Plants that match the wall.

UI is a plan: street top, door on the front edge, fat beds, west is the only hot color. No triangle roof. Copy lives in `docs/COPY_MAP.md` and `docs/BRAND.md`.





Climate = side role from `hot_side`, then shifted by `cover`, then gated by `block_wall`. Do not quote a tree-shaded sun side as a roasting wall. Do not seat a tender plant at the base of a shade-side block wall.

`match(brief)` in `engine/match.js` is the only matcher. `brief.exclude` is how a strip gets three others. Do not shuffle in the UI.

Run `node tests/run.js` after every engine change.
