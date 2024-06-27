<template>
    <FormCard title="Tambah Pengguna" description="Material Tailwind is an Material Tailwind is an easy to use components library for Tailwind CSS and
                    Material Design. It provides a simple way to customize your components, you
                    can change the colors, fonts, breakpoints and everything you need.">
        <template #content>
            <div class="flex-1 flex gap-3 flex-col md:flex-row">
                <div class="flex-1">
                    <InputComponent title="Nama" :readonly="readonly" placeholder="Masukan nama anda" v-model="name"
                        error-message="Nama tidak boleh kosong" :showError="v$.name.$error" />
                </div>
                <div class="flex-1">
                    <InputComponent title="Username" :readonly="readonly" placeholder="Masukan username anda"
                        v-model="username" error-message="Username tidak boleh kosong"
                        :showError="v$.username.$error" />
                </div>
            </div>
            <div class="flex-1 flex gap-3 flex-col md:flex-row">
                <div class="flex-1">
                    <InputComponent title="Email" :readonly="readonly" placeholder="Masukan email anda" v-model="email"
                        error-message="Email tidak boleh kosong, Email harus valid email"
                        :showError="v$.email.$error" />
                </div>
                <div class="flex-1" v-show="!readonly">
                    <InputComponent title="Password" :readonly="readonly" type="password"
                        placeholder="Masukan password anda" v-model="password"
                        error-message="Password tidak boleh kosong" :showError="v$.password.$error" />
                </div>
            </div>
        </template>
        <template #btn-submit>
            <button :class="classes.btn.black" type="button" @click="onSubmitForm">
                Simpan
            </button>
        </template>
    </FormCard>
</template>

<script setup>
import InputComponent from "../../../components/InputComponent.vue";
import FormCard from "../../../composable/FormCard.vue";
import { onMounted, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email as emailv, requiredIf } from "@vuelidate/validators";
import { classes } from "../../../utils/classes";
import { useLoadingStore } from "./../../store/loadingStore";
import { toast } from "@steveyuowo/vue-hot-toast";
import doRequest from "./../../../utils/doRequest"
import { useRoute, useRouter } from "vue-router"

const router = useRouter()
const route = useRoute()

const query = ref(route.query)

const loadingStore = useLoadingStore()

const name = ref(null)
const username = ref(null)
const email = ref(null)
const password = ref(null)
const readonly = ref(query.value.show ? true : false)
const edit = ref(query.value.edit ? true : false)

const v$ = useVuelidate({
    name: { required },
    username: { required },
    email: { required, emailv },
    password: { requiredIf: requiredIf(!edit.value) },
}, { name, username, email, password })

const onSubmitForm = async () => {
    try {
        const formSubmitted = await v$.value.$validate()

        if (formSubmitted) {
            loadingStore.setLoading(true)
            console.log(name.value)
            await doRequest({
                url: "/api/user",
                method: "post",
                data: {
                    name: name.value,
                    username: username.value,
                    email: email.value,
                    password: password.value
                }
            })
            toast({ message: "Success", type: "success" })
            loadingStore.setLoading(false)
            router.back()
        }
    } catch (error) {
        loadingStore.setLoading(false)
        if (error?.response?.data?.message) {
            return toast({ message: error?.response?.data?.message, type: "error" })
        }
        toast({ message: error?.message })
    }
}

const fetchData = async (id) => {
    loadingStore.setLoading(true)
    try {
        const result = await doRequest({
            url: "/api/user",
            params: {
                filter: {
                    key: 'id',
                    value: id
                },
                page: 1,
                limit: 1
            }
        })

        const data = result.data.data
        name.value = data.data[0].name ?? null
        username.value = data.data[0].username ?? null
        email.value = data.data[0].email ?? null
        loadingStore.setLoading(false)
    } catch (error) {
        loadingStore.setLoading(false)
        toast({ message: error?.message, type: "error" })
    }
}
onMounted(() => {
    readonly.value = query.value.show ? true : false;
    edit.value = query.value.edit ? true : false;
    if (query.value.show || query.value.edit) {
        fetchData(query.value.id)
    }
})

</script>

<style lang="scss" scoped></style>
