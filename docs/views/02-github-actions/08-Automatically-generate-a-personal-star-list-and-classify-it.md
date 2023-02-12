---
title: 自动生成个人star列表并归类
date: 2022-07-29 16:26:35
---



## 前言

当我们在GitHub中冲浪时，遇到优秀的项目经常会为之点赞，但就像网络上经常说的玩笑一样：收藏等于会了。其实我们不应该让这些已被自己赏识过的项目石沉大海，那么，如果有一个项目能把自己过去star过得项目自动整理并归类就好了。

本文就将介绍如何利用GitHub Actions来实现这个功能。

## 展示

我已通过此方案，创建了一个个人star list的仓库：[awesome-stars-eryajf](https://github.com/eryajf/awesome-stars-eryajf)

## 配置

所用 Actions。
- [mawesome](https://github.com/simonecorsi/mawesome)

使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了。

添加 Actions 配置文件，e.g. `.github/workflows/star-list.yml`：

```yaml
name: Update awesome list

on:
  workflow_dispatch:
  schedule:
    - cron: '0 0 * * *'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Awesome generator
        uses: simonecorsi/mawesome@v2
        with:
          api-token: ${{ secrets.ACCESS_TOKEN }}
          github-email: ${{ secrets.USER_EMAIL }}
          template-path: "/template/README.ejs"
          github-name: ${{ github.repository_owner }}
```

配置项也都比较简单，不做过多赘述，根据自己的实际情况调整即可。

配置文件中用到了 `ACCESS_TOKEN`以及其他保密信息，我的这篇文章有详细介绍如何生成以及配置，可直接参考： [https://wiki.eryajf.net/pages/47a507/](https://wiki.eryajf.net/pages/47a507/)

默认情况下，项目运行时会加载一个[默认的模板](https://github.com/simonecorsi/mawesome/blob/main/TEMPLATE.ejs)来解析成README文件，如果你有不同的需求，可以自行对其进行定制。