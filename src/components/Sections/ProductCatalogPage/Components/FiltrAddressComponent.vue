<script setup>

import AreasComponent from './AreasComponent.vue';

import { useRouter, useRoute } from 'vue-router';

import { onMounted, ref } from 'vue'

var route = useRoute()
var router = useRouter()
var areas = ref([])
var checkedAreas = ref([])
checkedAreas.value = areas.value
var isCityVisible = ref(0)
var cities = [
    { id: 1, name: "O'zbekiston", areas: []},
    { id: 2, name: 'Toshkent', areas: [ 
        { id: 1, name: 'Chilonzor'},
         { id: 2, name: 'Yunusobod'},
        { id: 3, name: 'Shayxontoxur'},
        { id: 4, name: 'Bektemir'},
        { id: 5, name: 'Olmazor'},
        { id: 6, name: 'Mirobod'},
        { id: 7, name: 'Sergeli'},
        { id: 8, name: 'Yashnobod'},
        { id: 9, name: 'Yakkasaroy'},
        { id: 10, name: 'Uchtepa'},
        { id: 11, name: "Mirzo Ulug'bek"}
    ]}, 
    { id: 3, name: 'Toshkent Viloyati', areas: [
        { id: 1, name: 'Zangiota'},
        { id: 2, name: 'Qibray'},
        { id: 3, name: "Bo'stonliq"},
        { id: 4, name: 'Chirchiq'},
        { id: 5, name: 'Parkent'},
        { id: 6, name: 'Oxangaron'},
        { id: 7, name: 'Piskent'},
        { id: 8, name: "Bo'ka"},
        { id: 9, name: 'Bekobod'},
        { id: 10, name: 'Chinoz'},
        { id: 11, name: "Yangiyo'l"}
    ] },
    { id: 4, name: "Farg'ona", areas: [
        { id: 1, name: 'Oltiariq'},
        { id: 2, name: "Bag'dod"},
        { id: 3, name: "Beshariq"},
        { id: 4, name: 'Dangara'},
        { id: 5, name: "Farg'ona"},
        { id: 6, name: 'Furqat'},
        { id: 7, name: 'Qushtepa'},
        { id: 8, name: "Quva"},
        { id: 9, name: 'Rishton'},
        { id: 10, name: "So'x"},
        { id: 11, name: "Tashlaq"},        
        { id: 12, name: "Uchko'prik"},
        { id: 13, name: "Yazyavon"},
        { id: 14, name: "Qo'qond"},
        { id: 15, name: "Margilan"},
        { id: 16, name: "Quvasay"},
    ] },
    { id: 5, name: "Andijon" },
    { id: 6, name: "Buxoro" },
    { id: 7, name: "Jizzax" },
    { id: 8, name: "Qashqadaryo" },
    { id: 9,name: "Navoi" },
    { id: 10, name: "Namangan" },
    { id: 11, name: "Samarqand" },
    { id: 12, name: "Surxandaryo" },
    { id: 13, name: "Sirdaryo" },
    { id: 14, name: "Xorazm" }
]

var selectedCity = ref("O'zbekiston")

onMounted(() => {
    if(route.query.City) selectedCity.value = route.query.City
})

function chooseAreas(e){

    checkedAreas.value.forEach(function(el, index, array){
        array[index] = false
    })

    const selectedCity = e.target.value;
    const currentQuery = {...route.query}; // Создаем копию текущих query параметров
    currentQuery.City = selectedCity; // Добавляем новый query параметр

    // Обновляем query параметры с помощью router.push
    router.push({ query: currentQuery });

    if(sessionStorage.getItem('selectedAreas') || JSON.parse(sessionStorage.getItem('selectedAreas') != [])){
        sessionStorage.removeItem('selectedAreas')
        console.log(sessionStorage.getItem('selectedAreas'))
    }
    

    switch(e.target.value){
        case "Toshkent":
            areas.value = cities[1].areas
            break;

        case "Toshkent Viloyati":
            areas.value = cities[2].areas
            break;

        case "Farg'ona":
            areas.value = cities[3].areas
            break;

        case "Andijon":
        areas.value = cities[4].areas
            break;

        case "Buxoro":
        areas.value = cities[5].areas
            break;

        case "Jizzax":
        areas.value = cities[6].areas
            break;

        case "Qashqadaryo":
        areas.value = cities[7].areas
            break;

        case "Navoi":
        areas.value = cities[8].areas
            break;

        case "Namangan":
        areas.value = cities[9].areas
            break;

        case "Samarqand":
        areas.value = cities[10].areas
            break;
        
        case "Surxandaryo":
        areas.value = cities[11].areas
            break;

        case "Sirdaryo":
        areas.value = cities[12].areas
            break;

        case "Xorazm":
        areas.value = cities[13].areas
            break;

        default:
        areas.value = cities[0].areas
    }

    isCityVisible.value = 1
}


</script>

<template>
    <div class="filtr__address__wrapper filtr__element__wrapper">
        <div class="filtr__element">
            <div class="filtr__address__text__wrapper">
                <p class="filtr__element__text">Shaxar va rayon</p>
            </div>
            <div class="filtr__address__input__wrapper">
                <select v-model="selectedCity" @change="chooseAreas" name="filtr__element__input" class="filtr__element__input">
                    <option  :value="city.name" v-for="city in cities" :key="city.id">{{ city.name }}</option>
                </select>
            </div>
        </div>
        <div class="filtr__areas__wrapper filtr__element__wrapper">
                <areas-component :checkedAreas="checkedAreas" :visibleOrNot=isCityVisible :areas = areas></areas-component>
        </div>
    </div>  
</template>

<style scoped>
.filtr__address__wrapper{
    display: grid;
    grid-template-areas: 
    'cities'
    'areas';
    grid-area: address;
    margin-bottom: 10px;
    margin-right: 20px;
}

.filtr__areas__wrapper{
    margin-top: 20px;
    grid-area: areas;
}
.filtr__address__text__wrapper{
    margin-bottom: 10px;
}
.filtr__element{
    display: grid;
    align-content: start;
    grid-template-areas: 
    'tx'
    'inp'
    ;
    grid-area: cities;
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
margin-left: 8px;
}
.filtr__element__input{
    display: inline;
    padding-left: 10px;
    height: 30px;
width: 16vw;
border-radius: 5px;
border: 1px solid #DAD9D9;
}
</style>