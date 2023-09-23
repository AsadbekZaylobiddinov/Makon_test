<script setup>
import { useCheckAuth } from '../../composables/checkAuth';

let useAuth = useCheckAuth()

let isAuthorized = useAuth.isAuth(false)


</script>

<template>
    <div v-if="isAuthorized != 200" class="fixed__create__ad__container">
        <div class="fixed__create__ad">
            <p>+</p>
            <h3> E'lon qo'yish</h3>
        </div>
    </div>
</template>

<style scoped>
.fixed__create__ad__container{
    width: 100vw;
    height: 70px;
    border-top: 1px solid rgb(207, 204, 204);
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    background-color: white;
    position: fixed;
    bottom: 0;
    display: grid;
    justify-content: center;
}
.fixed__create__ad{
    display: grid;
    grid-template-areas: '1 2';
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #0074D9;
}
p{
    font-size: 3.3rem;
    margin-right: 10px;
}

@media (max-width: 400px){
    .fixed__create__ad__container{
        height: 50px;
    }
}
</style>