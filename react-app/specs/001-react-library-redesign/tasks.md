# Tasks: React Library Redesign — Netflix-Style Multi-Route App

**Input**: Design documents from `specs/001-react-library-redesign/`

**Prerequisites**: plan.md ✅ | spec.md ✅ | research.md ✅ | data-model.md ✅ | contracts/ ✅

**Tests**: Not requested — no test tasks generated.

**Organization**: Tasks grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no cross-task dependencies)
- **[Story]**: Maps to user stories from spec.md (US1–US3, plus data migration as Foundational)
- Paths are relative to `react-app/` unless noted otherwise

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the Vite + React project, install dependencies, prepare the static assets directory.

- [x] T001 Initialize Vite React project inside `react-app/` using `npm create vite@latest . -- --template react` (choose React + JavaScript)
- [x] T002 Install runtime dependencies: `npm install react-router-dom` inside `react-app/`
- [x] T003 Install dev dependencies: `npm install --save-dev gh-pages` inside `react-app/`
- [x] T004 [P] Configure `react-app/vite.config.js` — set `base: '/'` for custom domain deployment
- [x] T005 [P] Add `homepage`, `predeploy`, and `deploy` scripts to `react-app/package.json` pointing to `https://ujjwalraj.com` and `gh-pages -d dist`
- [x] T006 Copy all images from `../images/` into `react-app/public/images/` (preserving all filenames and the `ad/` subdirectory)
- [x] T007 [P] Copy `../CNAME` into `react-app/public/CNAME` so Vite includes it in `dist/` on every build
- [x] T008 [P] Create `react-app/public/404.html` with the SPA GitHub Pages redirect script (converts `/read` → `/?p=/read`) as documented in `quickstart.md`
- [x] T009 Add the SPA path-restore snippet to `<head>` in `react-app/index.html` (reads `?p=` query param and restores browser history state)
- [x] T010 Create the full `src/` directory skeleton: `src/data/`, `src/components/BookCard/`, `src/components/BookGrid/`, `src/components/BlogRow/`, `src/components/SectionTile/`, `src/components/Layout/`, `src/pages/Home/`, `src/pages/Read/`, `src/pages/Build/`, `src/pages/Workout/`, `src/pages/Click/`, `src/pages/NotFound/`

**Checkpoint**: `npm run dev` starts without errors; project structure matches `plan.md` source tree.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Dark theme globals, static data modules, shared Layout component, and React Router wiring. MUST be complete before any user story.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T011 Create `react-app/src/index.css` — global dark theme CSS variables (`--color-bg: #0f0f0f`, `--color-surface: #181818`, `--color-surface-alt: #282828`, `--color-text: #e5e5e5`, `--color-text-muted: #b3b3b3`, `--color-accent: #e50914`, `--color-star: #f5c518`, `--font-primary: 'Lato', sans-serif`), Google Fonts Lato import, `*, body` resets applying the dark background and font
- [x] T012 [P] Create `react-app/src/data/books.js` — export a single `books` array (18 entries) merging `techBooks` and `nonTechBooks` from `index.html`, each entry adding `category: "Tech"` or `category: "NonTech"` field, and updating image paths to `/images/filename.png` (absolute)
- [x] T013 [P] Create `react-app/src/data/blogs.js` — export `blogs` array (3 entries) from `index.html`, updating image paths to `/images/filename.png`
- [x] T014 [P] Create `react-app/src/data/ads.js` — export `ads` array (1 entry) from `js/ad.js`, updating image path to `/images/ad/justOneMorePage.png`
- [x] T015 Create `react-app/src/components/Layout/Layout.jsx` — renders a `<div>` with dark background, optional top nav bar (site title "From the Library of Ujjwal Raj" linking to `/`), `<main>` slot via `{children}` or `<Outlet />`, and `<footer>` with "© 2026 Ujjwal Raj"
- [x] T016 Create `react-app/src/components/Layout/Layout.module.css` — styles for the Layout wrapper: full-viewport dark background, sticky/fixed header, footer alignment, max-width content centering
- [x] T017 Set up React Router in `react-app/src/App.jsx` using `createBrowserRouter` and `<RouterProvider>` — define the route tree with `<Layout>` as the root wrapper and `<Outlet>` inside it (leave page components as placeholder imports for now; will be filled per story)
- [x] T018 Update `react-app/src/main.jsx` to mount `<RouterProvider router={router} />` wrapped in `<React.StrictMode>` into `document.getElementById('root')`

