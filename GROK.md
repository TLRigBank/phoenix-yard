# GROK.md — build Phoenix Yard from this repo

You are building the **Phoenix Yard** digital experience. This file is the contract. If a request conflicts with this file, this file wins unless the user explicitly changes scope.

## What you are building

A phone-wide web app:

1. House with four sides. User taps the wall that cooks in the afternoon.
2. Four questions, one screen each: kids, chewing pets, wildlife, care time.
3. Same house: keep or drop Gate, Pots, Gravel.
4. Results: **three cards for one strip**. Button: `Next — the gate` (or pots, gravel).
5. Persistent control: “A dog or cat chews leaves.” Flipping it reruns match and **names what left**.

Prototype of the walk (visual only): `prototype/index.html`.

## Architecture

```
UI  →  POST /match (or in-process same JSON)  →  engine on data/cards
```

- Catalog: `data/cards_v019_part1.json` + `part2.json` (concat).
- Rules: `docs/DECISION_TREE.md`.
- Words on screen: `docs/COPY_MAP.md` only.
- Stories: `docs/USER_STORIES.md`.
- Order of work: `docs/BUILD_PLAN.md`.

Do **not** re-parse the original nursery Excel. Do **not** filter 543 cards in the client.

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

Defaults: `hot_side` user-picked (prototype starts at `right`), kids no, chew no, wildlife yes, care Low, extras all on, `guilds` false in Phase 1.

Mapped rooms:

| UI | Engine room | Always? |
|---|---|---|
| Afternoon wall | R1 | yes after hot tap |
| Gate | R6 | extras.gate |
| Pots | R3 | extras.pots |
| Gravel | R4 | extras.gravel |
| North fence R2, frost R5, structure R7 | — | **off in v1** |

Derived: `toxic_veto = kids || chew`.

Care:

- Low → hide `maintenance_level=high`, hide water M; L only in pots if extras.pots (oasis).
- Weekend → allow L in pots/gate; still hide high care and M.
- Hobby → allow high care; M still off unless a later story.

## Hard gates (never “pretty enough”)

- `native_class == invasive_risk` → drop (Fountain Grass).
- `toxic_class` in `deadly`, `ingest` when `toxic_veto` → drop, except native milkweed (`Asclepias linaria`, `Asclepias subulata`) if `wildlife`.
- `spine_class == jumping` → fail Gate (R6).
- `spine_class` puncture + `pedestrian_avoid`/`spine_hazard` → fail Gate.
- Landmark / tree groups → drop on this scale (one bed + pots).
- Water M → drop on Low/Weekend.

## Slots (the three)

Not top-3 score. Fill A then B then C.

| Job on face | Slot | Typical groups |
|---|---|---|
| Bone | A | structure / form |
| Bloom | B | flower / grass on gravel |
| Floor | C | low / different plant_group than A and B |

After each pick: **lock genus**. Slot C must change `plant_group` if a legal plant exists. Empty seat → sentence, not a catalog.

Gravel Bloom (R4 B): prefer `texture_body == Cloud` (Pine Muhly over a random second blade).

## Face language

Never print: R1, VL, west-heat, chip_pack raw, scores, eligible_count.

Do print: display_name, Bone/Bloom/Floor, plain chips from `docs/COPY_MAP.md`, why-line ≤ 140 chars.

If the same `card_id` appeared on an earlier strip this session: stamp `Same as the afternoon wall` (or prior strip title).

## Chew toggle

Rerun `/match` with `chew` flipped. Diff `card_id`s on the current strip.

- Something left → “{Name} left the pots. {reason}. {Name} stayed.”
- Nothing left → “This strip was already safe to chew. Oleander and sago stay off the whole list.”

## Phase order (do not skip)

0. Engine function + fixtures `tests/fixtures/default.json` and `pets_on.json`.
1. Wire prototype screens to live match. No new screens.
2. Banner, empty seats, card sheet, share list.
3. Optional: planted checks on the house, greyed near-miss, localStorage save.
4. Fix oleander `display_name` (must not remain “Pink, Red, White”), access, more fixtures.

## Do not build

Accounts, compass-auto wall, camera, AR, feeling chips, year wheel, water bill, nursery cart, 543-plant browse, chatbot, Tucson, XP/leaderboards, R2/R5/R7 rooms, trees-on scale.

See `docs/NOT_V1.md`.

## Done when

A person with an afternoon wall and a dog finishes in the driveway and can say why jumping cholla is gone. The UI never says “R1”.
