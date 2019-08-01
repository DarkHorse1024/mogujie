import Vue from 'vue'
import Router from 'vue-router'
import MGjindex from './components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: MGjindex},
  ]
})
