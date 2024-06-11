<template>
    <div class="w-full h-screen bg-slate-50 relative">
        <!-- Sidebar -->
        <div
            class="fixed top-0 left-0 bottom-0 w-[60px] bg-white border p-2 flex-col items-center transition-all hidden sm:flex z-10"
            id="sidebar"
        >
            <img src="/assets/logo.png" alt="" class="w-[40px]" />
            <div
                class="mt-2 flex justify-center items-center w-full"
                id="menu-icon"
            >
                <Icon
                    icon="mdi:menu"
                    class="text-[24px] font-bold cursor-pointer"
                    @click="clickMenu"
                />
            </div>
        </div>

        <!-- Main Content -->
        <main
            class="relative bg-white h-screen sm:ml-[60px] ml-0 transition-all z-0"
        >
            <!-- Top Bar -->
            <div
                class="fixed top-0 left-0 right-0 bg-white border-b-[1px] p-4 sm:ml-[60px] z-20 transition-all flex justify-between items-center"
                id="top-bar"
            >
                <div class="flex items-center justify-start bg-blue-200">
                    <Icon icon="mdi:home" class="text-[24px] text-red-500" />
                    <h1 class="text-red-500 font-medium ml-2">Dashboard</h1>
                    <Icon icon="mdi:arrow-right" class="mx-2" />
                    <h1 class="text-slate-500 font-medium">Index</h1>
                </div>
                <div>
                    <h1>profile</h1>
                </div>
            </div>
            <!-- Main Content -->
            <div class="pt-[60px] p-4">
                <h1 class="text-slate-500">Content</h1>
            </div>
        </main>
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

function clickMenu() {
    document.getElementById("sidebar").classList.toggle("w-[200px]");
    document.getElementById("menu-icon").classList.toggle("justify-end");
    document.getElementById("menu-icon").classList.toggle("justify-center");
    document.querySelector("main").classList.toggle("sm:ml-[200px]");
    document.getElementById("top-bar").classList.toggle("sm:ml-[200px]");
}
</script>

<style lang="scss" scoped></style>
