<script setup>
import { onMounted, ref } from 'vue';
import ProductCatalog from '../../../Frequent/ProductCatalog.vue';
import {getAllProductsAsync} from '../../../../services/product'

var products = ref([])

onMounted(async () => {
    await getAllProductsAsync().then((data) => {
        products.value = data.data.data
        console.log(data.data.data)
    })
})

</script>

<template>
    <product-catalog :products="products" :isPremiumProduct="0"></product-catalog>
</template>

<style scoped>

</style>