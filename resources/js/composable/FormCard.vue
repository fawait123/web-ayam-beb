<template>
    <div class="bg-white shadow-md rounded-md p-4">
        <div class="mb-[50px] flex-col md:flex-row flex-1 flex justify-between items-start md:items-center gap-4">
            <div class="w-full md:w-[50%]">
                <h3
                    class="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-inherit">
                    {{ props.title }}
                </h3>
                <p class="text-justify block font-sans text-sm antialiased font-light leading-normal text-inherit">
                    {{ props.description }}
                </p>
            </div>
        </div>
        <div class="flex flex-col gap-9 flex-wrap">
            <slot name="content"></slot>
            <div class="flex gap-3">
                <button @click="back"
                    class="select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    Kembali
                </button>
                <slot name="btn-submit"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router"
import { defineProps } from "vue"
const props = defineProps({
    title: String,
    description: String
})
const router = useRouter()
const back = () => {
    router.back()
}
</script>

<style lang="scss" scoped></style>
