import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import RegistrationPage from '../views/RegistrationPage.vue'
import StudentPage from '../views/StudentPage.vue'
import TeacherPage from '../views/TeacherPage'
import AdminPage from '../views/AdminPage'

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
  {
    path: '/student',
    name: 'StudentPage',
    component: StudentPage
  },
  {
    path: '/teacher',
    name: 'TeacherPage',
    component: TeacherPage
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

