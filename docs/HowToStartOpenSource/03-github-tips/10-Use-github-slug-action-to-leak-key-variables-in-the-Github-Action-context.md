---
title: 使用 github-slug-action 暴漏 Github Action 上下文中的关键变量
date: 2023-02-28 15:05:10
---

## 前言

使用 GitHub Action 时，有一种场景需求为，通过 release 触发构建，然后构建的过程中，还要用到这次创建的 release 号。

此时我在 learn-github 仓库中进行演练。添加了如下一个 action 内容：

```yaml
name: test action env

on:
  release:
    types: [created] # 表示在创建新的 Release 时触发

jobs:
  test_action_env:
    name: Test Action Env
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - run: |
          env
```

此时手动创建一个 release，我这边版本号为：`v0.5.6`，然后在日志输出中搜索这个关键字：

```js
GITHUB_WORKFLOW_REF=eryajf/learn-github/.github/workflows/test-env.yml@refs/tags/v0.5.6
GITHUB_REF=refs/tags/v0.5.6
GITHUB_REF_NAME=v0.5.6
```

网上大多数的方案是对 `GITHUB_REF` 这个变量下手，比如：

```yaml
- name: Get Release version
  env:
    ACTIONS_ALLOW_UNSECURE_COMMANDS: true
  run: |
    echo "::set-env name=RELEASE_VERSION::$(echo $GITHUB_REF | cut -d'/' -f 3)"
```

`📢注意：` 需要注意的是，如果使用 set-env 来添加变量，则需要声明 `ACTIONS_ALLOW_UNSECURE_COMMANDS: true`，否则运行过程中会报错如下：

```js
The `set-env` command is disabled. Please upgrade to using Environment Files or opt into unsecure command execution by setting the `ACTIONS_ALLOW_UNSECURE_COMMANDS` environment variable to `true`. For more information see: https://github.blog/changelog/2020-10-01-github-actions-deprecating-set-env-and-add-path-commands/
```

这自然没什么毛病，但着实用起来不够方便，不够优雅。

也许你看到了，上边日志输出中还有一个 `GITHUB_REF_NAME`，正好就是我和你想要的值，但是我想告诉你的是，的确官方新给出了这个变量，但可气的是，这个变量并没有在全局暴漏，因此虽然能在这个 `env` 输出当中看到这个变量，但实际却并不能用。

关于此问题，可见这两个讨论：

- [https://github.com/github/docs/issues/15319](https://github.com/github/docs/issues/15319)
- [https://github.com/rlespinasse/github-slug-action/issues/104](https://github.com/rlespinasse/github-slug-action/issues/104)

## 验证

为了验证如上表述的内容，我创建一个测试脚本如下：

::: v-pre

```yaml
name: test action env

on:
  release:
    types: [created] # 表示在创建新的 Release 时触发

jobs:
  test_action_env:
    name: Test Action Env
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - run: |
          env

      - name: Get Release version
        id: vars
        env:
          ACTIONS_ALLOW_UNSECURE_COMMANDS: true
        run: |
          echo "::set-env name=RELEASE_VERSION_ONE::$(echo $GITHUB_REF | cut -d'/' -f 3)"

      - name: Get Release version
        run: echo "RELEASE_VERSION_TWO=${GITHUB_REF#refs/*/}" >> $GITHUB_ENV

      - name: Show Release Num
        run: |
          echo "通过GitHub-Action获取版本号： ${{ env.GITHUB_REF_NAME }}"
          echo "通过自定义脚本获取版本号第一种： ${{ env.RELEASE_VERSION_ONE }}"
          echo "通过自定义脚本获取版本号第二种： ${{ env.RELEASE_VERSION_TWO }}"
```

:::

运行后得到结果如下：

![image_20230228_151615](/img/image_20230228_151615.jpg)

::: v-pre
可见虽然在全局环境变量中能看到 `GITHUB_REF_NAME=v0.5.13`，但实际上在后续的上下文中，你并不能通过 `${{ env.GITHUB_REF_NAME }}` 来引用这个变量。
:::

## 解决

虽然上边的脚本提供了两种解决方案，但是都不算够优雅，网上也有针对这一问题处理的解决方案，其中以专门针对 GitHub Action 中变量问题解决的项目 github-slug-action 为甚，这也是本文的主角。

- 项目：[github-slug-action](https://github.com/rlespinasse/github-slug-action)

这个 Action 提供了一系列 GitHub Action 运行过程中的变量暴漏等功能。

此时我们把 action 的配置文件改成下边这样：

::: v-pre

```yaml
name: test action env

on:
  release:
    types: [created] # 表示在创建新的 Release 时触发

jobs:
  test_action_env:
    name: Test Action Env
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Inject slug/short variables
        uses: rlespinasse/github-slug-action@v4

      - run: |
          env

      - name: Show Release Num
        run: |
          echo "通过GitHub-Action获取版本号： ${{ env.GITHUB_REF_NAME }}"
          echo "通过github-slug-action获取版本号： ${{ env.GITHUB_REF_NAME_SLUG }}"
```

:::

::: v-pre
当我们把 github-slug-action 应用在流水线中之后，它首先会把原来官方遗漏的变量 `${{ env.GITHUB_REF_NAME }}` 给填充好，其次也可以通过使用 `${{ env.GITHUB_REF_NAME_SLUG }}` 来获取到对应的版本号。
:::

除去这个变量之外，github-slug-action 还提供了其他一些变量，并且做到了配置简单(如你所见，在流水线中引用即可)，优雅易用，因此是一个性价比非常高的，值得在流水线中应用的 action。

- 更多可用变量，可参考[官方文档的说明](https://github.com/rlespinasse/github-slug-action#available-environment-variables)。
