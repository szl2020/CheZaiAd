/*
 * @Author: your name
 * @Date: 2021-03-15 16:40:05
 * @LastEditTime: 2021-03-16 14:42:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CheZaiAd\src\router\index.js
 */
import Vue from 'vue';
import Router from 'vue-router';
import layout from '../views/layout'
Vue.use(Router);

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      component:layout,
      children:[
        {
          path:'/exanine',
          component:resolve=>require(['../views/exanine'],resolve)
        },
        {
          path:'/appealmanagement',
          component:resolve=>require(['../views/appealmanagement'],resolve)
        }
      ]
    }
  ],
});
