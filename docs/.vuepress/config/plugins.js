// 插件配置
module.exports = [
  // 全文搜索插件
  // 'fulltext-search',
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
  // 评论插件
  [
    "vuepress-plugin-vssue-global",
    {
      platform: "github",
      title: "[Comment]<%- frontmatter.title %>",
      needComments: true,
      // 其他的 Vssue 配置
      autoCreateIssue: true,
      clientId: "173bf094ce5ddd2d011e",
      clientSecret: "8843cb9fb9a9bd9131c65b87f322f491a7d09795",
      owner: "eryajf",
      repo: "HowToStartOpenSource",
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
  [
    'sitemap', {
      hostname: 'https://eryajf.github.io/howtoStartOpenSource',
      exclude: ["/404.html"],
    },
  ],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  'vuepress-plugin-mermaidjs',
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],
]
