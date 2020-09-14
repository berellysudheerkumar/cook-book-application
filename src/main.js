/**
 * Cook book application
 *
 *
 * file
 * @name main
 *
 * @description
 * Bootstrap file
 * Contains parent component to load bootstrap , font-awesome
 */

import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';
import {routes} from "./routes";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
export const EventBus = new Vue();

Vue.config.productionTip = false
Vue.use(VueRouter);
const router = new VueRouter({ routes, mode: 'abstract' });

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
