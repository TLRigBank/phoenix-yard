# Decision tree (engine)

This is the only climate table. `engine/match.js` implements it.

A quote is **project + side + bearing + cover + block wall + household**.

## Orientation

The first tap is **West**. Afternoon sun in Phoenix is west. The other three sides are then named:

| Tapped drawing side | Front | Left | Right | Back |
|---|---|---|---|---|
| right | N | E | W | S |
| left | S | W | E | N |
| front | W | S | N | E |
| back | E | N | S | W |

The UI must relabel the house to North / South / East / West after the tap. Do not keep saying “right side” on results.

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
