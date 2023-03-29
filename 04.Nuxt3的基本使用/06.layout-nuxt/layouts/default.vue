<template>
  <div class="layout">
    <div class="header">
        <NuxtLink to="/">
      <button>index</button>
    </NuxtLink>
    <NuxtLink to="/cart">
      <button>cart</button>
    </NuxtLink>
    <NuxtLink to="/category">
      <button>category</button>
    </NuxtLink>
    <NuxtLink to="/profile">
      <button>profile</button>
    </NuxtLink>
    <NuxtLink to="/login">
      <button>login</button>
    </NuxtLink>
    </div>
    <slot></slot>
    <div class="footer">
        footer
    </div>

  </div>
</template>

<script setup>
</script>

<style scoped>
.header {
    border: 1px solid red;
    text-align: center;
    line-height: 60px;
    font-size: 30px;
    background-color: red;
}
.footer {
    border: 1px solid blue;
}
</style>