import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueLocalStorage from 'vue-localstorage'
import VueHead from 'vue-head'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import iView from 'iview'
import Croppa from 'vue-croppa'
import 'vue-croppa/dist/vue-croppa.css'

Vue.config.productionTip = false
Vue.use(VueLocalStorage)
Vue.use(VueHead)
Vue.use(mavonEditor)
Vue.use(iView)
Vue.use(Croppa)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
