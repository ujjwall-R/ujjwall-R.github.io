# Research: React Library Redesign — Netflix-Style Multi-Route App

**Date**: 2026-06-06
**Phase**: 0 — Resolves all technical unknowns before design

---

## 1. Build Tool: Vite vs Create React App

**Decision**: Vite 5

**Rationale**:
- CRA is officially unmaintained as of 2023; Vite is the current community standard for new React projects
- Vite's dev server starts in ~200ms (CRA: ~5–10s); HMR is near-instant
- Vite uses `public/` for static assets served as-is — images placed at `public/images/` are served at `/images/ddia.png` which preserves existing image path conventions
- No ejecting needed; simpler config
- Output is a standard `dist/` folder suitable for GitHub Pages

**Alternatives considered**:
- CRA — rejected (unmaintained, slow)
- Next.js — rejected (adds SSR complexity; this is a static personal site with no server-side requirements)

---

## 2. Routing: React Router v6 vs v5

**Decision**: React Router v6 with `createBrowserRouter` + `<RouterProvider>`

**Rationale**:
- v6 is the current stable release; v5 is in maintenance mode
- `createBrowserRouter` is the recommended API (data routers) as of React Router 6.4+; supports future data loading patterns without upfront complexity
- `<Navigate>` component handles catch-all 404 redirect cleanly
- Nested routes allow `<Layout>` to wrap all pages as a single shared wrapper

**Alternatives considered**:
- React Router v5 — rejected (outdated API, `<Switch>` replaced by `<Routes>`)
- Tanstack Router — rejected (overkill for a 4-route personal site)
- Hash routing (`#/read`) — rejected (ugly URLs; CNAME + GitHub Pages supports clean paths with a `404.html` redirect trick)

**GitHub Pages SPA routing**: Requires a `404.html` that redirects to `index.html` with a query-string rewrite. This is a well-documented pattern for React SPAs on GitHub Pages.

---

## 3. Netflix/Prime-Style Book Grid: CSS Approach

**Decision**: CSS Grid with `auto-fill` / `minmax` columns + CSS Module scoping

**Rationale**:
- Native CSS Grid handles responsive multi-column layouts without a library
- `grid-template-columns: repeat(auto-fill, minmax(160px, 1fr))` gives ~4–5 columns on desktop, 2–3 on tablet, 2 on mobile automatically
- Book covers have a natural aspect ratio (~2:3 portrait); `aspect-ratio: 2/3` enforces consistent card height
- Hover overlay achieved with CSS `position: absolute` overlay + `opacity` transition — no JS needed
- Dark background (`#141414` Netflix black or `#0f0f0f`) with white text matches streaming aesthetics

**Alternatives considered**:
- Tailwind CSS — rejected (adds build step complexity and class bloat for a simple personal site; owner may not be familiar)
- CSS-in-JS (styled-components) — rejected (runtime overhead, unnecessary for static styles)
- Bootstrap grid — rejected (Bootstrap 3 is what we're removing; no need to re-add it)

---

## 4. Image Handling: Path Strategy

**Decision**: Copy `../images/` into `react-app/public/images/` at build time; reference as `/images/filename.png` in React

**Rationale**:
- Vite serves `public/` at the root; `public/images/ddia.png` → `/images/ddia.png`
- Existing data arrays use paths like `"images/ddia.png"` — prepend `/` to make them absolute: `"/images/ddia.png"` in the migrated data files
- No renaming required — owner can replace files in place with HD versions
- Images in `public/` are not processed by Vite (no hash fingerprinting) — consistent URLs even after rebuilds

**Alternatives considered**:
- Symlink `public/images → ../../images` — works locally but breaks on GitHub Pages CI builds
- Import images as ES modules in JS — rejected (would require changing every book data entry; unnecessary complexity for static images)

---

## 5. Styling: Global Dark Theme

**Decision**: Global CSS variables in `index.css` + per-component CSS Modules

**Rationale**:
- CSS variables (`--color-bg`, `--color-text`, `--color-accent`) make theming consistent across all pages including future `/build`, `/workout`, `/click`
- CSS Modules scope component styles without conflicts
- Google Fonts (Lato) retained via `@import` in `index.css` — matches existing brand

**Netflix-inspired palette**:
```css
--color-bg:          #0f0f0f;   /* near-black background */
--color-surface:     #181818;   /* card/section background */
--color-surface-alt: #282828;   /* hover state for surfaces */
--color-text:        #e5e5e5;   /* primary text */
--color-text-muted:  #b3b3b3;   /* secondary text */
--color-accent:      #e50914;   /* Netflix red — or use owner's preference */
--color-star:        #f5c518;   /* IMDb-style gold stars (preserved) */
--font-primary:      'Lato', sans-serif;
```

---

## 6. GitHub Pages Deployment

**Decision**: Build to `react-app/dist/`, deploy from `dist/` with `gh-pages` package + SPA 404 redirect

**Rationale**:
- `vite build` outputs to `dist/` by default
- `gh-pages` npm package handles pushing `dist/` to `gh-pages` branch
- GitHub Pages CNAME file must be present in `dist/` — add `CNAME` to `public/` so Vite copies it automatically
- SPA routing: add `public/404.html` that mirrors `index.html` (or use the redirect script pattern)

**Build commands**:
```bash
npm run build   # vite build
npm run deploy  # gh-pages -d dist
```

---

## 7. Filter/Sort State Management

**Decision**: `useState` local to `BookGrid` component — no global state, no URL params in v1

**Rationale**:
- Only one page (`/read`) uses filter/sort; no cross-component state sharing needed
- `useState` is the simplest correct solution
- URL query param persistence is explicitly deferred to v2 (per spec Assumptions)
- No Redux, Zustand, or Context needed for this scope

---

## All NEEDS CLARIFICATION Markers Resolved

All technical decisions above were derived from the feature spec and project context. No open clarifications remain.
