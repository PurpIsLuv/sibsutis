import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import registrationData from './registrationData'
import studentPageData from './studentPageData'
import teacherPageData from './teacherPageData'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    registrationData,
    studentPageData,
    teacherPageData,
  }
})
