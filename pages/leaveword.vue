<template>
  <div class="leave-word">
    <div class="leave-word-title">留言板</div>
    <div v-if="true" class="empty-word"><span>暂无留言哦~</span></div>
    <div v-else class="leave-word-area">
      <ul>
        <li>
          <div class="head-img"><img src="~assets/images/3.jpg" alt="" /></div>
          <div class="speak-content">
            <div class="speaker-mess">
              <span class="speaker-name">鸢一折纸</span>
              <span class="speak-date">2022.10.17</span>
              <span class="repeat">回复</span>
            </div>
            <p class="show-word" v-text="test"></p>
          </div>
        </li>
        <li>
          <div class="head-img"><img src="~assets/images/3.jpg" alt="" /></div>
          <div class="speak-content">
            <div class="speaker-mess">
              <span class="speaker-name">鸢一折纸</span>
              <span class="speak-date">2022.10.17</span>
              <span class="repeat">回复</span>
            </div>
            <p class="show-word" v-text="test"></p>
          </div>
        </li>
        <li>
          <div class="head-img"><img src="~assets/images/3.jpg" alt="" /></div>
          <div class="speak-content">
            <div class="speaker-mess">
              <span class="speaker-name">鸢一折纸</span>
              <span class="speak-date">2022.10.17</span>
              <span class="repeat">回复</span>
            </div>
            <p class="show-word" v-text="test"></p>
          </div>
        </li>
      </ul>
    </div>
    <div class="leave-write">
      <div class="write-mess">
        <div class="write-title">发表留言</div>
        <textarea class="writing-box"></textarea>
        <div>
          <form class="personal-mess-from">
            <div>
              <label for="name">昵称</label>
              <input id="name" type="text" placeholder="必填" />
            </div>
            <div>
              <label for="email">邮箱</label>
              <input id="email" type="text" placeholder="必填" />
            </div>
            <div>
              <label for="web">网址</label>
              <input id="web" type="text" placeholder="可填" />
            </div>
          </form>
          <div class="send"><span>send</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const test =
  ref(`在Spring Boot应用中，使用Jackson进行JSON序列化的时将Long类型ID转成String响应给前端。前端是什么类型，JSON字符串转js对象，接收Long类型的是number，Number精度是16位（雪花ID是19位的），所以JS的Number数据类型导致的精度丢失后三位。

雪花算法：用一个 64 bit 的 long 型的数字作为全局唯一 id。是由时间戳、机房id、机器id、序号组成的。结合了UUID的全局唯一的特点，又具有自增有顺序的特点。`);
</script>

<style scoped lang="scss">
.leave-word {
  padding: 30px 0;
  .leave-word-title {
    padding: 0 30px;
    font-size: 1.8em;
    font-weight: 700;
    letter-spacing: 1px;
  }
}
.empty-word {
  margin: 20px 30px;
  height: 500px;
  background-color: paleturquoise;
  text-align: center;
  > span {
    position: relative;
    display: inline-block;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2em;
    letter-spacing: 1px;
    color: rgb(141, 141, 141);
  }
}
.leave-word-area {
  margin: 20px 30px;
  min-height: 500px;
  background-color: paleturquoise;
  ul {
    > li {
      display: flex;
      // height: 200px;
      background-color: pink;
      padding: 10px 0;
      border-top: 1px solid rgb(129, 129, 129);
      .head-img {
        margin-right: 10px;
        width: 60px;
        height: 60px;
        background-color: #fff;
        overflow: hidden;
        border-radius: 50%;
        > img {
          height: 100%;
        }
      }
      .speak-content {
        min-height: 150px;
        width: calc(100% - 70px);
        background-color: aqua;
      }
      .speaker-mess {
        position: relative;
        padding: 10px 0;
        background-color: orange;
        > span {
          margin-right: 10px;
        }
        .speaker-name {
          font-size: 1.3em;
          font-weight: 700;
        }
        .speak-date {
          font-size: 1.1em;
          color: rgb(138, 138, 138);
        }
        .repeat {
          position: absolute;
          padding: 2px;
          right: 0;
          top: 50%;
          font-size: 1.1em;
          font-weight: 00;
          transform: translateY(-50%);
          cursor: pointer;
        }
      }
      .show-word {
        background-color: salmon;
        padding: 10px;
        line-height: 25px;
        font-size: 1.25em;
        letter-spacing: 1px;
      }
      .write-area {
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
  }
}

.leave-write {
  margin: 20px 30px;
  // height: 300px;
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgb(109, 109, 109);
  .write-mess {
    padding: 10px;
    .write-title {
      font-weight: 700;
      font-size: 1.5em;
    }
    .writing-box {
      resize: vertical;
      width: calc(100% - 40px);
      min-height: 100px;
      margin: 10px;
      padding: 10px;
      border: none;
      outline: 0;
      font-size: 1em;
      background-color: transparent;
      font-size: 1.3em;
      border-radius: 5px;
      letter-spacing: 1px;
      box-shadow: inset 0 0 2px 0 rgb(148, 148, 148);
      transition: all 0.4s;
      &:focus {
        box-shadow: inset 0 0 5px 0 deepskyblue;
      }
    }
    .personal-mess-from {
      display: flex;
      justify-content: space-around;
      > div {
        > label {
          font-size: 1.2em;
          margin-right: 5px;
        }
        > input {
          padding: 4px 0px 4px 5px;
          border-radius: 2px;
          font-weight: 700;
          box-shadow: inset 0 0 2px 0 rgb(148, 148, 148);
          &::placeholder {
            font-weight: 500;
          }
          transition: all 0.4s;
          &:focus {
            box-shadow: inset 0 0 4px 0 deepskyblue;
          }
        }
      }
    }
    .send {
      text-align: center;
      margin: 10px 0 0;
      > span {
        padding: 8px 40px;
        display: inline-block;
        font-size: 1.3em;
        background-color: indianred;
        border-radius: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
