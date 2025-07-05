---
title: Configuration and application of issues and PR templates.
date: 2022-07-26 18:35:55
---

In the process of project collaboration, we need to simplify the maintenance of collaborators and ourselves by developing some templates, and this article introduces the templates for issues and PRs.

There is a repository that brings together various issues and PR templates, from which we can choose the one that suits us:

- Project：[github-issue-templates](https://github.com/stevemao/github-issue-templates)

## issue

Configuring the issue template for the project allows ordinary users to submit issue content more standardized, and also facilitates us to handle issues more efficiently.

Next, I'll talk about how to configure the project's issue template.

- [Official documentation](https://docs.github.com/cn/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)

The official template is almost a form, in fact, sometimes it increases the mental burden of the submitter, the following is the template used in my project.

`template-bug：`

```sh
$ cat .github/ISSUE_TEMPLATE/issue-template-bug.md
---
name: 🐛 错误报告 | Bug Report
about: 请详细描述您使用过程中遇到的问题。| Please describe in detail the problems you encountered in the process of using.
title: "🐛 一Questions。。。 | [Bug] Some problem..."
labels: ["bug"]
---

<!-- 请在您提交 bug 之前，回答以下这些问题。 | Please answer these questions before you submit a bug. -->

#### 您使用的版本？ | Your usage version?

#### 您使用的场景？ | Your usage scenarios?

#### 您做了什么操作？ | What did you do?

#### 您遇到了什么问题？ | What are your problems?

#### 您期望的结果是怎样的？ | What is your expected outcome?
```

`template-feature：`

```sh
$ cat .github/ISSUE_TEMPLATE/issue-template-feature.md
---
name: 🚀 功能请求 | Feature Request
about: 请详细描述您期望的功能。 | Please describe in detail the features you expect.
title: "🚀 一些功能。。。 | [Feature]Some feature..."
labels: ["enhancement"]
---

<!-- 请在您提交期望的功能之前，回答以下这些问题。 | Please answer these questions before you submit the desired feature. -->

#### 您使用的场景？ | 1. Your usage scenarios?

#### 您期望的结果是怎样的？ | 2. What is your expected outcome?
```

`template-question:`

```sh
$ cat .github/ISSUE_TEMPLATE/question-report.md
---
name: 🙋 问题交流 | Question Report
about: 在文档或讨论中没有回答的使用问题 | Usage question that isn't answered in docs or discussion
title: "🙋 问题交流。。。 | [Question] Some question..."
labels: ["question"]
---

## Question Report

- 搜索打开和关闭的 [GitHub 问题](https://github.com/eryajf/go-ldap-admin/issues)

请在提交问题之前回答这些问题，谢谢。 | Please answer these questions before submitting them. Thank you.

### 你使用了哪个版本？ | Which version did you use?

### 预期行为 | Expected behavior

### 实际行为 | Actual behavior

### 原因分析（如果可以） | Cause analysis (if possible)

### 问题重现步骤 | Steps to reproduce the problem
```

以及一个配置文件：

```sh
$ cat .github/ISSUE_TEMPLATE/config.yml
blank_issues_enabled: false
contact_links:
  - name: 📜 官方文档 | GO Ldap Admin Doc
    url: http://ldapdoc.eryajf.net
    about: The functional usage and design considerations of the project will be presented on the official website, please read the official documentation before submitting a question, and if it is not satisfied, then ask the question.
  - name: 👀 Github论坛 | GitHub Discussions
    url: https://github.com/eryajf/go-ldap-admin/discussions
    about: If your issue is not a feature or bug, go to the discussion panel and retrieve if your issue already exists before submitting.
```

In this way, the file only needs to be placed in the `.github/ISSUE_TEMPLATE` directory, GitHub will automatically identify and parse it into a template, and the page for creating a new issue will look like this:

![image_20220726_205630](/img/image_20220726_205630.png)

## pull request

Here is my personal use of the issue submission template:

```sh
$ cat .github/pull-request-template.md
<!-- Be sure to add one of the labels to the Labels option on the right before creating a PR : [feature]、[fix]、[documentation]. This allows Actions to automatically categorize PRs when Releases are automatically generated. -->

**When I made this pull request, I confirmed the following (please checkbox): **

- [ ] I have read and understood[Contributor Guide]()。
- [ ] I have checked for pull requests that are not  duplicated with this request.
- [ ] I have considered and confirmed that this submission is valuable to others.
- [ ] I accept that this commit may not be used and close the pull request as the maintainer wishes.

**Fill in the PR content:**

-
-
-
```

In this way, whenever a collaborator submits a PR, it is necessary to know some preset information in advance, as well as some possible scenarios.

Another important point is to encourage collaborators to actively label and classify their PRs, so that PR information can be classified according to labels when [Automatically Build Release](./pages/4abd22/)
