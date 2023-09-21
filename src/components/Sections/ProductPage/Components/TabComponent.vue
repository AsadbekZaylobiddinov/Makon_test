<script setup>
import ProductAdditional from './ProductAdditional.vue';
import ProductLocationVue from './ProductLocation.vue';
import ProductProperties from './ProductProperties.vue';
import { ref } from 'vue'

var activeElement = ref('additional')

function setAdditional(){
    activeElement.value = 'additional'
}

function setProperties(){
    activeElement.value = 'properties'
}

function setLocation(){
    activeElement.value = 'location'
}
</script>

<template>
    <div class="product__tab">
        <div class="product__tab__wrapper">
            <div @click="setAdditional" class="product__tab__additional tab__element" :class="{active__element: activeElement == 'additional'}">
                <h3 class="product__tab__additional__text">Batafsil</h3>
            </div>
            <div @click="setProperties" class="product__tab__properties tab__element" :class="{active__element: activeElement == 'properties'}">
                <h3 class="product__tab__properties__text">Xususiyatlar</h3>
            </div>
            <div @click="setLocation" class="product__tab__location tab__element" :class="{active__element: activeElement == 'location'}">
                <h3 class="product__tab__additional__text">Manzil</h3>
            </div>
        </div>
    </div>
    <div class="product__active__tab">
        <div class="product__active__tab__wrapper">
            <product-additional v-if="activeElement == 'additional'"></product-additional>
            <product-properties v-if="activeElement == 'properties'"></product-properties>
        </div>
    </div>

</template>

<style scoped>
.product__tab{
    display: grid;
    background-color: #0074D9;
    height: 10vh;
    padding-left: 30px;
    margin-top: 100px;
    cursor: pointer;
}
.product__tab__wrapper{
    display: grid;
    grid-template-areas: '1 2 3';
    justify-content: start;
    max-width: 80vw;
}
.tab__element{
    display: inline-grid;
    align-content: center;
    padding-left: 30px;
    padding-right: 30px;
    border: white solid 1px;
    /* margin-right: 25px; */
    color: white;
}
.active__element{
    background-color: white;
    color: #0074D9;
}
.product__active__tab__wrapper{
    padding-left: 5vw;
    padding-right: 5vw;
    padding-top: 5vh;
}
</style>