# Decision tree (engine)

This is the only climate table. `engine/match.js` implements it.

A quote is **side + surface + cover + household**, not a single extras flag.

## Stage 0 — payload

Required: `hot_side`, `kids`, `chew`, `wildlife`, `guilds`, `care`, `extras.wall|gate|pots|gravel`.

Optional:

- `extras.shade|front|back|left|right`
- `block_wall: { front, left, right, back }` booleans
- `cover: { front, left, right, back }` = `none|tree|eave|structure`
- `pots_side`, `gravel_side`, `gate_side` = a house side
- `project_scale`, `exclude`

`hot_side` assigns a **role** to each side: tapped = sun, opposite = shade, other two = shoulder.

`cover` then **shifts** that role before any filter:

| Role before cover | tree | eave or structure |
|---|---|---|
| sun | shade | shoulder |
| shoulder | shade | shade |
| shade | shade | shade |

`block_wall[side]` adds a second strip against that wall. Bed and block wall can both be on.

Strip order: wall, shade, front, back, left, right, then `*-block` strips, then gate, pots, gravel.

If front is the tapped side, `front` merges into `wall`. If left is opposite, `left` merges into `shade`.

`toxic_veto = kids || chew`.

## Stage 1 — global gates

Drop if:

- `native_class == invasive_risk`
- `toxic_class` in `deadly|ingest` AND toxic_veto AND not `Asclepias linaria` / `Asclepias subulata` with wildlife
- `maintenance_level == high` AND care is not Hobby
- `water_class == M`
- `size_class == landmark` OR tree / palm groups

## Stage 2 — room filter

Water: beds, block walls, and gravel are VL. Pots allow L. Gate allows L on Weekend/Hobby.

**Sun climate:** sun full or full_plus_reflected, heat excellent, not afternoon_shade_pref.

**Shade climate:** afternoon_shade_pref OR sun full_to_part / part_to_full / part.

**Shoulder climate:** sun full, full_plus_reflected, full_to_part, or part_to_full.

**Block wall (after climate):**

| Climate after cover | Gate |
|---|---|
| sun | `reflected_heat_ok` required. No shade-pref. |
| shade | `phoenix_winter_fit == reliable_including_cold_pockets` |
| shoulder | `reflected_heat_ok` OR (full_to_part and not shade-pref) |

**Gate:** no jumping, puncture, spine_hazard, pedestrian_avoid, large. If `gate_side` set, also the side climate.

**Pots:** container rules. If `pots_side` set, side climate. If that side has a block wall, block-wall gates too.

**Gravel:** unsided = full / full_plus_reflected / full_to_part. If `gravel_side` set, that climate.

Never read `chip_pack` or `short_why`.

## Stage 3 — score

Native, water, care, winter (bonus only here), wildlife, irritant, milkweed penalty — same integers as before.

Open sun bed + reflected_heat_ok +10. Shade-pref +12 in shade climate. Cover does not add its own points; it already shifted the climate.

## Stage 4 — slots

Beds and block walls use the wall / shade seat groups. Genus lock. Floor changes plant_group when it can. Gravel Bloom still prefers Cloud.

## Stage 5 — copy

`docs/COPY_MAP.md`. Block-wall chips: Against a block wall. Cover chips: Existing shade.

## Existing cover

- `tree` — canopy already on that side
- `eave` — house overhang
- `structure` — ramada, patio cover, pergola
- `none` — open

Cover does not create a strip. It only shifts climate.

## Locked winners

`tests/fixtures/default.json` stays the golden list when block_wall and cover are off. Pets-on keeps those twelve ids.
