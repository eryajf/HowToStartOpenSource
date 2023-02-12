<template>
  <div class="md5-wrapper">
    <input type="text" v-model="password" placeholder="请输入你的密码">
    <p><span v-show="md5Str !== ''">md5 密文：{{ md5Str }}</span></p>
  </div>
</template>

<script>
import md5 from 'md5'
export default {
  data () {
    return {
      password: ''
    }
  },
  computed: {
    md5Str () {
      const pw = this.password
      return pw === '' ? '' : md5(this.password)
    }
  }
}
</script>

<style lang="stylus" scoped>
.md5-wrapper {
  margin-top .5rem
  input {
    outline none 
    border-radius $borderRadius
    border: 1px solid var(--border-color)
    box-sizing border-box
    padding .5rem
  }
}
</style>

