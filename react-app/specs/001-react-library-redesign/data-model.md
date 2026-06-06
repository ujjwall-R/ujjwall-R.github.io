# Data Model: React Library Redesign

**Date**: 2026-06-06
**Source**: Migrated from `index.html` inline JS + `js/ad.js`

---

## Entities

### Book

Represents a single book in the library. Source: `techBooks[]` and `nonTechBooks[]` in `index.html`.

```js
{
  title: string,              // Display title
  about: string,              // Description / personal note
  category: "Tech" | "NonTech", // Added field to unify the two arrays
  ratings: {
    "Beginner friendly":       1–5,  // integer
    "Conceptual depth":        1–5,
    "Practical applicability": 1–5
  },
  tags: string[],             // e.g. ["distributed-systems", "databases"]
  image: string               // e.g. "/images/ddia.png"
}
```

**Validation rules**:
- `title` and `image` are required (non-empty)
- `category` must be `"Tech"` or `"NonTech"`
- Each rating value must be an integer 1–5
- `tags` may be empty array

**Source transformation**: The two separate arrays (`techBooks`, `nonTechBooks`) will be merged into a single `books` array with an explicit `category` field. This simplifies filtering.

---

### Blog

Represents a blog post entry. Source: `blogs[]` in `index.html`.

```js
{
  title: string,    // Display title
  image: string,    // Thumbnail image path, e.g. "/images/systemDesign.png"
  link: string      // External URL (dev.to)
}
```

**Validation rules**:
- All three fields required
- `link` must be a valid absolute URL

---

### Ad

Represents a sponsored ad. Source: `ads[]` in `js/ad.js`.

```js
{
  title: string,
  description: string,
  image: string,    // e.g. "/images/ad/justOneMorePage.png"
  url: string       // Empty string means "Stay Tuned" (no link)
}
```

---

### Section

Represents one of the four top-level site sections. This entity is defined statically in the `Home` page component — not in a data file.

```js
{
  name: "Read" | "Build" | "Workout" | "Click",
  slug: "/read" | "/build" | "/workout" | "/click",
  status: "active" | "placeholder",
  description: string,   // Short tagline shown on the homepage tile
  heroImage: string | null  // Optional background image for the tile
}
```

---

## Data File Layout

```
src/data/
├── books.js    → exports `books` array (18 entries, unified with category field)
├── blogs.js    → exports `blogs` array (3 entries)
└── ads.js      → exports `ads` array (1 entry)
```

---

## State Transitions

### BookGrid filter/sort state (local to component)

```
Initial state: { category: "Tech", sortKey: "" }

User selects category → update category → re-filter books
User selects sort     → update sortKey  → re-sort filtered books
Component unmount     → state resets (no persistence in v1)
```

### Route navigation state

```
/ → user clicks tile → navigate to /read | /build | /workout | /click
  (React Router client-side push — no page reload)

/unknown → 404 page → user clicks "Go Home" → navigate to /
```
