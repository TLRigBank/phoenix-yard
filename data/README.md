# data/

Concat `cards_v019_part1.json` and `cards_v019_part2.json` (two compact JSON arrays) into one list of 543 high-confidence cards. The engine does this. The UI does not.

Schema version on cards: `0.1.9-phoenix-p1-enums`.

Do not load the original CCF workbook.

## Face names already corrected

Oleander titles were already real names (Dwarf Oleander, Oleander, Oleander tree, Yellow oleander). Do not “fix” them back to color lists.

These display names were nursery SKUs or duplicates and are now face-safe:

- Thompson’s yucca head counts → Thompson’s Yucca, tall head / one head / two heads / three heads
- Gazania `Red` → Red Gazania
- Lantana `Rose` → Rose Lantana
- Ruellia color list → Dwarf Katie Ruellia
- Autumn sage color list → Autumn Sage
- Hibiscus color list → Tropical Hibiscus
- Mammillaria `Gold` → Pringle’s Mammillaria
- The second Golden Saguaro (*Trichocereus*) → Argentine Saguaro
- Agave sold as Desert Rose → Verschaffelt Agave (Adenium stays Desert Rose)
- *Pachypodium geayi* → Narrow-leaf Madagascar Palm (*P. lamerei* stays Madagascar Palm)
- Ocotillo Bareroot → Ocotillo
- Call for Varieties → Citrus
- Assorted Rose → Garden Rose

Cultivar strings (`Agave 'Blue Glow'`) stay. That is the nursery name.

## Do not “clean” these

- Blood flower is stored as `Asclepias currasavica`. The milkweed exception is the two species in the decision tree, not the genus. Correcting the spelling is safe only because Blood Flower is not on the keep list.
- Coral Fountain Grass is *Russelia*, not the invasive. Purple Fountain Grass is the one `invasive_risk`.
- `short_why` is engine shorthand. The face composes a why-line. Do not print it.
- `chip_pack` disagrees with `reflected_heat_ok` on many cards. Gates do not read chips.

## Plant pilot fields (2026-10-18)

The plant pilot added these optional keys. The matcher doesn't read them, and no schema version change is needed.

- `wave_pilot`, `wave_pilot_note`: the card was changed by the Oct 18 plant pilot. The log is in `docs/WAVE_PILOT_LOG.md`.
- `toxic_basis`: `species-level` (a cultivar card using its parent species' toxicity data) or `cultivar-level` (a source names the cultivar itself).
- `toxic_basis_species`: the species the toxicity data comes from.
- `toxic_class_confidence`, `bloom_colors_confidence`, `fruit_colors_confidence`, `spine_class_confidence`: same `sourced` | `genus_uniform` | `needs_review` scale as `bloom_seasons_confidence`.

Pet caution uses the existing `toxic_class: ingest`, so the matcher keeps these cards off kids and chew briefs. When the source doesn't name who is at risk, `toxic_who` stays empty rather than guessed.

## V&P fields (2026-10-19)

Optional keys added by the V&P cross-check. The matcher doesn't read them; no schema version change.

- `also_sold_as`: list of nursery names folded into this card (`name`, `vp_name`, `vp_code`, `vp_common`, `list`, `note`). Tyson, Oct 19, 2026: new cultivars fold into their species card instead of getting their own card.
- `name_note`: a naming caveat (synonym, trade name, mislabel). Not face copy.
- `wave_vp`, `wave_vp_note`: the card was added or changed by the V&P pass. The log is `docs/WAVE_VP_LOG.md`.
- `vp_unverified_fields`: fields on a new V&P card that hold a placeholder, not a sourced value. Keep the card in Layer C until this list is empty.
- `toxic_basis` gains two values: `genus-level` (a source speaks for the genus as grown here) and `unverified-caution` (no approved source rates the plant, so `toxic_class` is set to `ingest` as a fail-safe placeholder and `toxic_who` stays empty).
