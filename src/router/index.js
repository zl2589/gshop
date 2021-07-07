import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/login.vue')
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import('../views/Login/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home/home.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search/search.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/Order/order.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/Mine/mine.vue')
  },
]

const router = new Router({
  routes,
  base: process.env.BASE_URL
})

router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth) {
    if(store.getters.token) {
      next()
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next()
  }
})

export default router
