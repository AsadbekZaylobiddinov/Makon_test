<script setup>

var props = defineProps(['imagePath'])

</script>

<template>
    <div class="product__image__container">
        <img class="product__image__main" :src="props.imagePath" alt="E'lon rasmi">
    </div>
</template>

<style scoped>
img{
    width: 100%;
    height: 100%;
}
.product__image__container{
    height:230px
}

@media (max-width: 900px) {
    .product__image__container{
    height:170px
}}

@media (max-width: 600px) {
    .product__image__container{
    height:160px
}
}
@media (max-width: 500px) {
    .product__image__container{
    height:130px
}
}
@media (max-width: 400px) {
    .product__image__container{
    height:110px
}
}
</style>