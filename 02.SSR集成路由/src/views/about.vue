<template>
    <div class="home" style="border: 1px solid blue">
      <h2>About</h2>
      <div>{{ count }}</div>
      <button @click="addCounter">+1</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const count = ref(200)
  function addCounter() {
      count.value++
  }
  </script>
  
  <style lang="less" scoped>
  </style>