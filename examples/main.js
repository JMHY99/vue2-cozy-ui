import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "../packages/style/src/fonts/iconfont.css";
import "../packages/style/src/index.scss";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
