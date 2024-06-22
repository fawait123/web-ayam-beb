<template>
    <div>
        <Toaster />
        <loading v-model:active="loadingStore.loading" :can-cancel="true" :is-full-page="true" :loader="Spinner" />
        <router-view />
    </div>
</template>

<script setup>
import { Toaster } from "@steveyuowo/vue-hot-toast";
import Loading from 'vue-loading-overlay';
import Spinner from "./../composable/Spinner.vue"
import { useLoadingStore } from "./store/loadingStore";
const loadingStore = useLoadingStore()
</script>
<style lang="scss" scoped></style>./store/loadingStore
