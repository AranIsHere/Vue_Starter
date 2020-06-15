import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import './styles/common.scss' // global css

import Api from '@/api/index.js'
Vue.prototype.$api = Api
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
