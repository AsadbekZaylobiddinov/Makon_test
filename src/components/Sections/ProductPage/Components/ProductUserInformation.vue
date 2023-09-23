<script setup>
import { ref } from 'vue'
import useProductStore from '../../../../stores/product/product';
import { addToFavouriteProduct } from '../../../../services/favouriteProduct';
import { useRoute } from 'vue-router';

var successTop = ref(-10)

var notAuthorizedTop = ref(-10)

var errorTop = ref(-10)

var alreadyExistErrorTop = ref(-10)

var route = useRoute()

var productStore = useProductStore()

var user = productStore.getProductUser

var city = productStore.getProductCity

var area = productStore.getProductArea

var phoneNumber = ref("Telefon Raqamni ko'rish")



function exitSuccesfullWindow(){
    successTop.value = -10
}

function exitNotAuthorizedWindow(){
    notAuthorizedTop.value = -10
}

function exitErrorWindow(){
    errorTop.value = -10
}

function exitAlreadyExistWindow(){
    alreadyExistErrorTop.value = -10
}

function setPhoneNumber(){
    phoneNumber.value = user.phoneNumber
}

async function addToFavouriteProducts(){

    let isAuthenticated = sessionStorage.getItem('makon__authentication__status__secret')

    if(isAuthenticated == 200){
        await addToFavouriteProduct(route.params.id)
        .then((data) => {
            successTop.value = 5

            setTimeout(exitSuccesfullWindow, 2000);
        })
        .catch((e) => {
            if(e.response.data.code == 409){

                alreadyExistErrorTop.value = 5

                setTimeout(exitAlreadyExistWindow, 2000);   
            }
            else{
                errorTop.value = 5

                setTimeout(exitErrorWindow, 2000);   
            }
        })

        
    }
    else{
        notAuthorizedTop.value = 5

        setTimeout(exitNotAuthorizedWindow, 2000);
    }
    
}

</script>
<template>
    <div class="product__user__information__container">
        <div class="product__user__information">
            <div class="user__information__wrapper">
            <div class="user_information__container">
                <p class="user_information__container__text">Foydalanuvchi ma'lumotlari</p>
            </div>
            <div class="product__user__name__container">
                <p class="product__user__name__text"><span class="name__wrapper">Ism:</span> {{ user.name }}</p>
            </div>
            <div class="product__city__container">
                <p class="product__city__text" ><span class="city__wrapper">Shaxar:</span> {{ city }} </p>
            </div>
            <div class="product__area__container">
                <p class="product__area__text"><span class="area__wrapper">Rayon:</span> {{ area }} </p>
            </div>
            </div>
            <div class="user__number__container">
            <button class="user__number" @click="setPhoneNumber">{{ phoneNumber }}</button>
            </div>
            <div class="add__to__favourites__container">
            <button @click="addToFavouriteProducts" class="add__to__favourites" >Saralanganlarga qo'shish</button>
            </div>
        </div>     
        <div class="successfully__added" :style="{top: successTop + 'vh'}">
            <div class="successfully__added__container">
                <p>Muvaffaqiyatli saralanganlarga qo'shildi</p>
            </div>
        </div>
        <div class="not__authorized" :style="{top: notAuthorizedTop + 'vh'}">
            <div class="not__authorized__container">
                <p>Qo'shish uchun profilingizga kiring</p>
            </div>
        </div>
        <div class="error" :style="{top: errorTop + 'vh'}">
            <div class="error__container">
                <p>Qo'shishda no'malum xato yuz berdi, iltimos boshqattan urining</p>
            </div>
        </div>
        <div class="already__exist" :style="{top: alreadyExistErrorTop + 'vh'}">
            <div class="already__exist__container">
                <p>Bu e'lonni qo'shib bo'lgansiz</p>
            </div>
        </div>
    </div>
    
</template>

<style scoped>
.product__user__information__container{
    display: grid;
    align-content: start;
    justify-content: center;
}
.user_information__container{
    margin-bottom: 10px;
}
.user_information__container__text{
    font-size: 1.5rem;
    /* font-weight: 700; */
    color: rgb(158, 153, 153);
}
.user__information__wrapper{
    grid-area: info;
    display: inline-grid;
    padding: 20px;
    justify-content: center;
    align-content: start;
    margin-top: 50px;
    margin-bottom: 20px;
    border-radius: 20px;
    /* background-color: #a2cbf2; */
    /* color: rgb(163, 163, 163); */
    border: rgb(221, 220, 220) solid 1px;
}
.user__number__container{
    margin-top: 20px;
    align-self: end;
    grid-area: number;
}
.user__number{
    font-size: 1rem;
}
.add__to__favourites__container{
    grid-area: add;
    align-self: start;
}
.product__user__name__container{
    display: grid;
    justify-content: start;
    grid-template-areas: 'img text';
    margin-bottom: 15px;
    /* color: rgb(229, 232, 235); */
}
.name__wrapper{
    font-weight: 700;
}
.product__user__name__text{
grid-area: text;
align-self: center;
font-family: Inter;
font-size: 1.3rem;
font-style: normal;
font-weight: 400;
line-height: normal; 
}

.product__city__text{
font-family: Inter;
font-size: 1.3rem;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom: 15px;
}
.city__wrapper{
    font-weight: 700;
}
.product__area__text{
font-family: Inter;
font-size: 1.3rem;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.area__wrapper{
    font-weight: 700;
}
.user__number__container, .add__to__favourites__container{
    display: grid;
    justify-content: center;
    justify-self: center;
}
.user__number, .add__to__favourites{
    background-color: #0074D9;
    padding: 10px;
    width: 22vw;
    font-weight: 700;
    border-radius: 10px;
    border: none;
    color: white;
    cursor: pointer;
}
.add__to__favourites__container{
    margin-top: 20px;
}
.add__to__favourites{
    font-size: 1rem;
    background-color: #d97700; 
}
.successfully__added, .error, .not__authorized, .already__exist{
    display: grid;
    justify-content: center;
    position: absolute;
    left: 0px;
    width: 100vw;
    background-color: transparent;
    transition: top 0.3s ease-in-out;
}
.successfully__added__container, .error__container, .not__authorized__container, .already__exist__container{
    display: grid;
    align-content: center;
    justify-content: center;
    background-color: #ffffff;
    width: 20vw;
    border-radius: 10px;
    height: 5vh;
    border: 1px rgb(166, 162, 162) solid;
    padding: 10px;
    color: green;
    font-size: 1em;
}
.error__container, .not__authorized__container, .already__exist__container,.error__container{
    color: red;
}

@media (max-width: 800px){
    .product__user__information{
        width: 95vw;
        display: grid;
        grid-template-areas: 
        'info number'
        'info add'
        ;
    }
}

@media (max-width: 515px){
    .product__user__information{
        width: 95vw;
        display: grid;
        grid-template-areas: 
        'info info'
        'number add'
        ;
    }
    .user__number, .add__to__favourites{
        width: 40vw;
    }
    .user__information__wrapper{
        margin-top: 0;
    }
}
</style>