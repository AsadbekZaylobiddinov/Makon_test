<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import useProductStore from '../../../../stores/product/product';

var store = useProductStore()

var route = useRoute()

var additional = ref(store.getProductAdditional)

var title = ref(store.getProductTitle)

var price = ref(store.getProductPrice)

var valyuta = route.query.currency != 'USD' ? true : false

var createdAt = ref(store.getCreatedAt)

function formatText(text) {
      return text.replace(/\n/g, "<br>");
    }

function splitDate(date) {
    var splitted = date.split(' ')
    return splitted[0]
}

</script>

<template>
    <div class="product__additional">
        <div class="product__additional__wrapper">
            <div class="product__additional__text__wrapper">
                <h2 class="product__title__text">{{ title }}</h2>
                <h3 class="product__created__data">Joylashtirilgan sana: {{ splitDate(createdAt) }}</h3>
                <h3 class="product__price__text">{{ price }}
                    <span class="valyuta" v-if="valyuta">SUM</span>
                    <span class="valyuta" v-if="!valyuta">USD</span>
                </h3>
                <p class="product__additional__text" v-html="formatText(additional)"></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.product__title__text{
    font-family:cursive;
    margin-bottom: 20px;
}
.product__created__data{
    margin-bottom: 20px;
}
.product__price__text{
    font-family:cursive;
    margin-bottom: 20px;
}
.product__additional__text{
    /* font-family:cursive; */
    word-spacing: 10px;
    line-height: 20px;
    font-size: 1.2rem;
    font-weight: 400;
}
</style>