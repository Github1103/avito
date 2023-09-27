export default [
    {
        path: '/rd',
        component: () => import('@views/router-demo/link-and-view/router-link-view.vue'),
        children: [
            {path: '/rd/home', component: () => import('@views/router-demo/link-and-view/home.vue')},
            {path: '/rd/about', component: () => import('@views/router-demo/link-and-view/about.vue')},
        ]
    },
    {
        path: '/dynamic/:userId', component: () => import('@views/router-demo/dynamic-router/dynamic-route.vue')
    }
]
