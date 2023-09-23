<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
var props = defineProps(['width', 'bckImage'])

var firstComponent = props.bckImage == 1 ? ref(true) : ref(false)

var secondComponent = props.bckImage == 2 ? ref(true) : ref(false)

var route = useRoute()

var router = useRouter()

var searchValue = ref('')

onMounted(() => {
    if(route.query.search) searchValue.value = route.query.search 
})

function inputSearch(){
    const currentQuery = {...route.query}; // Создаем копию текущих query параметров
    
    console.log(currentQuery)

    currentQuery.search = searchValue.value; // Добавляем новый query параметр

    router.push(
        {
            query: currentQuery 
        }
        );
}

function push(){
    if(route.path == '/'){
        router.push(
            {
                path: "/product-catalog",
                query: {
                    search: searchValue.value
                }
            }
            )
    }
    if(route.path == '/product-catalog'){
        location.reload()
    }
}

</script>

<template>
    <div class="search__container">
        <div class="search__input__main">
            <input @input="inputSearch" v-model="searchValue" class="search__input" :style="{width:props.width}" type="text" placeholder="E'lon sarlavhasini kiriting: ">
        </div>
        <div class="search_submit_main">
                <button @click="push" class="search_submit" :class="{ 
                    searchOne: firstComponent,
                    searchTwo: secondComponent}">
                </button>
        </div>
    </div>
</template>

<style scoped>
.search__container{
    display: grid;
    justify-content: center;
    grid-column-gap: 25px;
    grid-template-areas: 'inp btn';
}
.search__input__main{
    width: 100%;
    grid-area: inp;
}
.search__input{
height: 44px;
font-size: 1rem;
box-sizing: border-box;
padding-left: 10px;
background: #FFFFFF;
border: 1px solid #DCDCDC;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}
.search__input:focus {
  outline: none;
  border: none;
}
.search_submit_main{
    padding-top: 10px;
    grid-area: btn;
}
.search_submit{
    width: 32px;
    height: 29px;
    border: none;
    background-color: transparent;
    background-image: url('../../../Sections/HomePage/Assets/search_button.png');
}
.searchOne{
    background-image: url('../../../Sections/HomePage/Assets/search_button.png');
}
.searchTwo{
    background-image: url('../../../Sections/ProductCatalogPage/Assets/search_button.png');
}

@media (max-width: 700px) {
    
}
</style>