const weekArr = [
  "星期天",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
];
const weekBrr = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

const getTimeFormat = (str?: string) => {
  let d = new Date();
  if (typeof str != "undefined") {
    d = new Date(str);
  }
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const week = weekArr[d.getDay() % 7];
  const hour = d.getHours();
  const min = d.getMinutes();
  const second = d.getSeconds();
  const res =
    year +
    (month < 10 ? "-0" : "-") +
    month +
    (day < 10 ? "-0" : "-") +
    day +
    " " +
    week;
  return res;
};

// 获取从某个时间开始到现在的毫秒值并格式化成天时分秒的格式。start 开始时间 now 当前时间
const getFileTime = (start?: string, now?: string) => {
  let a = new Date();
  let b = new Date();
  if (typeof start != "undefined") {
    a = new Date(start);
  }
  if (typeof now != "undefined") {
    b = new Date(now);
  }
  const SecondNum = b.getTime() - a.getTime();
  let day = parseInt(SecondNum / 86400);
  let hour = parseInt((SecondNum % 86400) / 3600);
  let min = parseInt((SecondNum % 3600) / 60);
  let second = SecondNum % 60;
  const res =
    (day < 10 ? "0" : "") +
    day +
    "天" +
    (hour < 10 ? "0" : "") +
    hour +
    "小时" +
    (min < 10 ? "0" : "") +
    min +
    "分钟";
  (second < 10 ? "0" : "") + second + "秒";
  return res;
};

const getYear = (str?: string) => {
  let d = new Date();
  if (typeof str != "undefined") {
    d = new Date(str);
  }
  return d.getFullYear();
};

const getMonth = (str?: string) => {
  let d = new Date();
  if (typeof str != "undefined") {
    d = new Date(str);
  }
  return d.getMonth() + 1;
};

const getDay = (str?: string) => {
  let d = new Date();
  if (typeof str != "undefined") {
    d = new Date(str);
  }
  return (d.getDate() < 10 ? "0" : "") + d.getDate();
};

const getWeek = (str?: string) => {
  let d = new Date();
  if (typeof str != "undefined") {
    d = new Date(str);
  }
  return weekArr[d.getDay() % 7];
};

export default {
  getTimeFormat,
  getYear,
  getMonth,
  getDay,
  getWeek,
  getFileTime,
};
