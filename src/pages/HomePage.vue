<script setup>
import Section1 from '../components/Sections/HomePage/FirstBlock.vue';
import Section2 from '../components/Sections/HomePage/SecondBlock.vue';
import Section3 from '../components/Sections/HomePage/ThirdBlock.vue';
import FixedCreateAdComponent from '../components/Frequent/FixedCreateAdComponent.vue';
import AuthorizedMenuMobile from '../components/Mobile/AuthorizedMenuMobile.vue';

</script>

<template>
    <main class="makon__index__page">
        <section-1></section-1>
        <section-2></section-2>
        <section-3></section-3>
        <fixed-create-ad-component></fixed-create-ad-component>
        <authorized-menu-mobile></authorized-menu-mobile>
    </main>       
</template>

<style scoped>

</style>