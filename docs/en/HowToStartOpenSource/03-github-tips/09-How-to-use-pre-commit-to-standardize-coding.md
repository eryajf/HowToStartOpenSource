---
title: Standardized coding using pre-commit to add pre-commit checks to projects
date: 2023-02-26 13:28:10
---


## 前言

日常开发过程中，不论是哪个语言，一定都会有相对应的语法检测工具或者手段来辅助我们检查出编码过程中的一些遗漏或疏忽。但有时候会有一个尴尬的情况就是，把检测的方式配置上去了，却没有运行，最后成了摆设。

今天来介绍一个工具，能够完成在代码提交之前运行指定检测，从而实现代码的自检。

- 项目：[pre-commit](https://github.com/pre-commit/pre-commit)
- 官网： [https://pre-commit.com/](https://pre-commit.com/)
- 开箱即用：[pre-commit-hooks](https://github.com/pre-commit/pre-commit-hooks)

pre-commit 的运行机制借助于 git hook 来完成提交之前的一些预定义指令的运行，来达到提交前检测的目的。

## 关于git hook

Git 能在特定的重要动作发生时触发自定义脚本钩子。钩子分为两组：

- 客户端钩子：`pre-commit`, `prepare-commit-msg`, `commit-msg`, `post-commit` 等，主要在服务端接收提交对象时、推送到服务器之前调用。
- 服务器钩子：`pre-receive`, `post-receive`, `update` 等，主要在服务端接收提交对象时、推送到服务器之前调用。

git hooks 位置位于每个 git 项目下的 `.git/hooks` 目录里，进去后会看到这些钩子的官方示例，都是以 `.sample` 结尾的文件，这些示例脚本是不会执行的，去掉 `.sample` 后缀可激活该钩子脚本。

> PS：GIt hooks 的每个钩子的作用和说明，详细的以官方文档为准： https://git-scm.com/docs/githooks

![](http://t.eryajf.net/imgs/2023/02/b521f43dba90f43b.jpg)

## 安装体验

### 安装

pre-commit 是一个 Python 语言写的工具，通过如下命令能够轻松安装该工具：

```sh
$ pip3 install pre-commit
```

查看版本：

```sh
$ pre-commit --version
pre-commit 3.1.0
```

如果这条命令运行没有问题，则说明安装成功。

### 配置

现在我拿 [learn-github](https://github.com/eryajf/learn-github) 项目来作为示例进行体验。

pre-commit 以 `.pre-commit-config.yaml` 文件作为默认的配置文件，在项目根目录执行如下命令生成简单的配置内容：

```sh
$ pre-commit sample-config > .pre-commit-config.yaml
```

查看一下配置文件的内容信息：

```sh
$ cat .pre-commit-config.yaml
# See https://pre-commit.com for more information
# See https://pre-commit.com/hooks.html for more hooks
repos:
-   repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.4.0
    hooks:
    -   id: trailing-whitespace
    -   id: end-of-file-fixer
    -   id: check-yaml
    -   id: check-added-large-files
```

- repos：表示一系列仓库的映射。
	- repo：表示接下来使用的 hooks 脚本从哪个仓库进行拉取。
	- rev：指定将要拉取的 tag 。
	- hooks：钩子脚本列表，这些脚本来自于 repo 定义的仓库中。
		- id：指定将要应用的钩子的名称，就是对应的文件名。

其中 hooks 还有更加丰富的配置信息，这里暂不展开，随后再进行完整介绍。

简单解释下如上配置文件的意思：在代码提交之前，会运行 hooks 列表中的这些检查，这些脚本来自于 `https://github.com/pre-commit/pre-commit-hooks` 这个仓库的 `v4.4.0`。四个检查脚本的含义如下：

- `trailing-whitespace` ：检查修建行尾的空格
- `end-of-file-fixer` ：确保文件以换行符结尾且仅以换行符结尾。
- `check-yaml` ：检查 yaml 文件的语法。
- `check-added-large-files` ：防止提交大文件。(默认检测阈值为 500KB)

### 运行

执行 `pre-commit run --all-files` 命令，可以手动运行 pre-commit 的检查：

```sh
$ pre-commit run --all-files
[INFO] Initializing environment for https://github.com/pre-commit/pre-commit-hooks.
[INFO] Installing environment for https://github.com/pre-commit/pre-commit-hooks.
[INFO] Once installed this environment will be reused.
[INFO] This may take a few minutes...
Trim Trailing Whitespace.................................................Passed
Fix End of Files.........................................................Failed
- hook id: end-of-file-fixer
- exit code: 1
- files were modified by this hook

Fixing workflows-tested/rss.yml

Check Yaml...............................................................Passed
Check for added large files..............................................Passed
```

`📢注意：` 钩子添加完毕之后，默认情况下，pre-commit 只会检测当次变更了的文件，因此一般建议在添加之后，运行一次针对项目的全面检测。

如上内容表示运行 `Fix End of Files` 这个脚本的时候发现有不符合检测规范的内容，然后自动 fix 掉了，这些检测脚本都是根据个人需求按需加载，因此这里我就把这个脚本去掉了。

### 安装

上边是手动运行的，我们还应该运行一下安装命令，把 pre-commit 的配置文件加载到 git hooks 当中：

```sh
$ pre-commit install
pre-commit installed at .git/hooks/pre-commit
```

这个时候，再次运行常规的提交步骤就会触发检测了：

```sh
$ gcmsg '添加pre commit'
[INFO] Initializing environment for https://github.com/pre-commit/pre-commit-hooks.
[INFO] Installing environment for https://github.com/pre-commit/pre-commit-hooks.
[INFO] Once installed this environment will be reused.
[INFO] This may take a few minutes...
trim trailing whitespace.................................................Passed
check yaml...............................................................Passed
check for added large files..............................................Passed
[main aeb4728] 添加pre commit
 1 file changed, 9 insertions(+)
 create mode 100644 .pre-commit-config.yaml
```

## Go 项目实践

以上内容介绍了 pre-commit 的简单配置以及使用，接下来我们测试一个 go 项目的实践。

然后在项目根目录添加如下配置文件 `.pre-commit-config.yaml` ：

```yaml
repos:
-   repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.4.0
    hooks:
    - id: check-yaml
    - id: trailing-whitespace
    - id: check-added-large-files
-   repo: https://github.com/golangci/golangci-lint # golangci-lint hook repo
    rev: v1.47.3 # golangci-lint hook repo revision
    hooks:
    - id: golangci-lint
      name: golangci-lint
      description: Fast linters runner for Go.
      entry: golangci-lint run --fix
      types: [go]
      language: golang
      pass_filenames: false
```

然后运行如下命令将 hooks 载入到 git 配置文件中：

```sh
$ pre-commit install
pre-commit installed at .git/hooks/pre-commit
```

然后将代码某处的 err 错误忽略不做处理，此时提交代码看看是否会检查：

```sh
$ gcmsg 'test pre check'
Check Yaml...............................................................Passed
Trim Trailing Whitespace.................................................Passed
Check for added large files..............................................Passed
golangci-lint............................................................Failed
- hook id: golangci-lint
- exit code: 1

config/config.go:30:11: ineffectual assignment to err (ineffassign)
        workDir, err := os.Getwd()
                 ^
```

如此就实现了一个简单的提交前的 lint 检查，一些简单的语法问题就能在这里抛出来了。

其他语言同理，pre-commit 官方提供了大量检测脚本集成，各语言都有，大家可按需进行了解使用。

## 补充

### hooks 配置文件

内容摘自官方文档：

| [`id`](https://pre-commit.com/#hooks-id)                     | 钩子的 id - 在 pre-commit-config.yaml 中使用。               |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [`name`](https://pre-commit.com/#hooks-name)                 | 挂钩的名称 - 在挂钩执行期间显示。                            |
| [`entry`](https://pre-commit.com/#hooks-entry)               | 入口点 - 要运行的可执行文件。 `entry` 还可以包含不会被覆盖的参数，例如 `entry: autopep8 -i`. |
| [`language`](https://pre-commit.com/#hooks-language)         | 钩子的语言 - 告诉预提交如何安装钩子。                        |
| [`files`](https://pre-commit.com/#hooks-files)               | （可选：默认 `''`）要运行的文件模式。                         |
| [`exclude`](https://pre-commit.com/#hooks-exclude)           | （可选：默认 `^$`）排除匹配的文件 [`files`](https://pre-commit.com/#hooks-files)。 |
| [`types`](https://pre-commit.com/#hooks-types)               | （可选：默认 `[file]`）要运行的文件类型列表（AND）。请参阅 [使用类型过滤文件](https://pre-commit.com/#filtering-files-with-types)。 |
| [`types_or`](https://pre-commit.com/#hooks-types_or)         | （可选：默认 `[]`）要运行的文件类型列表（或）。请参阅 [使用类型过滤文件](https://pre-commit.com/#filtering-files-with-types)。 *2.9.0 中的新功能*。 |
| [`exclude_types`](https://pre-commit.com/#hooks-exclude_types) | （可选：默认 `[]`）要排除的文件模式。                         |
| [`always_run`](https://pre-commit.com/#hooks-always_run)     | （可选：默认 `false`）即使 `true` 没有匹配的文件，这个钩子也会运行。 |
| [`fail_fast`](https://pre-commit.com/#hooks-fail_fast)       | （可选：默认 `false`）如果 `true` 此挂钩失败，预提交将停止运行挂钩。 *2.16.0 中的新功能*。 |
| [`verbose`](https://pre-commit.com/#hooks-verbose)           | （可选：默认 `false`）如果 `true`，即使挂钩通过，也强制打印挂钩的输出。 |
| [`pass_filenames`](https://pre-commit.com/#hooks-pass_filenames) | （可选：默认 `true`）如果 `false` 没有文件名将传递给挂钩。      |
| [`require_serial`](https://pre-commit.com/#hooks-require_serial) | （可选：默认 `false`）如果 `true` 这个钩子将使用单个进程而不是并行执行。 |
| [`description`](https://pre-commit.com/#hooks-description)   | （可选：默认 `''`）钩子的描述。仅用于元数据目的。             |
| [`language_version`](https://pre-commit.com/#hooks-language_version) | （可选：默认 `default`）请参阅 [覆盖语言版本](https://pre-commit.com/#overriding-language-version)。 |
| [`minimum_pre_commit_version`](https://pre-commit.com/#hooks-minimum_pre_commit_version) | （可选：默认 `'0'`）允许一个人指示最低兼容的预提交版本。      |
| [`args`](https://pre-commit.com/#hooks-args)                 | （可选：默认 `[]`）要传递给挂钩的附加参数列表。               |
| [`stages`](https://pre-commit.com/#hooks-stages)             | （可选：默认（所有阶段））将挂钩限制在 `commit`、`merge-commit`、 `push`、`prepare-commit-msg`、`commit-msg`、`post-checkout`、`post-commit`、 `post-merge`、`post-rewrite` 和/或 `manual` 阶段。请参阅 [限制挂钩在特定阶段运行](https://pre-commit.com/#confining-hooks-to-run-at-certain-stages)。 |

### 其他内容快链

大部分内容官方文档已经介绍的很好，这里不再重复介绍，把相关的内容快链如下：

-  [如何设置默认启用](https://pre-commit.com/#automatically-enabling-pre-commit-on-repositories)
- [支持的语言](https://pre-commit.com/#supported-languages)
- [按类型过滤文件](https://pre-commit.com/#filtering-files-with-types)
- [使用徽标标记你的存储库](https://pre-commit.com/#badging-your-repository)
- [与 GitHub Action 的集成](https://pre-commit.com/#github-actions-example)