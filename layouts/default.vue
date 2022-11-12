<template>
  <div>
    <div class="common-layout">
      <header>
        <nav :class="navBox">
          <ul class="nav-left-box">
            <li><NuxtLink to="/">首页</NuxtLink></li>
            <li><NuxtLink to="/label">标签</NuxtLink></li>
            <li><NuxtLink to="/class">分类</NuxtLink></li>
            <li><NuxtLink to="/pigeonhole">归档</NuxtLink></li>
            <li><NuxtLink to="/leaveword">留言</NuxtLink></li>
            <li><NuxtLink to="/about">关于</NuxtLink></li>
          </ul>
          <div class="search-box">
            <div class="search-input">
              <input type="text" placeholder="search" />
              <!-- <div class="searchBox" @click="searchShow">搜索</div> -->
            </div>
          </div>
        </nav>
        <div v-show="changHead">
          <div class="content-title">
            <h1>{{ counter[0].routerName }}</h1>
            <p>
              {{ counter[0].description }}
            </p>
            <p>{{ counter[0].author }}</p>
          </div>
        </div>
        <div v-show="!changHead">
          <div class="space-name">白的晴书</div>
          <div class="one-word-box">
            <p class="one-world">
              <span @click="changOneWord">{{ oneWord.hitokoto }}</span>
            </p>
            <p class="where-from">
              <span @click="changOneWord"
                >—— {{ oneWord.from_who }} 《{{ oneWord.from }}》</span
              >
            </p>
          </div>
          <div class="mood-box">
            <label for="ok" @click.self="speakingSwitch" class="mood-lab">{{
              moodShowValue
            }}</label>
            <div v-show="moodShow" class="pop-out" @click="keepSpeaking">
              <div class="decorate"></div>
              <div class="out-container">
                <textarea
                  id="ok"
                  maxlength="50"
                  class="peopleWrite"
                  placeholder="随便什么，你的心情就好~"
                  v-model="moodChangeValue"
                >
                </textarea>
              </div>
            </div>
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
                  <li>
                    <span
                      ><NuxtLink to="https://beian.miit.gov.cn/" target="_blank"
                        >湘ICP备2022001772号-1</NuxtLink
                      ></span
                    >
                  </li>
                  <li>
                    <!-- <span
                      >本小白已享受了 0 天 0 小时 0 分 0 秒的世界(●'◡'●)
                    </span> -->
                  </li>
                  <li>
                    <span>Copyright © 2022 Baiyiyu All rights reserved.</span>
                  </li>
                </ul>
              </div>
            </footer>
          </div>

          <div class="right-main">
            <!-- <el-affix> -->
            <ul class="message-box">
              <li class="head-img-box"></li>
              <li class="nickname">{{ kindsSum.admin }}</li>
              <li class="lab-box">
                <ul>
                  <li>{{ kindsSum.article }}</li>
                  <li><NuxtLink to="/article">文章</NuxtLink></li>
                  <li></li>
                </ul>
                <ul>
                  <li>{{ kindsSum.tag }}</li>
                  <li><NuxtLink to="/label">标签</NuxtLink></li>
                  <li></li>
                </ul>
                <ul>
                  <li>{{ kindsSum.class }}</li>
                  <li>
                    <NuxtLink to="/class">分类</NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="other-link">
                <a
                  href="https://github.com/An-Bai/sunnybook-nuxt3"
                  target="_blank"
                  >github</a
                >
                <a href="https://blog.csdn.net/m0_48489737" target="_blank"
                  >CSDN</a
                >
              </li>
              <li class="bar-box">
                <ul>
                  <li><NuxtLink to="/">首页</NuxtLink></li>
                  <li><NuxtLink to="/pigeonhole">归档</NuxtLink></li>
                  <li><NuxtLink to="/leaveword">留言</NuxtLink></li>
                  <li>
                    <NuxtLink to="/" @click="outWin">时间线</NuxtLink>
                  </li>
                  <li><NuxtLink to="/" @click="outWin">闲趣森林</NuxtLink></li>
                  <li><NuxtLink to="/" @click="outWin">空间跳跃</NuxtLink></li>
                  <!-- <li><NuxtLink to="/" @click="outWin">魔法咒语</NuxtLink></li> -->
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
/*
 * js请求数据，动态渲染数据
 */
