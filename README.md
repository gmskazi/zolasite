# Nakatechlabs site

Custom Zola implementation for `https://nakatechlabs.com`

## Prerequisites

- [Zola](https://www.getzola.org/documentation/getting-started/installation/) installed locally
- [mise](https://mise.jdx.dev/) installed for local tooling and checks

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

## Tooling and Checks (mise)

Install project tools and local lint dependencies:

```bash
mise install
```

Run all strict checks (fails on any warning/error):

```bash
mise run check
```

Run checks individually:

```bash
mise run scan:secrets
mise run lint:md
mise run lint:scss
mise run build
```

## Build

```bash
zola build
```
