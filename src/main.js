import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';
import {routes} from "./routes"

Vue.config.productionTip = false
Vue.use(VueRouter);
const router = new VueRouter({ routes, mode: 'abstract' });

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
