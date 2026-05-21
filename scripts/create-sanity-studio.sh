#!/usr/bin/env bash
# create-sanity fails when cwd is under iCloud Documents paths with spaces / special
# apostrophes. Run the CLI from /tmp and pass an absolute --output-path (verified fix).
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="${SANITY_STUDIO_PATH:-$REPO_ROOT/studio-tawazon}"
PROJECT="${SANITY_PROJECT_ID:-cy0u4akg}"
DATASET="${SANITY_DATASET:-production}"

echo ""
echo "sanity:create-studio — running \`sanity init\` from /tmp (workaround for Documents/iCloud paths)."
echo "  Project: $PROJECT  Dataset: $DATASET"
echo "  Output:  $OUT"
echo "  (npm create sanity does not forward flags; use this script instead.)"
echo ""

cd /tmp
# create-sanity is interactive-only and rejects init flags; call sanity init directly.
exec npx --yes sanity@latest init \
  -y \
  --project="$PROJECT" \
  --dataset="$DATASET" \
  --template=clean \
  --typescript \
  --output-path="$OUT"