import { ref } from "vue";
// 调用自定义事件格式化函数
const { getTimeFormat } = timeUtil();
const changHead = ref(false);
const counter = useCounter();
const { thirdApi, blogApi } = useApi();
const oneWord = ref(); // 一言接口
const wordType = ["a", "b", "c"]; // 限制一言类型为：动画、漫画和游戏
const defaultWord = "Now, this place belongs only to you ......";
const moodShow = ref(false); // 心情输入框是否显示
const moodShowValue = ref(""); // 心情输入框值
const moodChangeValue = ref(""); // 心情输入框变化记录
const kindsSum = ref(""); // 各数据数量详情
const navBox = ref("");
const lifeTime = ref(0); // 网站年龄
if (oneWord.value == null) {
  oneWord.value = "愿最终你能和你爱的人再次相遇";
}

initData();
async function initData() {
  // 头部信息判断渲染
  if (counter.value[0].type == "2") {
    changHead.value = true;
  } else {
    changHead.value = false;
  }

  // 初始获取一言
  oneWord.value = changOneWord();

  // 获取文章、标签、分类总数
  await blogApi.getKindsSum().then((res) => {
    kindsSum.value = res.data;
  });
}

// 监听header内容变化（每个页面不同）
watch(counter, () => {
  if (counter.value[0].type == "2") {
    changHead.value = true;
  } else {
    changHead.value = false;
  }
});

// localStorage需要在渲染后使用
onMounted(() => {
  // 初始化随性说存储
  if (localStorage.getItem("moodShowValue") != null) {
    moodShowValue.value = localStorage.getItem("moodShowValue");
  } else {
    moodShowValue.value = defaultWord;
  }
});

/*
 * js动画效果控制
 */
// 点击更换一言
async function changOneWord() {
  await thirdApi.getOneWord(wordType[Date.now() % 3]).then((res) => {
    oneWord.value = res;
  });
}

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
    if (moodChangeValue.value != "" && moodChangeValue.value != null) {
      moodShowValue.value = moodChangeValue.value;
    } else {
      moodShowValue.value = defaultWord;
    }
    localStorage.setItem("moodShowValue", moodShowValue.value);
  }
});

onMounted(() => {
  // 监听滚轮滑动效果
  let start = 0;
  window.onscroll = function () {
    const newVal =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (start > 10) {
      navBox.value = "scrollDown";
      if (start > 600 && start > newVal) {
        navBox.value = "scrollDown scrollDownLen";
      } else {
        navBox.value = "scrollDown";
      }
    } else {
      navBox.value = "";
    }
    start = document.body.scrollTop || document.documentElement.scrollTop;
  };
});

function outWin() {
  alert("此空间暂未布置完成，敬请期待~");
}
</script>

<style scoped lang="scss">
body {
  overflow: hidden;
}

header {
  position: relative;
  box-shadow: 0 0 15px 0 rgb(212, 212, 212);
  height: 70vh;
}

main {
  // background-color: skyblue;
}

footer {
  // background-color: yellow;
}

/* header头部分样式 start */
/* nav 部分 start */
nav {
  width: 100%;
  position: sticky;
  z-index: 1;
  top: 0;
  align-content: space-between;
  transition: all 0.5s;
  &.scrollDown {
    background-color: rgb(108, 108, 108);
  }
  &.scrollDownLen {
    position: fixed;
    z-index: 1;
  }
}
.nav-left-box {
  display: flex;
  width: 500px;
  margin-left: 80px;
  padding: 15px;
  font-size: 1.5em;
  font-weight: 500;
  li {
    flex: 1;
    text-align: center;
    letter-spacing: 2px;
  }
}

.search-box {
  position: absolute;
  top: 0;
  right: 80px;
  margin-right: 80px;
  font-weight: 500;
  // background-color: green;
  > .search-input {
    position: relative;
    input {
      margin: 13px 0;
      padding: 6px;
      font-size: 1.2em;
      width: 44px;
      border-radius: 5px;
      transition: all 0.6s;
      background-color: rgba(255, 255, 255, 0.5);
      cursor: pointer;
      &:focus {
        width: 180px;
        box-shadow: inset 0 0 3px 0 rebeccapurple;
        background-color: rgb(255, 255, 255, 1);
      }
    }
    // .searchBox {
    //   position: absolute;
    //   top: 16px;
    //   right: 6px;
    //   cursor: pointer;
    // }
  }
}
/* nav 部分 end */
.content-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  > h1 {
    text-align: center;
    font-size: 4em;
    letter-spacing: 1px;
  }
  p {
    width: 90vw;
    margin-top: 10px;
    font-size: 1.5em;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}

