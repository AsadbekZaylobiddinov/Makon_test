<script setup>

</script>

<template>
    <div class="title__input__container">
        <label class="title__input__label" for="title__input">Sarlavha*</label>
        <input id="title__input" type="text" class="title__input" placeholder="Misol: Iphone 15 Pro sotiladi">
    </div>
</template>

<style scoped>
.title__input__container{
    display: grid;
    justify-content: center;
}
.title__input__label{
color: #000;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.title__input{
    width: 70vw;
    height: 5vh;
    border: none;
    border-radius: 10px;
    background-color: #edebeb;;
    padding: 5px;
    margin-top: 10px;
    color: #999;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>