---
title: Automatically get the current star of the project and write the fork to the Description
date: 2022-07-29 16:40:29
---

This article introduces an interesting little action, its main function is to get the current number of stars and forks of the project, and then overlay these two data into the project's Descrition.

Used Actions：[This-repo-has-x-stars-y-forks-action](https://github.com/ouuan/This-repo-has-x-stars-y-forks-action)

Using the configuration is actually very simple, basically after reading the official introduction document you can get started to use, here is one or two things to pay attention to.

Start by adding the Actions profile，e.g. `.github/workflows/start-fork-updata.yml`：

```yml
name: This repo has x stars y forks

on:
  push:
    branches:
      - master
  fork:
  watch:
    types:
      - started
  schedule:
    - cron: "0 * * * *"
  workflow_dispatch:

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - name: This repo has x stars y forks
        uses: ouuan/This-repo-has-x-stars-y-forks-action@v2
        with:
          token: ${{ secrets.ACCESS_TOKEN }}
          template: "A profile README with <starCount> stars and <forkCount> forks 🌟"
```

`ACCESS_TOKEN` is used in the configuration file, and my article has detailed instructions on how to generate and configure, which can be directly referenced： [https://wiki.eryajf.net/pages/47a507/](https://wiki.eryajf.net/pages/47a507/)。

The current configuration performs an update every hour, and you can adjust it for your needs if you want other times.

The effect is as follows:

![image_20220729_164001](/img/image_20220729_164001.png)
