import DialogComponent from "./../composable/Dialog.vue";

export const initGlobalComponent = (initApp) => {
    initApp.component("Dialog", DialogComponent);
};
