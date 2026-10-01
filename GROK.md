# GROK.md — build Phoenix Yard from this repo

You are building the **Phoenix Yard** digital experience. This file is the contract. If a request conflicts with this file on scope, this file wins unless the user explicitly changes scope.

Gates live in `docs/DECISION_TREE.md`. Words live in `docs/COPY_MAP.md`. Brand: `docs/BRAND.md`. Look: `docs/DUSK.md`.

## The mistake this file exists to prevent

**The house map is the product.** The plan stays on screen from aim through plants. If the first results are a plant list with no house, you missed the spec.

Aiming the house does not turn on a west bed. After aim, **select** the west bed so stamps have a target. That is focus, not a project.

Do not invert the old sand UI. Use dusk tokens. West wash, selected ring, and stamped icons are three different signals.

## Layout

1. **Place** — the plan. Street says Street only. Door notch is tan and readable. Aim and Stamp use the tall map. Quote compresses the map so three plant tiles fit above the fold.
2. **Act** — household row under the lot, then stamps for the selected bed.
3. **Judge** — a 3-up photo strip (Bone · Bloom · Floor), or nothing. Tap a tile for the plant sheet. Do not put why-lines, Latin, or Swap on the strip.

## Walk

1. **Aim.** “Which way does the front face?” N / S / E / W. Writes `front_bearing`. West warms with a dim wash. Next line: `Tap the direction the front door faces.` Primary: `That’s the front.` Then select the west bed and pulse it once.
2. **Stamp.** Pieces: Bed / Pots / Gate / Gravel / Block / **Tree**. Cover: Open / **Canopy** / Eave / Structure. Tree plants a shade tree. Canopy is existing shade (`cover: tree`). Next line names the move. `See the plants` stays disabled until a piece is on, with `Put something on a wall.` beside it. A tap on the dead button repeats that line.
3. **Quote.** Title `West · bed`. Compact map. Next line: `Three plants for this wall. Tap one.` Three equal habit photos above the fold. First visit only: `Bone holds. Bloom flowers. Floor covers.` Tap a tile: medium sheet (grabber, swipe down) with the same plant, still a habit, plus botanical, texture · height, why-line, chips, Swap that job. Tap another marked bed: sheet closes, strip updates. Empty wall: `Put something on a wall.` and Map. No sample plants. Footer: Map + Three others.

Live cards are Layer A + B only (`docs/LAYERS.md`). Layer C stays in JSON and never seats.

## Controls

Filled off-state + 2px border. On-state is pine-fill + pine border. No bevel. No pip on the six-chip row.

Hold a jargon word (Bed, Pots, Gate, Gravel, Block, Tree, Open, Canopy, Eave, Structure, Chew, Bone / Bloom / Floor, Swap Bone) for one sentence. Release hides it. That hold does not fire the tap. Primaries, Start over, N / S / E / W, and the four map walls are tap-only.

First jargon row may show `Hold a word for a line.` once.

One next line per screen, tied to state. It replaces itself. No tour. No coach-mark chain. Pulse only the selected west bed, and only until the first stamp.
