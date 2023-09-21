<script setup>
import { computed, defineProps } from 'vue';
import ProductComponent from './ProductComponent.vue';
var props = defineProps(['products', 'productType']);


var checkPremiumProduct = computed(() => props.productType == 1 ? true : false)

var checkProduct = computed(() => props.productType == 0 ? true : false)

var checkUsersProduct = computed(() => props.productType == 2 ? true : false)
</script>

<template>
    <div class="products__catalog">
        <div v-if="checkPremiumProduct" class="product__catalog__container">
            <product-component  v-for= "product in props.products.data" :key="product.productId" :product="product.product"></product-component>
        </div>
        <div v-if="checkProduct" class="product__catalog__container">
            <product-component  v-for="product in props.products" :key="product.productId" :product="product"></product-component>
        </div>
        <div v-if="checkUsersProduct" class="product__catalog__container">
            <product-component  v-for="product in props.products.data" :key="product.productId" :product="product"></product-component>
        </div>
    </div>
    
</template>

<style scoped>
.product__catalog__container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 3%;
}
</style>