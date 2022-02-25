import Vue from "vue";
import Vuerouter from "vue-router";
Vue.use(Vuerouter);
import routes from "./routes";
const router = new Vuerouter({
  //配置
  routes,
  mode: 'history'
})
export default router;