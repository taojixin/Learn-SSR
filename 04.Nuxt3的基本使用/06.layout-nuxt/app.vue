<template>
  <div>
   

    <!-- <NuxtLayout :name="name"> -->
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>

<script setup>
let name = "default"

// 插件
const nuxtApp = useNuxtApp()
nuxtApp.provide("formaDate", () => {
  return "2002-2-2"
})
nuxtApp.provide("version", "1.1.1")
console.log(nuxtApp.$formaDate);
console.log(nuxtApp.$version);
console.log(nuxtApp.$formPrice(12.232));
</script>
