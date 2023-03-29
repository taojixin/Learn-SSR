<template>
  <div class="home">
error: {{ error }}
<button @click="goBack">back</button>
  </div>
</template>

<script setup>
const props = defineProps({
    error: Object
})
function goBack() {
    clearError({redirect: "/"})
}
</script>

<style lang="less" scoped>
</style>