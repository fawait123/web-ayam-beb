<template>
    <div class="mb-2">
        <label for="username" class="font-bold text-slate-500 text-sm">{{
            title
        }}</label>
        <div :class="[className, 'w-full mt-1']">
            <div class="relative h-10 w-full min-w-[200px]">
                <input
                    :type="type"
                    :placeholder="placeholder"
                    class="peer h-full w-full rounded-[7px] !border !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                    onchange="onChageInput"
                />
            </div>
        </div>
        <span v-show="showError" class="text-red-500 text-[11px]">{{
            errorMessage
        }}</span>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        placeholder: String,
        type: String,
        showError: Boolean,
        errorMessage: String,
        onChangeInput: Function,
        className: String,
    },
};
</script>

<style lang="scss" scoped></style>
