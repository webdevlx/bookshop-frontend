import axios from './axios'

export default {
  state: {
    categories: {
      modules: [],
      totalItems: 0
    }
  },
  mutations: {
    UPDATE_CATEGORIES(state, data) {
      state.categories.modules = data['hydra:member'],
        state.categories.totalItems = data['hydra:totalItems']
    }
  },
  actions: {
    fetchCategories(context) {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:8505/api/categories')
          .then((response) => {
            context.commit("UPDATE_CATEGORIES", response.data)
            resolve()
          })
          .catch(() => {
            reject()
          })
      })
    }
  },
  getters: {
    getCategories(state) {
      return state.categories.modules
    }
  }
}