export default defineNuxtRouteMiddleware((to, from) => {
  // console.log("要去那个页面:" + to.path);
  // console.log(to);
  // console.log("来自那个页面:" + from.path);
  // console.log(from);
  // 每次路由跳转就返回顶部
  if (process.client) {
    window.scrollTo({
      top: 0,
    });
  }
});
