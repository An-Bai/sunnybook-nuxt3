import Http from "@/utils/http";

export default new (class tag extends Http {
  /**
   * 获取精选概要标签
   */
  //   getNiceClass() {
  //     return this.get("/class/nice");
  //   }

  /**
   * 获取所有标签
   */
  getTags() {
    return this.get("/tags");
  }

  /**
   * 获取某个标签
   * @param { Number } id 标签id
   */
  getTagMess(id: string) {
    return this.get("/tag/" + id);
  }
})();
