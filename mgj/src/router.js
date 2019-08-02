import Vue from 'vue'
import Router from 'vue-router'
import MGjindex from './components/index'
import MGjCategory  from './components/Category '

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: MGjindex},
    {path: '/Category/:id',component: MGjCategory },
  ]
})
