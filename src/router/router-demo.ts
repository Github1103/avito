export default [
    {
        path: '/rd',
        component: () => import('@views/router-demo/router-link-view.vue'),
        children: [
            {path: '/rd/home', component: () => import('@views/router-demo/home.vue')},
            {path: '/rd/about', component: () => import('@views/router-demo/about.vue')},
        ]
    },
    {
        path: '/dynamic/:userId', component: () => import('@views/router-demo/dynamic-route.vue')
    }
]
