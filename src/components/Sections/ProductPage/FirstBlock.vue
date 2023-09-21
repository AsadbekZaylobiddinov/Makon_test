<script setup>
import HeaderComponent from '../../Frequent/HeaderComponent.vue';
</script>

<template>
    <section class="first__block">
        <div class="header__container">
            <header-component class="header__component"></header-component>
        </div>
    </section>
</template>

<style scoped>
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