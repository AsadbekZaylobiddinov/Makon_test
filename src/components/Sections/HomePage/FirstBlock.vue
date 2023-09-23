<script setup>
import HeaderComponent from '../../Frequent/HeaderComponent.vue';
import Head2Text from './Components/Head2Text.vue';
import SearchAdComponentFirst from './Components/SearchAdComponentFirst.vue';
import AllCategoriesComponent from './Components/AllCategoriesComponent.vue';

</script>

<template>
    <section class="main__section"> 
        <div class="container">
            <header-component></header-component>
            <div class="wrapper">
                <head-2-text></head-2-text>
                <search-ad-component-first :bck-image="1" :width="'60vw'"></search-ad-component-first>
                <all-categories-component></all-categories-component>
            </div>
        </div>
    </section>
</template>

<style scoped>
.main__section{
    height: 100vh;
    background-color: #0074D9;
    padding-top: 40px;
}
.container{
    /* max-width: 80vw; */
    margin-left: auto;
    margin-right: auto;
}
.wrapper{
    display: grid;
    justify-content: center;
    margin-top: 16vh;
}
</style>