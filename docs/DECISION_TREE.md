# Decision tree (engine)

This is the only climate table. `engine/match.js` implements it. The workbook is not in the repo; these points are the v1 lock, not a recovered spreadsheet. Do not add a second table in the UI. Feeling bonuses are off. `brief.guilds` is accepted and ignored.

`hot_side` is stored and echoed as `place_label`. It is not a filter.

## Stage 0 — payload

Required: `hot_side` (`front|left|right|back`), `kids`, `chew`, `wildlife`, `guilds` (booleans), `care` (`Low|Weekend|Hobby`), `extras.wall|gate|pots|gravel` (booleans). `project_scale` and `exclude` are optional. Anything else required-and-missing → `{ "error": "invalid_brief", "field" }`.

`hot_side` is stored as `place_label` and **assigns climate** to house sides:

- tapped side → sun climate (strip `wall`)
- opposite side → shade climate (strip `shade`)
- the other two sides → shoulder climate (`front` / `back` when those sides are shoulders)

Opposite map: front↔back, left↔right.

Strip order: wall, shade, front, back, gate, pots, gravel. Skip a front/back strip when that side already is the sun or shade strip.


Strip order: wall if `extras.wall`, then gate if on, then pots if on, then gravel if on. If every extra is false → `invalid_brief` field `extras`. A pots-only project returns only pots.

`exclude[room]` is a list of `card_id`s already shown on that strip. Stage 4 drops those ids for that strip only.

`toxic_veto = kids || chew`.


## Stage 1 — global gates

Drop the card for the whole run if:

- `native_class == invasive_risk` (Purple Fountain Grass). Do not also drop `invasive_elsewhere`. Do not drop a card because its name contains “fountain.”
- `toxic_class` in `deadly|ingest` AND `toxic_veto` AND not the milkweed exception.
- Milkweed keep: botanical contains `Asclepias linaria` or `Asclepias subulata`, only when `wildlife` is true. `Asclepias currasavica` (Blood Flower, catalog spelling) is not an exception.
- A kept milkweed still gets caution copy and a −12 score penalty.
- `maintenance_level == high` AND care is not Hobby. Moderate is allowed at every care level.
- `water_class == M`
- `size_class == landmark` OR `plant_group` in Desert-Adapted Trees, Ornamental Trees, Palms, Fruit and Nut Trees

## Stage 2 — room filter

Water, after Stage 1:

| care | wall | gate | pots | gravel |
|---|---|---|---|---|
| Low | VL | VL | VL and L | VL |
| Weekend | VL | VL and L | VL and L | VL |
| Hobby | VL | VL and L | VL and L | VL |

**Sun (`wall`, or front/back when that side is the tapped side):** sun in `full`, `full_plus_reflected`; `heat_class == excellent`; not `afternoon_shade_pref`. Water VL.

**Shade (`shade`, or front/back when that side is opposite the tap):** `afternoon_shade_pref` OR sun in `full_to_part`, `part_to_full`, `part`. Water VL. Do not require excellent heat. Do not ban shade-pref plants.

**Shoulder (front or back when that side is neither sun nor shade):** sun in `full`, `full_plus_reflected`, `full_to_part`, `part_to_full`. Water VL.

**Wall (legacy name):** the sun strip. Same filter as Sun above.


**Gate:** drop if `spine_hazard`, `pedestrian_avoid`, `spine_class` in `jumping|puncture`, or size `large|landmark`.

**Pots:** `container_ok` or size `container_scale|small`; `width_max_ft <= 5` when present; not `large|landmark`.

**Gravel:** sun in `full`, `full_plus_reflected`, `full_to_part`; not landmark.

Heat fields disagree in the catalog (`heat_class`, chip `west-heat`, `reflected_heat_ok`). Gates use `heat_class` only. `reflected_heat_ok` is a wall rank bonus, not a drop. Never read `chip_pack` or `short_why` for a decision.

## Stage 3 — score

Integer points. Never a veto. Never returned to the UI.

