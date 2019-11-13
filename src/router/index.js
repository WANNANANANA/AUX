import Vue from 'vue'
import VueRouter from 'vue-router'
import Introduction from '../views/introduction'
import Exhibition from '../views/exhibition'
import Visition from '../views/visition'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'introduction',
      component: Introduction
    },
    {
      path: '/exhibition',
      name: 'exhibition',
      component: Exhibition
    },
    {
      path: '/visition',
      name: 'visition',
      component: Visition
    }
  ]
})

export default router
