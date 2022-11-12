import Http from "@/utils/http";

export default new (class cla extends Http {
  /**
   * 获取精选概要分类
   */
  getNiceClass() {
    return this.get("/class/nice");
  }

  /**
   * 获取所有分类
   */
  getClass() {
    return this.get("/class");
  }

  /**
   * 获取所有某个分类
   * @param { Number } id 分类id
   */
  getClassMess(id: string) {
    return this.get("/class/" + id);
  }
})();
