<script setup>
import CreateTitleInput from '../../UI/Inputs/CreateTitleInput.vue';
import CreateDescriptionInput from '../../UI/Inputs/CreateDescriptionInput.vue';
import SelectCategory from '../../UI/Inputs/SelectCategory.vue';
import SelectImage from '../../UI/Inputs/SelectImage.vue';
import CreatePriceInput from '../../UI/Inputs/CreatePriceInput.vue';
</script>

<template>
    <div class="main__block">
        <div class="container"> 
            <div class="create__ad__title__main">
                <h2 class="create__ad__title__text">E'lon joylashtirish</h2>
            </div>
            <create-title-input></create-title-input>
            <select-category></select-category>
            <div class="images__title" style="margin-top: 20px; font-size: 18px;">
                <p style="margin-bottom: 10px;">Rasm: <br> (1 chi rasm prevyu bo'ladi)</p>
            </div>
            <div class="images">
                <select-image :key="i" v-for="i in 12"></select-image>
            </div>
            <create-description-input></create-description-input>
            <create-price-input></create-price-input>
        </div>
    </div>
</template>

<style scoped>
.container{
    max-width: 70vw;
    margin-left: auto;
    margin-right: auto;
}
.create__ad__title__main{
    text-align: center;
    margin-bottom: 6vh;
    margin-top: 6vh;
}
.create__ad__title__text{
    font-weight: 200;
}
.images{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    max-width: 50vw;
}
</style>