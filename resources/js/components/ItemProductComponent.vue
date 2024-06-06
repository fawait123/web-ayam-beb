<template>
    <div
        class="flex h-[450px] flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-[300px] overflow-hidden"
    >
        <div
            class="overflow-hidden text-white shadow-lg bg-clip-border bg-blue-gray-500 shadow-blue-gray-500/40"
        >
            <img
                src="https://www.masakapahariini.com/wp-content/uploads/2023/03/shutterstock_1949306203-500x300.jpg"
                alt="card-image"
                class="object-contain"
            />
        </div>
        <div class="p-6">
            <h5
                class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"
            >
                {{ title }}
            </h5>
            <h4 class="mt-2 mb-2">
                IDR {{ price.toLocaleString("id", "ID") }}
            </h4>
            <p
                class="block font-sans antialiased font-light leading-relaxed text-inherit text-[12px]"
            >
                {{ description }}
            </p>
        </div>
        <div class="p-6 pt-0">
            <button
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full flex justify-between items-center"
                type="button"
            >
                Add To Cart
                <Icon icon="mdi:cart-plus" class="text-[18px] ml-3" />
            </button>
        </div>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
    components: {
        Icon,
    },
    props: {
        title: String,
        price: Number,
        description: String,
    },
};
</script>

<style lang="scss" scoped></style>
