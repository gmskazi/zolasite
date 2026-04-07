# zolasite

Custom Zola implementation for `https://nakatechlabs.com`

## Prerequisites

- [Zola](https://www.getzola.org/documentation/getting-started/installation/) installed locally

## Project Layout

- `content/` - site pages and blog posts
- `templates/` - Zola templates and partials
- `sass/` - compiled stylesheet source (`sass/main.scss`)
- `static/` - static assets served as-is (images, favicon, etc.)
- `docs/migration-checklist.md` - migration progress checklist

## Run Locally

```bash
zola serve --drafts --open
```

## Build

```bash
zola build
```
