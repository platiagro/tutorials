# PlatIAgro Tutorials

[![Build and Deploy](https://github.com/platiagro/tutorials/actions/workflows/deploy.yml/badge.svg)](https://github.com/platiagro/tutorials/actions/workflows/deploy.yml)

## Adding a New Tutorial

Create a New Markdown File at `codelabs/` (eg. my-new-tutorial.md).<br>
Tutorials are organized in 3 folders/categories: `platiagro-introduction`, `platiagro-tasks`, and `machine-learning`.

Every markdown file starts with the details of the tutorial:

```my-new-tutorial.md
author: Lucas Zanco Ladeira
summary: Introdução à Aprendizado de Máquina
id: machine-learning
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials
tags: machine-learning
```

You can create pages for your tutorials using 2 hashes `##` followed by the page title:

```
## Página 1
Duration: 0:01:00

## Página 2
Duration: 0:15:00
```

You can learn more about codelab formatting at their docs: https://github.com/googlecodelabs/tools/blob/main/FORMAT-GUIDE.md

## Tutorials Website

The tutorials website (https://platiagro.github.io/tutorials/) was copied from this repository https://github.com/googlecodelabs/tools/tree/main/site and customized for PlatIAgro.<br>
Every commit to the branch `master` triggers a CI/CD pipeline which updates the docs.