**Checkpoint**: `npm run dev` loads at `http://localhost:5173` with a dark background and Layout chrome (header + footer) visible.

---

## Phase 3: US1 — Homepage with Section Tiles (Priority: P1) 🎯 MVP

**Goal**: Root `/` shows a Netflix-style hero landing page with four clickable section tiles (Read, Build, Workout, Click) that navigate to their routes via client-side routing.

**Independent Test**: Visit `http://localhost:5173/`, see four section tiles, click "Read" → URL changes to `/read` without full reload. Back button returns to `/`.

- [x] T019 [US1] Create `react-app/src/components/SectionTile/SectionTile.jsx` — accepts props `{ name, slug, description, status, heroImage }` and renders a `<Link to={slug}>` card; "placeholder" status shows a "Coming Soon" badge overlay
- [x] T020 [US1] Create `react-app/src/components/SectionTile/SectionTile.module.css` — card with `aspect-ratio: 16/9`, dark surface background (`var(--color-surface)`), `overflow: hidden`, `border-radius`, CSS `transform: scale(1.03)` on `:hover` with `transition`, title in large white text centered, "Coming Soon" badge positioned top-right
- [x] T021 [US1] Create `react-app/src/pages/Home/Home.jsx` — defines a `sections` array (Read/Build/Workout/Click with slugs and descriptions), renders a hero headline ("From the Library of Ujjwal Raj"), profile photo (`/images/photo.jpeg`), brief bio paragraph, and a 2×2 CSS grid of `<SectionTile>` components
- [x] T022 [US1] Create `react-app/src/pages/Home/Home.module.css` — full-viewport hero section, centered headline and bio, `display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem` for tiles, responsive: `grid-template-columns: 1fr` on mobile (≤600px)
- [x] T023 [US1] Wire up the `/` route in `react-app/src/App.jsx` — add `{ path: '/', element: <Home /> }` as a child of the Layout route

**Checkpoint**: Homepage renders at `/` with four tiles; clicking any tile navigates correctly; mobile viewport shows single-column tile stack.

---

## Phase 4: US2 + US4 — /read Book Grid & Data Migration (Priority: P1)

**Goal**: `/read` displays all 18 books as a Netflix-style cover grid with category filter and sort controls; hover reveals title + ratings; 3 blog entries shown below. All data and images are intact from the original site.

**Independent Test**: Visit `http://localhost:5173/read`, verify 18 covers load (zero broken images), filter to "Non-Tech" shows exactly 2 books, sort by "Beginner Friendly" reorders the grid, hover over a book shows overlay with title.

