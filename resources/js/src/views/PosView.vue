<template>
    <div class="w-full bg-slate-100 h-[100vh]">
        <HeaderComponent />
        <div class="bg-slate-500 flex">
            <div class="p-[20px] h-[91vh] bg-white shadow-md bg-clip-border">
                <ItemMenuComponent
                    v-for="menu in listMenu"
                    :key="menu.title"
                    :isActive="menu.isActive"
                    :showIcon="menu.showIcon"
                    :title="menu.title"
                    :iconName="menu.iconName"
                />
            </div>
            <div
                class="flex-auto bg-white shadow-md bg-clip-border p-[20px] flex justify-evenly flex-wrap h-[91vh] overflow-y-auto"
            >
                <ItemProductComponent
                    v-for="product in listProduct"
                    :key="product"
                    :title="product.title"
                    :price="product.price"
                    :description="product.description"
                />
            </div>
            <div
                class="w-[400px] bg-white shadow-md bg-clip-border p-[15px] h-[91vh] overflow-y-auto"
            >
                <h5>ORDER #</h5>
                <ItemCartComponent
                    v-for="cart in listCart"
                    :key="cart.name"
                    :name="cart.name"
                    :price="cart.price"
                    :amount="cart.amount"
                />
                <div class="flex justify-between items-center">
                    <h5 class="text-[12px] font-bold">Total</h5>
                    <h5 class="text-[12px] font-bold">
                        {{
                            listCart
                                .reduce(
                                    (prev, next) =>
                                        prev + next.price * next.amount,
                                    0
                                )
                                .toLocaleString("id", "ID")
                        }}
                    </h5>
                </div>
                <button
                    class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full mt-20 flex justify-between items-center"
                    type="button"
                >
                    PAYMENT
                    <Icon class="text-[18px]" icon="mdi:credit-card" />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComponent from "../../components/HeaderComponent.vue";
import ItemCartComponent from "../../components/ItemCartComponent.vue";
import ItemMenuComponent from "../../components/ItemMenuComponent.vue";
import ItemProductComponent from "../../components/ItemProductComponent.vue";
import { Icon } from "@iconify/vue";

export default {
    components: {
        HeaderComponent,
        ItemMenuComponent,
        ItemProductComponent,
        ItemCartComponent,
        Icon,
    },
    data() {
        return {
            listMenu: [
                {
                    title: "HOME",
                    showIcon: true,
                    iconName: "mdi:home",
                    isActive: true,
                },
                {
                    title: "MENU",
                    showIcon: true,
                    iconName: "mdi:list-box",
                    isActive: false,
                },
                {
                    title: "PAYMENT",
                    showIcon: true,
                    iconName: "mdi:credit-card-outline",
                    isActive: false,
                },
                {
                    title: "ORDERS",
                    showIcon: true,
                    iconName: "mdi:table",
                    isActive: false,
                },
                {
                    title: "SETTINGS",
                    showIcon: true,
                    iconName: "mdi:cog-outline",
                    isActive: false,
                },
                {
                    title: "v.1.0",
                    showIcon: false,
                    iconName: "mdi:home",
                    isActive: false,
                },
            ],
            listProduct: [
                {
                    title: "AYAM GORENG KOMPLIT",
                    price: 17000,
                    description:
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque sed praesentium minus nemo iusto, illo eveniet debitis laborum consectetur corrupti!",
                },
                {
                    title: "AYAM GORENG",
                    price: 15000,
                    description:
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque sed praesentium minus nemo iusto, illo eveniet debitis laborum consectetur corrupti!",
                },
                {
                    title: "PAKET LELE KOMPLIT",
                    price: 15000,
                    description:
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque sed praesentium minus nemo iusto, illo eveniet debitis laborum consectetur corrupti!",
                },
                {
                    title: "PAKET KULIT KOMPLIT",
                    price: 15000,
                    description:
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque sed praesentium minus nemo iusto, illo eveniet debitis laborum consectetur corrupti!",
                },
                {
                    title: "LELE",
                    price: 10000,
                    description:
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque sed praesentium minus nemo iusto, illo eveniet debitis laborum consectetur corrupti!",
                },
                {
                    title: "AYAM",
                    price: 13000,
                    description:
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque sed praesentium minus nemo iusto, illo eveniet debitis laborum consectetur corrupti!",
                },
            ],
            listCart: [
                {
                    name: "Ayam Geprek",
                    price: 15000,
                    amount: 2,
                },
                {
                    name: "Lele Goreng",
                    price: 13000,
                    amount: 1,
                },
                {
                    name: "Tahu",
                    price: 5000,
                    amount: 5,
                },
                {
                    name: "Tempe",
                    price: 5000,
                    amount: 5,
                },
                {
                    name: "Es Teh",
                    price: 3000,
                    amount: 1,
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>
