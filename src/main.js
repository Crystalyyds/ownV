import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import request from "@/utils/request";
import infiniteScroll from "vue-infinite-scroll";


Vue.config.productionTip = false
Vue.prototype.request=request
Vue.use(ElementUI, { size: "mini" });
Vue.use(infiniteScroll);
window._AMapSecurityConfig = {
  securityJsCode:'d9536728ff314be0f5a7958a5a1db514',
}


new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
