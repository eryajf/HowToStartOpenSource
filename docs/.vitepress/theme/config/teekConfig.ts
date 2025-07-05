import type { TeekConfig } from "vitepress-theme-teek/config";

// 文档配置
export const teekDocConfig: TeekConfig = {
  themeEnhance: {
    layoutSwitch: {
      defaultMode: "bothWidthAdjustable",
    },
  },
};

// 博客基础配置
const teekBlogCommonConfig: TeekConfig = {
  teekHome: true,
  vpHome: false,
  wallpaper: {
    enabled: true,
  },
  footerInfo: {
    customHtml: `<span id="runtime"></span>`, // 需要搭配 .vitepress/theme/helper/useRuntime.ts 使用
  },
  docAnalysis: {
    createTime: "2025-03-23",
    statistics: {
      provider: "busuanzi",
    },
  },
  friendLink: {
    list: [
      {
        name: "Teeker",
        desc: "朝圣的使徒，正在走向编程的至高殿堂！",
        avatar: "https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/user/avatar2.png",
        link: "http://notes.teek.top/",
      },
      {
        name: "vuepress-theme-vdoing",
        desc: "🚀一款简洁高效的VuePress 知识管理&博客 主题",
        avatar: "https://doc.xugaoyi.com/img/logo.png",
        link: "https://doc.xugaoyi.com/",
      },
      {
        name: "One",
        desc: "明心静性，爱自己",
        avatar: "https://onedayxyy.cn/img/xyy-touxiang.png",
        link: "https://onedayxyy.cn/",
      },
      {
        name: "Hyde Blog",
        desc: "人心中的成见是一座大山",
        avatar: "https://teek.seasir.top/avatar/avatar.webp",
        link: "https://teek.seasir.top/",
      },
      {
        name: "二丫讲梵",
        desc: "💻学习📝记录🔗分享",
        avatar: "https://wiki.eryajf.net/img/logo.png",
        link: " https://wiki.eryajf.net/",
      },
      {
        name: "粥里有勺糖",
        desc: "简约风的 VitePress 博客主题",
        avatar: "https://theme.sugarat.top/logo.png",
        link: "https://theme.sugarat.top/",
      },
      {
        name: "VitePress 快速上手中文教程",
        desc: "如果你也想搭建它，那跟我一起做吧",
        avatar: "https://avatars.githubusercontent.com/u/90893790?v=4",
        link: "https://vitepress.yiov.top/",
      },
      {
        name: "友人A",
        desc: "おとといは兎をみたの，昨日は鹿，今日はあなた",
        avatar: "http://niubin.site/logo.jpg",
        link: "http://niubin.site/",
      },
    ],
    autoScroll: true,
  },
  social: [
    {
      icon: "mdi:github",
      name: "GitHub",
      link: "https://github.com/kele-bingtang",
    },
    {
      icon: "simple-icons:gitee",
      name: "Gitee",
      link: "https://gitee.com/kele-bingtang",
    },
  ],
};

// 博客默认配置
export const teekBlogConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  banner: {
    name: "🎉 Teek Blog",
    description: "故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt",
    bgStyle: "partImg",
  },
};

// 博客小图配置
export const teekBlogParkConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  banner: {
    name: "🎉 Teek Blog",
    bgStyle: "partImg",
    imgSrc: ["/blog/bg1.webp", "/blog/bg2.webp", "/blog/bg3.webp"],
    description: [
      "故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt",
      "积跬步以至千里，致敬每个爱学习的你 —— 来自 Evan Xu",
      "这一生波澜壮阔或是不惊都没问题 —— 来自 Weibw",
    ],
    descStyle: "switch",
  },
};

// 博客大图配置
export const teekBlogFullConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  post: {
    coverImgMode: "full",
  },
  banner: {
    name: "🎉 Teek Blog",
    bgStyle: "fullImg",
    imgSrc: ["/blog/bg1.webp", "/blog/bg2.webp", "/blog/bg3.webp"],
    description: [
      "故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt",
      "积跬步以至千里，致敬每个爱学习的你 —— 来自 Evan Xu",
      "这一生波澜壮阔或是不惊都没问题 —— 来自 Weibw",
    ],
    descStyle: "types",
  },
  comment: {
    provider: "giscus",
    options: {
      repo: "Kele-Bingtang/vitepress-theme-teek",
      repoId: "R_kgDONpVfBA",
      category: "Announcements",
      categoryId: "DIC_kwDONpVfBM4Cm3v9",
    },
  },
};

// 博客全图配置
export const teekBlogBodyConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  pageStyle: "segment-nav",
  bodyBgImg: {
    imgSrc: ["/blog/bg1.webp", "/blog/bg2.webp", "/blog/bg3.webp"],
  },
  themeEnhance: {
    layoutSwitch: {
      defaultMode: "original",
    },
  },
};

// 博客卡片配置
export const teekBlogCardConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  post: {
    postStyle: "card",
  },
  homeCardListPosition: "left",
  banner: {
    name: "🎉 Teek Blog",
    bgStyle: "fullImg",
    imgSrc: ["/blog/bg1.webp", "/blog/bg2.webp", "/blog/bg3.webp"],
    description: [
      "故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt",
      "积跬步以至千里，致敬每个爱学习的你 —— 来自 Evan Xu",
      "这一生波澜壮阔或是不惊都没问题 —— 来自 Weibw",
    ],
    descStyle: "types",
  },
};
