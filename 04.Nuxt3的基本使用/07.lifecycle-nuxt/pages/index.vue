<template>
  <div class="home">
    index

  </div>
</template>

<script>
export default {
    setup() {
        console.log("setup");
        return {}
    },
    beforeCreate() {
        console.log("beforecreated");
    },
    created() {
        console.log("created");
    },
    mounted() {
        console.log("mounted");
    },
    beforeUnmount() {
        console.log("beforeUnmount");
    },
    unmounted() {
        console.log("numounted");
    }
}
</script>

<style scoped>
</style>