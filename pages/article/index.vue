<template>
  <div>
    <ArticleNavBar :nameList="[]" self="所有文章"></ArticleNavBar>
    <div class="article-box">
      <ul>
        <li v-for="(item, i) in pageData.PageData" :key="item">
          <ArticleBox :article-data="item" :sort="i"></ArticleBox>
        </li>
      </ul>
      <div v-if="pageData.PageData == ''" class="no-content">暂无文章</div>
    </div>
    <PublicPagBox
      v-if="okShow && pageData.PageData != ''"
      v-model:currentPage="currentPage"
      :count="pageData.count"
      :pageSize="pageData.pageSize"
    ></PublicPagBox>
  </div>
</template>

<script setup lang="ts">
const { articleApi } = useApi();
const currentPage = ref(1);
const pageData = ref("");
const okShow = ref(false);
// giveList.value.push({ router: "article", name: "所有文章" });
// init 操作部分
initData();
async function initData() {
  const counter = useCounter();
  const giveList = userArticleParentNode();
  counter.value = [
    {
      type: 2,
      routerName: "所有文章",
    },
  ];
  giveList.value = [];
  // 获取分页数据
  await articleApi
    .getBaseArticlesPage({
      currentPage: currentPage.value,
    })
    .then((res) => {
      pageData.value = res.data;
      okShow.value = true;
    });
}

watch(currentPage, (val) => {
  initData();
});
</script>

<style scoped lang="scss">
.article-box {
  position: relative;
  padding: 0 30px;
  min-height: 800px;
}
.no-content {
  position: absolute;
  font-size: 1.5em;
  color: rgb(98, 98, 98);
  letter-spacing: 1px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
