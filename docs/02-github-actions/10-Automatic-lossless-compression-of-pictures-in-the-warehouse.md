---
title: 自动对仓库内图片进行无损压缩
date: 2022-08-01 23:42:55
---

我维护的 [awesome-github-profile-readme-chinese](https://github.com/eryajf/awesome-github-profile-readme-chinese) 项目旨在收集汇总中文区优秀的个人主页，每个人的主页将会通过截图的方式存放在 exampls 目录下，有时候有的朋友主页内容很多，这样整体截图下来就非常大。

本文就介绍一个有意思的小动作，它的主要功能是可以自动扫描仓库内的图片，然后对其进行几乎无损的压缩，让整个仓库的体积保持在一个相对低的水平。

所用 Actions：[image-actions](https://github.com/calibreapp/image-actions)

使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了，这里说一两个需要注意的地方。

首先添加 Actions 配置文件，e.g. `.github/workflows/images.yml`：

```yml
name: 压缩图片
on:
  push:
    branches:
      - main
    paths:
      - "**.jpg"
      - "**.jpeg"
      - "**.png"
      - "**.webp"
  workflow_dispatch:
jobs:
  build:
    name: calibreapp/image-actions
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repo
        uses: actions/checkout@v2
      - name: Compress Images
        id: calibre
        uses: calibreapp/image-actions@main
        with:
          githubToken: ${{ secrets.GITHUB_TOKEN }}
          compressOnly: true
          jpegQuality: "60"
          jpegProgressive: false
          pngQuality: "60"
          webpQuality: "60"
      - name: Create New Pull Request If Needed
        if: steps.calibre.outputs.markdown != ''
        uses: peter-evans/create-pull-request@v3
        with:
          title: "🛠 压缩图片"
          branch-suffix: timestamp
          commit-message: "🛠 压缩图片"
          body: ${{ steps.calibre.outputs.markdown }}
```

需要注意，压缩图片的动作，在运行之后，会自动将图片二次 commit 上来，这就要求该动作具有对应 commit 的权限才行，通常我们配置的 token 没有其他开发者 fork 之后的仓库的权限，于是这里并不能直接处理其他人 PR 过来的内容中的图片。

官方给出的建议是：

- 要么其他开发者通过在主仓库 check 一个分支，然后在主仓库进行分支的 PR。但这种方式其实并非是 GitHub 中协作的主流场景，多用在开发者个人维护的流程。
- 要么就是先处理其他人通过 fork 的方式提交上来的 PR，当 PR 被同意之后，会自动进行扫描检查，然后该动作完成图片压缩之后，再自动创建一个新的 PR，来完成图片的压缩。

还需要注意的一点是：其中的 `secrets.GITHUB_TOKEN`是操作当前仓库使用的，不需要进行更改，如果改了，反而会报错。

效果如下：

![image_20220801_234434](/img/image_20220801_234434.png)

这个动作会自动将图片处理好，然后提交到当次 PR 上，我们可以点开 View diff 查看前后的区别：

![image_20220801_234504](/img/image_20220801_234504.png)

目前这个效果据我个人放大前后两张照片来看，在体积缩小了 80%的情况下，清晰度几乎是一致的，还是非常给力的一个动作，适合那些存放图片比较多的仓库。
