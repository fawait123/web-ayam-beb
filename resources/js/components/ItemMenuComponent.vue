<template>
    <div
        :class="[
            showIcon ? 'cursor-pointer' : '',
            'flex flex-col items-center justify-center mb-[80px]',
        ]"
    >
        <Icon
            v-show="showIcon"
            :class="[
                isActive ? 'text-red-500 ' : 'text-slate-400',
                'text-[24px]',
            ]"
            :icon="iconName"
        />
        <div
            :class="[
                isActive ? 'text-red-500' : 'text-slate-400',
                'font-bold text-[12px] mt-1',
            ]"
        >
            {{ title }}
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
        iconName: String,
        isActive: Boolean,
        showIcon: Boolean,
    },
};
</script>

<style lang="scss" scoped></style>
