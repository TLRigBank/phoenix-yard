# Live layers — Phoenix Yard catalog

543 cards stay in JSON. The matcher only seats **A + B**. C is dark.

Source: Three Timbers Best Sellers + HOA frequency + contractor staples, mapped to CCF ids. Sales data is merchandising, not POS.

## Layer A — live deck (seat these)

One form per plant people actually buy. ~70 cards now in CCF + 6 market gaps to add.

### Shade trees
| id | name |
|---|---|
| CCF-DTRE-010 | Desert Museum palo verde |
| CCF-DTRE-012 | Foothill palo verde |
| CCF-DTRE-009 | Blue palo verde |
| CCF-DTRE-027 | Native / velvet mesquite |
| CCF-DTRE-024 | Chilean mesquite |
| CCF-DTRE-019 | Ironwood |
| CCF-DTRE-017 | Desert willow |
| CCF-DTRE-004 | Sweet acacia |
| CCF-DTRE-018 | Fern of the desert |
| CCF-DTRE-020 | Texas ebony |
| CCF-OTRE-025 | Red Push pistache |

### Bone
| id | name |
|---|---|
| CCF-YUCC-010 | Red yucca |
| CCF-YUCC-003 | Ocotillo |
| CCF-YUCC-014 | Banana yucca |
| CCF-YUCC-016 | Soaptree yucca |
| CCF-YUCC-027 | Beaked yucca |
| CCF-AGAV-054 | Parry’s agave |
| CCF-AGAV-082 | Weber / smooth-edge agave |
| CCF-AGAV-050 | Whale’s tongue |
| CCF-AGAV-023 | Desert agave |
| CCF-CACT-005 | Saguaro |
| CCF-CACT-019 | Golden barrel |
| CCF-CACT-031 | Fishhook barrel |
| CCF-CACT-055 | Beavertail |
| CCF-CACT-020 | Native hedgehog |
| CCF-CACT-022 | Claret cup |

### Bloom
| id | name |
|---|---|
| CCF-FSHB-039 | Arizona yellow bells |
| CCF-FSHB-003 | Desert honeysuckle |
| CCF-FSHB-010 | Fairy duster |
| CCF-FSHB-006 | Mexican bird of paradise |
| CCF-FSHB-007 | Red bird of paradise |
| CCF-FSHB-020 | Chuparosa |
| CCF-PERN-054 | Autumn sage |
| CCF-PERN-039 | Parry’s penstemon |
| CCF-PERN-038 | Firecracker penstemon |
| CCF-PERN-049 | Desert ruellia |
| CCF-PERN-007 | Desert marigold |
| CCF-PERN-057 | Globemallow |
| CCF-PERN-035 | Blackfoot daisy |
| CCF-PERN-004 | Desert milkweed |
| CCF-PERN-062 | Gooding’s verbena |
| CCF-PERN-032 | Purple trailing lantana |

### Floor / hedge
| id | name |
|---|---|
| CCF-PERN-016 | Trailing indigo |
| CCF-GRAS-009 | Deer grass |
| CCF-GRAS-004 | Regal Mist muhly |
| CCF-GRAS-006 | Pine muhly |
| CCF-LSHB-021 | Sugar bush |
| CCF-PERN-045 | Trailing rosemary |
| CCF-OSUC-034 | Texas tuberose (pots) |
| CCF-LSHB-001 | Low Boy acacia |

### Add to A (sell in Phoenix, missing from CCF)
Dodonaea viscosa (green hopseed) · Leucophyllum frutescens (Texas sage) · Simmondsia chinensis (jojoba) · Larrea tridentata (creosote) · Bougainvillea ‘Torch Glow’ · Encelia farinosa (brittlebush)

Do not add hopseed as a cover-tree. It is a hedge piece.

## Layer B — swap only

Same plant, different color or size. Matcher may replace one A seat with its B sibling.

| A | B |
|---|---|
| Red yucca | CCF-YUCC-011 Yellow yucca |
| Desert willow | CCF-DTRE-015 Bubbalicious, CCF-DTRE-016 Sweet Bubba |
| Yellow bells | CCF-FSHB-036 Bells of Fire, CCF-FSHB-037 Orange Jubilee, CCF-FSHB-038 Sparky |
| Fairy duster | CCF-FSHB-009 Baja fairy duster |
| Red bird of paradise | CCF-FSHB-008 yellow form |
| Trailing lantana | CCF-PERN-033 white trailing; bush lantana CCF-PERN-027 Dallas Red, CCF-PERN-029 New Gold |
| Weber agave | CCF-AGAV-080 Arizona Star only if a habit photo exists |
| Parry agave | CCF-AGAV-053 artichoke |
| Chilean mesquite | CCF-DTRE-021 Cooperi, CCF-DTRE-023 Fuente |
| Desert Museum | CCF-DTRE-011 Sonoran Emerald |
| Beavertail | CCF-CACT-056 Beaverita |
| Hedgehog | CCF-CACT-021 strawberry |
| Muhly | CCF-GRAS-005 White Cloud |
| Rosemary | CCF-PERN-046 Tuscan Blue |
| Red Push | CCF-OTRE-026 Chinese pistache, CCF-OTRE-027 mastic |

## Layer C — archive (dark)

Everything else. Especially:

- Most remaining Agave / Aloe / Mammillaria / Gymnocalycium / Astrophytum
- Boxwood, nandina, photinia, pittosporum, privet, euonymus
- Oleander (toxic; sells, still C)
- Ficus nitida, Italian cypress (sell, fail our tree gates)
- Ruellia brittoniana / Katie (invasive-risk cousin of desert ruellia)
- Live oak as a default Phoenix west-wall tree
- Jumping cholla stays in JSON for the **gate veto**, not as a live pick

## Matcher rule

```
live = A
swap_pool = B keyed by A id
C never enters climate pool
```

`pool_size` counts A+B that pass the room, not 543.

## Do not

- Promote a C card because it has a photo
- Promote ficus or oleander because they are on a bestseller page
- Keep 8 lantana colors in A
