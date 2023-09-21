<script setup>
import {computed, ref} from 'vue'

var props = defineProps(['areas', 'visibleOrNot', 'checkedAreas'])

var visible = ref(true)

var areas = props.checkedAreas

visible.value = computed(() => {
  return props.visibleOrNot == 0 ? false : true
})

function checkCheckbox(e){

  if(e.target.checked){
    if(sessionStorage.getItem('selectedAreas')){
    var selectedAreas = JSON.parse(sessionStorage.getItem('selectedAreas'))
    selectedAreas.push(e.target.value)
    sessionStorage.setItem('selectedAreas',JSON.stringify(selectedAreas))
    console.log(sessionStorage.getItem('selectedAreas'))
  }
    else{
    var selectedAreas = [e.target.value]
    var stringified = JSON.stringify(selectedAreas)
    sessionStorage.setItem('selectedAreas',stringified)
    console.log(JSON.parse(sessionStorage.getItem("selectedAreas")))
  }
  }
  else{
    var selectedAreas = JSON.parse(sessionStorage.getItem('selectedAreas'))
    selectedAreas = selectedAreas.filter(el => el != e.target.value)
    sessionStorage.setItem('selectedAreas',JSON.stringify(selectedAreas))
    console.log(sessionStorage.getItem('selectedAreas'))
  }
  
}



</script>

<template>
    <div class="default" :class="{areasWrapper: !visible, activeAreasWrapper: visible}">
        <div v-for="area in props.areas" :key="area.id" class="areaCheckbox">
            <input :value="area.name" @change="checkCheckbox" type="checkbox" v-model="areas[area.id - 1]" :name="area.name" :id="area.id" class="areaCheckboxTwo">
            <label :for="area.name">{{ area.name }}</label>
        </div>
    </div>
</template>

<style scoped>
.areasWrapper{
  display: none;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.activeAreasWrapper{
  display: inline;
  max-height: max-content;
  transition: max-height 0.3s ease-out;
}

.areaCheckbox{
    /* margin-bottom: 10px; */
padding-top: 10px;
text-align: center;
padding-left: 10px;
height: 30px;
width: 15vw;
border-radius: 5px;
border: 1px solid #DAD9D9;
}
.areaCheckboxTwo{
    margin-right: 5px;
}
</style>