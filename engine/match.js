"use strict";

/**
 * Phoenix Yard matcher. Contract: docs/DECISION_TREE.md and docs/COPY_MAP.md.
 * Change those and this file in the same commit. Never score in the UI.
 */

const fs = require("fs");
const path = require("path");

const TREE_GROUPS = new Set([
  "Desert-Adapted Trees",
  "Ornamental Trees",
  "Palms",
  "Fruit and Nut Trees",
]);

const MILKWEED = ["Asclepias linaria", "Asclepias subulata"];
const WILDLIFE_TAGS = new Set(["hummingbirds", "butterflies", "birds", "bees"]);

const SEATS = {
  wall: {
    A: ["Yucca and Allies", "Agave", "Foliage Shrubs"],
    B: ["Flowering Shrubs", "Perennials and Groundcover", "Vines and Climbers"],
    C: ["Cacti", "Perennials and Groundcover", "Other Succulents", "Aloe"],
  },
  shade: {
    A: ["Yucca and Allies", "Agave", "Foliage Shrubs", "Aloe"],
    B: ["Flowering Shrubs", "Perennials and Groundcover", "Vines and Climbers"],
    C: ["Cacti", "Perennials and Groundcover", "Other Succulents", "Aloe"],
  },
  front: {
    A: ["Yucca and Allies", "Agave", "Foliage Shrubs"],
    B: ["Flowering Shrubs", "Perennials and Groundcover", "Vines and Climbers"],
    C: ["Cacti", "Perennials and Groundcover", "Other Succulents", "Aloe"],
  },
  back: {
    A: ["Yucca and Allies", "Agave", "Foliage Shrubs"],
    B: ["Flowering Shrubs", "Perennials and Groundcover", "Vines and Climbers"],
    C: ["Cacti", "Perennials and Groundcover", "Other Succulents", "Aloe"],
  },
  left: {
    A: ["Yucca and Allies", "Agave", "Foliage Shrubs"],
    B: ["Flowering Shrubs", "Perennials and Groundcover", "Vines and Climbers"],
    C: ["Cacti", "Perennials and Groundcover", "Other Succulents", "Aloe"],
  },
  right: {
    A: ["Yucca and Allies", "Agave", "Foliage Shrubs"],
    B: ["Flowering Shrubs", "Perennials and Groundcover", "Vines and Climbers"],
    C: ["Cacti", "Perennials and Groundcover", "Other Succulents", "Aloe"],
  },
  gate: {
    A: ["Yucca and Allies", "Foliage Shrubs", "Other Succulents"],
    B: ["Perennials and Groundcover", "Flowering Shrubs", "Ornamental Grasses"],
    C: ["Other Succulents", "Perennials and Groundcover", "Ornamental Grasses", "Foliage Shrubs", "Aloe"],
  },
  pots: {
    A: ["Other Succulents", "Yucca and Allies", "Agave", "Aloe", "Foliage Shrubs"],
    B: ["Perennials and Groundcover", "Flowering Shrubs", "Aloe"],
    C: ["Cacti", "Other Succulents", "Perennials and Groundcover", "Aloe"],
  },
  gravel: {
    A: ["Yucca and Allies", "Agave"],
    B: ["Ornamental Grasses", "Perennials and Groundcover"],
    C: ["Cacti", "Other Succulents", "Perennials and Groundcover", "Aloe"],
  },
};

const SIZE_POINTS = {
  wall: { small: 6, medium: 4, container_scale: 2, large: 0 },
  shade: { small: 6, medium: 4, container_scale: 2, large: 0 },
  front: { small: 6, medium: 4, container_scale: 2, large: 0 },
  back: { small: 6, medium: 4, container_scale: 2, large: 0 },
  left: { small: 6, medium: 4, container_scale: 2, large: 0 },
  right: { small: 6, medium: 4, container_scale: 2, large: 0 },
  gate: { small: 8, container_scale: 6, medium: 2 },
  pots: { container_scale: 8, small: 4 },
  gravel: { small: 6, medium: 4, container_scale: 2, large: 0 },
};

