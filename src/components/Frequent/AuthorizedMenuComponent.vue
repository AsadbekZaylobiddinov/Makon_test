<script setup>
import CreateAdComponent from "../UI/Buttons/CreateAdComponent.vue";
import ViewScoreButton from "../UI/Buttons/ViewScoreButton.vue";
import ViewProfileButton from "../UI/Buttons/ViewProfileButton.vue";
import DropDownSidebarComponent from "./DropDownSidebarComponent.vue";

import { ref } from 'vue'

let right = ref(-20)

function dropDown(){
    if(right.value == -20){

        right.value = 0

    }
    else{
        right.value = -20
    }
    
}

function exitSidebar(){
    right.value = -20
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
    justify-self: center;
}
.authorized__menu__container{
    display: inline-grid;
    grid-template-areas:
    '1 2 3'
    'a a a';
    align-items: center;
}
</style>