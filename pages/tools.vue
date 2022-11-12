<template>
  <div class="tools-box">
    <div class="class-box">这是工具页~</div>
  </div>
</template>

<script setup lang="ts">
const counter = useCounter();
counter.value = [
  {
    type: 2,
    routerName: "工具",
  },
];
</script>

<style scoped lang="scss">
.tools-box {
  min-height: 800px;
}
.class-box {
  padding: 40px;
}
</style>
