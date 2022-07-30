import axios from 'axios'

const config = {
  baseURL: process.env.VUE_APP_BASE_URL || 'http://localhost:5000',
  timeout: 60 * 1000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token')
  }
}
const instance = axios.create(config)
instance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = localStorage.getItem('token')
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  function (response) {
    if (response.data.token && response.status === 200) {
      localStorage.setItem('token', response.data.token)
    }
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export { instance }
export default axios
