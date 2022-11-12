import Http from "@/utils/http";

export default new (class article extends Http {
  /**
   * 获取精选概要文章
   */
  getGreatArticles() {
    return this.get("/article/great");
  }

  /**
   * 获取随机概要文章
   */
  getRandomArticles() {
    return this.get("/article/random");
  }

  /**
   * 获取分页文章
   * @param { params } id 文章筛选条件
   */
  getBaseArticlesPage(params?: object) {
    return this.get("/article/page", params);
  }

  /**
   * 获取文章详情
   * @param { Number } id 文章id
   */
  getArticle(id: string) {
    return this.get("/article/" + id);
  }

  /**
   * 获取归档文章
   */
  getArticlePig() {
    return this.get("/article/pigeonhole");
  }
})();
