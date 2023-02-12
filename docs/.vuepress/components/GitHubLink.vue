// based on
// https://github.com/vuepress/vuepress-community/blob/master/packages/docs/src/.vuepress/components/GitHubLink.vue

<template>
  <a
    class="github-link"
    rel="noopener noreferrer"
    target="_blank"
    :title="repo"
    :href="`https://github.com/${repo}`"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
      <path
        d="M14 0C6.27 0 0 6.43 0 14.36c0 6.34 4.01 11.72 9.57 13.62.7.13.96-.31.96-.69 0-.34-.01-1.24-.02-2.44-3.89.87-4.72-1.92-4.72-1.92-.64-1.66-1.55-2.1-1.55-2.1-1.27-.89.1-.87.1-.87 1.4.1 2.14 1.48 2.14 1.48 1.25 2.19 3.28 1.56 4.07 1.19.13-.93.49-1.56.89-1.92-3.11-.36-6.38-1.59-6.38-7.09 0-1.57.55-2.85 1.44-3.85-.14-.36-.62-1.82.14-3.8 0 0 1.18-.39 3.85 1.47a12.8 12.8 0 0 1 3.5-.48c1.19.01 2.39.16 3.5.48 2.67-1.86 3.85-1.47 3.85-1.47.76 1.98.28 3.44.14 3.8.9 1 1.44 2.28 1.44 3.85 0 5.51-3.27 6.73-6.39 7.08.5.44.95 1.32.95 2.66 0 1.92-.02 3.47-.02 3.94 0 .38.25.83.96.69C23.99 26.07 28 20.7 28 14.36 28 6.43 21.73 0 14 0z"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  </a>
</template>

<script>
export default {
  name: 'GitHubLink',
  props: {
    repo: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="stylus">
.github-link
  width 1em
  height 1em
  text-decoration none
  display inline-block
  vertical-align -.1em
  margin-left 0.6rem
  path
    fill #666
    transition 0.3s ease
  &:hover
    path
      fill #888
</style>