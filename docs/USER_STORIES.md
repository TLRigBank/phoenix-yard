# User stories (v1)

Persona: Phoenix homeowner, phone in the driveway, does not know R-codes.

Happy path: tap afternoon wall → four questions → keep Gate/Pots/Gravel → three on the wall → Next strip → optional chew toggle.

## P0

**US-00** As a homeowner I tap the wall that cooks so the first room is that strip.  
AC: House shows Front/Left/Right/Back. Tapped side labeled Afternoon sun. Payload `hot_side` + `rooms.R1`. Never shows R1 or west.

**US-01** Copy says four short questions then three plants. Primary: That’s the hot wall.

**US-10** Kids question with consequence line. Writes `kids`, `toxic_veto ||= kids`.

**US-11** Chew question. Names sago and oleander leaving. Writes `chew`, `toxic_veto`.

**US-12** Wildlife. Default yes. Milkweed exception only if wildlife and toxic_veto.

**US-13** Time: Almost none / Weekends / It’s a hobby → care Low/Weekend/Hobby.

**US-14** Back preserves hot_side and prior answers.

**US-20** Gate, Pots, Gravel on the same house, default on. Wall always remains.

**US-30** First results strip is Afternoon wall. At most three cards Bone/Bloom/Floor. No other strips. No scores.

**US-31** Face uses copy map. Engine strings never render.

**US-32** Repeat card_id stamped Same as {prior strip}.

**US-33** Next — {next title}. Last strip: That’s the yard.

**US-34** Chew control on Results reruns match and banners a diff.

**US-35** Empty job is a sentence. Zero picks is a room sentence. No catalog.

**US-40** UI posts brief. Engine returns strips. Client does not filter 543 rows.

**US-41** Copy map owns words.

**US-50** Defaults: kids no, chew no, wildlife yes, care Low, extras on, feeling none.

**US-51** Engine failure → human sentence + back to house.

**US-90** See `docs/NOT_V1.md`.

## P1

**US-36** Card sheet: botanical, toxic who, spine, setback if >0, support, up to 4 substitutes that still pass the room.

**US-37** Plain list by strip. Footer if kids/chew: hidden deadly/ingest.

**US-42** Optional guilds flag; UI prints caption only.

**US-52** 44px targets, 16px type, AA, questions as buttons.

## Optional engagement (Phase 3)

**US-60** House spot checks when a strip is finished this session.  
**US-62** Chew-on may show one greyed deadly/ingest ghost on the gate.  
**US-63** localStorage or querystring save. No account.
