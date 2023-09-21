<script setup>
import AuthButtonHome from '../../../UI/Buttons/AuthButtonHome.vue'
import RegisterButtonHome from '../../../UI/Buttons/RegisterButtonHome.vue'
</script>

<template>
    <div class="auth_register_home">
        <auth-button-home class="auth_btn_home"></auth-button-home>
        <register-button-home class="register_btn_home"></register-button-home>
    </div>
</template>

<style scoped>
.auth_register_home{
    display: grid;
    grid-template-areas: 'auth register';
    grid-column-gap: 5px;
    max-width: 400px;
    justify-self: flex-end;
}

.auth_btn_home{
    grid-area: auth;
}
.register_btn_home{
    grid-area: register;
}
</style>