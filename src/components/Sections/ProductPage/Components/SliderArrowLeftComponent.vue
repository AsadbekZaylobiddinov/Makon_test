<script setup>

var emit = defineEmits('turnLeftActiveElement')

</script>

<template>
    <div class="slider__arrow__left__container" @click="emit('turnLeftActiveElement')">
        <div class="slider__arrow__button__container">
            <button class="slider__arrow__button">
                <img class="slider__arrow__left__image" src="../Assets/arrow-left.png" alt="">
            </button>
        </div>
    </div>
</template>

<style scoped>
.slider__arrow__left__container{
    align-self: center;
    cursor: pointer;
}
.slider__arrow__button{
    width: 32px;
    height: 29px;
    border: none;
    background-color: transparent;
}
.slider__arrow__left__image{
    max-width: 32px;
    cursor: pointer;
}

@media (max-width:800px){
    .slider__arrow__left__container{
        justify-self: end;
    }
}
</style>