# User stories (v1)

Persona: Phoenix homeowner, phone in the driveway. Does not know R-codes.

Happy path: aim the front door → stamp pieces on the house map → four household answers with the house still visible → tap a marked wall → three plants under the same map.

## Map

**US-40** The yard is a plan on every screen: street at the top, door notch on the front of a flat house, four fat beds. No cartoon roof. Header is the plan glyph + Phoenix Yard.


**US-41** First question: “Which way does the front of your house face?” North / South / East / West. Writes `front_bearing`. West wall uses the warm style. Walls read North / South / East / West. No tap-a-blank-wall orientation.

**US-42** After aim, tap a wall to select it. Selected wall is visually larger. Tray: Bed, Pots, Gate, Gravel, Block, Shade. Stamps draw on that wall. Writes `surfaces` and `cover`.

**US-43** Marks: bed = planted strip, pots = circles, gate = fence break, gravel = stipple, block = thick masonry, tree/eave/cover = shade on that wall only.

**US-44** Household answers do not hide the house.

**US-45** Quote layout is map on top, three cards under it for the selected wall’s active piece. Tapping another marked wall changes the cards. Hiding the house for a full-screen list fails this story.

**US-46** `Three others` rerolls only the open strip. Chew toggle reruns the brief and names what left.

## Climate (unchanged gates)

**US-22** Shade / east / north quotes are not the west trio retitled.

**US-24** Cover shifts climate before the quote.

**US-25** Block wall is its own strip with the block-wall gates.

**US-47** User can stamp **Tree** on any side to plant a shade tree. That writes `surfaces[side] += shade_tree` and opens a tree strip of three tree cards. Existing shade (`cover: tree`) does not open that strip.

