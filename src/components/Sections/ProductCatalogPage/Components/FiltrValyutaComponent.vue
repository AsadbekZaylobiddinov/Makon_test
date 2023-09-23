<script setup>
import {ref, onMounted} from 'vue'
import { useRouter, useRoute } from "vue-router";

var router = useRouter()
var route = useRoute()

var isUsd = ref(false)
var isSum = ref(true)


onMounted(() => {
    if(route.query.currency){
        if(route.query.currency == "USD"){
            isUsd.value = true
            isSum.value = false
        }
        else if(route.query.currency == "SUM"){
            isUsd.value = false
            isSum.value = true
        }
    }
})


function switchToUsd(){
    isUsd.value = true
    isSum.value = false
    
    const currentQuery = {...route.query}; // Создаем копию текущих query параметров
    console.log(currentQuery)
    currentQuery.currency = "USD"; // Добавляем новый query параметр

    // Обновляем query параметры с помощью router.push
    router.push({ query: currentQuery });

}

function switchToSum(){
    isUsd.value = false
    isSum.value = true

    const currentQuery = {...route.query}; // Создаем копию текущих query параметров
    console.log(currentQuery)
    currentQuery.currency = "SUM"; // Добавляем новый query параметр

    // Обновляем query параметры с помощью router.push
    router.push({ query: currentQuery });
}


</script>

<template>
    <div class="filtr__valyuta__wrapper">
        <div class="filtr__valyuta__text__wrapper">
            <p class="filtr__valyuta__text">Valyuta</p>
        </div>
        <br>
        <div class="filtr__valyuta__switch__wrapper">
            <div @click="switchToUsd" :class="{active_filtr__valyuta__switch__text__wrapper: isUsd, no__active__filtr__valyuta__switch__text__wrapper: isSum} ">
                <p class="filtr__valyuta__switch__usd__text">USD</p>
            </div>
            <div @click="switchToSum" :class="{active_filtr__valyuta__switch__text__wrapper: isSum, no__active__filtr__valyuta__switch__text__wrapper: isUsd} ">
                <p class="filtr__valyuta__switch__sum__text">SUM</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.filtr__valyuta__wrapper{
    grid-area: valyuta;
    display: inline-grid;
    align-content: start;
    grid-template-areas: 
    'tx tx'
    'uzs uzs';
}
.filtr__valyuta__wrapper *{
    font-size: 1rem;
    display: inline-block;
}
.filtr__valyuta__switch__wrapper{
    margin-top: 10px;
}
.filtr__valyuta__switch__wrapper div{
    padding-left: 10px;
    padding-right: 10px;
}
.filtr__valyuta__text{
color: #726868;
font-family: Inter;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normale;
margin-left: 8px;
}
.active_filtr__valyuta__switch__text__wrapper{
    display: inline-grid;
    justify-content: center;
    align-content: center;
    border-radius: 5px;
    background: #0074D9;
    color: white;
    width: 3vw;
    height: 30px;
    cursor: pointer;
}
.no__active__filtr__valyuta__switch__text__wrapper{
    display: inline-grid;
    justify-content: center;
    align-content: center;
    border-radius: 5px;
    background: #fff;
    width: 3vw;
    height: 30px;
    cursor: pointer;
}
.filtr__valyuta__switch__sum__text__wrapper{
    display: inline-grid;
    justify-content: center;
    align-content: center;
    background-color: #fff;
    width: 3vw;
    height: 30px;
}

@media (max-width: 780px){
    .filtr__valyuta__switch__wrapper div{
    padding-left: 20px;
    padding-right: 20px;
}
}
</style>