.space-name {
  position: absolute;
  top: 35%;
  left: 10%;
  font-size: 4em;
}

.one-word-box {
  position: absolute;
  // background-color: pink;
  top: 20%;
  right: 10%;
  width: 50%;
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
  // background-color: pink;
  width: 40%;
  top: 50%;
  right: 10%;
  font-size: 1.5em;

  .mood-lab {
    display: inline-block;
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    transition: all 0.5s;
    &:hover {
      box-shadow: inset 0 0 5px 0 rgb(141, 141, 141);
    }
  }
  .pop-out {
    position: relative;
    width: 300px;

    margin: 15px auto;
    padding: 15px 20px 10px;
    background-color: rgb(202, 202, 202);
    border-radius: 10px;
    .decorate {
      position: absolute;
      top: -28px;
      left: 20px;
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      border-bottom: 15px solid rgb(202, 202, 202);
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      transition: all 0.1s;
    }
    .peopleWrite {
      resize: none;
      width: calc(100% - 10px);
      height: 50px;
      padding: 10px 0 10px 10px;
      border: none;
      outline: 0;
      font-size: 1em;
      background-color: transparent;
      border-radius: 5px;
      letter-spacing: 1px;
      box-shadow: inset 0 0 2px 0 rgb(128, 128, 128);
      transition: all 0.4s;
      overflow-x: hidden;
      overflow-y: scroll;
      &:focus {
        box-shadow: inset 0 0 4px 0 rgb(128, 128, 128);
      }
      &::-webkit-scrollbar {
        background-color: transparent;
      }
      &::-webkit-scrollbar-track {
        background-color: transparent;
        -webkit-box-shadow: 0 0 0;
      }
      &::-webkit-scrollbar-thumb {
        background-image: none;
        background-color: transparent;
        -webkit-box-shadow: 0 0 0;
      }
    }
  }
}

/* main主体部分样式 start */
.main-container {
  display: flex;
  width: 80vw;
  max-width: 1300px;
  // background-color: pink;
  margin: 0 auto;
}
/* left-main左边主体部分 */
.left-main {
  width: calc(100% - 320px);
  background-color: rgb(255, 255, 255);
  box-shadow: 0 5px 8px 2px rgb(214, 214, 214);
  border-radius: 10px;
}
.footer {
  padding: 10px 0 20px;
  // background-color: rgb(255, 160, 160);
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
  position: sticky;
  top: 0;
  height: calc(100vh + 10px);
  width: 300px;
  margin-left: 20px;
  box-shadow: inset 0 0 8px -2px #c5c5c5;
  // 设置容器内可滚动
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
}
.message-box {
  height: 100vh;
  .head-img-box {
    margin: 20px 40px 10px;
    height: 220px;
    // background-color: #fff;
    background: #ececec url("~/assets/images/header.jpg") no-repeat center;
    // background: #ececec url("~/assets/images/1.jpg") no-repeat fixed center;
    background-size: cover;
    border-radius: 50%;
    transform: scale(0.8);
    transition: all 0.5s;
    &:hover {
      border-radius: 5%;
      transform: scale(1);
    }
  }
  .nickname {
    // background-color: #fff;
    font-size: 1.4em;
    text-align: center;
    margin-bottom: 10px;
  }
  .lab-box {
    display: flex;
    // background-color: rgb(81, 180, 255);
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
        min-width: 1px;
        top: 50%;
        right: -2px;
        transform: translateY(-50%);
        background-color: black;
      }
    }
  }
  .other-link {
    // background-color: rgb(255, 26, 64);
    padding: 10px 70px;
    box-sizing: border-box;
    font-size: 1.2em;
    font-weight: 700;
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
          color: black;
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
  background-color: deepskyblue;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
  transition: 0.3s ease-in-out;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgb(176, 176, 176);
}
</style>
