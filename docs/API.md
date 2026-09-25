# API

## match(brief) or POST /match

Phase 1 calls `engine/match.js` in process. JSON must stay identical if a server is added later. `guilds: true` is accepted and does not change v1 picks.

### Request

```json
{
  "hot_side": "right",
  "kids": false,
  "chew": false,
  "wildlife": true,
  "care": "Low",
  "extras": { "gate": true, "pots": true, "gravel": true },
  "guilds": false
}
```

`hot_side`: `front` | `left` | `right` | `back`. A label, not a climate input.  
`care`: `Low` | `Weekend` | `Hobby`

### Response

```json
{
  "brief_echo": {},
  "place_label": "Right side",
  "session_notes": [],
  "strips": [
    {
      "id": "wall",
      "title": "Afternoon wall",
      "caption": "Blades, then a flower, then something low. Almost no extra water.",
      "room_code": "R1",
      "picks": [
        {
          "card_id": "CCF-YUCC-010",
          "job": "Bone",
          "display_name": "Red Yucca",
          "botanical_name": "Hesperaloe parviflora",
          "colors": ["red"],
          "texture_plain": "Blades",
          "height_label": "2–3 ft",
          "chips_plain": ["Almost no extra water", "Takes afternoon heat", "Grows here already"],
          "why_line": "Bone for the afternoon wall. Almost no extra water. Grows here already.",
          "same_as": null,
          "toxic_class": "none",
          "spine_class": "none",
          "setback_ft": 0,
          "needs_support": "none",
          "caution": null,
          "substitute_ids": []
        }
      ],
      "empty_jobs": [],
      "kept_off": [],
      "ghosts": []
    }
  ]
}
```

The UI prints `place_label`, titles, captions, picks, `kept_off[].line`, and `session_notes`. It does not print `room_code`.

`kept_off` is empty except on the gate, where it is the jumping-cholla line. `ghosts` stays empty until a later near-miss story. `caution` is set only for milkweed kept under a kids or chew veto.

`substitute_ids` are already gated. At most four.

`session_notes` is empty unless kids or chew is on, then one string: `Oleander and sago stay off the whole list.`

### Errors

- invalid brief → `{ "error": "invalid_brief", "field": "hot_side" }` (HTTP 400 if wrapped)
- engine failure → `{ "error": "match_failed" }` and the UI sentence in `docs/COPY_MAP.md`

### Strip order

Always: wall, then gate if on, then pots if on, then gravel if on.

### Default winners

See `tests/fixtures/default.json`. Pets-on keeps those card ids and adds the session note.
