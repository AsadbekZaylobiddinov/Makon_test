<script setup>
var props = defineProps(['activeElement'])

</script>

<template>
    <div class="slider__element__container">
        <div class="slider__element__image__container">
            <img class="slider__element__image" v-if="!props.activeElement.path" :src="props.activeElement" alt="E'lon rasmi">

            <img class="slider__element__image" v-if="props.activeElement.path" :src="props.activeElement.path" alt="E'lon rasmi">
        </div>
    </div>
</template>

<style scoped>
.slider__element__container{
    margin-top: 20px;
}
.slider__element__image__container{
    height: 60vh;
    width: 40vw;
    border-radius: 10px;
    padding: 20px;
    background-color: rgb(255, 255, 255);
    display: grid;
    align-content: center;
    justify-content: center;
}
.slider__element__image{
    width: 40vw;
    max-height: 60vh;
    border-radius: 10px;
}
</style>