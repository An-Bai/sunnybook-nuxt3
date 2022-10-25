<template>
  <div>
    <div class="label-page" v-if="showChange">
      <div class="page-title">100个随性标签</div>
      <div class="label-content">
        <ul>
          <li @click="showChange = !showChange" v-for="(item, i) in 1">Java</li>
          <li v-for="(item, i) in 1">医院34234</li>
          <li v-for="(item, i) in 1">sefsf</li>
          <li v-for="(item, i) in 1">医院34234</li>
          <li v-for="(item, i) in 1">医院34234</li>
          <li v-for="(item, i) in 1">梵蒂冈的归档</li>
          <li v-for="(item, i) in 1">23</li>
          <li v-for="(item, i) in 1">12发顺丰</li>
          <li v-for="(item, i) in 1">医院34234</li>
          <li v-for="(item, i) in 1">医院34234</li>
          <li v-for="(item, i) in 1">点击</li>
          <li v-for="(item, i) in 1">医院34234</li>
          <li v-for="(item, i) in 1">医院34234</li>
          <li v-for="(item, i) in 1">考虑到给大家了</li>
          <li v-for="(item, i) in 1">我拉到家了</li>
          <li v-for="(item, i) in 1">医院34234</li>
          <li v-for="(item, i) in 1">四六级</li>
          <li v-for="(item, i) in 1">医院34234</li>
          <li v-for="(item, i) in 1">医院34234</li>
          <li v-for="(item, i) in 1">我让顾客</li>
          <li v-for="(item, i) in 1">哦234王嘉尔哦</li>
          <li v-for="(item, i) in 1">我让顾客</li>
          <li v-for="(item, i) in 1">我让顾客</li>
          <li v-for="(item, i) in 1">21323</li>
          <li v-for="(item, i) in 1">56若干的</li>
        </ul>
      </div>
    </div>
    <div v-else>
      <div class="catalogue-list">
        <ul>
          <li><span>首页</span><i class="partition"></i></li>
          <li><span>标签</span><i class="partition"></i></li>
          <li><span>动漫杂谈</span><i class="partition"></i></li>
        </ul>
      </div>
      <ArticleBox></ArticleBox>
    </div>
  </div>
</template>

<script setup lang="ts">
const showChange = ref(true);
</script>

<style scoped lang="scss">
.label-page {
  background-color: rgb(116, 218, 120);
  padding: 30px;
  box-sizing: border-box;
}
.page-title {
  font-size: 2.4em;
  font-weight: 700;
  letter-spacing: 1px;
  background-color: #fff;
  text-align: center;
}

.label-content {
  min-height: 500px;
  background-color: rgb(205, 232, 98);
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
      color: rgb(212, 18, 50);
    }
    > li:nth-of-type(2n) {
      font-size: 1.6em;
      // margin: 5px;
      color: rgb(239, 94, 118);
    }
    > li:nth-of-type(4n) {
      font-size: 1.6em;
      // margin: 5px;
      color: rgb(47, 193, 42);
    }
    > li:nth-of-type(5n) {
      font-size: 2em;
      // margin: 5px;
      color: rgb(215, 30, 197);
    }
    > li:nth-of-type(7n) {
      font-size: 1.9em;
      // margin: 5px;
      color: rgb(26, 134, 197);
    }
    > li:nth-of-type(11n) {
      font-size: 1.75em;
      // margin: 5px;
      color: rgb(184, 189, 25);
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
