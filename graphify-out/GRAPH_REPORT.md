# Graph Report - zolasite  (2026-04-28)

## Corpus Check
- 3 files · ~629,921 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 46 nodes · 61 edges · 7 communities detected
- Extraction: 66% EXTRACTED · 33% INFERRED · 2% AMBIGUOUS · INFERRED: 20 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 9|Community 9]]

## God Nodes (most connected - your core abstractions)
1. `Template: base.html` - 12 edges
2. `Blog Section Index` - 11 edges
3. `Image: fun.gif` - 7 edges
4. `2024 Archive Index` - 5 edges
5. `Post: Cheatsheet` - 4 edges
6. `Template: index.html` - 4 edges
7. `Template: section.html` - 4 edges
8. `Template: taxonomy_single.html` - 4 edges
9. `2025 Archive Index` - 3 edges
10. `Post: Python Virtualenv on macOS` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Home Content Front Matter` --REFERENCES_IMAGE--> `Image: fun.gif`  [EXTRACTED]
  content/_index.md → static/images/fun.gif
- `Post: Cheatsheet` --REFERENCES_IMAGE--> `Image: fun.gif`  [EXTRACTED]
  content/blog/2025/cheatsheet.md → static/images/fun.gif
- `Post: Python Virtualenv on macOS` --REFERENCES_IMAGE--> `Image: fun.gif`  [EXTRACTED]
  content/blog/2025/python_virtualenv.md → static/images/fun.gif
- `Post: Git Worktree` --REFERENCES_IMAGE--> `Image: fun.gif`  [EXTRACTED]
  content/blog/2025/git_worktree.md → static/images/fun.gif
- `Post: Getting Started with mise` --REFERENCES_IMAGE--> `Image: fun.gif`  [EXTRACTED]
  content/blog/2026/getting_started_with_mise.md → static/images/fun.gif

## Hyperedges (group relationships)
- **hx-template-composition** — tpl-base, partial-header, partial-search-modal, partial-footer, js-header, js-search [EXTRACTED 0.98]
- **hx-homepage-content-pipeline** — tpl-index, content-home, blog-section-index, partial-blog-card [EXTRACTED 0.97]
- **hx-blog-post-image-pattern** — post-cheatsheet, post-python-virtualenv, post-git-worktree, post-cloudflare, post-bat, post-eza, post-zoxide, post-tmux, post-mise, img-fun-gif, img-bat-gif, img-eza-gif, img-zoxide-gif [EXTRACTED 0.96]

## Communities

### Community 0 - "Community 0"
Cohesion: 0.2
Nodes (11): Agent Instructions, Design System Guide, Image: favicon, Image: logo darkmode, Client Script: header navigation, Client Script: search interactions, Partial: footer, Partial: header (+3 more)

### Community 1 - "Community 1"
Cohesion: 0.32
Nodes (8): Home Content Front Matter, Partial: blog card, Partial: breadcrumbs, Partial: sidebar widgets, Template: index.html, Template: page.html, Template: section.html, Template: taxonomy_single.html

### Community 2 - "Community 2"
Cohesion: 0.29
Nodes (7): 2024 Archive Index, Image: bat.gif, Image: eza.gif, Image: zoxide.gif, Post: Bat Better Cat, Post: Eza Better ls, Post: Zoxide Better cd

### Community 4 - "Community 4"
Cohesion: 0.5
Nodes (4): 2026 Archive Index, Blog Section Index, Post: Getting Started with mise, Project README

### Community 5 - "Community 5"
Cohesion: 0.67
Nodes (3): Image: fun.gif, Post: Cloudflare Free Services, Post: tmux workflow

### Community 6 - "Community 6"
Cohesion: 0.67
Nodes (3): 2025 Archive Index, Post: Git Worktree, Post: Python Virtualenv on macOS

### Community 9 - "Community 9"
Cohesion: 1.0
Nodes (2): Image: lazyvim screenshot, Post: Cheatsheet

## Ambiguous Edges - Review These
- `Template: taxonomy_list.html` → `Partial: sidebar widgets`  [AMBIGUOUS]
  templates/partials/sidebar_widgets.html · relation: RELATED_TAXONOMY_NAV

## Knowledge Gaps
- **11 isolated node(s):** `Project README`, `Agent Instructions`, `2026 Archive Index`, `Partial: search modal`, `Client Script: header navigation` (+6 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 9`** (2 nodes): `Image: lazyvim screenshot`, `Post: Cheatsheet`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Template: taxonomy_list.html` and `Partial: sidebar widgets`?**
  _Edge tagged AMBIGUOUS (relation: RELATED_TAXONOMY_NAV) - confidence is low._
- **Why does `Blog Section Index` connect `Community 4` to `Community 1`, `Community 2`, `Community 5`, `Community 6`, `Community 9`?**
  _High betweenness centrality (0.412) - this node is a cross-community bridge._
- **Why does `Template: base.html` connect `Community 0` to `Community 1`?**
  _High betweenness centrality (0.382) - this node is a cross-community bridge._
- **Why does `Template: index.html` connect `Community 1` to `Community 0`, `Community 4`?**
  _High betweenness centrality (0.355) - this node is a cross-community bridge._
- **Are the 10 inferred relationships involving `Blog Section Index` (e.g. with `Project README` and `Post: Cheatsheet`) actually correct?**
  _`Blog Section Index` has 10 INFERRED edges - model-reasoned connections that need verification._
- **Are the 5 inferred relationships involving `2024 Archive Index` (e.g. with `Post: Cloudflare Free Services` and `Post: Bat Better Cat`) actually correct?**
  _`2024 Archive Index` has 5 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Post: Cheatsheet` (e.g. with `Blog Section Index` and `2025 Archive Index`) actually correct?**
  _`Post: Cheatsheet` has 2 INFERRED edges - model-reasoned connections that need verification._