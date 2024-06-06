import DashboardView from "./../views/DashboardView.vue";

const routes = [
    {
        path: "/",
        name: "Login",
        component: () => import("./../views/LoginView.vue"),
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("./../views/DashboardView.vue"),
    },
    {
        path: "/profile",
        name: "Profile",
        component: () => import("./../views/ProfileView.vue"),
    },
    {
        path: "/pos",
        name: "POS",
        component: () => import("./../views/PosView.vue"),
    },
];

export default routes;
