import Vue from 'vue'
import App from './App.vue'
import "@/styles/global.less";
import router from "./router";
import showMessage from "./tools/showMessage";
Vue.prototype.$showMessage = showMessage;
import "./mock";
import "./api/banner";
//创建一个全局指令
import vLoadingImg from "./directives/loading";
Vue.directive('loading', vLoadingImg);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
import eventBus from "./eventBus";
Vue.prototype.$Bus = eventBus;
import * as blogApi from "./api/blog";
// blogApi.postComment({
//   nickname: "名字：小明",
// 	content: "随便写",
// 	blogId: 5
// }).then((r)=>{
//   console.log("分页评论", r);
// })
