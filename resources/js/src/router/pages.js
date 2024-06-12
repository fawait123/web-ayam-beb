const routes = [
    {
        path: "/",
        name: "Login",
        component: () => import("./../views/LoginView.vue"),
    },
    {
        path: "/dashboard",
        component: () => import("./../layouts/Main.vue"),
        children: [
            {
                path: "",
                name: "Dashboard",
                component: () => import("./../views/DashboardView.vue"),
            },
        ],
    },
    {
        path: "/user",
        component: () => import("./../layouts/Main.vue"),
        children: [
            {
                path: "",
                name: "User",
                component: () => import("./../views/UserView.vue"),
            },
        ],
    },
    {
        path: "/product",
        component: () => import("./../layouts/Main.vue"),
        children: [
            {
                path: "",
                name: "Product",
                component: () => import("./../views/ProductView.vue"),
            },
        ],
    },
    {
        path: "/category",
        component: () => import("./../layouts/Main.vue"),
        children: [
            {
                path: "",
                name: "Category",
                component: () => import("./../views/CategoryView.vue"),
            },
        ],
    },
    {
        path: "/precence",
        component: () => import("./../layouts/Main.vue"),
        children: [
            {
                path: "",
                name: "Precence",
                component: () => import("./../views/CategoryView.vue"),
            },
        ],
    },
    {
        path: "/report",
        component: () => import("./../layouts/Main.vue"),
        children: [
            {
                path: "",
                name: "Report",
                component: () => import("./../views/CategoryView.vue"),
            },
        ],
    },
    {
        path: "/profile",
        name: "Profile",
        component: () => import("./../views/ProfileView.vue"),
    },
    {
        path: "/pos",
        component: () => import("./../layouts/Main.vue"),
        children: [
            {
                path: "",
                name: "POS",
                component: () => import("./../views/PosView.vue"),
            },
        ],
    },
];

export default routes;
