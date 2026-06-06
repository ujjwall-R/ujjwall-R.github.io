# Component Contracts (UI Interface Contracts)

**Date**: 2026-06-06
**Format**: JSDoc-style prop definitions (technology-implementation reference)

---

## Layout

Shared wrapper rendered on every route.

```
Props: none (uses <Outlet> from React Router)
Responsibilities:
  - Apply dark background globally
  - Render optional nav bar
  - Render footer with copyright
```

---

## SectionTile

Homepage card linking to one section.

```
Props:
  name:        string     — Section display name ("Read", "Build", etc.)
  slug:        string     — Route path ("/read", "/build", etc.)
  description: string     — Short tagline
  heroImage:   string?    — Optional background image URL
  status:      "active" | "placeholder"

Behavior:
  - Renders as a <Link to={slug}>
  - On hover: slight zoom or brightness increase (CSS transition)
  - Placeholder sections show a "Coming Soon" badge overlay
```

---

## BookCard

Single book displayed in the grid.

```
Props:
  title:    string     — Book title
  image:    string     — Cover image path ("/images/ddia.png")
  about:    string     — Description text
  ratings:  object     — { "Beginner friendly": 1–5, "Conceptual depth": 1–5, "Practical applicability": 1–5 }
  tags:     string[]   — Tag labels

Behavior:
  - Displays cover image filling the card at 2:3 aspect ratio
  - On hover (desktop) or tap (mobile): overlay reveals title + star ratings
  - No external navigation — purely visual
```

---

## BookGrid

Filterable, sortable grid of BookCards.

```
Props: none (reads from books data module internally)

Internal state:
  category: "Tech" | "NonTech" | "All"   — default "Tech"
  sortKey:  "" | "Beginner friendly" | "Conceptual depth" | "Practical applicability"

Renders:
  - Filter dropdown (category)
  - Sort dropdown (sortKey)
  - CSS grid of <BookCard> components, filtered and sorted

Filtering logic:
  "Tech"    → books where category === "Tech"
  "NonTech" → books where category === "NonTech"
  "All"     → all books

Sorting logic (descending):
  When sortKey is set: sort by ratings[sortKey] descending
  Default: preserve data array order
```

---

## BlogRow

Single blog post entry.

```
Props:
  title:  string  — Blog post title
  image:  string  — Thumbnail path
  link:   string  — External URL

Behavior:
  - Renders thumbnail + title as an external link
  - Opens in new tab with rel="noopener noreferrer"
```

---

## Placeholder Page (Build / Workout / Click)

```
Props: none

Renders:
  - Section name as large heading
  - "Coming soon..." or similar message
  - Link back to "/" (Home)
  - Shares global dark theme via Layout
```

---

## NotFound

```
Props: none

Renders:
  - "404" heading
  - "Page not found" message
  - <Link to="/"> "Go to Home" button
  - Styled in global dark theme
```
