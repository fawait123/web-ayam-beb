// store.js
import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", {
    state: () => {
        return { loading: false };
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        setLoading(value) {
            this.loading = value;
        },
    },
});
