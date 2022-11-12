<script setup lang="ts">
const props = defineProps({
  count: Number, // 获取父组件记录总条数
  pageSize: Number, // 获取父组件每页条数
});

// 传给父组件的值currentPage
const emits = defineEmits(["update:currentPage"]);
/*
 size为每页显示的个数
 page是显示的总页数 向上取整(一个也会占一页)
 pagerCount为要显示的数字按钮的个数 */

const pageMaxCount = 5; // 分页按钮最大个数
const pageBtnNum = ref([1, 0, 0, 0, 0]); // 分页按钮标号（最少有一个按钮）
const pageBtnStatus = ref([true, false, false, false, false]); // 分页按钮选中状态
const currentPage = ref(1); // 当前页（每页大小由后台控制）
const whichSelect = ref(0); // 选中的按钮索引
const pageNum = ref(0);
pageNum.value = (props.count - (props.count % props.pageSize)) / props.pageSize;
if (props.count % props.pageSize > 0) {
  pageNum.value++;
}

// 初始化数据（从索引1开始，如果分页小于5，后面的数据依然是初始值0）
for (let i = 1; i < pageMaxCount && i < pageNum.value; i++) {
  pageBtnNum.value[i] = i + 1;
}
if (pageNum.value > pageMaxCount) {
  pageBtnNum.value[pageMaxCount - 1] = pageNum.value;
}
// // 监听currentPage
// watch(currentPage, (newVal, oldVal) => {
//   // 发送数据请求
// });

//更新分页按钮选中状态
function updateBtnStatus(num: number) {
  if (pageBtnStatus.value[num]) {
    return;
  }
  // 先改变currentPage的值
  currentPage.value = pageBtnNum.value[num];
  // 返回父组件currentPage的值
  emits("update:currentPage", currentPage.value);
  // 解除上一个选中状态
  pageBtnStatus.value[whichSelect.value] = false;
  if (pageNum.value <= pageMaxCount) {
    whichSelect.value = num;
  } else {
    if (num == 0 && pageBtnNum.value[1] > 2) {
      whichSelect.value = 0;
      pageBtnNum.value[1] = 2;
      pageBtnNum.value[2] = 3;
      pageBtnNum.value[3] = 4;
    } else if (num == 1 && currentPage.value > 2) {
      whichSelect.value = 2;
      pageBtnNum.value[1] = currentPage.value - 1;
      pageBtnNum.value[2] = currentPage.value;
      pageBtnNum.value[3] = currentPage.value + 1;
    } else if (num == 2) {
      whichSelect.value = 2;
    } else if (num == 3 && currentPage.value < pageNum.value - 1) {
      whichSelect.value = 2;
      pageBtnNum.value[1] = currentPage.value - 1;
      pageBtnNum.value[2] = currentPage.value;
      pageBtnNum.value[3] = currentPage.value + 1;
    } else if (num == 4 && pageBtnNum.value[3] < pageNum.value - 1) {
      whichSelect.value = 4;
      pageBtnNum.value[1] = pageNum.value - 3;
      pageBtnNum.value[2] = pageNum.value - 2;
      pageBtnNum.value[3] = pageNum.value - 1;
    } else {
      whichSelect.value = num;
    }
  }
  // 给选中按钮设置状态
  pageBtnStatus.value[whichSelect.value] = true;
}

/*
 * 工具方法区
 */
</script>

<template>
  <div>
    <div class="container">
      <ul class="pagination">
        <!-- 最左边按钮 -->
        <li
          v-show="currentPage != 1"
          @click="updateBtnStatus(whichSelect - 1)"
          class="page-btn page-btn-prev isClick"
        >
          《
        </li>
        <li v-show="currentPage == 1" class="page-btn page-btn-prev">《</li>
        <!-- 第1个按钮 -->
        <li
          @click="updateBtnStatus(0)"
          :class="'page-number ' + (pageBtnStatus[0] ? 'active' : '')"
        >
          {{ pageBtnNum[0] }}
        </li>
        <!-- 省略号按钮（不一定显示）-->
        <li
          @click="
            updateBtnStatus(whichSelect - 1);
            updateBtnStatus(whichSelect - 1);
          "
          v-show="currentPage > 3 && pageNum > 5"
          class="page-dot page-dot-prev"
        ></li>
        <!-- 第2-4个按钮 -->
        <li
          @click="updateBtnStatus(i)"
          v-for="i in 3"
          :key="i"
          :class="'page-number ' + (pageBtnStatus[i] ? 'active' : '')"
          v-show="pageBtnNum[i] > 0"
        >
          {{ pageBtnNum[i] }}
        </li>
        <!-- 省略号按钮（不一定显示） -->
        <li
          @click="
            updateBtnStatus(whichSelect + 1);
            updateBtnStatus(whichSelect + 1);
          "
          v-show="currentPage < pageNum - 2 && pageNum > 5"
          class="page-dot page-dot-next"
        ></li>
        <!-- 第5个按钮 -->
        <li
          @click="updateBtnStatus(4)"
          :class="'page-number ' + (pageBtnStatus[4] ? 'active' : '')"
          v-show="pageBtnNum[4] > 0"
        >
          {{ pageBtnNum[4] }}
        </li>
        <!-- 最右边按钮 -->
        <li
          v-show="currentPage != pageNum"
          class="page-btn page-btn-prev isClick"
          @click="updateBtnStatus(whichSelect + 1)"
        >
          》
        </li>
        <li v-show="currentPage == pageNum" class="page-btn page-btn-prev">
          》
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  // 分页列表
  .pagination {
    display: flex;
    align-items: center;
    height: 50px;
    margin: 30px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 16px 32px rgba(90, 100, 130, 0.1);
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 25px;
      margin: 10px;
      font-size: 14px;
      border-radius: 5px;
      transition: all 0.3s;
      // 左右按钮
      &.page-btn {
        // 默认都为不可点击态
        color: #cdd5f7;
        font-size: 22px;
        &.isClick {
          // 可点击态
          color: #646b8a;
          cursor: pointer;
          &:hover {
            color: #fff;
            background-color: #6b5bfd;
          }
        }
      }
      // 数字按钮
      &.page-number {
        color: #646b8a;
        cursor: pointer;
        &:hover {
          color: #fff;
          // 文字加粗
          font-weight: bold;
          background-color: #6b5bfd;
        }
        // 选中状态
        &.active {
          color: #fff;
          // 文字加粗
          font-weight: bold;
          background-color: #6b5bfd;
          // 鼠标变为默认箭头
          cursor: default;
        }
      }
      // 省略号按钮
      &.page-dot {
        color: #cdd5f7;
        font-size: 18px;
        cursor: pointer;
        &:hover {
          color: #6b5bfd;
        }
        &::after {
          content: "..."; //内容默认是省略号，可以换成图标
        }
        // 左边
        &.page-dot-prev:hover {
          &::after {
            content: "<<"; // 左边hover变换图标
          }
        }
        // 右边
        &.page-dot-next:hover {
          &::after {
            content: ">>"; // 右边hover变换图标
          }
        }
      }
    }
  }
}
</style>
