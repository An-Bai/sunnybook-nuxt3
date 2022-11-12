<template>
  <div>
    <ArticleNavBar :nameList="[]" self="标签"></ArticleNavBar>
    <div class="label-page">
      <div class="page-title">{{ total }}个随性标签</div>
      <div class="label-content">
        <ul>
          <li v-for="item in tagData" :key="item">
            <NuxtLink :to="{ path: '/label/' + item.ID }">{{
              item.Name
            }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { tagApi } = useApi();
const tagData = ref();
const total = ref(0);

initData();
async function initData() {
  const counter = useCounter();
  counter.value = [
    {
      type: 2,
      routerName: "标签",
    },
  ];
  // 获取所有标签
  await tagApi.getTags().then((res) => {
    tagData.value = res.data;
    total.value = tagData.value.length;
  });
}
</script>

<style scoped lang="scss">
.label-page {
  // background-color: rgb(116, 218, 120);
  padding: 0 30px 30px;
  box-sizing: border-box;
}
.page-title {
  font-size: 2.4em;
  font-weight: 700;
  letter-spacing: 1px;
  background-color: rgba(223, 223, 223, 1);
  text-align: center;
}

.label-content {
  min-height: 800px;
  background-color: rgba(223, 223, 223, 0.5);
  padding: 20px 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    > li {
      cursor: pointer;
    }
    > li:nth-of-type(n) {
      font-size: 1.8em;
      margin: 5px 22px;
      // margin: 5px;
      > a {
        color: rgb(212, 18, 50);
      }
    }
    > li:nth-of-type(2n) {
      font-size: 1.6em;
      > a {
        color: rgb(239, 94, 118);
      }
    }
    > li:nth-of-type(4n) {
      font-size: 1.6em;
      // margin: 5px;
      > a {
        color: rgb(47, 193, 42);
      }
    }
    > li:nth-of-type(5n) {
      font-size: 2em;
      // margin: 5px;
      > a {
        color: rgb(215, 30, 197);
      }
    }
    > li:nth-of-type(7n) {
      font-size: 1.9em;
      // margin: 5px;
      > a {
        color: rgb(26, 134, 197);
      }
    }
    > li:nth-of-type(11n) {
      font-size: 1.75em;
      // margin: 5px;
      > a {
        color: rgb(184, 189, 25);
      }
    }
  }
}
</style>
