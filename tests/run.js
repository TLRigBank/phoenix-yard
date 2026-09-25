"use strict";

const path = require("path");
const { match, loadCatalog, KEPT_OFF_LINE, SESSION_TOXIC, MILKWEED_CAUTION } = require("../engine/match");

let failed = 0;
function assert(cond, msg) {
  if (!cond) {
    failed += 1;
    console.error("FAIL " + msg);
  }
}

const BANNED = ["R1", "R3", "R4", "R6", " VL", "west-heat", "chip_pack", "eligible_count", "short_why"];

function walkStrings(value, out) {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) value.forEach((item) => walkStrings(item, out));
  else if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value)) {
      if (key === "room_code") continue;
      walkStrings(item, out);
    }
  }
}

function assertFace(result, label) {
  const strings = [];
  walkStrings(result, strings);
  for (const text of strings) {
    for (const token of BANNED) {
      assert(!text.includes(token), label + " face contains " + token + " in: " + text);
    }
  }
  for (const strip of result.strips) {
    const genera = new Set();
    for (const pick of strip.picks) {
      assert(pick.why_line.length <= 140, label + " why_line " + pick.why_line);
      assert(!Object.prototype.hasOwnProperty.call(pick, "score"), label + " pick has score");
      const genus = pick.botanical_name.split(/\s+/)[0];
      assert(!genera.has(genus), label + " " + strip.id + " repeats genus " + genus);
      genera.add(genus);
    }
    if (strip.picks.length === 3) {
      assert(strip.picks.map((pick) => pick.job).join(",") === "Bone,Bloom,Floor", label + " jobs");
    }
  }
}

function ids(result) {
  const out = {};
  for (const strip of result.strips) out[strip.id] = strip.picks.map((pick) => pick.card_id);
  return out;
}

const catalog = loadCatalog(path.join(__dirname, "..", "data"));
assert(catalog.length === 543, "catalog length " + catalog.length);
assert(new Set(catalog.map((card) => card.card_id)).size === 543, "duplicate card ids");

const bannedNames = [
  "1 head 5'-7'",
  "2 head",
  "3 head",
  "Call for Varieties",
  "Ocotillo Bareroot",
  "Red, Pink, Yellow, White",
  "Pink, Purple, White",
  "Assorted Rose",
];
for (const name of bannedNames) {
  assert(!catalog.some((card) => card.display_name === name), "bad display_name still present: " + name);
}
for (const exact of ["Red", "Gold", "Rose"]) {
  assert(!catalog.some((card) => card.display_name === exact), "color-only display_name " + exact);
}
const names = catalog.map((card) => card.display_name);
assert(new Set(names).size === names.length, "display_name values must be unique");

const defaultBrief = {
  hot_side: "right",
  kids: false,
  chew: false,
  wildlife: true,
  care: "Low",
  extras: { gate: true, pots: true, gravel: true },
  guilds: false,
};
const petsBrief = { ...defaultBrief, chew: true };

const defaultFx = require("./fixtures/default.json");
const petsFx = require("./fixtures/pets_on.json");
const expected = defaultFx.expect.card_ids;

const def = match(defaultBrief, catalog);
const pets = match(petsBrief, catalog);
assert(!def.error, "default match failed " + (def.error || ""));
assert(def.place_label === "Right side", "place label");
assert(def.session_notes.length === 0, "default should not warn about oleander");
assert(JSON.stringify(ids(def)) === JSON.stringify(expected), "default card ids " + JSON.stringify(ids(def)));
assert(JSON.stringify(ids(pets)) === JSON.stringify(expected), "pets card ids changed " + JSON.stringify(ids(pets)));
assert(pets.session_notes[0] === SESSION_TOXIC, "pets session note");
assert(pets.session_notes[0] === petsFx.expect.session_notes[0], "pets fixture note");
assert(JSON.stringify(defaultBrief) === JSON.stringify(defaultFx.brief), "default brief drifted");
assert(JSON.stringify(petsBrief) === JSON.stringify(petsFx.brief), "pets brief drifted");

