# Plant pilot log

Date: 2026-10-18. 20-card pilot, pass 3 (Signal Desk for Spine Coordinator, staged by Tinker). The source policy follows Tyson's Oct 18 decision: ASPCA for pets, AZ university extensions and arboretums, and grower or patent pages for cultivars. Species-level toxicity may be used for cultivar cards and is tagged `toxic_basis: species-level`.

All 20 pilot cards are Layer C. The matcher never seats them, so no strip changes.

## Changes

| card_id | name | field | old | new | source | note |
|---|---|---|---|---|---|---|
| CCF-AGAV-001 | Agave 'Blue Ember' | `bloom_colors` | `[]` | `["yellow"]` | https://www.monrovia.com/blue-ember-agave-46824.html | source class D, sourced |
| CCF-LSHB-006 | Variegated Boxwood Beauty | `bloom_seasons` | `[]` | `["spring", "summer", "fall", "winter"]` | https://www.boethingtreeland.com/plants/carissa-macrocarpa-boxwood-beauty/ | source class D, needs_review |
| CCF-LSHB-006 | Variegated Boxwood Beauty | `fruit_colors` | `[]` | `["red"]` | https://www.boethingtreeland.com/plants/carissa-macrocarpa-boxwood-beauty/ | source class D, needs_review |
| CCF-PERN-005 | Foxtail Fern | `fruit_colors` | `[]` | `["red"]` | https://www.smgrowers.com/products/plants/plantdisplay.asp?plant_id=190 | source class D, sourced |
| CCF-AGAV-002 | Agave 'Blue Flame' | `bloom_seasons` | `[]` | `["fall", "winter"]` | https://www.covingtonnursery.com/product/agave-blue-flame/ | source class D, needs_review |
| CCF-AGAV-002 | Agave 'Blue Flame' | `bloom_colors` | `[]` | `["yellow"]` | https://www.smgrowers.com/products/plants/plantdisplay.asp?plant_id=2871 | source class D, sourced |
| CCF-OSUC-003 | Pink Jade Plant | `toxic_who` | `[]` | `["dogs", "cats", "livestock"]` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/jade-plant | source class A, sourced |
| CCF-YUCC-004 | Brake Lights | `botanical_name` | `"Hesperaloe"` | `"Hesperaloe parviflora 'Perpa'"` | https://patents.google.com/patent/USPP21729P2/en | PP21,729; genus-only name before |
| CCF-FSHB-004 | Wooly Butterfly Bush | `bloom_seasons` | `["summer"]` | `["spring", "summer"]` | https://www.amwua.org/plants/woolly-butterfly-bush | AMWUA spring to midsummer; Mountain States agrees (https://mswn.com/plants/buddleja-marrubiifolia-woolly-butterfly-bush/) |
| CCF-FSHB-004 | Wooly Butterfly Bush | `botanical_name` | `"Buddleja marrubifolia"` | `"Buddleja marrubiifolia"` | https://www.amwua.org/plants/woolly-butterfly-bush | spelling |
| CCF-LSHB-006 | Variegated Boxwood Beauty | `spine_class` | `"puncture"` | `"none"` | https://www.boethingtreeland.com/plants/carissa-macrocarpa-boxwood-beauty/ | thornless per Boething, Treeland (Mesa AZ), Everde |
| CCF-LSHB-006 | Variegated Boxwood Beauty | `toxic_class` | `"ingest"` | `"none"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/natal-plum | ASPCA Natal Plum non-toxic to dogs, cats, horses; UA taxon 1028 Benign (https://apps.cals.arizona.edu/arboretum/taxon.aspx?id=1028) |
| CCF-LSHB-006 | Variegated Boxwood Beauty | `toxic_sap` | `true` | `false` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/natal-plum | follows non-toxic |
| CCF-LSHB-006 | Variegated Boxwood Beauty | `toxic_who` | `["kids", "dogs", "cats"]` | `[]` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/natal-plum | kids covered only by UA general Benign |
| CCF-GRAS-003 | Blue Grama | `bloom_colors` | `["blue"]` | `[]` | https://www.amwua.org/plants/blue-grama | blue unsupported; Calscape yellow vs AMWUA green/tan disagree, so empty per DATA_FILL_PLAN (https://calscape.org/Bouteloua-gracilis-()) |
| CCF-OTRE-002 | Hong Kong Orchid | `bloom_seasons` | `["fall", "winter"]` | `["fall", "winter", "spring"]` | https://www.smgrowers.com/products/plants/plantdisplay.asp?plant_id=234 | fall to mid spring; coastal CA grower |
| CCF-OSUC-003 | Pink Jade Plant | `toxic_class` | `"none"` | `"ingest"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/jade-plant | ASPCA toxic to dogs, cats, horses |
| CCF-YUCC-004 | Brake Lights | `toxic_class` | `"none"` | `"ingest"` | https://apps.cals.arizona.edu/arboretum/taxon.aspx?id=1118 | UA Brake Lights page: Toxic; leaves and fruit reportedly poisonous; target unspecified so toxic_who stays empty |
| CCF-DTRE-008 | Smoothie Cascalote | `toxic_class` | `"none"` | `"ingest"` | https://apps.cals.arizona.edu/arboretum/taxon.aspx?id=371 | UA Toxic, target unspecified so toxic_who stays empty |
| CCF-FRUT-001 | Cocktail Citrus | `toxic_class` | `"none"` | `"ingest"` | https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/lemon | ASPCA lemon/lime/orange/grapefruit toxic to dogs, cats, horses; mandarin/pummelo not covered; UA all citrus Benign. Caution only; toxic_who stays empty until identity is settled |
| CCF-CACT-001 | Fairy Castle Cactus | photo | — | `photos/CCF-CACT-001.webp (cc-by, qa warn)` | https://commons.wikimedia.org/wiki/File:Acanthocereus_tetragonus_Cv.Fairy_Castle-3-R.M.Nagar-bengaluru-India.jpg | Cultivar-labelled Commons photo (Fairy Castle); top-down potted plant with one reverted taller column |
| CCF-OSUC-002 | African Ocotillo | photo | — | `photos/CCF-OSUC-002.webp (cc-by, qa pass_habit)` | https://www.inaturalist.org/observations/48547936 | Stems with leaves in habitat (Madagascar) |
| CCF-PERN-001 | Hearts & Flowers | photo | — | `photos/CCF-PERN-001.webp (cc0, qa pass_bloom)` | https://www.inaturalist.org/observations/20269425 | Groundcover with flower and leaves |
| CCF-OTRE-001 | Mimosa | photo | — | `photos/CCF-OTRE-001.webp (cc-by, qa pass_habit)` | https://www.inaturalist.org/observations/50289290 | Whole spreading tree at lake edge, in bloom |
| CCF-FSHB-004 | Wooly Butterfly Bush | photo | — | `photos/CCF-FSHB-004.webp (cc-by, qa pass_bloom)` | https://www.inaturalist.org/observations/243411935 | Orange flower ball with silvery leaves; sold for bloom |
| CCF-VINE-001 | Lilac Vine | photo | — | `photos/CCF-VINE-001.webp (cc-by, qa pass_bloom)` | https://www.inaturalist.org/observations/33623414 | Flower close-up; vine sold for winter-spring color |
| CCF-PALM-001 | Pindo Palm | photo | — | `photos/CCF-PALM-001.webp (cc-by, qa pass_habit)` | https://www.inaturalist.org/observations/342951640 | Whole palm in habitat (Minas Gerais, BR); see Butia name note |
| CCF-LSHB-006 | Variegated Boxwood Beauty | photo | inherited `photos/CCF-LSHB-003.webp` | `photos/CCF-LSHB-006.webp (cc-by-sa, qa warn)` | https://commons.wikimedia.org/wiki/File:Carissa_macrocarpa_Boxwood_Beauty_1zz.jpg | Cultivar-labelled Boxwood Beauty shrub, but NOT variegated; card is "Variegated Boxwood Beauty" |
| CCF-GRAS-003 | Blue Grama | photo | inherited `photos/CCF-GRAS-002.webp` | `photos/CCF-GRAS-003.webp (cc-by, qa pass_habit)` | https://www.inaturalist.org/observations/133383354 | Stand of blue grama with seed heads |
| CCF-CACT-002 | Goats Horn | photo | — | `photos/CCF-CACT-002.webp (cc-by, qa pass_habit)` | https://www.inaturalist.org/observations/60580706 | Single plant in habitat (Coahuila) |
| CCF-PERN-005 | Foxtail Fern | photo | — | `photos/CCF-PERN-005.webp (cc0, qa pass_habit)` | https://commons.wikimedia.org/wiki/File:Asparagus_densiflorus_%27Myers%27_-_Christchurch_Botanic_Gardens_-_Christchurch,_NZ_-_DSC01278.jpg | Labelled Asparagus densiflorus Myers clump, Christchurch Botanic Gardens |
| CCF-AGAV-002 | Agave 'Blue Flame' | photo | — | `photos/CCF-AGAV-002.webp (cc0, qa pass_habit)` | https://commons.wikimedia.org/wiki/File:Agave_%27Blue_Flame%27_-_Huntington_Botanical_Gardens_-_San_Marino,_CA_-_DSC01114.jpg | Labelled Agave Blue Flame rosette, Huntington Botanical Gardens |
| CCF-OTRE-002 | Hong Kong Orchid | photo | — | `photos/CCF-OTRE-002.webp (cc-by, qa warn)` | https://www.inaturalist.org/observations/149024106 | Whole tree in bloom but small in frame |
| CCF-ALOE-002 | Aloe 'Doran Black' | photo | — | `photos/CCF-ALOE-002.webp (cc-by-sa, qa warn)` | https://commons.wikimedia.org/wiki/File:Aloe_Doran_Black_(17496015042).jpg | Labelled Aloe Doran Black rosette in a pot among other pots |

## Not changed (open questions or rules)

See the PR description, `plant-pilot.md`, for the full list.
