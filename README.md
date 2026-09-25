# Phoenix Yard

Tap-the-hot-wall plant matcher for Phoenix homeowners.

A person taps the wall that cooks in the afternoon, answers four questions, keeps Gate / Pots / Gravel, and gets **three plants per strip** (Bone · Bloom · Floor). Not a catalog.

**Grok Build: start here → [`GROK.md`](GROK.md)**

| Path | What it is |
|---|---|
| `GROK.md` | Build contract. Read first. Do not invent scope. |
| `docs/USER_STORIES.md` | Acceptance criteria (US-00–US-52, US-90) |
| `docs/BUILD_PLAN.md` | Phases 0–4 and work IDs |
| `docs/API.md` | `POST /match` brief ↔ strips |
| `docs/COPY_MAP.md` | Engine enums → yard words |
| `docs/DECISION_TREE.md` | Gates, rooms, slots, score |
| `docs/NOT_V1.md` | Explicit non-goals |
| `data/` | Catalog v0.1.9 slim (543 cards) |
| `prototype/index.html` | Interaction walk (hard-coded cards) |
| `engine/` | Matcher lives here in Phase 0 |
| `tests/fixtures/` | Briefs the engine must honor |

## Product law

1. UI never filters the 543 rows. Only `/match` does.
2. Results show **one strip** at a time.
3. No scores, no R-codes, no “west heat” on the face.
4. Household gates can say no. Feeling chips are not v1.
5. Jumping cholla never sits on the gate. Oleander/sago never sit on a chew/kids brief.

## Catalog

- Schema: plant cards v0.1.9 (`toxic_class`, `spine_class`, `texture_body`, `substitute_ids`, …)
- Source files: `data/cards_v019_part1.json` + `data/cards_v019_part2.json`
- Loader: concatenate arrays. Keep `match_confidence` high only (already filtered).

## Owner

TLRigBank — Living Spiral / Eden Weaver line of work. Phoenix, AZ first.
