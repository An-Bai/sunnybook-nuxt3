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
  top: 10px;
  // background-color: rgb(88, 255, 102);
  height: 80px;
  .bg-line {
    position: absolute;
    z-index: 0;
    top: calc(50% - 1px);
    left: 0;
    background-color: rgb(196, 196, 196);
    height: 2px;
    width: calc(100% - 40px);
    margin: 0 20px;
  }
  .content-title-name {
    position: absolute;
    left: 50%;
    top: 10px;
    transform: translateX(-50%);
    z-index: 0;
    padding: 0 20px;
    line-height: 58px;
    font-size: 2.2em;
    font-weight: 700;
    background-color: #ffffff;
    &::before {
      position: absolute;
      content: "";
      top: 23px;
      left: 5px;
      width: 12px;
      height: 12px;
      border-left: 2px solid rgb(196, 196, 196);
      border-top: 2px solid rgb(196, 196, 196);
      transform: rotate(-45deg);
    }
    &::after {
      position: absolute;
      content: "";
      top: 23px;
      right: 5px;
      width: 12px;
      height: 12px;
      border-right: 2px solid rgb(196, 196, 196);
      border-bottom: 2px solid rgb(196, 196, 196);
      transform: rotate(-45deg);
    }
  }
}
</style>
