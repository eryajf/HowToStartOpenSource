<script setup lang="ts">
import { withBase, useRouter } from "vitepress";

const router = useRouter();

const ns = "error-page";
</script>

<template>
  <div :class="[ns, 'flx-center']">
    <img :src="withBase('/404.png')" :class="`${ns}__img`" alt="404" />
    <div :class="[`${ns}__detail`, 'flx-column']">
      <h2>404</h2>
      <h4>抱歉，您访问的页面不存在~🤷‍♂️🤷‍♀️</h4>
      <button @click="router.go('/')">返回首页</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
$namespace: error-page;

.#{$namespace} {
  width: 100%;
  height: calc(100vh - var(--vp-nav-height));
  gap: 120px;

  &__detail {
    h2 {
      font-size: 60px;
      color: var(--vp-c-text-1);
      line-height: 1;
    }
    h4 {
      margin: 10px 0 20px 0;
      font-size: 19px;
      font-weight: normal;
      color: var(--vp-c-text-2);
    }

    button {
      color: #ffffff;
      background-color: #395ae3;
      box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
      font-size: 14px;
      width: 100px;
      height: 32px;
      padding: 4px 15px;
      border-radius: 6px;
      outline: none;
      position: relative;
      display: inline-block;
      font-weight: 400;
      white-space: nowrap;
      text-align: center;
      background-image: none;
      border: 1px solid transparent;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      user-select: none;
      touch-action: manipulation;
      line-height: 1.5714285714285714;

      &:hover {
        background-color: #5a79f4;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 60px;
    transform: translateY(-10%);
    &__detail {
      align-items: center;
    }
  }
}
</style>
