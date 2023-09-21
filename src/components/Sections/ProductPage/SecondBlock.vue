<script setup>
import ProductInformation from './Components/ProductUserInformation.vue';
import SliderComponent from './Components/SliderComponent.vue';
</script>

<template>
    <section class="second__block">
        <slider-component></slider-component>
        <product-information></product-information>
    </section>
    
</template>

<style scoped>
.second__block{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-right: auto;
    margin-left: auto;
    max-width: 90vw;
}
</style>