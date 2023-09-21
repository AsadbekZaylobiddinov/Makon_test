<script setup>
import CategoryComponent from './CategoryComponent.vue';
</script>

<template>
    <div class="categories__container">
        <CategoryComponent class="cars_category" :text=" 'Mashinalar' "></CategoryComponent>
        <CategoryComponent class="mebel_category" :text="'Mebel'"></CategoryComponent>
        <CategoryComponent class="kochmas_mulk_category" :text=" 'Ko\'chmas_Mulk' "></CategoryComponent>
    </div>
</template>

<style scoped>
.categories__container{
    display: grid;
    grid-template-areas: 'f s t';
    justify-content: center;
    grid-column-gap:40px;
    margin-top: 50px;
}
.cars_category{
    grid-area: f;
}
.mebel_category{
    grid-area: s;
}
.kochmas_mulk_category{
    grid-area: t;
}
</style>