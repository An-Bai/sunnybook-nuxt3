<template>
  <div>
    <div id="article" class="about-me" v-html="show"></div>

    <!-- <textarea
      v-model="test"
      class="area"
      placeholder="Markdown格式文章测试输入"
    ></textarea> -->
  </div>
</template>

<script setup lang="ts">
const { $md } = useNuxtApp();
const show = ref(
  $md.render(
    `___
    \n######\n> 喜欢本站的话，常来看看就好啦。小白只有主人的话会有点孤单，希望大家能和它说说话，放心，小白很听话的。
    >
    > 有时间呢，主人会给小白新的玩具，还有有趣的故事，希望大家喜欢。`
  )
);
const test = ref("");
watch(test, (val) => {
  show.value = $md.render(test.value);
  // show.value = $md.render(test.value.replace(/\n/g, "\\n"));
  console.log(show.value);
});
</script>

<style scoped lang="scss">
.about-me {
  padding: 30px 40px;
  min-height: 600px;
}

.area {
  width: 100%;
  height: 100px;
  // visibility: hidden;
}
</style>
