import Vue from 'vue'
import Vuex from 'vuex'
import book from './plugins/book'
import category from './plugins/category'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    book,
    category
  }
})
