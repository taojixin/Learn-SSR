<template>
    <div class="home" style="border: 1px solid green">
      <h2>Home</h2>
      <div>{{ count }}</div>
      <button @click="addCounter">+1</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useHomeStore } from '../store/home';
  import { storeToRefs } from 'pinia';
  let homeStore = useHomeStore()
  let {count} = storeToRefs(homeStore)
  function addCounter() {
      count.value++
  }
  </script>
  
  <style lang="less" scoped>
  </style>