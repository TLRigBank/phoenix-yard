# Copy map — engine → yard words

Never render `chip_pack`, `short_why`, scores, or room codes.

## Brand

Phoenix Yard. Line: `Plants that match the wall.`

## Place

| front_bearing | Line under the map |
|---|---|
| N | Front faces north · west is the left wall |
| S | Front faces south · west is the right wall |
| E | Front faces east · west is the back wall |
| W | Front faces west · the front wall cooks |

Wall labels: North, South, East, West. Only the west wall uses the heat color.

## Buttons

| Moment | Face |
|---|---|
| Aim primary | That’s the front |
| Stamp primary | See the plants |
| Cover row | Open · Canopy · Eave · Structure |
| Cover heading | Already shaded |
| Piece tree | Tree |
| Stamp empty primary | See the plants (disabled) |
| Start over | Start over |

| Reroll | Three others for this wall |
| Undo reroll | Back to this wall’s first set |
| Quote back | Map |
| Pool | (not on the strip) |
| Pool empty | No others for this wall |
| Seat swap | Swap Bone / Swap Bloom / Swap Floor |
| After seat swap | Swapped one plant. The other two stayed. |
| Hold coach | Hold a word for a line. |
| Aim next | Tap the direction the front door faces. |
| Stamp empty next | Put Bed, Pots, or Tree on the lit wall. |
| Stamp ready next | See the plants when this wall is set. |
| Quote next | Three plants for this wall. Tap one. |
| Quote jobs, once | Bone holds. Bloom flowers. Floor covers. |
| Disabled primary | Put something on a wall. |
| Sheet close | implicit swipe down / tap the map |

## Jobs

Bone, Bloom, Floor.

## Strip face

Low power. Whole habit. One plant, recognizable.

- habit photo
- job eyebrow
- `display_name`
- one warn mark only when the current household makes it matter

## Sheet face

Next power, same plant, still a habit. No macro. No second photo on the strip. Height is the scale. No micron bar.

- habit photo
- job · `display_name`
- botanical
- Texture word · height
- Why-line ≤ 140 characters, no “perfect for Phoenix”
- ≤ 4 chips, warnings first
- Swap that job

## Hold lines

| id | Line |
|---|---|
| bed | Plants in the ground on this wall. |
| pots | Plants that fit a container on this wall. |
| gate | The walk opening. Keep spines off the path. |
| gravel | Open ground. Low plants only. |
| block_wall | Masonry that throws heat. |
| shade_tree | Plant a shade tree on this wall. |
| none | No shade on this wall yet. |
| tree | Shade already there. Not a new tree. |
| eave | Roof shade on this wall. |
| structure | Shade from a patio or wall. |
| chew | Dogs or kids that mouth plants. |
| kids | Hands and mouths at plant height. |
| wildlife | Birds and pollinators on this yard. |
| bone | The structure plant on this wall. |
| bloom | The flower on this wall. |
| floor | The low plant on this wall. |
| swap-A | Keep Bloom and Floor. Replace only the structure plant. |
| swap-B | Keep Bone and Floor. Replace only the flower. |
| swap-C | Keep Bone and Bloom. Replace only the low plant. |
