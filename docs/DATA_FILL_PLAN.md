# Accurate catalog fill

Accuracy first. An empty field is better than a guessed one. Do not fill from model memory.

## What we are filling

| Field | Empty now | Notes |
|---|---|---|
| `bloom_seasons` | 212 / 543 | Agave 82/83 empty — often correct (foliage plant, rare bloom) |
| `bloom_colors` | 91 / 543 | Do not invent flower color for foliage-only plants |
| Foliage color (new) | missing | Needed for trio beauty; desert identity is leaf, not only flower |
| Flower form (new) | missing | Spike / daisy / bell / inconspicuous |
| `fruit_colors` | 528 / 543 | Fill only when fruit is a real garden feature |
| Texture review | 266 Swords | Recode only with a photo + description, not by genus guess |
| `sun_class` | 417 full | Touch only when a source says afternoon shade or part sun |

Do not retune climate gates in the same pass.

## Source ladder (use in this order)

1. University of Arizona / Maricopa and Pima extension, ASU Desert Botanical Garden / arboretum notes, Tucson Cactus and Succulent Society, Arizona Municipal Water Users / AMWUA plant list, Water Use It Wisely.
2. USDA PLANTS + SEINet / Swbiodiversity for nativity and accepted name.
3. Missouri Botanical Garden, Royal Horticultural Society, San Marcos Growers, Mountain States / Civano plant notes for form, color, bloom window.
4. ASPCA only for toxicity (already gated).
5. Nursery tags last, and only to confirm a color already named by 1–3.

If two rung-1 sources disagree, leave the field empty and tag `needs_review`. Never average them.

## Rules that keep us honest

- Species first. Variety second. Genus-level fill only when the genus is uniform in that trait (e.g. most *Hesperaloe* coral/yellow spikes in spring–summer). If the genus varies, stop.
- Agave, many yuccas, foliage shrubs, palms: prefer `bloom_class = foliage_primary` or `rare_spike` instead of fake seasons.
- Phoenix window: write seasons as they behave in the low desert, not St. Louis. A plant that blooms “June” in Missouri may bloom Feb–Apr here.
- `match_confidence` is currently `high` on all 543 cards. That tag is meaningless. New fills use `field_confidence`: `sourced` | `genus_uniform` | `needs_review`.
- Every changed cell logs `source_url` + date in a fill log, not on the customer card.

## New fields (only these)

```
foliage_color: green | gray_green | silver | blue | gold | burgundy | variegated
bloom_class: seasonal | rare_spike | inconspicuous | foliage_primary
flower_form: spike | cluster | daisy | bell | tubular | pad_bloom | none
```

Do not add bloom months until seasons are solid. Do not add photos in this pass.

## Waves

**Wave A — done 2026-09-27.** See `docs/WAVE_A_LOG.md`. 114 cards tagged. 95 foliage colors sourced. 19 agaves still empty on purpose.


**Wave B — done 2026-09-27.** See `docs/WAVE_B_LOG.md`. 21 sourced patches. Unnamed canna / crape myrtle / plumeria colors still empty.


**Wave C — done 2026-09-27.** See `docs/WAVE_C_LOG.md`. Aloe winter-spring in the Valley. Totem poles stay seasonless. Most leftover cactus “summer” nights not mass-edited.


**Wave D — done 2026-09-27.** See `docs/WAVE_D_LOG.md`. Euphorbia columns and sansevieria are foliage-first. Mangave is rare-spike. Thin names skipped.


**Wave E — done 2026-09-27.** See `docs/WAVE_E_LOG.md`. 40 false Swords recoded. 226 blade plants unchanged.


**Photo QA — started 2026-09-28.** See `docs/PHOTO_QA.md`. Native Mesquite and Ironwood replaced. Bird and macro fails stripped.





## Workflow

1. Spreadsheet of empties by wave (card_id, botanical, field).
2. Two sources when the trait drives a trio (color, foliage_color, bloom_class).
3. Patch JSON in a named wave file, same as climate patches.
4. Accuracy check: 15 random cards per wave against the source links. Fail the wave if more than one miss.
5. Engine uses a new field only when `field_confidence != needs_review` and the field is non-empty.

## What “done” means

- Every empty bloom field is either filled with a source or explicitly `bloom_class = foliage_primary | rare_spike | inconspicuous`.
- Foliage color sourced on plants the matcher can actually seat (not the tree groups already gated out).
- No climate enum changed in these waves.
- Trio code may then use foliage + flower form + bloom_class. It still must not invent a season.
