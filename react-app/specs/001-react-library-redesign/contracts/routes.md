# Route Contracts

**App**: React SPA — `ujjwalraj.com`
**Router**: React Router v6 `createBrowserRouter`

---

## Route Table

| Path        | Component     | Status      | Description                                              |
|-------------|---------------|-------------|----------------------------------------------------------|
| `/`         | `Home`        | Active      | Hero landing with 4 section tiles                        |
| `/read`     | `Read`        | Active      | Netflix-style book grid + blogs section                  |
| `/build`    | `Build`       | Placeholder | Themed empty page ("Coming soon")                        |
| `/workout`  | `Workout`     | Placeholder | Themed empty page ("Coming soon")                        |
| `/click`    | `Click`       | Placeholder | Themed empty page ("Coming soon")                        |
| `*`         | `NotFound`    | Catch-all   | Themed 404 page with link back to `/`                    |

---

## Layout Wrapping

All routes are nested under a shared `<Layout>` component, which provides:
- Dark background (`--color-bg`)
- Optional global nav bar (logo / section links)
- Footer (copyright)

```
<RouterProvider router={...}>
  <Layout>          ← wraps all routes
    <Outlet />      ← page content
  </Layout>
</RouterProvider>
```

---

## Navigation Behavior

- **Internal navigation**: All section tile clicks and nav links use React Router `<Link>` — no `<a href>` with full reloads
- **External links**: Blog post links open in a new tab (`target="_blank" rel="noopener noreferrer"`)
- **404 redirect**: Unknown paths render `<NotFound>` which displays a "Go to Home" button using `<Link to="/">`

---

## GitHub Pages SPA Routing

Since GitHub Pages serves static files, deep links (e.g., `ujjwalraj.com/read`) would 404 without a workaround.

**Solution**: Add `public/404.html` with a redirect script that converts the URL path into a query string, which `index.html` reads and replaces as the browser history state.

This is the standard `spa-github-pages` pattern and requires no server configuration.
