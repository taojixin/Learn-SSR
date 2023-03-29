<template>
  <div class="category">
    category
    <button @click="addCounter">+1</button>
    {{ counter }}
    <button @click="getHomeInfo">fetchHomeInfoData</button>

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
function getHomeInfo() {
  homeStore.fetchHomeData()
}
console.log(homeStore.homeInfo);

</script>

