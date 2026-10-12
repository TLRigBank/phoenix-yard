# GROK.md — build Phoenix Yard from this repo

You are building the **Phoenix Yard** digital experience. This file is the contract. If a request conflicts with this file on scope, this file wins unless the user explicitly changes scope.

Gates live in `docs/DECISION_TREE.md`. Words live in `docs/COPY_MAP.md`. Brand: `docs/BRAND.md`. Look: `docs/DUSK.md`.

## The mistake this file exists to prevent

**The house map is the product.** The plan stays on screen from the moment specification is complete through plants. If the first results are a plant list with no house, you missed the spec.

Specification now begins with short guided questions, not the interactive map. After the opening rounds, the map populates with the results. Selecting a wall opens focused per-wall questions. The map remains the place the user returns to and the place the 3-up quote lives.

Do not invert the old sand UI. Use Lot tokens in `docs/DUSK.md`. West wash, selected ring, and stamped icons are three different signals. Orange is the beacon, not the wall.

## Layout

1. **Place** — the plan. After guided entry, the map is oriented. Street says Street only. Door notch is tan and readable. Quote compresses the map so three plant tiles fit above the fold.
2. **Act** — household flags from the opening questions, then per-wall stamps or question answers for the selected bed.
3. **Judge** — a 3-up photo strip (Bone · Bloom · Floor), or nothing. Tap a tile for the plant sheet. Do not put why-lines, Latin, or Swap on the strip.

## Walk

1. **Guided entry.** Four short screens, one question each, large targets, no map yet:
   - Front faces which way? (N / S / E / W). Writes `front_bearing`.
   - Who is in the yard? (Kids / Dogs / Neither).
   - Water approach? (Low / Weekend / Hobby).
   - Any remaining brief fields (skippable).
   After the last answer, the map appears already oriented, west wash applied, household flags set. Next line: `Tap a wall.`

2. **Per-wall questions.** Selecting a wall opens a short sequence for that wall only:
   - Pieces (Bed, Pots, Gate, Gravel, Block, Tree). More than one can be on. Tap again to turn one off. “Don’t care” clears the set. Next line: `Tap every piece on this wall.`
   - Color mood (Cool / Warm / Neutral / Don’t care).
   - Texture (Swords / Soft / Stone / Don’t care).
   - Growth pattern (Upright / Spreading / Low / Don’t care).
   Color, texture, and growth are one answer each and always skippable. Piece answers write `surfaces` for that wall. When the sequence ends, the quote shows the active piece. If more than one piece is on, a row under the map switches which piece the strip is for.

3. **Quote.** Title `West · bed`. Compact map. Next line: `Three plants for this wall. Tap one.` Three equal habit photos above the fold. First visit only: `Bone holds. Bloom flowers. Floor covers.` Tap a tile: medium sheet (grabber, swipe down) with the same plant, still a habit, plus botanical, texture · height, why-line, chips, Swap that job. After the existing content, one muted optional control: `Sizes · Cox Oct 2026`. Tap expands dated size and retail prices (wholesale × 1.33). No default selection. Multi-wall total appears only after more than one wall is stamped and at least one sheet is opened: muted footer `All walls · $XX`. Tap for plain list. No sales language. Empty wall: `Put something on a wall.` and Map. Footer: Map + Three others.

Live cards are Layer A + B only (`docs/LAYERS.md`). Layer A is the intersection of the prior live deck and plants with at least one priced size on the October 2026 Cox sheet. Layer C stays in JSON and never seats.

## Controls

Filled off-state + 2px border. On-state is pine-fill + pine border. No bevel. No pip on the six-chip row.

Hold a jargon word for one sentence. Release hides it. That hold does not fire the tap. Primaries, Start over, N / S / E / W, and the four map walls are tap-only.

First jargon row may show `Hold a word for a line.` once.

One next line per screen, tied to state. It replaces itself. No tour. No coach-mark chain.

Quoting is a no-pressure secondary offering. It never appears on the strip or primary next lines. Language stays factual and dated.
