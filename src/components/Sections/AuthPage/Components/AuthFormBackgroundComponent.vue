<script setup>
  import AuthFormComponent from './AuthFormComponent.vue';
</script>
  
<template>
    <div class="auth__form__background__container">
      <auth-form-component></auth-form-component>
    </div>
</template>

  <style>
  .auth__form__background__container{
    width: 50vw;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-content: center;
  }

  @media (max-width: 600px){
    .auth__form__background__container{
    width: 100vw;
  background-color: #0074D9;
  }
  }
  </style>