# Decision tree (engine)

This is the only climate table. `engine/match.js` implements it.

A quote is **project + side + bearing + cover + block wall + household**.

## Orientation

Ask **which way the front door faces.** Do not ask people to tap the west wall on a blank plan.

The drawing is always: street and front door at the **top**. Left on the drawing is the house’s left when you look at it from the street.

| Front faces | Front | Left | Right | Back | West wall |
|---|---|---|---|---|---|
| North | N | W | E | S | left |
| South | S | E | W | N | right |
| East | E | N | S | W | back |
| West | W | S | N | E | front |

`front_bearing` is the source of truth. `hot_side` is the drawing side that is West. If only `hot_side` is sent, derive `front_bearing` from that table. The old map that set front=North when the right wall was West was mirrored and is retired.

## Four Phoenix climates

| Bearing | Summer | Winter | Open-bed gate | Block-wall gate |
|---|---|---|---|---|
| **West** | Afternoon roast, reflected masonry | Mild | full + excellent heat, no shade-pref | `reflected_heat_ok` required |
| **East** | Morning sun, house shade after noon | Mild | shade-pref or `full_to_part` / part | not courtyard-only |
| **South** | Long sun, high angle | Warm wall | full or `full_to_part`, no shade-pref | reflected heat or part-sun |
| **North** | Least wall sun | Frost at the base | shade-pref, part sun, or `full_to_part` with cold-pocket winter | cold-pocket winter required |

North is not East. South is not West.

## Project → sides

Pieces are **per side**, not global.

```json
"surfaces": {
  "front": ["pots", "gate"],
  "right": ["bed", "block_wall"],
  "back": ["pots"],
  "left": ["gate"]
}
```

Allowed on every side: `bed`, `pots`, `gate`, `gravel`, `block_wall`.

`project_scale` + `project_side` only **seed** one side. They must not wipe pieces on the other three sides. If `surfaces` is present, it wins.

Strip ids: `pots-front`, `pots-back`, `gate-left`, `gravel-back`, plus the bed/block ids already defined. Each strip uses that side’s bearing after cover.


## Cover shift (after bearing)

| Bearing | tree | eave / patio cover |
|---|---|---|
| W | E | S |
| S | E | E |
| E | N | N |
| N | N | N |

## Payload extras

Required extras booleans: wall, gate, pots, gravel. Optional: shade, front, back, left, right, `block_wall`, `cover`, `project_side`, `pots_side`, `gravel_side`, `gate_side`.

Strip titles start with the bearing: `West · Afternoon sun`.

## Global gates, slots, copy

Unchanged from prior lock. Default fixture (no project_side, no cover) keeps the same twelve ids.

`tests/fixtures/default.json` is still the golden list.
