import Vue from 'vue'
import App from './App'
import store from './common/store'

Vue.config.productionTip = false

// 挂载到全局vue实例上, 在页面中可以使用this.$request调用request实例下相应方法

// request请求集中
// Vue.prototype.request = request;

// nvue全局变量
Vue.prototype.store = store;

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
