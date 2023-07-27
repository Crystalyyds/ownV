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
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('../views/front/Login.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
