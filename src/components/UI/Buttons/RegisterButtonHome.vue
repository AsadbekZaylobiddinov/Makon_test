<script setup>

</script>

<template>
    <div class="register__button__home__main">
        <button class="register__button__home">Registratsiya</button>
    </div>
</template>

<style scoped> 
.register__button__home__main{
    display: grid;
    align-content: center;
    justify-content: end;
    cursor: pointer;
    width: 155px;
    height: 40px;   
}
.register__button__home{
    width: 100%;
    height: 100%;
    border: white 1px solid;
    border-radius: 10px;
    background-color: transparent;
    font-size: 1rem;
    color: white;
}

@media (max-width: 600px){
    .register__button__home__main{
    display: grid;
    align-content: center;
    justify-content: end;
    cursor: pointer;
    width: 100px;
    height: 32px;   
}
    .register__button__home{
        width: 100px;
        height: 32px;
    border: white 1px solid;
    border-radius: 10px;
    background-color: transparent;
    font-size: 1rem;
    color: white;
    }
}
@media (max-width: 360px){
    .register__button__home__main{
    display: grid;
    align-content: center;
    justify-content: end;
    cursor: pointer;
    width: 80px;
    height: 28px;   
}
    .register__button__home{
        width: 80px;
    height: 28px;
    border: white 1px solid;
    border-radius: 10px;
    background-color: transparent;
    font-size: 1rem;
    color: white;
    }
}
@media (max-width: 330px){
    .register__button__home__main{
    display: grid;
    align-content: center;
    justify-content: end;
    cursor: pointer;
    width: 60px;
    height: 28px;   
}
    .register__button__home{
        width: 60px;
    height: 28px;
    border: white 1px solid;
    border-radius: 10px;
    background-color: transparent;
    font-size: 1rem;
    color: white;
    }
}
</style> 