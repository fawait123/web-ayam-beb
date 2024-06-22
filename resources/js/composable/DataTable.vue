<template>
    <div>
        <!-- header -->
        <div class="flex justify-between items-center flex-col gap-4 md:flex-row">
            <div class="relative h-10 w-full md:w-[65px] md:min-w-[65px]">
                <select @change="props.onLimit"
                    class="peer h-full w-full md:w-[65px] rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                    <option value="10" :selected="props.limit && props.limit == 10">10</option>
                    <option value="20" :selected="props.limit && props.limit == 20">20</option>
                    <option value="50" :selected="props.limit && props.limit == 50">50</option>
                    <option value="100" :selected="props.limit && props.limit == 100">100</option>
                </select>
                <label
                    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Limit
                </label>
            </div>
            <div class="relative h-10 w-full md:w-72 md:min-w-[200px]">
                <input type="email" placeholder="Email Address" v-on:keyup.enter="onSearch"
                    class="peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50" />
            </div>
        </div>
        <!-- table -->
        <div class="p-6 px-0 overflow-scroll">
            <table class="w-full mt-4 text-left table-auto">
                <thead>
                    <tr>
                        <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50" v-for="column in props.column"
                            :key="column.title">
                            <p
                                class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 opacity-70">
                                {{ column.title }}
                            </p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in props.data" :key="row.id" v-show="props.data.length > 0">
                        <td class="p-4 border-b border-blue-gray-50" v-for="column in props.column">
                            <slot :name="column.key" :row="row"></slot>
                        </td>
                    </tr>
                    <tr>
                        <td class="p-4 border-b border-blue-gray-50 text-center" :colspan="props.column.length"
                            v-show="props.data.length == 0">Data
                            tidak ditemukan</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex items-center justify-between p-4 border-t border-blue-gray-50">
            <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                Page {{ props.page }} of {{ props.total }}
            </p>
            <div class="flex gap-2">
                <button :disabled="props.page == 1 ? true : false" @click="onPrev"
                    class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    Previous
                </button>
                <button :disabled="props.page == props.total ? true : false" @click="onNext"
                    class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    Next
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    page: Number,
    limit: Number,
    total: Number,
    data: Array,
    column: Array,
    onSearch: Function,
    onLimit: Function,
    onPrev: Function,
    onNext: Function
})
</script>

<style lang="scss" scoped></style>
