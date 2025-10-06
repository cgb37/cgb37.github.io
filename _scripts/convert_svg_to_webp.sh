#!/usr/bin/env bash
# convert_svg_to_webp.sh
# Convert SVG hero and thumb images to WebP using ImageMagick, creating two sizes: 1920x1080 (jumbo) and 320x180 (thumb).
# Usage: ./_scripts/convert_svg_to_webp.sh
# Prompts for the source SVG path and converts to jumbo and thumb WebP files.

set -euo pipefail
IFS=$'\n\t'

# Change to the repository root directory (parent of _scripts/)
cd "$(dirname "$0")/.."

function echo_err() { echo "$@" 1>&2; }

# Prompt the user for the source SVG path (example: images/posts/svg/2025-10-06-... .svg)
SVG_PATH="${1:-}"
if [ -z "$SVG_PATH" ]; then
  echo "Enter the path to the source SVG (example: images/posts/svg/2025-10-06-automating-application-management-macos-scheduled-app-closing.svg):"
  read -r SVG_PATH
fi

if [ ! -f "$SVG_PATH" ]; then
  echo_err "SVG not found at: $SVG_PATH"
  exit 1
fi

# Derive basename (strip directory and extension)
BASENAME=$(basename "$SVG_PATH")
BASENAME="${BASENAME%.*}"

# Output directories
JUMBO_DIR="images/posts/jumbo"
THUMB_DIR="images/posts/thumb"

# Ensure output directories exist
mkdir -p "$JUMBO_DIR" "$THUMB_DIR"

SVG_JUMBO="$SVG_PATH"
JUMBO_OUTPUT="${JUMBO_DIR}/${BASENAME}-jumbo.webp"
THUMB_OUTPUT="${THUMB_DIR}/${BASENAME}-thumb.webp"

JUMBO_WIDTH=1920
JUMBO_HEIGHT=1080
THUMB_WIDTH=320
THUMB_HEIGHT=180
QUALITY=100

# Check for ImageMagick (convert command)
if ! command -v convert >/dev/null 2>&1; then
  echo_err "ImageMagick is not installed. On macOS you can install it with Homebrew:"
  echo_err "  brew install imagemagick"
  echo_err "Would you like to attempt to install it now? (y/N)"
  read -r REPLY
  if [[ "$REPLY" =~ ^[Yy]$ ]]; then
    if command -v brew >/dev/null 2>&1; then
      echo "Installing imagemagick via brew..."
      brew install imagemagick
    else
      echo_err "Homebrew not found. Install Homebrew first: https://brew.sh/"
      exit 1
    fi
  else
    echo_err "Aborting: ImageMagick is required to run this script."
    exit 1
  fi
fi

# Verify SVG exists
if [ ! -f "$SVG_JUMBO" ]; then
  echo_err "SVG source not found: $SVG_JUMBO"
  echo_err "Please ensure the SVG exists or pass correct base-dir/date/slug arguments."
  exit 1
fi

# Convert: Use ImageMagick convert to rasterize SVG and output WebP.
# Note: -resize resizes the image to the given width/height, preserving aspect ratio if one dimension is 0.

echo "Converting $SVG_JUMBO -> $JUMBO_OUTPUT (1920x1080, quality=$QUALITY)"
# For high-quality rasterization from SVG, use -resize then -quality
convert "$SVG_JUMBO" -resize ${JUMBO_WIDTH}x${JUMBO_HEIGHT} -quality $QUALITY "$JUMBO_OUTPUT"

echo "Converting $SVG_JUMBO -> $THUMB_OUTPUT (320x180, quality=$QUALITY)"
convert "$SVG_JUMBO" -resize ${THUMB_WIDTH}x${THUMB_HEIGHT} -quality $QUALITY "$THUMB_OUTPUT"

echo "Done. Outputs:"
echo "  $JUMBO_OUTPUT"
echo "  $THUMB_OUTPUT"

exit 0
