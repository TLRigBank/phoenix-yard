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
  gate: { small: 8, container_scale: 6, medium: 2 },
  pots: { container_scale: 8, small: 4 },
  gravel: { small: 6, medium: 4, container_scale: 2, large: 0 },
};

const STRIP_META = {
  wall: {
    title: "Afternoon wall",
    caption: "Blades, then a flower, then something low. Almost no extra water.",
    room_code: "R1",
    why: "afternoon wall",
    same: "Same as the afternoon wall",
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
  if (room === "wall" || room === "gravel") return false;
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

function passesRoom(card, room, brief) {
  if (!waterAllowed(card, room, brief.care)) return false;
  if (room === "wall") {
    return (
      (card.sun_class === "full" || card.sun_class === "full_plus_reflected") &&
      card.heat_class === "excellent" &&
      !card.afternoon_shade_pref
    );
  }
  if (room === "gate") {
    return !(
      card.spine_hazard ||
      card.pedestrian_avoid ||
      card.spine_class === "jumping" ||
      card.spine_class === "puncture" ||
      card.size_class === "large" ||
      card.size_class === "landmark"
    );
  }
  if (room === "pots") {
    const widthOk = card.width_max_ft == null || card.width_max_ft <= 5;
    const sizeOk = card.container_ok || card.size_class === "container_scale" || card.size_class === "small";
    return sizeOk && widthOk && card.size_class !== "large" && card.size_class !== "landmark";
  }
  if (room === "gravel") {
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
  if (room === "wall" && card.reflected_heat_ok) score += 10;
  score += (SIZE_POINTS[room] && SIZE_POINTS[room][card.size_class]) || 0;
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
  for (const key of ["wall", "gate", "pots", "gravel"]) {
    if (typeof brief.extras[key] !== "boolean") return "extras." + key;
  }
  if (!brief.extras.wall && !brief.extras.gate && !brief.extras.pots && !brief.extras.gravel) {
    return "extras";
  }
  if (brief.project_scale != null) {
    const scales = ["pots", "bed", "path", "yard", "unsure"];
    if (!scales.includes(brief.project_scale)) return "project_scale";
  }
  if (brief.exclude != null) {
    if (typeof brief.exclude !== "object") return "exclude";
    for (const key of ["wall", "gate", "pots", "gravel"]) {
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
  if (room === "wall" && card.reflected_heat_ok) chips.push("Takes afternoon heat");
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
    const grouped = cands.filter((card) => SEATS[room][seat].includes(card.plant_group));
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
    const grouped = cands.filter((card) => SEATS[room][seat].includes(card.plant_group));
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
  const rooms = [];
  if (brief.extras.wall) rooms.push("wall");
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
        wall: brief.extras.wall,
        gate: brief.extras.gate,
        pots: brief.extras.pots,
        gravel: brief.extras.gravel,
      },
      exclude: brief.exclude || {},
      guilds: brief.guilds,
    },
    place_label: PLACE[brief.hot_side],
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
