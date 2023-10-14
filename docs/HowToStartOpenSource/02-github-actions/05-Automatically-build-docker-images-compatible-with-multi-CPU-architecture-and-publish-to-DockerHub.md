---
title: 自动构建兼容多CPU架构的docker镜像并发布到DockerHub
date: 2022-07-23 11:01:19
---

## 前言

做一个开源项目，尽量提供给受众以简单易用的快速上手体验，也是项目能够立刻把人抓住的一个关键。现在如果想让用户快速体验项目，除了提供 demo 环境之外，还有一个方案，那就是提供一个完备的 docker-compose，让人能够直接一键拉起。

> 注意：是 docker-compose，而非 k8s 的 yml，尽管生产环境直接用 docker-compose 的很少，但是作为中间阶段，快速部署一个项目体验，而又不需要过多基础环境配置的场景来说，优势还是很大的。

于是，项目应该配套提供好对应的镜像，而由于现在 Mac 新 CPU 架构越来越多，因此提供的镜像最好又是能够支持多 CPU 架构运行的。

本文就来讲一下，如何借助 Github Actions 自动构建兼容多 CPU 架构的 docker 镜像并发布到 DockerHub。

## 配置

所用 Actions： [build-push-action](https://github.com/docker/build-push-action)
多 CPU 架构镜像构建的流程文档：[利用 buildx 构建支持多 CPU 架构平台的 docker 镜像](https://wiki.eryajf.net/pages/95cf71/) ,此内容提供基础知识参考，后边构建不需要了解过多。

使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了，这里说一两个需要注意的地方。

首先添加 Actions 配置文件，e.g. `.github/workflows/docker-image.yml`：

```yaml
# This is a basic workflow to help you get started with Actions
name: build docker image
# Controls when the action will run.
on:
  push:
    branches:
      - main
  # Allows you to run this workflow manually from the Actions tab
  # 可以手动触发
  workflow_dispatch:
    inputs:
      logLevel:
        description: "Log level"
        required: true
        default: "warning"
      tags:
        description: "Test scenario tags"

jobs:
  buildx:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Get current date
        id: date
        run: echo "::set-output name=today::$(date +'%Y-%m-%d_%H-%M')"

      - name: Set up QEMU
        uses: docker/setup-qemu-action@v1

      - name: Set up Docker Buildx
        id: buildx
        uses: docker/setup-buildx-action@v1

      - name: Available platforms
        run: echo ${{ steps.buildx.outputs.platforms }}

      - name: Login to DockerHub
        uses: docker/login-action@v1
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}

      - name: Build and push
        uses: docker/build-push-action@v2
        with:
          context: .
          file: ./Dockerfile
          # 所需要的体系结构，可以在 Available platforms 步骤中获取所有的可用架构
          platforms: linux/amd64,linux/arm64/v8
          # 镜像推送时间
          push: ${{ github.event_name != 'pull_request' }}
          # 给清单打上多个标签
          tags: |
            eryajf/go-ldap-admin-server:${{ steps.date.outputs.today }}
            eryajf/go-ldap-admin-server:latest
```

很多配置见名知意，对照官方文档也都能找到答案，这里就不多赘述。

这里对几个关键的配置项做一下单独说明：

- DOCKERHUB_TOKEN 的配置这里就不赘述了，在项目的 setting 中进行配置，已经多次讲过，这里留下此 token 创建的地址：[https://hub.docker.com/settings/security](https://hub.docker.com/settings/security)
- `file:`指定在项目仓库中的 Dockerfile 文件位置。
- `platforms：`指定构建镜像所需要兼容支持的平台架构，通常 amd，arm 就够了。
- `tags:`将要构建的镜像标签，此处我定义的是，每次构建时，提交一个该镜像时间戳的标签，再覆盖一下 latest 的标签，这样提供给 docker-compose 就直接用 latest 标签，可以保障每个新用户体验拉起的时候都是最新的镜像。

最后构建的镜像效果如下：

![image_20220723_105957](https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220723_105957.png)

这里也可以看到推上去的镜像都是兼容两个 CPU 架构平台的。
