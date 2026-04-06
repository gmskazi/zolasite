+++
title = "Bat - A better 'cat'?"
description = 'Bat, a better cat?'
date = '2024-09-15'
draft = false
in_search_index = true

[taxonomies]
categories = ['Mac', 'Linux']
tags = ['Terminal', 'Tools', 'Bash']

[extra]
image = '/images/bat.gif'
author = 'Aito Nakajima'
+++

## Understanding the `bat` Command

**A Modern Alternative to `cat`**

When it comes to displaying file content in Linux and Unix-based systems, the `cat` command has been a go-to utility for decades. However, as the need for readability and additional functionality grows, a new alternative is catching the eye of developers and IT professionals alike, **`bat`**.

In this post, we'll explore what makes `bat` an exciting and powerful replacement for `cat`. Whether you're new to command-line tools or a seasoned developer looking to optimize your workflow, read on to discover how `bat` can enhance your day-to-day terminal experience.

---

## What is `bat`?

**`bat`** is a command-line utility for reading and displaying file contents, similar to the ubiquitous `cat` command. However, it offers a host of additional features designed to improve the user experience:

- **Syntax highlighting** for a wide range of programming and markup languages.
- **Automatic paging** for large files.
- **Line numbers** for easy reference.
- **Git integration**, showing file modifications when viewing files in a Git repository.

---

## Key Features of `bat`

Let's dive into some of the standout features that make `bat` a popular choice among developers.

### Syntax Highlighting

One of the most useful features of `bat` is its ability to highlight syntax based on the file type. This feature works automatically, making it much easier to read code and configuration files at a glance.

Example:

```bash
bat my_script.go
```

With this, you can immediately see Go syntax like keywords, comments, and strings in distinct colors. This alone is a game-changer when reviewing scripts or code files.

### Line Numbers

When working on a large file, especially in a collaborative environment, having line numbers can significantly improve navigation and communication. `bat` adds line numbers by default, making it easy to reference sections of a file.

```bash
bat --style=numbers my_script.go
```

### Paging for Large Files

When a file is too large to fit in the terminal, `bat` automatically invokes a pager (like `less`). This ensures that you won't get overwhelmed with output all at once, giving you the ability to scroll through the file at your own pace.

```bash
bat large_log_file.log
```

### Git Integration

When viewing files in a Git repository, `bat` shows which lines have been modified compared to the last commit. This is particularly useful for developers who want to quickly see what has changed in a file without leaving the terminal.

```bash
bat my_code.go
```

Lines that have been modified will be highlighted, adding a visual cue for changes, insertions, and deletions.

To only show the changes that have been made in git.

```bash
bat -d my_code.go
```

### Customizable Styles

You can configure the appearance of `bat`'s output using different style options, such as adding line numbers, headers, or even hiding certain information.

Example:

```bash
bat --style=plain my_script.go
```

In this case, the output will show the file contents without line numbers or syntax highlighting.

### Tokyo-night theme customizations

Run the below script for setting up Tokyo-night as the Bat theme.

```bash
mkdir -p "$(bat --config-dir)/themes"
cd "$(bat --config-dir)/themes"
# Replace _night in the lines below with _day, _moon, or _storm if needed.
curl -O https://raw.githubusercontent.com/folke/tokyonight.nvim/main/extras/sublime/tokyonight_night.tmTheme
bat cache --build
bat --list-themes | grep tokyo # should output "tokyonight_night"
echo '--theme="tokyonight_night"' >> "$(bat --config-dir)/config"
```

[Original link](https://github.com/folke/tokyonight.nvim/issues/23#issuecomment-1636639722) where this script was found

## Installing `bat`

Installation of `bat` is straightforward, and it supports multiple platforms.

### On Linux

For most Linux distributions, you can install `bat` via the package manager:

```bash
sudo apt install bat
```

### On macOS

If you're using Homebrew, the installation is just as simple:

```bash
brew install bat
```

### On Windows

Windows users can install `bat` via **scoop** or **chocolatey**:

```bash
scoop install bat
```

or

```bash
choco install bat
```

Once installed, `bat` will be available from the terminal, and you can start using it just like `cat`.

---

## Why Should You Use `bat` Over `cat`?

While `cat` remains a perfectly functional tool, it lacks many of the usability features that make `bat` a more efficient option for developers, especially when working with code.

Here's a quick comparison of what `bat` brings to the table:

| Feature             | `cat` | `bat` |
| ------------------- | ----- | ----- |
| Syntax Highlighting | No    | Yes   |
| Line Numbers        | No    | Yes   |
| Git Integration     | No    | Yes   |
| Paging              | No    | Yes   |

If you're looking for a simple file display tool, `cat` will still work for you. However, for a more modern, feature-rich experience, `bat` offers clear advantages.

---

## Conclusion

The `bat` command is more than just a better-looking `cat`, it's a tool that integrates seamlessly into a developer's workflow. From syntax highlighting to Git integration, it enhances readability and usability in ways that make working with files easier and more efficient.

If you're not already using `bat`, it might be time to give it a try and see how it can enhance your terminal experience.

To gain more knowledge on bat read the friendly manual.

```bash
man bat
```

---

## Links

**Checkout the [Git repository](https://github.com/sharkdp/bat) for Bat.**
