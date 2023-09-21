<script setup>
import { ref, onMounted } from 'vue'
import { getAllFavouriteProducts } from "../../../services/favouriteProduct"
import FavouriteProductsCatalog from "../FavouriteProductsPage/Components/FavouriteProductsCatalog.vue"

let products = ref('')

 onMounted( async () => {
    await getAllFavouriteProducts().then((data) => {
    products.value = data.data.data
 }) 
 .catch((e) => {
    console.log(e)
 })
 
 })
</script>

<template>
    <section class="product__catalog__section">
      <favourite-products-catalog :products="products"></favourite-products-catalog>
    </section>
</template>

<style scoped>

</style>