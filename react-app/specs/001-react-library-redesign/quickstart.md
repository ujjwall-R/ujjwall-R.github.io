# Quickstart: React Library Redesign

**Date**: 2026-06-06

---

## Prerequisites

- Node.js 18+ and npm 9+
- Git

---

## Setup

```bash
# From the repo root
cd react-app

# Install dependencies
npm install

# Copy images into the React public folder
cp -r ../images ./public/images
cp ../CNAME ./public/CNAME          # preserve for GitHub Pages

# Start the dev server
npm run dev
# → opens at http://localhost:5173
```

---

## Key Commands

```bash
npm run dev      # Start Vite dev server (HMR, fast)
npm run build    # Production build → react-app/dist/
npm run preview  # Preview production build locally
npm run deploy   # Deploy dist/ to GitHub Pages (gh-pages branch)
```

---

## Project Init (first time only)

```bash
cd react-app
npm create vite@latest . -- --template react
# Select: React, JavaScript (not TypeScript)
npm install
npm install react-router-dom
npm install --save-dev gh-pages
```

Then add to `package.json`:
```json
{
  "homepage": "https://ujjwalraj.com",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

And in `vite.config.js`:
```js
export default {
  base: '/',   // clean root path for custom domain
}
```

---

## SPA Routing on GitHub Pages

Add `public/404.html` with this content to enable deep-link routing:

```html
<!DOCTYPE html>
<html>
<head>
  <script>
    // SPA redirect for GitHub Pages
    // Converts /read → /?p=/read, then index.html restores it
    var l = window.location;
    l.replace(
      l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      l.pathname.split('/').slice(0, 1).join('/') +
      '/?p=' + encodeURIComponent(l.pathname + l.search) +
      (l.hash || '')
    );
  </script>
</head>
</html>
```

And add this snippet to `index.html` `<head>`:
```html
<script>
  // Restore path from GitHub Pages 404 redirect
  (function(l) {
    if (l.search[1] === '/') {
      var decoded = l.search.slice(1).split('&').map(s => s.replace(/~and~/g, '&'));
      window.history.replaceState(null, null,
        decoded[0] + (decoded[1] ? '?' + decoded[1].split('~Q~').join('?') : '') +
        l.hash
      );
    }
  }(window.location));
</script>
```

---

## Image Paths

Images are served from `public/images/` and referenced in data files as `/images/filename.png` (absolute paths from root). When copying images:

```bash
# From react-app/ directory
cp -r ../images ./public/images
```

No filenames change — the owner can replace any file with an HD version by dropping it in the same location.

---

## Adding a New Book

Edit `src/data/books.js` and add an entry to the `books` array:

```js
{
  title: "My New Book",
  about: "Description here.",
  category: "Tech",         // or "NonTech"
  ratings: {
    "Beginner friendly": 4,
    "Conceptual depth": 3,
    "Practical applicability": 5
  },
  tags: ["tag1", "tag2"],
  image: "/images/mynewbook.png"  // place cover in public/images/
}
```
