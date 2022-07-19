GitHub的Markdown目前不支持直接`[TOC]`渲染文章的目录，有些README则需要这样的效果，可以借助外部工具进行生成，也可以借助 `GitHub Actions` 自动生成，本文就介绍这种方式。

所用Actions：[TOC Generator](https://github.com/marketplace/actions/toc-generator)

使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了，这里说一两个需要注意的地方。

首先需要在将要生成目录的文件内，指定目录生成位置，e.g. `README.md`，在要生成的地方添加如下内容：

```
<!-- START doctoc -->
<!-- END doctoc -->
```

然后添加Actions配置文件，e.g. `.github/workflows/toc.yml`：

```yml
on: push
name: TOC Generator
jobs:
  generateTOC:
    name: TOC Generator
    runs-on: ubuntu-latest
    steps:
      - uses: technote-space/toc-generator@v4
```

接着需要调整下项目的Actions权限，在GitHub上点击`settings`--> `actions` --> `General` --> `Workflow permissions` --> 选择 `Read and write permissions`。

![image_20220718_172340](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_172340.png)

配置调整完成之后，就可以push项目看效果了，当然这里也可以通过GitHub_Token的方式认证，就不赘述了。

效果呈现如下：

![image_20220719_110310](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220719_110310.png)

`配置列表：`

| name                      | description                                                  | default                                                      | required | e.g.                           |
| ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | -------- | ------------------------------ |
| TARGET_PATHS              | Target file path. (Comma separated, [Detail](https://github.com/thlorenz/doctoc#adding-toc-to-individual-files)) | `README*.md`                                                 | true     | `README*.md,CHANGELOG.md`, `.` |
| TOC_TITLE                 | TOC Title                                                    | `**Table of Contents**`                                      |          | `''`                           |
| MAX_HEADER_LEVEL          | Maximum heading level. ([Detail](https://github.com/thlorenz/doctoc#specifying-a-maximum-heading-level-for-toc-entries)) |                                                              |          | `3`                            |
| CUSTOM_MODE               | Whether it is custom mode([Generated Example](https://github.com/technote-space/toc-generator/blob/main/samples/README.horizontal.md)) | `false`                                                      |          | `true`                         |
| CUSTOM_TEMPLATE           | Custom template for custom mode                              | `<p align="center">${ITEMS}</p>`                             |          |                                |
| ITEM_TEMPLATE             | Item template for custom mode                                | `<a href="${LINK}">${TEXT}</a>`                              |          |                                |
| SEPARATOR                 | Separator for custom mode                                    | `<span>|</span>`                                             |          |                                |
| FOLDING                   | Whether to make TOC foldable                                 | `false`                                                      |          | `true`                         |
| COMMIT_MESSAGE            | Commit message                                               | `chore(docs): update TOC`                                    | true     | `docs: update TOC`             |
| COMMIT_NAME               | Git commit name                                              | `${github.actor}`                                            |          |                                |
| COMMIT_EMAIL              | Git commit email                                             | `${github.actor}@users.noreply.github.com`                   |          |                                |
| CREATE_PR                 | Whether to create PullRequest                                | `false`                                                      |          | `true`                         |
| CHECK_ONLY_DEFAULT_BRANCH | Whether to check only default branch                         | `false`                                                      |          | `true`                         |
| PR_BRANCH_PREFIX          | PullRequest branch prefix                                    | `toc-generator/`                                             | true     |                                |
| PR_BRANCH_NAME            | PullRequest branch name [Context variables](https://github.com/marketplace/actions/toc-generator#context-variables) | `update-toc-${PR_ID}`                                        | true     | `toc-${PR_NUMBER}`             |
| PR_TITLE                  | PullRequest title [Context variables](https://github.com/marketplace/actions/toc-generator#context-variables) | `chore(docs): update TOC (${PR_MERGE_REF})`                  | true     | `docs: update TOC`             |
| PR_BODY                   | PullRequest body [Context PR variables](https://github.com/marketplace/actions/toc-generator#context-pr-variables) | [action.yml](https://github.com/technote-space/toc-generator/blob/main/action.yml) | true     |                                |
| PR_COMMENT_BODY           | PullRequest body for comment [Context PR variables](https://github.com/marketplace/actions/toc-generator#context-pr-variables) | [action.yml](https://github.com/technote-space/toc-generator/blob/main/action.yml) |          |                                |
| PR_CLOSE_MESSAGE          | Message body when closing PullRequest                        | `This PR has been closed because it is no longer needed.`    |          |                                |
| TARGET_BRANCH_PREFIX      | Filter by branch name                                        |                                                              |          | `release/`                     |
| INCLUDE_LABELS            | Labels used to check if the PullRequest has it               |                                                              |          | `Label1, Label2`               |
| OPENING_COMMENT           | Opening comment (for other than DocToc)                      | `<!-- toc`                                                   |          |                                |
| CLOSING_COMMENT           | Closing comment (for other than DocToc)                      | `<!-- tocstop`                                               |          |                                |
| GITHUB_TOKEN              | Access token                                                 | `${{github.token}}`                                          | true     | `${{secrets.ACCESS_TOKEN}}`    |

可根据自己的实际需求以及情况进行配置！

## 另外

后来在一个地方学到了一招，原来GitHub针对Markdown文件已经默认支持了目录的方式，并且还支持搜索，如下：

![image_20220719_110613](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220719_110613.png)