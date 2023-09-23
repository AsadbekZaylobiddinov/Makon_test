<script setup>
import { ref, computed } from "vue"
var props = defineProps(['productTitle','productCity','productArea','productPrice','productCurrency', 'productCreatedDate'])

var favouriteStatus = ref(0)

var checkCurrency = computed(() => {
    return props.productCurrency == "SUM"
})

function checkFavouriteStatus(e){
    console.log('favouriteStatus')
    e.preventDefault()
    if(favouriteStatus){
        favouriteStatus.value = 0
    }
    else{
        favouriteStatus.value = 1
        }
}
</script>

<template>
    <div class="product_information__container">
    <div class="product__title">
        <div class="product__title__text">
            {{ props.productTitle }}
        </div>
    </div>
    <div class="product__address__price__favourite">
        <div class="product__address__text">
            <p>{{ props.productCity }}, {{ props.productArea }} 
            </p>
        </div>
        <div class="product__price">
            <p>{{ props.productPrice }}
            <span v-if="checkCurrency">SUM</span>
            <span v-else>USD</span>
            </p>
        </div>
    </div>
    </div>
    
</template>

<style scoped>
.product__title{
    grid-area: title;
    padding-left: 20px;
    padding-top: 20px;
}
.product__title__text{
color: #2f2e2e;
font-family: Inter;
font-size: 1.5rem;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.product__address__price__favourite{
    display: grid;
    grid-template-areas: 
    'address favourite'
    'price favourite'
    ;
    margin-top: 40px;
    padding-left: 20px;
    /* padding-top: 20px; */
    padding-bottom: 20px;
}
.product__address__text p{
color: #4E4747;
font-family: Inter;
font-size: 1.3rem;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.product__price{
    grid-area: price;
}
.product__price *{
color: #000;
margin-top: 20px;
font-family: Inter;
font-size: 1.3rem;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.add_to_favourite{
    grid-area: favourite;
}

@media (max-width: 600px){
    .product__address__price__favourite{
        margin-top: 20px;
        padding-left: 5px;
    }
    .product__price *{
        margin-top: 10px;
    }
    .product__title{
        padding-left: 5px;
    }
}
</style>