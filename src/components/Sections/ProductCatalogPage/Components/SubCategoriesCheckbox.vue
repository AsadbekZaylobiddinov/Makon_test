<script setup>
import {computed, ref} from 'vue'
var props = defineProps(['subCategories', 'visibleOrNot', 'checkedSubCategory'])

var visible = ref(false)

var subCategories = props.checkedSubCategory

visible.value = computed(() => {
  return props.visibleOrNot == 0 ? false : true
})

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
    <div class="default" :class="{subCategoriesWrapper: !visible, activeSubCategoriesWrapper: visible}">
        <div v-for="subCategory in props.subCategories" :key="subCategory.id" class="subCategoryCheckbox">
            <input :value="subCategory.name" @change="checkCheckbox" type="checkbox" v-model="subCategories[subCategory.id - 1]" :name="subCategory.name" :id="subCategory.name" class="subCheckbox">
            <label :for="subCategory.name">{{ subCategory.name }}</label>
        </div>
    </div>
</template>

<style scoped>
.subCategoriesWrapper{
  display: inline;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.activeSubCategoriesWrapper{
  display: inline;
  max-height: max-content;
  transition: max-height 0.3s ease-out;
}

.subCategoryCheckbox{
padding-top: 10px;
text-align: center;
padding-left: 10px;
height: 30px;
width: 15vw;
border-radius: 5px;
border: 1px solid #DAD9D9;
}
.subCheckbox{
    margin-right: 5px;
}
</style>