import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ClientList from '../views/ClientList.vue'
import AddClient from '../views/AddClient.vue'
import AddService from '../views/AddService.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import ClientDetails from '../views/ClientDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/clientlist',
    name: 'ClientList',
    component: ClientList
  },
  {
    path: '/addclient',
    name: 'Add Client',
    component: AddClient
  },
  {
    path:'/addservice/:clientId',
    name: 'Add Service',
    component: AddService
  },
  {
    path: '/signup',
    name: "Signup",
    component: Signup
  },
  {
    path: '/login',
    name: "Login Page",
    component: Login
  },
  {
    path: '/clientdetails/:clientId',
    name: 'Client Details',
    component: ClientDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
