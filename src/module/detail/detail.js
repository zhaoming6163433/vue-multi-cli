import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import ELEMENTUI from 'element-ui'
import vueutil from '../../util/vueutil.js'
import '../../../static/css/element-ui/lib/theme-chalk/index.css'

Vue.use(VueResource);
Vue.use(ELEMENTUI);
Vue.use(vueutil);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
