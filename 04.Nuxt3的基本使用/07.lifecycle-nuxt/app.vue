<template>
  <div>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>
  let nuxtApp = useNuxtApp()
  nuxtApp.hook("app:created", (vueApp) => {
        console.log("app:created");
    })
    nuxtApp.hook("app:beforeMount", (vueApp) => {
        console.log("app:beforeMount");
    })
    nuxtApp.hook("vue:setup", () => {
        console.log("vue:setup");
    })
    nuxtApp.hook("app:rendered", (vueApp) => {
        console.log("app:rendered");
    })
    nuxtApp.hook("app:mounted", (vueApp) => {
        console.log("app:mounted");
    })
</script>
