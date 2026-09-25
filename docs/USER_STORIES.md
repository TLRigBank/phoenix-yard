# User stories (v1)

Persona: Phoenix homeowner, phone in the driveway, does not know R-codes.

Happy path: tap afternoon wall **for orientation** → choose project scale → four household questions → confirm rooms (wall may be off) → three plants for the first **on** strip → Next strip → Three others allowed on each strip → That’s the yard.

## P0

**US-00** As a homeowner I tap the wall that cooks so the app knows which side is afternoon sun.  
AC: House shows Front/Left/Right/Back. Tapped side labeled Afternoon sun. Payload `hot_side` only. Results may echo `Right side · afternoon sun`. Never shows R1 or west. Tapping a side does **not** turn `extras.wall` on.

**US-01** After the tap, primary action is “That’s the afternoon side.” Copy says the next screen is what they are planting, not three plants for that wall.

**US-02** Project scale screen. Five choices: Pots / One bed / Gate and path / Whole yard / Not sure. Writes `project_scale` and default `extras` from `GROK.md`. Pots and path leave the wall off.

**US-10** Kids question. Writes `kids`. `toxic_veto` if yes.

**US-11** Chew question. Names sago and oleander leaving. Writes `chew`.

**US-12** Wildlife. Default yes. Milkweed exception only if wildlife and toxic_veto.

**US-13** Time: Almost none / Weekends / It’s a hobby → Low / Weekend / Hobby.

**US-14** Back preserves `hot_side`, `project_scale`, and answers. Back from rooms returns to the last question.

**US-15** An answer tap selects and advances.

**US-20** Rooms on the same house: Afternoon sun, Afternoon shade, Front, Back, Gate, Pots, Gravel. Yard scale turns the four sides on. Sun and shade must use different plant filters.

**US-22** Shade strip plants must be shade-pref or `full_to_part` / part sun. They must not be the sun trio retitled.

**US-23** If the tapped side is Front, turning Front on quotes the sun strip once, not twice. The back becomes the shade strip.


**US-21** If every room is off, do not call match. Keep the person on the rooms screen with “Turn on at least one piece.”

**US-30** First results strip is the first **on** room in order wall → gate → pots → gravel. If wall is off, do not show Afternoon wall. At most three cards. No scores. Side label still visible.

**US-31** Face uses the copy map. Engine strings never render. “Takes afternoon heat” only when the current strip is the wall.

**US-32** Repeat card_id stamped with the same-as line.

**US-33** Next uses the copy-map button. Last strip: That’s the yard.

**US-34** Chew control reruns match. Banner from the copy map.

**US-35** Empty job is a sentence. No catalog.

**US-38** Gate strip, when present, shows the jumping-cholla kept-off line.

**US-39** Kids or chew: session line about oleander and sago.

**US-40** UI calls `match`. Client does not filter 543 rows.

**US-41** Copy map owns words. Decision tree owns points.

**US-45** Three others. On a strip with `reroll_available`, button “Three others for this strip.” Sends the current three `card_id`s in `exclude[strip]`. New trio must not reuse those ids. Gates still apply. “Back to this strip’s first set” clears that strip’s exclude list only.

**US-46** If reroll cannot fill three seats, show the seats it can plus empty-job sentences. Hide Three others when `reroll_available` is false.

**US-50** Questions start unset except wildlife Yes.

**US-51** Engine failure → human sentence + back to rooms.

**US-52** 44px targets, 16px body.

**US-63** localStorage of brief + exclude. No account.

**US-90** See `docs/NOT_V1.md`.

## P1

**US-36** Card sheet with gated substitutes.

**US-37** Share list by strip.

**US-42** `guilds` ignored in v1.

## Later

**US-60** House checks when a strip is finished.  
**US-62** Optional greyed near-miss. Not a substitute for the jumping-cholla line.
