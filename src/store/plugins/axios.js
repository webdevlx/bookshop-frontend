import axios from 'axios'
import store from '../index'

axios.interceptors.request.use(
  function (config) {
    if (config.url !== 'https://lx-bookshop.herokuapp.com/api/users/auth') {
      config.headers.common['Authorization'] = 'Bearer ' + store.getters.getToken
    }
    return config
  },
  function (error) {
    console.log(error)
  }
)

export default axios