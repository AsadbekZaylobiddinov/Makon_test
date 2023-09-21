<script setup>
import NavigationComponentOne from './NavigationComponentOne.vue';
import AuthRegisterHome from '../Sections/HomePage/Components/AuthRegisterHome.vue';
import BaseModal from '../UI/ModalWindows/BaseModal.vue';
import AuthorizedMenuComponent from './AuthorizedMenuComponent.vue';
import { useCheckAuth } from '../../composables/checkAuth';
import { onMounted, ref } from 'vue';

let isAuthorized = ref(0)

let showModal = ref(false)

onMounted(() => {
    let checkAuth = useCheckAuth()

    if(checkAuth.isAuth(false) == 200){
        isAuthorized.value = 1
    }
    else if(checkAuth.isAuth(false) == 401){
        isAuthorized.value = 0
        showModal.value = true
    }
    else if(checkAuth.isAuth(false) == 402){
        showModal.value = false
        isAuthorized.value = 0
    }

})

function closeBaseModal(){
    showModal.value = false
}

</script>

<template>
    <header class="header__main" v-if="!isAuthorized">
        <base-modal @close="closeBaseModal" :showModal="showModal"> 
            <h1>Siznining avtorizatsiya sessiyangiz vaqti tugadi,<br> iltimos qaytadan avtorizatsiyadan o'ting</h1>
        </base-modal>
            <navigation-component-one class="nav__component"></navigation-component-one>
            <auth-register-home class="auth_register_component"></auth-register-home>
    </header>
    <header class="header__main" v-if="isAuthorized">
        <base-modal @close="closeBaseModal" :showModal="showModal"> 
            <h1>Siznining avtorizatsiya sessiyangiz vaqti tugadi,<br> iltimos qaytadan avtorizatsiyadan o'ting</h1>
        </base-modal>
            <navigation-component-one class="nav__component"></navigation-component-one>
            <authorized-menu-component></authorized-menu-component>
    </header>
</template>


<style scoped>
/* .header__container{
    display: grid;
    justify-content: center;
} */
.header__main{
    display: grid;
    grid-template-areas: 
    'nav auth_register'
    ;
    max-width: 90vw;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
}
.nav__component{
    grid-area: nav;
}
.auth_register_component{
    grid-area: auth_register;
}
</style>
