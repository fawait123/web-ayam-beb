<template>
    <div
        class="pt-[15px] pb-[15px] pl-[20px] pr-[20px] flex justify-between bg-white shadow-md bg-clip-border border"
    >
        <div class="flex items-center w-[27%] justify-between">
            <h1>HEADER</h1>
            <div class="w-72">
                <div class="relative h-10 w-full min-w-[200px]">
                    <input
                        type="email"
                        placeholder="Email Address"
                        class="peer h-full w-full rounded-[7px] !border !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                    />
                </div>
            </div>
        </div>
        <div class="flex justify-between items-center w-[22%]">
            <div class="flex items-center justify-between">
                <Icon class="text-slate-600" icon="mdi:calendar" />
                &nbsp;&nbsp;
                <span class="text-slate-600 text-[12px] font-light"
                    >October 18th 2002, 10:00AM</span
                >
            </div>
            <button
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
            >
                Button
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
};
</script>

<style lang="scss" scoped></style>
