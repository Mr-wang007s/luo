import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Mine from '../components/mine'
import login from '../components/login.vue'
import View from '../components/view/view'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'login',
      component: login,
      meta: {
        // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
        index: 0,
        showHeader: false,
        showFooter: false
      }
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      code: '',
      meta: {
        // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
        index: 1,
        showHeader: true,
        showFooter: true
      }
    },
    {
      path: '/view',
      name: 'View',
      component: View,
      code: '',
      meta: {
        // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
        index: 1
      }
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: {
        // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
        index: 1,
        showHeader: true,
        showFooter: true
      }
    }
  ]
})