const STRIP_META = {
  wall: {
    title: "Afternoon sun",
    caption: "The side that cooks. Blades, then a flower, then something low.",
    room_code: "R1",
    why: "afternoon sun wall",
    same: "Same as the afternoon sun wall",
  },
  shade: {
    title: "Afternoon shade",
    caption: "The opposite wall. Plants that take morning sun and afternoon shade.",
    room_code: "R2",
    why: "afternoon shade wall",
    same: "Same as the afternoon shade wall",
  },
  front: {
    title: "Front",
    caption: "The front bed. Not the roasting wall unless the front is the afternoon sun.",
    room_code: "R-front",
    why: "front bed",
    same: "Same as the front",
  },
  back: {
    title: "Back",
    caption: "The back bed.",
    room_code: "R-back",
    why: "back bed",
    same: "Same as the back",
  },
  left: {
    title: "Left",
    caption: "The left bed.",
    room_code: "R-left",
    why: "left bed",
    same: "Same as the left",
  },
  right: {
    title: "Right",
    caption: "The right bed.",
    room_code: "R-right",
    why: "right bed",
    same: "Same as the right",
  },
  "wall-block": {
    title: "Afternoon sun · block wall",
    caption: "Against the cooking block wall. Reflected heat.",
    room_code: "R1-block",
    why: "block wall in afternoon sun",
    same: "Same as the afternoon sun block wall",
  },
  "shade-block": {
    title: "Afternoon shade · block wall",
    caption: "Against the shade-side block wall. Frost pocket at the base.",
    room_code: "R2-block",
    why: "block wall in afternoon shade",
    same: "Same as the afternoon shade block wall",
  },
  "front-block": {
    title: "Front · block wall",
    caption: "Against the front block wall.",
    room_code: "R-front-block",
    why: "front block wall",
    same: "Same as the front block wall",
  },
  "back-block": {
    title: "Back · block wall",
    caption: "Against the back block wall.",
    room_code: "R-back-block",
    why: "back block wall",
    same: "Same as the back block wall",
  },
  "left-block": {
    title: "Left · block wall",
    caption: "Against the left block wall.",
    room_code: "R-left-block",
    why: "left block wall",
    same: "Same as the left block wall",
  },
  "right-block": {
    title: "Right · block wall",
    caption: "Against the right block wall.",
    room_code: "R-right-block",
    why: "right block wall",
    same: "Same as the right block wall",
  },
  gate: {
    title: "The gate",
    caption: "Safe to brush past.",
    room_code: "R6",
    why: "gate",
    same: "Same as the gate",
  },
  pots: {
    title: "The pots",
    caption: "Small enough for a patio.",
    room_code: "R3",
    why: "pots",
    same: "Same as the pots",
  },
  gravel: {
    title: "Open gravel",
    caption: "Blades, a grass that moves, then something low.",
    room_code: "R4",
    why: "gravel",
    same: "Same as open gravel",
  },
};

const OPPOSITE = { front: "back", back: "front", left: "right", right: "left" };

function oppositeSide(hot) {
  return OPPOSITE[hot];
}

function isBlockRoom(room) {
  return String(room).endsWith("-block");
}

function baseRoom(room) {
  return isBlockRoom(room) ? room.slice(0, -6) : room;
}

function seatsFor(room) {
  return SEATS[baseRoom(room)] || SEATS.wall;
}

function sizesFor(room) {
  return SIZE_POINTS[baseRoom(room)] || SIZE_POINTS.wall;
}

function sideForRoom(room, brief) {
  const base = baseRoom(room);
  if (base === "wall") return brief.hot_side;
  if (base === "shade") return oppositeSide(brief.hot_side);
  if (base === "front" || base === "back" || base === "left" || base === "right") return base;
  if (base === "pots") return brief.pots_side || null;
  if (base === "gravel") return brief.gravel_side || null;
  if (base === "gate") return brief.gate_side || null;
  return null;
}

