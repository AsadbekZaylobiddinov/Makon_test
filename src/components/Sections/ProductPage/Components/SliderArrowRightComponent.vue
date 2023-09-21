<script setup>

var emit = defineEmits('turnRightActiveElement')

</script>

<template>
    <div class="slider__arrow__right__container"  @click="emit('turnRightActiveElement')">
        <div class="slider__arrow__button__container">
            <button class="slider__arrow__button">
                <img class="slider__arrow__right__image" src="../Assets/arrow-right.png" alt="">
            </button>
        </div>
    </div>
</template>

<style scoped>
.slider__arrow__right__container{
    margin-left: 30px;
    justify-self: start;
    align-self: center;
    cursor: pointer;
}
.slider__arrow__button{
    width: 32px;
    height: 29px;
    border: none;
    background-color: transparent;
}
.slider__arrow__right__image{
    max-width: 32px;
    cursor: pointer;
}
</style>