<template>
  <div>
    <div class="class-box">
      <ul v-if="showChange" class="class-container">
        <li @click="showChange = !showChange"><h1>Java基础知识</h1></li>
        <li><h1>Go语言</h1></li>
        <li><h1>H5前端知识</h1></li>
        <li><h1>动漫杂谈</h1></li>
        <li><h1>技术操作杂谈</h1></li>
      </ul>
      <div v-else>
        <div class="catalogue-list">
          <ul>
            <li><span>首页</span><i class="partition"></i></li>
            <li><span>分类</span><i class="partition"></i></li>
            <li><span>动漫杂谈</span><i class="partition"></i></li>
          </ul>
        </div>
        <ArticleBox></ArticleBox>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const showChange = ref(true);
</script>

<style scoped lang="scss">
.class-box {
  padding: 30px 0;
  min-height: 600px;
  > ul.class-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    > li {
      width: 240px;
      height: 160px;
      margin-bottom: 30px;
      border-radius: 10px;
      text-align: center;
      background-color: #fff;
      transition: all 0.5s;
      box-shadow: 0 0 5px 0 rgb(151, 151, 151);
      cursor: pointer;
      > h1 {
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
