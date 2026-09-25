# GROK.md — build Phoenix Yard from this repo

You are building the **Phoenix Yard** digital experience. This file is the contract. If a request conflicts with this file on scope, this file wins unless the user explicitly changes scope.

Gates, scores, and slots live only in `docs/DECISION_TREE.md`. Words on screen live only in `docs/COPY_MAP.md`.

## The mistake this file exists to prevent

**The hot wall is orientation, not the project.**

Tap the afternoon wall so the house knows which side cooks. That writes `hot_side` and `place_label` only. It does **not** turn the wall strip on. It does **not** mean “this job is a west-heat bed.” A person can be planting pots on the patio, a gate, open gravel, or the hot wall. They say that next.

If you ship a walk whose first results are always “Afternoon wall,” you missed the spec.

## What you are building

A phone-wide web app:

1. **Orient.** Tap the wall that cooks in the afternoon. That side **is West**. Relabel the house North / South / East / West. Stop saying “right side.”
2. **Project.** Pots / One bed / Gate and path / Whole yard / Not sure.
3. **Which side** (pots, one bed, gate only). Same house, now compass-labeled. That writes `project_side` and binds the job to that bearing.
4. **Household.** Kids, chew, wildlife, care.
5. **Rooms / micro.** Whole-yard can still toggle sides. Cover and block wall per side.
6. **Results.** Titles like `West · Afternoon sun`, `North · Front`. One strip at a time.
2. **Project.** One screen: what is this project? Pots / One bed / Gate and path / Whole yard / Not sure. That writes `project_scale` and **default rooms**. The wall is on only when the scale needs it (one bed, whole yard, not sure).
3. **Household.** Four questions, one screen each: kids, chew, wildlife, care. One tap answers and advances.
4. **Rooms.** Toggle the four sides (sun, shade, front, back, plus left/right when they are shoulders), Gate, Pots, Gravel.
5. **Microclimate per side.** For each side that is on: Is there a block wall? Is there already shade — open / tree / eave / patio cover? That writes `block_wall` and `cover`. A tree on the afternoon-sun side is **not** quoted as a roasting wall.
6. **Results.** One strip at a time. Block wall is its own strip (`Afternoon sun · block wall`). Three others still works.
6. **Three others.** Every strip has `Three others for this strip`. The engine returns a new Bone / Bloom / Floor that still passes that room and does not reuse the three just shown. `Back to this strip’s first set` clears the exclude list for that strip only.
7. Chew toggle reruns the whole brief and names what left.

Live names come from `engine/match.js`. Do not filter 543 cards in the UI.

## Architecture

```
UI  →  match(brief)  →  strips that extras turned on
```

`hot_side` names which drawing side is **West**. The engine returns `bearings` so the UI can label North / South / East / West. West, East, South, and North are four different filters. Do not treat front/back as one “shoulder.”


## Brief

```json
{
  "hot_side": "front|left|right|back",
  "project_scale": "pots|bed|path|yard|unsure",
  "kids": false,
  "chew": false,
  "wildlife": true,
  "care": "Low",
  "extras": {
    "wall": false,
    "shade": false,
    "front": true,
    "back": true,
    "gate": false,
    "pots": true,
    "gravel": false
  },
  "block_wall": { "front": false, "left": false, "right": true, "back": false },
  "cover": { "front": "none", "left": "tree", "right": "none", "back": "eave" },
  "pots_side": "front",
  "gravel_side": null,
  "gate_side": "front",
```

| extra | Meaning | Climate |
|---|---|---|
| wall | Afternoon sun side (the tapped side) | sun: full + excellent heat, no afternoon-shade-pref |
| shade | Opposite side | shade: `afternoon_shade_pref` or sun `full_to_part` / `part` |
| front | Front bed | sun, shade, or shoulder depending on `hot_side` |
| back | Back bed | same |
| gate / pots / gravel | Site pieces | unchanged |

If front *is* the tapped side, `front` and `wall` are the same strip (do not quote it twice). If back is the opposite side, `back` and `shade` merge.

| project_scale | Default extras |
|---|---|
| pots | pots only |
| bed | wall + gravel |
| path | gate |
| yard | wall, shade, front, back, gate, pots, gravel |
| unsure | same as yard |


`exclude[strip]` is card_ids the user already saw on that strip this session. Reroll fills the strip from the remaining legal pool. Other strips unchanged. If fewer than three legal plants remain, return what is left plus empty-job sentences and `reroll_available: false`.

Missing required fields → `invalid_brief`. Required: `hot_side`, `kids`, `chew`, `wildlife`, `guilds`, `care`, `extras.wall|gate|pots|gravel`. `project_scale` and `exclude` may be omitted. If `exclude` is omitted, treat as empty. If every extra is false → `invalid_brief` field `extras`.

`toxic_veto = kids || chew`.

Water and care: `docs/DECISION_TREE.md`. Sun, shade, front, back, and gravel stay VL. Water L only in pots (any care) and at the gate on Weekend or Hobby.

Required extras booleans: `wall`, `gate`, `pots`, `gravel`. `shade`, `front`, `back` may be omitted (false). At least one room on.


## Hard gates

Owned by the decision tree. Never “pretty enough”:

- `native_class == invasive_risk` drops. Do not string-match “fountain grass.”
- `toxic_class` in `deadly`, `ingest` drops when `toxic_veto`, except `Asclepias linaria` and `Asclepias subulata` when `wildlife`. Blood flower still drops.
- Gate: no jumping, no puncture, no spine_hazard, no pedestrian_avoid.
- Landmark size and the four tree groups drop on this scale.
- Gate strip includes the jumping-cholla kept-off line when that strip is on.

## Slots

Not top-3 score. Fill Bone, Bloom, Floor. Lock genus inside the strip. Floor changes `plant_group` when it can. Gravel Bloom prefers Cloud. Empty seat → sentence.

`hot_side` does not change which plants win. `exclude` does: those ids lose that strip this reroll.

## Face language

Never print: R1, R3, R4, R6, VL, west-heat, chip_pack, short_why, scores, eligible_count, room_code.

Do print: display_name, Bone/Bloom/Floor, height, texture, up to four chips, why-line ≤ 140 chars, `Three others for this strip` when `reroll_available`.

## Phase order

0. Engine already matches a default yard (wall on). Keep those golden ids when extras.wall is true.
1. Rebuild the walk: orient → project → questions → rooms (wall optional) → live match. Delete hardcoded `CARDS` as the matcher source. Stub reroll in the UI only if `match` already honors `exclude`.
2. Chew diff, empty seats, card sheet, kept-off line, share list, three-others on every strip.
3. Planted checks, optional near-miss. No account.
4. Fixtures: pots-only, path-only, wall-off, reroll-wall.

## Do not build

Accounts, compass-auto wall, camera, AR, feeling chips, year wheel, nursery cart, catalog browse, chatbot, Tucson, XP, trees-on scale, client-side filtering.

R2 / R5 / R7 stay off unless the user reopens them. They are not required to fix orientation-vs-project.

## Done when

`node tests/run.js` passes, a pots-only brief returns only the pots strip, and a person can tap Three others and see a different legal trio without the wall turning back on.
