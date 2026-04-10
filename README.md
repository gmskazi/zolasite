# Nakatechlabs site

[![CI](https://img.shields.io/github/actions/workflow/status/gmskazi/zolasite/ci.yml?branch=main&style=flat&label=CI)](https://github.com/gmskazi/zolasite/actions/workflows/ci.yml)
[![Zola](https://img.shields.io/badge/Zola-0.22.1-0f766e?style=flat)](https://www.getzola.org/)
[![Node](https://img.shields.io/badge/Node-22-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](LICENSE)
[![Secrets](https://img.shields.io/badge/secrets-gitleaks-success?style=flat)](mise.toml)

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

## Deployment

This site is deployed to Cloudflare Pages. The `main` branch is configured to automatically deploy on push.

## Security

- Secret scanning is part of local and CI checks via `mise run scan:secrets`
