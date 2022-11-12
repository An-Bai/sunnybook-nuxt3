<template>
  <div>
    <div class="catalogue-list">
      <ArticleNavBar :nameList="nameList" :self="self.Name"></ArticleNavBar>
    </div>
    <div class="class-articles">
      <ul>
        <li v-for="(item, i) in pageData.PageData" key="item">
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
const { articleApi, tagApi } = useApi();
const route = process.client ? useRoute() : {};
const pageData = ref("");
const currentPage = ref(1);
const okShow = ref(false);
const counter = useCounter();
const self = ref("");
const nameList = [{ router: "label", name: "标签" }];

initData();
async function initData() {
  // 获取该标签信息
  await tagApi.getTagMess(route.params.id).then((res) => {
    self.value = res.data;
    // 更新头部
    counter.value = [
      {
        type: 2,
        routerName: "“" + self.value.Name + "”标签",
      },
    ];
    const giveList = userArticleParentNode();
    giveList.value = [];
    giveList.value.push({ router: "label", name: "标签" });
    giveList.value.push({
      router: "class/" + route.params.id,
      name: self.value.Name,
    });
  });

  // 获取分页数据
  await articleApi
    .getBaseArticlesPage({
      currentPage: currentPage.value,
      tagId: route.params.id,
    })
    .then((res) => {
      pageData.value = res.data;
      okShow.value = true;
    });
}
</script>
<style scoped lang="scss">
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

/* 文章 */
.class-articles {
  position: relative;
  padding: 0 30px;
  min-height: 800px;
  // background-color: greenyellow;
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
