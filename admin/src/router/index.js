import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import http from '../http'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/categories/create',
        component: () => import('../views/CategoryEdit.vue')
      },
      {
        path: '/categories/list',
        component: () => import('../views/CategoryList.vue')
      },
      {
        path: '/categories/edit/:id',
        component: () => import('../views/CategoryEdit.vue'),
        props: true
      },


      {
        path: '/items/create',
        component: () => import('../views/ItemEdit.vue')
      },
      {
        path: '/items/list',
        component: () => import('../views/ItemList.vue')
      },
      {
        path: '/items/edit/:id',
        component: () => import('../views/ItemEdit.vue'),
        props: true
      },


      {
        path: '/heroes/create',
        component: () => import('../views/HeroEdit.vue')
      },
      {
        path: '/heroes/list',
        component: () => import('../views/HeroList.vue')
      },
      {
        path: '/heroes/edit/:id',
        component: () => import('../views/HeroEdit.vue'),
        props: true
      },

      {
        path: '/articles/create',
        component: () => import('../views/ArticleEdit.vue')
      },
      {
        path: '/articles/list',
        component: () => import('../views/ArticleList.vue')
      },
      {
        path: '/articles/edit/:id',
        component: () => import('../views/ArticleEdit.vue'),
        props: true
      },

      {
        path: '/ads/create',
        component: () => import('../views/AdEdit.vue')
      },
      {
        path: '/ads/list',
        component: () => import('../views/AdList.vue')
      },
      {
        path: '/ads/edit/:id',
        component: () => import('../views/AdEdit.vue'),
        props: true
      },

      {
        path: '/admin_users/create',
        component: () => import('../views/AdminUserEdit.vue')
      },
      {
        path: '/admin_users/list',
        component: () => import('../views/AdminUserList.vue')
      },
      {
        path: '/admin_users/edit/:id',
        component: () => import('../views/AdminUserEdit.vue'),
        props: true
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: {isPublic: true },
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  (async () => {
    const token = localStorage.token
    const res = await http.post('verify',{token})
    var auth = res.data
    if (!to.meta.isPublic && !auth) {   
      next('/login')
    }
    next()
  })()
})

export default router
