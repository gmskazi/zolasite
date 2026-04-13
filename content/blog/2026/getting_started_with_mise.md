+++
title = 'Getting Started with mise on macOS'
description = 'A beginner-friendly guide to using mise, and the ways I use it to manage environments, and project tasks on macOS.'
date = '2026-04-13T05:00:00Z'
draft = false
in_search_index = true

[taxonomies]
categories = ['Mac', 'Programming']
tags = ['Tools', 'Terminal', 'Python', 'mise']

[extra]
image = '/images/fun.gif'
author = 'Aito Nakajima'
+++

I started using `mise` to simplify both this repository and my Python projects. My goal was simple: reduce tool sprawl and make setup repeatable.

This is a beginner-friendly walkthrough of what worked for me on macOS.

## What is `mise`?

`mise` is a tool manager and task runner. You can use it to:

- manage language/tool versions per project,
- keep setup in one file (`mise.toml`),
- run project commands with `mise run`.

In this post, I separate it into two parts:

- how I use `mise` in this repository,
- how I use it for Python (`uv`) and how it replaced parts of my old `pyenv`/`tox` flow.

I also use `mise` for general CLI tool management, not just Python. A real example from my setup:

```toml
[tools]
bitwarden-secrets-manager = { version = "0.5.0", version_prefix = "bws-v" }
cilium-cli = "0.19.2"
cilium-hubble = "1.18.6"
kubectl = "1.35.0"
talosctl = "1.12.5"
```

That gives me one place to pin infra/security tooling versions per machine or per project.

## Why I started using it

Before `mise`, I was mixing multiple setup patterns across repos. The result was more context switching than I wanted.

`mise` gave me one place to pin tool versions and encode repeatable commands.

## 1) Install `mise` on macOS

Install:

```bash
brew install mise
```

Check that it works:

```bash
mise --version
```

Activate `mise` for your shell (zsh example):

```bash
echo 'eval "$(mise activate zsh)"' >> ~/.zshrc
source ~/.zshrc
```

If you use another shell, check the official docs for the activation command.

## 2) How I use `mise` in this repo

This repository already has a practical `mise.toml` you can use as a mental model:

```toml
[tools]
node = "22"
zola = "0.22.1"
gitleaks = "latest"

[tasks.deps]
description = "Install local lint dependencies"
run = "npm install --no-fund --no-audit"

[tasks."lint:md"]
description = "Lint markdown content"
depends = ["deps"]
run = "npx markdownlint-cli2 \"README.md\" \"content/**/*.md\" \"docs/**/*.md\""

[tasks."lint:scss"]
description = "Lint SCSS styles"
depends = ["deps"]
run = "npx stylelint \"sass/**/*.scss\" --max-warnings 0"

[tasks."scan:secrets"]
description = "Scan repository history for secrets"
run = "gitleaks git --redact --verbose"

[tasks.build]
description = "Build the site"
run = "zola build"

[tasks.check]
description = "Run all checks"
depends = ["scan:secrets", "lint:md", "lint:scss", "build"]
```

What this shows:

- `tools` pins exact CLI versions.
- `tasks` makes common commands reproducible.
- `depends` composes smaller tasks into one command (`check`).

Run the real workflow like this:

```bash
mise install
mise run check
```

Run namespaced tasks directly when needed:

```bash
mise run "lint:md"
mise run "lint:scss"
```

That is the setup I actually run here day to day.

### Git-friendly team flow

For a new teammate (or your future self on another machine):

1. clone repo
2. `cd` into repo
3. `mise trust` (first time)
4. `mise install`
5. `mise run check`

That is the main reason I like this approach: setup is encoded in versioned files instead of personal shell history.

## 3) Separate Python workflow (`mise` + `uv`)

For Python projects, I start command-driven and let `mise` write the tool pins:

```bash
mkdir demo-python-mise
cd demo-python-mise
git init
mise use python@3.12 uv@latest
mise install
python --version
uv --version
```

Then initialize dependencies:

```bash
uv init --name demo-python-mise
uv add requests
uv add --dev pytest ruff
uv sync
```

And commit the baseline:

```bash
git add mise.toml pyproject.toml uv.lock
git commit -m "chore: bootstrap python toolchain with mise + uv"
```

After that, I keep the same task-driven pattern as this repo.

For Python repos, keep it simple and task-driven:

```toml
[tools]
python = "3.12"
uv = "latest"

[tasks.setup]
run = "uv sync"

[tasks.test]
run = "uv run pytest -q"

[tasks.lint]
run = "uv run ruff check ."

[tasks.check]
depends = ["lint", "test"]
```

Then run:

```bash
mise install
mise run setup
mise run check
```

For non-`uv` repos, `mise` can still support classic virtualenv flows:

```toml
[env]
_.python.venv = { path = ".venv", create = true }
```

## What this replaced for me

In my day-to-day workflow, switching to `mise` + `uv` let me remove or reduce:

- `pyenv` for Python version switching,
- most `tox` usage for routine local test/lint flows,
- ad-hoc shell notes for setup commands.

My default flow is now: `mise use` once, then `mise install`, then `mise run ...` / `uv run ...`.

## Before vs after

### Before

- remember Python version setup manually,
- jump between different tooling patterns,
- repeat setup commands from memory or old notes.

### After

- project declares Python version in `mise.toml`,
- same entry point across projects,
- easier repo switching and cleaner setup.

## Common beginner gotchas

1. `mise` command works, but Python version does not change.

Usually shell activation is missing. Make sure your shell rc includes:

```bash
eval "$(mise activate zsh)"
```

1. `mise.toml` is not in the project root.

Run `mise use ...` inside the repository folder you want to configure.

1. Forgetting to commit `mise.toml`.

If `mise.toml` is not tracked by Git, your automated flow is only local.

1. Mixing `uv` flow and manual `.venv` flow in the same project.

Pick one default per repo. If you use `uv`, prefer `uv run` and `uv sync`. If you use classic venv, configure `_.python.venv` or create `.venv` manually.

1. You get a trust prompt for `mise.toml`.

This is expected for security. If the config is yours, run:

```bash
mise trust
```

## Final thoughts

If you are just getting started and want a cleaner Python workflow, `mise` is worth trying. You do not have to migrate everything at once.

Start with one project, pin Python, add one or two tasks, and build from there.

I am also still finding new ways to use `mise` and continuously refining this workflow as I learn what fits my projects best.

## Links

- [mise Getting Started](https://mise.jdx.dev/getting-started.html)
- [mise Python docs](https://mise.jdx.dev/lang/python.html)
- [mise settings](https://mise.jdx.dev/configuration/settings.html)
- [Python venv documentation](https://docs.python.org/3/library/venv.html)
