<template>
  <div class="md5-wrapper">
    <input type="text" v-model="password" placeholder="Please input password" maxlength="6" />
    <button class="btn-copy" @click="copyToClipboard(md5Str)">{{ btnText }}</button>
    <p><span v-show="md5Str !== ''">md5 密文：{{ md5Str }}</span></p>
  </div>
</template>

<script setup lang="ts">
import { md5 } from '@vuepress-reco/shared'
import { computed, ref } from 'vue';

const password = ref('')
const md5Str = computed(() => {
  return password.value === '' ? '' : md5(md5(password.value))
})

const btnText = ref('Copy')

async function copyToClipboard(text: string) {
  if (!text) return


  try {
    const result = navigator.clipboard.writeText(text)

    btnText.value = 'Copied'
    setTimeout(() => {
      btnText.value = 'Copy'
    }, 1000)

    return result
  } catch {
    const element = document.createElement('textarea')
    const previouslyFocusedElement = document.activeElement

    element.value = text

    // Prevent keyboard from showing on mobile
    element.setAttribute('readonly', '')

    // @ts-ignore
    element.style.contain = 'strict'
    element.style.position = 'absolute'
    element.style.left = '-9999px'
    element.style.fontSize = '12pt' // Prevent zooming on iOS

    const selection = document.getSelection()
    const originalRange = selection
      ? selection.rangeCount > 0 && selection.getRangeAt(0)
      : null

    document.body.appendChild(element)
    element.select()

    // Explicit selection workaround for iOS
    element.selectionStart = 0
    element.selectionEnd = text.length

    document.execCommand('copy')
    document.body.removeChild(element)

    if (originalRange) {
      selection!.removeAllRanges() // originalRange can't be truthy when selection is falsy
      selection!.addRange(originalRange)
    }

    // Get the focus back on the previously focused element, if any
    if (previouslyFocusedElement) {
      ;(previouslyFocusedElement as HTMLElement).focus()
    }

    btnText.value = 'Copied'
    setTimeout(() => {
      btnText.value = 'Copy'
    }, 1000)
  }
}
</script>

<style scoped>
@import '@vuepress-reco/tailwindcss-config/lib/client/styles/tailwindcss-base.css';

.md5-wrapper {
  @apply mt-4;
  input {
    @apply outline-none box-border p-2 text-reco-primary border-reco-primary border border-solid rounded-lg;
  }
  .btn-copy {
    @apply ml-2 box-border px-1 py-0.5 bg-block border-block rounded-lg text-sm;
  }
}
</style>

