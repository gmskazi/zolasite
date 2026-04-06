# zolasite

Custom Zola implementation for `https://nakatechlabs.com`, migrated from Hugo with a similar visual style.

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

## Migration Workflow

1. Update content and assets from Hugo source
2. Implement or adjust templates in `templates/`
3. Style in `sass/main.scss` (dark-mode only)
4. Run `zola build` to catch template/content issues
5. Validate in browser with `zola serve --drafts --open`
