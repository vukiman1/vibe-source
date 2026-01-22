#!/usr/bin/env bash
set -euo pipefail

root_dir="$(cd -- "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$root_dir"

print_help() {
  cat <<'EOF'
Usage: scripts/dev-tools.sh [command]

Commands:
  lint            Run eslint with --fix across all packages.
  format-backend  Run Prettier for the backend sources.
  typecheck       Type-check backend and frontend (no emit).
  test-backend    Run backend Jest tests.
  quality         Run lint, then backend formatter.
  help            Show this message.
EOF
}

case "${1:-help}" in
  lint)
    pnpm -r lint -- --fix
    ;;
  format-backend)
    pnpm --filter my-app-backend format
    ;;
  typecheck)
    pnpm --filter my-app-backend type-check
    pnpm --filter frontend type-check
    ;;
  test-backend)
    pnpm --filter my-app-backend test -- --runInBand
    ;;
  quality)
    pnpm -r lint -- --fix
    pnpm --filter my-app-backend format
    ;;
  help|*)
    print_help
    ;;
esac
