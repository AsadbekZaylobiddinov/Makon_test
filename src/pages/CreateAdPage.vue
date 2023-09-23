<script setup>
import HeaderComponent from '../components/Frequent/HeaderComponent.vue';
import FooterComponent from '../components/Frequent/FooterComponent.vue';
import MainBlock from '../components/Sections/CreateAdPage/MainBlock.vue';
import AuthorizedMenuMobile from '../components/Mobile/AuthorizedMenuMobile.vue';
</script>

<template>
    <main>
        <section class="first__block">
            <div class="header_container">
                <header-component class="header__component"></header-component>
            </div> 
        </section>
        <section class="second__block">
            <main-block></main-block>
        </section>
        <section class="third__block">
            <footer-component></footer-component>
        </section>
        <authorized-menu-mobile></authorized-menu-mobile>
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
    align-self: start;
}
.header__component{
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
}
</style>