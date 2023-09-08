import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'
import { themeConfig } from './config/index'

export default defineUserConfig({
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: "HowToSOS",
      description: '⚗️ GitHub开源项目维护协作指南。'
    },
    '/en/': {
      lang: 'en-US',
      title: "HowToSOS",
      description: '⚗️ GitHub Open source project maintenance collaboration guide.'
    }
  },
  theme: recoTheme(themeConfig),
  // debug: true,
})
