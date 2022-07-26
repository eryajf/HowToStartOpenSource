(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{384:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("项目协作过程中，我们需要通过制定一些模板，从而简化协作者以及自己的维护工作，本文就介绍issue与pr的模板。")]),s._v(" "),t("p",[s._v("有一个仓库汇集了各种issue与pr模板，我们可以从中选取适合自己的：")]),s._v(" "),t("ul",[t("li",[s._v("项目："),t("a",{attrs:{href:"https://github.com/stevemao/github-issue-templates",target:"_blank",rel:"noopener noreferrer"}},[s._v("github-issue-templates"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"issue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#issue"}},[s._v("#")]),s._v(" issue")]),s._v(" "),t("p",[s._v("给项目配置issue模板，能够让普通使用者更加规范地提交issue内容，也便于我们更加高效地处理issue。")]),s._v(" "),t("p",[s._v("接下来我来讲下如何配置项目的issue模板。")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docs.github.com/cn/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("官方提供的模板几乎做成了一个表单，其实有时候反而加重了提交者的心智负担，以下是我项目中使用的模板。")]),s._v(" "),t("p",[t("code",[s._v("template-bug：")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" .github/ISSUE_TEMPLATE/issue-template-bug.md\n---\nname: 🐛 错误报告 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Bug Report\nabout: 请详细描述您使用过程中遇到的问题。"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Please describe "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" detail the problems you encountered "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the process of using.\ntitle: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"🐛 一些问题。。。 | [Bug] Some problem..."')]),s._v("\nlabels: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bug"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n---\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- 请在您提交 bug 之前，回答以下这些问题。 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Please answer these questions before you submit a bug. --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#### 您使用的版本？ | Your usage version?")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#### 您使用的场景？ | Your usage scenarios?")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#### 您做了什么操作？ | What did you do?")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#### 您遇到了什么问题？ | What are your problems?")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#### 您期望的结果是怎样的？ | What is your expected outcome?")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[t("code",[s._v("template-feature：")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" .github/ISSUE_TEMPLATE/issue-template-feature.md\n---\nname: 🚀 功能请求 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Feature Request\nabout: 请详细描述您期望的功能。 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Please describe "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" detail the features you expect.\ntitle: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"🚀 一些功能。。。 | [Feature]Some feature..."')]),s._v("\nlabels: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"enhancement"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n---\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- 请在您提交期望的功能之前，回答以下这些问题。 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Please answer these questions before you submit the desired feature. --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#### 您使用的场景？ | 1. Your usage scenarios?")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#### 您期望的结果是怎样的？ | 2. What is your expected outcome?")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[t("code",[s._v("template-question:")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" .github/ISSUE_TEMPLATE/question-report.md               \n---\nname: 🙋 问题交流 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Question Report\nabout: 在文档或讨论中没有回答的使用问题 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Usage question that isn't answered "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" docs or discussion\ntitle: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"🙋 问题交流。。。 | [Question] Some question..."')]),s._v("\nlabels: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"question"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n---\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Question Report")]),s._v("\n\n- 搜索打开和关闭的 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("GitHub 问题"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("https://github.com/eryajf/go-ldap-admin/issues"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n请在提交问题之前回答这些问题，谢谢。 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Please answer these questions before submitting them. Thank you.\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 你使用了哪个版本？ | Which version did you use?")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 预期行为 | Expected behavior")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 实际行为 | Actual behavior")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 原因分析（如果可以） | Cause analysis (if possible)")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 问题重现步骤 | Steps to reproduce the problem")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("p",[s._v("以及一个配置文件：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" .github/ISSUE_TEMPLATE/config.yml        \nblank_issues_enabled: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\ncontact_links:\n  - name: 📜 官方文档 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" GO Ldap Admin Doc\n    url: http://ldapdoc.eryajf.net\n    about: 关于项目的功能用法以及设计考量，都会在官网进行呈现，提交问题之前，请先阅读官方文档，如果还不能满足，则再提问题。\n  - name: 👀 Github论坛 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" GitHub Discussions\n    url: https://github.com/eryajf/go-ldap-admin/discussions\n    about: 如果您的问题不是功能或者错误，请转到讨论面板并在提交之前检索您的问题是否已经存在。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("这样，文件只需要放置在 "),t("code",[s._v(".github/ISSUE_TEMPLATE")]),s._v("  目录下，GitHub就会自动将之识别解析为模板了，新建issue的页面也变成如下模样：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220726_205630.png",alt:"image_20220726_205630"}})]),s._v(" "),t("h2",{attrs:{id:"pull-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pull-request"}},[s._v("#")]),s._v(" pull request")]),s._v(" "),t("p",[s._v("这里分享一下我个人使用的issue提交模板：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" .github/pull-request-template.md   \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- 请务必在创建PR前，在右侧 Labels 选项中加上label的其中一个: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("feature"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("、"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("fix"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("、"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("documentation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 。以便于Actions自动生成Releases时自动对PR进行归类。--"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n**在提出此拉取请求时，我确认了以下几点（请复选框）：**\n\n- "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 我已阅读并理解"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("贡献者指南"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("。\n- "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 我已检查没有与此请求重复的拉取请求。\n- "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 我已经考虑过，并确认这份呈件对其他人很有价值。\n- "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 我接受此提交可能不会被使用，并根据维护人员的意愿关闭拉取请求。\n\n**填写PR内容：**\n\n-\n-\n-\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("这样每当有协作者提交pr，都需要提前知晓一些预置信息，以及一些可能的情况。")]),s._v(" "),t("p",[s._v("还有一个很重要的点在于，鼓励协作者主动给自己的pr打标签分类，从而便于"),t("RouterLink",{attrs:{to:"/01.basic-content/pages/4abd22/"}},[s._v("自动构建release")]),s._v("的时候根据label归类pr信息。")],1)])}),[],!1,null,null,null);t.default=e.exports}}]);