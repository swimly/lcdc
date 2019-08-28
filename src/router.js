import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: Home
    },
    {
      path: '/index',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/design',
      component: () => import('@/views/design/index.vue')
    },
    {
      path: '/login',
      component: () => import('@/views/auth/login.vue')
    },
    {
      path: '/article',
      component: () => import('@/views/article/index.vue')
    },
    {
      path: '/article/publish',
      component: () => import('@/views/article/publish.vue')
    },
    {
      path: '/article/:id',
      component: () => import('@/views/article/detail.vue')
    },
    {
      path: '/component',
      component: () => import('@/views/component/index.vue')
    },
    {
      path: '/component/publish',
      component: () => import('@/views/component/publish.vue')
    },
    {
      path: '/center',
      component: () => import('@/views/center/home.vue'),
      redirect: '/center/info',
      children: [{
        path: '/center/info',
        components: {
          center: () => import('@/views/center/info.vue')
        }
      }, {
        path: '/center/structure',
        components: {
          center: () => import('@/views/center/structure.vue')
        }
      }, {
        path: '/center/articletype',
        components: {
          center: () => import('@/views/center/articleType.vue')
        }
      }, {
        path: '/center/component',
        components: {
          center: () => import('@/views/center/component.vue')
        }
      }]
    }
  ]
})
