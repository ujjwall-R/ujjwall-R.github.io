# Feature Specification: React Library Redesign — Netflix-Style Multi-Route App

**Feature Branch**: `001-react-library-redesign`

**Created**: 2026-06-06

**Status**: Draft

**Input**: User description: "I want you to convert this vanilla frontend to react js codebase. I want to change the design, just like netflix or amazon prime shows tv series. use the images which are there now. I will replace with HD when I feel if needed. The website will be now be redirected to /read. / shows a git changing from ujjwalraj.com/read /build /workout /click. other than read keep all to empty webpages. but remember in future, those will be of same theme. Lets do it."

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 — Land on Homepage and Navigate to a Section (Priority: P1)

A visitor arrives at `ujjwalraj.com` (the root `/`) and sees a visually engaging landing page that cycles through the four sections of the site — **Read**, **Build**, **Workout**, **Click** — in a Netflix/Prime-style hero presentation. Each section is a clickable tile or card leading to its dedicated URL.

**Why this priority**: This is the gateway experience for all visitors. Without a functioning homepage with navigation, no other section is discoverable. It establishes the site's identity and brand.

**Independent Test**: A user can load `/`, see all four section cards displayed, and click any card to be taken to the correct URL. Delivers immediate navigational value even before individual pages have content.

**Acceptance Scenarios**:

1. **Given** a user visits `/`, **When** the page loads, **Then** they see a full-screen or hero-style layout with four section tiles: Read, Build, Workout, Click.
2. **Given** the homepage is displayed, **When** the user clicks "Read", **Then** they are navigated to `/read` without a full page reload.
3. **Given** the homepage is displayed, **When** the user clicks "Build", "Workout", or "Click", **Then** they are navigated to `/build`, `/workout`, or `/click` respectively.
4. **Given** the homepage is displayed, **When** viewed on a mobile device, **Then** the four section tiles stack or re-arrange gracefully and remain fully tappable.

---

### User Story 2 — Browse the Book Library at /read (Priority: P1)

A visitor navigates to `/read` and sees the personal book library displayed in a Netflix/Amazon Prime-style grid — large book cover images arranged in rows, browsable by category (Tech / Non-Tech) and sortable by attributes (beginner-friendly, conceptual depth, practical applicability). Hovering or tapping a book reveals its title and metadata.

**Why this priority**: `/read` is the primary and richest content page — the heart of the site. All existing content (18 books, 3 blog posts, cover images) lives here. Converting this experience to a visually immersive grid is the core deliverable.

**Independent Test**: Can be tested end-to-end by loading `/read` and verifying all books render with covers, filter controls work, and sort controls reorder the grid.

**Acceptance Scenarios**:

1. **Given** a user visits `/read`, **When** the page loads, **Then** all book cover images are displayed in a grid layout resembling a streaming service's content shelf.
2. **Given** the `/read` page is loaded, **When** the user selects "Tech" from the category filter, **Then** only tech books remain visible in the grid.
3. **Given** the `/read` page is loaded, **When** the user selects "Non-Tech" from the category filter, **Then** only non-tech books remain visible.
4. **Given** the `/read` page is loaded, **When** the user changes the sort order to "Beginner Friendly", **Then** the grid reorders accordingly.
5. **Given** a book cover is displayed, **When** the user hovers over or taps the cover, **Then** the book title (and optionally a short description) is revealed as an overlay or tooltip.
6. **Given** the `/read` page is viewed on mobile, **When** the page loads, **Then** the grid adjusts to a 2-column or single-column layout that keeps covers large and legible.

---

### User Story 3 — View Empty Placeholder Pages for /build, /workout, /click (Priority: P2)

A visitor who navigates to `/build`, `/workout`, or `/click` sees a styled placeholder page that is clearly part of the same visual theme as the rest of the site. The page communicates that content is coming and matches the dark/cinematic aesthetic of the homepage and `/read`.

**Why this priority**: These routes must exist to prevent 404 errors and to signal the site's future roadmap. They are lower priority than `/read` because they carry no unique content yet.

**Independent Test**: Navigating directly to `/build`, `/workout`, or `/click` renders a page (not a 404) that shares the site's visual identity.

**Acceptance Scenarios**:

1. **Given** a user navigates to `/build`, **When** the page loads, **Then** a themed placeholder page is shown — not a browser 404.
2. **Given** a user navigates to `/workout`, **When** the page loads, **Then** a themed placeholder is shown.
3. **Given** a user navigates to `/click`, **When** the page loads, **Then** a themed placeholder is shown.
4. **Given** any placeholder page is open, **When** the user views it, **Then** the visual design (colors, typography, layout) is consistent with the `/read` page and homepage.

---

### User Story 4 — Existing Book Data and Images Are Preserved (Priority: P1)

All 18 book records (16 tech, 2 non-tech) with their cover images and the 3 blog entries are carried over intact from the existing vanilla site into the React codebase. No book or image is lost during migration.

**Why this priority**: The content is the site's value. Losing it during migration would be a regression.

