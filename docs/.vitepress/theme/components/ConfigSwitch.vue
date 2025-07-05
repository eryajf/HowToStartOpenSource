<script setup lang="ts" name="ConfigSwitch">
import {
  TkSegmented,
  TkMessage,
  magicIcon,
  isClient,
  useMediaQuery,
  TkThemeEnhanceBaseTemplate,
  useClipboard,
} from "vitepress-theme-teek";
import { nextTick, ref, watch } from "vue";
import {
  teekDocConfig,
  teekBlogConfig,
  teekBlogParkConfig,
  teekBlogFullConfig,
  teekBlogBodyConfig,
  teekBlogCardConfig,
} from "../config/teekConfig";

const ns = "config-switch";
const tipInfo = {
  title: "配置切换",
  desc: "配置切换是 Teek 文档项目通过插槽额外实现的功能，并非是 Teek 增强面板自带的功能。",
  tips: [
    {
      title: "说明 1",
      content: "这里预设了一些 Teek 的配置模板，点击可快速切换查看效果",
    },
    {
      title: "说明 2",
      content:
        "您可以点击 Copy 按钮来复制配置项到您的项目 config.mts 文件里，这给第一次使用 Teek 的用户提供开箱帮助",
    },
    {
      title: "说明 3",
      content:
        "除了这里提供的配置模板，Teek 文档自己单独使用了一些公共配置项，具体请看 Teek 的 config.mts 文件，也就是说您要完全达到当前预览的效果，需要 Copy 当前的配置模板 + Teek 文档单独的配置",
    },
  ],
};
const segmentedOptions = [
  { value: "doc", label: "文档预设", title: "文档默认风格" },
  { value: "blog", label: "博客预设", title: "首页默认风格" },
  { value: "blog-part", label: "博客小图", title: "首页 Banner 小图" },
  { value: "blog-full", label: "博客大图", title: "首页 Banner 大图 + 评论" },
  { value: "blog-body", label: "博客全图", title: "全站背景图 + 碎片化文章页" },
  {
    value: "blog-card",
    label: "博客卡片",
    title: "首页卡片文章列表 + 左侧卡片栏列表",
  },
];

const emit = defineEmits<{
  switch: [config: typeof teekDocConfig, style: string];
}>();

// 默认文档风格
const themeStyle = defineModel({ default: "doc" });
const teekConfig = ref(teekDocConfig);

const { copy, copied } = useClipboard();
const isMobile = useMediaQuery("(max-width: 768px)");

const update = async (style: string) => {
  if (style === "doc") teekConfig.value = teekDocConfig;
  if (style === "blog") teekConfig.value = teekBlogConfig;
  if (style === "blog-part") teekConfig.value = teekBlogParkConfig;
  if (style === "blog-full") teekConfig.value = teekBlogFullConfig;
  if (style === "blog-body") teekConfig.value = teekBlogBodyConfig;
  if (style === "blog-card") teekConfig.value = teekBlogCardConfig;

  emit("switch", teekConfig.value, style);

  await nextTick();

  if (!isClient) return;
  const navDom = document.querySelector(".VPNavBar") as HTMLElement;

  // 兼容 Teek Banner 样式
  if (["blog-full", "blog-body", "blog-card"].includes(style))
    navDom?.classList.add("full-img-nav-bar");
  else navDom?.classList.remove("full-img-nav-bar");
};

watch(themeStyle, update);

const handleCopy = async () => {
  await copy(JSON.stringify(teekConfig.value, null, 2));
  copied.value
    ? TkMessage.success({ message: "复制成功！", plain: true })
    : TkMessage.error({ message: "复制失败！", plain: true });
};
</script>

<template>
  <TkThemeEnhanceBaseTemplate
    :class="ns"
    :icon="magicIcon"
    :title="tipInfo.title"
    :helper="!isMobile"
    :helper-desc="tipInfo.desc"
    :tips="tipInfo.tips"
  >
    <template #title>
      <div class="flx-justify-between flx-1">
        {{ tipInfo.title }}
        <button @click="handleCopy">Copy</button>
      </div>
    </template>
    <TkSegmented v-model="themeStyle" :options="segmentedOptions" />
  </TkThemeEnhanceBaseTemplate>
</template>

<style lang="scss">
$namespace: config-switch;

.#{$namespace} {
  @media (max-width: 768px) {
    margin-top: 10px;
  }
  h3 {
    display: inline-block;
    font-size: 12px;
    opacity: 0.8;
  }
  button {
    font-size: 14px;
    font-weight: 500;
    outline: none;
    transition: 0.1s;
    color: var(--vp-c-text-1);

    &:hover {
      color: #5171d7;
      border-color: #5171d7;
    }
  }

  &__helper-desc {
    line-height: 24px;
  }

  .tk-segmented-item {
    min-width: 70px;
  }
}
</style>
