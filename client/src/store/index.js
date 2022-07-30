import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import book from './book'
import structure from './structure'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    book,
    structure
  }
})
