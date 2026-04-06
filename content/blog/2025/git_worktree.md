+++
title = 'Git WorkTree - Exploring its benefits.'
description = 'Git WorkTree - Exploring its benefits.'
date = '2025-03-06T05:00:00Z'
draft = false
in_search_index = true

[taxonomies]
categories = ['Mac', 'Linux', 'Programming']
tags = ['Tools', 'Git', 'Terminal']

[extra]
image = '/images/fun.gif'
author = 'Aito Nakajima'
+++

Git is an incredibly powerful version control system that offers various features to streamline the development process. One such feature is `git worktree`, which allows you to manage multiple working directories within a single repository. This blog will explore what `git worktree` is, how to use it, and the benefits it provides.

## What is Git Worktree?

`git worktree` is a command that lets you check out multiple branches of a single repository at the same time. Each branch can be assigned to its own working directory, allowing you to work on different branches simultaneously without switching between them. This is particularly useful for tasks such as developing new features, fixing bugs, or performing code reviews.

## How to Use Git Worktree

Using `git worktree` is straightforward. Below are the basic commands to get you started:

1. **Clone a Repository as Bare**

   Before using `git worktree`, you can clone your repository as a bare repository. A bare repository does not have a working directory and is ideal for creating multiple worktrees. Use the following command:

   ```sh
   git clone --bare <repository-url>
   ```

   For example:

   ```sh
   git clone --bare https://github.com/user/repo.git
   ```

2. **Add a Worktree**

   To add a new worktree, use the following command:

   ```sh
   git worktree add <branch>
   ```

   For example, to create a new worktree for the `feature-branch` in a directory called `feature-dir`, you would run:

   ```sh
   git worktree add feature-branch
   ```

3. **List Worktrees**

   To list all the worktrees associated with your repository, use:

   ```sh
   git worktree list
   ```

4. **Remove a Worktree**

   To remove a worktree, use:

   ```sh
   git worktree remove <path>
   ```

   For example:

   ```sh
   git worktree remove feature-dir
   ```

### Example workflow when using Git Worktree

> Everyone has their own way of using `git worktree`. Here is an example workflow that I use when working with `git worktree`.

- Clone the Bare repository.

```bash
git clone --bare gitrepo myrepo.git
cd myrepo.git
```

- Add a worktree for the feature branch.

```bash
git worktree add feature
cd feature
```

- Setup tracking immediately to push easily

```bash
git push --set-upstream origin feature  # Creates feature on origin
```

- Make changes and Push Incrementally

```bash
# First change
echo "Feature start" > feature.txt
git add feature.txt
git commit -m "Initial feature work"
git push origin feature

# More changes
echo "More stuff" >> feature.txt
git add feature.txt
git commit -m "WIP: add more"
git push origin feature

# Fix
echo "Fixed feature" >> feature.txt
git add feature.txt
git commit -m "Fix typo"
git push origin feature
```

History on origin/feature:

```bash
c3d4e5f Fix typo
a1b2c3d WIP: add more
e4f5g6h Initial feature work
7890abc (origin/main, main) Initial main commit
```

> To avoid force-pushing after cleaning up your git history using rebase, I tend to create a new worktree for cleanup.

- Create a cleanup branch

```bash
cd ../myrepo.git
git worktree add feature-clean
cd feature-clean
git pull origin feature
```

- Clean up

```bash
git rebase -i $(git merge-base HEAD origin/main)
# Squash or rename commits if needed
git push origin feature-clean  # New branch, no force needed
```

- In Github/Gitlab Open a PR from feature-clean to main

- Cleanup

```bash
cd ../myrepo.git
git worktree remove feature
git worktree remove feature-clean
git branch -d feature feature-clean
git push origin --delete feature feature-clean
```

## Benefits of Using Git Worktree

### 1. Parallel Development

One of the primary advantages of `git worktree` is the ability to work on multiple branches in parallel. This is especially useful when you need to switch contexts frequently or collaborate with other team members on different features or bug fixes.

### 2. Efficient Resource Usage

Unlike cloning the repository multiple times, using `git worktree` shares the same repository data, reducing disk space usage. This makes it a more efficient way to manage multiple working directories.

### 3. Simplified Workflow

With `git worktree`, you can easily switch between branches without the need to stash or commit unfinished work. This simplifies your workflow and reduces the risk of losing changes.

### 4. No Need for Stashing

When using `git worktree`, you don't need to use `git stash` anymore. Since you can maintain separate working directories for different branches, there is no need to stash your changes to switch branches. This makes your work process smoother and more efficient.

### 5. Enhanced Code Reviews

When performing code reviews, you can create a separate worktree for the branch under review. This allows you to review the code in isolation without affecting your main working directory.

### 6. Better Context Switching

Developers often need to switch between tasks quickly. `git worktree` allows you to maintain different branches in separate directories, enabling you to switch contexts seamlessly without disrupting your workflow.

### 7. Improved Experimentation

If you want to experiment with a new idea or feature, you can create a separate worktree for it. This way, you can test your changes in isolation without risking the stability of your main branch.

## Conclusion

`git worktree` is a powerful feature that enhances the flexibility and efficiency of your Git workflow. By allowing you to manage multiple working directories within a single repository, it simplifies parallel development, context switching, and resource usage. Whether you're a solo developer or part of a larger team, incorporating `git worktree` into your workflow can significantly improve your productivity and streamline your development process.

Happy coding!

## Links

**Checkout [Git-Worktree]("https://git-scm.com/docs/git-worktree").**
