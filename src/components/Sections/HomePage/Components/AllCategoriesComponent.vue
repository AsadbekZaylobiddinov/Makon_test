<script setup>
import CategoryComponent from './CategoryComponent.vue';
</script>

<template>
    <div class="categories__container">
        <CategoryComponent class="cars_category" :text=" 'Mashinalar' "></CategoryComponent>
        <CategoryComponent class="mebel_category" :text="'Mebel'"></CategoryComponent>
        <CategoryComponent class="kochmas_mulk_category" :text=" 'Ko\'chmas_Mulk' "></CategoryComponent>
        <CategoryComponent class="elektronika_category" :text=" 'Elektronika' "></CategoryComponent>
    </div>
</template>

<style scoped>
.categories__container{
    display: grid;
    grid-template-areas:
     'f s r c';
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
    grid-area: r;
}
.elektronika_category{
    grid-area: c;
}

@media (max-width: 820px){
    .categories__container{
    display: grid;
    grid-template-areas:
     'f s'
     'r c';
    justify-content: center;
    grid-column-gap:40px;
    grid-row-gap: 20px;
    margin-top: 50px;
}
}
</style>