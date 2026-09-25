# GROK.md — build Phoenix Yard from this repo

You are building the **Phoenix Yard** digital experience. This file is the contract for scope and face language. If a request conflicts with this file on scope, this file wins unless the user explicitly changes scope.

Gates, scores, and slots live only in `docs/DECISION_TREE.md`. Words on screen live only in `docs/COPY_MAP.md`. If a point value and this file disagree, the decision tree wins. Do not invent a second scoring table.

## What you are building

A phone-wide web app:

1. House with four sides. User taps the wall that cooks in the afternoon.
2. Four questions, one screen each. One tap answers and advances. Back still works.
3. Same house: keep or drop Gate, Pots, Gravel. The wall always stays.
4. Results: **three cards for one strip**, with the side they tapped still visible (`Right side · afternoon sun`). Button: `Next — the gate` (or the pots, open gravel). The last strip’s button is `That's the yard`, which opens one summary of every strip. It does not wrap.
5. Persistent control: “A dog or cat chews leaves.” Flipping it reruns match on the whole brief and **names what left**, including when the change is on a strip they are not looking at.
6. The gate strip always says why jumping cholla is gone, even though that plant is never seated.

Prototype of the walk (visual only, cards copied from the default fixture): `prototype/index.html`. Live names come from `engine/match.js`, not from the prototype.

## Architecture

```
UI  →  match(brief)  →  strips
```

- Catalog: `data/cards_v019_part1.json` + `part2.json`, concatenated inside the engine. The UI does not load 543 cards to filter them.
- `match(brief, catalog)` in `engine/match.js` is the only matcher. `POST /match` is optional and must return the same JSON.
- `brief.guilds` is accepted and ignored in v1.
- `hot_side` is a **label**, not a compass and not a filter. The person already pointed at the wall that cooks. Every strip echoes `place_label`. Do not treat right as west.

## Brief the UI sends

```json
{
  "hot_side": "front|left|right|back",
  "kids": false,
  "chew": false,
  "wildlife": true,
  "care": "Low",
  "extras": { "gate": true, "pots": true, "gravel": true },
  "guilds": false
}
```

The questions force a choice (nothing is pre-committed except wildlife, which starts on Yes). Engine defaults if a field is missing are not allowed: missing fields are `invalid_brief`.

Mapped rooms:

| UI | Engine room | Always? |
|---|---|---|
| Afternoon wall | R1 | yes |
| Gate | R6 | extras.gate |
| Pots | R3 | extras.pots |
| Gravel | R4 | extras.gravel |
| North fence R2, frost R5, structure R7 | — | **off in v1** |

Derived: `toxic_veto = kids || chew`.

Water and care: one table, in `docs/DECISION_TREE.md`. Short version: water `M` never; water `L` only in pots on Low, and in pots or the gate on Weekend or Hobby; the wall and the gravel stay `VL`. Moderate maintenance is allowed at every care level. High maintenance only on Hobby.

## Hard gates

Owned by the decision tree. The ones that must never be “pretty enough”:

- `native_class == invasive_risk` drops. Do not string-match “fountain grass” — Coral Fountain Grass is *Russelia* and stays. Purple Fountain Grass is the invasive.
- `toxic_class` in `deadly`, `ingest` drops when `toxic_veto`, except `Asclepias linaria` and `Asclepias subulata` when `wildlife` is true. Blood flower (`Asclepias currasavica`, catalog spelling) still drops. A kept milkweed card must show the caution in `docs/COPY_MAP.md`. It is still toxic.
- Gate: no `jumping`, no `puncture`, no `spine_hazard`, no `pedestrian_avoid`. On this catalog every puncture card also has a pedestrian flag; the rule is still “no puncture on the gate,” so a future card cannot slip through.
- Landmark size and the four tree groups drop on this scale (one bed + pots).
- The gate strip includes the jumping-cholla kept-off line whenever a jumping card passed the global gates.

## Slots

Not top-3 score. Fill Bone, then Bloom, then Floor, using the seat tables in the decision tree. Lock genus inside the strip. Floor must change `plant_group` when a legal plant exists. Gravel Bloom prefers `texture_body == Cloud` when any Cloud plant is legal. Empty seat → sentence, not a catalog.

`hot_side` does not change which plants win.

## Face language

Never print: R1, R3, R4, R6, VL, west-heat, chip_pack, short_why, scores, eligible_count, room_code.

Do print: display_name, Bone/Bloom/Floor, height, texture word, up to four chips from the copy map (warnings first; do not print “Takes afternoon heat” off the wall), why-line ≤ 140 chars.

If the same `card_id` appeared on an earlier strip: stamp the copy-map same-as line.

Substitutes on the card sheet are the card’s `substitute_ids` re-run through the same gates, capped at 4. Never print a substitute that the room would refuse.

## Chew toggle

Rerun `match` with `chew` flipped. Diff `card_id`s. Copy is in `docs/COPY_MAP.md`.

On the default brief, pets-on does **not** change the twelve picks. The banner is still required: “This strip was already safe to chew. Oleander and sago stay off the whole list.” Spines do not leave a strip when chew flips. Only the gate refuses spines, and it always does.

## Phase order

0. **Done in repo.** Decision tree has the v1 weights (the workbook is not in this repo; do not go hunt it and do not add a second table). `node tests/run.js` locks the default card ids.
1. Wire the prototype screens to `match`. Delete the hardcoded `CARDS` list. Keep the walk: one-tap answers, side label, last strip opens the summary, extras sit under the house, brief saved locally.
2. Chew diff, empty seats, card sheet, kept-off line, share list.
3. Planted checks on the house, one greyed near-miss, still no account.
4. More fixture briefs (kids only, hobby, wildlife off, each extra off). Access is not deferred: 44px targets and 16px body type are part of phase 1.

## Do not build

Accounts, compass-auto wall, camera, AR, feeling chips, year wheel, water bill, nursery cart, 543-plant browse, chatbot, Tucson, XP/leaderboards, R2/R5/R7, trees-on scale, client-side filtering, printing `short_why`.

See `docs/NOT_V1.md`.

## Done when

`node tests/run.js` passes, and a person with an afternoon wall and a dog finishes on one summary screen and can say why jumping cholla is gone. The UI never says “R1”.
