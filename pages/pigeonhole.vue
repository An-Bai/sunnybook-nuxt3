<template>
  <div class="pigeonhole-main">
    <div class="pigeonhole-title">时间地平线 の Recording...</div>
    <div class="pigeonhole-box">
      <div class="pigeonhole-year-box">
        <div class="vertical-line"></div>
        <h1 class="year-show">2022</h1>
        <div class="pigeonhole-month-box">
          <h2 class="month-show">7/2022 <span>(10)</span></h2>
          <ul>
            <li>
              <p>关于转生成为史莱姆这件事</p>
              <span> <i>28</i>/<i>星期一</i><i>晴</i> </span>
            </li>
            <li>
              <p>兔子咖啡店</p>
              <span> <i>28</i>/<i>星期一</i><i>晴</i> </span>
            </li>
            <li>
              <p>魔王爱上勇者</p>
              <span> <i>28</i>/<i>星期一</i><i>晴</i> </span>
            </li>
            <li>
              <p>天使降临到你身边</p>
              <span> <i>28</i>/<i>星期一</i><i>晴</i> </span>
            </li>
          </ul>
        </div>
        <div class="pigeonhole-month-box">
          <h2 class="month-show">7/2022 <span>(10)</span></h2>
          <ul>
            <li>
              <p>关于转生成为史莱姆这件事</p>
              <span> <i>28</i>/<i>星期一</i><i>晴</i> </span>
            </li>
            <li>
              <p>兔子咖啡店</p>
              <span> <i>28</i>/<i>星期一</i><i>晴</i> </span>
            </li>
            <li>
              <p>魔王爱上勇者</p>
              <span> <i>28</i>/<i>星期一</i><i>晴</i> </span>
            </li>
            <li>
              <p>天使降临到你身边</p>
              <span> <i>28</i>/<i>星期一</i><i>晴</i> </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="pigeonhole-year-box">
        <h1 class="year-show">2022</h1>
        <div class="pigeonhole-month-box">
          <h2 class="month-show">7/2022 <span>(10)</span></h2>
          <ul>
            <li>
              <p>关于转生成为史莱姆这件事</p>
              <span> <i>28</i>/<i>星期一</i><i>晴</i> </span>
            </li>
            <li>
              <p>兔子咖啡店</p>
              <span> <i>28</i>/<i>星期一</i><i>晴</i> </span>
            </li>
            <li>
              <p>魔王爱上勇者</p>
              <span> <i>28</i>/<i>星期一</i><i>晴</i> </span>
            </li>
            <li>
              <p>天使降临到你身边</p>
              <span> <i>28</i>/<i>星期一</i><i>晴</i> </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
/* 复用代码块 */

.pigeonhole-main {
  padding: 0 30px;
  min-height: 600px;
  box-sizing: border-box;
  background-color: #fff;
}
.pigeonhole-title {
  padding: 20px 0;
  background-color: pink;
  text-align: center;
  font-weight: 700;
  font-size: 2em;
}

.pigeonhole-box {
  position: relative;
  padding-left: 40px;
  /* 垂直直线 */
  .vertical-line {
    position: absolute;
    top: 30px;
    left: 4px;
    height: calc(100% - 60px);
    width: 7px;
    background-color: yellow;
  }
}

.pigeonhole-year-box {
  .year-show {
    position: relative;
    padding: 10px 0;
    font-size: 2.5em;
    &::before {
      content: "";
      position: absolute;
      left: -43px;
      top: 50%;
      transform: translateY(-50%);
      width: 21px;
      height: 21px;
      border-radius: 50%;
      background-color: rgb(76, 232, 136);
      box-shadow: 0 0 0 2px white;
    }
  }
  .pigeonhole-month-box {
    .month-show {
      position: relative;
      padding: 15px 0;
      font-size: 2em;
      &::before {
        content: "";
        position: absolute;
        left: -40px;
        top: calc(50% + 5px);
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: rgb(76, 232, 136);
        box-shadow: 0 0 0 2px white;
      }
    }
    > .month-show:first-of-type {
      padding-top: 25px;
      font-size: 2em;
    }
    > ul {
      > li {
        position: relative;
        padding: 25px 0;
        font-size: 1.6em;
        > p {
          position: relative;

          display: inline-block;
          &::before {
            content: "";
            position: absolute;
            top: 7px;
            left: -40px;
            height: 15px;
            width: 15px;
            background-color: white;
          }
        }
        > span {
          position: absolute;
          right: 0;
          margin-left: 20px;
          font-size: 0.8em;
          color: rgba(178, 177, 177, 0.5);
          > i {
            color: rgb(178, 177, 177);
            padding: 5px;
          }
          > i:first-of-type {
            font-size: 1.2em;
          }
        }
        &::before {
          content: "";
          position: absolute;
          z-index: 1;
          left: -40px;
          top: 50%;
          transform: translateY(-50%);
          width: 7px;
          height: 7px;
          border-radius: 50%;
          border: 4px solid pink;
          transition: all 0.1s;
          box-shadow: 0 0 0 2px white;
        }
        &::after {
          content: "";
          position: absolute;
          left: -35px;
          top: 50%;
          transform: translateY(-50%);
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: transparent;
          transition: all 0.1s;
        }
        &:hover::before {
          width: 11px;
          height: 11px;
          border: 2px solid skyblue;
        }
        &:hover::after {
          background-color: skyblue;
        }
      }
    }
  }
}
</style>
