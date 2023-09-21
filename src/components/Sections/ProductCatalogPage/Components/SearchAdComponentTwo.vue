<script setup>
import SearchAdComponentOne from "../../HomePage/Components/SearchAdComponentFirst.vue"
</script>

<template>
    <div class="search__ad__container">
        <search-ad-component-one :bck-image='2' :width="'60vw'" class="search__ad__component"></search-ad-component-one>
    </div>
</template>

<style scoped>
.search__ad__component{
    margin-top: 60px;
}
</style>