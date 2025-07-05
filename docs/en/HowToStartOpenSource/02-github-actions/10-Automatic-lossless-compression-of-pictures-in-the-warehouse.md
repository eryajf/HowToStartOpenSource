---
title: Automatically compress images in the warehouse losslessly
date: 2022-08-01 23:42:55
---

I maintain [awesome-github-profile-readme-chinese](https://github.com/eryajf/awesome-github-profile-readme-chinese) The project aims to collect and summarize the excellent personal homepages in the Chinese area, and everyone's homepage will be stored in the exampls directory by taking screenshots, and sometimes some friends' homepages have a lot of content, so that the overall screenshot is very large.

This article introduces an interesting small action, its main function is to automatically scan the pictures in the warehouse, and then compress them almost losslessly, so that the volume of the entire warehouse is kept at a relatively low level.

Used Actions：[image-actions](https://github.com/calibreapp/image-actions)

Using the configuration is actually very simple, basically after reading the official introduction document you can get started to use, here is one or two things to pay attention to.

Start by adding the Actions profile，e.g. `.github/workflows/images.yml`：

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

It should be noted that the action of compressing the picture, after running, will automatically commit the picture twice, which requires the action to have the corresponding commit permission, usually the token we configure does not have the permission of the repository after the fork of other developers, so it is not possible to directly deal with the picture in the content of other people's PR.

The official advice is:

- Either other developers do a PR by checking a branch in the main repository and then branching in the main repository. However, this method is not actually the mainstream scenario of collaboration in GitHub, and is mostly used in the process of personal maintenance of developers.

- Or first deal with the PR submitted by others through fork, when the PR is approved, it will automatically scan and check, and then after the action completes the image compression, a new PR is automatically created to complete the image compression.

One thing to note is that the `secrets. GITHUB_TOKEN` is used to operate the current warehouse, and does not need to be changed, if it is changed, an error will be reported.

The effect is as follows:

![image_20220801_234434](/img/image_20220801_234434.png)

This action will automatically process the image and submit it to the current PR, we can click View diff to see the difference before and after:

![image_20220801_234504](/img/image_20220801_234504.png)

At present, according to my personal zoomed in on the two photos before and after, in the case of 80% reduction in volume, the clarity is almost the same, or a very powerful action, suitable for those warehouses that store more pictures.
