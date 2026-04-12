+++
title = 'Git Worktree - Practical workflow with a central bare repo'
description = 'A practical Git worktree setup using a central bare repo and sibling working directories.'
date = '2026-04-12T05:00:00Z'
draft = false
in_search_index = true

[taxonomies]
categories = ['Mac', 'Linux', 'Programming']
tags = ['Tools', 'Git', 'Terminal']

[extra]
image = '/images/fun.gif'
author = 'Aito Nakajima'
+++

`git worktree` is one of the most useful Git features once you start juggling multiple tasks at the same time. It lets you keep multiple branches checked out in separate folders, all backed by the same repository data.

In this post, I will share a practical setup that I use and recommend: a **central bare repo in `.git`** with sibling worktree folders like `main/` and `feature-login/`.

## What is Git Worktree?

`git worktree` lets you attach additional working directories to one repository. Instead of switching branches in one folder (and stashing constantly), each branch can live in its own directory.

This is useful for:

- building a feature while hotfixing production,
- reviewing a PR without disturbing your current work,
- experimenting safely in an isolated folder.

## Recommended directory layout

The layout below keeps things simple and easy to navigate:

```bash
$ tree -L 1
.
|-- .git
|-- main
|-- feature-login
`-- bugfix-123

4 directories, 0 files
```

```text
.git/            # central bare repo (metadata + objects)
main/            # main branch worktree
feature-login/   # feature branch worktree
bugfix-123/      # bugfix branch worktree
```

This keeps everything in one parent directory and avoids extra nesting.

## Setup from scratch

### 1) Create the folder and clone as bare into `.git`

```bash
mkdir myrepo
cd myrepo
git clone --bare <repository-url> .git
```

Example:

```bash
git clone --bare git@github.com:user/repo.git .git
```

### 2) Add your main working tree

```bash
git worktree add main main
cd main
```

Now `main/` is a normal working directory.

## Daily workflow

### 1) Create a feature worktree

From the parent folder (`myrepo/`):

```bash
git worktree add -b feature/login feature-login main
cd feature-login
```

Then set upstream on first push:

```bash
git push -u origin feature/login
```

### 2) Work and commit normally

Inside a worktree folder, you use regular Git commands:

```bash
git status
git add .
git commit -m "Add login form validation"
git push
```

### 3) See all active worktrees

```bash
git worktree list
```

### 4) Remove a worktree after merge

```bash
cd ..
git worktree remove feature-login
git branch -d feature/login
git push origin --delete feature/login
git worktree prune
```

## Why this works well

### Parallel work without context switching pain

You can keep unrelated tasks open in separate folders instead of constantly switching branches in one directory.

### Shared Git data, less disk usage

Worktrees share Git objects, so this is lighter than cloning the same repository multiple times.

### Cleaner day-to-day flow

You usually do not need to stash just to switch tasks, because each task already has its own working directory.

### Better review and testing isolation

You can open a review branch or experiment branch in a separate folder without affecting your current feature work.

## Common mistakes to avoid

1. Running `git worktree add <branch>` without a path.

Use both path and branch intent explicitly, for example:

```bash
git worktree add -b feature/x feature-x main
```

2. Saying "you never need stash anymore."

Worktrees reduce stash usage a lot, but stash can still be useful in some scenarios.

3. Forgetting to prune stale metadata after manual cleanup.

Use:

```bash
git worktree prune
```

## Conclusion

`git worktree` is a big productivity boost once your work involves parallel tasks. The central bare repo approach (`.git` + sibling worktree folders) keeps the setup simple, fast, and easy to reason about.

If you have never tried this layout, start with `main/` plus one feature folder and expand from there.

## Link

- [git worktree official documentation](https://git-scm.com/docs/git-worktree)
