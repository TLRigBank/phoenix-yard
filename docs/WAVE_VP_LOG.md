# V&P cross-check log

Date: 2026-10-19. Built from the V&P Nurseries availability list (Oct 15, 2026). Research by Signal Desk (sources checked 2026-10-18); identity calls and fixes by Spine Coordinator (checked 2026-10-19). Source policy: Calscape, ASU, AMWUA, Desert Botanical Garden, ASPCA, AZ/SW university extensions and arboretums, grower/nursery/patent pages (for cultivar and species cards). No Missouri Botanical Garden.

## Field edits on existing cards

| fix | card_id | field | old | new | source | checked | note |
|---|---|---|---|---|---|---|---|
| S01 | CCF-OSUC-003 | `toxic_class` | `"none"` | `"ingest"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/jade-plant | 2026-10-18 | ASPCA toxic to dogs, cats, horses |
| S01 | CCF-OSUC-003 | `toxic_who` | `[]` | `["dogs", "cats", "livestock"]` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/jade-plant | 2026-10-18 | source class A, sourced |
| S01 | CCF-OSUC-003 | `chip_pack` | `["VL", "heat-ok", "walk-soft", "low-toxin"]` | `["VL", "heat-ok", "walk-soft", "toxic"]` | (consistency with toxic_class: ingest; chips are face hints, gates do not read them) | 2026-10-19 | consistency |
| S01 | CCF-OSUC-003 | `phoenix_pocket_tags` | `"patio_pot|not_frost_pocket|walkway_candidate|small_yard_ok|gravel_hydrozone|ignore_frost_protect_rank"` | `"patio_pot|not_frost_pocket|walkway_candidate|small_yard_ok|gravel_hydrozone|ignore_frost_protect_rank|toxic"` | (consistency with toxic_class: ingest) | 2026-10-19 | consistency |
| N01 | CCF-YUCC-004 | `botanical_name` | `"Hesperaloe"` | `"Hesperaloe parviflora 'Perpa'"` | https://patents.google.com/patent/USPP21729P2/en | 2026-10-18 | PP21,729; genus-only name before |
| S02 | CCF-YUCC-004 | `toxic_class` | `"none"` | `"ingest"` | https://apps.cals.arizona.edu/arboretum/taxon.aspx?id=1118 | 2026-10-18 | UA Brake Lights page: Toxic; leaves and fruit reportedly poisonous; target unspecified so toxic_who stays empty |
| S02 | CCF-YUCC-004 | `chip_pack` | `["VL", "west-heat", "walk-soft", "low-toxin"]` | `["VL", "west-heat", "walk-soft", "toxic"]` | (consistency with toxic_class: ingest; chips are face hints, gates do not read them) | 2026-10-19 | consistency |
| S02 | CCF-YUCC-004 | `phoenix_pocket_tags` | `"open_sun|west_heat_candidate|reflected_heat_ok|winter_hardy_phx|walkway_candidate|small_yard_ok|gravel_hydrozone|recode"` | `"open_sun|west_heat_candidate|reflected_heat_ok|winter_hardy_phx|walkway_candidate|small_yard_ok|gravel_hydrozone|recode|toxic"` | (consistency with toxic_class: ingest) | 2026-10-19 | consistency |
| S03 | CCF-DTRE-008 | `toxic_class` | `"none"` | `"ingest"` | https://apps.cals.arizona.edu/arboretum/taxon.aspx?id=371 | 2026-10-18 | UA Toxic, target unspecified so toxic_who stays empty |
| S03 | CCF-DTRE-008 | `chip_pack` | `["VL", "west-heat", "walk-soft", "low-toxin"]` | `["VL", "west-heat", "walk-soft", "toxic"]` | (consistency with toxic_class: ingest; chips are face hints, gates do not read them) | 2026-10-19 | consistency |
| S03 | CCF-DTRE-008 | `phoenix_pocket_tags` | `"open_sun|west_heat_candidate|winter_hardy_phx|walkway_candidate|needs_room|gravel_hydrozone"` | `"open_sun|west_heat_candidate|winter_hardy_phx|walkway_candidate|needs_room|gravel_hydrozone|toxic"` | (consistency with toxic_class: ingest) | 2026-10-19 | consistency |
| S04 | CCF-FRUT-001 | `toxic_class` | `"none"` | `"ingest"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lemon | 2026-10-18 | ASPCA lemon/lime/orange/grapefruit toxic to dogs, cats, horses; mandarin/pummelo not covered; UA all citrus Benign. Caution only; toxic_who stays empty until identity is settled |
| S04 | CCF-FRUT-001 | `chip_pack` | `["L", "west-heat", "walk-soft", "low-toxin"]` | `["L", "west-heat", "walk-soft", "toxic"]` | (consistency with toxic_class: ingest; chips are face hints, gates do not read them) | 2026-10-19 | consistency |
| S04 | CCF-FRUT-001 | `phoenix_pocket_tags` | `"open_sun|west_heat_candidate|patio_pot|not_frost_pocket|walkway_candidate|needs_room|low_water_oasis|high_care"` | `"open_sun|west_heat_candidate|patio_pot|not_frost_pocket|walkway_candidate|needs_room|low_water_oasis|high_care|toxic"` | (consistency with toxic_class: ingest) | 2026-10-19 | consistency |
| S05 | CCF-LSHB-006 | `toxic_sap` | `true` | `false` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/natal-plum | 2026-10-18 | follows non-toxic |
| S05 | CCF-LSHB-006 | `toxic_class` | `"ingest"` | `"none"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/natal-plum | 2026-10-18 | ASPCA Natal Plum non-toxic to dogs, cats, horses; UA taxon 1028 Benign (https://apps.cals.arizona.edu/arboretum/taxon.aspx?id=1028) |
| S05 | CCF-LSHB-006 | `toxic_who` | `["kids", "dogs", "cats"]` | `[]` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/natal-plum | 2026-10-18 | kids covered only by UA general Benign |
| N02 | CCF-LSHB-006 | `spine_class` | `"puncture"` | `"none"` | https://www.boethingtreeland.com/plants/carissa-macrocarpa-boxwood-beauty/ | 2026-10-18 | thornless per Boething, Treeland (Mesa AZ), Everde |
| N02 | CCF-LSHB-006 | `bloom_seasons` | `[]` | `["spring", "summer", "fall", "winter"]` | https://www.boethingtreeland.com/plants/carissa-macrocarpa-boxwood-beauty/ | 2026-10-18 | source class D, needs_review |
| N02 | CCF-LSHB-006 | `fruit_colors` | `[]` | `["red"]` | https://www.boethingtreeland.com/plants/carissa-macrocarpa-boxwood-beauty/ | 2026-10-18 | source class D, needs_review |
| S05 | CCF-LSHB-006 | `spine_hazard` | `true` | `false` | https://www.boethingtreeland.com/plants/carissa-macrocarpa-boxwood-beauty/ | 2026-10-18 | thornless; engine passesGlobal reads spine_hazard (match.js:498) |
| S05 | CCF-LSHB-006 | `pedestrian_avoid` | `true` | `false` | https://www.boethingtreeland.com/plants/carissa-macrocarpa-boxwood-beauty/ | 2026-10-18 | thornless; engine reads pedestrian_avoid (match.js:499) |
| S05 | CCF-LSHB-006 | `chip_pack` | `["VL", "heat-ok", "thorns", "toxic"]` | `["VL", "heat-ok", "walk-soft", "low-toxin"]` | https://www.boethingtreeland.com/plants/carissa-macrocarpa-boxwood-beauty/ | 2026-10-19 | consistency: thornless, non-toxic |
| S05 | CCF-LSHB-006 | `phoenix_pocket_tags` | `"not_frost_pocket|keep_off_paths|gravel_hydrozone|toxic"` | `"not_frost_pocket|walkway_candidate|gravel_hydrozone"` | https://www.boethingtreeland.com/plants/carissa-macrocarpa-boxwood-beauty/ | 2026-10-19 | consistency: thornless, non-toxic |
| N03 | CCF-AGAV-001 | `bloom_colors` | `[]` | `["yellow"]` | https://www.monrovia.com/blue-ember-agave-46824.html | 2026-10-18 | source class D, sourced |
| N04 | CCF-AGAV-002 | `bloom_colors` | `[]` | `["yellow"]` | https://www.smgrowers.com/products/plants/plantdisplay.asp?plant_id=2871 | 2026-10-18 | source class D, sourced |
| N04 | CCF-AGAV-002 | `bloom_seasons` | `[]` | `["fall", "winter"]` | https://www.covingtonnursery.com/product/agave-blue-flame/ | 2026-10-18 | source class D, needs_review |
| N05 | CCF-PERN-005 | `fruit_colors` | `[]` | `["red"]` | https://www.smgrowers.com/products/plants/plantdisplay.asp?plant_id=190 | 2026-10-18 | source class D, sourced |
| N06 | CCF-FSHB-004 | `botanical_name` | `"Buddleja marrubifolia"` | `"Buddleja marrubiifolia"` | https://www.amwua.org/plants/woolly-butterfly-bush | 2026-10-18 | spelling |
| N06 | CCF-FSHB-004 | `bloom_seasons` | `["summer"]` | `["spring", "summer"]` | https://www.amwua.org/plants/woolly-butterfly-bush | 2026-10-18 | AMWUA spring to midsummer; Mountain States agrees (https://mswn.com/plants/buddleja-marrubiifolia-woolly-butterfly-bush/) |
| N07 | CCF-GRAS-003 | `bloom_colors` | `["blue"]` | `[]` | https://www.amwua.org/plants/blue-grama | 2026-10-18 | blue unsupported; Calscape yellow vs AMWUA green/tan disagree, so empty per DATA_FILL_PLAN (https://calscape.org/Bouteloua-gracilis-()) |
| N08 | CCF-OTRE-002 | `bloom_seasons` | `["fall", "winter"]` | `["fall", "winter", "spring"]` | https://www.smgrowers.com/products/plants/plantdisplay.asp?plant_id=234 | 2026-10-18 | fall to mid spring; coastal CA grower |
| N09 | CCF-PALM-001 | `botanical_name` | `"Butia capitata"` | `"Butia odorata"` | https://apps.cals.arizona.edu/arboretum/taxon.aspx?id=40 | 2026-10-19 | UA: "This palm is often mislabeled as Butia capitata at nurseries." ASU still lists B. capitata; see name_note. |
| N09 | CCF-PALM-001 | `name_note` | `"(absent)"` | `"Sold as Butia capitata. UA Campus Arboretum (taxon 40) treats the cultivated pindo palm as B. odorata; ASU Virtual Library still uses B. capitata."` | https://apps.cals.arizona.edu/arboretum/taxon.aspx?id=40 | 2026-10-19 |  |
| S06 | CCF-PERN-026 | `toxic_class` | `"none"` | `"ingest"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | ASPCA Lantana (Lantana camara): Toxic to Dogs, Cats, Horses. Cultivar card, species-level carry-over. |
| S06 | CCF-PERN-026 | `toxic_who` | `[]` | `["dogs", "cats", "livestock"]` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | ASPCA Horses mapped to livestock (same mapping as Pink Jade) |
| S06 | CCF-PERN-026 | `toxic_basis` | `"(absent)"` | `"species-level"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 |  |
| S06 | CCF-PERN-026 | `toxic_basis_species` | `"(absent)"` | `"Lantana camara"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 |  |
| S06 | CCF-PERN-026 | `toxic_class_confidence` | `"(absent)"` | `"sourced"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 |  |
| S06 | CCF-PERN-026 | `chip_pack` | `["VL", "west-heat", "walk-soft", "low-toxin"]` | `["VL", "west-heat", "walk-soft", "toxic"]` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | consistency |
| S06 | CCF-PERN-026 | `phoenix_pocket_tags` | `"open_sun|west_heat_candidate|reflected_heat_ok|winter_hardy_phx|walkway_candidate|small_yard_ok|gravel_hydrozone"` | `"open_sun|west_heat_candidate|reflected_heat_ok|winter_hardy_phx|walkway_candidate|small_yard_ok|gravel_hydrozone|toxic"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | consistency |
| S07 | CCF-PERN-027 | `toxic_class` | `"none"` | `"ingest"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | ASPCA Lantana (Lantana camara): Toxic to Dogs, Cats, Horses. Cultivar card, species-level carry-over. |
| S07 | CCF-PERN-027 | `toxic_who` | `[]` | `["dogs", "cats", "livestock"]` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | ASPCA Horses mapped to livestock (same mapping as Pink Jade) |
| S07 | CCF-PERN-027 | `toxic_basis` | `"(absent)"` | `"species-level"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 |  |
| S07 | CCF-PERN-027 | `toxic_basis_species` | `"(absent)"` | `"Lantana camara"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 |  |
| S07 | CCF-PERN-027 | `toxic_class_confidence` | `"(absent)"` | `"sourced"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 |  |
| S07 | CCF-PERN-027 | `chip_pack` | `["VL", "west-heat", "walk-soft", "low-toxin"]` | `["VL", "west-heat", "walk-soft", "toxic"]` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | consistency |
| S07 | CCF-PERN-027 | `phoenix_pocket_tags` | `"open_sun|west_heat_candidate|winter_hardy_phx|walkway_candidate|small_yard_ok|gravel_hydrozone"` | `"open_sun|west_heat_candidate|winter_hardy_phx|walkway_candidate|small_yard_ok|gravel_hydrozone|toxic"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | consistency |
| S08 | CCF-PERN-028 | `toxic_class` | `"none"` | `"ingest"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | ASPCA Lantana (Lantana camara): Toxic to Dogs, Cats, Horses. Cultivar card, species-level carry-over. |
| S08 | CCF-PERN-028 | `toxic_who` | `[]` | `["dogs", "cats", "livestock"]` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | ASPCA Horses mapped to livestock (same mapping as Pink Jade) |
| S08 | CCF-PERN-028 | `toxic_basis` | `"(absent)"` | `"species-level"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 |  |
| S08 | CCF-PERN-028 | `toxic_basis_species` | `"(absent)"` | `"Lantana camara"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 |  |
| S08 | CCF-PERN-028 | `toxic_class_confidence` | `"(absent)"` | `"sourced"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 |  |
| S08 | CCF-PERN-028 | `chip_pack` | `["VL", "west-heat", "walk-soft", "low-toxin"]` | `["VL", "west-heat", "walk-soft", "toxic"]` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | consistency |
| S08 | CCF-PERN-028 | `phoenix_pocket_tags` | `"open_sun|west_heat_candidate|winter_hardy_phx|walkway_candidate|small_yard_ok|gravel_hydrozone"` | `"open_sun|west_heat_candidate|winter_hardy_phx|walkway_candidate|small_yard_ok|gravel_hydrozone|toxic"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | consistency |
| S09 | CCF-PERN-029 | `toxic_class` | `"none"` | `"ingest"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | ASPCA Lantana (Lantana camara): Toxic to Dogs, Cats, Horses. Cultivar card, species-level carry-over. |
| S09 | CCF-PERN-029 | `toxic_who` | `[]` | `["dogs", "cats", "livestock"]` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | ASPCA Horses mapped to livestock (same mapping as Pink Jade) |
| S09 | CCF-PERN-029 | `toxic_basis` | `"(absent)"` | `"species-level"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 |  |
| S09 | CCF-PERN-029 | `toxic_basis_species` | `"(absent)"` | `"Lantana camara"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 |  |
| S09 | CCF-PERN-029 | `toxic_class_confidence` | `"(absent)"` | `"sourced"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 |  |
| S09 | CCF-PERN-029 | `chip_pack` | `["VL", "west-heat", "walk-soft", "low-toxin"]` | `["VL", "west-heat", "walk-soft", "toxic"]` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | consistency |
| S09 | CCF-PERN-029 | `phoenix_pocket_tags` | `"open_sun|west_heat_candidate|winter_hardy_phx|walkway_candidate|small_yard_ok|gravel_hydrozone"` | `"open_sun|west_heat_candidate|winter_hardy_phx|walkway_candidate|small_yard_ok|gravel_hydrozone|toxic"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | consistency |
| S10 | CCF-PERN-030 | `toxic_class` | `"none"` | `"ingest"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | ASPCA Lantana (Lantana camara): Toxic to Dogs, Cats, Horses. Cultivar card, species-level carry-over. |
| S10 | CCF-PERN-030 | `toxic_who` | `[]` | `["dogs", "cats", "livestock"]` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | ASPCA Horses mapped to livestock (same mapping as Pink Jade) |
| S10 | CCF-PERN-030 | `toxic_basis` | `"(absent)"` | `"species-level"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 |  |
| S10 | CCF-PERN-030 | `toxic_basis_species` | `"(absent)"` | `"Lantana camara"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 |  |
| S10 | CCF-PERN-030 | `toxic_class_confidence` | `"(absent)"` | `"sourced"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 |  |
| S10 | CCF-PERN-030 | `chip_pack` | `["VL", "west-heat", "walk-soft", "low-toxin"]` | `["VL", "west-heat", "walk-soft", "toxic"]` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | consistency |
| S10 | CCF-PERN-030 | `phoenix_pocket_tags` | `"open_sun|west_heat_candidate|reflected_heat_ok|winter_hardy_phx|walkway_candidate|small_yard_ok|gravel_hydrozone"` | `"open_sun|west_heat_candidate|reflected_heat_ok|winter_hardy_phx|walkway_candidate|small_yard_ok|gravel_hydrozone|toxic"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | consistency |
| S11 | CCF-PERN-031 | `toxic_class` | `"none"` | `"ingest"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | ASPCA Lantana (Lantana camara): Toxic to Dogs, Cats, Horses. Cultivar card, species-level carry-over. |
| S11 | CCF-PERN-031 | `toxic_who` | `[]` | `["dogs", "cats", "livestock"]` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | ASPCA Horses mapped to livestock (same mapping as Pink Jade) |
| S11 | CCF-PERN-031 | `toxic_basis` | `"(absent)"` | `"species-level"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 |  |
| S11 | CCF-PERN-031 | `toxic_basis_species` | `"(absent)"` | `"Lantana camara"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 |  |
| S11 | CCF-PERN-031 | `toxic_class_confidence` | `"(absent)"` | `"sourced"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 |  |
| S11 | CCF-PERN-031 | `chip_pack` | `["VL", "west-heat", "walk-soft", "low-toxin"]` | `["VL", "west-heat", "walk-soft", "toxic"]` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | consistency |
| S11 | CCF-PERN-031 | `phoenix_pocket_tags` | `"open_sun|west_heat_candidate|winter_hardy_phx|walkway_candidate|small_yard_ok|gravel_hydrozone"` | `"open_sun|west_heat_candidate|winter_hardy_phx|walkway_candidate|small_yard_ok|gravel_hydrozone|toxic"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lantana | 2026-10-19 | consistency |
| S12 | CCF-PERN-032 | `toxic_class` | `"none"` | `"ingest"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lantana.html | 2026-10-19 | GATED. GATED. ASU Lantana page (Phoenix lantana is mostly L. montevidensis or its hybrids): "Lantana is mildly to acutely poisonous ... Fruits are poisonous if ingested". UA Campus Arboretum taxon 1041 (L. montevidensis): Toxicity Benign. ASPCA covers L. camara only. Targets not named, so toxic_who stays []. |
| S12 | CCF-PERN-032 | `toxic_basis` | `"(absent)"` | `"genus-level"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lantana.html | 2026-10-19 | GATED.  |
| S12 | CCF-PERN-032 | `toxic_basis_species` | `"(absent)"` | `"Lantana (ASU Phoenix lantana page)"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lantana.html | 2026-10-19 | GATED.  |
| S12 | CCF-PERN-032 | `toxic_class_confidence` | `"(absent)"` | `"needs_review"` | https://apps.cals.arizona.edu/arboretum/taxon.aspx?id=1041 | 2026-10-19 | GATED. UA says Benign |
| S12 | CCF-PERN-032 | `chip_pack` | `["VL", "west-heat", "walk-soft", "low-toxin"]` | `["VL", "west-heat", "walk-soft", "toxic"]` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lantana.html | 2026-10-19 | GATED. consistency |
| S12 | CCF-PERN-032 | `phoenix_pocket_tags` | `"open_sun|west_heat_candidate|winter_hardy_phx|walkway_candidate|small_yard_ok|gravel_hydrozone"` | `"open_sun|west_heat_candidate|winter_hardy_phx|walkway_candidate|small_yard_ok|gravel_hydrozone|toxic"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lantana.html | 2026-10-19 | GATED. consistency |
| S13 | CCF-PERN-033 | `toxic_class` | `"none"` | `"ingest"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lantana.html | 2026-10-19 | GATED. GATED. ASU Lantana page (Phoenix lantana is mostly L. montevidensis or its hybrids): "Lantana is mildly to acutely poisonous ... Fruits are poisonous if ingested". UA Campus Arboretum taxon 1041 (L. montevidensis): Toxicity Benign. ASPCA covers L. camara only. Targets not named, so toxic_who stays []. |
| S13 | CCF-PERN-033 | `toxic_basis` | `"(absent)"` | `"genus-level"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lantana.html | 2026-10-19 | GATED.  |
| S13 | CCF-PERN-033 | `toxic_basis_species` | `"(absent)"` | `"Lantana (ASU Phoenix lantana page)"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lantana.html | 2026-10-19 | GATED.  |
| S13 | CCF-PERN-033 | `toxic_class_confidence` | `"(absent)"` | `"needs_review"` | https://apps.cals.arizona.edu/arboretum/taxon.aspx?id=1041 | 2026-10-19 | GATED. UA says Benign |
| S13 | CCF-PERN-033 | `chip_pack` | `["VL", "west-heat", "walk-soft", "low-toxin"]` | `["VL", "west-heat", "walk-soft", "toxic"]` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lantana.html | 2026-10-19 | GATED. consistency |
| S13 | CCF-PERN-033 | `phoenix_pocket_tags` | `"open_sun|west_heat_candidate|winter_hardy_phx|walkway_candidate|small_yard_ok|gravel_hydrozone"` | `"open_sun|west_heat_candidate|winter_hardy_phx|walkway_candidate|small_yard_ok|gravel_hydrozone|toxic"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lantana.html | 2026-10-19 | GATED. consistency |
| S14 | CCF-FSHB-014 | `toxic_class` | `"none"` | `"ingest"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/gardenia | 2026-10-19 | ASPCA Gardenia (Gardenia jasminoides): Toxic to Dogs, Cats, Horses. Card is genus-only "Gardenia"; the Phoenix trade plant is G. jasminoides (ASU lists only that species; V&P sells G. jasminoides 'Veitchii'). |
| S14 | CCF-FSHB-014 | `toxic_who` | `[]` | `["dogs", "cats", "livestock"]` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/gardenia | 2026-10-19 |  |
| S14 | CCF-FSHB-014 | `toxic_basis` | `"(absent)"` | `"species-level"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/gardenia | 2026-10-19 |  |
| S14 | CCF-FSHB-014 | `toxic_basis_species` | `"(absent)"` | `"Gardenia jasminoides"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/gardenia | 2026-10-19 |  |
| S14 | CCF-FSHB-014 | `toxic_class_confidence` | `"(absent)"` | `"needs_review"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/gardenia | 2026-10-19 | genus-only card name |
| S14 | CCF-FSHB-014 | `chip_pack` | `["M", "heat-limit", "walk-soft", "low-toxin"]` | `["M", "heat-limit", "walk-soft", "toxic"]` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/gardenia | 2026-10-19 | consistency |
| S14 | CCF-FSHB-014 | `phoenix_pocket_tags` | `"patio_pot|not_frost_pocket|walkway_candidate|oasis_only|heat_limit_good|high_care"` | `"patio_pot|not_frost_pocket|walkway_candidate|oasis_only|heat_limit_good|high_care|toxic"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/gardenia | 2026-10-19 | consistency |
| F01 | CCF-FSHB-014 | `also_sold_as` | `"(absent)"` | `[{"name": "Veitchii", "vp_name": "Gardenia jas 'Veitchii'", "vp_code": "114005;114013", "vp_common": "Gardenia", "list": "V&P availability 2026-10-15", "note...` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-19 | 1 V&P cultivar(s) folded into this species card |
| S15 | CCF-OSUC-001 | `toxic_who` | `["kids", "dogs", "cats"]` | `["kids", "dogs", "cats", "livestock"]` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/desert-rose | 2026-10-18 | ASPCA Desert Rose (Adenium obesum): Toxic to Dogs, Cats, Horses; cardiac glycosides; signs include irregular heart beat, death. |
| S15 | CCF-OSUC-001 | `toxic_class` | `"ingest"` | `"deadly"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/desert-rose | 2026-10-18 | Cardiac glycosides with death listed (ASPCA); UA taxon 1228: Toxic, toxic latex used as arrow poison. Same class as oleander. Engine treats deadly and ingest the same on kids/chew briefs. |
| S15 | CCF-OSUC-001 | `toxic_basis` | `"(absent)"` | `"species-level"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/desert-rose | 2026-10-18 |  |
| S15 | CCF-OSUC-001 | `toxic_basis_species` | `"(absent)"` | `"Adenium obesum"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/desert-rose | 2026-10-18 |  |
| S15 | CCF-OSUC-001 | `toxic_class_confidence` | `"(absent)"` | `"needs_review"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/desert-rose | 2026-10-18 | card is genus-level; V&P sells A. arabicum |
| F02 | CCF-OSUC-001 | `also_sold_as` | `"(absent)"` | `[{"name": "Adenium arabicum", "vp_name": "Adenium arabicum", "vp_code": "352108", "vp_common": "Desert Rose", "list": "V&P availability 2026-10-15", "note": ...` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-19 |  |
| F02 | CCF-OSUC-001 | `name_note` | `"(absent)"` | `"Genus-level card. V&P sells Adenium arabicum; UA and ASPCA cover A. obesum only."` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-19 |  |
| N10 | CCF-FSHB-005 | `botanical_name` | `"Caesalpinia gillesii"` | `"Caesalpinia gilliesii"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/erythrostemongilliesii.html | 2026-10-19 | Spelling. ASU: Erythrostemon gilliesii (synonym Caesalpinia gilliesii). Genus left as Caesalpinia. |
| N10 | CCF-FSHB-005 | `name_note` | `"(absent)"` | `"ASU now files this as Erythrostemon gilliesii."` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/erythrostemongilliesii.html | 2026-10-19 |  |
| N11 | CCF-AGAV-029 | `botanical_name` | `"Agave ferdinand-regis"` | `"Agave ferdinandi-regis"` | https://cistus.com/products/retail-agave-ferdinandi-regis | 2026-10-19 | Spelling (Cistus Nursery page). Green Things Nursery, Tucson, sells King Ferdinand Agave as A. nickelsiae. |
| N11 | CCF-AGAV-029 | `name_note` | `"(absent)"` | `"Often sold as Agave nickelsiae (Green Things Nursery, Tucson: https://greenthingsaz.com/plant_database/agave-nickelsiae-king-ferdinand-agave/)."` | https://greenthingsaz.com/plant_database/agave-nickelsiae-king-ferdinand-agave/ | 2026-10-19 |  |
| N12 | CCF-OSUC-011 | `botanical_name` | `"Euphorbia antisphyllitica"` | `"Euphorbia antisyphilitica"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/euphorbiaantisyphilitica.html | 2026-10-19 | Spelling (ASU). |
| N12 | CCF-OSUC-011 | `display_name` | `"Candellia"` | `"Candelilla"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/euphorbiaantisyphilitica.html | 2026-10-19 | Face typo: "Candellia" -> "Candelilla" (ASU common name). |
| N12 | CCF-OSUC-011 | `common_name` | `"Candellia"` | `"Candelilla"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/euphorbiaantisyphilitica.html | 2026-10-19 |  |
| N13 | CCF-OTRE-025 | `botanical_name` | `"Pistacia chinensis 'Red Push'"` | `"Pistacia x 'Red Push'"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/pistaciaatlantica.html | 2026-10-19 | ASU: 'Red Push' is a hybrid cross between Pistacia atlantica and P. integerrima (also stated on the ASU P. chinensis page). |
| N13 | CCF-OTRE-025 | `display_name` | `"Pistacia chinensis 'Red Push'"` | `"Pistacia 'Red Push'"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/pistaciaatlantica.html | 2026-10-19 | Face showed the wrong species. Cultivar string kept per data/README. |
| N13 | CCF-OTRE-025 | `common_name` | `""` | `"Pistacia 'Red Push'"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/pistaciaatlantica.html | 2026-10-19 |  |
| N14 | CCF-ALOE-015 | `botanical_name` | `"Aloe brevifolia var. Blue Elf"` | `"Aloe x 'Blue Elf'"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/aloeblueelf.html | 2026-10-19 | ASU: Aloe x 'Blue Elf', a horticultural hybrid; not a variety of A. brevifolia. |
| N14 | CCF-ALOE-015 | `display_name` | `"Aloe brevifolia var. Blue Elf"` | `"Aloe 'Blue Elf'"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/aloeblueelf.html | 2026-10-19 | Matches the catalog style for aloe hybrids (Aloe 'Christmas Carol'). |
| N14 | CCF-ALOE-015 | `common_name` | `""` | `"Aloe 'Blue Elf'"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/aloeblueelf.html | 2026-10-19 |  |
| F03 | CCF-FSHB-044 | `also_sold_as` | `"(absent)"` | `[{"name": "Aguirre", "vp_name": "Ericameria lar. 'Aguirre\" tm", "vp_code": "215501", "vp_common": "Turpentine Bush", "list": "V&P availability 2026-10-15", ...` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-19 | 1 V&P cultivar(s) folded into this species card |
| F04 | CCF-FSHB-009 | `also_sold_as` | `"(absent)"` | `[{"name": "Baja Red", "vp_name": "Calliandra calif 'Baja Red'", "vp_code": "205003", "vp_common": "Baja Fairy Duster", "list": "V&P availability 2026-10-15",...` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-19 | 1 V&P cultivar(s) folded into this species card |
| F05 | CCF-FSHB-018 | `also_sold_as` | `"(absent)"` | `[{"name": "Brilliant Red", "vp_name": "Hibiscus 'Brilliant Red'", "vp_code": "141103;141105", "vp_common": "Red Hbiscus", "list": "V&P availability 2026-10-1...` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-19 | 5 V&P cultivar(s) folded into this species card |
| F06 | CCF-PERN-050 | `also_sold_as` | `"(absent)"` | `[{"name": "Big Red", "vp_name": "Russelia 'Big Red'", "vp_code": "300903", "vp_common": "Coral Fountains", "list": "V&P availability 2026-10-15", "note": "Sp...` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-19 | 1 V&P cultivar(s) folded into this species card |
| F07 | CCF-FSHB-040 | `also_sold_as` | `"(absent)"` | `[{"name": "Sparklette", "vp_name": "Tecoma x Sparklette TM", "vp_code": "155603SP", "vp_common": "Sparklette Tecoma", "list": "V&P availability 2026-10-15", ...` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-19 | 2 V&P cultivar(s) folded into this species card |
| F08 | CCF-AGAV-027 | `also_sold_as` | `"(absent)"` | `[{"name": "Socha", "vp_name": "Agave desmettiana 'Socha'", "vp_code": "503505", "vp_common": "Smooth Agave", "list": "V&P availability 2026-10-15", "note": "...` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-19 | 1 V&P cultivar(s) folded into this species card |
| F09 | CCF-FSHB-011 | `also_sold_as` | `"(absent)"` | `[{"name": "Little John", "vp_name": "Callistemon 'Little John'", "vp_code": "111505", "vp_common": "Dwarf Bottle Brush", "list": "V&P availability 2026-10-15...` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-19 | 1 V&P cultivar(s) folded into this species card |
| F10 | CCF-FSHB-022 | `also_sold_as` | `"(absent)"` | `[{"name": "Pink Velour", "vp_name": "Lagerstroemia 'Pink Velour'", "vp_code": "139005", "vp_common": "Crape Myrtle", "list": "V&P availability 2026-10-15", "...` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-19 | 1 V&P cultivar(s) folded into this species card |
| F11 | CCF-FSHB-042 | `also_sold_as` | `"(absent)"` | `[{"name": "Compacta", "vp_name": "Leucophyllum 'Compacta'", "vp_code": "221505", "vp_common": "Texas Sage 'Compacta'", "list": "V&P availability 2026-10-15",...` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-19 | 2 V&P cultivar(s) folded into this species card |
| F12 | CCF-FSHB-027 | `also_sold_as` | `"(absent)"` | `[{"name": "White Sands", "vp_name": "Nerium 'White Sands'", "vp_code": "143505", "vp_common": "Dwarf White Oleander Bush", "list": "V&P availability 2026-10-...` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-19 | 1 V&P cultivar(s) folded into this species card |
| F13 | CCF-FSHB-035 | `also_sold_as` | `"(absent)"` | `[{"name": "Blaze", "vp_name": "Rosa Climber 'Blaze'", "vp_code": "703205", "vp_common": "Rose", "list": "V&P availability 2026-10-15", "note": "Climbing rose...` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-19 | 4 V&P cultivar(s) folded into this species card |
| F14 | CCF-PERN-054 | `also_sold_as` | `"(absent)"` | `[{"name": "Purple", "vp_name": "Salvia greggii 'Purple'", "vp_code": "349605", "vp_common": "Autumn Sage", "list": "V&P availability 2026-10-15", "note": "Ca...` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-19 | 1 V&P cultivar(s) folded into this species card |
| F15 | CCF-AGAV-041 | `also_sold_as` | `"(absent)"` | `[{"name": "Quadricolor", "vp_name": "Agave lophantha 'Quadricolor'", "vp_code": "503107", "vp_common": "Quadicolor Century Plant", "list": "V&P availability ...` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-19 | 1 V&P cultivar(s) folded into this species card |
| F16 | CCF-AGAV-077 | `also_sold_as` | `"(absent)"` | `[{"name": "Porcupine", "vp_name": "Agave victoriae 'Porcupine'", "vp_code": "510208", "vp_common": "Porcupine Agave", "list": "V&P availability 2026-10-15", ...` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-19 | 1 V&P cultivar(s) folded into this species card |
| F17 | CCF-DTRE-017 | `also_sold_as` | `"(absent)"` | `[{"name": "Bubba", "vp_name": "Chilopsis 'Bubba'", "vp_code": "939815;393824;393825", "vp_common": "Desert Willow", "list": "V&P availability 2026-10-15", "n...` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-19 | 2 V&P cultivar(s) folded into this species card |
| F18 | CCF-OTRE-031 | `also_sold_as` | `"(absent)"` | `[{"name": "Cathedral", "vp_name": "Quercus v Cathedral", "vp_code": "934724;934748", "vp_common": "Catheral Oak", "list": "V&P availability 2026-10-15", "not...` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-19 | 1 V&P cultivar(s) folded into this species card |
| F19 | CCF-DTRE-014 | `also_sold_as` | `"(absent)"` | `[{"name": "AZT", "vp_name": "Cercidium praecox 'AZT'", "vp_code": "908148", "vp_common": "AZT Palo Brea", "list": "V&P availability 2026-10-15", "note": ""}]` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-19 | 1 V&P cultivar(s) folded into this species card |
| F20 | CCF-DTRE-025 | `also_sold_as` | `"(absent)"` | `[{"name": "AZT", "vp_name": "Prosopis glandulosa 'AZT'", "vp_code": "930048", "vp_common": "Honey mesquite", "list": "V&P availability 2026-10-15", "note": "...` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-19 | 1 V&P cultivar(s) folded into this species card |

