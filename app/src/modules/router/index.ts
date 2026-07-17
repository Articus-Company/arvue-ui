import { createRouter, createWebHistory } from 'vue-router'
import { HomePage } from '@/pages'

const router = createRouter({
    history: createWebHistory(window.appUrl),
    routes: [
        {
            path: '/',
            component: HomePage,
            name: 'home',
        },
    ],
})

export {
    router,
}
