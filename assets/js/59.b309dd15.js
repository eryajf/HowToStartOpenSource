(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{507:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("基于 git 管理的项目，通常在分支管理之外，还会通过 tag 来对代码进行管理，尤其像 go 语言，go mod 更是依赖 tag 来对项目的版本进行管理，因此合理的版本管理，对于项目的发展也会是更加健康的一个激励。GitHub 中有一个 Releases 的概念，其实与 tag 差不多，简单理解就是在打一个 tag 的基础之上，用 releases 来进行管理。如果你没有了解过这里边的概念，那么要想成功打一个 release 还是有点难度的。")]),t._v(" "),s("p",[t._v("本文就来讲一下，如何借助 Github Actions 自动且优雅地为项目构建 Release。")]),t._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("p",[t._v("所用 Actions： "),s("a",{attrs:{href:"https://github.com/release-drafter/release-drafter",target:"_blank",rel:"noopener noreferrer"}},[t._v("release-drafter"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了，这里说一两个需要注意的地方。")]),t._v(" "),s("p",[t._v("首先添加 Actions 配置文件，e.g. "),s("code",[t._v(".github/workflows/release.yml")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Release Drafter\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" main\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pull_request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("types")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("opened"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reopened"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" synchronize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("permissions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("contents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" read\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("update_release_draft")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("permissions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("contents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" write  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# for release-drafter/release-drafter to create a github release")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pull-requests")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" write  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# for release-drafter/release-drafter to add label to PR")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" release"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("drafter/release"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("drafter@v5\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("GITHUB_TOKEN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.ACCESS_TOKEN "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("配置文件中用到了 "),s("code",[t._v("GITHUB_TOKEN")]),t._v("，我的这篇文章有详细介绍如何生成以及配置，可直接参考： "),s("a",{attrs:{href:"https://wiki.eryajf.net/pages/47a507/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.eryajf.net/pages/47a507/"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("然后添加自动生成的变更日志模板，e.g: "),s("code",[t._v(".github/release-drafter.yml")])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Configuration for Release Drafter: https://github.com/toolmantim/release-drafter")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name-template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v$NEXT_PATCH_VERSION 🌈'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tag-template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v$NEXT_PATCH_VERSION'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version-template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $MAJOR.$MINOR.$PATCH\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Emoji reference: https://gitmoji.carloscuesta.me/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("categories")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'🚀 Features'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'feature'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'enhancement'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kind/feature'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'🐛 Bug Fixes'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fix'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bugfix'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bug'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'regression'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kind/bug'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 📝 Documentation updates\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" documentation\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kind/doc'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 👻 Maintenance\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" chore\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" dependencies\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kind/chore'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kind/dep'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 🚦 Tests\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" test\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" tests\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exclude-labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" reverted\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" no"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("changelog\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" skip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("changelog\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" invalid\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("change-template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'* $TITLE (#$NUMBER) @$AUTHOR'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n  ## What’s Changed\n  $CHANGES")]),t._v("\nTerms\nPrivacy\nSecurity\n")])])]),s("p",[t._v("模板的含义是当提交的 PR 符合其中的 labels 时，对应提交的标题会作为当次提交的说明信息，生成在 release 的草稿中。")]),t._v(" "),s("p",[t._v("有了这些内容，在每次 push 或者 pr 的时候，Actions 都会自动将当次的内容写入到 release 的草稿中，下次再有 pr 则内容将会是追加，并不会覆盖一开始的草稿。")]),t._v(" "),s("p",[t._v("还有一个注意点就是，通常普通协作者在提交 pr 的时候，大概都很少会有主动给 pr 添加 labels 的，每次还需要项目负责人自己添加，会比较麻烦，而这个功能又是依赖 pr 的 labels 的，因此可以再加一个配置，"),s("code",[t._v(".github/pull-request-template.md")])]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 请务必在创建PR前，在右侧 Labels 选项中加上label的其中一个: [feature]、[fix]、[documentation] 。以便于Actions自动生成Releases时自动对PR进行归类。--\x3e")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token bold"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("在提出此拉取请求时，我确认了以下几点（请复选框）：")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" [ ] 我已阅读并理解[贡献者指南]()。\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" [ ] 我已检查没有与此请求重复的拉取请求。\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" [ ] 我已经考虑过，并确认这份呈件对其他人很有价值。\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" [ ] 我接受此提交可能不会被使用，并根据维护人员的意愿关闭拉取请求。\n\n"),s("span",{pre:!0,attrs:{class:"token bold"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("填写PR内容：")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")])]),t._v("\n\n-\n")])])]),s("p",[t._v("这样协作者提交 pr 的时候就会主动提示协作者尽量给当次 pr 添加一个或多个合适的 labels。")]),t._v(" "),s("p",[t._v("最后来看下生成的 release drafter：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_172517.png",alt:"image_20220718_172517"}})]),t._v(" "),s("p",[t._v("当你觉得可以发布一个新的版本的时候，就可以点击小铅笔按钮，对内容二次审查之后，点击发布：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_172527.png",alt:"image_20220718_172527"}})]),t._v(" "),s("p",[t._v("以上就是借助 GitHub Actions 的能力，自动给项目构建 releases 的全部内容。")])])}),[],!1,null,null,null);s.default=e.exports}}]);