function coverOf(brief, side) {
  if (!side || !brief.cover) return "none";
  const cover = brief.cover[side];
  return cover === "tree" || cover === "eave" || cover === "structure" ? cover : "none";
}

function blockOf(brief, side) {
  return !!(side && brief.block_wall && brief.block_wall[side]);
}

function shiftClimate(role, cover) {
  if (cover === "none") return role;
  if (role === "sun") return cover === "tree" ? "shade" : "shoulder";
  if (role === "shoulder") return "shade";
  return "shade";
}

function sideRole(hot, side) {
  if (side === hot) return "sun";
  if (side === oppositeSide(hot)) return "shade";
  return "shoulder";
}

function climateOf(room, brief) {
  const side = sideForRoom(room, brief);
  if (!side) return room === "shade" ? "shade" : room === "wall" ? "sun" : null;
  return shiftClimate(sideRole(brief.hot_side, side), coverOf(brief, side));
}

function passesBlock(card, climate) {
  if (climate === "sun") return !!card.reflected_heat_ok && !card.afternoon_shade_pref;
  if (climate === "shade") return card.phoenix_winter_fit === "reliable_including_cold_pockets";
  if (climate === "shoulder") {
    if (card.reflected_heat_ok) return true;
    return card.sun_class === "full_to_part" && !card.afternoon_shade_pref;
  }
  return false;
}

const JOB = { A: "Bone", B: "Bloom", C: "Floor" };
const PLACE = {
  front: "Front side",
  left: "Left side",
  right: "Right side",
  back: "Back side",
};
const KEPT_OFF_LINE = "Kept off the gate: Jumping cholla. Joints that jump.";
const SESSION_TOXIC = "Oleander and sago stay off the whole list.";
const MILKWEED_CAUTION = "Kept for butterflies. Still toxic if eaten.";

function loadCatalog(root) {
  const dir = root || path.join(__dirname, "..", "data");
  const read = (name) => JSON.parse(fs.readFileSync(path.join(dir, name), "utf8"));
  return read("cards_v019_part1.json").concat(read("cards_v019_part2.json"));
}

function genusOf(card) {
  return String(card.botanical_name || "?").split(/\s+/)[0];
}

function isMilkweed(card) {
  const botanical = card.botanical_name || "";
  return MILKWEED.some((name) => botanical.includes(name));
}

function toxicVeto(brief) {
  return !!(brief.kids || brief.chew);
}

function waterAllowed(card, room, care) {
  const water = card.water_class;
  if (water === "M") return false;
  if (water === "VL") return true;
  if (water !== "L") return false;
  const bed = ["wall", "shade", "front", "back", "left", "right", "gravel"];
  if (bed.includes(baseRoom(room))) return false;
  if (room === "pots") return true;
  if (room === "gate") return care === "Weekend" || care === "Hobby";
  return false;
}

function passesGlobal(card, brief) {
  if (card.native_class === "invasive_risk") return false;
  if (card.maintenance_level === "high" && brief.care !== "Hobby") return false;
  if (card.size_class === "landmark" || TREE_GROUPS.has(card.plant_group)) return false;
  if (
    (card.toxic_class === "deadly" || card.toxic_class === "ingest") &&
    toxicVeto(brief) &&
    !(brief.wildlife && isMilkweed(card))
  ) {
    return false;
  }
  return true;
}

function passesSun(card) {
  return (
    (card.sun_class === "full" || card.sun_class === "full_plus_reflected") &&
    card.heat_class === "excellent" &&
    !card.afternoon_shade_pref
  );
}

function passesShade(card) {
  if (card.size_class === "landmark") return false;
  const sun = card.sun_class;
  if (card.afternoon_shade_pref) return true;
  return sun === "full_to_part" || sun === "part_to_full" || sun === "part";
}

