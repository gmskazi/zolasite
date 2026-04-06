# Hugo to Zola Migration Checklist

Scope: custom Zola implementation that is visually similar to the current site, with dark mode only.

## 1) Zola Structure and Config
- [x] Add taxonomies in `zola.toml` for `categories` and `tags`
- [x] Define permalink strategy to match current URLs (`/blog/{year}/{slug}/`, `/categories/...`, `/tags/...`)
- [x] Confirm base URL and build settings remain correct

## 2) Content Migration Foundation
- [x] Migrate homepage content from Hugo `content/english/_index.md`
- [x] Migrate blog section metadata from Hugo `content/english/blog/_index.md`
- [x] Migrate all posts from Hugo `content/english/blog/2024/*`
- [x] Migrate all posts from Hugo `content/english/blog/2025/*`
- [x] Normalize filename/slug edge cases (for example `Python_VirtualEnv.md`)

## 3) Asset Migration
- [x] Copy required media from Hugo `assets/images/*` to Zola `static/images/*`
- [x] Verify logo and favicon assets exist and resolve correctly
- [ ] Verify post images/GIFs resolve correctly from migrated markdown

## 4) Custom Templates (No Theme Import)
- [x] Create `templates/base.html`
- [x] Create `templates/index.html` (home)
- [x] Create `templates/section.html` (blog list)
- [x] Create `templates/page.html` (post detail)
- [x] Create `templates/taxonomy_list.html` and `templates/taxonomy_single.html`
- [x] Create partials for `header`, `footer`, `blog-card`, `sidebar-widgets`, and breadcrumbs

## 5) Dark-Only Styling System
- [x] Build style tokens in `sass/` (dark palette, spacing, typography)
- [x] Implement global base styles (body, headings, links, content typography)
- [x] Implement components (navigation, buttons, cards, sidebar widgets, footer)
- [x] Remove light mode and theme toggler logic entirely

## 6) Feature Parity (Essential)
- [x] Wire search using Zola search index
- [x] Implement blog cards with title, summary, author/date/category metadata
- [x] Implement category and tag listing/term pages
- [x] Add post TOC rendering for long articles

## 7) Validation and QA
- [x] Run `zola build` and fix all errors
- [x] Run `zola serve --drafts --open` for iterative checks
- [ ] Verify route parity for home, blog list, posts, categories, tags
- [ ] Verify responsive behavior (mobile nav, card grid, post readability)
- [ ] Verify no broken links or missing assets

## 8) Polish and Handoff
- [ ] Final visual tuning to stay similar to the current site style
- [ ] Document intentional differences from the old Hugo template
- [ ] Prepare final deployment checklist

## Current Sprint (Recommended Order)
- [x] Build template skeleton and dark tokens
- [x] Implement home, blog list, and post detail pages
- [x] Migrate 3 representative posts plus media
- [x] Implement taxonomies and sidebar widgets
- [x] Add search
- [ ] Complete full content import and final QA
