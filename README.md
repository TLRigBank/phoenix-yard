# Phoenix Yard

Tap-the-hot-wall plant matcher for Phoenix homeowners.

A person taps the wall that cooks in the afternoon, answers four questions, keeps Gate / Pots / Gravel, and gets **three plants per strip** (Bone · Bloom · Floor). Not a catalog.

**Grok Build: start here → [`GROK.md`](GROK.md)**

| Path | What it is |
|---|---|
| `GROK.md` | Scope and face contract. |
| `docs/DECISION_TREE.md` | The only gates, weights, and slots. |
| `docs/COPY_MAP.md` | The only words on screen. |
| `docs/USER_STORIES.md` | Acceptance criteria. |
| `docs/BUILD_PLAN.md` | Phases. Phase 0 is in the repo. |
| `docs/API.md` | `match(brief)` response. |
| `docs/NOT_V1.md` | Explicit non-goals. |
| `data/` | Catalog v0.1.9 slim (543 cards). |
| `engine/match.js` | The matcher. |
| `prototype/index.html` | Interaction walk. Cards match the default fixture; they are not a second engine. |
| `tests/` | `node tests/run.js` |

## Product law

1. UI never filters the 543 rows. Only `match` does.
2. Results show **one strip** at a time, then one summary.
3. No scores, no R-codes, no “west heat” on the face. The tapped side is a label (`Right side · afternoon sun`).
4. Household gates can say no. Feeling chips are not v1.
5. Jumping cholla never sits on the gate, and the gate says why. Oleander and sago never sit on a chew or kids brief. On the default brief, turning chew on does not change the twelve plants; the screen still says they were already safe.

## Check

```
node tests/run.js
```

## Owner

TLRigBank — Living Spiral / Eden Weaver line of work. Phoenix, AZ first.
