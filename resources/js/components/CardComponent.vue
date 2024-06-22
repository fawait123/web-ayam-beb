<template>
    <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div class="p-6">
            <h5
                class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center">
                {{ title }}
            </h5>
            <slot></slot>
        </div>
        <ButtonComponentVue title="LOGIN" :onClickButton="onClickButton" />
    </div>
</template>

<script>
import ButtonComponentVue from "./ButtonComponent.vue";
export default {
    props: {
        title: String,
        onClickButton: Function
    },
    components: {
        ButtonComponentVue,
    },
    methods: {
    },
};
</script>

<style lang="scss" scoped></style>
