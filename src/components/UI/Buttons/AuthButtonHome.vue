<template>
    <div class="auth__button__home__main" @click="toAuthPage">
        <button class="auth__button__home">Kirish</button>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

var router = useRouter()
   function toAuthPage(){
        router.push('/auth')
    }
</script>

<style scoped> 
.auth__button__home__main{
    display: grid;
    justify-content: end;
    cursor: pointer;
    width: 155px;
    height: 40px;
    
}
.auth__button__home{
    width: 152px;
    height: 36px;
    background-color:transparent;
    border: none;
    font-size: 1rem;
    color: white;
}
@media (max-width: 600px){
    .auth__button__home{
        width: 100px;
    height: 36px;
    background-color:transparent;
    border: none;
    font-size: 1rem;
    color: white;
    }
}
</style>