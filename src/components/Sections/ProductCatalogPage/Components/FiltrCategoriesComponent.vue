<script setup>
import SubCategoriesCheckbox from "./SubCategoriesCheckbox.vue";
import { reactive, ref, onMounted } from "vue"
import { useRouter, useRoute } from "vue-router";

var router = useRouter()
var route = useRoute()

// var queryParams = route.query


var subCategoryVisible = ref(0)
 
var visibleSubCategories = ref([])
var checkedSubCategories = ref([])
checkedSubCategories.value = visibleSubCategories.value
var selectedCategory = ref("Barcha Kategoriyalar")

onMounted(() => {
    if(route.query.Category) selectedCategory.value = route.query.Category 
})
var categories = reactive([
    { id: 1, name: "Barcha Kategoriyalar", subCategories: []},
    { id: 2, name: "Ko'chmas Mulk", subCategories: [
        { id: 1, name: 'Uy'},
        { id: 2, name: 'Dacha'},
        { id: 3, name: 'Ofis'},
    ]},
    { id: 3, name: "Mashinalar", subCategories: [
        { id: 1, name: 'Yangil Mashinalar'},
        { id: 2, name: 'Yuk Mashinalar'},
        { id: 3, name: 'Kerakmas'},
    ]},
    { id: 4, name: "Mebel", subCategories: [
        { id: 1, name: 'Yotoqxona Mebeli'},
        { id: 2, name: 'Oshxona Mebeli'},
        { id: 3, name: 'Mehmonxona Mebeli'},
    ]},
])



 
function chooseSubCategory(e){

    checkedSubCategories.value.forEach(function(el, index, array){
        array[index] = false
    })

    const selectedCategory = e.target.value;
    const currentQuery = {...route.query}; // Создаем копию текущих query параметров
    console.log(currentQuery)
    currentQuery.Category = selectedCategory; // Добавляем новый query параметр

    // Обновляем query параметры с помощью router.push
    router.push({ query: currentQuery });

    if(sessionStorage.getItem('selectedSubCategories') || JSON.parse(sessionStorage.getItem('selectedSubCategories') != [])){
        sessionStorage.removeItem('selectedSubCategories')
        console.log(sessionStorage.getItem('selectedSubCategories'))
    }


    switch(e.target.value){
        case "Ko'chmas Mulk":
            // router.push({ query: { selectedCategory: "Ko'chmas Mulk" } });
            visibleSubCategories.value = categories[1].subCategories
            break;

        case "Mashinalar":
            // router.push({ query: { selectedCategory: 'Mashinalar' } });
            visibleSubCategories.value = categories[2].subCategories
            break;

        case "Mebel":
            // router.push({ query: { selectedCategory: 'Mebel' } });
            visibleSubCategories.value = categories[3].subCategories
            break;

    }
    subCategoryVisible.value = 1
}

</script>

<template>
    <div class="filtr__category__wrapper filtr__element__wrapper">
        <div class="filtr__element">
            <div class="filtr__category__text__wrapper">
                <p class="filtr__element__text">Kategoriya</p>
            </div>
            <div class="filtr__category__input__wrapper">
                <select v-model="selectedCategory" @change="chooseSubCategory" name="filtr__element__input" class="filtr__element__input">
                    <option :value="category.name" v-for="category in categories" :key="category.id">{{ category.name }}</option>
                </select>
            </div>
        </div>
        <div class="filtr__subCategory__wrapper filtr__element__wrapper">
            <sub-categories-checkbox :checkedSubCategory="checkedSubCategories" :subCategories="visibleSubCategories" :visibleOrNot="subCategoryVisible"></sub-categories-checkbox>
        </div>
    </div>
</template>

<style scoped>
.filtr__category__wrapper{
    display: grid;
    align-content: start;
    grid-template-areas: 
    'categories'
    'subCategories';
    margin-left: 20px;
    margin-right: 20px;
}
.filtr__category__text__wrapper{
    margin-bottom: 10px;
}
.filtr__element{
    display: grid;
    grid-area: categories;
    align-content: start;
    grid-template-areas: 
    'tx'
    'inp'
    ;
}
.filtr__subCategory__wrapper{
    margin-top: 20px;
    grid-area: subCategories;
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

