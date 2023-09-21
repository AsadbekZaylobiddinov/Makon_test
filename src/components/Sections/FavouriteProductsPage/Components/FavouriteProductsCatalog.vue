<script setup>
import FavouriteProduct from './FavouriteProduct.vue';
let props = defineProps(['products'])
</script>

<template>
    <div class="product__catalog">
        <div class="favourite__product__title">
            <h1>Saqlangan E'lonlar</h1>
        </div>
        <div v-if="props.products.length > 0" class="product__catalog__container">
            <favourite-product :product="p.product" :favouriteProductId="p.id" v-for="p in props.products" :key="p.product.id"></favourite-product>
        </div>
        <div v-else class="no__products">
            <h3>Saqlangan e'lonlar mavjud emas</h3>
        </div>
    </div>
</template>

<style scoped>
.favourite__product__title{
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: center;
    color: rgb(82, 84, 84);
}
.no__products{
    text-align: center;
    color: rgb(223, 38, 38);
}
</style>