import Vue from 'vue'
import App from './App.vue'

import router from './router'

import Vant from 'vant';
import 'vant/lib/index.css';

//引入aixos
import axios from 'axios'
Vue.prototype.$ajax= axios


Vue.use(Vant);
Vue.config.productionTip = false
// 引入图标

// Vue.use(Icon);
// Vue.use(Button);
// Vue.use(Image);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
