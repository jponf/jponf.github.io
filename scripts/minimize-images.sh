#!/bin/zsh

# Scale images so width does not exceed MAX_W and height does not exceed MAX_H.
# If a dimension exceeds its limit, the image is scaled so that dimension
# matches the limit exactly (aspect ratio preserved).
# Outputs <name>.min.png next to each source image.

if [[ -z "$1" ]]; then
    echo "Usage: $0 <source-directory>" >&2
    exit 1
fi

if [[ ! -d "$1" ]]; then
    echo "Error: '$1' is not a directory" >&2
    exit 1
fi

SOURCE_DIR="$1"
MAX_W=256
MAX_H=50

for f in "$SOURCE_DIR"/*.png; do
    # Skip already-minimized files
    [[ "$(basename "$f")" == *.min.png ]] && continue

    w=$(sips -g pixelWidth "$f" 2>/dev/null | tail -1 | awk '{print $2}')
    h=$(sips -g pixelHeight "$f" 2>/dev/null | tail -1 | awk '{print $2}')

    # Build output path: image.min.png
    base="${f%.png}"
    out="${base}.min.png"
    echo "${base} -> ${out}"

    # Already within bounds — copy as-is
    if (( w <= MAX_W && h <= MAX_H )); then
        cp "$f" "$out"
        echo "COPY  $(basename "$f") ${w}x${h} → $(basename "$out")"
        continue
    fi

    # Determine which dimension(s) need scaling
    needs_w=0
    needs_h=0
    (( w > MAX_W )) && needs_w=1
    (( h > MAX_H )) && needs_h=1

    if (( needs_w && needs_h )); then
        # Both exceed — use the more restrictive scale factor
        # Compare cross-products to avoid floating point: MAX_W*w vs MAX_H*h
        # If MAX_W*h < MAX_H*w, width is more restrictive
        pw=$(echo "$MAX_W * $h" | bc)
        ph=$(echo "$MAX_H * $w" | bc)
        if (( pw < ph )); then
            sips --resampleWidth "$MAX_W" --out "$out" "$f" >/dev/null 2>&1
        else
            sips --resampleHeight "$MAX_H" --out "$out" "$f" >/dev/null 2>&1
        fi
    elif (( needs_w )); then
        # Only width exceeds — scale width to MAX_W
        sips --resampleWidth "$MAX_W" --out "$out" "$f" >/dev/null 2>&1
    else
        # Only height exceeds — scale height to MAX_H
        sips --resampleHeight "$MAX_H" --out "$out" "$f" >/dev/null 2>&1
    fi

    # Verify actual output dimensions
    ow=$(sips -g pixelWidth "$out" 2>/dev/null | tail -1 | awk '{print $2}')
    oh=$(sips -g pixelHeight "$out" 2>/dev/null | tail -1 | awk '{print $2}')

    echo "${ow}"

    echo "DONE  $(basename "$f") ${w}x${h} → $(basename "$out") ${ow}x${oh}"
done
