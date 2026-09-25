# Copy map — engine → yard words

Single place for face language. Climate code stays on enums. Never render `chip_pack`, `short_why`, scores, or room codes.

## Place

| hot_side | place_label | results line |
|---|---|---|
| front | Front side | Front side · afternoon sun |
| left | Left side | Left side · afternoon sun |
| right | Right side | Right side · afternoon sun |
| back | Back side | Back side · afternoon sun |

The side stays on every strip and on the summary. It does not change the plants. It does not mean the project is the wall.

## Project scale

| value | button | default rooms |
|---|---|---|
| pots | Pots on the patio | pots on; wall off |
| bed | One bed | wall + gravel |
| path | Gate and path | gate on; wall off |
| yard | Whole yard | all on |
| unsure | Not sure | all on |

Home primary: `That’s the afternoon side.`  
Rooms primary: `See the plants.`  
Rooms empty: `Turn on at least one piece.`  
Reroll: `Three others for this strip.`  
Undo reroll: `Back to this strip’s first set.`


## Strip titles

| id | title | caption | next button | same-as stamp |
|---|---|---|---|---|
| wall | Afternoon sun | The side that cooks. | Next — afternoon sun | Same as the afternoon sun wall |
| shade | Afternoon shade | Morning sun, afternoon shade. | Next — afternoon shade | Same as the afternoon shade wall |
| front | Front | The front bed. | Next — the front | Same as the front |
| back | Back | The back bed. | Next — the back | Same as the back |

| gate | The gate | Safe to brush past. | Next — the gate | Same as the gate |
| pots | The pots | Small enough for a patio. | Next — the pots | Same as the pots |
| gravel | Open gravel | Blades, a grass that moves, then something low. | Next — open gravel | Same as open gravel |

Last strip’s button is `That's the yard`. That opens one summary of every kept strip. It does not wrap back to the wall.

## Jobs

| slot | face |
|---|---|
| A | Bone |
| B | Bloom |
| C | Floor |

## Card face

- Name: `display_name` (already cleaned; do not invent a second title).
- Small type: texture word, then height (`Up to 3 ft` or `2–3 ft`).
- Why-line, in this order, max 140 characters:
  1. `{Bone|Bloom|Floor} for the {afternoon wall|gate|pots|gravel}.`
  2. `Almost no extra water.` or `A little extra water.`
  3. First that applies: milkweed caution, else `Problem if chewed.` when irritant and kids or chew, else `Keep it off the path.` when puncture and this is not the gate, else `Feeds the soil.` when `n_fixer`, else `Grows here already.` when `sw_us` or `sw_us_mexico`.

## Chips

At most four. Warnings first. Skip the rest.

| When | face |
|---|---|
| Milkweed kept under a veto | Kept for butterflies. Still toxic if eaten. |
| `toxic_class == irritant` | Problem if chewed |
| `spine_class == jumping` | Joints that jump — not here |
| `spine_class == puncture` | Spines |
| gate and no spines | Safe to brush |
| pots strip | Fits a pot |
| water VL | Almost no extra water |
| water L | A little extra water |
| wall and `reflected_heat_ok` | Takes afternoon heat |
| shade climate | Afternoon shade |
| block-wall strip | Against a block wall |
| cover tree / eave / structure | Existing shade |

| `sw_us` or `sw_us_mexico` | Grows here already |
| `n_fixer` | Feeds the soil |
| `needs_support == trellis` | Needs a trellis |
| `needs_support == wall` | Needs a wall |
| `setback_ft >= 12` | Needs room from the house |

Do not print “Takes afternoon heat” on the gate, pots, or gravel. Do not print “Safe to brush” off the gate. Aloes are irritant and stay; the warning chip is how the face says so.

## Texture

Swords → Blades · Cloud → Cloud · Stone → Mound · Gloss → Leaves · Plush → Wool · Wild stem → Wild stem

## Empty seats

- One empty job: `Nothing legal for {Bone|Bloom|Floor} on this strip with your household rules.`
- Zero picks on the gate with chew: `Nothing safe to brush at the gate with a chewing dog.`
- Zero picks on the gate with kids and no chew: `Nothing safe to brush at the gate with kids in the plants.`
- Zero picks anywhere else: `Nothing legal for this strip with your household rules.`

## Kept off and session

- Gate strip, always when a jumping card survived the global gates: `Kept off the gate: Jumping cholla. Joints that jump.`
- Kids or chew, once per results screen, not on every card: `Oleander and sago stay off the whole list.`

## Chew control

Rerun match for the whole brief. Diff the strip they are looking at.

- A card left and it is `deadly` or `ingest`: `{Name} left the {strip title}. Can make a dog or child sick. {Name} stayed.`
- A card left and it is `irritant`: `{Name} left the {strip title}. Problem if chewed. {Name} stayed.`
- A card left for any other reason: `{Name} left the {strip title}. It does not fit this strip anymore. {Name} stayed.`
- This strip is unchanged, and so is every other strip: `This strip was already safe to chew. Oleander and sago stay off the whole list.`
- This strip is unchanged, but another strip lost a card: `This strip was already safe to chew. {Name} left the {other title}.`
- Chew turned off and nothing changed: `Chew is off. This strip did not change.`

Spines are not a reason to leave, except that the gate never seats them in the first place.

## Questions

| key | title | hint |
|---|---|---|
| kids | Do kids play in the plants? | If yes, we hide plants that can make a child very sick. |
| chew | Does a dog or cat chew leaves? | If yes, sago and oleander leave the list. Aloe stays, marked as a problem if they chew. |
| wildlife | Do you want birds and butterflies? | If yes, we keep plants that feed them. Native milkweed can stay when kids or a pet chew, and the card says it is still toxic. |
| care | How much time do you have? | Almost none means gravel plants. Weekends can add one extra-water plant at the gate or in a pot. |

One tap on an answer advances. Wildlife starts on Yes; Next is how they accept that default. The kids hint must not mention cholla. Cholla is a gate rule, not a kids rule.

## Failure

`We could not build this strip. Go back to the house and try again.`
