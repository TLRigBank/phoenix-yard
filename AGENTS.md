# Phoenix Yard agent instructions

Read `GROK.md` first.

Afternoon-sun tap = West. Relabel the house N/S/E/W. Bind pots / one bed / gate to `project_side`. North is a frost climate. South is a long-sun climate. Do not use “shoulder” as a real filter.

Climate = side role from `hot_side`, then shifted by `cover`, then gated by `block_wall`. Do not quote a tree-shaded sun side as a roasting wall. Do not seat a tender plant at the base of a shade-side block wall.

`match(brief)` in `engine/match.js` is the only matcher. `brief.exclude` is how a strip gets three others. Do not shuffle in the UI.

Run `node tests/run.js` after every engine change.
