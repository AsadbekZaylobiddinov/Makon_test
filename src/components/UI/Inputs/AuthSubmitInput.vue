<template>
    <div class="submit__input__container">
      <input @click="authenticate" class="submit__input" type="submit" :style="{width: inputWidth + 'px'}" :value="props.value">
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { computed } from 'vue';
  import {Authenticate} from '../../../services/auth.js';
  import { useAuthStore } from '../../../stores/auth/auth';

  var router = useRouter()
  var authStore = useAuthStore()

  var props = defineProps(['value'])
  var inputWidth = computed(() => ((window.innerWidth / 2) / 100) * 32) 

  async function authenticate(){
    try{
      await Authenticate(authStore.getPassword, authStore.getPhoneNumber)
      .then((data) => {
      sessionStorage.setItem('makon__authentication__jwt__token',data.data.token)
      authStore.setStatusCode(200);
      console.log(authStore.getPassword)
      router.go(-1)
    }
  )
}
catch(e){
  console.log(e)
  authStore.setStatusCode(400);
}
}
  </script>
  
  <style>
  .submit__input__container{
      text-align: center;
  }
  .submit__input{
      padding: 5px;
      height: 32px;
      border-radius: 15px;
      border: none;
      background-color: #0085FF;
      margin-bottom: 25px;
      color: white;
      cursor: pointer;
  }
  </style>