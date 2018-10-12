import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'index', component: () => import ('@/components/index/index') },
    { path: '/home', name: 'home', component: () => import ('@/components/home/home') }
  ]
})
