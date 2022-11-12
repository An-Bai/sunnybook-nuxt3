<template>
  <div>
    <NuxtLoadingIndicator color="skyblue" />
    <LazyNuxtLayout>
      <!-- here -->
      <NuxtPage />
    </LazyNuxtLayout>
  </div>
</template>

<script setup>
// const layout = "default";

// 切换主题关键代码
const backgroundColorStyle = ref("styles");
// console.log(backgroundColorStyle);
useHead({
  link: [
    {
      rel: "stylesheet",
      // href: `/_nuxt/assets/${backgroundColorStyle.value}/public/lightColor.scss`,
    },
  ],
});
</script>
