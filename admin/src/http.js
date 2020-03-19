import axios from 'axios'
import Vue from 'vue'
import router from './router'

const http = axios.create({
   baseURL: process.env.VUE_APP_API_URL || '/admin/api'
  // baseURL: 'http://localhost:3000/admin/api'
})

http.interceptors.response.use((res) => {
  console.log(res);
  return res
}, (err) => {
  if (err.response.data) {
    Vue.prototype.$message({
      message: err.response.data.message,
      type: 'warning'
    })
  }
  if (err.response.status === 401) {
    router.push('/login')
  }
  return Promise.reject(err)
})
http.interceptors.request.use((req) => {
  if (localStorage.token) {
    req.headers.Authorization = 'Bearer ' + localStorage.token
  }
  return req
}, (err) => {
  return Promise.reject(err)
})

export default http