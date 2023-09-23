<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

var router = useRouter()

var props = defineProps(['text'])

var replacedText = computed(() =>{
    if(props.text){
        return props.text.replace('_', ' ');
    }
})

function toProductCatalog(){
    router.push(`/product-catalog?Category=${props.text}`)
}
</script>

<template>
    <div @click="toProductCatalog" class="category__container">
            <div class="category__main">
                <h3 class="category__text">
                    {{ replacedText }}
                </h3>    
            </div>
    </div>
</template>

<style scoped>
.category__main{
    display: grid;
    align-content: center;
text-align: center;
width: 200px;
height: 60px;
/* padding: 10px; */
border: 1px solid #FFFFFF;
border-radius: 20px;
}
.category__text{
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 1.6rem;
line-height: 31px;
color: #FFFFFF;

}
@media (max-width: 1000px){
    .category__main{
        width: 170px;
        height: 60px;
    }  
}

@media (max-width: 410px){
    .category__main{
        width: 120px;
        height: 60px;
    }  
}
</style>