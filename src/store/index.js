import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import render from './render'
import studentPageData from './studentPageData'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    render,
    studentPageData,
  }
})
