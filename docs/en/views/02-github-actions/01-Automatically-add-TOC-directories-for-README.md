---
title: Automatically add TOC directories for README
date: 2022-07-18 17:23:23
---

GitHub's Markdown does not currently support direct `[TOC]` rendering of article directories, some READMEs require such effects, which can be generated with the help of external tools or automatically generated with the help of `GitHub Actions`, which is described in this article.

Actions used：[TOC Generator](https://github.com/marketplace/actions/toc-generator)

Using the configuration is actually very simple, basically after reading the official introduction document you can get started to use, here is one or two things to pay attention to.

First of all, you need to specify the directory generation location, e.g. `README.md` in the file where the directory will be generated, and add the following content in the place to be generated:

```
<!-- START doctoc -->
<!-- END doctoc -->
```

Then add the Actions profile，e.g. `.github/workflows/toc.yml`：

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

Next, you need to adjust the project's Actions permissions，Click on GitHub, `settings`--> `actions` --> `General` --> `Workflow permissions` --> choose `Read and write permissions`。

![image_20220718_172340](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_172340.png)

After the configuration adjustment is completed, you can push the project to see the effect, of course, you can also pass the GitHub_Token way of certification here, so I won't repeat it.

The effect is presented as follows:

![image_20220719_110310](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220719_110310.png)

`Configure the list：`

::: v-pre
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
:::


It can be configured according to your actual needs and situation!

## Other than that

Later, I learned a trick in one place, it turned out that GitHub already supports the directory method by default for Markdown files, and also supports search, as follows：

![image_20220719_110613](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220719_110613.png)