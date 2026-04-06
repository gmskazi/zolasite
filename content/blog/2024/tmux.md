+++
title = 'Optimizing your workflow with tmux.'
description = 'Optimizing your workflow with tmux.'
date = '2024-09-20T05:00:00Z'
draft = false
in_search_index = true

[taxonomies]
categories = ['Mac', 'Linux']
tags = ['Tools', 'Terminal']

[extra]
image = '/images/fun.gif'
author = 'Aito Nakajima'
+++

If you spend a lot of time in the terminal, managing multiple tasks, windows, and processes can become chaotic. Enter `tmux`, a terminal multiplexer that provides an efficient way to handle multiple terminal sessions from a single screen. In this post, I'll explore some essential `tmux` features that can enhance your productivity and streamline your workflow.

## What is tmux?

For those who are new to `tmux`, it’s a terminal multiplexer that provides an efficient way to handle multiple terminal sessions from a single screen, you have the ability to detach from them, and reattach to them later. It’s particularly useful for developers, sysadmins, or anyone who needs a powerful terminal-based environment.

## Install TPM (Tmux Plugin Manager) and Tmux

Run the below command to clone tpm, we will come back to this later on.

```bash
git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
```

Install Tmux

```bash
brew install tmux
```

## Essential Tmux features and configuration

Lets dive into some key `tmux` features and configurations that will optimize your terminal workflow.

### Create a .tmux.conf file in your home directory

```bash
echo ~/.tmux.conf
```

Open the .tmux.conf file in your preferred text editor, I will be using neovim.

```bash
nvim ~/.tmux.conf
```

Please see below my tmux configuration file, copy and paste it into your .tmux.conf file.
I will walk you through the below settings

```bash
set -g default-terminal "screen-256color"

set -g prefix C-Space
unbind C-b
bind-key C-Space send-prefix

# split pane commands
unbind %
bind | split-window -h -c "#{pane_current_path}"

unbind '"'
bind - split-window -v -c "#{pane_current_path}"

# cycle through panes
set-option -g repeat-time 500 #milliseconds
bind-key -r p select-pane -t :.+
bind-key -r P select-pane -t :.-

# Easy reload of tmux configurations
unbind r
bind r source-file ~/.tmux.conf

# Resize pane
bind -r j resize-pane -D 5
bind -r k resize-pane -U 5
bind -r l resize-pane -R 5
bind -r h resize-pane -L 5

bind -r m resize-pane -Z

set -g mouse on

# Start windows and panes at 1, not 0
set -g base-index 1
set -g pane-base-index 1
set-window-option -g pane-base-index 1
set-option -g renumber-windows on

set-window-option -g mode-keys vi

bind-key -T copy-mode-vi 'v' send -X begin-selection # start selecting text with "v"
bind-key -T copy-mode-vi 'y' send -X copy-selection # copy text with "y"

unbind -T copy-mode-vi MouseDragEnd1Pane # don't exit copy mode after dragging with mouse

set-option -g focus-events on
set-option -sg escape-time 10

# Tmux sessionx configurations
set -g @sessionx-bind 'f'

# tpm plugin
set -g @plugin 'tmux-plugins/tpm'

# list of tmux plugins
set -g @plugin 'christoomey/vim-tmux-navigator' # for navigating panes and vim/nvim with Ctrl-hjkl
set -g @plugin 'jimeh/tmux-themepack' # to configure tmux theme
set -g @plugin 'tmux-plugins/tmux-resurrect' # persist tmux sessions after computer restart
set -g @plugin 'tmux-plugins/tmux-continuum' # automatically saves sessions for you every 15 minutes
set -g @plugin 'omerxx/tmux-sessionx' # tmux session management

set -g @themepack 'powerline/default/cyan' # use this theme for tmux

set -g @resurrect-capture-pane-contents 'on' # allow tmux-ressurect to capture pane contents
set -g @continuum-restore 'on' # enable tmux-continuum functionality

# Initialize TMUX plugin manager (keep this line at the very bottom of tmux.conf)
run '~/.tmux/plugins/tpm/tpm'
```

