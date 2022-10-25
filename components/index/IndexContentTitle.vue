<template>
  <div class="content-title">
    <div class="bg-line"></div>
    <div class="content-title-name">{{ titleName }}</div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  titleName: String,
});

// async function gotoDemo01() {
//   const router = useRouter();
// router.push({ path: "/Demo01" });
// await navigateTo({
//   path: "/Demo01",
//   query: {
//     name: "鸢一折纸",
//     age: 18,
//   },
// });
// }
</script>
<style scoped lang="scss">
.content-title {
  position: relative;
  background-color: rgb(88, 255, 102);
  height: 60px;
  .bg-line {
    position: absolute;
    z-index: 1;
    top: calc(50% - 1px);
    left: 0;
    background-color: rgb(255, 0, 0);
    height: 2px;
    width: calc(100% - 40px);
    margin: 0 20px;
  }
  .content-title-name {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    height: 60px;
    padding: 0 20px;
    line-height: 58px;
    font-size: 2.2em;
    font-weight: 700;
    background-color: #fff;
    &::before {
      position: absolute;
      content: "";
      top: 23px;
      left: 5px;
      width: 12px;
      height: 12px;
      border-left: 2px solid red;
      border-top: 2px solid red;
      transform: rotate(-45deg);
    }
    &::after {
      position: absolute;
      content: "";
      top: 23px;
      right: 5px;
      width: 12px;
      height: 12px;
      border-right: 2px solid red;
      border-bottom: 2px solid red;
      transform: rotate(-45deg);
    }
  }
}
</style>
