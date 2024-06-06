<template>
    <div
        class="rounded-xs border bg-white bg-clip-border items-center justify-between text-gray-700 shadow-lg w-full flex p-2 my-3"
    >
        <p class="text-[12px] font-semibold">{{ name }}</p>
        <p class="text-[11px] font-light">
            {{ price.toLocaleString("id", "ID") }}
        </p>
        <p class="text-[11px] font-light">{{ amount }}x</p>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        price: Number,
        amount: Number,
    },
};
</script>

<style lang="scss" scoped></style>
