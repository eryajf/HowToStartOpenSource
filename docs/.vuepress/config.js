const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "HowToStartOpenSource",
  description: 'GitHub开源项目维护协作指南',
  base: '/HowToStartOpenSource/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,

  // vssue 评论插件
  plugins: [
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
  ],
}