- [x] T024 [P] [US2] Create `react-app/src/components/BookCard/BookCard.jsx` — accepts props `{ title, about, ratings, tags, image, category }`, renders the cover image filling a `2:3` aspect-ratio card, hover overlay reveals title and star ratings (★☆ with `var(--color-star)`)
- [x] T025 [P] [US2] Create `react-app/src/components/BookCard/BookCard.module.css` — `position: relative`, `aspect-ratio: 2/3`, `overflow: hidden`; cover `img` fills 100%; overlay `div` positioned absolute over full card, `opacity: 0` → `opacity: 1` on parent `:hover` via CSS transition; overlay background `rgba(0,0,0,0.75)`, title in white, ratings in gold
- [x] T026 [US2] Create `react-app/src/components/BookGrid/BookGrid.jsx` — imports `books` from `src/data/books.js`; local `useState` for `category` (default `"Tech"`) and `sortKey` (default `""`); filter + sort logic matching original site behavior; renders filter `<select>` (All/Tech/NonTech) and sort `<select>` (Default/Beginner friendly/Conceptual depth/Practical applicability), then a grid of `<BookCard>` components
- [x] T027 [US2] Create `react-app/src/components/BookGrid/BookGrid.module.css` — controls row (`display: flex; gap; margin-bottom`); grid: `display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem`; responsive: `minmax(120px, 1fr)` at ≤480px; styled `<select>` elements with dark background and white text
- [x] T028 [P] [US2] Create `react-app/src/components/BlogRow/BlogRow.jsx` — accepts props `{ title, image, link }`, renders thumbnail + title as an `<a href={link} target="_blank" rel="noopener noreferrer">`
- [x] T029 [P] [US2] Create `react-app/src/components/BlogRow/BlogRow.module.css` — `display: flex; align-items: center; gap`; thumbnail `80px` wide; title link in `var(--color-text)` with hover color `var(--color-accent)`; bottom border separator between rows
- [x] T030 [US2] Create `react-app/src/pages/Read/Read.jsx` — profile header section (photo, name, bio matching original about section), `<BookGrid />` section with "Books" heading, blogs section with "Blogs" heading rendering `<BlogRow>` for each entry from `src/data/blogs.js`
- [x] T031 [US2] Create `react-app/src/pages/Read/Read.module.css` — profile header layout (photo circle + text side-by-side, responsive stacked on mobile); section headings in large white text; horizontal dividers between sections; max-width `900px` centered
- [x] T032 [US2] Wire up the `/read` route in `react-app/src/App.jsx` — add `{ path: '/read', element: <Read /> }` as a child of the Layout route

**Checkpoint**: `/read` shows full book grid; filter and sort work; all 18 covers visible; 3 blog rows present with working external links; no broken images.

---

## Phase 5: US3 — Placeholder Pages for /build, /workout, /click (Priority: P2)

**Goal**: All three placeholder routes resolve to themed pages (no 404), visually consistent with the rest of the site, with a link back to home.

**Independent Test**: Navigate directly to `/build`, `/workout`, `/click` — each shows a themed page (not a blank screen or browser error) with the section name and a "Go to Home" link.

- [x] T033 [P] [US3] Create `react-app/src/pages/Build/Build.jsx` — renders section heading "Build", subtitle "Coming Soon", a brief placeholder message, and a `<Link to="/">← Home</Link>`
- [x] T034 [P] [US3] Create `react-app/src/pages/Workout/Workout.jsx` — same pattern as Build.jsx with "Workout" heading
- [x] T035 [P] [US3] Create `react-app/src/pages/Click/Click.jsx` — same pattern as Build.jsx with "Click" heading
- [x] T036 [US3] Create `react-app/src/pages/NotFound/NotFound.jsx` — renders "404", "Page not found", and a `<Link to="/">Go to Home</Link>`
- [x] T037 [US3] Wire up `/build`, `/workout`, `/click`, and `*` (catch-all) routes in `react-app/src/App.jsx`
- [x] T038 [US3] Create a shared `react-app/src/pages/Placeholder.module.css` (or inline styles) used by Build, Workout, Click, and NotFound — centered layout, large section name, muted subtext, styled home link

**Checkpoint**: All four routes `/build`, `/workout`, `/click`, and any unknown path resolve to themed pages; Layout chrome (header/footer) appears on all of them.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final validation, responsive checks, and production build verification.

