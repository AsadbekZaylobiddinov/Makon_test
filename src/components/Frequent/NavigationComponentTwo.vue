<script setup>

</script>
    
<template>
    <div class="nav__block">
        <nav class="nav__main">
            <ul class="nav__list">
                <li class="nav__el"><a href="#">Bog'lanish</a></li>
                <li class="nav__el"><a href="#">Biz Haqimizda</a></li>
                <li class="nav__el"><a href="#">Barcha e'lonlar</a></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
    .nav__block{
        display: grid;
        align-content: center;
    }
    .nav__main{
        display: grid;
        align-content: center;
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

    @media (max-width: 400px){
        .nav__el *{
            font-size: 0.9rem;
        } 
    }
</style>