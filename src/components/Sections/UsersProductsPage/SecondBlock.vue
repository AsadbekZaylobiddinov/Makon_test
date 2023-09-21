<script setup>
import { getUsersProducts } from '../../../services/product'
import ProductCatalog from '../../Frequent/ProductCatalog.vue';
import { ref , onMounted } from 'vue'
import { useRoute } from 'vue-router';

var route = useRoute()

var userId = route.params.id

var products = ref('')

onMounted( async () => {
    await getUsersProducts(userId).then((data) => {
    console.log(products.value)
    products.value = data.data
    console.log(products.value)
 })
})
</script>

<template>
    <div class="users__products__page">
        <div class="users__products__page__text">
            <h2>Foydalanuvchini boshqa e'lonlari</h2>
        </div>
        <product-catalog style="max-width: 90vw; margin-left: auto; margin-right: auto;" v-if="products != ''" :productType="2" :products="products"></product-catalog>
    </div>
</template>

<style scoped>
.users__products__page__text{
    margin-top: 20px;
    text-align: center;
}
</style>