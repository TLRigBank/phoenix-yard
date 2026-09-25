# Build plan

## Phases

| Phase | Goal | Exit |
|---|---|---|
| 0 | Spec lock and `engine/match.js` | `node tests/run.js` passes. Default card ids are the fixture, not “any three legal plants.” |
| 1 | Driveway walk on live match | Orient → project scale → questions → rooms (wall optional) → first **on** strip. Pots-only never shows Afternoon wall. Three others calls `exclude`. |

| 2 | Trust | Chew diff uses the copy-map sentences. Empty seats. Card sheet with re-gated substitutes. Gate shows the jumping-cholla line. Share list. |
| 3 | Memory, still no account | Planted checks, one greyed near-miss. |
| 4 | More briefs | Kids only, hobby, wildlife off, each extra off. Face names below are already fixed. |

Phase 0 is in the repo. Do not retune weights to chase the old prototype sketch (Flame Honeysuckle, Black Dalea, Claret Cup leaving a pot). The default yard is Red Yucca, Parry’s Penstemon, Native Hedgehog, then the gate, pots, and gravel ids in the fixture.

## Work IDs

- **W0.1–W0.7** Done. Catalog load, gates, v1 scores, slots, genus lock, Cloud pin, `match()`, golden fixtures.
- **W1.1** App shell: home (orientation) → project → ask → rooms → results. Delete hardcoded `CARDS` as source of picks.
- **W1.2** Call `match` with `extras.wall` and `exclude`. Render the first on strip, not always the wall.
- **W1.7** Three others: accumulate `exclude[strip]`, keep a first-set snapshot, undo on that strip only.
- **W1.3** One-tap answers. Back from the pieces screen returns to the last question, not question 1.
- **W1.4** `That's the yard` is a summary, not a loop.
- **W1.5** Save the brief in localStorage. No account.
- **W1.6** 44px targets and 16px body before any later phase.
- **W2.1** Chew control reruns the whole match and uses the copy-map diff. On the default brief the picks do not change; the banner still runs.
- **W2.2** Empty-seat sentences. No catalog fallback.
- **W2.3** Card sheet: botanical, height, toxic who, spine, setback if > 0, support, up to 4 substitutes from the response (already gated).
- **W2.4** Kept-off line on the gate. Session note when kids or chew.
- **W2.5** Plain list by strip for sharing.
- **W3.1–W3.3** Planted checks, one ghost, local save already shipped in W1.5.
- **W4.1** Done for the known bad titles (nursery head counts, color-only names, Ocotillo Bareroot, Call for Varieties, duplicate Desert Rose / Golden Saguaro / Madagascar Palm). Oleander titles were already real names. Do not reopen them.
- **W4.2** Contrast pass in afternoon glare. Match-failed sentence.
- **W4.3** More than the two golden briefs. Toy gates already live in `tests/run.js`.

## Risks

- A second filter in the UI. Only `match` decides.
- An 18-card feed. Results render one strip, then the summary.
- Treating “already safe” as a bug and stuffing oleander into the default strip so the diff is visible. The fixture says the diff is empty. The banner is the feature.
- String-matching fountain grass or oleander instead of `native_class` / `toxic_class`.
- Using `hot_side` as west. It is a label.
- Scope creep. `docs/NOT_V1.md`.
