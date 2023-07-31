import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('../views/Home.vue'),
    children:[
      {
        path: '', name: 'home', component: ()=>import('../views/About.vue'),
      },
      {
        path: '/user', name: 'User', component: ()=>import('../views/User.vue'),
      },
      {
        path: '/file', name: 'File', component: ()=>import('../views/File.vue'),
      },
      {
        path: '/map', name: 'Map', component: ()=>import('../views/Map.vue'),
      },
      {
        path: '/role', name: 'Role', component: ()=>import('../views/Role.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('../views/front/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: ()=>import('../views/front/Register.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
