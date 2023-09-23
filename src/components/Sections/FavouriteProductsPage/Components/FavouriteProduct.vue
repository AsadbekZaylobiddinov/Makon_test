<script setup>
import { useRouter } from 'vue-router';
import { deleteFavouriteProductById } from '../../../../services/favouriteProduct'

let router = useRouter()

let props = defineProps(['product', 'favouriteProductId'])

let date = props.product.createdAt.split('T')

let monthNumber = date[0].split('-')

let monthName = ''

if(Number(monthNumber[1]) == 0o1){
    monthName = 'Yanvar'
}

else if(Number(monthNumber[1]) == 0o2){
    monthName = 'Fevral'
}

else if(Number(monthNumber[1]) == 0o3){
    monthName = 'Mart'
}

else if(Number(monthNumber[1]) == 0o4){
    monthName = 'Aprel'
}

else if(Number(monthNumber[1]) == 0o5){
    monthName = 'May'
}

else if(Number(monthNumber[1]) == 0o6){
    monthName = 'Iyun'
}

else if(Number(monthNumber[1]) == 0o7){
    monthName = 'Iyul'
}

else if(monthNumber[1] == '08'){
    monthName = 'Avgust'
}

else if(monthNumber[1] == '09'){
    monthName = 'Sentyabr'
}

else if(Number(monthNumber[1]) == 10){
    monthName = 'Octyabr'
}

else if(Number(monthNumber[1]) == 11){
    monthName = 'Novabr'
}

else if(Number(monthNumber[1]) == 12){
    monthName = 'Dekabr'
}

function lookProduct(){
    router.push(`/products/${props.product.id}`)
}

async function deleteProduct(){
    await deleteFavouriteProductById(props.favouriteProductId)

    window.location.reload()
}

</script>
 
<template>
    <div class="favourite__product">
        <div class="container">
            <div v-if="props.product.previewImagePath" class="favourite__product__preview">
                <div class="preview__container">
                    <img  class="preview__img" :src="props.product.previewImagePath" alt="Saqlangan Rasm">
                </div>
            </div>
            <div class="without__image" v-else>
                <div class="no__image__preview">
                    <p>Rasm mavjud emas</p>
                </div>
            </div>
            <div class="product__information">
                <div class="product__title">
                    <h3 class="product__title__text">
                        {{ props.product.title }}
                    </h3>
                </div>
                <div class="product__price">
                    <h4 class="product__price__text">{{ props.product.price + ' ' + props.product.currency.name }}</h4>
                </div>
                <div class="created__at" style="margin-top: 10px;">
                    <h4 class="created__at__date__text"> {{ monthNumber[2] + ' ' + monthName }}</h4>
                </div>
                <div class="buttons">
                    <div class="look__product">
                        <button @click="lookProduct" class="look__product__button">E'lonni ko'rish</button>
                    </div>
                    <div class="delete__from__favourites">
                        <button @click="deleteProduct" class="delete__from__favourites__button">O'chirish</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.favourite__product{
    margin-bottom: 50px;
    overflow: hidden;
    text-overflow:ellipsis;
}
.product__information{
    height: 100%;
    justify-self: start;
}
.container{
    display: grid;
    grid-template-columns: 1fr 10fr;
    width: 90vw;
    height: 25vh;
    padding-top: 10px;
    padding-bottom: 10px;
    /* padding-left: 5px; */
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
    color: #323232;
    border: 1px rgb(244, 244, 244) solid;
}
.favourite__product__preview{
    display: grid;
    align-items: center;
    justify-items: center;
    justify-self: start;
    max-width: 30vw;
    max-height: 25vh;
}
.preview__container{
    display: grid;
    justify-items: center;
    align-items: center;
    width: 30vw;
    max-height: 25vh;
    overflow: hidden;
}
.preview__img{
    max-width: 25vw;
    max-height: 25vh;
    border-radius: 10px;
}
.without__image{
    display: grid;
    justify-content: center;
    align-content: center;
    width: 30vw;
}
.no__image__preview{
    display: grid;
    justify-content: center;
    align-content: center;
    width: 20vw;
    height: 20vh;
    border-radius: 15px;
    background-color: #0074D9;
    font-size: 30px;
    color: white;
}
.product__desc__text{
height: 10vh;
width: 25vw;
overflow: hidden;
text-overflow: ellipsis;
}
.product__price{
    margin-top: 10px;
}
.buttons{
    display: grid;
    grid-template-areas: '1 2';
    margin-top: 20px;
    
}
.buttons button{
    padding: 8px;
    border-radius: 10px;
    border: none;
    color: white;
}
.delete__from__favourites__button{
    background-color: red;
    font-size: 1rem;
}
.look__product__button{
    cursor: pointer;
    background-color: #0074D9;
    margin-right: 20px;
    font-size: 1rem;
}

</style>