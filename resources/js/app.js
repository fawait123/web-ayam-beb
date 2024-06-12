// import "./bootstrap";
// import "tailwindcss";
import { createApp } from "vue";
import App from "./src/App.vue";
import router from "./src/router";
import ExampleComponent from "./components/ExampleComponent.vue";
import { initGlobalFunction } from "./utils/globalFunction";
import { initGlobalComponent } from "./utils/globalComponent";

const initApp = createApp(App);
initApp.component("example-component", ExampleComponent);
initGlobalFunction(initApp);
initGlobalComponent(initApp);

initApp.use(router);
initApp.mount("#app");
