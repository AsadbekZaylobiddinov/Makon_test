<script setup>
  import MakonLogoMain from '../UI/Logos/MakonLogoMain.vue';
  import NavigationComponentTwo from './NavigationComponentTwo.vue';
</script>

<template>
    <div class="footer__container">
      <makon-logo-main></makon-logo-main>
      <navigation-component-two class="navigation__component__two"></navigation-component-two>
    </div>
</template>
  

<style scoped>
  .footer__container{
      display: grid;
      height: 20vh;
      grid-row-gap: 10%;
      margin-top: 100px;
      justify-content: center;
      align-content: center;
      background-color: #0074D9;
  }
  .footer__container *{
      margin-top: 3%;
  }
  .navigation__component__two{
      margin-bottom: 3%;
  }
  </style>