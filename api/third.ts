import Http from "@/utils/http";

export default new (class third extends Http {
  /**
   * 获取一言
   */
  getOneWord(type: string) {
    return fetch("https://v1.hitokoto.cn?c=" + type).then((response) =>
      response.json()
    );
  }
})();
