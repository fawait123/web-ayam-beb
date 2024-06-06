import {
    createMemoryHistory,
    createRouter,
    createWebHistory,
} from "vue-router";
import routes from "./pages";

const router = createRouter({
    history: createWebHistory(),
    routes,
    mode: "history",
});

export default router;
