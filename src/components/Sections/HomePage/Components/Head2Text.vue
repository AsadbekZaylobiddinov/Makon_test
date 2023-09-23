<script setup>

</script>

<template>
    <div class="head__container">
        <h2 class="head__tx">
            Siz istagan barcha narsa bir joyda jamlangan
        </h2>
        <h2 class="head__tx__mobile">
            Siz istagan barcha narsa <br> bir joyda jamlangan
        </h2>
    </div>
</template>

<style scoped>
.head__container{
    display: grid;
    justify-content: center;
    margin-bottom: 30px;
}
.head__tx__mobile{
    display: none;
}
.head__tx{
    
font-family: 'Javanese Text';
font-style: normal;
font-weight: 400;
font-size: 2rem;
line-height: 73px;
color: #FFFFFF;
}

@media (max-width: 450px){
    .head__tx{
        display: none;
    }
    .head__tx__mobile{
        display: block;
        font-family: 'Javanese Text';
font-style: normal;
font-weight: 400;
font-size: 2rem;
line-height: 35px;
color: #FFFFFF;
text-align: center;
    }
}
</style>
