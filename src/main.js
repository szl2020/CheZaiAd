/*
 * @Author: your name
 * @Date: 2021-03-15 16:40:05
 * @LastEditTime: 2021-03-16 16:37:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CheZaiAd\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Element from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
let echarts = require('echarts')

Vue.config.productionTip = false;
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
