import Vue from 'vue'
import VueRouter from 'vue-router'

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
                path: '/user', name: 'User', component: () => import('../views/manage/User.vue'),
            },
            {
                path: '/file', name: 'File', component: () => import('../views/manage/File.vue'),
            },
            {
                path: '/map', name: 'Map', component: () => import('../views/Map.vue'),
            },
            {
                path: '/role', name: 'Role', component: () => import('../views/manage/Role.vue'),
            },
            {
                path: '/event', name: 'Event', component: () => import('../views/manage/Event.vue'),
            },
            {
                path: '/chat', name: 'Chat', component: () => import('../views/cserve/Chat.vue')
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
        path: '/404',
        name: '404',
        component: () => import ('../views/404.vue')
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
    },
    {
        path: '*',//匹配未定义的路由
        redirect: '/404'//重定向
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
