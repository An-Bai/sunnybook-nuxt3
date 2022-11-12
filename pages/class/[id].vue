<template>
  <div>
    <ArticleNavBar :nameList="nameList" :self="self.Name"></ArticleNavBar>
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
const { articleApi, classApi } = useApi();
const currentPage = ref(1);
const pageData = ref("");
const self = ref("");
const okShow = ref(false);
const route = process.client ? useRoute() : {};
const nameList = [{ router: "class", name: "分类" }];

// init 操作部分
initData();
async function initData() {
  // 获取该分类信息
  await classApi.getClassMess(route.params.id).then((res) => {
    self.value = res.data;
    // 更新头部
    const counter = useCounter();
    counter.value = [
      {
        type: 2,
        routerName: self.value.Name,
        description: self.value.Description,
      },
    ];
    const giveList = userArticleParentNode();
    giveList.value = [];
    giveList.value.push({ router: "class", name: "分类" });
    giveList.value.push({
      router: "class/" + route.params.id,
      name: self.value.Name,
    });
  });

  // 获取分页数据
  await articleApi
    .getBaseArticlesPage({
      currentPage: currentPage.value,
      classId: route.params.id,
    })
    .then((res) => {
      pageData.value = res.data;
      okShow.value = true;
    });
}

watch(currentPage, () => {
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
