# User stories (v1)

Persona: Phoenix homeowner, phone in the driveway, does not know R-codes.

Happy path: tap afternoon wall → four questions, one tap each → keep Gate/Pots/Gravel → three on the wall, with the side still named → next strip → last button is the whole yard → optional chew toggle, which may change nothing and must say so.

## P0

**US-00** As a homeowner I tap the wall that cooks so the first room is that strip.  
AC: House shows Front/Left/Right/Back. Tapped side labeled Afternoon sun. Payload `hot_side`. Results echo `Right side · afternoon sun` (or whichever side). Never shows R1, west, or a compass.

**US-01** Copy says four short questions then three plants. Primary: That’s the hot wall.

**US-10** Kids question with a consequence line about plants that can make a child very sick. Does not mention cholla. Writes `kids`. `toxic_veto` if yes.

**US-11** Chew question. Names sago and oleander leaving the list. Says aloe stays, marked if they chew. Writes `chew`.

**US-12** Wildlife. Default yes, so Next accepts it without a second tap. Milkweed exception only if wildlife and toxic_veto, and the card carries the caution line.

**US-13** Time: Almost none / Weekends / It’s a hobby → care Low/Weekend/Hobby. Hint matches the water table (weekends may add water L at the gate or in a pot).

**US-14** Back preserves `hot_side` and prior answers. Back from the pieces screen opens the last question, not question 1.

**US-15** An answer tap selects and advances. Next remains for a default that is already selected.

**US-20** Gate, Pots, Gravel on a row under the house, default on. They do not cover the back wall. Wall always remains.

**US-30** First results strip is Afternoon wall. At most three cards Bone/Bloom/Floor. No other strips yet. No scores. Side label visible.

**US-31** Face uses the copy map, including height and texture. Engine strings never render. “Takes afternoon heat” only on the wall.

**US-32** Repeat card_id stamped with the copy-map same-as line. Default brief: Red Yucca on the gate, Texas Tuberose in the pots.

**US-33** Next uses the copy-map button. Last strip: That’s the yard, a summary of every strip’s three names, not a wrap.

**US-34** Chew control reruns match on the whole brief and banners a diff using the copy map. If nothing left, it says the strip was already safe and names oleander and sago. It does not remove a cactus for having spines.

**US-35** Empty job is a sentence. Zero picks is a room sentence. No catalog.

**US-38** Gate strip shows `Kept off the gate: Jumping cholla. Joints that jump.`

**US-39** When kids or chew is on, one session line: oleander and sago stay off the whole list.

**US-40** UI calls `match`. Engine returns strips. Client does not filter 543 rows.

**US-41** Copy map owns words. Decision tree owns points.

**US-50** Questions start unset except wildlife Yes. Care, kids, and chew require a tap.

**US-51** Engine failure → human sentence + back to house.

**US-52** 44px targets, 16px body, questions as buttons. Part of the first driveway build, not a later pass.

**US-63** localStorage save of the brief. Refresh keeps the wall and the answers. No account.

**US-90** See `docs/NOT_V1.md`.

## P1

**US-36** Card sheet: botanical, height, toxic who, spine, setback if > 0, support, up to 4 substitutes that still pass the room. The response has already dropped illegal substitutes.

**US-37** Plain list by strip for sharing. Footer if kids or chew: the oleander and sago line.

**US-42** `guilds` may be sent. v1 ignores it. UI prints no guild score.

## Later

**US-60** House spot checks when a strip is finished this session.  
**US-62** One greyed near-miss is optional. It is not a substitute for the jumping-cholla line, which ships with the gate.
