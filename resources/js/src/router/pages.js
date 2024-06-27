const routes = [
    {
        path: "/",
        name: "Login",
        component: () => import("./../views/LoginView.vue"),
        meta: {
            requiredAuth: false,
        },
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
        meta: {
            requiredAuth: true,
        },
    },
    {
        path: "/user",
        component: () => import("./../layouts/Main.vue"),
        children: [
            {
                path: "",
                name: "User",
                component: () => import("../views/user/UserView.vue"),
            },
            {
                path: "create",
                name: "UserCreate",
                component: () => import("../views/user/UserCreateView.vue"),
            },
        ],
        meta: {
            requiredAuth: true,
        },
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
        meta: {
            requiredAuth: true,
        },
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
        meta: {
            requiredAuth: true,
        },
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
        meta: {
            requiredAuth: true,
        },
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
        meta: {
            requiredAuth: true,
        },
    },
    {
        path: "/profile",
        name: "Profile",
        component: () => import("./../views/ProfileView.vue"),
        meta: {
            requiredAuth: true,
        },
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
        meta: {
            requiredAuth: true,
        },
    },
];

export default routes;
