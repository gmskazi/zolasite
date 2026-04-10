+++
title = 'Cheatsheet'
description = 'Cheatsheet'
date = '2025-02-07'
draft = false
in_search_index = true

[taxonomies]
categories = ['Mac', 'Linux']
tags = ['Tools', 'Terminal']

[extra]
image = '/images/fun.gif'
author = 'Aito Nakajima'
+++

Personal Cheatsheet for the programs that I use the most.

## Ghostty Terminal

### Ghostty config location

```bash
~/.config/ghostty/config
```

### Shortcuts

---

#### "Window Management"

| Command | Description      |
| :-----: | ---------------- |
|  cmd+`  | Quick Terminal   |
|  cmd+n  | New Terminal     |
|  cmd+q  | Quit Application |

#### "Tab Management"

|   Command   | Description          |
| :---------: | -------------------- |
|    cmd+t    | New tab              |
|    cmd+w    | Close tab            |
|  cmd+[1~8]  | Jump to another tab  |
|    cmd+9    | Jump to the last tab |
| cmd+shift+[ | Previous tab         |
| cmd+shift+] | Next tab             |

#### "Font Size"

| Command | Description        |
| :-----: | ------------------ |
|  cmd++  | Increase font size |
|  cmd+-  | Decrease font size |
|  cmd+0  | Reset text size    |

#### "Configurations"

|   Command   | Description   |
| :---------: | ------------- |
|    cmd+,    | Open Config   |
| cmd+shift+, | Reload config |

#### "List Ghostty keybindings"

```bash
ghostty +list-keybinds
```

---

### Issues

**Issues with Ghostty Tabs and quick Terminal while using Aerospace,
for both to work correctly:**

The fix is to set the Ghostty Terminal in aerospace to floating,
Then once you open Ghostty hit

```bash
Alt+Shift+;
```

to enter config mode followed by **f**.

This will now "unfloat" the Ghostty Terminal.
Doing this will also fix the Tabs issues with aerospace.

---

## Aerospace

### Config location

```bash
~/.config/aerospace/aerospace.toml
```

---

### Shortcuts

#### "Navigation"

|       Command        | Description                      |
| :------------------: | -------------------------------- |
| alt-number or letter | Changing to different workspaces |
|        alt-h         | 'focus left'                     |
|        alt-j         | 'focus down'                     |
|        alt-k         | 'focus up'                       |
|        alt-l         | 'focus right'                    |
|       alt-tab        | 'navigate through apps'          |

#### "Workspaces"

|  Command  | Description      |
| :-------: | ---------------- |
| alt-[1~5] | Top Monitor      |
| alt-[6~9] | Bottom Monitor   |
|   alt-b   | Browsers         |
|   alt-c   | Chat             |
|   alt-e   | Finder           |
|   alt-m   | Music            |
|   alt-n   | Notes            |
|   alt-p   | iPhone Mirroring |
|   alt-t   | Terminal         |

#### "Layout"

|               Command                | Description                            |
| :----------------------------------: | -------------------------------------- |
|              alt-slash               | 'layout tiles horizontal vertical'     |
|              alt-comma               | 'layout accordion horizontal vertical' |
|             alt-shift-h              | 'move App left'                        |
|             alt-shift-j              | 'move App down'                        |
|             alt-shift-k              | 'move App up'                          |
|             alt-shift-l              | 'move App right'                       |
| alt-shift-workspace number or letter | 'move App to another workspace'        |

#### "Service Mode"

|             Command              | Description                           |
| :------------------------------: | ------------------------------------- |
|       alt-shift-semicolon        | 'mode service'                        |
|    alt-shift-semicolon => esc    | 'reload config'                       |
|     alt-shift-semicolon => f     | 'change layout to floating or tiling' |
| alt-shift-semicolon => backspace | 'close all windows but current'       |

---

## Yazi

### Config location

```bash
~/.config/yazi/yazi.toml
```

[**Documentation for shortcuts**](https://yazi-rs.github.io/docs/quick-start)

---

### Shortcuts

#### "Navigation"

| Command | Description                                     |
| :-----: | ----------------------------------------------- |
|    h    | Leave the current directory and into its parent |
|    j    | Move the cursor down                            |
|    k    | Move the cursor up                              |
|    l    | Enter hovered directory                         |
|    K    | Seek up 5 units in the preview                  |
|    J    | Seek down 5 units in the preview                |
|  g=>g   | Move cursor to the top                          |
|    G    | Move cursor to the bottom                       |
|    z    | Jump to directory using zoxide                  |
|    Z    | Jump to a directory or reveal a file using fzf  |

#### "Selection"

| Command | Description                        |
| :-----: | ---------------------------------- |
|  Space  | Select single files/dir            |
| ctrl-a  | Select all files/dir               |
| ctrl-r  | Inverse selection of all files/dir |
|   esc   | Cancel                             |

#### "File Operations"

|  Command   | Description                                         |
| :--------: | --------------------------------------------------- |
| o or enter | Open selected files                                 |
|     O      | Open selected files interactively                   |
|    tab     | Show file information                               |
|     y      | Yank selected files (copy)                          |
|     x      | Yank selected files (cut)                           |
|     p      | Paste yanked files                                  |
|     P      | Paste yanked files (Overwrite files if they exists) |
|     d      | Trash selected files                                |
|     D      | Permanently Delete selected files                   |
|     a      | Create a file (ends with / for directories)         |
|     r      | Rename selected files                               |
|     .      | Toggle the visibility of hidden files               |

#### "Copy paths"

| Command | Description             |
| :-----: | ----------------------- |
|  c=>c   | Copy the file path      |
|  c=>d   | Copy the directory path |
|  c=>f   | Copy the filename       |

#### "Search"

| Command | Description                           |
| :-----: | ------------------------------------- |
|    s    | Search files by name using fd         |
|    S    | Search files by content using ripgrep |
| ctrl+s  | Cancel the search                     |

#### "Sorting"

| Command | Description                    |
| :-----: | ------------------------------ |
|  ,=>a   | Sort Alphabetically            |
|  ,=>A   | Sort Alphabetically reversed   |
|  ,=>m   | Sort by modified time          |
|  ,=>M   | Sort by modified time reversed |

---

## Lazyvim

![lazyvim](/images/2025/lazyvim.png)

### Config Location

```bash
~/.config/nvim/
```

---

### Shortcuts

#### "Lazyvim"

##### "Diagnostics"

| **Command**  | **Description**             |
| :----------: | --------------------------- |
| :checkhealth | Check the health of lazyvim |
|    :Mason    | Check or update LSPs        |

[keymaps](https://www.lazyvim.org/keymap)

##### "General"

| **Command** | **Description**            |
| :---------: | -------------------------- |
|    Space    | Leader key                 |
|  space+bb   | Switch to other buffer     |
|  space+bd   | Delete buffer              |
|  space+bo   | Delete Other Buffers       |
|      n      | Next Search Result         |
|      N      | Prev Search Result         |
|   Ctrl+s    | Save file                  |
|     gco     | Add Comment Below          |
|     gcO     | Add Comment Above          |
|   space+l   | Lazy                       |
|  space+fn   | New file                   |
|  space+xl   | Location List              |
|  space+xq   | Quickfix List              |
|     [q      | Previous Quickfix          |
|     ]q      | Next Quickfix              |
|  space+cf   | Format                     |
|     [e      | Previous Error             |
|     ]e      | Next Error                 |
|     [w      | Previous Warning           |
|     ]w      | Next Warning               |
|  space+uf   | Toggle Auto format(Global) |
|  space+uF   | Toggle Auto format(Buffer) |
|  space+fT   | Terminal (cwd)             |
|  space+ft   | Terminal (root dir)        |
|   ctrl+/    | Terminal (root dir)        |
|   space+-   | Split window below         |
|  space+\|   | Split window Right         |
|  space+wd   | Delete Window              |

##### "snacks.nvim"

| **Command** | **Description**                     |
| :---------: | ----------------------------------- |
| space+space | Find Files (Root Dir)               |
|   space+,   | Buffers                             |
|   space+/   | Grep (Root Dir)                     |
|   space+:   | Command History                     |
|  space+fb   | Buffers                             |
|  space+fB   | Buffers (all)                       |
|  space+fc   | Find Config File                    |
|  space+ff   | Find Files (Root Dir)               |
|  space+fF   | Find Files (cwd)                    |
|  space+fg   | Find Files (git-files)              |
|  space+fp   | Projects                            |
|  space+fr   | Recent                              |
|  space+fR   | Recent (cwd)                        |
|  space+gc   | Git Log                             |
|  space+gd   | Git Diff (hunks)                    |
|  space+gs   | Git Status                          |
|  space+gS   | Git Stash                           |
|   space+n   | Notification History                |
|  space+s"   | Registers                           |
|  space+s/   | Search History                      |
|  space+sa   | Autocmds                            |
|  space+sb   | Buffer Lines                        |
|  space+sB   | Grep Open Buffers                   |
|  space+sc   | Command History                     |
|  space+sC   | Commands                            |
|  space+sd   | Diagnostics                         |
|  space+sD   | Buffer Diagnostics                  |
|  space+sg   | Grep (Root Dir)                     |
|  space+sG   | Grep (cwd)                          |
|  space+sh   | Help Pages                          |
|  space+sH   | Highlights                          |
|  space+si   | Icons                               |
|  space+sj   | Jumps                               |
|  space+sk   | Keymaps                             |
|  space+sl   | Location List                       |
|  space+sm   | Marks                               |
|  space+sM   | Man Pages                           |
|  space+sp   | Search for Plugin Spec              |
|  space+sq   | Quickfix List                       |
|  space+sr   | Search and replace                  |
|  space+sR   | Resume                              |
|  space+su   | Undotree                            |
|  space+sw   | Visual selection or word (Root Dir) |
|  space+sW   | Visual selection or word (cwd)      |
|  space+uC   | Colorschemes                        |

##### "LSP"

| **Command** | **Description**            |
| :---------: | -------------------------- |
|  space+cl   | Lsp Info                   |
|     gd      | Goto Definition            |
|     gr      | References                 |
|     gI      | Goto Implementation        |
|     gy      | Goto T[y]pe Definition     |
|     gD      | Goto Declaration           |
|      K      | Hover                      |
|     gK      | Signature Help             |
|     c-k     | Signature Help             |
|  space+ca   | Code Action n,             |
|  space+cc   | Run Codelens n,            |
|  space+cC   | Refresh & Display Codelens |
|  space+cR   | Rename File                |
|  space+cr   | Rename                     |
|  space+cA   | Source Action              |
|     ]]      | Next Reference             |
|     [[      | Prev Reference             |
|     a-n     | Next Reference             |
|     a-p     | Prev Reference             |

##### "bufferline.nvim"

| **Command** | **Description**             |
| :---------: | --------------------------- |
|  space+bl   | Delete Buffers to the Left  |
|  space+bp   | Toggle Pin                  |
|  space+bP   | Delete Non-Pinned Buffers   |
|  space+br   | Delete Buffers to the Right |
|     [b      | Prev Buffer                 |
|     [B      | Move buffer prev            |
|     ]b      | Next Buffer                 |
|     ]B      | Move buffer next            |
|     S-h     | Prev Buffer                 |
|     S-l     | Next Buffer                 |

##### "todo-comments.nvim"

| **Command** | **Description** |
| :---------: | --------------- |
|  space+st   | Todo            |
|  space+sT   | Todo/Fix/Fixme  |

##### "markdown-preview.nvim"

| **Command** | **Description**  |
| :---------: | ---------------- |
|  space+cp   | Markdown preview |

##### "Git"

| **Command** | **Description**  |
| :---------: | ---------------- |
|  space+gg   | Open lazygit     |
|  space+gc   | Commits          |
|  space+gl   | Git Log          |
|  space+gs   | Git Status       |
|  space+gb   | Git Blame Line   |
|  space+gB   | Git Browser Open |

##### "Spelling"

| **Command** | **Description**               |
| :---------: | ----------------------------- |
|     z+=     | Spelling suggestions          |
|     ]s      | Go to next spelling error     |
|     [s      | Go to previous spelling error |

##### "inc-rename.nvim"

| **Command** | **Description**                     |
| :---------: | ----------------------------------- |
|  space+cr   | Rename variables in multiple files. |

##### "git-worktree.nvim"

| **Command** | **Description**     |
| :---------: | ------------------- |
|  space+gw   | List Git Worktrees  |
|  space+gW   | Create Git Worktree |
|  space+gd   | Delete Git Worktree |

#### "Vim/Neovim"

##### "Vim Modes"

| **Command** | **Description**                    |
| :---------: | ---------------------------------- |
|      i      | Insert mode                        |
|      a      | Insert mode after the cursor       |
|      A      | Insert mode at the end of the line |
|      o      | Open a new line below the cursor   |
|      O      | Open a new line above the cursor   |
|      v      | Visual mode                        |
|   ctrl+v    | Visual mode Multiline              |
|      :      | Command line mode                  |
|      R      | Replace mode                       |
|     esc     | Go back to normal mode             |

##### "Command Mode"

|   **Command**   | **Description**                      |
| :-------------: | ------------------------------------ |
|  :w or ctrl+s   | Write (Save) file                    |
|       :wa       | Write (Save) all file                |
|       :q!       | Quit and discard changes             |
| :wq or :x or ZZ | Quit and save changes                |
|      :wqa       | Write and Quit on all open files     |
|   :e filename   | Create a new file in the current dir |

##### "Arrows"

| **Command** | **Description** |
| :---------: | --------------- |
|      h      | left            |
|      j      | down            |
|      k      | up              |
|      l      | right           |

##### "Movements within a line"

| **Command** | **Description**                                                        |
| :---------: | ---------------------------------------------------------------------- |
|      $      | Move cursor to the end of the line                                     |
|      0      | Move cursor to the beginning of the line                               |
|      ^      | Move cursor to first non-blank character in line                       |
|     fx      | Find next occurrence of character ‘x’                                  |
|     Fx      | Find previous occurrence of character ‘x’                              |
|     tx      | Go towards next occurrence of character ‘x’ (stops right before it)    |
|     Tx      | Go towards previous occurence of character ‘x’ (stops right before it) |
|      ;      | Repeat previous f, F, t, or T movement forwards                        |
|      ,      | Repeat previous f, F, t, or T movement backwards                       |

###### "Word Movements"

| **Command** | **Description**                                                                                                |
| :---------: | -------------------------------------------------------------------------------------------------------------- |
|      w      | Move cursor forwards to start of word (sequence of letters, digits, underscores OR sequence of other symbols)  |
|      W      | Move cursor forwards to start of WORD (any sequence of non-blank characters)                                   |
|      b      | Move cursor backwards to start of word (sequence of letters, digits, underscores OR sequence of other symbols) |
|      B      | Move cursor backwards to start of WORD (any sequence of non-blank characters)                                  |
|      e      | Move cursor forwards to end of word (sequence of letters, digits, underscores OR sequence of other symbols)    |
|      E      | Move cursor forwards to end of WORD (any sequence of non-blank characters)                                     |
|     ge      | Move cursor backwards to end of word (sequence of letters, digits, underscores OR sequence of other symbols)   |
|     gE      | Move cursor backwards to end of WORD (any sequence of non-blank characters)                                    |

##### "Sentence/Paragraph Movements"

| **Command** | **Description**                                                          |
| :---------: | ------------------------------------------------------------------------ |
|      )      | Move cursor to next sentence                                             |
|      (      | Move cursor to previous sentence                                         |
|      }      | Move cursor to next paragraph (block of consecutive non-empty lines)     |
|      {      | Move cursor to previous paragraph (block of consecutive non-empty lines) |

##### "Moving To Specific Lines"

| **Command** | **Description**                                     |
| :---------: | --------------------------------------------------- |
|     gg      | Move cursor to first line of document               |
|      G      | Move cursor to last line of document                |
|  {number}G  | Move cursor to line {number}                        |
|  {number}j  | Go {number} lines down                              |
|  {number}k  | Go {number} lines up                                |
|      H      | Move cursor to line at the top of the window        |
|      M      | Move cursor to the line at the middle of the window |
|      L      | Move cursor to the line at the bottom of the window |

##### "Screen Related Cursor Movements"

| **Command** | **Description**                       |
| :---------: | ------------------------------------- |
|   Ctrl-F    | Move cursor forwards one full screen  |
|   Ctrl-B    | Move cursor backwards one full screen |
|   Ctrl-D    | Move cursor down half a screen        |
|   Ctrl-U    | Move cursor up half a screen          |

##### "Scrolling While Leaving Cursor In Place"

| **Command** | **Description**                                       |
| :---------: | ----------------------------------------------------- |
|     zz      | Place current cursor line in the middle of the window |
|     zt      | Place current cursor line at the top of the window    |
|     zb      | Place current cursor line at the bottom of the window |
|   Ctrl-E    | Scroll down a single line, leaving cursor in place    |
|   Ctrl-Y    | Scroll up a single line, leaving cursor in place      |

##### "Deletion"

| **Command** | **Description**                                                                                                                         |
| :---------: | --------------------------------------------------------------------------------------------------------------------------------------- |
|  d{motion}  | Delete the text that the {motion} command moves over and copy into register.                                                            |
|     dd      | Delete whole current line and copy into register.                                                                                       |
|      D      | Delete from under the cursor to the end of the line and copy into register.                                                             |
|     dw      | Delete from cursors current position to start of next word                                                                              |
|     de      | Delete from cursors current position to end of word                                                                                     |
|     dG      | Delete from cursors current position to end of file                                                                                     |
|     d]}     | Delete from cursors current position to next unmatched }                                                                                |
|     2dd     | Delete whole line under cursor and line below it.                                                                                       |
|  c{motion}  | Delete the text that the {motion} command moves over, copy into register and enter insert mode.                                         |
|     cc      | Delete whole current line, copy into register and enter insert mode.                                                                    |
|      C      | Delete from under the cursor to the end of the line, copy into register and enter insert mode.                                          |
|     diw     | Delete word that cursor is in, keeping surrounding whitespace (Think: delete inside word)                                               |
|     daw     | Delete word that cursor is in as well as surrounding whitespace (Think: delete around word)                                             |
|     di(     | Delete everything within parenthesis surrounding cursor, keeping the surrounding parenthesis (Think: delete inside parenthesis)         |
|     da(     | Delete everything within parenthesis surrounding cursor as well as the surrounding parenthesis (Think: delete around parenthesis)       |
|     di"     | Delete everything within double quotes surrounding cursor, keeping the surrounding double quotes (Think: delete inside double quotes)   |
|     da"     | Delete everything within double quotes surrounding cursor as well as the surrounding double quotes (Think: delete around double quotes) |
|    dit"     | Delete everything within tags surrounding cursor, keeping the surrounding tags (Think: delete inside tags)                              |
|     dat     | Delete everything within tags surrounding cursor as well as the surrounding tags (Think: delete around tags)                            |

##### "Undo & Redo"

| **Command** | **Description**                             |
| :---------: | ------------------------------------------- |
|      u      | Undo last change                            |
|   Ctrl-R    | Redo changes that have been undone with "u" |

##### "Repeating a change"

| **Command** | **Description**                                                      |
| :---------: | -------------------------------------------------------------------- |
|      .      | Repeat the last change you made to the file                          |
|  {number}.  | Repeat the last change you made to the file {number} amount of times |

##### "Replacing & Deleting Characters"

| **Command**  | **Description**                                                                  |
| :----------: | -------------------------------------------------------------------------------- |
| r{character} | Replace current character under cursor with {character}                          |
|      R       | Enter replace mode and start replacing characters by typing until ESC is pressed |
|      x       | Delete current character under the cursor and copy into register                 |

##### "Copy and Paste"

| **Command** | **Description**                                                         |
| :---------: | ----------------------------------------------------------------------- |
|  y{motion}  | Yank or copy text that the motion command moves over into register      |
|     yy      | Yank or copy whole current line into register                           |
|      Y      | Yank or copy from under the cursor to the end of the line into register |
|      p      | Put or paste the text found in register (register x) after the cursor   |
|      P      | Put or paste the text found in register (register x) before the cursor  |

##### "Changing Case"

| **Command** | **Description**                                                    |
| :---------: | ------------------------------------------------------------------ |
|      ~      | Switch case of character under cursor and move cursor to the right |
|  ~{motion}  | Switch the case of the text that the {motion} command moves over   |
| gu{motion}  | Change the text that the {motion} command moves over to lowercase  |
|     guu     | Make whole current line lower case                                 |
| gU{motion}  | Change the text that the {motion} command moves over to uppercase  |
|     gUU     | Make whole current line upper case                                 |

##### "Search/Replace"

|  **Command**   | **Description**                                                                |
| :------------: | ------------------------------------------------------------------------------ |
| :%s/old/new/g  | Replace all occurrences of old with new in whole file                          |
| :%s/old/new/gc | Replace all occurrences of old with new in whole file, asking for confirmation |
| :%s/old/new/gi | Replace all occurrences of old with new in whole file, ignoring case           |

##### "Indentation"

| **Command** | **Description**                        |
| :---------: | -------------------------------------- |
|     >>      | Indent whole current line to the right |

---

## Tmux

### Config Location

```bash
~/.tmux.conf
```

---

### Shortcuts

#### General

| **Command** | **Description** |
| :---------: | --------------- |
| Ctrl+space=>d | Detach from session |
| Ctrl+space=>f | Sessionx Session Manager |
| Ctrl+space=>s | Sesh Session Manager |
| Ctrl+space=>s | Show all sessions |
| Ctrl+space=>w | Session and Window Preview |
| Ctrl+space=>( | Move to previous session |
| Ctrl+space=>) | Move to Next session |
| Ctrl+space=>c | Create Window |
| Ctrl+space=>w | List Windows |
| Ctrl+space=>n | Next Window |
| Ctrl+space=>0~9 | Switch/select window by number |
| Ctrl+space=>[ | Enter vi mode |

#### Panes and Navigation

|  **Command**   | **Description**             |
| :------------: | --------------------------- |
| Ctrl+space=>\| | Split windows horizontal    |
| Ctrl+space=>-  | Split windows vertical      |
|     Ctrl+h     | Navigate to the left pane   |
|     Ctrl+j     | Navigate to the bottom pane |
|     Ctrl+k     | Navigate to the top pane    |
|     Ctrl+l     | Navigate to the right pane  |
| Ctrl+space=>h  | Resize pane left            |
| Ctrl+space=>j  | Resize pane Down            |
| Ctrl+space=>k  | Resize pane Up              |
| Ctrl+space=>l  | Resize pane Right           |
| Ctrl+space=>m  | Focus on one pane           |

#### Config

|  **Command**  | **Description**           |
| :-----------: | ------------------------- |
| Ctrl+space=>r | Reload configurations     |
| Ctrl+space=>: | Enter command mode        |
| Ctrl+space=>? | List Keybindings          |
| Ctrl+space=>I | Reload or install plugins |

---

## Zen browser

---

### Shortcuts

| **Command**  | **Description**           |
| :----------: | ------------------------- |
| Option+Cmd+c | Toggle Compact Mode       |
| Option+Cmd+t | New tab                   |
| Option+Cmd+n | New Window                |
| Option+Cmd+w | Close Tab                 |
|    Cmd+r     | Reload page               |
| Shift+Cmd+h  | Go to history             |
|    Cmd+k     | Focus Search              |
| Option+Cmd+f | Find on Page              |
|    Cmd+d     | Bookmark this page        |
| Shift+Cmd+c  | Copy current URL          |
|    Ctrl+x    | Toggle AI Chatbot Sidebar |
|    Cmd+j     | Open Downloads            |

---

## Homerow

---

### Shortcuts

#### General

|   **Command**   | **Description**                       |
| :-------------: | ------------------------------------- |
| Cmd+Shift+Space | UI click activation through shortcuts |
|       Esc       | Esc                                   |

#### Scrolling mode

|             **Command**             | **Description**         |
| :---------------------------------: | ----------------------- |
|             Cmd+Shift+j             | Activate scrolling mode |
|        Scrolling-mode=>[j,k]        | Scroll up and down      |
|    Scrolling-mode=>Tab or Ctrl+n    | Next scroll Area        |
| Scrolling-mode=>Shift+Tab or Ctrl+p | Previous scroll Area    |

---

## Raycast

---

[**Raycast Manual**](https://manual.raycast.com/)

### Shortcuts

#### General

|      **Command**       | **Description**                          |
| :--------------------: | ---------------------------------------- |
|       Cmd+space        | Open Raycast                             |
|     Cmd+space=>sf      | Search files                             |
|         Cmd+[          | Go Back one                              |
|         Cmd+]          | Go Forward one                           |
|    Cmd+space=>Cmd+k    | Action Panal                             |
| Cmd+space=>My Schedule | Check your schedule through calandar app |
|    Cmd+space=>Store    | Raycast Store                            |
|   Cmd+space=>Snippet   | Search and create snippets               |

---

## ChatGPT

---

### Shortcuts

#### General

| **Command** | **Description**         |
| :---------: | ----------------------- |
|  Alt+Space  | Quick Access to ChatGPT |

---

## Raindrop.io

---

### Shortcuts

| **Command** | **Description**                                |
| :---------: | ---------------------------------------------- |
| Ctrl+Alt+s  | Search for bookmark through Raycast            |
| Ctrl+Alt+a  | Save a bookmark through Raycast                |
| Ctrl+Alt+l  | browse latests saved bookmarks through Raycast |

---

## Custom Shortcuts found in zshrc

| **Command** | **Description** |
| :---------: | --------------- |
| ll | "ls -la --tree --git-ignore" |
| reload | "source ~/.zshrc" |
| brewup | "brew update && brew upgrade && brew doctor && brew cleanup" |
| y | Yazi but also changes you to that directory when you quit |
| Esc+s | fzf prompt to connect to tmux session using sesh |

---