| Signal | Points |
|---|---|
| `native_class` `sw_us` or `sw_us_mexico` | +12 |
| `mexico`, `baja`, or `nw_mexico` | +6 |
| water VL | +10 |
| water L (only if this room allowed it) | +4 |
| wall and `reflected_heat_ok` (sun climate only) | +10 |
| shade and `afternoon_shade_pref` | +12 |
| shade and sun `full_to_part` / `part` | +8 |
| shade and full sun with no shade pref | −6 |
| shoulder and `full_to_part` | +4 |

| care Low and maintenance low | +8 |
| care Weekend, low / moderate | +4 / +2 |
| care Hobby, low or moderate | +2 |
| winter `reliable_including_cold_pockets` / `reliable_typical_yard` | +3 / +2 |
| wildlife on: each of hummingbirds, butterflies, birds, bees | +2, cap +6 |
| irritant and `toxic_veto` | −8 |
| irritant and no veto | −2 |
| kept only by the milkweed exception | −12 |

Size fit:

| room | small | medium | container_scale | large |
|---|---|---|---|---|
| wall | +6 | +4 | +2 | 0 |
| gate | +8 | +2 | +6 | dropped |
| pots | +4 | 0 | +8 | dropped |
| gravel | +6 | +4 | +2 | 0 |

Seat fit, added only for that seat:

| Seat | Points |
|---|---|
| Floor and `height_max_ft <= 2` | +6 |
| Gravel Bone and height 5 through 8 | +8 |
| Wall Bone and height 2 through 4 | +4 |

Repeat, against earlier strips only:

| Case | Points |
|---|---|
| Same `card_id`, new seat is Bone | 0 |
| Same `card_id`, new seat is Bloom or Floor | −6 |
| Same genus, different card | −8 |

Tie-break: higher score, then a `card_id` already used on an earlier strip, then `card_id` ascending.

Genus is the first token of `botanical_name`.

## Stage 4 — slots

Fill A, then B, then C. After each pick, lock that genus for the rest of the strip. If C can be a `plant_group` that A and B did not use, it must.

Candidates are the seat’s groups below. If that list is empty, drop the group constraint. Never drop a gate to fill a seat.

| Room | Bone | Bloom | Floor |
|---|---|---|---|
| wall | Yucca and Allies, Agave, Foliage Shrubs | Flowering Shrubs, Perennials and Groundcover, Vines and Climbers | Cacti, Perennials and Groundcover, Other Succulents, Aloe |
| gate | Yucca and Allies, Foliage Shrubs, Other Succulents | Perennials and Groundcover, Flowering Shrubs, Ornamental Grasses | Other Succulents, Perennials and Groundcover, Ornamental Grasses, Foliage Shrubs, Aloe |
| pots | Other Succulents, Yucca and Allies, Agave, Aloe, Foliage Shrubs | Perennials and Groundcover, Flowering Shrubs, Aloe | Cacti, Other Succulents, Perennials and Groundcover, Aloe |
| gravel | Yucca and Allies, Agave, and prefer `height_max_ft <= 8` when any remain | Ornamental Grasses, Perennials and Groundcover | Cacti, Other Succulents, Perennials and Groundcover, Aloe |

Gravel Bloom: if any remaining candidate has `texture_body == Cloud`, choose only from those.

Gravel Bone: if any grouped candidate is 8 ft or under, ignore the taller ones (ocotillo stays out of a one-bed gravel bone).

Job words: A Bone, B Bloom, C Floor.

## Stage 5 — why-line and chips

Compose from `docs/COPY_MAP.md`. Do not copy `short_why`. Max 140 characters. No “perfect for Phoenix.”

## Kept off

On the gate strip only, when any `spine_class == jumping` card passed Stage 1:

`Kept off the gate: Jumping cholla. Joints that jump.`

One line. Do not list every reject. Teddy bear cholla is covered by that sentence.

When `toxic_veto`, `session_notes` is `["Oleander and sago stay off the whole list."]`. Do not repeat that on every strip.

## Substitutes

Up to four `substitute_ids` that pass Stage 1 and this room. Drop the rest. The sheet must not recommend oleander under a chew brief.

## Guilds

Ignored in v1, including when `guilds` is true. Do not invent bloom months: 212 cards have an empty `bloom_seasons`.

## Locked winners

`tests/fixtures/default.json` is the golden card-id list for the default brief. Pets-on keeps the same twelve ids. Change a weight only if you meant to, and update the fixture in the same commit.
