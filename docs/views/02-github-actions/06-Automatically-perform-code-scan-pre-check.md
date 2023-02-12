---
title: 自动执行代码扫描预检查等工作
date: 2022-07-24 09:07:25
---


## 前言

一个项目，在推出去作为开源项目之后，自然而然就会吸引其他开发者来进行协同，当协同越来越多的时候，有一个能自动检测代码基本语法问题的预检，就非常重要。

本文就来讲一下，如何借助 Github Actions 自动执行各语言相关的代码检测扫描。

## Go语言

所用 Actions。
- [setup-go](https://github.com/actions/setup-go)：提供go基础环境。
- [golangci-lint-action](https://github.com/golangci/golangci-lint-action)：能够运行golangci-lint检查的action。

使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了，这里说一两个需要注意的地方。

首先添加 Actions 配置文件，e.g. `.github/workflows/go-ci.yml`：


```yaml
name: golangci-lint

on: [push, pull_request]

jobs:
  golangci:
    name: golang-lint
    runs-on: ubuntu-latest
    steps:
      - uses: actions/setup-go@v3
        with:
          go-version: 1.17
      - uses: actions/checkout@v3
      - name: golangci-lint
        uses: golangci/golangci-lint-action@v3
        with:
          version: v1.46.2
  build:
    name: go-build
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Set up Go
      uses: actions/setup-go@v3
      with:
        go-version: 1.17
    - name: Build
      run: go build -v ./...
```

配置项也都比较简单，不做过多赘述，根据自己的实际情况调整即可。

这个配置添加之后，每次有push的动作，或者PR的请求，都会自动运行该动作，示例如下：

![image_20220724_084202](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220724_084202.png)

当这个步骤运行失败，则提交PR的人也会自行根据报错内容进行一些自检。

## Node

使用的Actions。

- [setup-node](https://github.com/actions/setup-node)：提供node的运行环境。
- [npm-install](https://github.com/bahmutov/npm-install)：提供一个带有缓存的npm。

```yaml
name: Test

	on: [push, pull_request]

	jobs:
	  lint:
	    runs-on: ubuntu-latest
	    steps:
	    - uses: actions/checkout@v2
	    - uses: actions/setup-node@v1
	      with:
	        node-version: '12.x'
	    - name: Install dependencies
	      uses: bahmutov/npm-install@v1
	    - name: Run linter
	      run: npm run lint

	  test:
	    runs-on: ubuntu-latest
	    steps:
	    - uses: actions/checkout@v2
	    - uses: actions/setup-node@v1
	      with:
	        node-version: '12.x'
	    - name: Install dependencies
	      uses: bahmutov/npm-install@v1
	    - name: Run test
	      run: npm test

	  build:
	    runs-on: ubuntu-latest
	    steps:
	    - uses: actions/checkout@v2
	    - uses: actions/setup-node@v1
	      with:
	        node-version: '12.x'
	    - name: Install dependencies
	      uses: bahmutov/npm-install@v1
	    - name: Build
	      run: npm run build
```

---

以上是拿两个语言作为例子，算是一个抛砖引玉，其他语言的检测，可参考官方文档：[https://docs.github.com/cn/actions/automating-builds-and-tests/building-and-testing-go](https://docs.github.com/cn/actions/automating-builds-and-tests/building-and-testing-go) 进行配置。