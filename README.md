# Phoenix Yard

A person orients the house (which side cooks), chooses a project, then quotes **each house side with its own climate**: afternoon sun, afternoon shade, front, and back.

**Grok Build: start here → [`GROK.md`](GROK.md)**

| Path | What it is |
|---|---|
| `GROK.md` | Scope. Hot wall ≠ project. |
| `docs/DECISION_TREE.md` | Gates, weights, slots. |
| `docs/COPY_MAP.md` | Words on screen. |
| `docs/USER_STORIES.md` | Acceptance. |
| `docs/BUILD_PLAN.md` | Phases. |
| `docs/API.md` | `match(brief)` including `exclude` reroll. |
| `docs/NOT_V1.md` | Non-goals. |
| `data/` | Catalog v0.1.9 slim (543 cards). |
| `engine/match.js` | Matcher. |
| `prototype/index.html` | Walk. |
| `tests/` | `node tests/run.js` |

## Product law

1. `hot_side` names the afternoon side. It does not force a wall strip.
2. UI never filters the 543 rows. Only `match` does.
3. Match only rooms in `extras` that are true. Wall may be false.
4. Each strip can ask for three others via `exclude`.
5. No scores, no R-codes, no “west heat” on the face.
6. Jumping cholla never sits on the gate. Oleander and sago never sit on a chew or kids brief.

## Check

```
node tests/run.js
```

## Owner

TLRigBank — Living Spiral / Eden Weaver. Phoenix, AZ first.
