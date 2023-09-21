<script setup>
import HeaderComponent from '../components/Frequent/HeaderComponent.vue';
import CategoriesComponent from '../components/Sections/SelectCategoryPage/Components/CategoriesComponent.vue';
import FooterComponent from '../components/Frequent/FooterComponent.vue';
</script>

<template>
    <main>
        <section class="first__block">
            <div class="header_container">
                <header-component class="header__component"></header-component>
            </div> 
        </section>
        <section class="second__block">
            <categories-component></categories-component>
        </section>
        <section class="third__block">
            <footer-component></footer-component>
        </section>
        
    </main>
</template>

<style scoped>
main{
    display: grid;
    grid-template-areas: 
    'a'
    'b'
    'c'
    ;
    min-height: 100vh;
}
.first__block{
    align-self: start;
}
.second__block{
    align-self: start;
}
.third__block{
    align-self: end;
}
.first__block{
    display: grid;
    align-content: center;
    height: 10vh;
    background-color: #0074D9;
}
.header__component{
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
}
</style>