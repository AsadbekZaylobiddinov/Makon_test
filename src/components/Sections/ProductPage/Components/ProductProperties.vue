<script setup>
import useProductStore from '../../../../stores/product/product';

var store = useProductStore()

var properties = store.getProductProperties

console.log(properties)

</script>

<template>
    <div class="product__properties">
        <div class="product__properties__wrapper">
            <div class="producty__property" v-for="(property, index) in properties" :key="index">
                <p class="producty__property__key__value"><span class="producty__property__key">{{ property.key}}</span>: {{ property.value}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.product__properties__wrapper{
    display: grid;
    grid-template-columns: repeat(4, 1fr );
}
.producty__property{
    justify-self: center;
    text-align: center;
    margin-top: 30px;
}
.producty__property__key__value{
    font-weight: 600;
    font-size: 20px;
    font-family:cursive;
}
.producty__property__key{
    color: rgb(79, 82, 82);
}
</style>