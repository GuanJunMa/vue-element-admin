import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login')
  }
]

export default new VueRouter({
  // 采用历史模式，可以去除路由中的#
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})