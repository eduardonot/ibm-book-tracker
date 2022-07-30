import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'auth',
    component: () => import('./../layouts/AuthLayout.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('./../views/LoginView.vue')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('./../views/RegisterView.vue')
      }
    ]
  },
  {
    path: '/app',
    name: 'app',
    component: () => import('./../layouts/AppLayout.vue'),
    children: [
      {
        path: '',
        name: 'books',
        component: () => import('./../views/BooksView.vue')
      },
      {
        path: 'userbooks',
        name: 'userbookview',
        component: () => import('./../views/UserBookView.vue')
      }
    ]
  },
  {
    path: '*',
    component: () => import('./../layouts/AuthLayout.vue'),
    children: [
      {
        path: '',
        name: 'notfound',
        component: () => import('./../views/NotFoundView.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