function passesShoulder(card) {
  if (card.size_class === "landmark") return false;
  const sun = card.sun_class;
  return sun === "full" || sun === "full_plus_reflected" || sun === "full_to_part" || sun === "part_to_full";
}

function passesClimate(card, climate) {
  if (climate === "sun") return passesSun(card);
  if (climate === "shade") return passesShade(card);
  if (climate === "shoulder") return passesShoulder(card);
  return false;
}

function passesRoom(card, room, brief) {
  if (!waterAllowed(card, room, brief.care)) return false;
  const climate = climateOf(room, brief);
  const house = ["wall", "shade", "front", "back", "left", "right"].includes(baseRoom(room));
  if (house) {
    if (!passesClimate(card, climate)) return false;
    if (isBlockRoom(room) && !passesBlock(card, climate)) return false;
    return true;
  }
  if (room === "gate") {
    const spineOk = !(
      card.spine_hazard ||
      card.pedestrian_avoid ||
      card.spine_class === "jumping" ||
      card.spine_class === "puncture" ||
      card.size_class === "large" ||
      card.size_class === "landmark"
    );
    if (!spineOk) return false;
    if (brief.gate_side && climate && !passesClimate(card, climate)) return false;
    return true;
  }
  if (room === "pots") {
    const widthOk = card.width_max_ft == null || card.width_max_ft <= 5;
    const sizeOk = card.container_ok || card.size_class === "container_scale" || card.size_class === "small";
    if (!(sizeOk && widthOk && card.size_class !== "large" && card.size_class !== "landmark")) return false;
    if (brief.pots_side && climate && !passesClimate(card, climate)) return false;
    if (brief.pots_side && blockOf(brief, brief.pots_side) && !passesBlock(card, climate)) return false;
    return true;
  }
  if (room === "gravel") {
    if (brief.gravel_side && climate) return passesClimate(card, climate);
    return (
      (card.sun_class === "full" ||
        card.sun_class === "full_plus_reflected" ||
        card.sun_class === "full_to_part") &&
      card.size_class !== "landmark"
    );
  }
  return false;
}

function baseScore(card, room, brief) {
  let score = 0;
  if (card.native_class === "sw_us" || card.native_class === "sw_us_mexico") score += 12;
  else if (card.native_class === "mexico" || card.native_class === "baja" || card.native_class === "nw_mexico") {
    score += 6;
  }
  score += card.water_class === "VL" ? 10 : 4;
  const climate = climateOf(room, brief);
  if (climate === "sun" && card.reflected_heat_ok) score += 10;
  if (climate === "shade") {
    if (card.afternoon_shade_pref) score += 12;
    if (card.sun_class === "full_to_part" || card.sun_class === "part_to_full" || card.sun_class === "part") score += 8;
    if (card.sun_class === "full" || card.sun_class === "full_plus_reflected") score -= 6;
  }
  if (climate === "shoulder") {
    if (card.sun_class === "full_to_part") score += 4;
    if (card.afternoon_shade_pref) score += 2;
  }
  score += (sizesFor(room) && sizesFor(room)[card.size_class]) || 0;
  const care = brief.care;
  const maintenance = card.maintenance_level;
  if (care === "Low") score += maintenance === "low" ? 8 : 0;
  else if (care === "Weekend") score += maintenance === "low" ? 4 : maintenance === "moderate" ? 2 : 0;
  else score += maintenance === "low" || maintenance === "moderate" ? 2 : 0;
  if (card.phoenix_winter_fit === "reliable_including_cold_pockets") score += 3;
  else if (card.phoenix_winter_fit === "reliable_typical_yard") score += 2;
  if (brief.wildlife) {
    const tags = new Set((card.wildlife || []).filter((tag) => WILDLIFE_TAGS.has(tag)));
    score += Math.min(6, tags.size * 2);
  }
  if (card.toxic_class === "irritant") score += toxicVeto(brief) ? -8 : -2;
  if (toxicVeto(brief) && brief.wildlife && isMilkweed(card) && (card.toxic_class === "deadly" || card.toxic_class === "ingest")) {
    score += -12;
  }
  return score;
}

