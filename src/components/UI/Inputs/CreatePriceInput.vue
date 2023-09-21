<script setup>

</script>

<template>
    <div class="create__price__container">
        <div class="create__price__title__container" style="display: block; font-size: 18px;">
            <p class="create__price__title">Narx:</p>
        </div>
        <div class="price__container" style="margin-top: 20px;">
            <input type="number" class="create__price">
        </div>
        <div class="create__price__valyuta__container">
            <select name="create__price__valyuta" id="create__price__valyuta">
                <option value="SUM">SUM</option>
                <option value="USD">USD</option>
            </select>
        </div>
    </div>
    
</template>

<style scoped>
.create__price__container{
    margin-top: 30px;
}
.create__price__container *{
    display: inline;
}
.create__price{
    width: 10vw;
    border: 1px solid rgb(119, 119, 119);
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
.price__container{
    margin-top: 40px;
}
#create__price__valyuta{
    margin-left: 5px;
    border: none;
    border-radius: 10px;
    background-color: #edebeb;;
    padding: 5px;
    margin-top: 10px;
    color: #646464;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>