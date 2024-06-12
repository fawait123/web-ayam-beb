<template>
    <div class="w-full flex gap-4 flex-wrap justify-between flex-col md:flex-row">
        <div v-for="category in listCategories" :key="category.title"
            :class="[category.isActive ? 'bg-red-500' : 'bg-white', 'flex-1 md:flex-auto shadow-md rounded-md p-4 flex flex-col justify-center items-center cursor-pointer']">
            <Icon :icon="category.iconName"
                :class="[category.isActive ? 'text-white' : 'text-slate-500', 'text-[50px]']" />
            <h1 :class="[category.isActive ? 'text-white' : 'text-slate-500', 'text-lg font-bold']">{{ category.title
                }}</h1>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from "vue"

const listCategories = ref([
    {
        title: "Makanan",
        isActive: true,
        iconName: "mdi:pasta"
    },
    {
        title: "Minuman",
        isActive: false,
        iconName: "mdi:food"
    },
    {
        title: "Paket",
        isActive: false,
        iconName: "mdi:package-variant"
    },
    {
        title: "Lain Lain",
        isActive: false,
        iconName: "mdi:apps"
    }
])

</script>

<style lang="scss" scoped></style>
