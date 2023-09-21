<script setup>
import { getAllCategories } from '../../../../services/categories';
import { onMounted, ref } from 'vue';
import CategoryComponent from './CategoryComponent.vue';

let categories = ref('')

onMounted(async () => {
    await getAllCategories().then((data) => {
        categories.value = data.data.data
        console.log(categories.value)
    })
})
</script>

<template>
    <div class="categories__component">
        <div class="categories__title">
            <h2 class="categories__title">
                E'lon kategoriyasini tanlang
            </h2>
        </div>
        <div class="categories__block">
            <category-component :category="c" :key="c.id" v-for="c in categories"></category-component>
        </div>
    </div>
</template>

<style scoped>
.categories__title{
    text-align: center;
    color: rgb(66, 67, 67);
    margin-bottom: 20px;
}
.categories__block{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
}
</style>