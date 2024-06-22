import { createRouter, createWebHistory } from "vue-router";
import Cookies from "js-cookie";
import routes from "./pages";

const router = createRouter({
    history: createWebHistory(),
    routes,
    mode: "history",
});

router.beforeEach((to, from, next) => {
    const token = Cookies.get("token");
    if (to.meta.requiredAuth && !token) {
        next({ name: "Login" });
    } else {
        if (to.name === "Login" && token) {
            next({ name: "Dashboard" });
        } else {
            next();
        }
    }
});

export default router;