const byId = new Map(catalog.map((card) => [card.card_id, card]));
for (const [label, result] of [
  ["default", def],
  ["pets", pets],
]) {
  assertFace(result, label);
  assert(result.strips.map((strip) => strip.id).join() === "wall,gate,pots,gravel", label + " order");
  const gate = result.strips.find((strip) => strip.id === "gate");
  assert(gate.kept_off.length === 1 && gate.kept_off[0].line === KEPT_OFF_LINE, label + " kept off");
  for (const pick of gate.picks) {
    assert(pick.spine_class !== "jumping" && pick.spine_class !== "puncture", label + " gate spine " + pick.display_name);
  }
  const gravelBloom = result.strips.find((strip) => strip.id === "gravel").picks[1];
  assert(byId.get(gravelBloom.card_id).texture_body === "Cloud", "gravel bloom is not Cloud");
  for (const strip of result.strips) {
    const groups = strip.picks.map((pick) => byId.get(pick.card_id).plant_group);
    if (groups.length === 3) {
      assert(groups[2] !== groups[0] && groups[2] !== groups[1], label + " floor group " + strip.id + " " + groups.join("/"));
    }
    for (const pick of strip.picks) {
      if (label === "default") {
        assert(byId.get(pick.card_id).water_class === "VL", "default pick not VL " + pick.display_name);
      }
      for (const sub of pick.substitute_ids) {
        const other = byId.get(sub);
        assert(other, "dangling substitute " + sub);
        if (label === "pets") {
          const otherMilk =
            (other.botanical_name || "").includes("Asclepias linaria") ||
            (other.botanical_name || "").includes("Asclepias subulata");
          if (!otherMilk) {
            assert(
              other.toxic_class !== "deadly" && other.toxic_class !== "ingest",
              "pets substitute toxic " + other.display_name
            );
          }
        }
      }
    }
  }
  assert(result.strips[1].picks[0].same_as === "Same as the afternoon wall", "gate bone same_as");
  assert(result.strips[2].picks[0].same_as === "Same as the gate", "pots bone same_as");
}

for (const pick of pets.strips.flatMap((strip) => strip.picks)) {
  const card = byId.get(pick.card_id);
  const milk =
    card.botanical_name.includes("Asclepias linaria") || card.botanical_name.includes("Asclepias subulata");
  if (!milk) {
    assert(card.toxic_class !== "deadly" && card.toxic_class !== "ingest", "pets toxic pick " + card.display_name);
  }
}

const guilds = match({ ...defaultBrief, guilds: true }, catalog);
assert(JSON.stringify(ids(guilds)) === JSON.stringify(ids(def)), "guilds flag must not change v1 picks");

const gateOff = match(
  { ...defaultBrief, extras: { gate: false, pots: true, gravel: false } },
  catalog
);
assert(gateOff.strips.map((strip) => strip.id).join() === "wall,pots", "gate off order");
assert(gateOff.strips.every((strip) => strip.kept_off.length === 0), "kept off only on the gate strip");

const bad = match({ ...defaultBrief, hot_side: "west" }, catalog);
assert(bad.error === "invalid_brief" && bad.field === "hot_side", "invalid hot_side");

function card(overrides) {
  return {
    card_id: "T-1",
    display_name: "Test",
    botanical_name: "Testus one",
    plant_group: "Perennials and Groundcover",
    water_class: "VL",
    heat_class: "excellent",
    sun_class: "full",
    size_class: "small",
    maintenance_level: "low",
    native_class: "sw_us",
    phoenix_winter_fit: "reliable_typical_yard",
    afternoon_shade_pref: false,
    reflected_heat_ok: true,
    container_ok: true,
    width_max_ft: 2,
    height_min_ft: 1,
    height_max_ft: 2,
    spine_hazard: false,
    pedestrian_avoid: false,
    toxic_class: "none",
    spine_class: "none",
    setback_ft: 0,
    needs_support: "none",
    n_fixer: false,
    texture_body: "Stone",
    bloom_colors: ["pink"],
    wildlife: ["bees"],
    substitute_ids: [],
    ...overrides,
  };
}

