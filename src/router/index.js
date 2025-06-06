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
        {
            path: "/login",
            name: "login",
            component: () => import("../views/LoginView.vue"),
        },
        {
            path: "/dashboard/products",
            name: "products",
            component: () => import("../views/Dashboard/ProductsView.vue"),
            meta: { requiresAuth: true },
        },
        {
            path: "/dashboard/products/add",
            name: "add-product",
            component: () => import("../views/Dashboard/AddProductView.vue"),
            meta: { requiresAuth: true },
        },
        {
            path: "/dashboard/products/update/:id",
            name: "update-product",
            component: () => import("../views/Dashboard/UpdateProductView.vue"),
            meta: { requiresAuth: true },
        },
    ],
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem("authToken");
    if (to.meta.requiresAuth && !isAuthenticated) {
        next({ name: "login" });
    } else {
        next();
    }
});

export default router;