<script setup>
import { useCheckAuth } from '../../composables/checkAuth';
import { useRouter } from 'vue-router';

let auth = useCheckAuth()

let router = useRouter()

let status = auth.isAuth(false)

function toSelectCategories(){
    router.push('/select-categories')
}
</script>

<template>
    <div v-if="status == 200" class="authorized__menu__mobile__container">
        <div class="authorized__menu__mobile">
            <div class="look__balance">
               <h3>Hisobni ko'rish</h3> 
            </div>
            <div class="create__ad" @click="toSelectCategories">
                <h3>E'lon qo'yish</h3>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (min-width: 800px){
.authorized__menu__mobile__container{
    display: none;
}
}
@media (max-width: 800px){
    .authorized__menu__mobile__container{
    position: fixed;
    bottom: 0;
    display: grid;
    justify-items: center;
    align-content: center;
    background-color: white;
    width: 100vw;
    height: 40px;
    border: 1px solid #dfdfdf;
}
.authorized__menu__mobile{
    display: grid;
    grid-template-areas: '1 2';
    width: 100vw;
    height: 40px;
}
.look__balance{
    background-color: #0074D9;
    height: 100%;
    color: white;
    display: grid;
    align-content: center;
    justify-content: center;
}
.create__ad{
    display: grid;
    text-align: center;
    align-content: center;
    justify-content: center;
    grid-template-areas: '1 2';
    margin-left: 0;
}
}

</style>