function seatBonus(card, room, seat) {
  const height = card.height_max_ft || 0;
  let score = 0;
  if (seat === "C" && height <= 2) score += 6;
  if (room === "gravel" && seat === "A" && height >= 5 && height <= 8) score += 8;
  if (room === "wall" && seat === "A" && height >= 2 && height <= 4) score += 4;
  if ((room === "shade" || room === "front" || room === "back" || room === "left" || room === "right" || isBlockRoom(room)) && seat === "A" && height >= 2 && height <= 4) score += 4;
  return score;
}

function repeatPenalty(card, seat, prior) {
  const seen = prior.some((pick) => pick.card_id === card.card_id);
  if (seen) return seat === "A" ? 0 : -6;
  const genusSeen = prior.some((pick) => genusOf(pick) === genusOf(card));
  return genusSeen ? -8 : 0;
}

function totalScore(card, room, seat, brief, prior) {
  return baseScore(card, room, brief) + seatBonus(card, room, seat) + repeatPenalty(card, seat, prior);
}

function validate(brief) {
  if (!brief || typeof brief !== "object") return "brief";
  if (!PLACE[brief.hot_side]) return "hot_side";
  for (const key of ["kids", "chew", "wildlife", "guilds"]) {
    if (typeof brief[key] !== "boolean") return key;
  }
  if (brief.care !== "Low" && brief.care !== "Weekend" && brief.care !== "Hobby") return "care";
  if (!brief.extras || typeof brief.extras !== "object") return "extras";
  for (const key of ["wall", "gate", "pots", "gravel", "shade", "front", "back", "left", "right"]) {
    if (brief.extras[key] != null && typeof brief.extras[key] !== "boolean") return "extras." + key;
  }
  for (const key of ["wall", "gate", "pots", "gravel"]) {
    if (typeof brief.extras[key] !== "boolean") return "extras." + key;
  }
  const anyRoom =
    ["wall", "shade", "front", "back", "left", "right", "gate", "pots", "gravel"].some((key) => brief.extras[key]) ||
    (brief.block_wall && ["front", "left", "right", "back"].some((side) => brief.block_wall[side]));
  if (!anyRoom) return "extras";
  if (brief.cover != null) {
    if (typeof brief.cover !== "object") return "cover";
    for (const side of ["front", "left", "right", "back"]) {
      if (brief.cover[side] != null && !["none", "tree", "eave", "structure"].includes(brief.cover[side])) {
        return "cover." + side;
      }
    }
  }
  if (brief.block_wall != null) {
    if (typeof brief.block_wall !== "object") return "block_wall";
    for (const side of ["front", "left", "right", "back"]) {
      if (brief.block_wall[side] != null && typeof brief.block_wall[side] !== "boolean") return "block_wall." + side;
    }
  }
  for (const key of ["pots_side", "gravel_side", "gate_side"]) {
    if (brief[key] != null && !PLACE[brief[key]]) return key;
  }
  if (brief.project_scale != null) {
    const scales = ["pots", "bed", "path", "yard", "unsure"];
    if (!scales.includes(brief.project_scale)) return "project_scale";
  }
  if (brief.exclude != null) {
    if (typeof brief.exclude !== "object") return "exclude";
    for (const key of ["wall", "gate", "pots", "gravel", "shade", "front", "back", "left", "right"]) {
      if (brief.exclude[key] != null && !Array.isArray(brief.exclude[key])) return "exclude." + key;
    }
  }
  return null;
}

function heightLabel(card) {
  const max = card.height_max_ft;
  const min = card.height_min_ft;
  if (max == null) return null;
  const num = (n) => (Number.isInteger(n) ? String(n) : String(n));
  if (min != null && min !== max) return num(min) + "–" + num(max) + " ft";
  return "Up to " + num(max) + " ft";
}

