<script setup>
import { getAllSubCategoriesByCategoryId } from "../../../services/categories"
import { onMounted, ref } from 'vue'

let subCategoryId = sessionStorage.getItem('currentCategory')

let subCategories = ref('')

onMounted(async () => {
    await getAllSubCategoriesByCategoryId(subCategoryId).then((data) => {
        subCategories.value = data.data.data
    })
})
</script>

<template>
    <div class="selectCategory">
        <label class="select__category__label" for="selectCategory">Rukn ni tanlang:</label><br>
        <select name="select" id="selectCategory">
            <option class="selectCategoryOption" :key="s.id" v-for="s in subCategories" :value="s.name">{{ s.name }}</option>
        </select>
    </div>
</template>

<style scoped>
.selectCategory{
    margin-top: 20px;
}
.select__category__label{
    font-size: 18px;
}
#selectCategory{
    margin-top: 5px;
}
#selectCategory{
    width: 10vw;
    height: 5vh;
    border: none;
    border-radius: 10px;
    background-color: #edebeb;;
    padding: 5px;
    margin-top: 10px;
    color: #5d5c5c;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

</style>