<template>
  <div class="app" style="border: 1px solid red">
    <h2>Vue App</h2>
    <div>{{ count }}</div>
    <button @click="addCounter">+1</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(100)
function addCounter() {
    count.value++
}
</script>

<style lang="less" scoped>
</style>