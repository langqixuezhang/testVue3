import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../page/home/index'
import Login from '../page/home/login'

const routes = [
  {
    path: '/',
    beforeEnter: (to, from, next) => {
      if (to.path === '/') {
        next('/home/loge')
      } else next()
    }
  }, {
    path: '/loge',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (to.path === '/login') {
        next('home/loge')
      }else next()
    }
  }, {
    path: '/home/',
    name: 'home',
    component: Home,
    children: [{
      path: 'login',
      component: Login
    }]
   }
]

const router = createRouter({
  base: process.env.BASE_URL,
  history: createWebHashHistory(),
  routes
})

export default router