<template>
    <div class="w-full flex justify-center items-center bg-slate-100 h-[100vh]">
        <CardComponent title="LOGIN PAGE" buttonTitle="LOGIN" :onClickButton="onClickButton">
            <InputComponent title="Username" placeholder="Masukan username" type="text" :showError="v$.username.$error"
                error-message="Username tidak boleh kosong" v-model="username" />
            <InputComponent title="Password" placeholder="Masukan password" type="password"
                error-message="Password tidak boleh kosong" :showError="v$.password.$error" v-model="password" />
        </CardComponent>
    </div>
</template>

<script setup>
import { ref } from "vue";
import CardComponent from "../../components/CardComponent.vue";
import InputComponent from "../../components/InputComponent.vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { toast } from "@steveyuowo/vue-hot-toast";
import Cookies from "js-cookie";
import doRequest from "../../utils/doRequest";
import { useRouter } from "vue-router";
import { useLoadingStore } from "./../store/loadingStore";


const router = useRouter()
const username = ref(null)
const password = ref(null)
const loadingStore = useLoadingStore()
const v$ = useVuelidate({
    username: { required },
    password: { required }
}, { username, password })


const onClickButton = async () => {
    loadingStore.setLoading(true)
    try {
        const formSubmitted = await v$.value.$validate()

        if (formSubmitted) {
            const login = await doRequest({
                url: "/api/auth/login",
                method: "post",
                data: {
                    username: username.value,
                    password: password.value
                }
            })

            loadingStore.setLoading(false)
            const data = login.data.data
            Cookies.set("token", data.token, {
                expires: 1
            })
            Cookies.set("user", JSON.stringify(data.user), {
                expires: 7
            })

            toast({
                message: "Success",
                type: "success"
            })

            router.push({ name: "Dashboard" })
        }


    } catch (error) {
        loadingStore.setLoading(false)
        if (error?.response?.data?.message) {
            return toast({ message: error?.response?.data?.message, type: "error" })
        }
        toast({ message: error?.message })
    }

}
</script>

<style lang="scss" scoped></style>../store/loadingStore
