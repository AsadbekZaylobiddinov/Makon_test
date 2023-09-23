<script setup>

let emit = defineEmits(['drop'])

let name = sessionStorage.getItem('makon__user__name')

</script>

<template>
    <div class="view__profile__button">
        <div class="profile__img">
            <img class="profile__image" src="../../Frequent/Assets/user_face2.png" alt="Profile Face">
        </div>
        <div class="user__name">
            <p>{{ name }}</p>
        </div>
        <div @click="$emit('dropp')" class="arrow__bottom">
            <img class="arrow__bottom__img" src="../../Frequent/Assets/arrow_left.png" alt="Arrow">
        </div>
    </div>
</template>

<style scoped>
.view__profile__button{
    display: grid;
    grid-template-areas: '1 2 3';
    align-items: center;
    color: white;
    margin-left: 30px;
}
.profile__image{
    width: 40px;
    height: 40px;
}
.user__name{
    margin-left: 15px;
}
.arrow__bottom{
    margin-left: 10px;
}
.arrow__bottom__img{
    transition: transform 0.3s ease-in-out;
    width: 30px;
    cursor: pointer;
}
.toggle__list{
    background-color: white;
}

@media (max-width: 600px){
    .profile__image{
        width: 30px;
        height: 30px;
    }
}
</style>