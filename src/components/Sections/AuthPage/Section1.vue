<script setup>
import AuthFormBackgroundComponent from './Components/AuthFormBackgroundComponent.vue'
import LogoBackgroundComponent from './Components/LogoBackgroundComponent.vue';
</script>

<template>
<section class="auth__section">
        <logo-background-component class="logo__background"></logo-background-component>
        <auth-form-background-component></auth-form-background-component>
</section>
  
</template>

<style>
.auth__section{
    display: grid;
    grid-template-columns: 1fr 1fr;
}

@media (max-width:600px){
    .logo__background{
        display: none;
    }
    .auth__section{
    display: grid;
    grid-template-columns: 1fr;
}
}
</style>