<template>
  <div class="catalogue-list">
    <ul>
      <li><span>首页</span><i class="partition"></i></li>
      <li><span>分类</span><i class="partition"></i></li>
      <li><span>动漫杂谈</span><i class="partition"></i></li>
      <li><span>关于转生成为史莱姆这件事</span><i class="partition"></i></li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

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
</style>
