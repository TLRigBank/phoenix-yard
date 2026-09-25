# Phoenix Yard agent instructions

Read `GROK.md` first.

The hot wall is orientation. Do not require a wall strip. Do not open results on Afternoon wall unless `extras.wall` is true.

`match(brief)` in `engine/match.js` is the only matcher. `brief.exclude` is how a strip gets three others. Do not shuffle in the UI.

Run `node tests/run.js` after every engine change.
