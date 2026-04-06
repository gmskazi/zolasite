+++
title = "Zoxide - A better 'cd'?"
description = 'Zoxide, a better cd?'
date = '2024-09-06T05:00:00Z'
draft = false
in_search_index = true

[taxonomies]
categories = ['Mac', 'Linux']
tags = ['Terminal', 'Tools', 'Bash']

[extra]
image = '/images/zoxide.gif'
author = 'Aito Nakajima'
+++

Hey everyone, Today, we're diving into a super handy terminal tool called `zoxide`. If you navigate through directories a lot, whether you're a developer, sysadmin, or just a terminal enthusiast, `zoxide` is going to make your life so much easier. It’s like a turbocharged version of `cd`, and once you get the hang of it, you'll never want to go back. So let’s get started!

## What is Zoxide?

So, what exactly is `zoxide`? In simple terms, it's a smart, faster way to jump between directories in your terminal. Think of it like an enhanced `cd` command that learns which directories you access frequently, and then lets you jump to them with minimal typing. It's built to save you time, especially if you have a complex directory structure or frequently switch between different projects.

## Installing Zoxide

Installing `zoxide` is pretty straightforward, and it supports multiple operating systems. If you’re on macOS, you can install it using Homebrew:

```bash
brew install zoxide
```

For Linux, you can use a package manager like `apt` if you are using a debian/ubuntu distro:

```bash
sudo apt install zoxide
```

Once it's installed, you'll need to integrate it with your shell. For example, if you’re using `bash` or `zsh`, you’ll add this line to your `.bashrc` or `.zshrc` file:

```bash
eval "$(zoxide init zsh)"
```

Or if you would like to alias `cd` to `zoxide`

```bash
eval "$(zoxide init --cmd cd zsh)"
```

Make sure to replace `zsh` with `bash` or `fish`, depending on your shell. Then, restart your terminal or reload your config, and you’re good to go!

To reload your .zshrc config:

```bash
source ~/.zshrc
```

## Basic Usage

Let's start with the basics. Unlike `cd`, where you need to type the full path of a directory, `zoxide` allows you to jump to directories you've already visited by typing just part of their name. However, it's important to note that before `zoxide` can help you navigate to a directory, you must have visited that location at least once. `zoxide` builds its database by tracking your movement across directories.

For example, if you've already navigated to `~/projects/my-awesome-project` using `zoxide`, you can return to it by typing:

```bash
z my-awesome
```

`zoxide` will take you directly to that folder. The more directories you visit, the more useful `zoxide` becomes, helping you quickly jump to frequently accessed locations without typing long paths.

Additionally, if you want to return to your home directory, simply type:

```bash
z
```

That's all you need! It's an intuitive and fast way to navigate, especially if you're constantly moving around different directories.

## Advanced Usage

Now let's look at some advanced features. If you have multiple directories with similar names, `zoxide` has you covered. You can be more precise by specifying additional parts of the directory path to ensure you jump to the correct one.

For instance, if you have both `~/projects/foo` and `~/documents/foo`, and you want to navigate to the `projects` directory, you can type:

```bash
z projects foo
```

This ensures that `zoxide` picks the correct `foo` folder from your history.

### Interactive Search with `zi`

Another powerful feature of `zoxide` is its interactive search mode, accessible via the `zi` command. Just type:

```bash
zi
```

This will bring up a list of directories that you've accessed before. You can start typing part of a directory's name to filter through the list, and use the arrow keys to navigate through the options. Once you've found the directory you're looking for, press Enter, and `zoxide` will take you straight there.

### Weighted Learning

`zoxide` doesn't just track where you've been, it learns from your behavior. The more frequently you access a directory, the higher it will rank that directory in your future queries. This means that even if you have multiple similarly named directories, `zoxide` will prioritize the ones you use the most, making your navigation even faster over time.

## Tips and Tricks

Here are some tips and tricks to get the most out of `zoxide`:

- **Learning from Usage:** The more you use `zoxide`, the better it gets at predicting where you want to go. It learns your habits and adjusts its ranking of directories accordingly.
- **Manual Additions:** If there's a directory you want `zoxide` to remember, even if you haven't visited it yet, you can manually add it to the database using the `zoxide add` command:

  ```bash
  zoxide add /path/to/directory
  ```

  This is useful if you know you'll need quick access to a directory in the future but haven't navigated there yet.

- **Viewing the Database:** You can see all the directories that `zoxide` has stored and how often you've visited them by running:

  ```bash
  zoxide query -ls
  ```

  This will display a list of all tracked paths and their respective frequencies. It's a handy way to get a sense of how often you're visiting certain directories.

## Conclusion

That's a comprehensive look at `zoxide`, a simple yet powerful tool that can save you tons of time navigating through directories in the terminal. Whether you're managing multiple projects, jumping between directories, or just trying to streamline your workflow, `zoxide` is an invaluable addition to your toolkit.

I hope you found this guide helpful. Keep experimenting with `zoxide`, and over time, it will become an essential part of your terminal workflow. Thanks for reading, and happy coding!

## Link

**Check out the [Git repository for zoxide.](https://github.com/ajeetdsouza/zoxide)**
