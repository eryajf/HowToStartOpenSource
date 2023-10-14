---
title: Automatically add TOC directories for README
date: 2022-07-18 17:23:23
---

GitHub's Markdown does not currently support direct `[TOC]` rendering of article directories, some READMEs require such effects, which can be generated with the help of external tools or automatically generated with the help of `GitHub Actions`, which is described in this article.

Actions used：[TOC Generator](https://github.com/marketplace/actions/toc-generator)

Using the configuration is actually very simple, basically after reading the official introduction document you can get started to use, here is one or two things to pay attention to.

First of all, you need to specify the directory generation location, e.g. `README.md` in the file where the directory will be generated, and add the following content in the place to be generated:

```
<!-- START doctoc -->
<!-- END doctoc -->
```

Then add the Actions profile，e.g. `.github/workflows/toc.yml`：

```yml
on: push
name: TOC Generator
jobs:
  generateTOC:
    name: TOC Generator
    runs-on: ubuntu-latest
    steps:
      - uses: technote-space/toc-generator@v4
```

Next, you need to adjust the project's Actions permissions，Click on GitHub, `settings`--> `actions` --> `General` --> `Workflow permissions` --> choose `Read and write permissions`。

![image_20220718_172340](https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_172340.png)

After the configuration adjustment is completed, you can push the project to see the effect, of course, you can also pass the GitHub_Token way of certification here, so I won't repeat it.

The effect is presented as follows:

![image_20220719_110310](https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220719_110310.png)

`Configure the list：` [see](https://github.com/marketplace/actions/toc-generator#options)

It can be configured according to your actual needs and situation!

## Other than that

Later, I learned a trick in one place, it turned out that GitHub already supports the directory method by default for Markdown files, and also supports search, as follows：

![image_20220719_110613](https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220719_110613.png)
