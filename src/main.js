import Vue from 'vue'
import App from './App.vue'
import "@/styles/global.less";
import router from "./router";
import showMessage from "./tools/showMessage";
//事件总线
import "./eventBus";
//弹出消息
Vue.prototype.$showMessage = showMessage;
import "./mock";
import "./api/banner";
//创建一个全局指令
import vLoadingImg from "./directives/loading";
Vue.directive('loading', vLoadingImg);
import vLazy from "./directives/lazy";
Vue.directive('lazy', vLazy);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