- [x] T039 [P] Audit all 18 book image paths in `react-app/src/data/books.js` — confirm every `image` value is `/images/filename.png` and the corresponding file exists in `react-app/public/images/`
- [x] T040 [P] Verify the `react-app/public/images/ad/justOneMorePage.png` file exists (copy from `../images/ad/` if missing)
- [x] T041 Remove Vite boilerplate from `react-app/src/` — delete the default `App.css`, `assets/react.svg`, and clear any Vite placeholder content from `main.jsx` that conflicts with the new app
- [x] T042 Test responsive layout at 375px viewport width (Chrome DevTools) — verify homepage tiles stack to single column, `/read` grid adjusts to 2 columns, no horizontal scroll on any route
- [x] T043 Run `npm run build` inside `react-app/` and confirm `dist/` is generated without errors; verify `dist/CNAME` and `dist/404.html` are present
- [x] T044 Run `npm run preview` and walk through all five routes (`/`, `/read`, `/build`, `/workout`, `/click`) confirming navigation, images, and styling match expectations

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: No dependencies — start immediately
- **Phase 2 (Foundational)**: Depends on Phase 1 — BLOCKS all user stories
- **Phase 3 (US1 Homepage)**: Depends on Phase 2
- **Phase 4 (US2 + US4 Read)**: Depends on Phase 2
- **Phase 5 (US3 Placeholders)**: Depends on Phase 2
- **Phase 6 (Polish)**: Depends on Phases 3, 4, and 5

### User Story Dependencies

- **US1 (Homepage, P1)**: Independent after Foundational — no dependency on US2/US3
- **US2 + US4 (Read page + data, P1)**: Independent after Foundational — no dependency on US1/US3
- **US3 (Placeholders, P2)**: Independent after Foundational — can be done last

### Within Each Phase

- Data modules (T012–T014) are independent of each other → parallelize
- Layout (T015–T016) must precede routing (T017–T018)
- `App.jsx` routing (T017) must exist before page-level route wiring (T023, T032, T037)
- `BookCard` (T024–T025) must precede `BookGrid` (T026–T027)
- `BlogRow` (T028–T029) can be built in parallel with `BookCard`
- Placeholder pages (T033–T035) are fully independent of each other

### Parallel Opportunities

```bash
# Phase 2 — run in parallel:
Task T012: Create src/data/books.js
Task T013: Create src/data/blogs.js
Task T014: Create src/data/ads.js

# Phase 4 — run in parallel:
Task T024+T025: BookCard component
Task T028+T029: BlogRow component
```

---

## Implementation Strategy

### MVP First (Homepage + Read Page)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (dark theme, data modules, Layout, Router)
3. Complete Phase 3: US1 — Homepage
4. **STOP AND VALIDATE**: Homepage works, 4 tiles navigate correctly
5. Complete Phase 4: US2+US4 — `/read` book grid
6. **STOP AND VALIDATE**: All 18 books visible, filter/sort work, blogs present
7. Deploy to GitHub Pages — **MVP live**

### Incremental Delivery

1. Setup + Foundational → dark shell app running
2. US1 → Homepage with navigation (MVP)
3. US2+US4 → `/read` fully functional (core content live)
4. US3 → Placeholder pages (clean routing, no 404s)
5. Polish → Production build verified, responsive confirmed

### Single Developer Order

With a single developer, natural sequential order:

```
T001 → T002 → T003 → T004 → T005 → T006 → T007 → T008 → T009 → T010  (Setup)
→ T011 → T012+T013+T014 → T015 → T016 → T017 → T018               (Foundational)
→ T019 → T020 → T021 → T022 → T023                                 (US1)
→ T024+T025 | T028+T029 → T026 → T027 → T030 → T031 → T032        (US2+US4)
→ T033+T034+T035 → T036 → T037 → T038                              (US3)
→ T039+T040 → T041 → T042 → T043 → T044                           (Polish)
```

---

## Notes

- [P] tasks touch different files — safe to run in parallel
- Story labels map tasks to user stories for traceability
- No test tasks generated (not requested in spec)
- Commit after each phase checkpoint to keep history clean
- Image files are the owner's responsibility to replace with HD versions — no task needed
- `src/data/books.js` is the single source of truth for all book data after migration
