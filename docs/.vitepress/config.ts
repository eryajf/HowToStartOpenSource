import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";
import { version } from "vitepress-theme-teek/es/version";
import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss'

const description = [
  "欢迎来到 vitepress-theme-teek 使用文档",
  "Teek 是一个基于 VitePress 构建的主题，是在默认主题的基础上进行拓展，支持 VitePress 的所有功能、配置",
  "Teek 拥有三种典型的知识管理形态：结构化、碎片化、体系化，可以轻松构建一个结构化知识库，适用个人博客、文档站、知识库等场景",
].toString();

const baseUrl = 'https://howtosos.eryajf.net'
const RSS: RSSOptions = {
  title: 'HowToSoS',
  baseUrl,
  copyright: 'Copyright (c) 2022-present, eryajf',
}

const teekConfig = defineTeekConfig({
  author: { name: "eryajf", link: "https://github.com/eryajf" },
  blogger: {
    avatar: "https://avatars.githubusercontent.com/u/188568020",
    shape: "circle-rotate",
    name: "二丫讲梵",
    slogan: "行者常至，为者常成！",
    circleBgImg: "/blog/bg4.webp",
    color: "#ffffff",
  },
  footerInfo: {
    theme: {
      name: `Theme By Teek@${version}`,
    },
    copyright: {
      createYear: 2022,
      suffix: "Eryajf",
    },
  },
  codeBlock: {
    copiedDone: TkMessage => TkMessage.success("复制成功！"),
  },
  post: {
    showCapture: true,
  },
  articleShare: { enabled: true },
  comment: {
    provider: "giscus",
    options: {
      // giscus 配置，官网：https://giscus.app/zh-CN
      repo: 'eryajf/HowToStartOpenSource', //仓库
      repoId: 'R_kgDON4RvxA', //仓库ID
      category: 'General', // 讨论分类
      categoryId: 'DIC_kwDON4RvxM4CnUkh', //讨论分类ID
    },
  },
  vitePlugins: {
    sidebarOption: {
      initItems: false,
    },
    permalink: true,
    permalinkOption: {
    },
  },
  markdown: {
    demo: {
      githubUrl: "https://github.com/eryajf/HowToStartOpenSource/blob/main/docs",
    },
  },
  siteAnalytics: [
    {
      provider: "baidu",
      options: {
        id: "457b1f311c48412b87b946117f8314fc",
      },
    },
    // {
    //   provider: "google",
    //   options: {
    //     id: "G-K5GNDW3L7K",
    //   },
    // },
  ],
});

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: teekConfig,
  title: "HowToSoS",
  description: description,
  cleanUrls: false,
  lastUpdated: true,
  lang: "zh-CN",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/jenkins.svg" }],
    ["link", { rel: "icon", type: "image/png", href: "/jenkins.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh-CN" }],
    ["meta", { property: "og:title", content: "Eyajf | Jenkins Guide" }],
    ["meta", { property: "og:site_name", content: "eryajf" }],
    ["meta", { property: "og:image", content: "" }],
    ["meta", { property: "og:url", content: "" }],
    ["meta", { property: "og:description", description }],
    ["meta", { name: "description", description }],
    ["meta", { name: "author", content: "eryajf" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
      },
    ],

    ["meta", { name: "keywords", description }],
    // ["meta", { name: "baidu-site-verification", content: "codeva-GdK2q9MO1i" }], // 百度收录
    // ["meta", { name: "msvalidate.01", content: "48CABE70F538B8D117567176ABF325AF" }], // Bing 收录验证
    // ["script", { charset: "UTF-8", id: "LA_COLLECT", src: "//sdk.51.la/js-sdk-pro.min.js" }], // 51.la
    [
      "script",
      {},
      `typeof LA !== 'undefined' && LA.init({ id: "3LqfP8Icg0GeEvtn", ck: "3LqfP8Icg0GeEvtn", hashMode: true })`,
    ], // 51.la
  ],
  markdown: {
    // 开启行号
    lineNumbers: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
    // 更改容器默认值标题
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  sitemap: {
    hostname: "https://howtosos.eryajf.net",
    transformItems: items => {
      const permalinkItemBak: typeof items = [];
      // 使用永久链接生成 sitemap
      const permalinks = (globalThis as any).VITEPRESS_CONFIG.site.themeConfig.permalinks;
      items.forEach(item => {
        const permalink = permalinks?.map[item.url];
        if (permalink) permalinkItemBak.push({ url: permalink, lastmod: item.lastmod });
      });
      return [...items, ...permalinkItemBak];
    },
  },
  vite: {
    plugins: [RssPlugin(RSS)]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/jenkins.svg",
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新时间",
    outline: {
      level: [2, 4],
      label: "本页导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '🍉 基础内容', link: '/01-basic-content/01-basic-configuration.html' },
      { text: '⚗️ GitHub Actions', link: '/02-github-actions/01-Automatically-add-TOC-directories-for-README' },
      { text: '🔔 GitHub Tips', link: '/03-github-tips/01-How-to-center-the-table-in-README' },
      { text: '📋 我的项目', link: '/myopensource' },
      {
        text: "功能页",
        items: [
          { text: "归档页", link: "/archives" },
          { text: "分类页", link: "/categories" },
          { text: "标签页", link: "/tags" },
        ],
      },
      { text: '📝 我的博客', link: 'https://wiki.eryajf.net' },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/eryajf/HowToStartOpenSource" }],

    search: {
      provider: "local",
    },
    editLink: {
      text: "在 GitHub 上编辑此页",
      pattern: "https://github.com/eryajf/HowToStartOpenSource/edit/main/docs/:path",
    },
  },
});
