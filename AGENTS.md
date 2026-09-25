# Phoenix Yard agent instructions

Read `GROK.md` first.

The tap names afternoon sun. Opposite wall = shade climate. Front and back use sun, shade, or shoulder depending on the tap. Do not quote every side with the hot-wall filter.

`match(brief)` in `engine/match.js` is the only matcher. `brief.exclude` is how a strip gets three others. Do not shuffle in the UI.

Run `node tests/run.js` after every engine change.