function texturePlain(card) {
  const map = {
    Swords: "Blades",
    Cloud: "Cloud",
    Stone: "Mound",
    Gloss: "Leaves",
    Plush: "Wool",
    "Wild stem": "Wild stem",
  };
  return map[card.texture_body] || null;
}

function chipsFor(card, room, brief) {
  const chips = [];
  const veto = toxicVeto(brief);
  const keptMilk = veto && brief.wildlife && isMilkweed(card) && (card.toxic_class === "ingest" || card.toxic_class === "deadly");
  if (keptMilk) chips.push(MILKWEED_CAUTION);
  if (card.toxic_class === "irritant") chips.push("Problem if chewed");
  if (card.spine_class === "jumping") chips.push("Joints that jump — not here");
  else if (card.spine_class === "puncture") chips.push("Spines");
  else if (room === "gate") chips.push("Safe to brush");
  if (room === "pots") chips.push("Fits a pot");
  if (card.water_class === "VL") chips.push("Almost no extra water");
  else if (card.water_class === "L") chips.push("A little extra water");
  if (isBlockRoom(room)) chips.push("Against a block wall");
  if (climateOf(room, brief) === "sun" && card.reflected_heat_ok) chips.push("Takes afternoon heat");
  if (climateOf(room, brief) === "shade") chips.push("Afternoon shade");
  if (["tree", "eave", "structure"].includes(coverOf(brief, sideForRoom(room, brief)))) chips.push("Existing shade");
  if (card.native_class === "sw_us" || card.native_class === "sw_us_mexico") chips.push("Grows here already");
  if (card.n_fixer) chips.push("Feeds the soil");
  if (card.needs_support === "trellis") chips.push("Needs a trellis");
  else if (card.needs_support === "wall") chips.push("Needs a wall");
  if ((card.setback_ft || 0) >= 12) chips.push("Needs room from the house");
  return chips.slice(0, 4);
}

function whyLine(card, room, job, brief) {
  const veto = toxicVeto(brief);
  const parts = [job + " for the " + STRIP_META[room].why + "."];
  if (card.water_class === "L") parts.push("A little extra water.");
  else parts.push("Almost no extra water.");
  const keptMilk = veto && brief.wildlife && isMilkweed(card) && (card.toxic_class === "ingest" || card.toxic_class === "deadly");
  if (keptMilk) parts.push(MILKWEED_CAUTION);
  else if (card.toxic_class === "irritant" && veto) parts.push("Problem if chewed.");
  else if (card.spine_class === "puncture" && room !== "gate") parts.push("Keep it off the path.");
  else if (card.n_fixer) parts.push("Feeds the soil.");
  else if (card.native_class === "sw_us" || card.native_class === "sw_us_mexico") parts.push("Grows here already.");
  const line = parts.join(" ");
  return line.length <= 140 ? line : line.slice(0, 139).trimEnd() + "…";
}

function toPick(card, room, seat, brief, priorRooms) {
  const earlier = priorRooms.find((pick) => pick.card_id === card.card_id);
  return {
    card_id: card.card_id,
    job: JOB[seat],
    display_name: card.display_name,
    botanical_name: card.botanical_name,
    colors: Array.isArray(card.bloom_colors) ? card.bloom_colors : [],
    texture_plain: texturePlain(card),
    height_label: heightLabel(card),
    chips_plain: chipsFor(card, room, brief),
    why_line: whyLine(card, room, JOB[seat], brief),
    same_as: earlier ? STRIP_META[earlier.room].same : null,
    toxic_class: card.toxic_class,
    spine_class: card.spine_class,
    setback_ft: card.setback_ft || 0,
    needs_support: card.needs_support || "none",
    caution:
      toxicVeto(brief) && brief.wildlife && isMilkweed(card) && (card.toxic_class === "ingest" || card.toxic_class === "deadly")
        ? MILKWEED_CAUTION
        : null,
    substitute_ids: substitutesFor(card, room, brief),
  };
}

