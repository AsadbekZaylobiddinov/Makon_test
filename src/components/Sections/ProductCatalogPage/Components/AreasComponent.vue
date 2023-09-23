<script setup>
import {computed, ref} from 'vue'

let emit = defineEmits(['areasReady'])

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
  <div class="default" :class="{areasWrapper: !props.visibleOrNot, activeAreasWrapper: props.visibleOrNot}">
      <div class="areasTitle">
        <h1>Rayonlarni tanlang</h1>
      </div>
      <div class="areas">
        <div v-for="area in props.areas" :key="area.id" class="areaCheckbox">
            <input :value="area.name" @change="checkCheckbox" type="checkbox" v-model="areas[area.id - 1]" :name="area.name" :id="area.id" class="areaCheckboxTwo">
            <label :for="area.name">{{ area.name }}</label>
        </div>
      </div>
        <div class="readyAreas">
          <button @click="$emit('areasReady')">Tayyor</button>
        </div>
    </div>
</template>

<style scoped>
.areasTitle{
  text-align: center;
  margin-bottom: 40px;
}
.areasWrapper{
  display: none;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}
.areas{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-content: center;
  width: 100vw;
}
.activeAreasWrapper{
  display: grid;
  align-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  background-color: white;
}

.areaCheckbox{
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
margin-bottom: 10px;
}
.areaCheckbox label{
  font-size: 1rem;
}
.areaCheckboxTwo{
    width: 20px;
    height: 20px;
}
.readyAreas{
  display: grid;
  justify-content: center;
  margin-top: 40px;
}
.readyAreas button{
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
  .areaCheckboxTwo{
width: 15px;
height: 15px;
  }
  .readyAreas button{
    width: 30vw;
  }
}

@media (max-width: 500px){
  .areas{
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-content: center;
  width: 100vw;
}
.areaCheckbox{
  width: 30vw;
}
}
</style>