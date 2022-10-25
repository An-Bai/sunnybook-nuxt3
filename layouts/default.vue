<template>
  <div>
    <div class="common-layout">
      <!-- <div class="base-frame"> -->
      <header>
        <!-- <el-affix target=".affix-container"> -->
        <nav>
          <ul class="nav-left-box">
            <li><NuxtLink to="/">首页</NuxtLink></li>
            <li><NuxtLink to="/label">标签</NuxtLink></li>
            <li><NuxtLink to="/article">分类</NuxtLink></li>
            <li><NuxtLink to="/pigeonhole">归档</NuxtLink></li>
            <li><NuxtLink to="/leaveword">留言</NuxtLink></li>
            <li><NuxtLink to="/about">关于</NuxtLink></li>
          </ul>
          <div class="search-box">
            <span>搜索</span>
            <div class="search-input">
              <input type="text" />
            </div>
          </div>
        </nav>
        <!-- </el-affix> -->
        <!-- <div class="space-name">白忆宇的博客</div> -->
        <div class="space-name">白的晴书</div>
        <div class="one-word-box">
          <p class="one-world">愿终有一天你会与爱你的人再次相遇</p>
          <p class="where-from">—— 可塑性回忆</p>
        </div>
        <div class="mood-box">
          <label @click.self="speakingSwitch" class="mood-lab">{{
            moodShowValue
          }}</label>
          <div v-show="moodShow" class="pop-out" @click="keepSpeaking">
            <textarea
              v-model="moodChangeValue"
              placeholder="随便什么，你的心情就好~"
              resize="none"
              maxlength="30"
            >
            </textarea>
          </div>
        </div>
      </header>
      <main>
        <div class="main-container">
          <div class="left-main">
            <slot />
            <footer>
              <div class="footer">
                <ul class="web-message">
                  <li><span> 湘ICP备2022001772号</span></li>
                  <li>
                    <span
                      >本小白已享受了 861 天 23 小时 6 分 26 秒的世界(●'◡'●)
                    </span>
                  </li>
                  <li>
                    <span>Copyright © 2021 Baiyiyu All rights reserved.</span>
                  </li>
                </ul>
              </div>
            </footer>
          </div>

          <div class="right-main">
            <!-- <el-affix> -->
            <ul class="message-box">
              <li class="head-img-box"></li>
              <li class="nickname">white</li>
              <li class="lab-box">
                <ul>
                  <li>100</li>
                  <li><NuxtLink to="/">文章</NuxtLink></li>
                  <li></li>
                </ul>
                <ul>
                  <li>100</li>
                  <li><NuxtLink to="/">标签</NuxtLink></li>
                  <li></li>
                </ul>
                <ul>
                  <li>20</li>
                  <li><NuxtLink to="/">工具</NuxtLink></li>
                </ul>
              </li>
              <li class="other-link">
                <a href="#">github</a>
                <a href="#">csdn</a>
              </li>
              <li class="bar-box">
                <ul>
                  <li><NuxtLink to="/">首页</NuxtLink></li>
                  <li><NuxtLink to="/">归档</NuxtLink></li>
                  <li><NuxtLink to="/">留言</NuxtLink></li>
                  <li><NuxtLink to="/">时间线</NuxtLink></li>
                  <li><NuxtLink to="/">闲趣森林</NuxtLink></li>
                  <li><NuxtLink to="/">空间跳跃</NuxtLink></li>
                  <li><NuxtLink to="/">魔法咒语</NuxtLink></li>
                </ul>
              </li>
            </ul>
            <!-- </el-affix> -->
          </div>
        </div>
      </main>
    </div>
  </div>
  <!-- </div> -->
</template>

<script lang="ts" setup>
import { ref } from "vue";
const defaultWord1 = "Now, this place belongs only to you ......";
const moodShow = ref(false); // 心情输入框
const moodShowValue = ref(defaultWord1);
const moodChangeValue = ref("");

// 转换心情输入框显示状态方法
function speakingSwitch() {
  moodShow.value = !moodShow.value;
}

// 点击心情输入框显示状态一直为true
function keepSpeaking() {
  window.removeEventListener("mouseup", speakingSwitch);
  moodShow.value = true;
  window.addEventListener("mouseup", speakingSwitch);
}
// 点击空白处时，心情输入框显示状态改为false
watch(moodShow, (val) => {
  if (val) {
    window.addEventListener("mouseup", speakingSwitch);
  } else {
    window.removeEventListener("mouseup", speakingSwitch);
    if (moodChangeValue.value != "") {
      moodShowValue.value = moodChangeValue.value;
    } else {
      moodShowValue.value = defaultWord1;
    }
  }
});

