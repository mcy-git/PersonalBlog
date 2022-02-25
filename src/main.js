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
//事件总线
import eventBus from "./eventBus";
Vue.prototype.$Bus = eventBus;
