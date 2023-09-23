<script setup>
import {computed, ref} from 'vue'
var props = defineProps(['subCategories', 'visibleOrNot', 'checkedSubCategory'])

let emit = defineEmits(['subcategoriesReady'])

var subCategories = props.checkedSubCategory

// visible.value = computed(() => {
//   return props.visibleOrNot == 0 ? false : true
// })

function checkCheckbox(e){

console.log(subCategories)
if(e.target.checked){
  if(sessionStorage.getItem('selectedSubCategories')){
  var selectedSubCategories = JSON.parse(sessionStorage.getItem('selectedSubCategories'))
  selectedSubCategories.push(e.target.value)
  sessionStorage.setItem('selectedSubCategories',JSON.stringify(selectedSubCategories))
  console.log(sessionStorage.getItem('selectedSubCategories'))
}
  else{
  var selectedSubCategories = [e.target.value]
  var stringified = JSON.stringify(selectedSubCategories)
  sessionStorage.setItem('selectedSubCategories',stringified)
  console.log(JSON.parse(sessionStorage.getItem("selectedSubCategories")))
}
}
else{
  var selectedSubCategories = JSON.parse(sessionStorage.getItem('selectedSubCategories'))
  selectedSubCategories = selectedSubCategories.filter(el => el != e.target.value)
  sessionStorage.setItem('selectedSubCategories',JSON.stringify(selectedSubCategories))
  console.log(sessionStorage.getItem('selectedSubCategories'))
}

}


</script>

<template>
    <div class="default" :class="{subCategoriesWrapper: !props.visibleOrNot, activeSubCategoriesWrapper: props.visibleOrNot}">
      <div class="subCategoriesTitle">
        <h1>Kategoriyalarni tanlang</h1>
      </div>
      <div class="subCategries">
        <div v-for="subCategory in props.subCategories" :key="subCategory.id" class="subCategoryCheckbox">
            <input :value="subCategory.name" @change="checkCheckbox" type="checkbox" v-model="subCategories[subCategory.id - 1]" :name="subCategory.name" :id="subCategory.name" class="subCheckbox">
            <label :for="subCategory.name">{{ subCategory.name }}</label>
        </div>
      </div>
        <div class="readySubcategories">
          <button @click="$emit('subcategoriesReady')">Tayyor</button>
        </div>
    </div>
</template>

<style scoped>

.subCategoriesWrapper{
  display: none;
}
.subCategoriesTitle{
  text-align: center;
  margin-bottom: 40px;
}
.activeSubCategoriesWrapper{
  display: grid;
  align-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  background-color: white;
}
.subCategries{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-content: center;
  width: 100vw;
}
.subCategoryCheckbox{
display: grid;
grid-template-areas: '1 2';
grid-column-gap: 5px;
background-color: #0074D9;
justify-content: center;
align-items: center;
padding-top: 10px;
padding-left: 10px;
height: 50px;
width: 20vw;
color: white;
border-radius: 15px;
border: 1px solid #DAD9D9;
}
.subCategoryCheckbox label{
  font-size: 1rem;
}
.subCheckbox{
    width: 20px;
    height: 20px;
}
.readySubcategories{
  display: grid;
  justify-content: center;
  margin-top: 40px;
}
.readySubcategories button{
  width: 20vw;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  font-size: 1rem;
  border: none;
  color: white;
  background-color: rgb(24, 182, 24);
}

@media (max-width: 600px){
  .subCheckbox{
width: 15px;
height: 15px;
  }
  .readySubcategories button{
    width: 30vw;
  }
}
</style>