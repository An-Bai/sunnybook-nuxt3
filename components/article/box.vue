<template>
  <div class="other-articles-box">
    <ul>
      <li v-for="(item, i) in 5" key="item">
        <div class="image-box">
          <NuxtLink to="/"><img src="~/assets/images/a.jpg" alt="" /></NuxtLink>
          <div class="slipt-box"></div>
        </div>
        <div class="show-box">
          <div class="article-message">
            <div>
              <span>2022/10/25 星期二</span>
              <span>3.1k 字</span>
              <span>5 分钟</span>
            </div>
          </div>
          <h1 class="show-title">关于史莱姆转生异世界这件事</h1>
          <p>
            动画第1期于2018年10月1日至2019年3月25日每周一在TOKYO
            MX、BS11首播，共25集，外加附带在原作小说中一起发售的5集OAD；
            第2期前半部分于2021年1月12日播出，后半部分于2021年7月播出。
            主人公利姆露与仰慕他而聚集的众多魔物们所建立的国家“鸠拉·特恩佩斯特国”，经由与邻国的协议及交易，
            让“人类与魔物共同漫步的国家”这一温柔的理想逐步成形。
            利姆露作为曾是人类的史莱姆当然拥有“对人类的好意”……但这个世界中却存在着明确的“对魔物的敌意”。
            当这不合理的现实摆在眼前时，利姆露将做出选择。为了“什么都不想失去”——
            万众期待的转生喜剧突入暴风的新章！
          </p>
          <div class="from-package">动漫杂谈</div>
          <div class="get-more-message">More</div>
        </div>
      </li>
    </ul>
    <div class="more-articles">
      <span>查看更多</span>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="scss">
/* 随机文章 */
.other-articles-box {
  padding: 0 30px;
  > ul {
    > li {
      display: flex;
      height: 220px;
      border-radius: 10px;
      overflow: hidden;
      margin: 10px 0;
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
          border-top: rgb(250, 91, 226) solid 110px;
          border-right: rgb(250, 91, 226) solid 20px;
          border-bottom: transparent solid 110px;
          border-left: transparent solid 20px;
        }
      }
      .show-box {
        position: relative;
        width: 55%;
        padding: 15px 20px;
        background-color: rgb(250, 91, 226);
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
        .show-title {
          margin: 30px 0 10px;
          font-size: 1.8em;
        }
        > p {
          text-indent: 2em;
          font-size: 1.3em;
          line-height: 26px;
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
          right: 0;
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
    > li:nth-of-type(2n) {
      flex-direction: row-reverse;
      .image-box {
        .slipt-box {
          left: 0;
          right: auto;
          border-top: transparent solid 110px;
          border-right: transparent solid 20px;
          border-bottom: rgb(250, 91, 226) solid 110px;
          border-left: rgb(250, 91, 226) solid 20px;
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
          right: auto;
          left: 0;
          border-top-left-radius: 0;
          border-top-right-radius: 10px;
        }
      }
    }
  }
  .more-articles {
    text-align: center;
    > span {
      display: inline-block;
      padding: 13px 32px;
      margin-bottom: 20px;
      border-radius: 10px;
      background-color: orange;
      font-size: 1.3em;
      letter-spacing: 2px;
      cursor: pointer;
    }
  }
}
</style>
