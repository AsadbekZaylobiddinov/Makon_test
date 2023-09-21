<script setup>
import useProductStore from '../../../../stores/product/product';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

var router = useRouter()

var store = useProductStore()

var { name } = store.getProductUser

var phoneNumber = ref("Telefon raqamni ko'rish")

function setPhoneNumber(){

    var user = store.getProductUser

    phoneNumber.value = user.phoneNumber

}

function toUsersProducts(){

    console.log(store.getProductUser)

    var { id } = store.getProductUser

    router.push(`/users/${id}/ads`)

}

</script>

<template>
    <div class="user__information__container">
        <div class="user__information__container__wrapper">
            <div class="user__name">
                <img src="../../../Frequent/Assets/user_face2.png" alt="">
                <p class="user__name__text">{{ name }}</p>
            </div>
            <div class="user__phone__number">
                <button @click="setPhoneNumber" class="user__phone__number__button">{{ phoneNumber }}</button>
            </div>
            <div @click="toUsersProducts" class="other__products">
                <p class="other__products__text">Foydalanuvchini boshqa e'lonlari</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.user__information__container{
    display: grid;
    align-content: center;
    /* width: 100vw; */
    height: 30vh;
    background-color:#0074D9;
    padding-left: 10%;
}
.user__information__container__wrapper{
    display: grid;
    grid-template-areas: 
    'one three'
    'two three';
}
.user__name{
    display: grid;
    grid-template-areas: '1 2';
    grid-area: one;
    justify-content: start;
    align-items: center;
    color: white;
}
.user__name__text{
color: #FFF;
font-family: Inter;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left: 10px;
}
.user__phone__number{
    align-self: center;
    grid-area: three;
}
.user__phone__number__button{
    background-color: #ffffff;
    padding: 10px;
    width: 15vw;
    font-weight: 700;
    border-radius: 10px;
    border: none;
    color: #0074D9;
    cursor: pointer;
}
.other__products{
    grid-area: two;
    margin-top: 10px;
    cursor: pointer;
}
.other__products__text{
color: #FFF;
font-family: Inter;
font-size: 18px;
font-style: italic;
font-weight: 100;
line-height: normal;
text-decoration: underline;
}
</style>