+++
title = "Eza - A better 'ls'?"
description = 'Eza, a better ls?'
date = '2024-09-04'
draft = false
in_search_index = true

[taxonomies]
categories = ['Mac', 'Linux']
tags = ['Terminal', 'Tools', 'Bash']

[extra]
image = '/images/eza.gif'
author = 'Aito Nakajima'
+++

Hey everyone, today we're diving into the world of command-line tools, and if you've spent any time in the terminal, you know the ls command. It's that classic tool for listing files and directories. But let's be honest, ls is functional, but it could be better when it comes to readability, customization, and just overall usefulness. That's where Eza steps in! Eza is a modern, user-friendly replacement for ls that brings more features, better performance, and, let's face it, way better-looking output. In this video, we'll check out why Eza is an awesome alternative to ls, how to get started with it, and some of the standout features that can make your terminal life easier.

## So what is Eza?

[Eza](https://github.com/eza-community/eza) is like `ls`, but with a whole new vibe. It's built with Rust, so its pretty fast. And the best part? Its designed to be a drop-in replacement for ls, so you don't have to change your habits just your command. Eza offers colorful, human-readable output, more sorting options, and so much more. If you're in the terminal a lot, this tool is going to be your new best friend.

## Why Use Eza Over `ls`?

While `ls` is functional and reliable, it can sometimes feel a bit outdated, especially when handling large directories or working with complex file structures. Here are some reasons why Eza might be a better choice:

1. **Readable Output**: Eza enhances the visual experience by adding colors and icons, making it easier to distinguish between files, directories, and other file types.
2. **Human-Friendly Sizes**: Eza displays file sizes in a human-readable format (e.g., MB, GB), eliminating the need for additional flags or mental calculations.

3. **Sorting Options**: It provides more advanced sorting options such as sorting by file extension, last modified date, and more.

4. **Performance**: Built with Rust, Eza is optimized for speed and performance, making it faster than `ls` in many scenarios.

5. **Extended Metadata**: Eza can display extended file metadata, including Git status, which is especially useful for developers working with version-controlled directories.

## Getting Started with Eza

Installing Eza is straightforward, especially if you're already comfortable with package managers. Here's how you can get started:

**On Linux (via package managers):**

```bash
# Using Homebrew
brew install eza

# Using apt (for Debian/Ubuntu)
sudo apt install eza

# Using dnf (for Fedora)
sudo dnf install eza

```

**On MacOS:**

```bash
brew install eza
```

Once installed, you can start using Eza right away by simply typing eza instead of ls. For a better experience, you can alias it in your shell configuration file (e.g., .bashrc, .zshrc):

To alias ls to eza, add the below to your zshrc file.

```bash
alias ls="eza --icons=always"
```

Or run the below command from your terminal

```bash
echo 'alias ls="eza --icons=always"' >> ~/.zshrc
```

## Key Features of Eza

**Here are some of the key features of Eza that make it stand out:**

1. Colorful Output: Eza adds colors and icons to its output, making it easy to identify different file types at a glance.
2. Git Integration: With Eza, you can see the Git status of files directly in the output. This feature is great for developers who want a quick overview of modified, staged, or untracked files in their repository.
3. Tree View: Eza can display directory contents in a tree view, making it easier to understand the structure of complex directories. This is particularly useful for navigating nested folders.
4. Extended Attributes: Eza can show extended file attributes, such as permissions and ownership, in a more readable format.
5. Customizable Output: You can tailor Eza’s output to your liking using various options and flags. For example, if you prefer a long list format with detailed file information, you can use:

## Example Commands

**Here are some example commands to get you started with Eza:**

• Basic Listing with Details:

```bash
eza -la
```

• Tree View of Directories:

```bash
eza --tree
```

• Sorting by File Extension:

```bash
eza -la --sort extension
```

• Display with Git Status:

```bash
eza -la --git
```

• Listing with details, Tree view and ignore gitignore file:

```bash
eza -la --tree --git-ignore
```

For more information on how to use eza and all if its features, please read the documentation.

```bash
man eza
```

## Conclusion

Eza is a powerful and modern alternative to the traditional ls command, bringing a much-needed refresh to file listing in the terminal. With its enhanced readability, performance, and additional features, Eza can greatly improve your command-line workflow. Whether you’re a developer, sysadmin, or just someone who loves spending time in the terminal, Eza is definitely worth a try.

So, if you’re looking for a better ls, give Eza a shot, and you might never go back!

Happy terminal hacking!

**Checkout the [Git repository](https://github.com/eza-community/eza) for Eza.**
