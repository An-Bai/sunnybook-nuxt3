/*
 * 全局共享变量的使用
 */
// useState使用语法，key：key值，() => T：映射初始值
// useState<T>(init?: () => T | Ref<T>): Ref<T>
// useState<T>(key: string, init?: () => T | Ref<T>): Ref<T>

// 头部标题样式及内容（type：1表示主页，2表示其它）
export const useCounter = () => useState("counter", () => [{}]);

// 文章分栏内容
export const userArticleParentNode = () =>
  useState("articleParentNode", () => []);
