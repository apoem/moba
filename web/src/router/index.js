import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/article/:id',
        name: 'article',
        props:true,
        component: () => import('../views/Article.vue')
      }
    ]
  },
  {
    path: '/hero/:id',
    name: 'Hero',
    props: true,
    component: () => import( '../views/Hero.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
