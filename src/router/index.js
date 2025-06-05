import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/clothes",
            name: "clothes",
            component: () => import("../views/ClothesView.vue"),
        },
        {
            path: "/shoes",
            name: "shoes",
            component: () => import("../views/ShoesView.vue"),
        },
        {
            path: "/accessories",
            name: "accessories",
            component: () => import("../views/AccessoriesView.vue"),
        },
    ],
});

export default router;
