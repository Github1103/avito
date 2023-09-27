import {createRouter, createWebHashHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import routerDemo from './router-demo'

const routes: RouteRecordRaw[] = [
    {path: '/', component: () => import('@views/index.vue')},
    {path: '/hello-world', component: () => import('@views/hello-world/hello-vite-vue.vue')},
    ...routerDemo
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

