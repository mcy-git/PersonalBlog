//事件总线
import Vue from "vue";
const app = new Vue({});
/**
 * 事件命：DetailScroll
 * 含义：主区域滚动触发
 * 参数：
 * --滚动的dom元素
 */

/**
 * 事件命： SetDetailScroll
 * 含义：使区域滚动到指定位置
 * 参数：
 * --滚动到的位置值
 */
Vue.prototype.$Bus = app;
export default app;