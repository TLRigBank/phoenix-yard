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

### Response

Same shape as before, plus on every strip:

- `reroll_available`: true when another full Bone/Bloom/Floor exists in that room after excluding current picks and `exclude[strip]`.

`place_label` is always the tapped side, even when the wall strip is off.

### Errors

- `{ "error": "invalid_brief", "field": "extras" }` when every room is off, or `extras.wall` is missing
- `{ "error": "invalid_brief", "field": "hot_side" }`
- `{ "error": "match_failed" }`

### Strip order

wall if `extras.wall`, then gate if on, then pots if on, then gravel if on.  
Pots-only → `[pots]`. Path-only → `[gate]`.

### Reroll

UI keeps the first-set ids per strip. Each Three others appends the visible trio to `exclude[strip]` and calls match again. Other strips use the same brief and their own exclude lists.

### Default winners

`tests/fixtures/default.json` when extras.wall is true and exclude is empty. Pets-on keeps those ids.
