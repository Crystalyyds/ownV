import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import request from "@/utils/request";
import AMapLoader from '@amap/amap-jsapi-loader';


Vue.config.productionTip = false
Vue.prototype.request=request
Vue.use(ElementUI, { size: "mini" });

window._AMapSecurityConfig = {
  securityJsCode:'d9536728ff314be0f5a7958a5a1db514',
}


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
