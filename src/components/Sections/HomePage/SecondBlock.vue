<script setup>
import { GetAllPremiumProductAsync } from '../../../services/premiumProduct';
import { onMounted, ref } from 'vue';
import ProductCatalog from '../../Frequent/ProductCatalog.vue';

var products = ref('')
 onMounted( async () => {
    await GetAllPremiumProductAsync().then((data) => {
    console.log(products)
    products.value = data.data
    console.log(products)
 }) 
 
 })
</script>

<template>
    <section class="premium__products__section">
    <div class="premium__products__text__container" >
        <h2 class="premium__praoducts__text">Premium E'lonlar</h2>
    </div>
    <div class="premium__products__loading__container" v-if="products == ''">
        <p class="premium__products__loading__text">Yuklamoqdamiz...</p>
    </div>
    <div v-else class="premium__products__container">
        <product-catalog :productType="1" :products="products"></product-catalog>
    </div>
    </section>
</template>

<style scoped>
.premium__products__section{
    max-width: 95%;
    margin-left: auto;
    margin-right: auto;
}
.premium__products__text__container{
    text-align: center;
    margin-top: 75px;
}
.premium__products__text{
color: #000;
font-family: Javanese Text;
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.premium__products__loading__container{
    text-align: center;
}
.premium__products__loading__container{
    font-size: 25px;
    margin-bottom: 50px;
}

</style>