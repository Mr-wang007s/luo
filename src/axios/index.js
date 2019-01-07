// 引入vue框架
import Vue from 'vue'
// 引入资源请求插件
import axios from 'axios'
// 使用资源请求插件
Vue.prototype.$axios = axios
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
export default{
}
