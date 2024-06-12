<template>
    <div
        :class="[props.isShow ? '' : 'hidden', 'bg-transparent rounded-md shadow-md p-6 fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-baseline transition-all animate-modal']">
        <div class="bg-white rounded-md shadow-md p-4 w-full md:w-[45%] sm:w-[55%] lg:w-[35%] xl:w-[25%]">
            <div class="mb-4">
                <h1 class="text-[20px] font-bold">{{ props.title }}</h1>
            </div>
            <div>
                <p class="text-[12px] font-semibold">{{ props.description }}</p>
            </div>
            <div class="flex justify-end items-center">
                <div class="flex gap-3 mt-6">
                    <button @click="props.onNext"
                        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button">
                        {{ props.okText }}
                    </button>
                    <button @click="props.onCancel"
                        class="select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                        {{ props.cancelText }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    title: String,
    description: String,
    isShow: Boolean,
    onNext: Function,
    onCancel: Function,
    okText: String,
    cancelText: String
})
</script>

<style lang="scss" scoped></style>
