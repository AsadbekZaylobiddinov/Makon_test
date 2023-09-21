<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue'

var sorts  = [
    {id: 1, name: "Eng arzonidan boshlab", value: "productPrice"},
    {id: 2, name: "Eng qimmatida  boshlab", value: "productPriceDesc"},
    {id: 3, name: "Eng yangilaridan boshlab", value: "productCreatedDateDesc"},
    {id: 4, name: "Eng eskilaridan boshlab",value:"productCreatedDate"}
]

var route = useRoute()

var router = useRouter()

var sort = ref("productPrice")

onMounted(() => {
    if(route.query.sort) sort.value = route.query.sort 
})

function chooseSort(e){
    const selectedSort = e.target.value;
    const currentQuery = {...route.query}; // Создаем копию текущих query параметров
    console.log(currentQuery)
    currentQuery.sort = selectedSort; // Добавляем новый query параметр

    // Обновляем query параметры с помощью router.push
    router.push({ query: currentQuery });

}
</script>

<template>
    <div class="filtr__sort__wrapper filtr__element__wrapper">
        <div class="filtr__element">
            <div class="filtr__sort__text__wrapper">
                <p class="filtr__element__text">Sortirovka</p>
            </div>
            <div class="filtr__category__input__wrapper">
                <select v-model="sort" @change="chooseSort" name="filtr__element__input" class="filtr__element__input">
                    <option :value="sort.value" v-for="sort in sorts" :key="sort.id">{{ sort.name }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<style scoped>
.filtr__element{
    display: grid;
    grid-template-areas: 
    'tx'
    'inp'
    ;
}
.filtr__element *{
    display: inline;
}
.filtr__element__text{
color: #726868;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normale;
}
.filtr__element__input{
    display: inline;
    padding-left: 10px;
    height: 30px;
width: 16vw;
border-radius: 5px;
border: 1px solid #DAD9D9;
}
.filtr__sort__text__wrapper{
    margin-bottom: 10px;
}
</style>