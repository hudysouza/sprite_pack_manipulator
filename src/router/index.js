import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import MainLayout from '../layouts/mainLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
