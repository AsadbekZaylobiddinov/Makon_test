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

@media(min-width: 801px){
    .second__block{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-right: auto;
    margin-left: auto;
    max-width: 90vw;
}
}
@media (max-width: 800px){
  .second__block{
    justify-content: center;
    align-items: start;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    /* margin-right: 0;
    margin-left: 0; */
  }
}
</style>