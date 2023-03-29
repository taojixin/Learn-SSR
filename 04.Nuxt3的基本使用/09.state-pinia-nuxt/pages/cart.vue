<template>
  <div class="cart">
    cart
    <button @click="addCounter">+1</button>
    {{ counter }}
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useHometore } from '~~/store/home';
const homeStore = useHometore()
const {counter} = storeToRefs(homeStore)
function addCounter() {
  homeStore.increment()
}
</script>