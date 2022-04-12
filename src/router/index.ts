import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/build',
    name: 'build',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/BuilderView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  // mode: history,
  // base: '/',
  routes,
})

export default router
