<template>
  <div>
    <ArticleNavBar :nameList="[]" self="分类"></ArticleNavBar>
    <div class="class-box">
      <ul class="class-container">
        <li v-for="item in classData" :key="item">
          <NuxtLink :to="{ path: '/class/' + item.ID }">
            <h1>
              {{ item.Name }}
            </h1>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { classApi } = useApi();
const classData = ref();
const counter = useCounter();
counter.value = [
  {
    type: 2,
    routerName: "分类",
  },
];
initData();
async function initData() {
  await classApi.getClass().then((res) => {
    classData.value = res.data;
  });
}
</script>

<style scoped lang="scss">
.class-box {
  padding: 30px 0;
  min-height: 800px;
  > ul.class-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    > li {
      width: 250px;
      height: 160px;
      margin-bottom: 30px;
      border-radius: 10px;
      text-align: center;
      background-color: #fff;
      transition: all 0.5s;
      box-shadow: 0 0 5px 0 rgb(151, 151, 151);
      cursor: pointer;
      > a {
        display: inline-block;
        width: 100%;
        height: 100%;
        padding: 15px;
        box-sizing: border-box;
        border-radius: 10px;
      }
      h1 {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
      &:hover {
        transform: translateY(-6px);
      }
      &:nth-of-type(n) {
        background-color: pink;
      }
      &:nth-of-type(2n) {
        background-color: palegreen;
      }
      &:nth-of-type(3n) {
        background-color: skyblue;
      }
      &:nth-of-type(4n) {
        background-color: purple;
      }
      &:nth-of-type(5n) {
        background-color: orange;
      }
    }
  }
}

.catalogue-list {
  > ul {
    display: flex;
    padding: 30px 15px;
    > li {
      font-size: 1.4em;
      .partition {
        position: relative;
        top: -2px;
        left: -1px;
        display: inline-block;
        height: 5px;
        width: 5px;
        margin: 0 6px;
        // background-color: #fff;
        border-top: 2px solid red;
        border-right: 2px solid red;
        transform: rotate(45deg);
      }
      &:last-of-type {
        > span {
          padding: 2px 3px;
          background-color: pink;
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
