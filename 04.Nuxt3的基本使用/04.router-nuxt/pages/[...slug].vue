<template>
  <div class="home">
    找不到根
    {{ slug }}

  </div>
</template>

<script setup>
let route = useRoute()
let {slug} = route.params

</script>

<style lang="less" scoped>
</style>