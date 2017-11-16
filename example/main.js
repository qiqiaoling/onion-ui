// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Onion from '../src/index'
import App from './App.vue'

import Button from './pages/button.vue'
import Checkbox from './pages/checkbox.vue'
import CheckboxGroup from './pages/checkbox-group.vue'

Vue.use(Onion)
Vue.use(VueRouter)

const routes = [
  {
    path: '/button',
    component: Button
  },
  {
    path: '/checkbox',
    component: Checkbox
  },
  {
    path: '/checkbox-group',
    component: CheckboxGroup
  }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  render(createElement) {
    return createElement(App)
  }
}).$mount('#app')

