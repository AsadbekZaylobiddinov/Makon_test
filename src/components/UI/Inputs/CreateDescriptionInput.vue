<script setup>

</script>

<template>
    <div class="title__input__container">
        <label class="title__input__label" for="title__input">Qo'shimcha ma'lumot*</label>
        <textarea id="title__input" type="text" class="title__input"></textarea>
    </div>
</template>

<style scoped>
.title__input__container{
    display: grid;
    justify-content: center;
    margin-top: 20px;
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
    height: 15vh;
    border: none;
    border-radius: 10px;
    background-color: #edebeb;;
    padding-top: 0;
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