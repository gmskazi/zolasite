+++
title = 'lnav - Practical log workflow in the terminal'
description = 'A practical lnav setup for reading, filtering, and navigating logs without leaving the terminal.'
date = '2026-04-28T05:00:00Z'
draft = false
in_search_index = true

[taxonomies]
categories = ['Mac', 'Linux', 'Programming']
tags = ['Tools', 'Terminal', 'Logs', 'Debugging']

[extra]
image = '/images/fun.gif'
author = 'Aito Nakajima'
+++

`lnav` is one of the most useful terminal tools once you start debugging across multiple log files. It merges logs by time, detects formats automatically, and gives you a faster way to find signal during incidents.

In this post, I will share a practical workflow that I use: open a directory of logs, filter noise quickly, and navigate errors without leaving the terminal.

## What is lnav?

`lnav` (Logfile Navigator) is a terminal log viewer and analyzer.

Given files/directories, it can:

- detect log formats automatically,
- merge log entries by timestamp,
- follow updates like `tail -f`,
- handle compressed files,
- pretty-print JSON logs.

Inside the TUI, you can search, filter, and jump between errors.

## Why use this instead of tail + grep + less?

The standard tools are great, but they have limits when debugging real incidents.

Common pain points:

- logs are spread across multiple files,
- timestamps are hard to correlate manually,
- structured logs are noisy in plain text form,
- one-off shell pipelines become hard to maintain.

`lnav` solves this by giving you one merged timeline plus interactive filtering.

## Recommended workflow

The workflow below is simple and works well in day-to-day debugging.

### 1) Open logs from a directory

```bash
lnav /var/log/myapp
```

Or mix files and directories:

```bash
lnav /var/log/nginx/access.log /var/log/myapp
```

### 2) Navigate errors first

In `lnav`:

- press `e` to jump to next error/warning,
- press `E` to jump backward.

This is usually the fastest way to get signal before deep analysis.

### 3) Search and filter noise

Search with regex:

```text
/error|timeout|exception
```

Then filter out noisy lines with commands (inside `lnav` command mode):

```text
:filter-out DEBUG
:filter-out healthcheck
```

This keeps the timeline readable while preserving context.

### 4) Pretty-print structured logs

If your logs contain JSON-lines, press:

```text
P
```

This makes nested fields much easier to inspect during debugging.

## Useful setup commands

### Install on macOS

```bash
brew install lnav
```

### Use with journald

```bash
journalctl -o json | lnav
```

Follow mode:

```bash
journalctl -f -o json | lnav
```

Using JSON output gives `lnav` richer log fields and better readability.

## Common mistakes to avoid

1. Treating `lnav` like only a viewer.

Use error navigation and filters early. That is where most of the value comes from.

1. Starting with full logs and no constraints.

Limit by time window or source first, then widen if needed.

1. Keeping too many filters active and forgetting them.

If results look odd, clear filters and rebuild intentionally.

## Why this works well

### Fast incident triage

Jumping directly between errors reduces time spent scrolling.

### Better correlation across services

Merged chronological view makes cross-file debugging much easier.

### Strong terminal-native flow

You keep your shell workflow and still get structured log navigation.

### Lower setup cost

You can analyze local logs immediately without building a separate stack first.

## Conclusion

`lnav` is a big productivity boost when you debug from the terminal and need more than plain text tools. The combination of merged timeline, interactive filters, and fast navigation gives you a practical workflow that scales from small issues to messy incidents.

If you have never tried it, start with one production log directory and practice: jump errors, filter noise, and inspect structured lines.

## Links

- [lnav repository](https://github.com/tstack/lnav)
- [lnav documentation](https://docs.lnav.org)
