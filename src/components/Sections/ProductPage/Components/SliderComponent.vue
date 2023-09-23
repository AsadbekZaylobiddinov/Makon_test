<script setup>
import SliderArrowLeftComponent from './SliderArrowLeftComponent.vue';
import {ref, reactive} from 'vue'
import SliderArrowRightComponent from './SliderArrowRightComponent.vue';
import SliderElementComponent from './SliderElementComponent.vue';
import SliderIndicatorComponent from './SliderIndicatorComponent.vue';
import useProductStore from '../../../../stores/product/product';

var store = useProductStore()

var productImagePreview = store.getProductImagePreview

var activeElement = ref(productImagePreview)

var productImages = store.getProductImagesArray

var activeClasses = reactive([])

var previewImageActiveClass = ref('active__indicator')

var isTurnedLeft = ref(false)

productImages.forEach((v, i, array) => {
    activeClasses.push("no__active__indicator")
})

function turnLeft(){
    console.log("TURN LEFT")
    if(productImages[0].path == activeElement.value.path){
        activeElement.value = productImagePreview
        console.log('Active Element is 0')

        
    }
    else{
        console.log('Active Element is not 0')
        productImages.forEach((v,i,array) => {
            if(activeElement.value.path == v.path){
                activeElement.value = array[i - 1]
                console.log('Active Element is not 0 ')
            }


        })
    }
}

function turnRight(){
    
    if(!activeElement.value.path){
        activeElement.value = productImages[0]
    }
    else{
        if(activeElement.value.path){
            if(activeElement.value.path != productImages[productImages.length - 1].path){
                var index = productImages.findIndex((v, i) => v.path == activeElement.value.path)
                activeElement.value = productImages[index + 1]
            }
        }
    }
}

function changeActiveElement(data){
    if(data.activeElementText == 1){
        activeElement.value = productImagePreview
        console.log(1)
    }
    else{

        if(productImages[data.activeElementText - 2]){
            activeElement.value = productImages[data.activeElementText - 2]
            console.log("Uraa")
            console.log(activeElement.value)
        }
    }
}

</script>

<template>
    <div class="product__slider__container">
        <slider-arrow-left-component @turnLeftActiveElement="turnLeft"></slider-arrow-left-component>
        <slider-element-component :activeElement="activeElement"></slider-element-component>
        <slider-arrow-right-component @turnRightActiveElement="turnRight"></slider-arrow-right-component><br>
        <!-- <slider-indicator-component 
        :activeClasses="activeClasses"
        :isTurnedLeft="isTurnedLeft" @activeElementChanged="changeActiveElement" 
        :activeElement="activeElement" class="slider__indicator__class" 
        :productImages="productImages"
        :previewImageActiveClass="previewImageActiveClass"></slider-indicator-component> -->
    </div>
</template>

<style scoped>
.product__slider__container{
    display: grid;
    align-items: start;
    grid-template-columns: 1fr 5fr 1fr;
    cursor: pointer;
}
/* .slider__indicator__class{
    justify-self: center;
    grid-area: sliderIndicator;
} */

@media (max-width: 800px){
    .product__slider__container{
        justify-self: center;
    }
}
</style>