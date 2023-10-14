---
title: 自动将项目贡献者列表添加到README中
date: 2022-07-18 17:24:00
---

当我们负责的项目有越来越多的人加入进行协作之后，将贡献者添加到 README 中是一个很好的激励作用，很多大的项目也都是这么做的，本文就来讲一下，如何借助 Github Actions 自动将项目贡献者列表添加到 README 中。

所用 Actions： [contributors-readme-action](https://github.com/akhilmhdh/contributors-readme-action)

使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了，这里说一两个需要注意的地方。

首先需要在将要生成目录的文件内，指定目录生成位置，通常是  `README.md`，在要生成的地方添加如下内容：

```
## 贡献者

<!-- readme: collaborators,contributors -start -->
<!-- readme: collaborators,contributors -end -->
```

然后添加 Actions 配置文件，e.g. `.github/workflows/reademe-contributors.yml`：

```yml
on:
  push:
    branches:
      - main

name: Generate a list of contributors

jobs:
  contrib-readme-en-job:
    runs-on: ubuntu-latest
    name: A job to automate contrib in readme
    steps:
      - name: Contribute List
        uses: akhilmhdh/contributors-readme-action@v2.3.4
        env:
          GITHUB_TOKEN: ${{ secrets.CONTRIBUTORS_TOKEN }}
```

配置文件中用到了 GITHUB_TOKEN，我的这篇文章有详细介绍如何生成以及配置，可直接参考： [https://wiki.eryajf.net/pages/47a507/](https://wiki.eryajf.net/pages/47a507/)

接下来就是当 main 分支 push 代码之后，就会自动生成贡献者列表到 readme 中了。我这边测试项目生成效果如下：

![image_20220718_172421](https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_172421.png)

当然，如果觉得如上配置比较麻烦，可以直接采用如下方式，会更加简单一些，直接添加如下内容到 README 就会自动生成：

```
## 贡献者

<a href="https://github.com/eryajf/learn-github/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=eryajf/learn-github" />
</a>
```

实际展示效果如下：

<a href="https://github.com/eryajf/learn-github/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=eryajf/learn-github" />
</a>

点击之后会自动跳转到贡献者列表详情中。
