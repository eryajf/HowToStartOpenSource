(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{513:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("本文介绍一个有意思的小动作，它的主要功能是可以获取项目当前的star与fork数量，然后将这两个数据覆盖到项目的Descrition中。")]),t._v(" "),s("p",[t._v("所用Actions："),s("a",{attrs:{href:"https://github.com/ouuan/This-repo-has-x-stars-y-forks-action",target:"_blank",rel:"noopener noreferrer"}},[t._v("This-repo-has-x-stars-y-forks-action"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了，这里说一两个需要注意的地方。")]),t._v(" "),s("p",[t._v("首先添加Actions配置文件，e.g. "),s("code",[t._v(".github/workflows/start-fork-updata.yml")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" This repo has x stars y forks\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fork")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("watch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("types")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" started\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("schedule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cron")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0 * * * *'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("workflow_dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" This repo has x stars y forks\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ouuan/This"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("repo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("has"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("stars"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("forks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@v2\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.ACCESS_TOKEN "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A profile README with <starCount> stars and <forkCount> forks 🌟"')]),t._v("\n")])])]),s("p",[t._v("配置文件中用到了 "),s("code",[t._v("ACCESS_TOKEN")]),t._v("，我的这篇文章有详细介绍如何生成以及配置，可直接参考： "),s("a",{attrs:{href:"https://wiki.eryajf.net/pages/47a507/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.eryajf.net/pages/47a507/"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("目前配置的为每个小时执行一次更新，如果你想要其他时间，可根据需求进行调整。")]),t._v(" "),s("p",[t._v("效果如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220729_164001.png",alt:"image_20220729_164001"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);