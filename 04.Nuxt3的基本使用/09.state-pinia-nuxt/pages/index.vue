<template>
  <div class="index">
    index
    <div>{{ counter }}</div>
    <button @click="addCounter">+1</button>
    <div>{{ loginInfo }}</div>
  </div>
</template>

<script setup>

const counter = useCounter();
const loginInfo = useLoginInfo()
function addCounter() {
  counter.value++;
}

</script>
