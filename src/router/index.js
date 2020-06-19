import Vue from 'vue'
import VueRouter from 'vue-router'
import Introduction from '../views/introduction'
import Exhibition from '../views/exhibition'

Vue.use(VueRouter)

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/introduction'
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: Introduction
    },
    {
      path: '/exhibition',
      name: 'exhibition',
      component: Exhibition
    }
  ]
})

export default router
