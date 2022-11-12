<template>
  <div>
    <!-- 精选文章 -->
    <div class="nice-articles">
      <IndexContentTitle title-name="精选文章"></IndexContentTitle>
      <div
        class="nice-articles-box"
        v-for="(item, i) in greatArticleData"
        :key="item"
      >
        <ul>
          <li>
            <div class="articles-content">
              <div class="article-message">
                <span class="weather">{{ item.Weather }}</span>
                <span>{{ item.ReadOverTime }} 分钟</span>
                <span>{{ item.WordNum }}k 字</span>
                <span>{{ getTimeFormat(item.CreatedAt) }}</span>
              </div>
              <h1 class="article-title">
                <NuxtLink :to="'/article/' + item.ID">
                  {{ item.Title }}
                </NuxtLink>
              </h1>
              <div class="article-description">{{ item.Description }}</div>
              <div class="article-author">{{ item.Author }}</div>
              <div class="class-box">
                <div class="class-package">
                  <span>
                    <span>></span>
                    <span><NuxtLink to="/class">分类</NuxtLink></span>
                  </span>
                  <span>
                    <span>></span>
                    <span>
                      <NuxtLink :to="'/class/' + item.Cla.ID">
                        {{ item.Cla.Name }}
                      </NuxtLink>
                    </span>
                  </span>
                </div>
                <div class="class-lab">
                  <span v-for="(res, i) in item.Tags" :key="res">
                    <NuxtLink :to="'/label/' + res.ID">
                      {{ res.Name }}
                    </NuxtLink>
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 精选分类 -->
    <div class="class-articles">
      <IndexContentTitle title-name="精选分类"></IndexContentTitle>

      <div class="class-articles-box">
        <div v-for="(item, i) in niceClassData" :key="item">
          <h1>{{ item.Name }}</h1>
          <div class="list-details-box">
            <div class="list-details-content">
              <h2>{{ item.Name }}</h2>
              <ul>
                <li v-for="(res, i) in item.Art" :key="item">
                  <NuxtLink
                    @click="setClassPath(res)"
                    :to="{
                      path: '/article/' + res.ID,
                    }"
                    >{{ res.Title }}</NuxtLink
                  >
                </li>
              </ul>
              <div class="structure-box">{{ item.ArticleSum }} 篇精选文章</div>
              <div class="get-more">
                <NuxtLink :to="'/class/' + item.ID">More</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 随机文章 -->
    <div class="other-articles">
      <IndexContentTitle title-name="随机文章"></IndexContentTitle>
      <div class="other-articles-box">
        <ul>
          <li v-for="(item, i) in randomArticleData" key="item">
            <ArticleBox :article-data="item" :sort="i"></ArticleBox>
          </li>
        </ul>
        <div class="more-articles">
          <span><NuxtLink to="/article">查看更多</NuxtLink></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 获取初始化数据
const { articleApi, classApi } = useApi();
const publishTime = ref();
// 自定义事件格式化函数
const { getTimeFormat } = timeUtil();
// 精选文章数据
const greatArticleData = ref("");
// 随机文章数据
const randomArticleData = ref("");
// 精选分类
const niceClassData = ref("");
// 文章来源导航获取
const giveList = userArticleParentNode();
// setup没有created函数，为了分区清晰结构，定义一个函数，把初始化数据操作放进去（热更新写js代码的时候会报错，但是放到方法里就不会出现渲染问题了）
// init 操作部分
initData();
async function initData() {
  // 更新头部
  const counter = useCounter();
  counter.value = [
    {
      type: 1,
    },
  ];
  giveList.value = [];
  // 获取精选文章
  await articleApi.getGreatArticles().then((res) => {
    greatArticleData.value = res.data;
  });

  // 获取精选分类
  await classApi.getNiceClass().then((res) => {
    niceClassData.value = res.data;
  });

  // 获取随机文章
  await articleApi.getRandomArticles().then((res) => {
    randomArticleData.value = res.data;
  });
}

// 点击精选分类的文章链接是由给从分类去的导航
function setClassPath(res: any) {
  giveList.value = [];
  giveList.value.push({ router: "class", name: "分类" });
  giveList.value.push({
    router: "class/" + res.Cla.ID,
    name: res.Cla.Name,
  });
}

// const a = 1;
// const titleName = "精选文章";
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
</script>

