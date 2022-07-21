// 插件配置
module.exports = [
  'plugins', [
  // // vssue 评论
  //   [
  //     '@vssue/vuepress-plugin-vssue', {
  //       // 设置 `platform` 而不是 `api`
  //       platform: 'github-v4',
  //       // 其他的 Vssue 配置
  //       owner: 'eryajf',
  //       repo: 'HowToStartOpenSource',
  //       clientId: '173bf094ce5ddd2d011e',
  //       clientSecret: '8843cb9fb9a9bd9131c65b87f322f491a7d09795',
  //     }],
      [
        "vuepress-plugin-vssue-global",
        {
          platform: "github",
          title: "[Comment]<%- frontmatter.title %>",
          needComments: true,
          // 其他的 Vssue 配置
          clientId: "173bf094ce5ddd2d011e",
          clientSecret: "8843cb9fb9a9bd9131c65b87f322f491a7d09795",
          owner: "eryajf",
          repo: "HowToStartOpenSource",
        },
      ],
    ],
  ],

  'vuepress-plugin-baidu-autopush', // 百度自动推送
  // 全文搜索插件
  'fulltext-search',
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
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  // [
  //   'vuepress-plugin-baidu-tongji', // 百度统计
  //   {
  //     hm: 'e12125ba1d24defa06c1e9d26a2b8cd9',
  //   },
  // ],
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
