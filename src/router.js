import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/home/Home.vue'
import Appraisal from './components/appraisal/Appraisal.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{ path: '/appraisal', name: 'home', component: Appraisal }]
    }
  ]
})
