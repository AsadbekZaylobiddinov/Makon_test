<script setup>
import FirstBlock from "../components/Sections/ProductCatalogPage/FirstBlock.vue"
import SecondBlock from "../components/Sections/ProductCatalogPage/SecondBlock.vue";
import ThirdBlock from "../components/Sections/ProductCatalogPage/ThirdBlock.vue";
import FourthBlock from "../components/Sections/ProductCatalogPage/FourthBlock.vue";
import FixedCreateAdComponent from "../components/Frequent/FixedCreateAdComponent.vue";
import AuthorizedMenuMobile from "../components/Mobile/AuthorizedMenuMobile.vue";
</script>

<template>
    <main class="makon__product__catalog__page">
        <first-block></first-block>
        <second-block></second-block>
        <third-block></third-block>
        <fourth-block></fourth-block>
        <fixed-create-ad-component></fixed-create-ad-component>
        <authorized-menu-mobile></authorized-menu-mobile>
    </main>
</template>

<style scoped>

</style>