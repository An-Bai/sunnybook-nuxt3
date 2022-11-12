<template>
  <div :class="classStr">
    <div class="image-box">
      <NuxtLink :to="'/article/' + articleData.ID"
        ><img src="~/assets/images/a.jpg" alt=""
      /></NuxtLink>
      <div class="slipt-box"></div>
    </div>
    <div class="show-box">
      <div class="article-message">
        <div>
          <span>{{ publishTime }}</span>
          <span>{{ articleData.WordNum }}k 字</span>
          <span>{{ articleData.ReadOverTime }} 分钟</span>
        </div>
      </div>
      <div class="show-title-father">
        <h1 class="show-title">
          <NuxtLink :to="'/article/' + articleData.ID">{{
            articleData.Title
          }}</NuxtLink>
        </h1>
      </div>
      <p>
        {{ articleData.PreviewContent }}
      </p>
      <div class="from-package">{{ articleData.Cla.Name }}</div>
      <div class="get-more-message">
        <NuxtLink :to="'/article/' + articleData.ID">More</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { getTimeFormat } = timeUtil();

const props = defineProps({
  articleData: Object,
  sort: Number,
});
const publishTime = ref();
const classStr = ref("");
classStr.value = "articles-box-odd";
if (props.sort % 2 == 1) {
  classStr.value = "articles-box-odd articles-box-even";
}
// 格式化时间
publishTime.value = getTimeFormat(props.articleData.CreatedAt);
</script>

<style scoped lang="scss">
/* 随机文章 */

.articles-box-odd {
  display: flex;
  height: 240px;
  border-radius: 10px;
  overflow: hidden;
  margin: 15px 0;
  box-shadow: 0 0 8px -2px rgb(107, 107, 107);
  .image-box {
    position: relative;
    width: 45%;
    height: 100%;
    overflow: hidden;
    img {
      height: 100%;
      transition: all 0.4s;
    }
    .slipt-box {
      position: absolute;
      top: 0;
      right: 0;
      border-top: rgb(246, 246, 246) solid 120px;
      border-right: rgb(246, 246, 246) solid 20px;
      border-bottom: transparent solid 120px;
      border-left: transparent solid 20px;
    }
  }
  .show-box {
    position: relative;
    width: 55%;
    padding: 15px 20px;
    background-color: rgb(246, 246, 246);
    box-sizing: border-box;
    .article-message {
      font-size: 1.15em;
      > div {
        float: right;
        > span {
          margin-left: 10px;
        }
      }
    }
    .show-title-father {
      margin: 30px 0 10px;
      display: flex;
      width: 100%;
      .show-title {
        font-size: 1.8em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    > p {
      text-indent: 2em;
      font-size: 1.3em;
      line-height: 28px;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .from-package {
      position: absolute;
      bottom: 15px;
      left: 20px;
      font-size: 1.2em;
    }
    .get-more-message {
      position: absolute;
      bottom: 0;
      right: -1px;
      border-top-left-radius: 10px;
      width: 100px;
      line-height: 45px;
      background-color: skyblue;
      text-align: center;
      font-size: 1.5em;
      font-weight: 700;
      font-style: italic;
      cursor: pointer;
    }
  }
}

.articles-box-even {
  flex-direction: row-reverse;
  .image-box {
    .slipt-box {
      left: 0;
      right: auto;
      border-top: transparent solid 120px;
      border-right: transparent solid 20px;
      border-bottom: rgb(246, 246, 246) solid 120px;
      border-left: rgb(246, 246, 246) solid 20px;
    }
  }
  .show-box {
    .article-message {
      > div {
        float: left;
        > span {
          margin-left: 0;
          margin-right: 10px;
        }
      }
    }
    .from-package {
      left: auto;
      right: 20px;
    }
    .get-more-message {
      left: -1px;
      border-top-left-radius: 0;
      border-top-right-radius: 10px;
    }
  }
}
</style>
