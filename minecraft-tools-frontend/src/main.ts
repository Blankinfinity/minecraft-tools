import Vue from 'vue';
import App from './App.vue';
import router, { RoutesNames } from "./router";

Vue.config.productionTip = false;

Vue.prototype.$routesNames = RoutesNames;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