### Terminal and Prefix Configuration

Sets the default terminal type to `screen-256color` to enable 256-color support in tmux,providing more vibrant color options for terminal applications.

```bash
set -g default-terminal "screen-256color"
```

Changes the tmux command prefix key to `Control + Space` (from the default `Control + b`),
meaning you'll now use `C-Space` to start tmux commands.

```bash
set -g prefix C-Space
```

Unbinds the default prefix `C-b`, disabling it.

```bash
unbind C-b
```

Binds `Control + Space` to send the tmux prefix, effectively making it the new command prefix.

```bash
bind-key C-Space send-prefix
```

---

### Split Pane Configuration

- Unbinds the default key for horizontal pane splitting, which is `%`.
- Binds the `|` key to split the current window horizontally and opens the new pane in the same working directory as the current one (with `#{pane_current_path}`).

```bash
unbind %
bind | split-window -h -c "#{pane_current_path}"
```

- Unbinds the default key for vertical pane splitting, which is `"`.
- Binds the `-` key to split the current window vertically, while keeping the new pane in the same working directory.

```bash
unbind '"'
bind - split-window -v -c "#{pane_current_path}"
```

---

### Pane Navigation and Cycling

- Sets the repeat time for a key press to 500 milliseconds, allowing quick, repeated key actions within that time window.
- Binds `p` to move to the next pane in the current window, wrapping around when you reach the last one. The `-r` option makes it repeatable if you hold down `p`.
- Binds `P` to move to the previous pane, wrapping around when you reach the first one. This key is also repeatable.

```bash
set-option -g repeat-time 500
bind-key -r p select-pane -t :.+
bind-key -r P select-pane -t :.-
```

---

### Configuration Reload

- Unbinds the default `r` command.
- Binds `r` to reload the `.tmux.conf` file, making it easy to apply any changes you make to the config file without restarting tmux.

```bash
unbind r
bind r source-file ~/.tmux.conf
```

---

### Pane Resizing

- Binds `j` to resize the pane downwards by 5 units, repeatable by holding the key.
- Binds `k` to resize the pane upwards by 5 units, repeatable.
- Binds `l` to resize the pane to the right by 5 units, repeatable.
- Binds `h` to resize the pane to the left by 5 units, repeatable.
- Binds `m` to toggle pane zoom (maximize/minimize). Repeatable if held.

```bash
bind -r j resize-pane -D 5
bind -r k resize-pane -U 5
bind -r l resize-pane -R 5
bind -r h resize-pane -L 5
bind -r m resize-pane -Z
```

---

### Mouse Support and Indexing

- Enables mouse support in tmux, allowing you to resize panes, switch between panes, and scroll using the mouse.
- Sets the first window's index to 1 (instead of 0).
- Sets the first pane's index to 1 (instead of 0).

```bash
set -g mouse on
set -g base-index 1
set -g pane-base-index 1
```

- Ensures that pane numbering in each window starts at 1.
- Automatically renumbers windows when a window is closed, so there are no gaps in the numbering.

```bash
set-window-option -g pane-base-index 1
set-option -g renumber-windows on
```

---

### Copy Mode Configuration (VI-style)

- Enables vi-style key bindings for copy mode (navigation and text selection).
- In copy mode (using vi key bindings), pressing `v` starts text selection.
- In vi-style copy mode, pressing `y` copies the selected text.
- Disables automatic exit from copy mode after selecting text by dragging the mouse, allowing you to stay in copy mode longer.

```bash
set-window-option -g mode-keys vi
bind-key -T copy-mode-vi 'v' send -X begin-selection
bind-key -T copy-mode-vi 'y' send -X copy-selection
unbind -T copy-mode-vi MouseDragEnd1Pane
```

