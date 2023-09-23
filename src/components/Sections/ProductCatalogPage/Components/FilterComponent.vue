<script setup>
import FiltrValyutaComponent from './FiltrValyutaComponent.vue'
import FiltrCategoriesComponent from './FiltrCategoriesComponent.vue';
import FiltrAddressComponent from './FiltrAddressComponent.vue'
import FiltrPriceComponent from './FiltrPriceComponent.vue';
import { onMounted } from 'vue';
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';
import FiltrSortComponent from './FiltrSortComponent.vue';

var route = useRoute()
var router = useRouter()

onBeforeRouteUpdate((to, from, next) => {
    const currentQuery = {...to.query}; // Создаем копию текущих query параметров

    currentQuery.selectedCategory = "Toshkent";

    currentQuery.selectedCity = "Ko'chmas Mulk"; // Добавляем новый query параметр
    
    currentQuery.selectedSort = "productPrice";

    next() 
})

function reloadPage(){
    window.location.reload()
}  

</script>

<template>
    <div class="filtr__container">
        <div class="filtr__text__wrapper">
            <h3 class="filtr__text">Filtrlar</h3>
        </div>
        <div class="filtr__price__submit__wrapper">
            <filtr-price-component></filtr-price-component>
        </div>
        <div class="filtr__address__category__valyuta__wrapper">
            <filtr-address-component></filtr-address-component>
            <filtr-categories-component></filtr-categories-component>
            <filtr-sort-component></filtr-sort-component>
            <filtr-valyuta-component></filtr-valyuta-component>
        </div>
        <div @click="reloadPage" class="filtr__submit__button__wrapper">
                <button class="filtr__submit__button">Qo'llash</button>
            </div>
    </div>
</template>

<style scoped>
.filtr__container{
    padding-top: 70px;
}
.filtr__text{
color: #2E2D2D;
font-family: Inter;
font-size: 1.7rem;
font-style: normal;
font-weight: 400;
line-height: normal;
}
/* .filtr__price__submit__wrapper{
    display: grid;
    grid-template-columns: 1fr;
} */
.filtr__submit__button__wrapper{
    justify-content: start;
    align-content: end;
    display: grid;
}
.filtr__submit__button{
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 1rem;
    width: 15vw;
    background-color: #0074D9;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}
.filtr__address__category__valyuta__wrapper{
    margin-top: 20px;
    display: grid;
    grid-template-areas: 
    'address categories valyuta sort'
}

@media (max-width: 780px){
    .filtr__address__category__valyuta__wrapper{
    margin-top: 20px;
    display: grid;
    grid-template-areas: 
    'sort valyuta'
    'address categories '
}

.filtr__submit__button{
    width: 20vw;
}

}

</style>