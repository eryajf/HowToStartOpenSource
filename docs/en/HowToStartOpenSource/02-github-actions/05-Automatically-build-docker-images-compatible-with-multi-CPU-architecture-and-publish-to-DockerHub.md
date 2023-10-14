---
title: Automatically build docker images compatible with multi-CPU architecture and publish to DockerHub
date: 2022-07-23 11:01:19
---

## Preface

Making an open source project that tries to provide the audience with a quick and easy-to-use experience is also a key to the project's ability to catch people immediately. Now if you want to let users quickly experience the project, in addition to providing a demo environment, there is also a solution, that is, to provide a complete docker-compose, so that people can directly pull up with one click.

> Note: It is Docker-Compose, not K8S's YML, although the production environment directly uses Docker-Compose is rare, but as an intermediate stage, quickly deploy a project experience without too much basic environment configuration, the advantage is still great.

Therefore, the project should provide the corresponding image, and since there are more and more new CPU architectures on Macs, it is best to provide images that can support multi-CPU architecture.

This article will talk about how to automatically build a docker image compatible with multi-CPU architecture with the help of Github Actions and publish it to DockerHub.

## Disposition

Used Actions： [build-push-action](https://github.com/docker/build-push-action)
Process documentation for multi-CPU image construction：[利用 buildx 构建支持多 CPU 架构平台的 docker 镜像](https://wiki.eryajf.net/pages/95cf71/) ,This content provides a reference for the basics, and you don't need to know too much about the rest of the building.

Using the configuration is actually very simple, basically after reading the official introduction document you can get started to use, here is one or two things to pay attention to.

Start by adding the Actions profile ，e.g. `.github/workflows/docker-image.yml`：

```yaml
# This is a basic workflow to help you get started with Actions
name: build docker image
# Controls when the action will run.
on:
  push:
    branches:
      - main
  # Allows you to run this workflow manually from the Actions tab
  # Can be triggered manually
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
          # For the required architecture, you can get all available schemas in the Available platforms step
          platforms: linux/amd64,linux/arm64/v8
          # Image push time
          push: ${{ github.event_name != 'pull_request' }}
          # Label the list multiple times
          tags: |
            eryajf/go-ldap-admin-server:${{ steps.date.outputs.today }}
            eryajf/go-ldap-admin-server:latest
```

Many configurations are known in name, and the answer can be found in the official documentation, so I will not repeat it here.

Here are a separate description of several key configuration items:：

- The configuration of the DOCKERHUB_TOKEN will not be repeated here, it is configured in the setting of the project, it has been said many times, and the address created by this token is left here：[https://hub.docker.com/settings/security](https://hub.docker.com/settings/security)
- `file:`Specifies the location of the Dockerfile file in the project repository.
- `platforms：`Specify the compatible supported platform architecture required to build the image, usually AMD, ARM is enough.

- `tags:`The image tag to be built, what I define here is that every time you build, submit a tag with the timestamp of the image, and then cover the latest tag, so that docker-compose directly uses the latest tag, which can ensure that each new user experience is the latest image when it is pulled up.

The final image looks like this:

![image_20220723_105957](https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220723_105957.png)

Here you can also see that the images pushed up are compatible with the two CPU architecture platforms.
