#!/bin/bash
set -e

REPO="$(cd "$(dirname "$0")" && pwd)"
APP="$REPO/react-app"

echo "→ Removing old vanilla site assets..."
rm -rf "$REPO/css" "$REPO/js" "$REPO/style.css" "$REPO/images" "$REPO/index.html" "$REPO/assets"

echo "→ Installing dependencies..."
cd "$APP"
npm install

echo "→ Building React app..."
npm run build

echo "✓ Done — repo root is ready for GitHub Pages."
