<template>
  <div class="plugins-recommend">
    <div class="screen">
      <ul class="screen-wrapper">
        <li><h4>插件功能：</h4></li>
        <li 
          v-for="(item, key) in screenOptions[0]"
          :key="key"
          class="screen-item"
          :class="feature === item.value ? 'active': ''"
          @click="screenClick('feature', item.value)"
        >
          {{ item.label }}
        </li>
      </ul>
      <ul class="screen-wrapper">
        <li><h4>使用场景：</h4></li>
        <li 
          v-for="(item, key) in  screenOptions[1]"
          :key="key"
          class="screen-item"
          :class="scenes === item.value ? 'active': ''"
          @click="screenClick('scenes', item.value)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
    <hr style="margin-bottom: 1.2rem">
    <div class="plugin-list-wrapper">
      <div class="plugin-item" v-for="(plugin, index) in currentPageData" :key="index">
        <div class="info">
          <h3 class="title">
            <span class="name">{{ plugin.name }}</span>
            <GitHubLink class="link" :repo="`${plugin.user}/${plugin.repo}`" />
          </h3>
          <p class="desc">
            
            <span class="tag">{{plugin.feature | featureFilter}}</span>
            <span class="tag">{{plugin.scenes | scenesFilter}}</span><br>
            {{ plugin.desc }}
          </p>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <pagation
      class="pagation"
      :total="formatData.length"
      :currentPage="currentPage"
      @getCurrentPage="getCurrentPage"
    ></pagation>
  </div>
</template>

<script>
import pluginsData from '../data/pluginsData'

export default {
  data () {
    return {
      pluginsData,
      feature: '',
      scenes: '',
      currentPage: 1,
      screenOptions: [
        [
          { label: '全部', value: '' },
          { label: '优化效果', value: 'style' },
          { label: '扩展功能', value: 'feature' }
        ],
        [
          { label: '全部', value: '' },
          { label: '独立使用', value: 'independent' },
          { label: '开发使用', value: 'develop' }
        ]
      ]
    }
  },
  filters: {
    featureFilter (val) {
      return val === 'style' ? '优化效果' : '扩展功能'
    },
    scenesFilter (val) {
      return val === 'independent' ? '独立使用' : '开发使用'
    }
  },
  computed: {
    formatData () {
      const { pluginsData, feature, scenes } = this
      const fmtData = pluginsData.filter(item => {
        if (feature === '' && scenes === '') {
          return item
        } else if (feature !== '' && scenes === '' && feature === item.feature) {
          return item
        } else if (feature === '' && scenes !== '' && scenes === item.scenes) {
          return item
        } else if (feature === item.feature && scenes === item.scenes) {
          return item
        }
      })
      return fmtData
    },
    currentPageData () {
      const start = this.currentPage * 10 - 10
      const end = this.currentPage * 10
      return this.formatData.slice(start, end)
    }
  },
  methods: {
    getCurrentPage (currentPage) {
      this.currentPage = currentPage
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 100)
    },
    screenClick (single, value) {
      this[single] = value
      this.currentPage = 1
    }
  }
}
</script>


<style lang="stylus" scoped>
.plugins-recommend
  margin-top: -30px;
  .screen {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .screen-wrapper {
      width 48%
      list-style none
      padding-left 0
      .screen-item {
        vertical-align: middle;
        padding: 4px 12px;
        display: inline-block;
        cursor: pointer;
        border-radius: $borderRadius
        font-size: 13px;
        box-shadow var(--box-shadow)
        transition: all .5s
        background-color var(--background-color)
        color: #666
        &:not(:last-child) {
          margin-right .5rem
        }  
        &:hover, &.active {
          background $accentColor
          color #fff
        }
      }
    }
  }
  .plugin-list-wrapper
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .plugin-item
      margin-bottom 2rem
      width 48%
      box-shadow: var(--box-shadow)
      .info
        margin 1rem  0
        padding 0 1.5rem
        .title
          display: flex;
          justify-content space-between
          flex-wrap: wrap;
          margin 0
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          .name
            max-width 88%
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        .desc
          margin .6rem 0 1.5rem
          .tag
            padding 3px 6px
            font-size 12px
            background $accentColor
            color #ffffff
            border-radius $borderRadius

@media (max-width: $MQMobile)
  .plugins-recommend
    .plugin-list-wrapper
      .plugin-item
        width 100%
    .screen    
      .screen-wrapper
        width 100%
</style>

