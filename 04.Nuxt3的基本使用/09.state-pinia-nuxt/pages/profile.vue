<template>
  <div class="frofile">
    frofile
    <div>{{ counter }}</div>
    <button @click="addCounter">+1</button>

  </div>
</template>

<script setup>
const counter = useCounter()
function addCounter() {
    counter.value++
}
</script>

