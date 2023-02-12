module.exports = {
  type: 'HomePageOne',
  // logo: '/logo.png',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 自动形成侧边导航
  sidebar: 'auto',
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: 'eryajf',
  authorAvatar: '/head.png',
  // 备案号
  // record: '京ICP备17067634号-1',
  // 项目开始时间
  startYear: '2022',
  // valine 设置
  // valineConfig: {
  //   appId: 'jvc9s4BkJYQNOcpsbVTPMePe-gzGzoHsz',
  //   appKey: 'Js91M9DfM9vPwVaUj7xdkbxh',
  //   placeholder: '填写邮箱可以收到回复提醒哦！',
  //   verify: true, // 验证码服务
  //   // notify: true, //
  //   recordIP: true,
  //   showComment: false
  // },
  // vssueConfig: {
  //   admins: ['eryajf'],
  //   platform: 'github',
  //   owner: 'eryajf',
  //   repo: 'HowToStartOpenSource',
  //   clientId: '4d81cea3b3d8aac8e88e',
  //   clientSecret: 'd23e8556b6d3c85abffbf4b8d853afb2ea08875a',
  // },
  // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
  repo: 'eryajf/HowToStartOpenSource',
  // // 假如文档不是放在仓库的根目录下：
  docsDir: 'docs',
  // // 假如文档放在一个特定的分支下：
  docsBranch: 'gh-pages',
  // // 默认是 false, 设置为 true 来启用
  editLinks: true,
  mode: 'light',
  codeTheme: 'tomorrow'
}