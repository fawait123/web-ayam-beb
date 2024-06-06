<template>
    <div class="w-full flex justify-center items-center bg-slate-100 h-[100vh]">
        <CardComponentVue title="LOGIN PAGE" buttonTitle="LOGIN">
            <InputComponentVue
                title="Username"
                placeholder="Masukan username"
                type="text"
                :showError="false"
            />
            <InputComponentVue
                title="Password"
                placeholder="Masukan password"
                type="password"
                :showError="false"
            />
        </CardComponentVue>
    </div>
</template>

<script>
import CardComponentVue from "../components/CardComponent.vue";
import InputComponentVue from "../components/InputComponent.vue";

export default {
    components: {
        CardComponentVue,
        InputComponentVue,
    },
    setup() {},
};
</script>
<style lang="scss" scoped></style>
