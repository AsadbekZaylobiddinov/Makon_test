<script setup>
import AllProductsTextComponent from "./Components/AllProductsTextComponent.vue"
import SearchAdComponentTwo from "./Components/SearchAdComponentTwo.vue";
import FilterComponent from "./Components/FilterComponent.vue";
import ProductCatalog from "./Components/ProductCatalog.vue";
</script>

<template>
    <section class="second__block">
        <all-products-text-component></all-products-text-component>
        <search-ad-component-two></search-ad-component-two>
        <filter-component></filter-component>
    </section>
</template>

<style scoped>
.second__block{
    display: grid;
    justify-content: center;
    margin-top: 40px;
}
</style>