---

### Focus and Escape Timing

- Enables tmux to detect when the terminal gains or loses focus.
- Reduces the escape delay time to 10 milliseconds, making tmux more responsive when detecting key sequences (especially for keys like `Esc`).

```bash
set-option -g focus-events on
set-option -sg escape-time 10
```

---

### Session Management

Configures `sessionx` plugin to use `f` as the key binding to open its interface.

```bash
set -g @sessionx-bind 'f'
```

---

### Plugin Management and Theme

Loads the `tmux` plugin manager (TPM).

```bash
set -g @plugin 'tmux-plugins/tpm'
```

Adds the Vim-Tmux Navigator plugin, enabling seamless pane navigation with `Ctrl-h/j/k/l`.

```bash
set -g @plugin 'christoomey/vim-tmux-navigator'
```

Loads a theme pack for customizing the appearance of tmux.

```bash
set -g @plugin 'jimeh/tmux-themepack'
```

Enables the Tmux Resurrect plugin to restore tmux sessions after a restart.

```bash
set -g @plugin 'tmux-plugins/tmux-resurrect'
```

Enables the Tmux Continuum plugin, which automatically saves tmux sessions every 15 minutes.

```bash
set -g @plugin 'tmux-plugins/tmux-continuum'
```

Adds the Tmux SessionX plugin for advanced session management.

```bash
set -g @plugin 'omerxx/tmux-sessionx'
```

Sets the tmux theme to a powerline-style theme with a cyan color scheme.

```bash
set -g @themepack 'powerline/default/cyan'
```

Enables Tmux Resurrect to capture the contents of tmux panes (useful for restoring panes after a restart).

```bash
set -g @resurrect-capture-pane-contents 'on'
```

Enables automatic session restoration through the Tmux Continuum plugin.

```bash
set -g @continuum-restore 'on'
```

---

### TPM Initialization

This initializes TPM, allowing it to manage the plugins defined above. It should always be at the bottom of your `.tmux.conf`.

```bash
run '~/.tmux/plugins/tpm/tpm'
```

---

## How to apply this configuration

<!--TODO: Make sure this is set correctly, including installing the plugins -->

1. Save the configuration in your `~/.tmux.conf` file.
2. Start a tmux session called `default`

```bash
tmux new-session -s default
```

If you are already in a tmux session reload tmux by pressing the prefixkey + `r` or run:

```bash
tmux source-file ~/.tmux.conf
```

## How to install the tmux plugins

Run the below key combination to install tmux plugins using TPM while in a tmux session.

```bash
prefixkey + I
```

---

## Autoload tmux at startup

<!--TODO: Update zshrc file to auto load tmux at startup -->

Add the below script in your .zshrc file to create or attach to a tmux session named `default` when opening a new terminal session.

```bash
# Autoload tmux at startup
if command -v tmux &> /dev/null && [ -z "$TMUX" ]; then
    tmux attach-session -t default || tmux new-session -s default
fi
```

---

## Final Thoughts

There is a lot more you can achieve and configure in tmux, I've only scratched the surface for the things that you can do, but this configuration provides customized key bindings for pane management, session control, and advanced plugins like `tmux-resurrect` and `vim-tmux-navigator` while also enabling mouse support and a custom theme.

It is a powerful, customizable way to enhance your tmux experience. It’s particularly useful for users who want seamless Vim integration, easy pane resizing, mouse support, and session management across reboots. Plus, the inclusion of TPM makes managing plugins a breeze.

If you're new to tmux, I suggest experimenting with these settings and plugins to see how they fit into your workflow. Once you get used to these shortcuts and features, you'll find your productivity in terminal work significantly improved!

Happy tmux-ing!

---

## Links

**Checkout the [Git repository](https://github.com/tmux/tmux) for Tmux.**

[tmux cheatsheets](https://tmuxcheatsheet.com/)