## New cards (every field)

| card_id | name | field | value | source | checked | note |
|---|---|---|---|---|---|---|
| CCF-FSHB-045 | Winter Blaze Emu Bush | `card_id` | `"CCF-FSHB-045"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `display_name` | `"Winter Blaze Emu Bush"` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-18 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `common_name` | `"Winter Blaze Emu Bush"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `botanical_name` | `"Eremophila glabra subsp. carnosa 'Winter Blaze'"` | https://mswn.com/plants/eremophila-glabra-ssp-carnosa-winter-blaze/ | 2026-10-18 | MSWN: Eremophila glabra ssp. carnosa Winter Blaze (TM) |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `source_variety_raw` | `"Eremophila carnosa | Winter Blaze (V&P 214601; 214603)"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `plant_group` | `"Flowering Shrubs"` | https://mswn.com/plants/eremophila-glabra-ssp-carnosa-winter-blaze/ | 2026-10-18 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `water_class` | `"L"` | https://mswn.com/wp-content/uploads/info-sheets/Eremophila-glabra-ssp.-carnosa-Winter-Blaze%E2%84%A2.pdf | 2026-10-18 | MSWN range Low to Moderate; ASU species page: tolerates aridity, infrequent irrigation |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `heat_class` | `"excellent"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `sun_class` | `"full_to_part"` | https://mswn.com/wp-content/uploads/info-sheets/Eremophila-glabra-ssp.-carnosa-Winter-Blaze%E2%84%A2.pdf | 2026-10-18 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `size_class` | `"small"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `habit` | `"shrub"` | https://mswn.com/plants/eremophila-glabra-ssp-carnosa-winter-blaze/ | 2026-10-18 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `maintenance_level` | `"low"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `native_class` | `"non_native"` | https://mswn.com/plants/eremophila-glabra-ssp-carnosa-winter-blaze/ | 2026-10-18 | native of Western Australia |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `phoenix_winter_fit` | `"reliable_typical_yard"` | https://mswn.com/plants/eremophila-glabra-ssp-carnosa-winter-blaze/ | 2026-10-18 | MSWN 20F; ASU species 15F |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `frost_pocket_ok` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `frost_protect_needed` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `afternoon_shade_pref` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `reflected_heat_ok` | `true` | https://mswn.com/plants/eremophila-glabra-ssp-carnosa-winter-blaze/ | 2026-10-18 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `container_ok` | `false` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `width_max_ft` | `5.0` | https://mswn.com/wp-content/uploads/info-sheets/Eremophila-glabra-ssp.-carnosa-Winter-Blaze%E2%84%A2.pdf | 2026-10-18 | 5 ft page and PDF |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `height_min_ft` | `3.0` | https://mswn.com/wp-content/uploads/info-sheets/Eremophila-glabra-ssp.-carnosa-Winter-Blaze%E2%84%A2.pdf | 2026-10-18 | 3-4 ft |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `height_max_ft` | `4.0` | https://mswn.com/wp-content/uploads/info-sheets/Eremophila-glabra-ssp.-carnosa-Winter-Blaze%E2%84%A2.pdf | 2026-10-18 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `spine_hazard` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `pedestrian_avoid` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `toxic_sap` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `toxic_class` | `"ingest"` | (fail-safe placeholder) | 2026-10-19 | No approved source rates toxicity (ASPCA, UA, ASU checked). Fail-safe placeholder: ingest keeps it off kids/chew briefs until sourced. |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `toxic_who` | `[]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `spine_class` | `"none"` | (placeholder, unverified) | 2026-10-19 | no source; Eremophila unarmed is not sourced |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `litter_class` | `"clean"` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `root_class` | `"polite"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `setback_ft` | `2` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `needs_support` | `"none"` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `n_fixer` | `false` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `nurse_role` | `"none"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `texture_body` | `"Gloss"` | (placeholder, unverified) | 2026-10-19 | by analogy |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `color_moods` | `["Ember"]` | (placeholder, unverified) | 2026-10-19 | from red bloom |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `bloom_colors` | `["red"]` | https://mswn.com/plants/eremophila-glabra-ssp-carnosa-winter-blaze/ | 2026-10-18 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `bloom_seasons` | `[]` | (placeholder, unverified) | 2026-10-19 | MSWN page and PDF disagree; ASU species: late winter-early spring (species data on a cultivar card) |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `wildlife` | `["hummingbirds"]` | https://mswn.com/plants/eremophila-glabra-ssp-carnosa-winter-blaze/ | 2026-10-18 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `chip_pack` | `["L", "west-heat", "walk-soft", "toxic"]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `phoenix_pocket_tags` | `"open_sun|west_heat_candidate|reflected_heat_ok|winter_hardy_phx|walkway_candidate|small_yard_ok|gravel_hydrozone|toxic"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `match_confidence` | `"medium"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `substitute_ids` | `[]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `short_why` | `"Winter Blaze · red winter bloom · L"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `fruit_colors` | `[]` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/eremophilaglabra.html | 2026-10-18 | species: fruit inconspicuous |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `schema_version` | `"0.1.9-phoenix-p1-enums"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `layer` | `"C"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `bloom_class` | `"seasonal"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `bloom_class_confidence` | `"needs_review"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `bloom_seasons_confidence` | `"needs_review"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `name_note` | `"'Winter Blaze' is the Mountain States trade name for E. glabra subsp. carnosa; MSWN says it is no longer in production."` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `toxic_basis` | `"unverified-caution"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `toxic_class_confidence` | `"needs_review"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `wave_vp` | `true` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `wave_vp_note` | `"New card from the V&P availability cross-check (Oct 15, 2026 list). Draft: Layer C until vp_unverified_fields is empty."` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `vp_unverified_fields` | `["bloom_seasons", "color_moods", "container_ok", "fruit_colors", "litter_class", "n_fixer", "needs_support", "spine_class", "texture_body", "toxic_class", "w...` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-045 | Winter Blaze Emu Bush | `photo` | `{"id": "CCF-FSHB-045", "path": "photos/CCF-FSHB-045.webp", "credit": "Wikimedia Commons / Geoff Derrin", "license": "cc-by-sa", "source_url": "https://common...` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `card_id` | `"CCF-PERN-071"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `display_name` | `"Outback Sunrise Emu"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `common_name` | `"Outback Sunrise Emu"` | https://mswn.com/plants/eremophila-glabra-mingenew-gold-outback-sunrise-emu/ | 2026-10-18 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `botanical_name` | `"Eremophila glabra 'Mingenew Gold'"` | https://mswn.com/plants/eremophila-glabra-mingenew-gold-outback-sunrise-emu/ | 2026-10-18 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `source_variety_raw` | `"Eremophila 'Mingenew Gold' | Mingenew Gold Emu (V&P 124801; 124803)"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `plant_group` | `"Perennials and Groundcover"` | https://mswn.com/plants/eremophila-glabra-mingenew-gold-outback-sunrise-emu/ | 2026-10-18 | MSWN Type: Groundcover |
| CCF-PERN-071 | Outback Sunrise Emu | `water_class` | `"L"` | https://mswn.com/wp-content/uploads/info-sheets/Eremophila-glabra-Mingenew-Gold.pdf | 2026-10-18 | Water: Low |
| CCF-PERN-071 | Outback Sunrise Emu | `heat_class` | `"excellent"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `sun_class` | `"full_to_part"` | https://mswn.com/wp-content/uploads/info-sheets/Eremophila-glabra-Mingenew-Gold.pdf | 2026-10-18 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `size_class` | `"small"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `habit` | `"groundcover"` | https://mswn.com/plants/eremophila-glabra-mingenew-gold-outback-sunrise-emu/ | 2026-10-18 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `maintenance_level` | `"low"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `native_class` | `"non_native"` | https://mswn.com/plants/eremophila-glabra-mingenew-gold-outback-sunrise-emu/ | 2026-10-18 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `phoenix_winter_fit` | `"reliable_including_cold_pockets"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/eremophilaoutbacksunrise.html | 2026-10-18 | ASU 15F; MSWN PDF 15F |
| CCF-PERN-071 | Outback Sunrise Emu | `frost_pocket_ok` | `true` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `frost_protect_needed` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `afternoon_shade_pref` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `reflected_heat_ok` | `true` | https://mswn.com/plants/eremophila-glabra-mingenew-gold-outback-sunrise-emu/ | 2026-10-18 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `container_ok` | `false` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-PERN-071 | Outback Sunrise Emu | `width_max_ft` | `15.0` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/eremophilaoutbacksunrise.html | 2026-10-18 | ASU 10-15 ft; MSWN 6-10 ft |
| CCF-PERN-071 | Outback Sunrise Emu | `height_min_ft` | `1.0` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/eremophilaoutbacksunrise.html | 2026-10-18 | ASU cultivar page 1-3 ft |
| CCF-PERN-071 | Outback Sunrise Emu | `height_max_ft` | `3.0` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/eremophilaoutbacksunrise.html | 2026-10-18 | ASU 1-3 ft; MSWN 1 ft |
| CCF-PERN-071 | Outback Sunrise Emu | `spine_hazard` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `pedestrian_avoid` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `toxic_sap` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `toxic_class` | `"ingest"` | (fail-safe placeholder) | 2026-10-19 | No approved source rates toxicity (ASPCA, UA, ASU checked). Fail-safe placeholder: ingest keeps it off kids/chew briefs until sourced. |
| CCF-PERN-071 | Outback Sunrise Emu | `toxic_who` | `[]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `spine_class` | `"none"` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-PERN-071 | Outback Sunrise Emu | `litter_class` | `"clean"` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-PERN-071 | Outback Sunrise Emu | `root_class` | `"polite"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `setback_ft` | `0` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `needs_support` | `"none"` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-PERN-071 | Outback Sunrise Emu | `n_fixer` | `false` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-PERN-071 | Outback Sunrise Emu | `nurse_role` | `"none"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `texture_body` | `"Gloss"` | (placeholder, unverified) | 2026-10-19 | by analogy |
| CCF-PERN-071 | Outback Sunrise Emu | `color_moods` | `["Sun"]` | (placeholder, unverified) | 2026-10-19 | from yellow bloom |
| CCF-PERN-071 | Outback Sunrise Emu | `bloom_colors` | `["yellow"]` | https://mswn.com/plants/eremophila-glabra-mingenew-gold-outback-sunrise-emu/ | 2026-10-18 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `bloom_seasons` | `["winter", "spring"]` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/eremophilaoutbacksunrise.html | 2026-10-18 | ASU: late winter and early spring |
| CCF-PERN-071 | Outback Sunrise Emu | `wildlife` | `["hummingbirds"]` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/eremophilaoutbacksunrise.html | 2026-10-18 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `chip_pack` | `["L", "west-heat", "walk-soft", "toxic", "needs-room"]` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/eremophilaoutbacksunrise.html | 2026-10-18 | needs-room from ASU warning |
| CCF-PERN-071 | Outback Sunrise Emu | `phoenix_pocket_tags` | `"open_sun|west_heat_candidate|reflected_heat_ok|winter_hardy_phx|walkway_candidate|needs_room|gravel_hydrozone|toxic"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `match_confidence` | `"medium"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `substitute_ids` | `[]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `short_why` | `"Outback Sunrise · yellow groundcover · needs room"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `fruit_colors` | `[]` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/eremophilaoutbacksunrise.html | 2026-10-18 | inconspicuous |
| CCF-PERN-071 | Outback Sunrise Emu | `schema_version` | `"0.1.9-phoenix-p1-enums"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `layer` | `"C"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `bloom_class` | `"seasonal"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `bloom_class_confidence` | `"sourced"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `bloom_seasons_confidence` | `"sourced"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `foliage_color` | `"green"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/eremophilaoutbacksunrise.html | 2026-10-18 | light to bright green |
| CCF-PERN-071 | Outback Sunrise Emu | `foliage_color_confidence` | `"sourced"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `name_note` | `"V&P sells it as Mingenew Gold Emu; MSWN and ASU trade name Outback Sunrise. ASU: do not plant in beds less than 10 ft wide."` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `toxic_basis` | `"unverified-caution"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `toxic_class_confidence` | `"needs_review"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `wave_vp` | `true` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `wave_vp_note` | `"New card from the V&P availability cross-check (Oct 15, 2026 list). Draft: Layer C until vp_unverified_fields is empty."` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-071 | Outback Sunrise Emu | `vp_unverified_fields` | `["color_moods", "container_ok", "litter_class", "n_fixer", "needs_support", "spine_class", "texture_body", "toxic_class", "width_max_ft"]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `card_id` | `"CCF-FSHB-046"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `display_name` | `"Blue Bell Emu Bush"` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-18 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `common_name` | `"Blue Bell Emu Bush"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `botanical_name` | `"Eremophila hygrophana"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/eremophilahygrophana.html | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `source_variety_raw` | `"Eremophila hygrophana blue | Blue bell emu bush (V&P 124703)"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `plant_group` | `"Flowering Shrubs"` | https://mswn.com/plants/eremophila-hygrophana-blue-bells/ | 2026-10-18 | grower-for-species, approved by Tyson |
| CCF-FSHB-046 | Blue Bell Emu Bush | `water_class` | `"L"` | https://mswn.com/wp-content/uploads/info-sheets/Eremophila-hygrophana-Blue-Bells%E2%84%A2.pdf | 2026-10-18 | Low; ASU: occasional supplemental water |
| CCF-FSHB-046 | Blue Bell Emu Bush | `heat_class` | `"excellent"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `sun_class` | `"full"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/eremophilahygrophana.html | 2026-10-18 | Full sun (ASU, MSWN) |
| CCF-FSHB-046 | Blue Bell Emu Bush | `size_class` | `"small"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `habit` | `"shrub"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/eremophilahygrophana.html | 2026-10-18 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `maintenance_level` | `"low"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `native_class` | `"non_native"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/eremophilahygrophana.html | 2026-10-18 | Western Australia |
| CCF-FSHB-046 | Blue Bell Emu Bush | `phoenix_winter_fit` | `"reliable_typical_yard"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/eremophilahygrophana.html | 2026-10-18 | ASU 20F; MSWN 17F tip damage |
| CCF-FSHB-046 | Blue Bell Emu Bush | `frost_pocket_ok` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `frost_protect_needed` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `afternoon_shade_pref` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `reflected_heat_ok` | `true` | https://mswn.com/wp-content/uploads/info-sheets/Eremophila-hygrophana-Blue-Bells%E2%84%A2.pdf | 2026-10-18 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `container_ok` | `false` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-FSHB-046 | Blue Bell Emu Bush | `width_max_ft` | `5.0` | https://mswn.com/plants/eremophila-hygrophana-blue-bells/ | 2026-10-18 | MSWN page 5 ft; ASU: somewhat greater spread than height |
| CCF-FSHB-046 | Blue Bell Emu Bush | `height_min_ft` | `2.0` | https://mswn.com/wp-content/uploads/info-sheets/Eremophila-hygrophana-Blue-Bells%E2%84%A2.pdf | 2026-10-18 | 2-3 ft |
| CCF-FSHB-046 | Blue Bell Emu Bush | `height_max_ft` | `3.0` | https://mswn.com/wp-content/uploads/info-sheets/Eremophila-hygrophana-Blue-Bells%E2%84%A2.pdf | 2026-10-18 | MSWN 3 ft; ASU about 3 ft |
| CCF-FSHB-046 | Blue Bell Emu Bush | `spine_hazard` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `pedestrian_avoid` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `toxic_sap` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `toxic_class` | `"ingest"` | (fail-safe placeholder) | 2026-10-19 | No approved source rates toxicity (ASPCA, UA, ASU checked). Fail-safe placeholder: ingest keeps it off kids/chew briefs until sourced. |
| CCF-FSHB-046 | Blue Bell Emu Bush | `toxic_who` | `[]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `spine_class` | `"none"` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-FSHB-046 | Blue Bell Emu Bush | `litter_class` | `"clean"` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-FSHB-046 | Blue Bell Emu Bush | `root_class` | `"polite"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `setback_ft` | `2` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `needs_support` | `"none"` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-FSHB-046 | Blue Bell Emu Bush | `n_fixer` | `false` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-FSHB-046 | Blue Bell Emu Bush | `nurse_role` | `"none"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `texture_body` | `"Felt"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/eremophilahygrophana.html | 2026-10-18 | densely tomentose light gray leaves |
| CCF-FSHB-046 | Blue Bell Emu Bush | `color_moods` | `["Silver", "Dusk"]` | (placeholder, unverified) | 2026-10-19 | from bloom and gray leaves |
| CCF-FSHB-046 | Blue Bell Emu Bush | `bloom_colors` | `["purple"]` | https://mswn.com/plants/eremophila-hygrophana-blue-bells/ | 2026-10-18 | MSWN purple; ASU violet blue |
| CCF-FSHB-046 | Blue Bell Emu Bush | `bloom_seasons` | `["spring", "summer", "fall", "winter"]` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/eremophilahygrophana.html | 2026-10-18 | ASU almost all year; MSWN page all year |
| CCF-FSHB-046 | Blue Bell Emu Bush | `wildlife` | `["hummingbirds"]` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/eremophilahygrophana.html | 2026-10-18 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `chip_pack` | `["L", "west-heat", "walk-soft", "toxic"]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `phoenix_pocket_tags` | `"open_sun|west_heat_candidate|reflected_heat_ok|winter_hardy_phx|walkway_candidate|small_yard_ok|gravel_hydrozone|toxic"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `match_confidence` | `"medium"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `substitute_ids` | `[]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `short_why` | `"Blue Bell Emu · year-round violet · L"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `fruit_colors` | `[]` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/eremophilahygrophana.html | 2026-10-18 | inconspicuous |
| CCF-FSHB-046 | Blue Bell Emu Bush | `schema_version` | `"0.1.9-phoenix-p1-enums"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `layer` | `"C"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `bloom_class` | `"seasonal"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `bloom_class_confidence` | `"sourced"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `bloom_seasons_confidence` | `"sourced"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `name_note` | `"ASU gives 'blue bells' as the species' common name. MSWN sells a Blue Bells (TM) selection; V&P's 'hygrophana blue' is carded at species level."` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `toxic_basis` | `"unverified-caution"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `toxic_class_confidence` | `"needs_review"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `wave_vp` | `true` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `wave_vp_note` | `"New card from the V&P availability cross-check (Oct 15, 2026 list). Draft: Layer C until vp_unverified_fields is empty."` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `vp_unverified_fields` | `["color_moods", "container_ok", "foliage_color", "litter_class", "n_fixer", "needs_support", "spine_class", "toxic_class", "width_max_ft"]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-046 | Blue Bell Emu Bush | `photo` | `{"id": "CCF-FSHB-046", "path": "photos/CCF-FSHB-046.webp", "credit": "Wikimedia Commons / Geoff Derrin", "license": "cc-by-sa", "source_url": "https://common...` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `card_id` | `"CCF-FSHB-047"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `display_name` | `"Langman's Sage"` | https://www.amwua.org/plants/langmans-sage | 2026-10-18 |  |
| CCF-FSHB-047 | Langman's Sage | `common_name` | `"Langman's Sage"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `botanical_name` | `"Leucophyllum langmaniae"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/leucophyllumlangmaniae.html | 2026-10-18 |  |
| CCF-FSHB-047 | Langman's Sage | `source_variety_raw` | `"Leucophyllum lang Lynns EB (V&P 235003); Leucophyllum 'Rio Bravo' (V&P 222605)"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `plant_group` | `"Flowering Shrubs"` | https://mswn.com/plants/leucophyllum-langmaniae-lynns-legacy/ | 2026-10-18 |  |
| CCF-FSHB-047 | Langman's Sage | `water_class` | `"VL"` | https://www.amwua.org/plants/langmans-sage | 2026-10-18 | AMWUA species VL (per Signal Desk); ASU: infrequent deep summer soak, none in winter |
| CCF-FSHB-047 | Langman's Sage | `heat_class` | `"excellent"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `sun_class` | `"full"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/leucophyllumlangmaniae.html | 2026-10-18 | full sun required |
| CCF-FSHB-047 | Langman's Sage | `size_class` | `"medium"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `habit` | `"shrub"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/leucophyllumlangmaniae.html | 2026-10-18 |  |
| CCF-FSHB-047 | Langman's Sage | `maintenance_level` | `"low"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `native_class` | `"mexico"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/leucophyllumlangmaniae.html | 2026-10-18 | ASU: Sierra Madre Oriental around Monterrey, Nuevo Leon; AMWUA: Chihuahuan Desert |
| CCF-FSHB-047 | Langman's Sage | `phoenix_winter_fit` | `"reliable_including_cold_pockets"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/leucophyllumlangmaniae.html | 2026-10-18 | 10F (ASU, AMWUA, MSWN) |
| CCF-FSHB-047 | Langman's Sage | `frost_pocket_ok` | `true` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `frost_protect_needed` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `afternoon_shade_pref` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `reflected_heat_ok` | `true` | https://www.amwua.org/plants/langmans-sage | 2026-10-18 | Full/reflected sun |
| CCF-FSHB-047 | Langman's Sage | `container_ok` | `false` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-FSHB-047 | Langman's Sage | `width_max_ft` | `8.0` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/leucophyllumlangmaniae.html | 2026-10-18 | equal spread |
| CCF-FSHB-047 | Langman's Sage | `height_min_ft` | `3.0` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/leucophyllumlangmaniae.html | 2026-10-18 | 3-8 ft |
| CCF-FSHB-047 | Langman's Sage | `height_max_ft` | `8.0` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/leucophyllumlangmaniae.html | 2026-10-18 |  |
| CCF-FSHB-047 | Langman's Sage | `spine_hazard` | `false` | https://www.amwua.org/plants/langmans-sage | 2026-10-18 |  |
| CCF-FSHB-047 | Langman's Sage | `pedestrian_avoid` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `toxic_sap` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `toxic_class` | `"ingest"` | (fail-safe placeholder) | 2026-10-19 | No approved source rates toxicity (ASPCA, UA, ASU checked). Fail-safe placeholder: ingest keeps it off kids/chew briefs until sourced. |
| CCF-FSHB-047 | Langman's Sage | `toxic_who` | `[]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `spine_class` | `"none"` | https://www.amwua.org/plants/langmans-sage | 2026-10-18 | Thorns: None |
| CCF-FSHB-047 | Langman's Sage | `litter_class` | `"flowers"` | (placeholder, unverified) | 2026-10-19 | by analogy with FSHB-042 |
| CCF-FSHB-047 | Langman's Sage | `root_class` | `"polite"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `setback_ft` | `2` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `needs_support` | `"none"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `n_fixer` | `false` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-FSHB-047 | Langman's Sage | `nurse_role` | `"none"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `texture_body` | `"Felt"` | (placeholder, unverified) | 2026-10-19 | by analogy with Texas Sage (FSHB-042) |
| CCF-FSHB-047 | Langman's Sage | `color_moods` | `["Dusk"]` | (placeholder, unverified) | 2026-10-19 | from bloom |
| CCF-FSHB-047 | Langman's Sage | `bloom_colors` | `["purple"]` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/leucophyllumlangmaniae.html | 2026-10-18 | pale magenta to lavender blue; lavender mapped to purple as on FSHB-042 |
| CCF-FSHB-047 | Langman's Sage | `bloom_seasons` | `["spring", "summer", "fall"]` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/leucophyllumlangmaniae.html | 2026-10-18 | mid-spring through fall |
| CCF-FSHB-047 | Langman's Sage | `wildlife` | `[]` | (placeholder, unverified) | 2026-10-19 | no source; left empty |
| CCF-FSHB-047 | Langman's Sage | `chip_pack` | `["VL", "west-heat", "walk-soft", "toxic"]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `phoenix_pocket_tags` | `"open_sun|west_heat_candidate|reflected_heat_ok|winter_hardy_phx|walkway_candidate|regional_native|gravel_hydrozone|toxic"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `match_confidence` | `"medium"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `substitute_ids` | `["CCF-FSHB-042"]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `short_why` | `"Langman's Sage · lavender flush · VL"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `fruit_colors` | `[]` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/leucophyllumlangmaniae.html | 2026-10-18 | inconspicuous |
| CCF-FSHB-047 | Langman's Sage | `schema_version` | `"0.1.9-phoenix-p1-enums"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `layer` | `"C"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `bloom_class` | `"seasonal"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `bloom_class_confidence` | `"sourced"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `bloom_seasons_confidence` | `"sourced"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `foliage_color` | `"green"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/leucophyllumlangmaniae.html | 2026-10-18 | glaucous green; cultivars green |
| CCF-FSHB-047 | Langman's Sage | `foliage_color_confidence` | `"needs_review"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `also_sold_as` | `[{"name": "Lynn's Legacy", "vp_name": "Leucophyllum lang Lynns EB", "vp_code": "235003", "vp_common": "Lynn's Everblooming Sage", "list": "V&P availability 2...` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-18 |  |
| CCF-FSHB-047 | Langman's Sage | `name_note` | `"Species card with Lynn's Legacy and Rio Bravo folded in (Tyson, Oct 19: fold cultivars into species cards)."` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `toxic_basis` | `"unverified-caution"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `toxic_class_confidence` | `"needs_review"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `wave_vp` | `true` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `wave_vp_note` | `"New card from the V&P availability cross-check (Oct 15, 2026 list). Draft: Layer C until vp_unverified_fields is empty."` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `vp_unverified_fields` | `["color_moods", "container_ok", "foliage_color", "litter_class", "n_fixer", "texture_body", "toxic_class", "wildlife"]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-047 | Langman's Sage | `photo` | `{"id": "CCF-FSHB-047", "path": "photos/CCF-FSHB-047.webp", "credit": "Wikimedia Commons / Emmanuel Douzery", "license": "cc-by-sa", "source_url": "https://co...` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `card_id` | `"CCF-FSHB-048"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `display_name` | `"Silvery Cassia"` | https://apps.cals.arizona.edu/arboretum/taxon.aspx?id=1026 | 2026-10-18 |  |
| CCF-FSHB-048 | Silvery Cassia | `common_name` | `"Silvery Cassia"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `botanical_name` | `"Senna phyllodinea"` | https://apps.cals.arizona.edu/arboretum/taxon.aspx?id=1026 | 2026-10-18 | kept as sold; ASU synonym in name_note |
| CCF-FSHB-048 | Silvery Cassia | `source_variety_raw` | `"Senna phylodenia (Cassia) | Silver Cassia (V&P 207005SP)"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `plant_group` | `"Flowering Shrubs"` | https://mswn.com/plants/senna-phyllodinea-silvery-cassia/ | 2026-10-18 |  |
| CCF-FSHB-048 | Silvery Cassia | `water_class` | `"L"` | https://mswn.com/wp-content/uploads/info-sheets/Senna-phyllodinea.pdf | 2026-10-18 | Low; ASU deep infrequent irrigation |
| CCF-FSHB-048 | Silvery Cassia | `heat_class` | `"excellent"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `sun_class` | `"full"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/sennapetiolaris.html | 2026-10-18 | full sun only |
| CCF-FSHB-048 | Silvery Cassia | `size_class` | `"medium"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `habit` | `"shrub"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/sennapetiolaris.html | 2026-10-18 |  |
| CCF-FSHB-048 | Silvery Cassia | `maintenance_level` | `"low"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `native_class` | `"non_native"` | https://apps.cals.arizona.edu/arboretum/taxon.aspx?id=1026 | 2026-10-18 | Central Australia |
| CCF-FSHB-048 | Silvery Cassia | `phoenix_winter_fit` | `"typical_ok_skip_frost_pockets"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/sennapetiolaris.html | 2026-10-18 | ASU 22F; MSWN 20F |
| CCF-FSHB-048 | Silvery Cassia | `frost_pocket_ok` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `frost_protect_needed` | `true` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `afternoon_shade_pref` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `reflected_heat_ok` | `true` | https://mswn.com/wp-content/uploads/info-sheets/Senna-phyllodinea.pdf | 2026-10-18 |  |
| CCF-FSHB-048 | Silvery Cassia | `container_ok` | `false` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/sennapetiolaris.html | 2026-10-18 | easily pot-bound |
| CCF-FSHB-048 | Silvery Cassia | `width_max_ft` | `10.0` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/sennapetiolaris.html | 2026-10-18 | nearly equal spread |
| CCF-FSHB-048 | Silvery Cassia | `height_min_ft` | `6.0` | https://mswn.com/wp-content/uploads/info-sheets/Senna-phyllodinea.pdf | 2026-10-18 | MSWN 6-8 ft |
| CCF-FSHB-048 | Silvery Cassia | `height_max_ft` | `10.0` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/sennapetiolaris.html | 2026-10-18 | ASU to 10 ft; MSWN 8 ft |
| CCF-FSHB-048 | Silvery Cassia | `spine_hazard` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `pedestrian_avoid` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `toxic_sap` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `toxic_class` | `"ingest"` | (fail-safe placeholder) | 2026-10-19 | No approved source rates toxicity (ASPCA, UA, ASU checked). Fail-safe placeholder: ingest keeps it off kids/chew briefs until sourced. |
| CCF-FSHB-048 | Silvery Cassia | `toxic_who` | `[]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `spine_class` | `"none"` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-FSHB-048 | Silvery Cassia | `litter_class` | `"fruit"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/sennapetiolaris.html | 2026-10-18 | ASU: remove unsightly seed pods |
| CCF-FSHB-048 | Silvery Cassia | `root_class` | `"polite"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `setback_ft` | `4` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `needs_support` | `"none"` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-FSHB-048 | Silvery Cassia | `n_fixer` | `false` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-FSHB-048 | Silvery Cassia | `nurse_role` | `"none"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `texture_body` | `"Cloud"` | (placeholder, unverified) | 2026-10-19 | by analogy |
| CCF-FSHB-048 | Silvery Cassia | `color_moods` | `["Silver", "Sun"]` | (placeholder, unverified) | 2026-10-19 | from bloom and foliage |
| CCF-FSHB-048 | Silvery Cassia | `bloom_colors` | `["yellow"]` | https://mswn.com/plants/senna-phyllodinea-silvery-cassia/ | 2026-10-18 |  |
| CCF-FSHB-048 | Silvery Cassia | `bloom_seasons` | `["spring"]` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/sennapetiolaris.html | 2026-10-18 | ASU early spring; MSWN Dec-Apr |
| CCF-FSHB-048 | Silvery Cassia | `wildlife` | `[]` | (placeholder, unverified) | 2026-10-19 | no source; left empty |
| CCF-FSHB-048 | Silvery Cassia | `chip_pack` | `["L", "west-heat", "walk-soft", "toxic", "pods"]` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/sennapetiolaris.html | 2026-10-18 | pods |
| CCF-FSHB-048 | Silvery Cassia | `phoenix_pocket_tags` | `"open_sun|west_heat_candidate|reflected_heat_ok|walkway_candidate|needs_room|not_frost_pocket|gravel_hydrozone|toxic"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `match_confidence` | `"medium"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `substitute_ids` | `[]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `short_why` | `"Silvery Cassia · silver screen · spring yellow · L"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `fruit_colors` | `[]` | (placeholder, unverified) | 2026-10-19 | brown pods; brown is not in the vocabulary |
| CCF-FSHB-048 | Silvery Cassia | `schema_version` | `"0.1.9-phoenix-p1-enums"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `layer` | `"C"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `bloom_class` | `"seasonal"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `bloom_class_confidence` | `"sourced"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `bloom_seasons_confidence` | `"needs_review"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `foliage_color` | `"silver"` | https://mswn.com/wp-content/uploads/info-sheets/Senna-phyllodinea.pdf | 2026-10-18 | silver-grey phyllodes; ASU silvery gray |
| CCF-FSHB-048 | Silvery Cassia | `foliage_color_confidence` | `"sourced"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `name_note` | `"V&P and MSWN sell it as Senna phyllodinea (V&P spells it \"phylodenia\"); UA Campus Arboretum taxon 1026 uses S. phyllodinea; ASU files it as S. artemisioid...` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `toxic_basis` | `"unverified-caution"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `toxic_class_confidence` | `"needs_review"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `wave_vp` | `true` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `wave_vp_note` | `"New card from the V&P availability cross-check (Oct 15, 2026 list). Draft: Layer C until vp_unverified_fields is empty."` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `vp_unverified_fields` | `["bloom_seasons", "color_moods", "fruit_colors", "n_fixer", "needs_support", "spine_class", "texture_body", "toxic_class", "wildlife"]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-FSHB-048 | Silvery Cassia | `photo` | `{"id": "CCF-FSHB-048", "path": "photos/CCF-FSHB-048.webp", "credit": "Wikimedia Commons / cultivar413", "license": "cc-by", "source_url": "https://commons.wi...` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `card_id` | `"CCF-YUCC-037"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `display_name` | `"Toothless Desert Spoon"` | https://mswn.com/plants/dasylirion-quadrangulatum-toothless-sotol-toothless-desert-spoon-mexican-grass-tree/ | 2026-10-18 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `common_name` | `"Toothless Desert Spoon"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `botanical_name` | `"Dasylirion quadrangulatum"` | https://www.amwua.org/plants/grass-tree | 2026-10-18 | AMWUA, UA taxon 567, ASU, MSWN PDF agree |
| CCF-YUCC-037 | Toothless Desert Spoon | `source_variety_raw` | `"Dasylirion longissima | Toothless Desert Spoon (V&P 213005)"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `plant_group` | `"Yucca and Allies"` | (same group as Desert Spoon YUCC-036) | 2026-10-18 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `water_class` | `"L"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/dasylirionquadrangulatum.html | 2026-10-18 | ASU: some summer water needed in the lower desert; UA: water once or twice a month |
| CCF-YUCC-037 | Toothless Desert Spoon | `heat_class` | `"good"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/dasylirionquadrangulatum.html | 2026-10-18 | ASU: tolerates some heat stress above 110F; leaf tip necrosis in the lower desert |
| CCF-YUCC-037 | Toothless Desert Spoon | `sun_class` | `"full"` | https://www.amwua.org/plants/grass-tree | 2026-10-18 | AMWUA and ASU full sun |
| CCF-YUCC-037 | Toothless Desert Spoon | `size_class` | `"medium"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `habit` | `"rosette"` | https://www.amwua.org/plants/grass-tree | 2026-10-18 | Grassy rosette |
| CCF-YUCC-037 | Toothless Desert Spoon | `maintenance_level` | `"low"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `native_class` | `"mexico"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/dasylirionquadrangulatum.html | 2026-10-18 | ASU Coahuila, Tamaulipas, SLP; AMWUA NE Mexico |
| CCF-YUCC-037 | Toothless Desert Spoon | `phoenix_winter_fit` | `"reliable_including_cold_pockets"` | https://www.amwua.org/plants/grass-tree | 2026-10-18 | 15F (AMWUA, UA, MSWN PDF); ASU: slightly more cold tolerant than D. wheeleri |
| CCF-YUCC-037 | Toothless Desert Spoon | `frost_pocket_ok` | `true` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `frost_protect_needed` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `afternoon_shade_pref` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `reflected_heat_ok` | `true` | https://mswn.com/wp-content/uploads/info-sheets/Dasylirion-quadrangulatum.pdf | 2026-10-18 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `container_ok` | `true` | https://apps.cals.arizona.edu/arboretum/taxon.aspx?id=567 | 2026-10-18 | large container |
| CCF-YUCC-037 | Toothless Desert Spoon | `width_max_ft` | `6.0` | https://www.amwua.org/plants/grass-tree | 2026-10-18 | AMWUA 6, ASU 6 |
| CCF-YUCC-037 | Toothless Desert Spoon | `height_min_ft` | `6.0` | https://apps.cals.arizona.edu/arboretum/taxon.aspx?id=567 | 2026-10-18 | 6-10 ft |
| CCF-YUCC-037 | Toothless Desert Spoon | `height_max_ft` | `10.0` | https://apps.cals.arizona.edu/arboretum/taxon.aspx?id=567 | 2026-10-18 | UA and MSWN 10 ft; ASU 10-12 ft |
| CCF-YUCC-037 | Toothless Desert Spoon | `spine_hazard` | `false` | https://apps.cals.arizona.edu/arboretum/taxon.aspx?id=567 | 2026-10-18 | lack of spines, suitable for high traffic |
| CCF-YUCC-037 | Toothless Desert Spoon | `pedestrian_avoid` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `toxic_sap` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `toxic_class` | `"none"` | https://apps.cals.arizona.edu/arboretum/taxon.aspx?id=567 | 2026-10-18 | UA Toxicity: Benign; AMWUA Irritation: None; not on ASPCA |
| CCF-YUCC-037 | Toothless Desert Spoon | `toxic_who` | `[]` | https://apps.cals.arizona.edu/arboretum/taxon.aspx?id=567 | 2026-10-18 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `spine_class` | `"none"` | https://www.amwua.org/plants/grass-tree | 2026-10-18 | Thorns: None |
| CCF-YUCC-037 | Toothless Desert Spoon | `litter_class` | `"clean"` | https://www.amwua.org/plants/grass-tree | 2026-10-18 | Litter: Low |
| CCF-YUCC-037 | Toothless Desert Spoon | `root_class` | `"polite"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `setback_ft` | `4` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `needs_support` | `"none"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `n_fixer` | `false` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-YUCC-037 | Toothless Desert Spoon | `nurse_role` | `"none"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `texture_body` | `"Swords"` | (placeholder, unverified) | 2026-10-19 | by analogy with Desert Spoon |
| CCF-YUCC-037 | Toothless Desert Spoon | `color_moods` | `["Quiet green"]` | (placeholder, unverified) | 2026-10-19 | by analogy |
| CCF-YUCC-037 | Toothless Desert Spoon | `bloom_colors` | `[]` | (placeholder, unverified) | 2026-10-19 | AMWUA/ASU cream vs UA/MSWN green; left empty |
| CCF-YUCC-037 | Toothless Desert Spoon | `bloom_seasons` | `["summer"]` | https://www.amwua.org/plants/grass-tree | 2026-10-18 | AMWUA summer; ASU later spring to summer; UA spring |
| CCF-YUCC-037 | Toothless Desert Spoon | `wildlife` | `[]` | (placeholder, unverified) | 2026-10-19 | no source; left empty |
| CCF-YUCC-037 | Toothless Desert Spoon | `chip_pack` | `["L", "west-heat", "walk-soft", "low-toxin"]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `phoenix_pocket_tags` | `"open_sun|west_heat_candidate|reflected_heat_ok|winter_hardy_phx|walkway_candidate|patio_pot|gravel_hydrozone|heat_limit_good"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `match_confidence` | `"medium"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `substitute_ids` | `["CCF-YUCC-036"]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `short_why` | `"Toothless Desert Spoon · soft Bone · L"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `fruit_colors` | `[]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `schema_version` | `"0.1.9-phoenix-p1-enums"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `layer` | `"C"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `bloom_class` | `"rare_spike"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/dasylirionquadrangulatum.html | 2026-10-18 | flowers after 7-10 years, then not every year |
| CCF-YUCC-037 | Toothless Desert Spoon | `bloom_class_confidence` | `"sourced"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `bloom_seasons_confidence` | `"needs_review"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `foliage_color` | `"green"` | https://www.amwua.org/plants/grass-tree | 2026-10-18 | Medium green |
| CCF-YUCC-037 | Toothless Desert Spoon | `foliage_color_confidence` | `"sourced"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `toxic_class_confidence` | `"needs_review"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `name_note` | `"Sold by V&P as \"Dasylirion longissima\". AMWUA: may be sold as D. longissimum; UA and ASU list D. longissimum as a synonym of D. quadrangulatum."` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `wave_vp` | `true` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `wave_vp_note` | `"New card from the V&P availability cross-check (Oct 15, 2026 list). Draft: Layer C until vp_unverified_fields is empty."` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `vp_unverified_fields` | `["bloom_colors", "color_moods", "n_fixer", "texture_body", "toxic_class", "wildlife"]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-YUCC-037 | Toothless Desert Spoon | `photo` | `{"id": "CCF-YUCC-037", "path": "photos/CCF-YUCC-037.webp", "credit": "Wikimedia Commons / Daderot", "license": "cc0", "source_url": "https://commons.wikimedi...` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `card_id` | `"CCF-VINE-011"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `display_name` | `"Hall's Honeysuckle"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `common_name` | `"Hall's Honeysuckle"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `botanical_name` | `"Lonicera japonica 'Halliana'"` | https://extension.arizona.edu/sites/default/files/2024-08/az1110.pdf | 2026-10-18 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `source_variety_raw` | `"Lonicera jap 'Halliana' | Halls Honeysuckle (V&P 603005S, #5 Staked)"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `plant_group` | `"Vines and Climbers"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lonicerajaponica.html | 2026-10-19 | perennial vine; fence and wall cover; V&P #5 Staked |
| CCF-VINE-011 | Hall's Honeysuckle | `water_class` | `"M"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lonicerajaponica.html | 2026-10-18 | regular supplemental water all year in Phoenix |
| CCF-VINE-011 | Hall's Honeysuckle | `heat_class` | `"good"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lonicerajaponica.html | 2026-10-18 | summer heat plus western sun damages foliage |
| CCF-VINE-011 | Hall's Honeysuckle | `sun_class` | `"full_to_part"` | https://cornellfarms.com/products/lonicera-j-halliana-1-gal-st | 2026-10-18 | part shade to full sun; ASU full sun |
| CCF-VINE-011 | Hall's Honeysuckle | `size_class` | `"large"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `habit` | `"vine"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lonicerajaponica.html | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `maintenance_level` | `"moderate"` | (placeholder, unverified) | 2026-10-19 | ASU: little to extensive pruning |
| CCF-VINE-011 | Hall's Honeysuckle | `native_class` | `"invasive_risk"` | https://extension.arizona.edu/sites/extension.arizona.edu/files/attachment/PlantsforProblemAreas.pdf | 2026-10-18 | UA Extension: INVASIVE; ASU invasive alert |
| CCF-VINE-011 | Hall's Honeysuckle | `phoenix_winter_fit` | `"reliable_including_cold_pockets"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lonicerajaponica.html | 2026-10-18 | tolerant of Phoenix cold, evergreen |
| CCF-VINE-011 | Hall's Honeysuckle | `frost_pocket_ok` | `true` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `frost_protect_needed` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `afternoon_shade_pref` | `true` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lonicerajaponica.html | 2026-10-18 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `reflected_heat_ok` | `false` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lonicerajaponica.html | 2026-10-18 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `container_ok` | `true` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lonicerajaponica.html | 2026-10-18 | patio containers |
| CCF-VINE-011 | Hall's Honeysuckle | `width_max_ft` | `50.0` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lonicerajaponica.html | 2026-10-18 | spreads to 50-100 ft if not contained |
| CCF-VINE-011 | Hall's Honeysuckle | `height_min_ft` | `1.0` | (placeholder, unverified) | 2026-10-19 | no source (vine height depends on support) |
| CCF-VINE-011 | Hall's Honeysuckle | `height_max_ft` | `20.0` | (placeholder, unverified) | 2026-10-19 | no source (vine height depends on support) |
| CCF-VINE-011 | Hall's Honeysuckle | `spine_hazard` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `pedestrian_avoid` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `toxic_sap` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `toxic_class` | `"ingest"` | (fail-safe placeholder) | 2026-10-19 | No approved source rates toxicity (ASPCA, UA, ASU checked). Fail-safe placeholder: ingest keeps it off kids/chew briefs until sourced. |
| CCF-VINE-011 | Hall's Honeysuckle | `toxic_who` | `[]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `spine_class` | `"none"` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-VINE-011 | Hall's Honeysuckle | `litter_class` | `"clean"` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-VINE-011 | Hall's Honeysuckle | `root_class` | `"aggressive"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lonicerajaponica.html | 2026-10-18 | stems root at nodes; UA MG News: can break structures |
| CCF-VINE-011 | Hall's Honeysuckle | `setback_ft` | `4` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `needs_support` | `"trellis"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lonicerajaponica.html | 2026-10-19 | twining, climbing |
| CCF-VINE-011 | Hall's Honeysuckle | `n_fixer` | `false` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-VINE-011 | Hall's Honeysuckle | `nurse_role` | `"none"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `texture_body` | `"Gloss"` | (placeholder, unverified) | 2026-10-19 | by analogy |
| CCF-VINE-011 | Hall's Honeysuckle | `color_moods` | `["Moon", "Sun"]` | (placeholder, unverified) | 2026-10-19 | from bloom |
| CCF-VINE-011 | Hall's Honeysuckle | `bloom_colors` | `["white", "yellow"]` | https://extension.arizona.edu/sites/default/files/2024-08/az1110.pdf | 2026-10-18 | white changing to yellow |
| CCF-VINE-011 | Hall's Honeysuckle | `bloom_seasons` | `["spring"]` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lonicerajaponica.html | 2026-10-18 | ASU springtime; AZ1110 spring and summer |
| CCF-VINE-011 | Hall's Honeysuckle | `wildlife` | `["hummingbirds", "butterflies", "birds"]` | https://cornellfarms.com/products/lonicera-j-halliana-1-gal-st | 2026-10-18 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `chip_pack` | `["M", "walk-soft", "toxic", "invasive", "needs-room"]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `phoenix_pocket_tags` | `"afternoon_shade_phx|winter_hardy_phx|walkway_candidate|needs_room|needs_support|spreads|aggressive_roots|invasive|invasive_elsewhere|patio_pot|toxic"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `match_confidence` | `"medium"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `substitute_ids` | `[]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `short_why` | `"Hall's Honeysuckle · fragrant · invasive"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `fruit_colors` | `[]` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lonicerajaponica.html | 2026-10-18 | small black drupes; black not in vocabulary |
| CCF-VINE-011 | Hall's Honeysuckle | `schema_version` | `"0.1.9-phoenix-p1-enums"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `layer` | `"C"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `bloom_class` | `"seasonal"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `bloom_class_confidence` | `"sourced"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `bloom_seasons_confidence` | `"needs_review"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `foliage_color` | `"green"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/lonicerajaponica.html | 2026-10-18 | medium to dark green |
| CCF-VINE-011 | Hall's Honeysuckle | `foliage_color_confidence` | `"sourced"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `name_note` | `"Grown as a vine on a fence or trellis (ASU; V&P sells it staked); UA Extension AZ1110 also lists it as a groundcover. invasive_risk keeps it out of every br...` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `toxic_basis` | `"unverified-caution"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `toxic_class_confidence` | `"needs_review"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `wave_vp` | `true` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `wave_vp_note` | `"New card from the V&P availability cross-check (Oct 15, 2026 list). Draft: Layer C until vp_unverified_fields is empty."` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `vp_unverified_fields` | `["color_moods", "height_max_ft", "height_min_ft", "litter_class", "maintenance_level", "n_fixer", "spine_class", "texture_body", "toxic_class"]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-011 | Hall's Honeysuckle | `photo` | `{"id": "CCF-VINE-011", "path": "photos/CCF-VINE-011.webp", "credit": "iNaturalist / Senna Bryce Robeson", "license": "cc-by", "source_url": "https://www.inat...` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `card_id` | `"CCF-VINE-012"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `display_name` | `"Mandevilla"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `common_name` | `"Mandevilla"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `botanical_name` | `"Mandevilla"` | https://www.vpnurseries.com/plantindex | 2026-10-19 | genus only |
| CCF-VINE-012 | Mandevilla | `source_variety_raw` | `"Mandevilla Red (V&P 141203); Mandevillea Pink (V&P 143903); Mandevilla Assorted (V&P 179013)"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `plant_group` | `"Vines and Climbers"` | (placeholder, unverified) | 2026-10-19 | no approved source for the genus in Phoenix (ASU, UA, AMWUA, DBG checked; ASPCA has no entry) |
| CCF-VINE-012 | Mandevilla | `water_class` | `"M"` | (placeholder, unverified) | 2026-10-19 | no approved source for the genus in Phoenix (ASU, UA, AMWUA, DBG checked; ASPCA has no entry) |
| CCF-VINE-012 | Mandevilla | `heat_class` | `"good"` | (placeholder, unverified) | 2026-10-19 | no approved source for the genus in Phoenix (ASU, UA, AMWUA, DBG checked; ASPCA has no entry) |
| CCF-VINE-012 | Mandevilla | `sun_class` | `"full_to_part"` | (placeholder, unverified) | 2026-10-19 | no approved source for the genus in Phoenix (ASU, UA, AMWUA, DBG checked; ASPCA has no entry) |
| CCF-VINE-012 | Mandevilla | `size_class` | `"small"` | (placeholder, unverified) | 2026-10-19 | no approved source for the genus in Phoenix (ASU, UA, AMWUA, DBG checked; ASPCA has no entry) |
| CCF-VINE-012 | Mandevilla | `habit` | `"vine"` | (placeholder, unverified) | 2026-10-19 | no approved source for the genus in Phoenix (ASU, UA, AMWUA, DBG checked; ASPCA has no entry) |
| CCF-VINE-012 | Mandevilla | `maintenance_level` | `"high"` | (placeholder, unverified) | 2026-10-19 | no approved source for the genus in Phoenix (ASU, UA, AMWUA, DBG checked; ASPCA has no entry) |
| CCF-VINE-012 | Mandevilla | `native_class` | `"non_native"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `phoenix_winter_fit` | `"container_or_courtyard_only"` | (placeholder, unverified) | 2026-10-19 | no approved source for the genus in Phoenix (ASU, UA, AMWUA, DBG checked; ASPCA has no entry) |
| CCF-VINE-012 | Mandevilla | `frost_pocket_ok` | `false` | (placeholder, unverified) | 2026-10-19 | no approved source for the genus in Phoenix (ASU, UA, AMWUA, DBG checked; ASPCA has no entry) |
| CCF-VINE-012 | Mandevilla | `frost_protect_needed` | `true` | (placeholder, unverified) | 2026-10-19 | no approved source for the genus in Phoenix (ASU, UA, AMWUA, DBG checked; ASPCA has no entry) |
| CCF-VINE-012 | Mandevilla | `afternoon_shade_pref` | `true` | (placeholder, unverified) | 2026-10-19 | no approved source for the genus in Phoenix (ASU, UA, AMWUA, DBG checked; ASPCA has no entry) |
| CCF-VINE-012 | Mandevilla | `reflected_heat_ok` | `false` | (placeholder, unverified) | 2026-10-19 | no approved source for the genus in Phoenix (ASU, UA, AMWUA, DBG checked; ASPCA has no entry) |
| CCF-VINE-012 | Mandevilla | `container_ok` | `true` | (placeholder, unverified) | 2026-10-19 | no approved source for the genus in Phoenix (ASU, UA, AMWUA, DBG checked; ASPCA has no entry) |
| CCF-VINE-012 | Mandevilla | `width_max_ft` | `3.0` | (placeholder, unverified) | 2026-10-19 | no approved source for the genus in Phoenix (ASU, UA, AMWUA, DBG checked; ASPCA has no entry) |
| CCF-VINE-012 | Mandevilla | `height_min_ft` | `3.0` | (placeholder, unverified) | 2026-10-19 | no approved source for the genus in Phoenix (ASU, UA, AMWUA, DBG checked; ASPCA has no entry) |
| CCF-VINE-012 | Mandevilla | `height_max_ft` | `4.0` | (placeholder, unverified) | 2026-10-19 | no approved source for the genus in Phoenix (ASU, UA, AMWUA, DBG checked; ASPCA has no entry) |
| CCF-VINE-012 | Mandevilla | `spine_hazard` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `pedestrian_avoid` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `toxic_sap` | `false` | (placeholder, unverified) | 2026-10-19 | no approved source for the genus in Phoenix (ASU, UA, AMWUA, DBG checked; ASPCA has no entry) |
| CCF-VINE-012 | Mandevilla | `toxic_class` | `"ingest"` | (fail-safe placeholder) | 2026-10-19 | No approved source rates toxicity (ASPCA, UA, ASU checked). Fail-safe placeholder: ingest keeps it off kids/chew briefs until sourced. |
| CCF-VINE-012 | Mandevilla | `toxic_who` | `[]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `spine_class` | `"none"` | (placeholder, unverified) | 2026-10-19 | no approved source for the genus in Phoenix (ASU, UA, AMWUA, DBG checked; ASPCA has no entry) |
| CCF-VINE-012 | Mandevilla | `litter_class` | `"flowers"` | (placeholder, unverified) | 2026-10-19 | no approved source for the genus in Phoenix (ASU, UA, AMWUA, DBG checked; ASPCA has no entry) |
| CCF-VINE-012 | Mandevilla | `root_class` | `"polite"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `setback_ft` | `0` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `needs_support` | `"trellis"` | (placeholder, unverified) | 2026-10-19 | no approved source for the genus in Phoenix (ASU, UA, AMWUA, DBG checked; ASPCA has no entry) |
| CCF-VINE-012 | Mandevilla | `n_fixer` | `false` | (placeholder, unverified) | 2026-10-19 | no approved source for the genus in Phoenix (ASU, UA, AMWUA, DBG checked; ASPCA has no entry) |
| CCF-VINE-012 | Mandevilla | `nurse_role` | `"none"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `texture_body` | `"Gloss"` | (placeholder, unverified) | 2026-10-19 | no approved source for the genus in Phoenix (ASU, UA, AMWUA, DBG checked; ASPCA has no entry) |
| CCF-VINE-012 | Mandevilla | `color_moods` | `["Ember", "Blush"]` | (placeholder, unverified) | 2026-10-19 | no approved source for the genus in Phoenix (ASU, UA, AMWUA, DBG checked; ASPCA has no entry) |
| CCF-VINE-012 | Mandevilla | `bloom_colors` | `["red", "pink"]` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-19 | Red and Pink lines |
| CCF-VINE-012 | Mandevilla | `bloom_seasons` | `[]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `wildlife` | `[]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `chip_pack` | `["M", "walk-soft", "toxic"]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `phoenix_pocket_tags` | `"patio_pot|not_frost_pocket|afternoon_shade_phx|needs_support|high_care|toxic"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `match_confidence` | `"medium"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `substitute_ids` | `[]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `short_why` | `"Mandevilla · patio vine · red or pink"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `fruit_colors` | `[]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `schema_version` | `"0.1.9-phoenix-p1-enums"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `layer` | `"C"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `bloom_class` | `"seasonal"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `bloom_class_confidence` | `"needs_review"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `bloom_seasons_confidence` | `"needs_review"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `also_sold_as` | `[{"name": "Red", "vp_name": "Mandevilla Red", "vp_code": "141203", "vp_common": "Red Mandevillea", "list": "V&P availability 2026-10-15", "note": "color only...` | V&P Nurseries availability list, Oct 15, 2026 (PDF Tyson attached) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `name_note` | `"Genus-level card. V&P lists colors only (Red, Pink, Assorted) and its plant index lists just \"Mandevilla (Rocktrumpet)\". No approved source names the spec...` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `toxic_basis` | `"unverified-caution"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `toxic_class_confidence` | `"needs_review"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `wave_vp` | `true` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `wave_vp_note` | `"New card from the V&P availability cross-check (Oct 15, 2026 list). Draft: Layer C until vp_unverified_fields is empty."` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-VINE-012 | Mandevilla | `vp_unverified_fields` | `["afternoon_shade_pref", "color_moods", "container_ok", "frost_pocket_ok", "frost_protect_needed", "habit", "heat_class", "height_max_ft", "height_min_ft", "...` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `card_id` | `"CCF-PERN-072"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `display_name` | `"Garden Geranium"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/pelargonium.html | 2026-10-19 | garden geranium |
| CCF-PERN-072 | Garden Geranium | `common_name` | `"Garden Geranium"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `botanical_name` | `"Pelargonium"` | https://www.homeimprove1.com/US/Queen-Creek/1616938978595421/V%26P-Nurseries | 2026-10-19 | V&P geranium series are Pelargonium; ASU |
| CCF-PERN-072 | Garden Geranium | `source_variety_raw` | `"Geranium Assorted (V&P 320413, #13 Cache)"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `plant_group` | `"Perennials and Groundcover"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/pelargonium.html | 2026-10-19 | herbaceous annual to perennial |
| CCF-PERN-072 | Garden Geranium | `water_class` | `"M"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/pelargonium.html | 2026-10-19 | give water regularly in Phoenix |
| CCF-PERN-072 | Garden Geranium | `heat_class` | `"good"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/pelargonium.html | 2026-10-19 | tolerates summer heat to 105-110F |
| CCF-PERN-072 | Garden Geranium | `sun_class` | `"full_to_part"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/pelargonium.html | 2026-10-19 | full sun to partial shade |
| CCF-PERN-072 | Garden Geranium | `size_class` | `"small"` | (placeholder, unverified) | 2026-10-19 | from ASU max height |
| CCF-PERN-072 | Garden Geranium | `habit` | `"perennial"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/pelargonium.html | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `maintenance_level` | `"moderate"` | (placeholder, unverified) | 2026-10-19 | treated as a cool-season annual |
| CCF-PERN-072 | Garden Geranium | `native_class` | `"non_native"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/pelargonium.html | 2026-10-19 | South Africa |
| CCF-PERN-072 | Garden Geranium | `phoenix_winter_fit` | `"container_or_courtyard_only"` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/pelargonium.html | 2026-10-19 | frost and freeze intolerant; chill injury below 40F |
| CCF-PERN-072 | Garden Geranium | `frost_pocket_ok` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `frost_protect_needed` | `true` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/pelargonium.html | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `afternoon_shade_pref` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `reflected_heat_ok` | `false` | (placeholder, unverified) | 2026-10-19 | ASU heat limit 105-110F; not stated directly |
| CCF-PERN-072 | Garden Geranium | `container_ok` | `true` | https://www.homeimprove1.com/US/Queen-Creek/1616938978595421/V%26P-Nurseries | 2026-10-19 | caché pots |
| CCF-PERN-072 | Garden Geranium | `width_max_ft` | `4.0` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/pelargonium.html | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `height_min_ft` | `1.0` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-PERN-072 | Garden Geranium | `height_max_ft` | `4.0` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/pelargonium.html | 2026-10-19 | some species to 4 ft with near equal spread |
| CCF-PERN-072 | Garden Geranium | `spine_hazard` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `pedestrian_avoid` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `toxic_sap` | `false` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `toxic_class` | `"ingest"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/geranium | 2026-10-18 | ASPCA Geranium (Pelargonium species): Toxic to Dogs, Cats, Horses |
| CCF-PERN-072 | Garden Geranium | `toxic_who` | `["dogs", "cats", "livestock"]` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/geranium | 2026-10-18 |  |
| CCF-PERN-072 | Garden Geranium | `spine_class` | `"none"` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-PERN-072 | Garden Geranium | `litter_class` | `"flowers"` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-PERN-072 | Garden Geranium | `root_class` | `"polite"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `setback_ft` | `0` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `needs_support` | `"none"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `n_fixer` | `false` | (placeholder, unverified) | 2026-10-19 | no source |
| CCF-PERN-072 | Garden Geranium | `nurse_role` | `"none"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `texture_body` | `"Plush"` | (placeholder, unverified) | 2026-10-19 | by analogy |
| CCF-PERN-072 | Garden Geranium | `color_moods` | `["Blush", "Ember"]` | (placeholder, unverified) | 2026-10-19 | from bloom |
| CCF-PERN-072 | Garden Geranium | `bloom_colors` | `["red", "pink", "white", "purple"]` | https://www.homeimprove1.com/US/Queen-Creek/1616938978595421/V%26P-Nurseries | 2026-10-19 | dark red, pink, white splash, violet |
| CCF-PERN-072 | Garden Geranium | `bloom_seasons` | `["winter", "spring"]` | https://www.public.asu.edu/~camartin/plants/Plant%20html%20files/pelargonium.html | 2026-10-19 | heaviest in winter and spring; V&P October-May |
| CCF-PERN-072 | Garden Geranium | `wildlife` | `[]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `chip_pack` | `["M", "walk-soft", "toxic"]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `phoenix_pocket_tags` | `"patio_pot|not_frost_pocket|walkway_candidate|small_yard_ok|toxic"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `match_confidence` | `"medium"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `substitute_ids` | `[]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `short_why` | `"Garden Geranium · cool-season pots"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `fruit_colors` | `[]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `schema_version` | `"0.1.9-phoenix-p1-enums"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `layer` | `"C"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `bloom_class` | `"seasonal"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `bloom_class_confidence` | `"sourced"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `bloom_seasons_confidence` | `"sourced"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `toxic_basis` | `"genus-level"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `toxic_basis_species` | `"Pelargonium species (ASPCA \"Geranium\")"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `toxic_class_confidence` | `"sourced"` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `name_note` | `"V&P's 'Geranium Assorted' is Pelargonium, not true Geranium: V&P's own Feb 2024 post sells 'caché' geraniums in America, Calliope, Pretty Little, Rocky Moun...` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `wave_vp` | `true` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `wave_vp_note` | `"New card from the V&P availability cross-check (Oct 15, 2026 list). Draft: Layer C until vp_unverified_fields is empty."` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
| CCF-PERN-072 | Garden Geranium | `vp_unverified_fields` | `["color_moods", "height_min_ft", "litter_class", "maintenance_level", "n_fixer", "reflected_heat_ok", "size_class", "spine_class", "texture_body"]` | (derived from sourced fields by the rule in the fix doc) | 2026-10-19 |  |
