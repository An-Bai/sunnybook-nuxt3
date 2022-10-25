import Http from "@/utils/http";

// 文章路由模块化
export default new (class article extends Http {
  /**
   * 获取文章详情（示例1）
   * @param { Number } id 文章id
   */
  getDetail(id: number) {
    return this.get("/app/v1/article/detail/" + id);
  }
  /**
   * 获取所有文章分类（示例2）
   */
  getAll() {
    return this.get("/api/v1/articles");
  }
})();
