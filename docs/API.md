# API

## POST /match

Phase 1 may call this **in-process**. JSON shape must stay identical.

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

`hot_side`: `front` | `left` | `right` | `back`  
`care`: `Low` | `Weekend` | `Hobby`

### Response

```json
{
  "brief_echo": {},
  "strips": [
    {
      "id": "wall",
      "title": "Afternoon wall",
      "caption": "Blades, then a flower, then something low. Almost no extra water.",
      "room_code": "R1",
      "picks": [
        {
          "card_id": "",
          "job": "Bone",
          "display_name": "Red Yucca",
          "botanical_name": "Hesperaloe parviflora",
          "colors": ["red"],
          "chips_plain": ["Almost no extra water", "Takes afternoon heat", "Safe to brush", "Grows here already"],
          "why_line": "Upright plant for the hot wall. Native. Low care.",
          "same_as": null,
          "toxic_class": "none",
          "spine_class": "none",
          "setback_ft": 0,
          "needs_support": "none",
          "substitute_ids": []
        }
      ],
      "empty_jobs": [],
      "ghosts": []
    }
  ]
}
```

`ghosts` is empty until Phase 3 (greyed near-miss).

### Errors

- `400` invalid brief
- `500` `{ "error": "match_failed" }` → UI: `We could not build this strip. Go back to the house and try again.`

### Strip order

Always: wall, then gate if on, then pots if on, then gravel if on.