// 请求js
</script>

<style>
@import "~/assets/styles/public/base.css";
</style>

<style scoped lang="scss">
// .base-frame {
//   // width: calc(100% - 50px);
//   margin: 0 20px;
//   padding: 0 40px;
//   background-color: rgb(184, 252, 139);
// }
body {
  overflow: hidden;
}

header {
  position: relative;
  background-color: $pinkColor;
  height: 450px;
}

main {
  background-color: skyblue;
}

footer {
  background-color: yellow;
}

/* header头部分样式 start */
/* nav 部分 start */
.nav-left-box {
  float: left;
  display: flex;
  width: 500px;
  margin-left: 80px;
  padding: 15px;
  background-color: green;
  font-size: 1.5em;
  font-weight: 500;
  li {
    flex: 1;
    text-align: center;
    letter-spacing: 2px;
  }
}

.search-box {
  float: right;
  margin-right: 80px;
  font-size: 1.5em;
  font-weight: 500;
  background-color: green;
}
/* nav 部分 end */

.space-name {
  position: absolute;
  top: 35%;
  left: 10%;
  font-size: 4em;
}

.one-word-box {
  position: absolute;
  background-color: pink;
  top: 20%;
  right: 10%;
  width: 500px;
  font-size: 1.5em;
  .one-world {
  }
  .where-from {
    text-align: right;
    // font-size: 1.2em;
  }
}

.mood-box {
  position: absolute;
  background-color: pink;
  width: 40%;
  top: 50%;
  right: 10%;
  font-size: 1.5em;
  .mood-lab {
    display: inline-block;
    width: 100%;
    background-color: #fff;
  }
  .pop-out {
    position: relative;
    width: 300px;
    // height: 180px;
    margin: 10px auto;
    padding: 30px;
    background-color: aquamarine;
    border-radius: 10px;
  }
}

/* main主体部分样式 start */
.main-container {
  display: flex;
  width: 1200px;
  background-color: pink;
  margin: 0 auto;
}
/* left-main左边主体部分 */
.left-main {
  width: calc(100% - 320px);
  background-color: khaki;
  border-radius: 10px;
}
.footer {
  padding: 10px 0 20px;
  background-color: rgb(255, 160, 160);
  .web-message {
    font-size: 1.2em;
    > li {
      text-align: center;
      line-height: 30px;
    }
  }
}

/* right-main右边主体部分 */
.right-main {
  width: 300px;
  // height: 1000px;
  margin-left: 20px;
  background-color: yellow;
}
.message-box {
  .head-img-box {
    margin: 20px 40px 10px;
    height: 220px;
    background-color: #fff;
    border-radius: 50%;
    transform: scale(0.8);
    transition: all 0.8s;
    &:hover {
      border-radius: 5%;
      transform: scale(1);
    }
  }
  .nickname {
    background-color: #fff;
    font-size: 1.4em;
    text-align: center;
    margin-bottom: 10px;
  }
  .lab-box {
    display: flex;
    background-color: rgb(81, 180, 255);
    font-size: 1.4em;
    text-align: center;
    padding: 0 16px;
    box-sizing: border-box;
    > ul {
      position: relative;
      flex: 1;
      > li {
        margin: 3px 0;
      }
      li:nth-child(1) {
        font-weight: 700;
        font-size: 1.2em;
      }
      li:nth-child(3) {
        position: absolute;
        height: 30px;
        width: 1px;
        top: 50%;
        right: -1px;
        transform: translateY(-50%);
        background-color: black;
      }
    }
  }
  .other-link {
    background-color: rgb(255, 26, 64);
    padding: 10px 70px;
    box-sizing: border-box;
    font-size: 1.2em;
    display: flex;
    a {
      flex: 1;
      text-align: center;
    }
  }
  .bar-box {
    > ul {
      // height: 240px;
      > li > a {
        display: inline-block;
        width: calc(100% - 80px);
        margin: 0 40px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        font-size: 1.3em;
        margin-bottom: 2px;
        font-weight: 700;
        letter-spacing: 1px;
        border-radius: 20px;
        transition: all 0.2s;
        &:hover {
          height: 60px;
          line-height: 60px;
          font-size: 1.5em;
          background-color: rgb(51, 183, 235);
        }
      }
    }
  }
}
</style>

<style>
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  border-radius: 10px;
  /* background-color: #000000; */
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(1, pink) /* color-stop(0.44, rgb(60, 186, 146)), */
      /* color-stop(0.72, rgb(253, 187, 45)), */
      /* color-stop(0.86, rgb(253, 187, 45)) */
  );
  transition: 0.3s ease-in-out;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #ff4141;
}
</style>
