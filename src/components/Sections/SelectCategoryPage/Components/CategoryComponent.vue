<script setup>
import { useRouter } from 'vue-router';

let router = useRouter()

let props = defineProps(['category'])

function toCreateAdPage(){
    if(sessionStorage.getItem('currentCategory')){
        sessionStorage.removeItem('currentCategory')
    }
    sessionStorage.setItem('currentCategory', props.category.id)
    router.push(`/select-categories/${props.category.name}/create-ad`)
}
</script>

<template>
    <div class="category__component">
        <div @click="toCreateAdPage" class="category__container">
            <h3>{{ props.category.name }}</h3>
        </div>
    </div>
</template>

<style scoped>
.category__component{
    display: grid;
    justify-content: center;
    cursor: pointer;
}
.category__container{
    display: grid;
    justify-content: center;
    align-content: center;
    color: white;
    width: 15vw;
    height: 15vh;
    background-color: #0074D9;
    border-radius: 15px;
}
</style>