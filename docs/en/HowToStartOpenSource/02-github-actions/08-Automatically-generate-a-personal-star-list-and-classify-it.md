---
title: Automatically generate and categorize personal star lists.
date: 2022-07-29 16:26:35
---



## Preface

When we surf GitHub, we often like great projects, but as the joke is often said on the Internet: favorites equal. In fact, we should not let these projects that have been appreciated by ourselves sink into the sea, so it would be nice if there was a project that could automatically organize and categorize its past star projects.

This article will introduce how to use GitHub Actions to achieve this feature.

## Show

I have created a repository of my personal star list through this scheme：[awesome-stars-eryajf](https://github.com/eryajf/awesome-stars-eryajf)

## Disposition

Used Actions。
- [mawesome](https://github.com/simonecorsi/mawesome)

Using the configuration is actually very simple, basically after reading the official introduction document, you can get started.

Add an Actions profile，e.g. `.github/workflows/star-list.yml`：

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

The configuration items are also relatively simple, do not repeat too much, adjust according to your actual situation.

`ACCESS_TOKEN` and other confidential information are used in the configuration file, and my article describes how to generate and configure it in detail, which can be directly referenced： [https://wiki.eryajf.net/pages/47a507/](https://wiki.eryajf.net/pages/47a507/)

By default, one is loaded when the project runs[The default template](https://github.com/simonecorsi/mawesome/blob/main/TEMPLATE.ejs) to parse into a README file, if you have different needs, you can customize it yourself.