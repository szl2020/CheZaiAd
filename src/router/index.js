import Vue from 'vue';
import Router from 'vue-router';
import layout from '../views/layout'
import exanine from '../views/exanine'
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
          component:exanine
        }
      ]
    }
  ],
});
