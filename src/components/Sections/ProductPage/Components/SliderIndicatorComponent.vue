<script setup>

import { reactive, ref, watch} from 'vue'

var props = defineProps(['productImages', 'isTurnedLeft', 'activeElement', 'activeClasses', 'previewImageActiveClass' ])

var emit = defineEmits(['activeElementChanged'])

var previewImageActiveClass = ref(props.previewImageActiveClass)

var activeClasses = ref(props.activeClasses)

function changeActiveElement(e){

    let activeElementText = e.target
    if (activeElementText) {
    activeElementText = activeElementText.dataset.number;
    if(activeElementText == 1){
        activeClasses.forEach((v, i, array) => {
            array[i] = 'no__active__indicator'
})
        previewImageActiveClass.value = "active__indicator"
    }
    else{
        activeClasses.forEach((v, i, array) => {
        if(v != activeElementText - 2){
            array[i] = 'no__active__indicator'
        }
})
        previewImageActiveClass.value = "no__active__indicator"
        activeClasses[activeElementText - 2] = "active__indicator"
        

    }
    emit('activeElementChanged', {
      activeElementText: activeElementText
    });
  }
}

</script>

<template>
   <div class="slider__indicator__container">
    <div @click="changeActiveElement" class="slider__indicator" data-number="1" :class="previewImageActiveClass">
        <p @click="changeActiveElement" data-number="1" >1</p>
    </div>
    <div @click="changeActiveElement" class="slider__indicator" v-bind:data-number="p + 1" v-for="p in props.productImages.length" :key="p" :class="activeClasses[p - 1]">
        <p @click="changeActiveElement" v-bind:data-number="p + 1" >{{ p + 1  }}</p>
    </div>
   </div> 
</template>

<style scoped>
.slider__indicator__container{
    margin-top: 10px;
    display: inline;
}
.slider__indicator__container *{
    display: inline-block;
}
.slider__indicator{
    display: inline-grid;
    align-content: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 5px;
    background-color: rgb(114, 117, 122);
    color: white;
    margin-left: 10px;
    cursor: pointer;
}
.active__indicator{
    width: 35px;
    height: 35px;
    background-color: rgb(79, 79, 79);
}
</style>