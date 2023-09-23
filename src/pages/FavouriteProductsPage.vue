<script setup>
import FirstBlock from "../components/Sections/FavouriteProductsPage/FirstBlock.vue"
import SecondBlock from "../components/Sections/FavouriteProductsPage/SecondBlock.vue"
import ThirdBlock from "../components/Sections/HomePage/ThirdBlock.vue";
import AuthorizedMenuMobile from "../components/Mobile/AuthorizedMenuMobile.vue";
</script>

<template>
    <main class="main">
        <first-block class="first"></first-block>
        <second-block class="second"></second-block>
        <third-block class="third"></third-block>
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
.first{
    align-self: start;
    grid-area: a;
}
.second{
    grid-area: b;
    align-self: start;
}
.third{
    grid-area: c;
    align-self: end;
}
</style>