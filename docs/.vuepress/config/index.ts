import * as zhConfig from './zh'
import * as enConfig from './en'

export const themeConfig = {
  locales: {
    '/': {
      selectLanguageText: '选择语言',
      selectLanguageName: '简体中文',
      lastUpdatedText: '最后更新时间',
      navbar: zhConfig.navbar,
      series: zhConfig.series,
      commentConfig: zhConfig.commentConfig,
    },
    '/en/': {
      selectLanguageText: 'Languages',
      selectLanguageName: 'English',
      navbar: enConfig.navbar,
      series: enConfig.series,
      commentConfig: enConfig.commentConfig,
    },
  },
  // autoSetSeries: true,
  // logo: '/logo.png',
  base: '/HowToStartOpenSource/',
  author: 'eryajf',
  docsRepo: 'https://github.com/eryajf/HowToStartOpenSource',
  docsBranch: 'main',
  docsDir: '/docs',
  // vuePreviewsDir: './docs/.vuepress/vue-previews',
  componentsDir: './docs/.vuepress/components',
}
