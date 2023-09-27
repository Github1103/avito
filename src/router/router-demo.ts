import RouterLinkView from "@views/router-demo/router-link-view.vue";

export default [
    {
        path: '/rd',
        component: RouterLinkView,
        children: [
            {path: '/home', component: () => import('@views/router-demo/home.vue')},
            {path: '/about', component: () => import('@views/router-demo/about.vue')},
        ]
    }
]
