import { createRouter, createWebHistory } from "vue-router";

import moduleName from '../views/Module.vue'
import Home from "../views/Home.vue";

const route = [
    {
        path: "/",
        component: moduleName,
        children: [
            {
                path: "",
                name: "home",
                component: Home,
            },
            {
                path: "/admin",
                name: "admin",
                component: () => import("../views/Admin.vue"),
            },
            {
                path: "/login",
                name: "login",
                components: {
                    default: Home,
                    dialog: () => {
                        return import("../components/Login.vue");
                    },
                },
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory("./"),
    routes: route,
});

export default router;
