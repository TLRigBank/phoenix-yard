# engine/

Phase 0 lives here.

Suggested files (create in W0.1–W0.7):

- `load_catalog.js` or `.py` — concat data parts
- `brief.js` — map UI brief → rooms + flags
- `gates.js` — Stage 1–2
- `score.js` — Stage 3
- `slots.js` — Stage 4
- `copy.js` — docs/COPY_MAP.md
- `match.js` — public `match(brief) → strips`
- `server.js` — optional HTTP wrapper for POST /match

Guilds stay behind `brief.guilds === true`.
