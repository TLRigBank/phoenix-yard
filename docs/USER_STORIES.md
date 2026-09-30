# User stories (v1)

Persona: Phoenix homeowner, phone in the driveway. Does not know R-codes.

Happy path: aim the front door → stamp pieces on the house map → four household answers with the house still visible → tap a marked wall → three plant tiles under the same map → tap one tile for the plant sheet.

## Map

**US-40** The yard is a plan on every screen: street at the top, door notch on the front of a flat house, four fat beds. No cartoon roof. Header is the plan glyph + Phoenix Yard.

**US-41** First question: “Which way does the front of your house face?” North / South / East / West. Writes `front_bearing`. West wall uses the warm style. Walls read North / South / East / West. No tap-a-blank-wall orientation.

**US-42** After aim, tap a wall to select it. Selected wall is visually larger. Tray: Bed, Pots, Gate, Gravel, Block, Shade. Stamps draw on that wall. Writes `surfaces` and `cover`.

**US-43** Marks: bed = planted strip, pots = circles, gate = fence break, gravel = stipple, block = thick masonry, tree/eave/cover = shade on that wall only.

**US-44** Household answers do not hide the house.

**US-45** Quote layout is compact map on top, three equal photo tiles under it for the selected wall’s active piece. Tapping another marked wall changes the tiles and closes any open sheet. Hiding the house for a full-screen plant page or a plant list fails this story.

**US-46** `Three others` rerolls only the open strip. Chew toggle reruns the brief and names what left.

**US-47** A quote tile shows photo, job, common name, and at most one household warning. Botanical, why-line, extra chips, and Swap live on the plant sheet.

**US-48** The plant sheet is a medium detent with a grabber. The compact map stays visible. Swipe down or tap the map peek closes the sheet. Swap replaces only that seat and keeps the sheet open.

**US-49** Working controls use a filled off-state and a 2px border. On-state is pine-fill plus a pine border. Map walls are not chips.

**US-51** Hold a jargon control 420ms for one sentence. Release hides it and does not fire the tap. Primaries, compass bearings, and map walls do not hold.

## Climate (unchanged gates)

**US-22** Shade / east / north quotes are not the west trio retitled.

**US-24** Cover shifts climate before the quote.

**US-25** Block wall is its own strip with the block-wall gates.

**US-50** Default look is dusk. West is a dim wash, selected is a pine ring, stamped beds show stamp icons. Cover uses Canopy, not Tree. See the plants is off until a piece is stamped.
