# Implementation Plan: React Library Redesign — Netflix-Style Multi-Route App

**Branch**: `001-react-library-redesign` | **Date**: 2026-06-06 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/001-react-library-redesign/spec.md`

---

## Summary

Convert the existing vanilla HTML/JS personal library site at `ujjwalraj.com` into a React single-page application. The root `/` becomes a cinematic landing page with four section tiles (Read, Build, Workout, Click). The `/read` page is a Netflix/Prime-style book grid with filtering and sorting. `/build`, `/workout`, `/click` are themed placeholder pages. All 18 books, 3 blog posts, and existing images are migrated intact. The React app lives in the `react-app/` subdirectory of the repository.

---

## Technical Context

**Language/Version**: JavaScript (ES2022+), JSX

**Primary Dependencies**:
- React 18 (UI framework)
- React Router v6 (client-side routing — `createBrowserRouter` / `<RouterProvider>`)
- Vite 5 (build tool and dev server — faster than CRA, no ejecting needed)
- CSS Modules or plain CSS (no CSS-in-JS to keep it simple)

**Storage**: Static JS data modules in `src/data/` — no backend, no API calls

**Testing**: Vitest + React Testing Library (standard Vite testing stack)

**Target Platform**: Web browser — modern desktop and mobile. Deployed to GitHub Pages via existing CNAME (`ujjwalraj.com`).

**Project Type**: Single-page application (SPA)

**Performance Goals**: Initial page load under 2 seconds on a mid-range mobile connection; client-side route transitions under 100ms

**Constraints**:
- Images live at `../images/` relative to the repo root; the React `public/` folder will reference them or they'll be copied into `react-app/public/images/`
- No backend — all data is static
- CNAME and GitHub Pages deployment must remain functional

**Scale/Scope**: 18 books, 3 blogs, 1 ad, 4 routes, personal site (single owner)

---

## Constitution Check

The project constitution is not yet configured (template only). No active gates to evaluate. Proceeding without violations.

*Post-design re-check: N/A — no active constitution rules.*

---

## Project Structure

### Documentation (this feature)

```text
specs/001-react-library-redesign/
├── plan.md              ← this file
├── research.md          ← Phase 0 output
├── data-model.md        ← Phase 1 output
├── quickstart.md        ← Phase 1 output
├── contracts/           ← Phase 1 output
│   ├── routes.md
│   └── components.md
└── tasks.md             ← Phase 2 output (/speckit-tasks — NOT created here)
```

### Source Code (repository root)

```text
react-app/                         ← React SPA root (existing empty dir)
├── public/
│   └── images/                    ← book covers, blogs, photos, ad (copied from ../images/)
│       ├── ad/
│       │   └── justOneMorePage.png
│       ├── ddia.png
│       ├── bcsd.png
│       ├── ... (all 28 image files)
│       └── ball.webp              ← favicon
├── src/
│   ├── data/
│   │   ├── books.js               ← techBooks + nonTechBooks arrays (migrated from index.html)
│   │   ├── blogs.js               ← blogs array (migrated from index.html)
│   │   └── ads.js                 ← ads array (migrated from ad.js)
│   ├── components/
│   │   ├── BookCard/
│   │   │   ├── BookCard.jsx       ← single book card with hover overlay
│   │   │   └── BookCard.module.css
│   │   ├── BookGrid/
│   │   │   ├── BookGrid.jsx       ← CSS grid of BookCards with filter/sort controls
│   │   │   └── BookGrid.module.css
│   │   ├── BlogRow/
│   │   │   ├── BlogRow.jsx        ← single blog entry row
│   │   │   └── BlogRow.module.css
│   │   ├── SectionTile/
│   │   │   ├── SectionTile.jsx    ← homepage tile card (one per section)
│   │   │   └── SectionTile.module.css
│   │   └── Layout/
│   │       ├── Layout.jsx         ← shared wrapper: dark background, nav, footer
│   │       └── Layout.module.css
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.jsx           ← hero + 4 SectionTiles
│   │   │   └── Home.module.css
│   │   ├── Read/
│   │   │   ├── Read.jsx           ← profile header + BookGrid + blogs section
│   │   │   └── Read.module.css
│   │   ├── Build/
│   │   │   └── Build.jsx          ← placeholder page (themed)
│   │   ├── Workout/
│   │   │   └── Workout.jsx        ← placeholder page (themed)
│   │   ├── Click/
│   │   │   └── Click.jsx          ← placeholder page (themed)
│   │   └── NotFound/
│   │       └── NotFound.jsx       ← 404 redirect page (themed)
│   ├── App.jsx                    ← router setup (createBrowserRouter)
│   ├── main.jsx                   ← React DOM root mount
│   └── index.css                  ← global styles (dark theme base, fonts)
├── index.html                     ← Vite entry HTML
├── package.json
├── vite.config.js
└── .gitignore
```

**Structure Decision**: Single React SPA in `react-app/`. All source code under `src/`. Public assets (images) under `public/images/` — Vite serves this directory as static files at the root URL path, so existing image references like `images/ddia.png` map to `/images/ddia.png` without changing filenames.

---

## Complexity Tracking

> No constitution violations. Section left intentionally blank.
