# Agent Instructions

## Project Intent

- This project is a blog site for everything tech and just for fun.

## Canonical Commands

```bash
zola serve --drafts --open
zola build
```

## Design Guide

- Use `DESIGN.md` as the single source of truth for visual style and UI behavior.
- Do not duplicate style rules in `AGENTS.md`; keep design guidance centralized in `DESIGN.md`.

## Before Finishing Changes

- Run `zola build` and fix any template/content errors.
- For iterative UI work, validate locally with `zola serve --drafts --open`.

## Documentation Upkeep

- When workflows or structure change, update `README.md` in the same task.
- When design system/style workflow changes, update `DESIGN.md` in the same task.

## graphify

This project has a graphify knowledge graph at graphify-out/.

Rules:
- Before answering architecture or codebase questions, read graphify-out/GRAPH_REPORT.md for god nodes and community structure
- If graphify-out/wiki/index.md exists, navigate it instead of reading raw files
- For cross-module "how does X relate to Y" questions, prefer `graphify query "<question>"`, `graphify path "<A>" "<B>"`, or `graphify explain "<concept>"` over grep — these traverse the graph's EXTRACTED + INFERRED edges instead of scanning files
- After modifying code files in this session, run `graphify update .` to keep the graph current (AST-only, no API cost)
