import Vue from 'vue'
import VueRouter from 'vue-router'
import Front from "@/views/front/Front.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
        children: [
            {
                path: '', name: 'home', component: () => import('../views/About.vue'),
            },
            {
                path: '/user', name: 'User', component: () => import('../views/User.vue'),
            },
            {
                path: '/file', name: 'File', component: () => import('../views/File.vue'),
            },
            {
                path: '/map', name: 'Map', component: () => import('../views/Map.vue'),
            },
            {
                path: '/role', name: 'Role', component: () => import('../views/Role.vue'),
            },
            {
                path: '/event', name: 'Event', component: () => import('../views/Event.vue'),
            },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/front/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/front/Register.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/front/Home.vue'),
        children: [
            {
                path: 'person/:id', name: 'Person', component: () => import ('../views/Person.vue')
            },
            {
                path: 'content/:id', name: 'Content', component: () => import('../views/front/Content.vue')
            },
        ]
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
