<script setup>
import { useRouter } from 'vue-router';
let router = useRouter()


function createAd(){
    router.push(`/select-categories`)
}

</script>

<template>
    <div class="create__ad">
        <button @click="createAd" class="create__ad__button">E'lon qo'yish</button>
    </div>
</template>

<style>
.create__ad{
    display: inline;
    margin-left: 30px;
}
.create__ad__button{
    display: inline;
    cursor: pointer;
    width: 120px;
    height: 30px;
    color: rgb(0, 0, 0);
    border: 1px solid white;
    text-align: center;
    background-color: white;
    border-radius: 10px;
}

@media (max-width: 800px){
    .create__ad{
        display: none;
    }
}
</style>