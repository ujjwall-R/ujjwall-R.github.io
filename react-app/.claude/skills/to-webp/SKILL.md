---
name: "to-webp"
description: "Convert a JPEG or PNG image to WebP format and save it to public/images/. Uses cwebp (must be installed: brew install webp)."
argument-hint: "<source-image-path> [output-name] [quality]"
user-invocable: true
disable-model-invocation: false
---

## User Input

```text
$ARGUMENTS
```

## Task

Convert one or more images (JPEG or PNG) to WebP format and place them in `public/images/`.

### Argument parsing

Parse `$ARGUMENTS` as:
```
<source-image-path> [output-name] [quality]
```

- `source-image-path` — absolute or relative path to the source image (required)
- `output-name` — desired output filename **without extension** (optional; defaults to the source filename stem, lowercased and spaces replaced with hyphens)
- `quality` — WebP quality 1–100 (optional; defaults to `85`)

If `$ARGUMENTS` is empty, tell the user the usage and stop.

### Steps

1. **Validate prerequisites**
   - Run `which cwebp` to confirm `cwebp` is installed.
   - If missing, tell the user to run `brew install webp` and stop.

2. **Resolve paths**
   - Determine the absolute path of `source-image-path`.
   - Confirm the file exists and has a `.jpg`, `.jpeg`, or `.png` extension (case-insensitive). If not, report an error and stop.
   - Determine the output filename: `<output-name>.webp` (apply the defaulting rules above).
   - Output destination: `<repo-root>/public/images/<output-name>.webp`

3. **Convert**
   Run:
   ```bash
   cwebp "<source-image-path>" -o "<output-destination>" -q <quality>
   ```

4. **Report**
   After conversion succeeds, report:
   - Source path
   - Output path (relative to repo root)
   - Output file size in KB
   - The `image` field value ready to paste into a book entry, e.g. `"/images/<output-name>.webp"`
