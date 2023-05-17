import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RespiceView from '../views/RespiceView.vue'
import MyRespiceView from '../views/MyRespiceView.vue'
import ShowView from '../views/ShowView.vue'
import LoginView from '../views/LoginView.vue'
import AddView from '../views/AddView.vue'
import UpdateView from '../views/UpdateView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/respices',
    name: 'respice',
    component: RespiceView
  },{
    path: '/add',
    name: 'add',
    component:AddView
  },
  {
    path: '/myrespices',
    name: 'myrespices',
    component: MyRespiceView
  },

  {
    path: '/show/:id',
    name: 'show',
    component: ShowView
  },
  {
    path: '/update/:id',
    name: 'update',
    component: UpdateView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