function substitutesFor(card, room, brief, catalog) {
  const byId = substitutesFor.byId;
  if (!byId) return [];
  const ids = Array.isArray(card.substitute_ids) ? card.substitute_ids : [];
  const out = [];
  for (const id of ids) {
    if (out.length === 4) break;
    const other = byId.get(id);
    if (!other || other.card_id === card.card_id) continue;
    if (!passesGlobal(other, brief) || !passesRoom(other, room, brief)) continue;
    out.push(id);
  }
  return out;
}

function keptOffGate(catalog, brief) {
  const jumping = catalog.filter((card) => card.spine_class === "jumping" && passesGlobal(card, brief));
  if (!jumping.length) return [];
  return [{ display_name: "Jumping cholla", line: KEPT_OFF_LINE }];
}

function excludedIds(brief, room) {
  const list = brief.exclude && Array.isArray(brief.exclude[room]) ? brief.exclude[room] : [];
  return new Set(list);
}

function fillStrip(catalog, brief, room, prior) {
  const blocked = excludedIds(brief, room);
  const pool = catalog.filter(
    (card) => passesGlobal(card, brief) && passesRoom(card, room, brief) && !blocked.has(card.card_id)
  );
  const usedGenus = new Set();
  const usedGroups = [];
  const picks = [];
  const emptyJobs = [];
  for (const seat of ["A", "B", "C"]) {
    let cands = pool.filter((card) => !usedGenus.has(genusOf(card)));
    const grouped = cands.filter((card) => seatsFor(room)[seat].includes(card.plant_group));
    if (grouped.length) cands = grouped;
    if (seat === "C" && usedGroups.length) {
      const different = cands.filter((card) => !usedGroups.includes(card.plant_group));
      if (different.length) cands = different;
    }
    if (room === "gravel" && seat === "A") {
      const short = cands.filter((card) => (card.height_max_ft || 0) <= 8);
      if (short.length) cands = short;
    }
    if (room === "gravel" && seat === "B") {
      const cloud = cands.filter((card) => card.texture_body === "Cloud");
      if (cloud.length) cands = cloud;
    }
    if (!cands.length) {
      emptyJobs.push(JOB[seat]);
      continue;
    }
    const priorIds = new Set(prior.map((pick) => pick.card_id));
    cands.sort((a, b) => {
      const delta = totalScore(b, room, seat, brief, prior) - totalScore(a, room, seat, brief, prior);
      if (delta) return delta;
      const reuse = (priorIds.has(a.card_id) ? 0 : 1) - (priorIds.has(b.card_id) ? 0 : 1);
      if (reuse) return reuse;
      return a.card_id < b.card_id ? -1 : a.card_id > b.card_id ? 1 : 0;
    });
    const best = cands[0];
    picks.push(toPick(best, room, seat, brief, prior));
    prior.push({
      card_id: best.card_id,
      room,
      botanical_name: best.botanical_name,
    });
    usedGenus.add(genusOf(best));
    usedGroups.push(best.plant_group);
  }
  const meta = STRIP_META[room];
  const shown = picks.map((pick) => pick.card_id);
  return {
    id: room,
    title: meta.title,
    caption: meta.caption,
    room_code: meta.room_code,
    picks,
    empty_jobs: emptyJobs,
    kept_off: room === "gate" ? keptOffGate(catalog, brief) : [],
    ghosts: [],
    reroll_available: canReroll(catalog, brief, room, shown),
  };
}

