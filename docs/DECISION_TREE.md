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

## Project → side

`project_scale` + `project_side` bind the job to one wall:

| Scale | What turns on |
|---|---|
| pots | pots only, `pots_side = project_side` |
| path | gate only, `gate_side = project_side` |
| bed | that side’s bed + gravel on that side |
| yard / unsure | extras as toggled; all four bearings available |

One bed on the north wall must not quote the west strip.

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