<style scoped lang="scss">
/* 精选文章 */
.nice-articles,
.class-articles,
.other-articles {
}

.nice-articles-box {
  padding: 10px 30px;
  .articles-content {
    width: 100%;
    padding: 10px;
    background-color: rgba(151, 204, 231, 0.5);
    box-shadow: 0 0 2px 1px rgba(151, 204, 231, 15);
    border-radius: 2px;
    box-sizing: border-box;
    .article-message {
      font-size: 1.2em;
      > span {
        // background-color: rgb(255, 99, 208);
        float: right;
        margin-left: 10px;
      }
      .weather {
        float: left;
        margin-left: 0;
      }
    }
    .article-title {
      text-align: center;
      padding: 30px 0 0;
    }
    .article-description,
    .article-author {
      text-align: center;
      font-size: 1.5em;
      line-height: 38px;
    }
    .class-box {
      position: relative;
      font-size: 1.1em;
      padding-top: 10px;
      .class-package {
        > span {
          > span {
            margin-right: 4px;
          }
        }
        > span:first-child > span:first-child {
          display: none;
        }
      }
      .class-lab {
        position: absolute;
        bottom: 0;
        right: 0;
        > span {
          margin-left: 4px;
        }
      }
    }
  }
}

/* 精选分类 */
.class-articles {
  .class-articles-box {
    display: flex;
    flex-wrap: wrap; // 多行显示
    justify-content: space-between; //两端对齐
    padding: 10px 30px;
    > div {
      position: relative;
      width: calc(50% - 15px);
      height: 200px;
      // background-color: rgb(255, 113, 113);
      margin-top: 40px;
      border-radius: 10px;
      transition: all 1s;
      overflow: hidden;
      box-shadow: 0 0 8px 0px rgb(107, 107, 107);
      &:nth-child(-n + 2) {
        margin-top: 0;
      }
      > h1 {
        position: absolute;
        text-align: center;
        width: 90%;
        top: 50%;
        left: 50%;
        color: #fff;
        letter-spacing: 2px;
        transform: translate(-50%, -50%);
      }
      // before盒子，装背景图
      &::before {
        content: "";
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: #ececec url("~/assets/images/1.jpg") no-repeat center;
        // background: #ececec url("~/assets/images/1.jpg") no-repeat fixed center;
        background-size: cover;
        transition: all 0.4s;
      }
      &:hover::before {
        transform: scale(1.2) rotate(5deg);
      }

      .list-details-box {
        position: absolute;
        top: -200px;
        right: 0;
        width: 100%;
        height: 300px;
        // background-color: rgba(110, 255, 182);
        transition: all 0.4s;
        &:hover {
          transform: translateY(200px);
        }
        .list-details-content {
          position: relative;
          padding: 10px 15px;
          height: 200px;
          background-color: rgba(234, 234, 234, 0.8);
          box-sizing: border-box;
          > h2 {
            text-align: center;
            line-height: 30px;
          }
          > ul {
            display: flex;
            flex-wrap: wrap; // 多行显示
            justify-content: space-between; //两端对齐
            margin: 5px 0;
            font-size: 1.2em;
            > li {
              width: calc(50% - 15px);
              line-height: 38px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .structure-box {
            position: absolute;
            left: 0;
            bottom: 0;
            font-size: 1.05em;
            padding: 10px;
          }
          .get-more {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 80px;
            line-height: 40px;
            font-size: 1.2em;
            font-weight: 700;
            font-style: italic;
            text-align: center;
            background-color: rgb(26, 150, 222);
            cursor: pointer;
            border-top-left-radius: 10px;
            border-bottom-right-radius: 10px;
            a:hover {
              color: black;
            }
          }
        }
      }
    }
  }
}

/* 随机文章 */
.other-articles-box {
  padding: 0 30px;
  .more-articles {
    text-align: center;
    > span {
      display: inline-block;
      padding: 13px 32px;
      margin-bottom: 20px;
      border-radius: 10px;
      background-color: rgb(76, 212, 243);
      font-size: 1.3em;
      letter-spacing: 2px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        box-shadow: 0 0 8px 0 rgb(8, 179, 217);
        background-color: rgb(8, 179, 217);
      }
      a:hover {
        color: black;
      }
    }
  }
}
</style>
