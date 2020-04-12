import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import RegistrationPage from '../views/RegistrationPage.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
