<script setup>
import MakonLogoMain from '../UI/Logos/MakonLogoMain.vue';
</script>
    
<template>
    <div class="nav__block">
        <makon-logo-main class="logo__component"></makon-logo-main>
        <nav class="nav__main">
            <ul class="nav__list">
                <li class="nav__el"><a href="#">Biz Haqimizda</a></li>
                <li class="nav__el"><a href="#">Bog'lanish</a></li>
                <li class="nav__el"><router-link to="/product-catalog">Barcha E'lonlar</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
    .nav__block{
        display: grid;
        align-content: start;
        grid-template-areas: 'logo nav';
    }
    .logo__component{
        grid-area: logo;
    }
    .nav__main{
        display: grid;
        align-content: center;
        grid-area: nav;
        padding: auto;
    }
    .nav__el{
    display: inline;
    
    }
    .nav__el *{
        font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-decoration: none;
    color: white;
    margin-right: 25px;
    }

    @media (max-width: 1000px){
        .nav__main{
            display: none;
        }
    }
</style>