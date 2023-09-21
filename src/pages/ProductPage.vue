<script setup>
import SecondBlock from '../components/Sections/ProductPage/SecondBlock.vue';
import FirstBlock from '../components/Sections/ProductPage/FirstBlock.vue';
import ThirdBlock from '../components/Sections/ProductPage/ThirdBlock.vue';
import FourthBlock from '../components/Sections/ProductPage/FourthBlock.vue';
import SixthBlock from '../components/Sections/ProductPage/SixthBlock.vue';
import useProductStore from '../stores/product/product';
import { getProductById } from '../services/product';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue'

var dataLoaded = ref(false)

var store = useProductStore()

var route = useRoute()

var product = { }

onMounted( async () => {
    await getProductById(route.params.id)
    .then((data) => {
        product = data.data.data
        store.setProductTitle(product.title)
        store.setProductUser(product.user)
        store.setProductAdditional(product.productAdditional.text)
        store.setProductArea(product.area.name)
        store.setProductCity(product.city.name)
        store.setProductCategory(product.category.name)
        store.setProductSubCategory(product.podCategory.name)
        store.setProductImagePreview(product.previewImagePath)
        store.setProductImagesArray(product.productImages)
        store.setProductProperties(product.properties)
        store.setProductPrice(product.price)
        store.setCreatedAt(product.createdAt)
        dataLoaded.value = true
        store.setIsLoaded(true)
    })
    .catch((e) => {
        console.log(e)
    })
})
</script>

<template>
    <main class="product__page" v-if="dataLoaded">
        <first-block></first-block>
        <second-block></second-block>
        <third-block></third-block>
        <fourth-block></fourth-block>
        <sixth-block></sixth-block>
    </main>
</template>

<style scoped>

</style>