# Contributing

Work on a topic branch. Open a PR. Merge when CI is green.

## Workflow

1. Update `main`.
2. Branch: `feat/*` `fix/*` `docs/*` `ci/*`.
3. One task per PR.
4. `npm run check && npm run build`
5. Conventional Commit, then PR.

Do not commit on `main`.

## Commits

```text
type(scope): imperative summary
```

Types: `feat` `fix` `refactor` `docs` `test` `ci` `build` `chore` `perf` `revert`.

## Required with behavior changes

- `npm run check` and `npm run build` pass
- README (en + zh) updated if usage changed
- `CHANGELOG.md` `[Unreleased]` updated
- No secrets in the diff

See `DESIGN.md` for the visual tokens.
