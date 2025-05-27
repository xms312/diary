// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import GiscusComments from './GiscusComments.vue'
import Layout from './Layout.vue'
import { type Theme } from 'vitepress'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // 注册为全局组件（可选）
    app.component('GiscusComments', GiscusComments)
  }
} satisfies Theme
