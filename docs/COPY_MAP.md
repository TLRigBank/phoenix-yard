# Copy map — engine → yard words

Single place for face language. Climate code stays on enums.

## Strip titles

| id | title | default caption |
|---|---|---|
| wall | Afternoon wall | Blades, then a flower, then something low. Almost no extra water. |
| gate | The gate | Safe to brush past. |
| pots | The pots | Small enough for a patio. |
| gravel | Open gravel | Blades, a grass that moves, a small cactus. |

## Jobs

| slot | face |
|---|---|
| A / A_structure / A_form / A_soft_edge / A_vine / A_native_structure / A_screen | Bone |
| B / B_bloom / B_color / B_grass / B_pollinator / B_color_safe / B_screen | Bloom |
| C / C_mass / C_compact / C_accent / C_low / C_soft / C_support | Floor |

## Chips

| engine | face |
|---|---|
| VL | Almost no extra water |
| L | A little extra water |
| M | Regular water (rare in v1) |
| west-heat / heat-ok / excellent | Takes afternoon heat |
| walk-soft / spine none | Safe to brush |
| spine_class puncture / thorns | Spines |
| spine_class jumping | Joints that jump — not here |
| toxic_class none / low-toxin | (omit, or “OK if they chew”) |
| toxic_class irritant | Problem if chewed |
| toxic_class ingest | Can make a dog or child sick |
| toxic_class deadly | Can kill a dog — hidden when chew/kids |
| sw-native / sw_us | Grows here already |
| n_fixer true | Feeds the soil |
| needs_support trellis | Needs a trellis |
| needs_support wall | Needs a wall |
| setback_ft >= 12 | Needs room from the house |

Never render raw `chip_pack` strings.

## Texture on the card (small type)

Swords → Blades · Cloud → Cloud · Stone → Mound · Gloss → Leaves · Plush → Wool · Wild stem → Wild stem

## Empty seats

- One empty job: `Nothing legal for {job} on this strip with your household rules.`
- Zero picks: `Nothing safe to brush at the gate with a chewing dog.` (adapt strip + gate)

## Same plant

`Same as the afternoon wall` or `Same as {prior strip title}`.
