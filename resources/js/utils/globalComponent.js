import DialogComponent from "./../composable/Dialog.vue";
import DataTable from "./../composable/DataTable.vue";

export const initGlobalComponent = (initApp) => {
    initApp.component("Dialog", DialogComponent);
    initApp.component("DataTable", DataTable);
};
