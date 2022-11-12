<template>
  <div class="catalogue-list">
    <ul>
      <li>
        <span><NuxtLink to="/">首页</NuxtLink></span
        ><i class="partition"></i>
      </li>
      <li v-for="item in nameList" :key="item">
        <span
          ><NuxtLink :to="'/' + item.router">{{ item.name }}</NuxtLink></span
        ><i class="partition"></i>
      </li>
      <li>
        <span>{{ self }}</span>
        <i class="partition"></i>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  nameList: Object,
  self: String,
});
</script>

<style scoped lang="scss">
.catalogue-list {
  > ul {
    display: flex;
    padding: 20px 20px 10px;
    > li {
      font-size: 1.5em;
      font-family: Georgia, "Times New Roman", Times, serif;
      .partition {
        position: relative;
        top: -2px;
        left: -1px;
        display: inline-block;
        height: 5px;
        width: 5px;
        margin: 0 6px;
        // background-color: #fff;
        border-top: 2px solid skyblue;
        border-right: 2px solid skyblue;
        transform: rotate(45deg);
      }
      &:last-of-type {
        > span {
          padding: 3px 5px;
          background-color: skyblue;
          border-radius: 5px;
        }
        .partition {
          display: none;
        }
      }
    }
  }
}
</style>
