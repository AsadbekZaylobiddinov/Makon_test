<template>
    <div class="form__input__container">
        <label class="form__input__label" :for="inputPlaceholder">{{ props.label_text }}</label>
        <input v-model="data" @change="setAuthData" :name="props.name"
        :id="inputPlaceholder" class="auth_register_input"
        :type="type" 
        :placeholder="inputPlaceholder">
    </div>
  
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '../../../stores/auth/auth';
var props = defineProps(['type','text','label_text','name'])
var data = ''
var authStore = useAuthStore()

function setAuthData(){
    if(props.name == 'password'){
        authStore.setPassword(data)
    }
    else if(props.name == "phoneNumber"){
        authStore.setPhoneNumber(data)
    }
}

// var inputWidth = computed(() => ((window.innerWidth / 2) / 100) * 32)

</script>

<style>
.form__input__container{
    display: grid;
    justify-content: center;
}
.form__input__label{
    display: block;
    text-align: center;
    color: #858585;
    font-family: Inter;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 10px;
}
.auth_register_input{
    width: 230px;
    padding: 5px;
    height: 32px;
    border-radius: 15px;
    border: 1px solid #DBDBDB;
    background: #FFF;
    margin-bottom: 25px;
}
.auth_register_input:focus{
    outline: none;
    border: 1px solid #DBDBDB;
}
@media (max-width: 800px){
    .auth_register_input{
        width: 150px;
    }
}

@media (max-width:600px){
    .auth_register_input{
        width: 180px;
    }
    .form__input__label{
    color: white;
    }
}
</style>