# engine/

`match.js` is the v1 matcher. Stages, points, and seat tables are `docs/DECISION_TREE.md`. Face strings are `docs/COPY_MAP.md`. Change both together.

```
node tests/run.js
```

- `hot_side` is echoed as `place_label` and does not filter.
- `extras.wall` may be false. Do not insert a wall strip.
- `exclude[strip]` skips already-shown ids (Three others).
- `guilds: true` is accepted and ignored.

Locked card ids for a full-yard brief are `tests/fixtures/default.json`.
