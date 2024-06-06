import "./bootstrap";
// import "tailwindcss";
import { createApp } from "vue";
import App from "./src/App.vue";

const initApp = createApp(App);

import ExampleComponent from "./components/ExampleComponent.vue";
import router from "./src/router";
initApp.component("example-component", ExampleComponent);

initApp.use(router);
initApp.mount("#app");