**Independent Test**: All 18 book covers load without broken images on `/read`, and all 3 blog post links are present.

**Acceptance Scenarios**:

1. **Given** the React app is built, **When** `/read` loads, **Then** all 18 book cover images render without errors.
2. **Given** `/read` is open, **When** a user scrolls through all books, **Then** no image placeholder or broken-image icon appears.
3. **Given** `/read` includes a blogs section, **When** a user views it, **Then** all 3 blog post entries with their thumbnails and external links are present.

---

### Edge Cases

- What happens when a user navigates directly to an unknown route (e.g., `/xyz`)? → The app should show a 404 or redirect to `/`.
- What happens on very slow connections where images haven't loaded yet? → Book covers should show a placeholder/skeleton until loaded.
- What happens if a user bookmarks `/read?filter=tech&sort=beginner` and returns later? → Filter/sort state persistence via URL query params is desirable but optional for v1 (see Assumptions).
- What happens if the browser has JavaScript disabled? → The React app will not function; this is an accepted constraint for a React SPA.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The site MUST have a homepage at `/` that showcases all four sections (Read, Build, Workout, Click) in a visually prominent layout.
- **FR-002**: The homepage MUST allow users to navigate to each section's URL (`/read`, `/build`, `/workout`, `/click`) without triggering a full-page browser reload (client-side routing).
- **FR-003**: The `/read` page MUST display all 18 books (16 tech, 2 non-tech) as a grid of large cover images in a streaming-service-inspired layout.
- **FR-004**: The `/read` page MUST support filtering books by category: All, Tech, Non-Tech.
- **FR-005**: The `/read` page MUST support sorting books by: Beginner Friendly, Conceptual Depth, Practical Applicability.
- **FR-006**: Book cover images on `/read` MUST display an overlay (title and/or brief info) on hover or tap.
- **FR-007**: All existing book cover images MUST be referenced from their current paths in the `images/` directory without renaming or moving files.
- **FR-008**: The `/read` page MUST include the blogs section with all 3 existing blog entries and their external links.
- **FR-009**: The routes `/build`, `/workout`, and `/click` MUST each render a placeholder page that shares the site's visual theme and does not return a 404.
- **FR-010**: The app MUST use client-side routing so that navigating between routes does not reload the entire page.
- **FR-011**: The design across all pages MUST use a dark, cinematic color palette consistent with streaming service aesthetics (dark backgrounds, high-contrast cover images, minimal chrome).
- **FR-012**: The app MUST be responsive — usable on both desktop and mobile viewports.
- **FR-013**: Unknown routes MUST redirect to `/` or display a themed 404 page rather than a blank screen.

### Key Entities

- **Book**: Title, category (Tech/Non-Tech), cover image path, sort attributes (beginner-friendliness, conceptual depth, practical applicability), optional description/link.
- **Blog Post**: Title, thumbnail image path, external URL, brief description.
- **Section**: Name (Read/Build/Workout/Click), URL slug, status (active/placeholder), cover/hero image.
- **Ad**: Title, description, image, URL (existing structure from `ad.js`).

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: All 18 book covers load and display on `/read` with zero broken image placeholders.
- **SC-002**: A visitor can navigate from `/` to any of the four section routes in 2 taps or clicks or fewer.
- **SC-003**: Filtering books by category instantly reduces the visible grid (under 200ms visual response) without any page reload.
- **SC-004**: All four top-level routes (`/`, `/read`, `/build`, `/workout`, `/click`) resolve without a 404 in the browser.
- **SC-005**: The site layout is fully usable on a 375px-wide mobile viewport without horizontal scrolling.
- **SC-006**: The visual appearance of `/read` is recognizably similar to a streaming service content browser — dark background, large cover images in a grid, hover reveals — as assessed by the site owner.
- **SC-007**: Zero content regression — all 18 books and 3 blog posts present in the migrated React app compared to the existing vanilla site.

---

## Assumptions

- The existing book and blog data (currently hardcoded in `index.html` JavaScript) will be migrated to a static data file (e.g., a JS/JSON module) inside the React project.
- The current image files in `images/` will be copied into the React app's public or assets directory as-is; the owner will replace with HD versions at their own discretion.
- The ad section from `ad.js` will be ported but is lower priority; it may be included as a simple component with the existing data.
- Filter/sort state will NOT be persisted to the URL in v1 — it resets on page load.
- The existing Google AdSense and Bootstrap 3 dependencies will be removed in favor of native React/CSS solutions.
- The site's domain and CNAME (`ujjwalraj.com`) remain unchanged; only the frontend codebase changes.
- The `/build`, `/workout`, and `/click` pages will share the same placeholder template in v1 and will be differentiated in future work.
- The about/bio section currently on the homepage may be moved to `/read` or kept on the homepage — owner preference; assumed to stay on the homepage for v1.
- Google Fonts (Lato) will be retained as the primary typeface for brand consistency.
- The profile photos (`photo.jpeg`, `photo2.jpeg`, `photo3.jpeg`) may be used on the homepage as hero background or avatar elements.
