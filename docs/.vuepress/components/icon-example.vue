<template>
  <ul class="icon-wrapper">
    <li v-for="(item, index) in iconArr" :key="index">
      <i :class="`iconfont ${item.iconClass}`"></i>
      <p class="icon-name">{{ item.iconName }}</p>
      <p class="icon-name">{{ item.iconClass }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      iconArr: [
        { iconClass: 'reco-faq', iconName: 'FAQ' },
        { iconClass: 'reco-sticky', iconName: '置顶' },
        { iconClass: 'reco-lock', iconName: '加密' },
        { iconClass: 'reco-mail', iconName: 'Email' },
        { iconClass: 'reco-douban', iconName: '豆瓣' },
        { iconClass: 'reco-wechat', iconName: '微信' },
        { iconClass: 'reco-color', iconName: '颜色板' },
        { iconClass: 'reco-sf', iconName: '思否' },
        { iconClass: 'reco-message', iconName: '消息' },
        { iconClass: 'reco-eye', iconName: '眼睛' },
        { iconClass: 'reco-search', iconName: '搜索' },
        { iconClass: 'reco-category', iconName: '分类' },
        { iconClass: 'reco-npm', iconName: 'NPM' },
        { iconClass: 'reco-menu', iconName: '菜单' },
        { iconClass: 'reco-suggestion', iconName: '建议' },
        { iconClass: 'reco-coding', iconName: 'Coding' },
        { iconClass: 'reco-github', iconName: 'GitHub' },
        { iconClass: 'reco-other', iconName: '其他' },
        { iconClass: 'reco-home', iconName: '首页' },
        { iconClass: 'reco-document', iconName: '文档' },
        { iconClass: 'reco-huawei', iconName: '华为' },
        { iconClass: 'reco-up', iconName: '回到顶部' },
        { iconClass: 'reco-weibo', iconName: '微博' },
        { iconClass: 'reco-tag', iconName: '标签' },
        { iconClass: 'reco-date', iconName: '日期' },
        { iconClass: 'reco-bokeyuan', iconName: '博客园' },
        { iconClass: 'reco-beian', iconName: '备案' },
        { iconClass: 'reco-copyright', iconName: '版权' },
        { iconClass: 'reco-bilibili', iconName: '哔哩哔哩' },
        { iconClass: 'reco-account', iconName: '账号' },
        { iconClass: 'reco-jianshu', iconName: '简书' },
        { iconClass: 'reco-qq', iconName: 'QQ' },
        { iconClass: 'reco-theme', iconName: '主题' },
        { iconClass: 'reco-three', iconName: '三' },
        { iconClass: 'reco-gitlab', iconName: 'GitLab' },
        { iconClass: 'reco-blog', iconName: '博客' },
        { iconClass: 'reco-mayun', iconName: '码云' },
        { iconClass: 'reco-zhihu', iconName: '知乎' },
        { iconClass: 'reco-facebook', iconName: 'Facebook' },
        { iconClass: 'reco-taobao', iconName: '淘宝' },
        { iconClass: 'reco-tongzhi', iconName: '通知' },
        { iconClass: 'reco-douyin', iconName: '抖音' },
        { iconClass: 'reco-v2ex', iconName: 'V2EX' },
        { iconClass: 'reco-toutiao', iconName: '今日头条' },
        { iconClass: 'reco-linkedin', iconName: '领英' },
        { iconClass: 'reco-twitter', iconName: 'Twitter' },
        { iconClass: 'reco-api', iconName: 'API' },
        { iconClass: 'reco-csdn', iconName: 'CSDN' },
        { iconClass: 'reco-juejin', iconName: '掘金' }
      ]
    }
  }
}
</script>


<style lang="stylus" scoped>
.icon-wrapper
  list-style none
  li
    display inline-block
    width 119px
    border-bottom 1px solid var(--border-color)
    text-align center
    .iconfont
      font-size 26px
</style>