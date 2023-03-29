<script lang="ts" setup></script>

<template>
  <div>
    parent
    <NuxtLink to="/parent/child1">
      <button>child1</button>
    </NuxtLink>
    <NuxtLink to="/parent/child2">
      <button>child2</button>
    </NuxtLink>

    <NuxtPage></NuxtPage>
  </div>
</template>

<style scoped></style>
