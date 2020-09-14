import MarkdownIt from 'markdown-it';
let markdownIt = {
  install: function(Vue, options) {
    Vue.prototype.$markdownIt = MarkdownIt(options);
  }
};
export default markdownIt;
