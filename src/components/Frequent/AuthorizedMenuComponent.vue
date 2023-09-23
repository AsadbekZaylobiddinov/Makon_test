<script setup>
import CreateAdComponent from "../UI/Buttons/CreateAdComponent.vue";
import ViewScoreButton from "../UI/Buttons/ViewScoreButton.vue";
import ViewProfileButton from "../UI/Buttons/ViewProfileButton.vue";
import DropDownSidebarComponent from "./DropDownSidebarComponent.vue";

import { ref } from 'vue'

let right = ref(-20)

var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

if(width < 901 && width > 499){
    right.value = -40
}
else if(width < 501){
    right.value = -60
}

function dropDown(){
    if(right.value == -40 || right.value == -20 || right.value == -60){

        right.value = 0

    }
//     else{
//         if(width < 901 && width > 499){
//     right.value = -40
// }
// else if(width < 501){
//     right.value = -60
// }
//     }
    
}

function exitSidebar(){
    if(width < 901 && width > 499){
    right.value = -40
}
else if(width < 501){
    right.value = -60
}
}

</script>

<template>
    <div class="authorized__menu">
        <div class="authorized__menu__container">
            <view-score-button></view-score-button>
            <create-ad-component></create-ad-component>
            <view-profile-button @dropp="dropDown"></view-profile-button>
            <drop-down-sidebar-component @clickedButton="exitSidebar" :right="right"></drop-down-sidebar-component>
        </div>
    </div>
</template>

<style scoped>
.authorized__menu{
    justify-self: end;
}
.authorized__menu__container{
    display: inline-grid;
    grid-template-areas:
    '1 2 3'
    'a a a';
    align-items: center;
}
</style>