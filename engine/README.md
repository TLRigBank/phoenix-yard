# engine/

`match.js` is the v1 matcher. Stages, points, and seat tables are `docs/DECISION_TREE.md`. Face strings are `docs/COPY_MAP.md`. Change both together.

```
node tests/run.js
```

`guilds: true` is accepted and ignored. `hot_side` is echoed as `place_label` and does not filter.

Do not retune weights to recreate the old prototype sketch. Locked card ids are `tests/fixtures/default.json`.
