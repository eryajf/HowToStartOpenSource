<template>
<div class="contributors-wrapper">
  <h3 class="contributors-title" v-if="showTitle">
    {{ repo }}
    <GitHubLink :repo="`${user}/${repo}`"/>
  </h3>
  <ul class="contributors-list" v-if="contributors.length">
    <li class="contributors-item" v-for="(contributor, index) in contributors" :key="index">
      <a :href="contributor.html_url">
        <img class="avatar" :src="contributor.avatar_url" :alt="contributor.login">
        <a class="name">{{ contributor.login }}</a>
      </a>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    showTitle: {
      type: Boolean,
      default: false
    },
    user: {
      type: String,
      require: true
    },
    repo: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      contributors: []
    }
  },
  mounted () {
    this.getContributors()
  },
  methods: {
    getContributors () {
      require('whatwg-fetch')
      const { user, repo } = this
      const uri = `https://api.github.com/repos/${user}/${repo}/contributors`

      fetch(uri)
      .then(function(response) {
        return response.json()
      })
      .then(res => {
        this.contributors = res
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.contributors-wrapper
  box-sizing border-box
  margin 0 auto
  max-width 46rem
  width 100%
  text-align cent
  .contributors-title
    margin-top 20px
  .contributors-list
    list-style none
    display flex
    flex-wrap wrap
    padding-left 0
    width 100%
    margin 30px 0
    .contributors-item
      flex 0 0 80px
      margin-bottom 10px
      text-align center
      > a
        display inline-block
        width 100%
        .avatar
          display inline-block
          width 36px
          height 36px
          border-radius 6px
          border 2px solid rgba(0, 0, 0, .3)
          img 
            width 100%
            height 100%
        .name
          margin 0 auto
          width 90%
          display block
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          font-size 12px
</style>