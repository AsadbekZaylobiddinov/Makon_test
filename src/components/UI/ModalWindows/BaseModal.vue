<template>
    <div class="modal-overlay" v-if="props.showModal">
      <div style="position: absolute;">
        <div class="modal">
        <slot></slot>
        <button class="close-button" @click="$emit('close')">Yopish</button>
      </div>
    </div>
      </div>
      
  </template>
  
  <script setup>
  import { defineEmits } from 'vue' 
  
  let props = defineProps(['showModal'])

  let emit = defineEmits(['close'])

  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Javanese Text';
  }
  
  .modal {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  .close-button {
    margin-top: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #0074D9;
    border: none;
    border-radius: 10px;
    width: 150px;
    color: white;
  }
  
  .blur-background {
    filter: blur(5px); /* Измените значение, чтобы задать нужную степень размытия */
  }
  </style>