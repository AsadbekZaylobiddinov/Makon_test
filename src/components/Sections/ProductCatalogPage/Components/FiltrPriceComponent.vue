<script setup>
import { onMounted, ref  } from "vue";
import { useRoute, useRouter } from "vue-router";

var minPrice = ref(0)
var maxPrice = ref("99999999999999")

var route = useRoute()
var router = useRouter()

onMounted(() => {
    if(route.query.MinPrice) minPrice.value = route.query.MinPrice 
    if(route.query.MaxPrice) maxPrice.value = route.query.MaxPrice 
})

function inputMinPrice(e){
    const inputedMinPrice = e.target.value;
    const currentQuery = {...route.query}; // Создаем копию текущих query параметров
    currentQuery.MinPrice = inputedMinPrice; // Добавляем новый query параметр

    // Обновляем query параметры с помощью router.push
    router.push({ query: currentQuery });
}
function inputMaxPrice(e){
    const inputedMaxPrice = e.target.value;
    const currentQuery = {...route.query}; // Создаем копию текущих query параметров
    currentQuery.MaxPrice = inputedMaxPrice; // Добавляем новый query параметр

    // Обновляем query параметры с помощью router.push
    router.push({ query: currentQuery });
}
</script>

<template>
    <div class="filtr__price__wrapper">
            <div class="filtr__price__text__wrapper">
                <p class="filtr__price__text">Narx</p>
            </div>
            <br>
            <div class="filtr__price__from__to__wrapper">
                <div class="filtr__price__inp__wrapper">
                    <input @input="inputMinPrice" v-model="minPrice" type="number" class="filtr__price__inp">
                    <p class="filtr__price__text filtr__price__from__text">dan</p>
                </div>
                <div class="filtr__price__inp__wrapper">
                    <input @input="inputMaxPrice" v-model="maxPrice" type="number" class="filtr__price__inp">
                    <p class="filtr__price__text">gacha</p>
                </div>
            </div>
        </div>
</template>

<style scoped>
.filtr__price__wrapper *{
    display: inline-block;
}
.filtr__price__wrapper{
    display: inline;
}
.filtr__price__text__wrapper{
    display: block;
    margin-top: 8px;
    margin-bottom: 2px;
}
.filtr__price__inp__wrapper{
    display: inline;
}
.filtr__price__inp__wrapper p{
    display: inline;
}
.filtr__price__from__text{
    margin-right: 8px
}
.filtr__price__text{
    display: inline;
color: #726868;
font-family: Inter;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normale;
margin-left: 8px;
}
.filtr__price__inp{
width: 10vw;
height: 25px;
text-align: center;
border-radius: 5px;
border: 1px solid #DAD9D9;
}

@media (max-width: 780px){
    .filtr__price__inp{
        width: 15vw;
height: 25px;
}
}

@media (max-width: 600px){
    .filtr__price__inp{
        width: 25vw;
height: 25px;
}
}
</style>