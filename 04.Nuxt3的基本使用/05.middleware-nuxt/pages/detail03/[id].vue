<template>
  <div class="home">
    detail03 id: {{ id }}

  </div>
</template>

<script setup>
let route = useRoute()
const {id} = route.params

// 路由参数的验证
definePageMeta({
    validate: (route) => {
        // return /\d+$/.test(route.params.id)
        return {
            statusCode: 404,
            statusMessage: "valide router"
        }
    }
})
</script>

<style lang="less" scoped>
</style>