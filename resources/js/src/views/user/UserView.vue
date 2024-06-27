<template>
    <div class="bg-white shadow-md rounded-md p-4">
        <div class="mb-[50px] flex-col md:flex-row flex-1 flex justify-between items-start md:items-center gap-4">
            <div class="w-full md:w-[50%]">
                <h3
                    class="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-inherit">
                    Kelola Pengguna
                </h3>
                <p class="text-justify block font-sans text-sm antialiased font-light leading-normal text-inherit">
                    Material Tailwind is an easy to use components library for Tailwind CSS and
                    Material Design. It provides a simple way to customize your components, you
                    can change the colors, fonts, breakpoints and everything you need.
                </p>
            </div>
            <button @click="addUser"
                class="align-middle text-[18px] select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-3"
                type="button">
                <Icon icon="mdi:user-plus" class="text-[20px]" />
                Tambah Pengguna
            </button>
        </div>
        <DataTable :column="dataTable.column" :data="dataTable.data" :page="dataTable.page" :limit="dataTable.limit"
            :total="dataTable.total" :onSearch="onSearch" :onLimit="onLimit" :onPrev="onPrev" :onNext="onNext">
            <template #name="{ row }">
                <div class="flex items-center gap-3">
                    <img :src="['https://imageplaceholder.net/600x400/eeeeee/DC5F00?text=' + row.name[0]]"
                        alt="John Michael"
                        class="relative inline-block h-9 w-9 !rounded-full object-cover object-center" />
                    <div class="flex flex-col">
                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                            {{ row.name }}
                        </p>
                        <p
                            class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                            {{ row.email }}
                        </p>
                    </div>
                </div>
            </template>
            <template #username="{ row }">
                <span>{{ row.username }}</span>
            </template>
            <template #email="{ row }">
                <span>{{ row.email }}</span>
            </template>
            <template #email_verified_at="{ row }">
                <div class="w-max">
                    <div
                        :class="['relative grid items-center px-2 py-1 font-sans text-xs font-bold  uppercase rounded-md select-none whitespace-nowrap ', row.email_verified_at ? 'bg-green-500/20 text-green-900' : 'bg-red-500/20 text-red-900']">
                        <span class="">{{ row.email_verified_at ? 'Verifikasi' : 'Belum Verifikasi' }}</span>
                    </div>
                </div>
            </template>
            <template #action="{ row }">
                <div class="flex gap-3 items-center justify-center">
                    <button @click="onShow(row.id)"
                        class="relative h-10 max-h-[40px] w-10 max-w-[40px] flex items-center justify-center select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                        <Icon icon="mdi:eye" class="text-[16px] text-gray-500" />
                    </button>
                    <button @click="onEdit(row.id)"
                        class="relative h-10 max-h-[40px] w-10 max-w-[40px] flex items-center justify-center select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-900 transition-all hover:bg-blue-900/10 active:bg-blue-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                        <Icon icon="mdi:edit" class="text-[16px] text-blue-500" />
                    </button>
                    <button @click="onDelete(row.id, row.name)"
                        class="relative h-10 max-h-[40px] w-10 max-w-[40px] flex items-center justify-center select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-red-900 transition-all hover:bg-red-900/10 active:bg-red-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                        <Icon icon="mdi:trash" class="text-[16px] text-red-500" />
                    </button>
                </div>
            </template>
        </DataTable>
        <Dialog title="Hapus Data ?" :description="dataDelete.description" :isShow="showModal" okText="Lanjutkan"
            cancelText="Batal" :onCancel="closeModal" :onNext="handleDelete" />
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { toast } from '@steveyuowo/vue-hot-toast';
import doRequest from "./../../../utils/doRequest"
import { onMounted, ref } from "vue"
import { useLoadingStore } from '../../store/loadingStore';
import { useRouter } from "vue-router"
const router = useRouter()

const dataTable = ref({
    page: 1,
    limit: 10,
    total: 0,
    search: null,
    data: [],
    column: [
        {
            title: "Nama",
            key: "name"
        },
        {
            title: "Username",
            key: "username"
        },
        {
            title: "Email",
            key: "email"
        },
        {
            title: "Verifikasi Email",
            key: "email_verified_at"
        },
        {
            title: "Action",
            key: "action"
        },
    ]
})

const showModal = ref(false)
const dataDelete = ref({
    id: null,
    description: null
})
const loadingStore = useLoadingStore()

onMounted(() => {
    fetchData()
});

const closeModal = () => {
    dataDelete.value.id = null;
    dataDelete.value.description = null
    showModal.value = false;
}

const onDelete = (id, name) => {
    dataDelete.value.id = id;
    dataDelete.value.description = "Apakah kamu yakin ingin menghapus data " + name + " ?"
    showModal.value = true
}

const handleDelete = () => {
    console.log("handle delete")
}

const addUser = () => {
    router.push({ name: "UserCreate" })
}
const onSearch = (value) => {
    dataTable.value.search = value.target.value
    fetchData()
}
const onLimit = (value) => {
    dataTable.value.limit = value.target.value
    fetchData()
}
const onPrev = () => {
    dataTable.value.page = dataTable.value.page - 1
    fetchData()
}
const onNext = () => {
    dataTable.value.page = dataTable.value.page + 1
    fetchData()
}

const onEdit = (id) => {
    router.push({ name: "UserCreate", query: { edit: true, id } })
}

const onShow = (id) => {
    router.push({ name: "UserCreate", query: { show: true, id } })
}
const fetchData = async () => {
    loadingStore.setLoading(true)
    try {
        const result = await doRequest({
            url: "/api/user",
            params: {
                search: dataTable.value.search,
                page: dataTable.value.page,
                limit: dataTable.value.limit
            }
        })

        const data = result.data.data
        dataTable.value.page = data.page
        dataTable.value.total = data.total
        dataTable.value.limit = data.limit
        dataTable.value.data = data.data
        loadingStore.setLoading(false)
    } catch (error) {
        loadingStore.setLoading(false)
        toast({ message: error?.message, type: "error" })
    }
}
</script>

<style lang="scss" scoped></style>
