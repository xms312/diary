<!-- .vitepress/theme/MyComment.vue -->
<template>
  <div id="giscus-container" class="giscus"></div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'xms312/diary')
  script.setAttribute('data-repo-id', 'R_kgDOOwld-Q')
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', 'DIC_kwDOOwld-c4CqoV_')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('data-theme', 'light')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true
  document.getElementById('giscus-container')?.appendChild(script)
})
</script>

<style>
.giscus {
  margin-top: 2rem;
}
</style>
