<template>
  <div class="article-main">
    <div class="artNavBar">
      <ArticleNavBar
        :nameList="nameList"
        :self="pageData.Title"
      ></ArticleNavBar>
    </div>
    <div id="article" class="article-box" v-html="show"></div>
    <div class="article-footer">
      <div class="lab-class-box">
        <ul>
          <li v-for="(item, i) in pageData.Tags" :key="item">
            <NuxtLink>{{ item.Name }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="split-line"></div>
      <div class="publishTime">
        <div>发布于：{{ pageData.CreatedAt }}</div>
      </div>
      <div class="article-statement">
        <p>本文作者： 白忆宇</p>
        <p>本文链接： http://localhost:3000/article</p>
        <p>
          版权声明： 本站所有文章除特别声明外，均采用
          <a
            class="agreement"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
            >(CC)BY-NC-SA</a
          >
          许可协议。转载请注明出处！
        </p>
      </div>
    </div>
    <div class="comment-area">
      <div class="comment-tip">请写下你的评论~</div>
      <div class="spilt-dotted-line"></div>
      <textarea
        class="write-comments"
        placeholder="评论区已关闭~"
        readonly
      ></textarea>
      <div class="spilt-dotted-line"></div>
    </div>
    <div class="show-comments">
      <div class="show-tips">0 条大家的留言哦</div>
      <div v-if="false">
        <ul>
          <li></li>
        </ul>
      </div>
      <div v-else class="no-comment"><span>暂无评论</span></div>
    </div>
    <!-- <textarea
      v-model="test"
      class="area"
      placeholder="Markdown格式文章测试输入"
    ></textarea> -->
  </div>
</template>

<script setup lang="ts">
const { $md } = useNuxtApp();
const { articleApi } = useApi();
const show = ref("");
const test = ref("");
const route = process.client ? useRoute() : {};
const nameList = userArticleParentNode();
const pageData = ref("");

if (nameList.value.length <= 0) {
  nameList.value = [{ router: "article", name: "所有文章" }];
}

initData();
async function initData() {
  await articleApi.getArticle(route.params.id).then((res) => {
    pageData.value = res.data;
    // 渲染MarkDown内容到页面
    show.value = $md.render(pageData.value.Content);
    const counter = useCounter();
    counter.value = [
      {
        type: 2,
        routerName: pageData.value.Title,
        description: pageData.value.Description,
        author: pageData.value.Author,
      },
    ];
  });
}

watch(test, (val) => {
  show.value = $md.render(test.value);
  // show.value = $md.render(test.value.replace(/\n/g, "\\n"));
});
</script>

<style scoped lang="scss">
.article-main {
  margin-bottom: 20px;
  padding-bottom: 20px;
}
.artNavBar {
  background-color: #ebebeb;
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

.article-box {
  padding: 20px 40px 60px;
  font-size: 1.5em;
  // background-color: rgb(255, 132, 132);
  box-sizing: border-box;
}
// 文章结尾
.article-footer {
  // height: 300px;
  padding: 10px 20px;
  // background-color: #fff;
  box-sizing: border-box;
  .lab-class-box {
    display: flex;
    > ul {
      display: flex;
      padding: 10px 0;
      li {
        padding: 5px 8px;
        margin-right: 10px;
        font-size: 1.2em;
        border-radius: 10px;
        background-color: rgb(255, 245, 245);
        &:nth-of-type(n) {
          color: lawngreen;
        }
        &:nth-of-type(2n) {
          color: skyblue;
        }
        &:nth-of-type(3n) {
          color: orange;
        }
        &:nth-of-type(5n) {
          color: pink;
        }
      }
    }
  }
  .split-line {
    height: 1px;
    background-color: rgb(160, 160, 160);
  }
  .publishTime {
    text-align: right;
    padding: 5px 0 10px;
    color: rgb(4, 184, 216);
    font-size: 1.1em;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  .article-statement {
    background-color: rgba(118, 239, 107, 0.8);
    color: rgb(99, 152, 233);
    padding: 10px;
    font-size: 1.2em;
    > p {
      line-height: 25px;
      .agreement {
        color: rgb(172, 63, 212);
        font-weight: 700;
      }
    }
  }
}
// 评论区
.comment-area {
  margin: 20px;
  padding-bottom: 20px;
  // height: 500px;
  background-color: orange;
  border-radius: 10px;
  box-shadow: 0 0 5px 0px rgb(200, 130, 0);
  .comment-tip {
    font-size: 1.3em;
    padding: 10px;
  }
  .spilt-dotted-line {
    border-top: 1px dashed;
  }
  .write-comments {
    resize: vertical;
    width: calc(100% - 20px);
    min-height: 150px;
    padding: 10px;
    border: none;
    outline: 0;
    font-size: 1em;
    background-color: transparent;
    font-size: 1.2em;
  }
}
.show-comments {
  background-color: silver;
  margin: 20px 20px 0;
  .show-tips {
    font-size: 1.5em;
    padding: 20px;
  }
  .no-comment {
    background-color: rgb(233, 233, 233);
    font-size: 1.5em;
    color: rgb(140, 140, 140);
    height: 300px;
    text-align: center;
    > span {
      display: inline-block;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
.area {
  width: 100%;
  height: 100px;
  // visibility: hidden;
}
</style>
