# Release

```text
PR → CI green → squash merge → CHANGELOG → tag vMAJOR.MINOR.PATCH → smoke the build
```

Tag only from green `main`. A passing build is not a release until `npm run build` has been run on that commit.
