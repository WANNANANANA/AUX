import Vue from 'vue'
import VueRouter from 'vue-router'
import Introduction from '../views/introduction'
import Exhibition from '../views/exhibition'
import Visition from '../views/visition'
import Part from '../components/part'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/introduction'
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: Introduction,
      children: [
        {
          path: 'part/:id',
          component: Part
        }
      ]
    },
    {
      path: '/visition',
      name: 'visition',
      component: Visition
    },
    {
      path: '/exhibition',
      name: 'exhibition',
      component: Exhibition,
      children: [
        {
          path: 'part/:id',
          component: Part
        }
      ]
    }
  ]
})

export default router
