# Next.js Ordered Table Layout

An example project that uses CSS `grid-template-areas` to keep components in
consistent positions across layouts and pages in the Next.js App Router.

In the App Router, a layout wraps each page through its `children`, so
elements render in the order their files produce them. That makes it awkward
to let different pages add their own widgets while keeping those widgets in the
same place on every page. This project solves that by defining named areas on
one shared grid container. Any element that is a direct child of that container
can claim an area, no matter which layout or page file renders it, or where it
appears in the source.

## The layout

```
┌───────────────────────────────────────┐
│ header                                │
├─────────────┬─────────────────────────┤
│ sidebar     │                         │
├─────────────┤                         │
│ stats       │ content                 │
├─────────────┤                         │
│ filler      │                         │
├─────────────┴─────────────────────────┤
│ footer                                │
└───────────────────────────────────────┘
```

| Area      | Element                      | Rendered by      |
| --------- | ---------------------------- | ---------------- |
| `header`  | `<header>`                   | `app/layout.tsx` |
| `sidebar` | `<nav>`                      | `app/layout.tsx` |
| `stats`   | `<aside>` from `<PageViews>` | each `page.tsx`  |
| `filler`  | an empty `<div>`             | `app/layout.tsx` |
| `content` | `<main>`                     | each `page.tsx`  |
| `footer`  | `<footer>`                   | `app/layout.tsx` |

A few things worth noticing:

- **Source order doesn't matter.** `app/layout.tsx` renders the footer before
  the navigation and the page, and the grid still places it at the bottom.
- **Pages fill areas the layout defines.** Each page returns a fragment with
  its `<main>` and a `<PageViews>` box. Both land beside or under the layout's
  navigation, in the same spot on every page.
- **The filler soaks up leftover height.** Its row is the only `1fr` row in the
  left column, so the navigation and stats keep their natural height instead of
  stretching to match the content.
- **Small screens stack.** Below 600px the areas stack as header, sidebar,
  stats, content and footer, and the filler is hidden.
- **The grid is on a wrapper, not `<body>`.** Next.js adds its own elements to
  `<body>`, such as scripts, a hidden `<div>` and a `<next-route-announcer>`.
  On a `<body>` grid those would become stray grid items.

The page view numbers are hardcoded examples. A real site would read them from
its analytics.

## Project structure

```
lib/
└── styles.module.css     -- the grid container and one class per named area
components/
└── page-views/
    ├── PageViews.tsx     -- the views box each page places in the stats area
    └── styles.module.css
app/
├── globals.css           -- base styles
├── layout.tsx            -- the grid container, header, footer, navigation and filler
├── page.tsx              -- the home page's content area and page views
├── page.module.css
├── about/
│   ├── page.tsx          -- the about page's content area and page views
│   └── page.module.css
└── contact/
    ├── page.tsx          -- the contact page's content area and page views
    └── page.module.css
```

Built with Next.js 16 and React 19, styled with CSS Modules only.

## Running it

```bash
bun install
bun dev
```

Then open [http://localhost:3000](http://localhost:3000).
