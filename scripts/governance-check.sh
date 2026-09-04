#!/usr/bin/env bash
set -euo pipefail
fail=0
branch=$(git branch --show-current)
if [[ "$branch" == "main" || "$branch" == "master" ]]; then
  echo "BLOCK: work must happen on a topic branch (current: $branch)"
  fail=1
fi
if git diff --check; then :; else
  echo "BLOCK: whitespace errors found"
  fail=1
fi
if (( fail )); then exit 1; fi
echo "PASS: governance checks"
