import Http from "@/utils/http";

// 属于自定义的其他类型的接口
export default new (class blog extends Http {
  /**
   * 获取文章、标签、分类总数
   */
  getKindsSum() {
    return this.get("/blog/kindSum");
  }

  /**
   * 获取文章关于
   */
  getAbout() {
    return this.get("/blog/about");
  }
})();
