<script setup>
import TabComponent from './Components/TabComponent.vue';
import useProductStore from '../../../stores/product/product';
import { ref, watch } from 'vue'

var store = useProductStore()

var isLoaded = ref(store.getIsLoaded)

watch(isLoaded, (o , n) => {
    isLoaded.value = true
})

</script>

<template>
    <section class="third__block">
        <tab-component v-if="isLoaded"></tab-component>
    </section>
</template>

<style scoped>

</style>