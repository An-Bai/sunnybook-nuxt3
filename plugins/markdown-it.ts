import markdownIt from "markdown-it";
import hljs from "highlight.js";

var md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    // 此处判断是否有添加代码语言
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          // hljs.highlight(lang, str, true).value +
          // 11.0 版本修改了一下参数顺序 Deprecated as of 10.7.0. Please use highlight(code, options) instead.
          hljs.highlight(str, {language: lang, ignoreIllegals: true }).value +
          "</code></pre>"
        );
      } catch (__) {}
    }
    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
    );
  },
});

export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
          md: md
        }
      }
})