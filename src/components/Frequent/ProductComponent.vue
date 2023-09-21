<script setup>
import ProductImageComponent from './ProductImageComponent.vue';
import ProductInformationComponent from './ProductInformationComponent.vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';

var route = useRoute()

var props = defineProps(['product'])

var router = useRouter()

function toProductPage(){
    router.push(`/products/${props.product.id}?currency=${route.query.currency || ''}`)
}

</script>

<template>
    <div @click="toProductPage" class="product__container">
        <div class="product__main">
            <product-image-component v-if="props.product.previewImagePath" :imagePath="props.product.previewImagePath"></product-image-component>
            <div v-else class="no__image">
                <p class="no__image__tx">Rasm Mavjud Emas</p>
            </div>
            <product-information-component class="product__information"
            :productArea="props.product.area.name"
            :productCity="props.product.city.name"
            :productPrice="props.product.price"
            :productTitle="props.product.title"
            :productCurrency="props.product.currency.name"
            >
            </product-information-component>
        </div>
    </div>
</template>

<style>
.product__container{
    border: 1px solid #CACACA;
    background: #FFF;
    margin-top: 40px;
    cursor: pointer;
}
.no__image{
    display: grid;
    align-content: center;
    justify-content: center;
    background-color: #CACACA;
    height: 230px;
    max-height: 305px;
    border: 1px #CACACA solid;
}
.no__image__tx{
    font-size: 26px;
    margin-top: auto;
    margin-bottom: auto;
}
.product__information{
    padding-left: 10px;
    padding-top: 10px;
}
</style>