---
title: 自动检测项目中的问题链接
date: 2022-08-08 15:47:36
---

## 前言

我维护的开源项目 [Thanks-Mirror](https://github.com/eryajf/Thanks-Mirror) 整理记录了各个包管理器，系统镜像，以及常用软件的好用镜像，随着项目越来越完善，到今天，已经累计整理链接 1091 个，随着时间推移，一些国内镜像可能会停止维护，如何自定感知那些已经失效的链接，就是一个需要考虑的事情了。

本文就介绍一个有意思的小动作，它的主要功能是可以自动扫描仓库内的链接，然后对链接进行请求，根据自定义的规则，自动抛出异常的链接，然后将这些链接创建到 issue 当中。

## 配置

所用 Actions：[lycheeverse/lychee-action](lycheeverse/lychee-action)

使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了，不过官方文档介绍的方式并不是很灵活，官方是借助其开源的项目：[lychee](https://github.com/lycheeverse/lychee)来完成检查，本文将针对这个开源项目拓展的配置文件，来实现更加丰富的能力。

首先添加 Actions 配置文件，e.g. `.github/workflows/links-check.yml`：

```yml
name: 🔗 检查链接
on:
  repository_dispatch:
  push:
    branches:
      - main
  workflow_dispatch:
  schedule:
    - cron: "00 18 * * *"
jobs:
  linkChecker:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Link Checker
        id: lychee
        uses: lycheeverse/lychee-action@v1.5.1
        env:
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
        with:
          # Check all markdown and html files in repo (default)
          args: --config ./.github/config/lychee.toml README.md
          # Use json as output format (instead of markdown)
          format: markdown
          # Use different output file path
          output: ./lychee/out.md
      - name: Create Issue From File
        if: steps.lychee.outputs.exit_code != 0
        uses: peter-evans/create-issue-from-file@v3
        with:
          title: 🔗 链接检查报告
          content-filepath: ./lychee/out.md
          labels: report, automated issue
```

> 简单介绍这个动作：当有内容提交，以及每天 18 点会自动运行（当然也可以手动运行），自动检测 `README.md`文件中的所有链接，使用配置文件 `./.github/config/lychee.toml`，结果输出到 `./lychee/out.md`，输出格式为 Markdown，如果全部检查通过，则不会有任何动作，如果检查失败，则会自动创建 issue。

上边内容提到了 `.github/config/lychee.toml`，这里列出我使用的配置文件：

```toml
#############################  Display  #############################

# Verbose program output
verbose = true

# Show progress
progress = true

# Path to summary output file.
# output = "report.md"

#############################  Cache  ###############################

# Enable link caching. This can be helpful to avoid checking the same links on
# multiple runs.
cache = true

#############################  Runtime  #############################

# Number of threads to utilize.
# Defaults to number of cores available to the system if omitted.
threads = 6

# Maximum number of allowed redirects [default: 10]
max_redirects = 10

# Maximum number of concurrent network requests [default: 128]
max_concurrency = 30

#############################  Requests  ############################

# User agent to send with each request
user_agent = "curl/7.83.1"

# Website timeout from connect to response finished
timeout = 10

# Minimum wait time in seconds between retries of failed requests.
retry_wait_time = 2

# Comma-separated list of accepted status codes for valid links.
# Omit to accept all response types.
#accept = "text/html"

# Proceed for server connections considered insecure (invalid TLS)
insecure = true

# Comma-separated list of accepted status codes for valid links.
# Don't work as of yet until https://github.com/lycheeverse/lychee/issues/644
# is resolved
accept = [200,204,301,429,403]

# Only test links with the given scheme (e.g. https)
# Omit to check links with any scheme
#scheme = "https"

# Request method
method = "get"

# Custom request headers
headers = []

#############################  Exclusions  ##########################

# Exclude URLs from checking (supports regex)

# balena base images account for ~1400 request to GitHub, they are
# omitted to avoid being rate limited.
# See https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting
# The openvpn link is omitted as trying to auto chek it results in
# a 503, even when it is available.
# The meta-balena link is included in parameterized scripts and as
# a result will always produce a failing link.
# The myorg/myapp link is a dummy address used in an example contract so is omitted.
# The balena/resin API urls will not respond to unauthenticated requests
# The gstatic and googleapis links go 404 and are excluded ever since we started checking HTML
# balenaCLI linux binary URLs always error out since they are generated on run time only
# File URLs are excluded as they aren't checked properly and error out
exclude = [
    "developer.aliyun.com/*",
    "mirrors.ustc.edu.cn/*",
    "eryajf.net/*",
    "rsproxy.cn/*",
    "https://mirrors.cloud.tencent.com/go/",
    "http://maven.aliyun.com/nexus/content/groups/public/",
    "https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git",
    "https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git",
]

# Exclude URLs contained in a file from checking
exclude_file = []

include = []

include_verbatim = true

# Exclude all private IPs from checking
# Equivalent to setting `exclude_private`, `exclude_link_local`, and `exclude_loopback` to true
exclude_all_private = true

# # Exclude private IP address ranges from checking
# exclude_private = false

# # Exclude link-local IP address range from checking
# exclude_link_local = false

# # Exclude loopback IP address range and localhost from checking
# exclude_loopback = false

# Exclude all mail addresses from checking
exclude_mail = true
```

其中大部分内容都通用，可能需要调整的两个内容是：`accept`与 `exclude`，一开始我检查的时候，发现所有 `developer.aliyun.com`在 GitHub Actions 中访问都是网络失败，猜测应该是 ali 限制了外部访问，这也能理解，因此就把整个域名全部加到排除的行列了。

总之检查结果需要自己进行一些过滤分析，然后再结合配置文件的含义进行调整。

## PR 自动检查

如上 action 并没有对 PR 进行检查，你还可以再添加一个动作，专门用于检测 PR 提交上来的链接：

```yaml
$ cat link-check-pr.yml

name: Links (Fail Fast)
on:
  pull_request:
jobs:
  linkChecker:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Link Checker
        uses: lycheeverse/lychee-action@v1.5.1
        with:
          # Check all markdown and html files in repo (default)
            args: --config ./.github/config/lychee.toml README.md
            # Use json as output format (instead of markdown)
            format: markdown
            # Use different output file path
            output: ./lychee/out.md
            # Fail action on broken links
            fail: true
        env:
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

这样当 pr 时有异常的链接，将会检测失败，以前置预检一些可能是坏的链接合并到项目。

## 效果

检测通过之后的效果如下：

![image_20220808_154825](https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220808_154825.png)
