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