const toyBrief = {
  hot_side: "front",
  kids: true,
  chew: true,
  wildlife: true,
  care: "Low",
  extras: { gate: true, pots: true, gravel: false },
  guilds: false,
};
const toy = [
  card({
    card_id: "WALL-A",
    display_name: "Bone",
    botanical_name: "Yucca testa",
    plant_group: "Yucca and Allies",
    height_max_ft: 3,
  }),
  card({
    card_id: "MILK",
    display_name: "Desert Milkweed",
    botanical_name: "Asclepias subulata",
    plant_group: "Perennials and Groundcover",
    toxic_class: "ingest",
    wildlife: ["butterflies"],
    substitute_ids: ["OLE", "BLOOD", "INV", "LWATER"],
  }),
  card({
    card_id: "BLOOD",
    display_name: "Blood Flower",
    botanical_name: "Asclepias currasavica",
    plant_group: "Perennials and Groundcover",
    toxic_class: "ingest",
  }),
  card({
    card_id: "OLE",
    display_name: "Oleander",
    botanical_name: "Nerium oleander",
    plant_group: "Flowering Shrubs",
    toxic_class: "deadly",
    size_class: "medium",
    height_max_ft: 6,
  }),
  card({
    card_id: "JUMP",
    display_name: "Jumping Cholla",
    botanical_name: "Cylindropuntia fulgida",
    plant_group: "Cacti",
    spine_class: "jumping",
    spine_hazard: true,
    pedestrian_avoid: true,
    size_class: "large",
    height_max_ft: 8,
  }),
  card({
    card_id: "POKE",
    display_name: "Pokey",
    botanical_name: "Agave poke",
    plant_group: "Agave",
    spine_class: "puncture",
    spine_hazard: true,
    pedestrian_avoid: true,
  }),
  card({
    card_id: "INV",
    display_name: "Purple Fountain Grass",
    botanical_name: "Pennisetum setaceum",
    plant_group: "Ornamental Grasses",
    native_class: "invasive_risk",
    texture_body: "Cloud",
  }),
  card({
    card_id: "LWATER",
    display_name: "Oasis",
    botanical_name: "Oasis extra",
    plant_group: "Flowering Shrubs",
    water_class: "L",
    size_class: "container_scale",
  }),
  card({
    card_id: "POT",
    display_name: "Pot bone",
    botanical_name: "Manfreda testa",
    plant_group: "Other Succulents",
    size_class: "container_scale",
  }),
];

const toyResult = match(toyBrief, toy);
assert(!toyResult.error, "toy match " + (toyResult.error || ""));
assert(toyResult.place_label === "Front side", "toy place");
const toyIds = toyResult.strips.flatMap((strip) => strip.picks.map((pick) => pick.card_id));
assert(!toyIds.includes("OLE"), "oleander returned");
assert(!toyIds.includes("BLOOD"), "blood flower returned");
assert(!toyIds.includes("JUMP"), "jumping cholla seated");
assert(!toyIds.includes("INV"), "invasive seated");
assert(!toyResult.strips.find((strip) => strip.id === "wall").picks.some((pick) => pick.card_id === "LWATER"), "L water on the wall");
const gateToy = toyResult.strips.find((strip) => strip.id === "gate");
assert(gateToy.kept_off[0].line === KEPT_OFF_LINE, "toy kept off");
assert(!gateToy.picks.some((pick) => pick.card_id === "POKE" || pick.card_id === "JUMP"), "spines on toy gate");
const milkPick = toyResult.strips.flatMap((strip) => strip.picks).find((pick) => pick.card_id === "MILK");
assert(milkPick, "milkweed was not seated");
assert(milkPick.caution === MILKWEED_CAUTION && milkPick.chips_plain[0] === MILKWEED_CAUTION, "milkweed caution");
assert(!milkPick.substitute_ids.includes("OLE"), "oleander substitute under veto");
assert(!milkPick.substitute_ids.includes("BLOOD"), "blood flower substitute");
assert(!milkPick.substitute_ids.includes("INV"), "invasive substitute");
assert(!milkPick.substitute_ids.includes("LWATER"), "L water substitute on the wall");

const noWildlife = match({ ...toyBrief, wildlife: false }, toy);
const noWildIds = noWildlife.strips.flatMap((strip) => strip.picks.map((pick) => pick.card_id));
assert(!noWildIds.includes("MILK"), "milkweed kept without wildlife");

const potsOnly = match({ ...toyBrief, kids: false, chew: false, wildlife: false, extras: { gate: false, pots: true, gravel: false } }, toy);
const potIds = potsOnly.strips.flatMap((strip) => strip.picks.map((pick) => pick.card_id));
assert(potIds.includes("LWATER") || potsOnly.strips.some((strip) => strip.id === "pots"), "pots strip exists");
const wallIds = potsOnly.strips.find((strip) => strip.id === "wall").picks.map((pick) => pick.card_id);
assert(!wallIds.includes("LWATER"), "Low care wall accepted water L");

if (failed) {
  console.error(failed + " failed");
  process.exit(1);
}
console.log("ok " + catalog.length + " cards, default strips locked, gates hold");
