<template>
    <div class="flex flex-col sm:flex-row justify-start gap-4 w-full flex-wrap">
        <div class="bg-white rounded-sm shadow-lg px-5 py-3 flex gap-7 flex-auto justify-between"
            v-for="card in listCard" :key="card.title">
            <div>
                <h4 class="text-[14px] font-semibold text-slate-600">{{ card.title }}</h4>
                <h1 :class="['text-[22px] font-bold py-[10px]', card.textColor]">{{ card.amount }}</h1>
                <div>
                    <span :class="['px-2 rounded-lg py-[1px] text-white text-[11px] font-normal', card.bgColor]">{{
                card.type
            }}</span>
                    <span class="text-[12px] font-light ml-2 text-slate-400">11 Juli 2024 11:09 WIB</span>
                </div>
            </div>
            <div>
                <Icon :icon="card.icon" :class="['text-[40px]', card.textColor]" />
            </div>
        </div>
    </div>
    <!-- section card -->
    <div class="flex justify-between gap-4 flex-wrap">
        <div class="bg-white shadow-md rounded-md my-5 p-4 flex-auto md:flex-1">
            <LineChart :chart-data="lineCartData" />
        </div>
        <div class="bg-white shadow-md rounded-md my-5 p-4 flex-auto md:flex-1">
            <BarChart :chart-data="barCartData" />
        </div>
    </div>
    <div class="flex justify-between gap-4 flex-wrap">
        <div class="bg-white rounded-md shadow-md flex-auto md:flex-1 p-4">
            <div class="flex justify-between items-center my-3">
                <h1 class="text-[20px] font-semibold">Order Terakhir</h1>
            </div>
            <li v-for="order in recentOrder" :key="order.title"
                class="list-none flex justify-between border p-3 cursor-pointer hover:bg-red-500 hover:text-slate-50 transition-all">
                <span class="text-[14px] font-semibold">{{ order.title }}</span>
                <div class="flex justify-end gap-4 items-center">
                    <span class="text-[14px] font-semibold">{{ order.amount }}x</span>
                    <span class="text-[14px] font-semibold">IDR {{ order.price.toLocaleString("id", "ID") }}</span>
                </div>
            </li>
            <div class="flex justify-between items-center my-3">
                <h1 class="text-[20px] font-semibold">TOTAL</h1>
                <h1 class="text-[20px] font-semibold">IDR {{ recentOrder.reduce((prev, next) => prev + (next.price *
                next.amount), 0).toLocaleString("id", "ID")
                    }}</h1>
            </div>
        </div>
        <div class="bg-white rounded-md shadow-md flex-auto md:flex-1 p-4">
            <div class="flex justify-between items-center my-3">
                <h1 class="text-[20px] font-semibold">Order Terakhir</h1>
            </div>
            <li v-for="order in recentOrder" :key="order.title"
                class="list-none flex justify-between border p-3 cursor-pointer hover:bg-red-500 hover:text-slate-50 transition-all">
                <span class="text-[14px] font-semibold">{{ order.title }}</span>
                <div class="flex justify-end gap-4 items-center">
                    <span class="text-[14px] font-semibold">{{ order.amount }}x</span>
                    <span class="text-[14px] font-semibold">IDR {{ order.price.toLocaleString("id", "ID") }}</span>
                </div>
            </li>
            <div class="flex justify-between items-center my-3">
                <h1 class="text-[20px] font-semibold">TOTAL</h1>
                <h1 class="text-[20px] font-semibold">IDR {{ recentOrder.reduce((prev, next) => prev + (next.price *
                next.amount), 0).toLocaleString("id", "ID")
                    }}</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { BarChart, LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);


const listCard = ref([{
    title: "Produk",
    amount: 20,
    color: "",
    icon: "mdi:cash-multiple",
    type: "Master",
    textColor: "text-blue-500",
    bgColor: "bg-blue-500"
}, {
    title: "Pesanan",
    amount: 20,
    color: "",
    icon: "mdi:cart-arrow-down",
    type: "Income",
    textColor: "text-red-500",
    bgColor: "bg-red-500"
}, {
    title: "Penjualan",
    amount: new Intl.NumberFormat("id", { style: "currency", currency: "IDR" }).format(120000),
    color: "",
    icon: "mdi:credit-card-check",
    type: "Income",
    textColor: "text-orange-500",
    bgColor: "bg-orange-500"
}, {
    title: "Pengeluaran",
    amount: new Intl.NumberFormat("id", { style: "currency", currency: "IDR" }).format(1000000),
    color: "",
    icon: "mdi:currency-usd-off",
    type: "Expence",
    textColor: "text-green-500",
    bgColor: "bg-green-500"
}, {
    title: "Pengguna",
    amount: 10,
    color: "",
    icon: "mdi:account-key",
    type: "Master",
    textColor: "text-teal-500",
    bgColor: "bg-teal-500"
}])

const lineCartData = ref({
    labels: ['Januari', 'Febuari', 'Maret', 'April', 'Mei', 'Juni', 'Juli'],
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
});

const barCartData = ref({
    labels: ['Januari', 'Febuari', 'Maret', 'April', 'Mei', 'Juni', 'Juli'],
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
})

const recentOrder = ref([
    {
        title: "Ayam Goreng",
        amount: 1,
        price: 15000
    },
    {
        title: "Lele Goreng",
        amount: 1,
        price: 130000
    },
    {
        title: "Paket Telur Kulit Komplit",
        amount: 5,
        price: 15000
    },
    {
        title: "Es Teh",
        amount: 1,
        price: 4000
    },
    {
        title: "Es Jeruk",
        amount: 1,
        price: 4000
    }
])


</script>
