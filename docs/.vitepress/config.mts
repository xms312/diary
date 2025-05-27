import { defineConfig } from "vitepress";
import { studys } from "../routes";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "没想好标题",
  description: "这个人很懒，没有什么介绍！",
  base: "/",
  lastUpdated: true, // ✅ 启用更新时间
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "介绍", link: "/decoration" },
    ],

    sidebar: [
      {
        text: "DECORATION",
        items: [{ text: "介绍", link: "/decoration" }],
      },
      {
        text: "STUDY",
        items: [...studys],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/xms312/diary" }],
  },
});
