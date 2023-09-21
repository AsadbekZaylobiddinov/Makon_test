<script setup>
import { ref } from 'vue';

let imageUrl = ref('')

function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
    const reader = new FileReader();
    reader.onload = () => {
        imageUrl.value = reader.result;
    };
    reader.readAsDataURL(file);
    }
}

</script>

<template>

    <div v-if="!imageUrl" class="selectImageContainer">
        <div class="selectImageWarning">
            Tanlang
        </div>
        <input @change="handleImageChange" type="file" class="selectImageInput" placeholder="rasm">
    </div>
    <div class="selectedImgContainer" v-else>
           <img :src="imageUrl" class="selectedImg" alt="Selected Image">
    </div>
</template>

<style scoped>
.selectImageContainer{
    position: relative;
    margin-top: 20px;
    justify-self: start;
}
.selectImageWarning{
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 10vw;
    height: 20vh;
    border: none;
    border-radius: 10px;
    background-color: #e6e3e3;;
    padding: 5px;
    margin-top: 10px;
    color: #3f3e3e;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.selectImageInput{
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
}
.selectedImgContainer{
    width: 10vw;
    display: grid;
    justify-content: center;
    align-content: center;
    position: relative;
    margin-top: 20px;
    justify-self: start;
}
.selectedImg{
    max-width: 100%;
    max-height: 100%;
}
</style>