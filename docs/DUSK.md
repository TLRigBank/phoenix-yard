# Lot + affordance

Default look is **Lot**, not dusk and not inverted sand. Tokens live in `prototype/index.html` `:root` and here. The filename stays `DUSK.md` so links do not break.

Consumer white is the field. Pro steel is the structure. The beacon is `#E36A12`, one step off the store orange. Do not use `#F96302`.

| Token | Value | Use |
|---|---|---|
| paper | `#FFFFFF` | Page |
| sand | `#F7F6F4` | Cards, control off-fill |
| ink | `#1A1A1A` | Body, titles, selected ring, primary type |
| pine | `#E36A12` | Beacon border, job eyebrow, focus |
| pine-fill | `#E36A12` | Primary fill |
| on-fill | `#F8E4D4` | Chip on. Pale beacon, not a second button |
| house | `#3E4548` | House block |
| muted | `#5A5B5D` | Botanical, next line, street type is white on this |
| line | `#D9D9D6` | Hairline, stamped edge, control off-border, hold border |
| ember | `#E36A12` | Focus ring only. Not button chrome |
| west | `#F3E6D8` | West wash, no border |
| notch | `#E36A12` | Front door |
| street | `#5A5B5D` | Street bar |
| warn-bg | `#5A5B5D` | Warning chip |
| warn-ink | `#E36A12` | Warning type |

## Map states (do not stack)

- West climate = warm wash only. Not orange.
- Selected = 3px black ring only. Not the beacon.
- Stamped = solid line + stamp icons (max two, then `+1`).

## Control chrome

Every working control uses the same skeleton. Quiet text is only `Start over`. Type is `"Helvetica Neue", Arial, sans-serif`. Titles stay sentence case in ink. Job eyebrows may be the beacon, small caps.

| State | Fill | Border | Type |
|---|---|---|---|
| Off | `--sand` | 2px `--line` | `--ink` |
| On | `--on-fill` | 2px `--pine` | `--ink` |
| Primary | `--pine-fill` | 2px `--pine` | `--ink` |
| Disabled | same shape | same | 40% opacity |

White type on `#E36A12` fails at 16px. Primary type stays black. No top highlight. No pip on Bed / Pots / Gate / Gravel / Block / Tree. Radius 8px. Targets stay 44px.

Map walls stay dashed beds with a black ring when selected. They are not chips. They do not hold.

## Hold card

One `#hold-card`. One sentence from `COPY_MAP.md` hold table. `--paper` fill, 2px `--line` border, 13px `--ink`, max 240px.

- 420ms press. Release, cancel, or leave hides it.
- The click that ends a shown hold is ignored. The next tap works.
- The card always opens above the control, 12px gap. Never below. A thumb covers a card that opens under the finger.
- If the control is too close to the top, pin the card to 8px. Do not flip it under the button.
- `pointer-events: none` on the card. `-webkit-touch-callout: none` and `user-select: none` on `[data-hold]` and its text. `selectstart` and `touchstart` are cancelled on those controls so iOS does not highlight or magnify the label over the card. Do not scale the label on press.
- Same sentence in `aria-describedby`. Hold is extra, not the only path.

Hold IDs: `bed`, `pots`, `gate`, `gravel`, `block_wall`, `shade_tree`, `none`, `tree`, `eave`, `structure`, `chew`, `bone`, `bloom`, `floor`, `swap-A`, `swap-B`, `swap-C`.

Do not put `data-hold` on `That’s the front`, `See the plants`, `Map`, `Aim`, `Three others`, `Start over`, N / S / E / W, or `.bed` walls.

## Quote fold

Aim / Stamp map: 264px. Quote map: 176px compact.

Quote above the fold: place line, compact map, on-only household status, piece segs if needed, three photo tiles, footer.

Strip tile: habit photo, job eyebrow, common name, one warn mark if Chew or Kids makes it matter. No Latin, why, Swap, color cap, or extra chips.

Plant sheet: medium detent, grabber, map peek stays. Photo, job, name, botanical, texture · height, why ≤ 140, ≤ 4 chips, `Swap Bone`. Swipe down or tap the map peek closes it. Swapping keeps the sheet on the new plant.

## Face words

Piece **Tree** plants a shade tree. Cover **Canopy** is existing shade (`cover: tree` in the brief). Never label both Tree.

Household sits in a 44px row under the lot on Stamp. Quote shows only the chips that are on, as a status line.

See the plants is disabled until a piece is stamped. The reason sits above the footer: `Put something on a wall.` A tap on the dead button repeats it. `aria-describedby` points at that line.

## Next line

One muted line, replaced by state. Never stacked with a tour.

| Screen | Line |
|---|---|
| Aim | Tap the direction the front door faces. |
| Stamp, empty | Put Bed, Pots, or Tree on the lit wall. |
| Stamp, ready | See the plants when this wall is set. |
| Quote | Three plants for this wall. Tap one. |

After aim, pulse the selected west bed until the first stamp. The pulse does not restart on another tap. First quote only: `Bone holds. Bloom flowers. Floor covers.` under the strip.

## Photo power

Strip is the wide field: whole habit. Sheet is the next objective on the same plant, still a habit. Do not put a macro, a scale bar, or a second photo on the strip.
