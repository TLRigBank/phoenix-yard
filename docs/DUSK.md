# Dusk + affordance

Default look is **dusk**, not inverted sand. Tokens live in `prototype/index.html` `:root` and here.

| Token | Value | Use |
|---|---|---|
| paper | `#121A17` | Page |
| sand | `#1C2621` | Cards, control off-fill |
| ink | `#E8E0D4` | Body |
| pine | `#9FBFB0` | Titles, selected ring, on-border |
| pine-fill | `#2A4A3C` | Primary / chip on |
| house | `#0F3A2C` | House block |
| muted | `#A39888` | Botanical, pool |
| line | `#3A4640` | Hairline, stamped edge, control off-border |
| ember | `#E07A45` | Warnings and focus only |
| west | `#5A3220` | West wash, no border |
| notch | `#C4A574` | Front door |
| street | `#0E1411` | Street bar |

## Map states (do not stack)

- West climate = dim wash only.
- Selected = 3px pine ring only.
- Stamped = solid line + stamp icons (max two, then `+1`).

## Control chrome

Every working control uses the same skeleton. Quiet text is only `Start over`.

| State | Fill | Border | Type |
|---|---|---|---|
| Off | `--sand` | 2px `--line` | `--ink` |
| On | `--pine-fill` | 2px `--pine` | `--ink` |
| Primary | `--pine-fill` | 2px `--pine` | `--ink` |
| Disabled | same shape | same | 40% opacity |

No top highlight. No pip on Bed / Pots / Gate / Gravel / Block / Tree. Ember is not button chrome.

Map walls stay dashed beds with a pine ring when selected. They are not chips. They do not hold.

## Hold card

One `#hold-card`. One sentence from `COPY_MAP.md` hold table. `--sand` fill, 2px `--pine` border, 13px `--ink`, max 240px.

- 420ms press. Release, cancel, or leave hides it.
- The click that ends a shown hold is ignored. The next tap works.
- The card always opens above the control, 12px gap. Never below. A thumb covers a card that opens under the finger.
- If the control is too close to the top, pin the card to 8px. Do not flip it under the button.
- `pointer-events: none` on the card. `-webkit-touch-callout: none` on `[data-hold]`.
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

See the plants is disabled until a piece is stamped.
