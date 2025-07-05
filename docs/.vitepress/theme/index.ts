import Teek, { en } from "vitepress-theme-teek";
import TeekLayoutProvider from "./components/TeekLayoutProvider.vue";

// Teek 在线主题包引用（需安装 Teek 在线版本）
import "vitepress-theme-teek/index.css";
import "vitepress-theme-teek/theme-chalk/tk-code-block-mobile.css";
import "vitepress-theme-teek/theme-chalk/tk-sidebar.css";
import "vitepress-theme-teek/theme-chalk/tk-nav.css";
import "vitepress-theme-teek/theme-chalk/tk-aside.css";
import "vitepress-theme-teek/theme-chalk/tk-doc-h1-gradient.css";
import "vitepress-theme-teek/theme-chalk/tk-table.css";
import "vitepress-theme-teek/theme-chalk/tk-mark.css";
import "vitepress-theme-teek/theme-chalk/tk-blockquote.css";
import "vitepress-theme-teek/theme-chalk/tk-index-rainbow.css";
import "vitepress-theme-teek/theme-chalk/tk-doc-fade-in.css";
import "vitepress-theme-teek/theme-chalk/tk-banner-desc-gradient.css";

import "./styles/code-bg.scss";
import "./styles/iframe.scss";

export default {
  extends: Teek,
  Layout: TeekLayoutProvider,
};
