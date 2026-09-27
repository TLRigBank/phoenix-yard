# Phoenix Yard agent instructions

Read `GROK.md` first.

The UI is the house map. Street top, door on front, `front_bearing` first. Pieces stamp onto walls. Quotes sit under the same plan. Do not ship a stack of forms that hide the house.




Climate = side role from `hot_side`, then shifted by `cover`, then gated by `block_wall`. Do not quote a tree-shaded sun side as a roasting wall. Do not seat a tender plant at the base of a shade-side block wall.

`match(brief)` in `engine/match.js` is the only matcher. `brief.exclude` is how a strip gets three others. Do not shuffle in the UI.

Run `node tests/run.js` after every engine change.
