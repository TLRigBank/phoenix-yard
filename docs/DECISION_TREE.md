# Decision tree (engine)

Port this. Do not invent a second set of climate rules in the UI.

## Stage 0 — payload

Need `hot_side` and at least the wall strip. If extras all off, still return wall.

## Stage 1 — global gates

Drop the card for the whole run if:

- `native_class == invasive_risk`
- `toxic_class` in `deadly|ingest` AND `toxic_veto` AND not milkweed exception  
  Milkweed keep: botanical or variety contains `Asclepias linaria` or `Asclepias subulata`, only when `wildlife`
- `maintenance_level == high` AND care is not Hobby
- `water_class == M` (v1)
- `size_class == landmark` OR `plant_group` in Desert-Adapted Trees, Ornamental Trees, Palms, Fruit and Nut Trees (v1 scale)
- wildland is off in v1 so do not extra-drop `invasive_elsewhere` unless you add that brief field later

## Stage 2 — room filter

**R1 wall:** sun in `full`, `full_plus_reflected`; `heat_class == excellent`; not afternoon_shade_pref; not landmark; water VL; not tree groups.

**R6 gate:** no `spine_hazard`, no `pedestrian_avoid`, `spine_class` not `jumping` or `puncture`; not large/landmark; not trees; not water M; toxic_class deadly/ingest already gone if veto.

**R3 pots:** `container_ok` or size container_scale/small; width_max_ft ≤ 5 when present; not large/landmark; not trees; not water M.

**R4 gravel:** water VL; sun full / full_plus_reflected / full_to_part; not landmark; not trees.

R2/R5/R7 are off in v1.

## Stage 3 — score (never a veto)

Use the weights in the original tree: native, water fit, heat on R1, size fit, low care, winter band, wildlife tags, toxic caution, group preference.

Feeling bonuses are **off**.

## Stage 4 — slots

Fill A, B, C with room slot functions (see prototype teaching trio and Build Plan W0.5).

- Lock genus after each pick.
- Slot C requires a new `plant_group` when possible.
- R4 B prefers `texture_body == Cloud`.

## Stage 5 — why-line

Slot job in yard words · one constraint · one guild/caution fragment if any. Max ~140 chars. No “perfect for Phoenix.”

## Guilds

`guilds: false` in Phase 1. When true: after A, rescore B/C with bloom-season split, n_fixer, height stack, anti two-spreaders. Cap +14. UI only prints `caption`.
