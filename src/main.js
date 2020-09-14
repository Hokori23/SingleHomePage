import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';

import vuetify from './plugins/vuetify';
// import markdownIt from './plugins/markdownIt';
import markdownIt from 'markdown-it';
console.log('install')
// Vue.use(markdownIt, {
Vue.prototype.$markdownIt = markdownIt({
  html: true,
  typographer: true,
  xhtmlOut: false,
  breaks: false // 转换段落里的 '\n' 到 <br>。
});

Vue.config.productionTip = false;
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
