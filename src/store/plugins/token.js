import axios from 'axios'

export default {
  actions: {
    fetchToken(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('https://lx-bookshop.herokuapp.com/api/users/auth', data)
        .then(response => {
          console.log(response.data.accessToken)
          localStorage.setItem('token', response.data.accessToken)
          context.commit("UPDATE_TOKEN", response.data.accessToken)
          resolve()
        })
        .catch(() => {
          reject()
        })
      })
    }
  },
  mutations: {
    UPDATE_TOKEN(state, data) {
      state.token = data
    }
  },
  state: {
    token: localStorage.getItem('token') || ''
  },
  getters: {
    getToken(state) {
      return state.token
    }
  }
}