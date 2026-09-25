# Build plan

## Phases

| Phase | Goal | Exit |
|---|---|---|
| 0 | Engine: brief → strips JSON | Fixtures `default` vs `pets_on` differ; jumping cholla not on gate |
| 1 | v02 screens call match | Driveway: tap hot wall, Low, three live names |
| 2 | Banner, empty seats, card sheet, list | Chew flip names what left |
| 3 | House checks, near-miss ghost, local save | No account |
| 4 | Oleander titles, AA, 20 fixtures | Nobody asks what R1 means |

One builder ~3 weeks. Two people 8–10 days after engine exists.

## Work IDs

- **W0.1** Load catalog parts, high-confidence only (already slim).
- **W0.2** Apply `docs/COPY_MAP.md`.
- **W0.3** Map brief → rooms + toxic_veto + care flags.
- **W0.4** Gates + room filter using `toxic_class` and `spine_class`.
- **W0.5** Score + slots + genus lock + Cloud pin on R4 B.
- **W0.6** Guild flag default false.
- **W0.7** `POST /match` or in-process; commit `tests/fixtures/default.json` and `pets_on.json`.
- **W1.1–W1.5** App shell from `prototype/index.html`, house, questions, wire match, one-strip results.
- **W2.1–W2.5** same-as, chew diff, empty seats, card sheet, share list.
- **W3.1–W3.3** planted checks, ghosts, localStorage.
- **W4.1** Fix Nerium/Thevetia `display_name` in data (not “Pink, Red, White”).
- **W4.2** 44px targets, 16px type, contrast, match_failed sentence.
- **W4.3** ≥20 fixture briefs.

## Risks

- UI re-implements filters → one match function only.
- 18-card feed returns → Results renders one strip.
- Oleander/sago on chew brief → `pets_on` fixture.
- Jumping cholla on gate → `spine_class == jumping` fails R6.
- Scope creep → `docs/NOT_V1.md`.
