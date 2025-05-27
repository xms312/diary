<!-- .vitepress/theme/Layout.vue -->
<template>
  <Layout>
    <!-- ✅ 自动渲染在每个 Markdown 页面下方 -->
    <template #doc-after>
      <GiscusComments :key="route.path" />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from "vitepress/theme";
import { useRoute } from "vitepress";
import GiscusComments from "./GiscusComments.vue";

const { Layout } = DefaultTheme;
const route = useRoute();
</script>

<style scoped>
/* 样式可自定义 */
</style>
