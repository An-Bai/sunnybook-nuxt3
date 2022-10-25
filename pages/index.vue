<template>
  <div>
    <!-- 精选文章 -->
    <div class="nice-articles">
      <IndexContentTitle title-name="精选文章"></IndexContentTitle>
      <div class="nice-articles-box" v-for="(item, i) in 5" :key="item">
        <ul>
          <li>
            <div class="articles-content">
              <div class="article-message">
                <span>晴</span>
                <span>3 分钟</span>
                <span>1.2k 字</span>
                <span>2022-09-19 星期二</span>
              </div>
              <h1 class="article-title">关于转生成为史莱姆这件事</h1>
              <div class="article-description">龙傲天的小说改编动漫</div>
              <div class="article-author">白忆宇</div>
              <div class="class-box">
                <div class="class-package">
                  <span>
                    <span>></span>
                    <span><NuxtLink to="/">动漫</NuxtLink></span>
                  </span>
                  <span>
                    <span>></span>
                    <span><NuxtLink to="/">转生史莱姆</NuxtLink></span>
                  </span>
                </div>
                <div class="class-lab">
                  <span>动漫</span>
                  <span>动漫</span>
                  <span>动漫</span>
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
        <div v-for="(item, i) in 5" :key="item">
          <h1>动漫杂谈</h1>
          <div class="list-details-box">
            <div class="list-details-content">
              <h2>动漫杂谈</h2>
              <ul>
                <li>关于史莱姆转生异世界这件事</li>
                <li>关于史莱姆转生异世界这件事</li>
                <li>关于史莱姆转生异世界这件事</li>
                <li>关于史莱姆转生异世界这件事</li>
                <li>关于史莱姆转生异世界这件事</li>
                <li>关于史莱姆转生异世界这件事</li>
              </ul>
              <div class="structure-box">
                <span>10 篇精选文章</span>
              </div>
              <div class="get-more">More</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 随机文章 -->
    <div class="other-articles">
      <IndexContentTitle title-name="随机文章"></IndexContentTitle>
      <ArticleBox></ArticleBox>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
/* 精选文章 */
.nice-articles,
.class-articles,
.other-articles {
  background-color: #fff;
}

.nice-articles-box {
  padding: 10px 30px;
  .articles-content {
    width: 100%;
    padding: 10px;
    background-color: rgb(113, 210, 255);
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
      background-color: rgb(255, 113, 113);
      margin-top: 40px;
      border-radius: 10px;
      transition: all 1s;
      overflow: hidden;
      &:nth-child(-n + 2) {
        margin-top: 0;
      }
      > h1 {
        position: absolute;
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
          background-color: rgb(235, 76, 40);
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
          }
        }
      }
    }
  }
}
</style>
