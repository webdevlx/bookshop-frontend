import axios from './axios'

export default {
  state: {
    books: {
      modules: [],
      totalItems: 0
    }
  },
  mutations: {
    UPDATE_BOOKS(state, data) {
      state.books.modules = data['hydra:member'],
        state.books.totalItems = data['hydra:totalItems']
    }
  },
  actions: {
    fetchBooks(context, data) {

      let category = ''
      let page = ''

      if(data.category !== undefined) {
        category = '?category=' + data.category
      }

      if(data.page !== undefined) {
        page = '?page=' + data.page
      }

      return new Promise((resolve, reject) => {
        axios.get('https://lx-bookshop.herokuapp.com/api/books' + category + page)
          .then((response) => {
            context.commit("UPDATE_BOOKS", response.data)
            resolve()
          })
          .catch(() => {
            reject()
          })
      })
    }
  },
  getters: {
    getBooks(state) {
      return state.books.modules
    }
  }
}