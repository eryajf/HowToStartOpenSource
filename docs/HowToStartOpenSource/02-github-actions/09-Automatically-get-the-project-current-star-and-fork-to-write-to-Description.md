---
title: 自动获取项目当前star与fork写到Description
date: 2022-07-29 16:40:29
---



本文介绍一个有意思的小动作，它的主要功能是可以获取项目当前的star与fork数量，然后将这两个数据覆盖到项目的Descrition中。

所用Actions：[This-repo-has-x-stars-y-forks-action](https://github.com/ouuan/This-repo-has-x-stars-y-forks-action)

使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了，这里说一两个需要注意的地方。

首先添加Actions配置文件，e.g. `.github/workflows/start-fork-updata.yml`：

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
    - cron: '0 * * * *'
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

配置文件中用到了 `ACCESS_TOKEN`，我的这篇文章有详细介绍如何生成以及配置，可直接参考： [https://wiki.eryajf.net/pages/47a507/](https://wiki.eryajf.net/pages/47a507/)。

目前配置的为每个小时执行一次更新，如果你想要其他时间，可根据需求进行调整。

效果如下：

![image_20220729_164001](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220729_164001.png)