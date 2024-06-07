<template>
    <div
        :class="[
            isActive ? 'bg-red-600' : 'bg-white',
            'shadow-lg bg-clip-border rounded-md w-[20%] h-full flex justify-center items-center flex-col cursor-pointer',
        ]"
    >
        <Icon
            :icon="iconName"
            :class="[
                isActive ? 'text-slate-100' : 'text-slate-700',
                'text-[24px] mb-2',
            ]"
        />
        <span
            :class="[
                isActive ? 'text-slate-100' : 'text-slate-700',
                'font-bold text-[16px]',
            ]"
            >{{ title }}</span
        >
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
        iconName: String,
        isActive: Boolean,
    },
};
</script>

<style lang="scss" scoped></style>
