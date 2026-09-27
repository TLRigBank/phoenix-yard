# GROK.md — build Phoenix Yard from this repo

You are building the **Phoenix Yard** digital experience. This file is the contract. If a request conflicts with this file on scope, this file wins unless the user explicitly changes scope.

Gates, scores, and slots live only in `docs/DECISION_TREE.md`. Words on screen live only in `docs/COPY_MAP.md`.

## The mistake this file exists to prevent

**The house map is the product.** Orientation is “which way does the front face,” not “tap the west wall.” The plan stays on screen from aim through plants. If the first results are a plant list with no house, you missed the spec.

**The front door is not the project.** Aiming the house does not turn on a west bed.

## What you are building

A phone-wide web app named **Phoenix Yard**. Line: **Plants that match the wall.** One persistent **plan** of the lot: street at the top, door notch on the front of a flat house rectangle, four fat beds against the building. No cartoon roof. West is the only warm wall.

1. **Aim.** Compact North / South / East / West under the plan. Writes `front_bearing`. West bed warms.
2. **Stamp.** Household icons stay under the street. Tap a bed, stamp Bed / Pots / Gate / Gravel / Block / Shade as marks on that band.
3. **Quote.** Plan stays up. Segment the selected wall by piece. Three cards under the plan. `Three others for this wall.`


1. **Aim.** “Which way does the front of your house face?” North / South / East / West. Writes `front_bearing`. West wall warms itself. Walls label N/S/E/W.
2. **Stamp.** Tap a wall, then stamp Bed / Pots / Gate / Gravel / Block / Shade onto it. Marks draw on the building. `project_scale` may seed the first stamp; it does not lock other walls.
3. **Household.** Kids, chew, wildlife, time — four short answers. Prefer a bar under the map. Full screens allowed if the house stays visible.
4. **Quote.** Map stays on the top half. Tapped wall is selected. Three cards for that wall’s active piece sit under the plan. Title like `West · pots`. Tap another wall to change the quote. `Three others` rerolls that strip only.

Do not replace the map with a room checklist. Do not send people to a full-screen card list that hides the house.

Live names come from `engine/match.js`. Do not filter 543 cards in the UI.

## Architecture

```
UI map  →  match(brief)  →  strips pinned to walls
```

The map is the customizer. The cards are the quote. `front_bearing` aims the house. `surfaces[side]` lists pieces on that wall. West / East / South / North stay four filters.



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
  "surfaces": {
    "front": ["pots", "gate"],
    "left": ["gate"],
    "right": ["bed", "block_wall"],
    "back": ["pots", "gravel"]
  },
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
