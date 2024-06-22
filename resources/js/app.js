// import "./bootstrap";
// import "tailwindcss";
import { createApp } from "vue";
import App from "./src/App.vue";
import router from "./src/router";
import ExampleComponent from "./components/ExampleComponent.vue";
import { initGlobalFunction } from "./utils/globalFunction";
import { initGlobalComponent } from "./utils/globalComponent";
import "@steveyuowo/vue-hot-toast/vue-hot-toast.css";
import "vue-loading-overlay/dist/css/index.css";
import { createPinia } from "pinia";
const pinia = createPinia();

const initApp = createApp(App);
initApp.component("example-component", ExampleComponent);
initGlobalFunction(initApp);
initGlobalComponent(initApp);

initApp.use(router);
initApp.use(pinia);
initApp.mount("#app");
