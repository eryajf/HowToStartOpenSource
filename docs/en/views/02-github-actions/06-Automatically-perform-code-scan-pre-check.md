---
title: Automate code scanning, pre-checks, and more
date: 2022-07-24 09:07:25
---


## Preface

A project, after being launched as an open source project, will naturally attract other developers to collaborate, and when there is more and more collaboration, it is very important to have a pre-check that can automatically detect basic syntax problems in the code.

This article will show you how to automate code detection scans for each language with the help of Github Actions.

## Go language

Used Actions。
- [setup-go](https://github.com/actions/setup-go)：Provide a GO basic environment.
- [golangci-lint-action](https://github.com/golangci/golangci-lint-action)：Ability to run actions for golangci-lint checks.

Using the configuration is actually very simple, basically after reading the official introduction document you can get started to use, here is one or two things to pay attention to.

Start by adding the Actions profile，e.g. `.github/workflows/go-ci.yml`：


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

The configuration items are also relatively simple, do not repeat too much, adjust according to your actual situation.

After this configuration is added, every time there is a push action, or a PR request, the action will be automatically run, as shown in the following example:

![image_20220724_084202](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220724_084202.png)

When this step fails, the person submitting the PR will also perform some self-tests according to the content of the error.

## Node

Actions used.

- [setup-node](https://github.com/actions/setup-node)：Provide the runtime environment of node.
- [npm-install](https://github.com/bahmutov/npm-install)：Provide an npm with caching.

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

The above is to take two languages as an example, it is a brick throwing jade, the detection of other languages, you can refer to the official documentation: the above is to take two languages as an example, it is a brick throwing jade, the detection of other languages, you can refer to the official documentation:[https://docs.github.com/cn/actions/automating-builds-and-tests/building-and-testing-go](https://docs.github.com/cn/actions/automating-builds-and-tests/building-and-testing-go) to configure.