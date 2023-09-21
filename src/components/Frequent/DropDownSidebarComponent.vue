<script setup>
import { useRouter } from 'vue-router';

let router = useRouter()

let props = defineProps(['right'])

let emit = defineEmits('clickedButton')

function unAuthorize(){
    sessionStorage.removeItem('makon__authentication__jwt__token')
    window.location.reload()
}

function toFavouriteProductsPage(){
router.push('/my/favourites')
}

</script>

<template>
    <div id="sidebar" class="sidebar" :style="{right: props.right + 'vw'}">
        <div class="dropDownMenu">
            <div class="dropDownMenu__container">
                <div @click="$emit('clickedButton')" class="exit__icon">
                    <img class="exit__icon__img" src="../Frequent/Assets/arrow_right.png" alt="">
                </div>
                <div class="nav__menu">
                    <br>
                    <ul class="nav__list">
                        <li @click="toFavouriteProductsPage">Saqlangan E'lonlar</li>
                        <li>Mening E'lonlarim</li>
                        <li>To'lovlarim</li>
                        <li>Hisobni ko'rish</li>
                        <li @click="unAuthorize" style="margin-top: 20px;">Chiqish</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  width: 20vw; /* Ширина боковой панели */
  height: 100%;
  background-color: #ffffff;
  transition: right 0.3s ease-in-out;
  z-index: 1;
  border: 1px rgb(185, 184, 184) solid;
  cursor: pointer;
}
.dropDownMenu{
    position: relative;
    top: 5px;
    grid-area: a;
    justify-self: center;
    width: 100%;
    height: 100%;
}
.dropDownMenu__container{
    display: grid;
    position: absolute;
    width: 150px;
    border-radius: 15px;
    background-color: #ffffff;
    width: 100%;
    height: 50%;
}
.exit__icon{
    display: inline;
    justify-self: start;
    align-self: start;
    padding-top: 20px;
    padding-left: 20px;   
}
.exit__icon__img{
    width: 40px;
}
.nav__menu{
    display: grid;
    align-self: center;
    justify-content: center;
}
.nav__list{
    text-align: center;
    list-style: none;
    line-height: 50px;
    color: #555454;
    font-size: 18px;
}
</style>