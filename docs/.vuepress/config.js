const path = require('path')
const themeConfig = require('./config/theme/')

module.exports = {
  dest: 'docs/.vuepress/dist',
  base: '/HowToStartOpenSource/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'author', content: 'eryajf' }],
    ['meta', { name: 'keywords', content: 'vuepress,reco,eryajf,github,HowToStartOpenSource,二丫讲梵' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#42b983' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
    ['link', { rel: 'mask-icon', href: '/logo.png', color: '#42b983' }],
    ['meta', { name: 'msapplication-TileImage', content: '/logo.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  theme: 'reco',
  themeConfig,
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: "HowToStartOpenSource",
      description: '⚗️ GitHub开源项目维护协作指南。'
    },
    '/en/': {
      lang: 'en-US',
      title: "HowToStartOpenSource",
      description: '⚗️ GitHub Open source project maintenance collaboration guide.'
    }
  },
  markdown: {
    // lineNumbers: true
  },
  plugins: [
    // 添加sitemap
    [
      'sitemap', {
        hostname: 'https://eryajf.github.io/HowToStartOpenSource/',
        exclude: ["/404.html"],
      },
    ],
    // 一键复制
    [
      'one-click-copy',
      {
        // 代码块复制按钮
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],
    // 全文搜索插件 meilisearch
    [
      'vuepress-plugin-meilisearch',
        {
            hostUrl: 'https://ms-d5d5d07c4cab-1961.sgp.meilisearch.io',        // meilisearch 服务端域名
            apiKey: "575b81b52d62c70a11367b8c4bdc1cb2532270d89381d2da7fb0ebd6b7c7f675", // 只有搜索权限的 key
            indexUid: 'howtoStartOpenSource',
            // placeholder: 'Search as you type...',   // 在搜索栏中显示的占位符
            maxSuggestions: 9,                      // 最多显示几个搜索结果
            cropLength: 30,                         // 每个搜索结果最多显示多少个字符
        },
    ],
    // [
    //   '@vuepress/plugin-register-components',
    //   {
    //     components: [
    //       {
    //         name: 'reco-home-page-one',
    //         path: path.resolve(__dirname, './components/HomePageOne.vue')
    //       }
    //     ],
    //     componentsDir: path.resolve(__dirname, './demo')
    //   }
    // ],
    '@vuepress-reco/extract-code',
    'flowchart',
    ['@vuepress-reco/rss', {
      site_url: 'https://eryajf.github.io/HowToStartOpenSource/',
      copyright: 'eryajf'
    }]
  ]
}
