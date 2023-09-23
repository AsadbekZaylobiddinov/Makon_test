<script setup>
import { onMounted, computed } from 'vue';
import { useAuthStore } from '../../../../stores/auth/auth';
import AuthRegisterInput from '../../../UI/Inputs/AuthRegisterInput.vue'
import AuthRegisterSubmitInput from '../../../UI/Inputs/AuthSubmitInput.vue';

var authStore = useAuthStore();

onMounted(() => authStore.setStatusCode(''))

var errorStatus = computed(() => authStore.getStatusCode == 400 ? true : false)

var successStatus = computed(() => authStore.getStatusCode == 200 ? true : false)

var emptyStatus = computed(() => authStore.getStatusCode == '' ? true : false)

</script>

<template>
    <div class="auth__form__component">
        <div class="auth__head">
            <h3 class="auth__head__tx">Kirish</h3>
        </div>
        <div class="errorMessage" v-if="errorStatus">
            <p class="errorMessageText">Parol yoki Telefon Raqam noto'g'ri kiritilgan</p>
        </div>
        <div v-if="successStatus" class="successMessage">
            <p class="successMessageText">Siz muvaffaqiyatli avtorizatsiyadan o'tdingiz</p>
        </div>
        <div v-if="emptyStatus"></div>
        <auth-register-input :name="'phoneNumber'" :label_text="'Telefon Raqam'" :text="'Telefon Raqam'" :type="text"></auth-register-input>
        <auth-register-input :name="'password'" :label_text="'Parol'" :text="'Parol'" :type="password"></auth-register-input>
        <auth-register-submit-input :value="'Kirish'"></auth-register-submit-input>
    </div>
</template>

<style>
.auth__head{
    text-align: center;
    margin-bottom: 30px;
}
.auth__head__tx{
    color: #000;
font-family: Inter;
font-size: 2rem;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.errorMessageText{
    text-align: center;
    font-size: 1.5rem;
    color: red;
    background-color: #fff;
    padding: 3px;
    margin-bottom: 5px;
}
.successMessageText{
    font-size: 1.5rem;
    color: rgb(81, 255, 0);
}

@media (max-width:600px){
    .auth__head__tx{
    color: white;
    }
}
</style> 