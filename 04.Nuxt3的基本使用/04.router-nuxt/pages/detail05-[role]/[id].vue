<script lang="ts" setup>
const route = useRoute()
const {role,id} = route.params

</script>

<template>
  <div>
    Page: ditail4 role: {{ role }}
    id: {{ id }}
  </div>
</template>

<style scoped></style>
