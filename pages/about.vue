<template>
  <div>
    <div id="article" class="about-me" v-html="show"></div>

    <!-- 文章渲染效果测试文本框 -->
    <textarea
      v-model="test"
      class="area"
      placeholder="Markdown格式文章测试输入"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
const { $md } = useNuxtApp();
const { blogApi } = useApi();
const aboutData = ref("");
const show = ref("");
const counter = useCounter();
counter.value = [
  {
    type: 2,
    routerName: "关于",
  },
];

initData();
async function initData() {
  await blogApi.getAbout().then((res) => {
    aboutData.value = res.data;
    // 渲染MarkDown内容到页面
    show.value = $md.render(aboutData.value.About);
  });
}

// 文章渲染效果测试
const test = ref("");
watch(test, (val) => {
  show.value = $md.render(test.value);
  // show.value = $md.render(test.value.replace(/\n/g, "\\n"));
});
</script>

<style scoped lang="scss">
.about-me {
  padding: 30px 40px;
  min-height: 800px;
}

.area {
  width: 100%;
  height: 100px;
  // display: none;
}
</style>
