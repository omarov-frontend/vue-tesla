import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import ModelX from '../views/ModelX'
import Model3 from '../views/Model3'
import ModelRoadster from "../views/ModelRoadster"
import ModelEnergy from "../views/ModelEnergy"
import Login from "../views/Login";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/model-x',
    name: 'ModelX',
    component: ModelX
  },
  {
    path: '/model-3',
    name: 'Model3',
    component: Model3
  },
  {
    path: '/roadster',
    name: 'ModelRoadster',
    component: ModelRoadster
  },
  {
    path: '/energy',
    name: 'ModelEnergy',
    component: ModelEnergy
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
