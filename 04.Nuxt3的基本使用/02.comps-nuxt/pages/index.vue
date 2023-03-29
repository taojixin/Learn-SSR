<template>
  <div class="home">
    <div class="global-style">home page</div>
    <div class="global-style1">home page</div>
    <div class="global-style2">home page</div>
    <div class="global-style2">home page</div>
    <div class="local-style">home page</div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
// 手动导入全局样式
// @import "../assets/styles/variables.scss"; // 但是官方不推荐这样用了
// @use "../assets/styles/variables.scss" as vb; // 推荐这样写，as vb 给这个模块起一个命名空间
.local-style {
    // color: vb.$fsColor;
    color: $fsColor;
    font-size: $fs20;
    // font-size: vb.$fs20;
    // @include vb.border();
}
</style>