function canReroll(catalog, brief, room, shown) {
  if (shown.length < 3) return false;
  const nextExclude = Array.from(new Set([...(brief.exclude && brief.exclude[room] ? brief.exclude[room] : []), ...shown]));
  const probe = { ...brief, exclude: { ...(brief.exclude || {}), [room]: nextExclude } };
  const blocked = excludedIds(probe, room);
  const pool = catalog.filter(
    (card) => passesGlobal(card, brief) && passesRoom(card, room, brief) && !blocked.has(card.card_id)
  );
  const genera = new Set();
  let seats = 0;
  for (const seat of ["A", "B", "C"]) {
    let cands = pool.filter((card) => !genera.has(genusOf(card)));
    const grouped = cands.filter((card) => seatsFor(room)[seat].includes(card.plant_group));
    if (grouped.length) cands = grouped;
    if (!cands.length) return false;
    genera.add(genusOf(cands[0]));
    seats += 1;
  }
  return seats === 3;
}

function match(brief, catalog) {
  const problem = validate(brief);
  if (problem) return { error: "invalid_brief", field: problem };
  if (!Array.isArray(catalog)) return { error: "match_failed" };
  substitutesFor.byId = new Map(catalog.map((card) => [card.card_id, card]));
  const hot = brief.hot_side;
  const rooms = [];
  const roleOn = (side) =>
    !!(
      brief.extras[side] ||
      (side === "front" && brief.extras.front) ||
      (side === "back" && brief.extras.back) ||
      (side === "left" && brief.extras.left) ||
      (side === "right" && brief.extras.right)
    );
  const wantWall = !!(
    brief.extras.wall ||
    ["front", "back", "left", "right"].some((side) => brief.extras[side] && sideRole(hot, side) === "sun")
  );
  const wantShade = !!(
    brief.extras.shade ||
    ["front", "back", "left", "right"].some((side) => brief.extras[side] && sideRole(hot, side) === "shade")
  );
  if (wantWall) rooms.push("wall");
  if (wantShade) rooms.push("shade");
  if (brief.extras.front && sideRole(hot, "front") === "shoulder") rooms.push("front");
  if (brief.extras.back && sideRole(hot, "back") === "shoulder") rooms.push("back");
  if (brief.extras.left && sideRole(hot, "left") === "shoulder") rooms.push("left");
  if (brief.extras.right && sideRole(hot, "right") === "shoulder") rooms.push("right");
  for (const side of ["front", "left", "right", "back"]) {
    if (!blockOf(brief, side)) continue;
    const role = sideRole(hot, side);
    const id = role === "sun" ? "wall-block" : role === "shade" ? "shade-block" : side + "-block";
    if (!rooms.includes(id)) rooms.push(id);
  }
  if (brief.extras.gate) rooms.push("gate");
  if (brief.extras.pots) rooms.push("pots");
  if (brief.extras.gravel) rooms.push("gravel");
  const prior = [];
  const strips = rooms.map((room) => fillStrip(catalog, brief, room, prior));
  return {
    brief_echo: {
      hot_side: brief.hot_side,
      project_scale: brief.project_scale || null,
      kids: brief.kids,
      chew: brief.chew,
      wildlife: brief.wildlife,
      care: brief.care,
      extras: {
        wall: !!brief.extras.wall,
        shade: !!brief.extras.shade,
        front: !!brief.extras.front,
        back: !!brief.extras.back,
        left: !!brief.extras.left,
        right: !!brief.extras.right,
        gate: brief.extras.gate,
        pots: brief.extras.pots,
        gravel: brief.extras.gravel,
      },
      block_wall: brief.block_wall || {},
      cover: brief.cover || {},
      pots_side: brief.pots_side || null,
      gravel_side: brief.gravel_side || null,
      gate_side: brief.gate_side || null,
      exclude: brief.exclude || {},
      guilds: brief.guilds,
    },
    place_label: PLACE[brief.hot_side],
    opposite_label: PLACE[oppositeSide(brief.hot_side)],
    session_notes: toxicVeto(brief) ? [SESSION_TOXIC] : [],
    strips,
  };
}

module.exports = {
  match,
  loadCatalog,
  passesGlobal,
  passesRoom,
  KEPT_OFF_LINE,
  SESSION_TOXIC,
  MILKWEED_CAUTION,
};
