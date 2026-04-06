+++
title = 'Python - Virtual environment creation on MacOS'
description = 'Python - Virtual environment creation on MacOS'
date = '2025-03-06T05:00:00Z'
draft = false
in_search_index = true

[taxonomies]
categories = ['Mac']
tags = ['Tools', 'Terminal', 'Python']

[extra]
image = '/images/fun.gif'
author = 'Aito Nakajima'
+++

## Tools that will be used and needed to be installed on your Mac

- [**tox**](https://tox.wiki/en/latest/) is used for automating the virtual env creation, running commands, linting, etc.
- [**poetry**](https://python-poetry.org/docs/) is used for Python package management and is used in conjunction with tox.
- [**pyenv**](https://github.com/pyenv/pyenv) is used for Python Version Management, to easily switch between different versions of Python, [**commands**](https://github.com/pyenv/pyenv/blob/master/COMMANDS.md#pyenv-local) that can be used with pyenv.

## Files that are needed at the top level of your repository

- **tox.ini** is the main file that you edit to make changes.
- **pyproject.toml** should be edited using the poetry command but can be edited by hand if needed.
- **poetry.lock** should be edited using the poetry command and shouldn't be edited by hand.

## Poetry Notes

To first create the pyproject.toml file run

```bash
poetry init
```

If Poetry isn't installing the packages in the current directory

```bash
poetry env remove python
poetry config virtualenvs.in-project true
```

## Running tox

To run tox, cd to the folder that has the tox.ini file and run

```bash
tox
```

If you want to activate the virtual environment manually.

```bash
source .tox/py31*/bin/activate
```

## Manual process for creating a Virtual Environment

1. Create a new Virtual Environment (cd to the location that you would like to create your Virtual Enviroment)

```bash
python3 -m venv venv
```

1. To activate the virtual environment

```bash
source venv/bin/activate
```

1. Installing required Applications to your virtual environment (cd to the ansible/python project)

```bash
pip install -r requirements.txt --upgrade
```

1. Check for outdated pip packages

```bash
pip list --
```

1. Update outdated pip packages

```bash
pip install -U package_name
```

1. Update the requirements.txt file, make sure you don't have any **compatibility issues or dependency conflicts**.

```bash
pip freeze > requirements.txt
```

1. To deactivate the virtual environment

```bash
deactivate
```
