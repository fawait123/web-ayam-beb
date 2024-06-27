<template>
    <div>
        <div class="w-full h-screen bg-white relative">
            <!-- Sidebar -->
            <div
                :class="[isSidebarMini ? 'w-[60px]' : 'w-[200px]', 'fixed top-0 left-0 bottom-0 bg-white border p-2 flex-col items-center transition-all sm:flex z-1']">
                <img src="/assets/images/logo.png" alt="" class="w-[40px]" />
                <div class="w-full h-full mt-6 flex flex-col items-stretch">
                    <div>
                        <li v-for="menu in menuList" :key="menu.title" @mouseenter="onMouseEnter(menu.title)"
                            :title="menu.title" @click="onClickMenu(menu.routeName)"
                            @mouseleave="onMouseLeave(menu.title)"
                            :class="[currentRouteName?.toLowerCase().includes(menu.routeName?.toLowerCase()) ? 'bg-red-500 text-slate-50' : 'hover:bg-red-500 hover:text-slate-50 transition-all text-slate-600', 'relative list-none  rounded-md p-2  w-full flex justify-start items-center cursor-pointer my-4']">
                            <Icon :icon="menu.icon" class="text-[24px]" />
                            <span class="text-[14px] font-normal ml-2" v-show="!isSidebarMini">{{ menu.title }}</span>
                        </li>
                    </div>
                    <div class="flex-col flex-1 flex justify-end items-center">
                        <div class="mb-[50px]">
                            <li
                                class="relative list-none  rounded-md p-2 transition-all  w-full flex justify-start items-center cursor-pointer my-4">
                                <span class="text-center cursor-default text-[14px] font-bold">v.1.1</span>
                            </li>
                            <li @click="showModal"
                                class="relative list-none hover:bg-red-500 hover:text-white  rounded-md p-2  w-full flex justify-start items-center cursor-pointer my-4">
                                <Icon icon="mdi:logout" class="text-[24px]" />
                            </li>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Main Content -->
            <main
                :class="[isSidebarMini ? '' : 'sm:ml-[200px]', 'ml-[60px] relative bg-white h-screen transition-all z-0']">
                <!-- Top Bar -->
                <div
                    :class="[isSidebarMini ? '' : 'sm:ml-[200px]', 'ml-[60px] fixed top-0 left-0 right-0 bg-white border-b-[1px] p-4 z-20 transition-all flex justify-between items-center']">
                    <div class="flex items-center justify-start">
                        <Icon icon="mdi:home" class="text-[24px] text-red-500" />
                        <h1 class="text-red-500 font-medium ml-2">Dashboard</h1>
                        <div class="flex justify-center items-center" v-for="(row, index) in breadCrum" :key="row">
                            <Icon icon="mdi:arrow-right" class="mx-2" />
                            <h1
                                :class="[(index + 1) == breadCrum.length ? 'text-slate-500 ' : 'text-red-500', 'font-medium capitalize']">
                                {{ row
                                }}
                            </h1>
                        </div>
                    </div>
                    <div class="mr-5">
                        <div class="w-[40px] h-[40px] rounded-full bg-red-500 overflow-hidden border border-red-500 cursor-pointer relative"
                            @click="toggleDropdown('profileDropDown')">
                            <img src="/assets/images/avatar.jpg" alt="" class="w-full h-full object-contain">
                        </div>
                        <div class="p-[20px] bg-white shadow-lg rounded-lg absolute right-6 transition-all hidden"
                            id="profileDropDown">
                            <div class="flex items-center justify-start">
                                <div
                                    class="w-[40px] h-[40px] rounded-full bg-red-500 overflow-hidden border flex justify-center items-center border-red-500 cursor-pointer">
                                    <img src="/assets/images/avatar.jpg" alt="" class="w-full h-full object-contain">
                                </div>
                                <div class="ml-3 flex justify-center items-start flex-col">
                                    <span class="text-[14px] font-bold">Achmad Fawait</span>
                                    <span class="text-[14px] font-light">Administrator</span>
                                </div>
                            </div>
                            <hr class="border-slate-300 rounded-full my-3">
                            <li
                                class="list-none flex justify-start items-center cursor-pointer my-[18px] hover:text-red-500 transition-all">
                                <Icon icon="mdi:tune-variant" class="size-[16px] font-bold mr-2" />
                                <span class="text-[12px] font-semibold">Profile Menu</span>
                            </li>
                            <li
                                class="list-none flex justify-start items-center cursor-pointer my-[18px] hover:text-red-500 transition-all">
                                <Icon icon="mdi:help" class="size-[16px] font-bold mr-2" />
                                <span class="text-[12px] font-semibold">Help Center</span>
                            </li>
                            <li
                                class="list-none flex justify-start items-center cursor-pointer my-[18px] hover:text-red-500 transition-all">
                                <Icon icon="mdi:lightbulb-on-80" class="size-[16px] font-bold mr-2" />
                                <span class="text-[12px] font-semibold">Dark Mode</span>
                            </li>
                            <li
                                class="list-none flex justify-start items-center cursor-pointer my-[18px] hover:text-red-500 transition-all">
                                <Icon icon="mdi:upload" class="size-[16px] font-bold mr-2" />
                                <span class="text-[12px] font-semibold">Upgrade Plan</span>
                            </li>
                            <hr class="border-slate-300 rounded-full">
                            <li
                                class="list-none flex justify-start items-center cursor-pointer mt-[18px] hover:text-red-500 transition-all">
                                <Icon icon="mdi:logout" class="size-[16px] font-bold mr-2" />
                                <span class="text-[12px] font-semibold">Sign Out</span>
                            </li>
                        </div>
                    </div>
                </div>
                <!-- Main Content -->
                <div class="pt-[115px] p-4">
                    <router-view />
                </div>
            </main>
        </div>
        <Dialog title="Keluar Sekarang ?"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, illum."
            :isShow="showModalLogout" okText="Lanjutkan" cancelText="Batal" :onCancel="closeModal" :onNext="onLogout" />
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { onMounted, ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router"
import Cookies from "js-cookie";

const showModalLogout = ref(false)

const showModal = () => {
    showModalLogout.value = !showModalLogout.value
}

const closeModal = () => {
    showModalLogout.value = false
}

const onLogout = () => {
    Cookies.remove("token")
    Cookies.remove("user")
    router.push({ name: "Login" })
}

const route = useRoute()
const router = useRouter()
const currentRouteName = ref("")
const breadCrum = ref("")

watchEffect(() => {
    breadCrum.value = route.path.split("/").filter((el) => el != "")
})

const onClickMenu = (name) => {
    router.push({ name })
}

watchEffect(() => {
    currentRouteName.value = route.name
})

const isSidebarMini = ref(true);

const menuList = ref([
    {
        icon: "mdi:home",
        title: "Dashboard",
        isActive: true,
        showTooltip: false,
        routeName: "Dashboard"
    },
    {
        icon: "mdi:account-key",
        title: "User",
        isActive: false,
        showTooltip: false,
        routeName: "User"
    },
    {
        icon: "mdi:silverware",
        title: "Produk",
        isActive: false,
        showTooltip: false,
        routeName: "Product"
    },
    {
        icon: "mdi:clipboard-list",
        title: "Kategori",
        isActive: false,
        showTooltip: false,
        routeName: "Category"
    },
    {
        icon: "mdi:fingerprint",
        title: "Absensi",
        isActive: false,
        showTooltip: false,
        routeName: "Precence"
    },
    {
        icon: "mdi:network-pos",
        title: "POS",
        isActive: false,
        showTooltip: false,
        routeName: "POS"
    },
    {
        icon: "mdi:chart-bar",
        title: "Laporan",
        isActive: false,
        showTooltip: false,
        routeName: "Report"
    },
])

const onMouseEnter = (title) => {
    console.log(title)
    const findIndex = menuList.value.findIndex((el) => el.title == title);
    if (findIndex !== -1) {
        menuList.value[findIndex].showTooltip = true;
    }
    console.log(menuList.value);
}

const onMouseLeave = (title) => {
    console.log(title)
    const findIndex = menuList.value.findIndex((el) => el.title == title);
    if (findIndex !== -1) {
        menuList.value[findIndex].showTooltip = false;
    }
    console.log(menuList.value);
}



</script>
