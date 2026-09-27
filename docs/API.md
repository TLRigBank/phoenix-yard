# API

## match(brief) or POST /match

`engine/match.js`. `guilds: true` does not change v1 picks.

### Request

```json
{
  "hot_side": "right",
  "project_scale": "yard",
  "kids": false,
  "chew": false,
  "wildlife": true,
  "care": "Low",
  "extras": { "wall": true, "shade": true, "front": true, "back": true, "gate": true, "pots": true, "gravel": true },
  "exclude": { "wall": [], "gate": [], "pots": [], "gravel": [] },
  "guilds": false
}
```

- `hot_side`: `front` | `left` | `right` | `back`. Label only.
- `project_scale` (optional): `pots` | `bed` | `path` | `yard` | `unsure`. UI uses it to seed extras. Engine does not infer rooms from it.
- `care`: `Low` | `Weekend` | `Hobby`
Optional: `block_wall`, `cover` (`none|tree|eave|structure` per side), `pots_side`, `gravel_side`, `gate_side`.

Block-wall strips use ids `wall-block`, `shade-block`, `front-block`, `back-block`, `left-block`, `right-block`.

- Response may include `opposite_label` (the afternoon-shade side name).
- Strip order: wall, shade, front, back, gate, pots, gravel (skip collisions).

- `exclude` optional. Card ids already shown on that strip. Reroll skips them.
- `keep[room]` optional. `{ "A": "CCF-…", "C": "CCF-…" }` locks those seats. Fill only the missing seat. Put the outgoing card in `exclude[room]`.

### Response

Same shape as before, plus on every strip:

- `pool_size`: legal plants for this wall/piece/household
- `more_count` / `pool_line`: face copy (`12 more for this wall`)
- `reroll_available`: true when another full trio exists
- each pick: `can_swap`, `alt_count`

`place_label` is always the tapped side, even when the wall strip is off.

### Errors

- `{ "error": "invalid_brief", "field": "extras" }` when every room is off, or `extras.wall` is missing
- `{ "error": "invalid_brief", "field": "hot_side" }`
- `{ "error": "match_failed" }`

### Strip order

wall if `extras.wall`, then gate if on, then pots if on, then gravel if on.  
Pots-only → `[pots]`. Path-only → `[gate]`.

### Reroll and swap

Full reroll: append the visible trio to `exclude[strip]`.

Seat swap: send `keep[strip]` with the two seats that stay. Put the outgoing id in `exclude[strip]`. Do not open a catalog browser.


### Default winners

`tests/fixtures/default.json` when extras.wall is true and exclude is empty. Pets-on keeps those ids.
