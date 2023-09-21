<script setup>
import ProductCatalog from './Components/ProductCatalog.vue';
</script>

<template>
    <section class="product__catalog">
        <product-catalog :productType="0"></product-catalog>
    </section>
</template>

<style scoped>
.product__catalog{
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
}
</style>