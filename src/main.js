import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from './utils/request';
import './plugin'
import {Message} from "element-ui";
// import { Button, Message } from 'element-ui';

// import '@/router/guard';

Vue.config.productionTip = false;
Vue.prototype.$request = request;

window.axios = request;
window.router = router;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
