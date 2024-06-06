<template>
    <div>
        <CardComponent title="LOGIN PAGE" buttonTitle="LOGIN">
            <InputComponent title="Username" placeholder="Masukan username" type="text" :showError="false" />
            <InputComponent title="Password" placeholder="Masukan password" type="password" :showError="false" />
        </CardComponent>
    </div>
</template>

<script>
import CardComponent from '../../components/CardComponent.vue';
import InputComponent from '../../components/InputComponent.vue';

export default {
    components: {
        CardComponent,
        InputComponent
    }
}
</script>

<style lang="scss" scoped></style>
