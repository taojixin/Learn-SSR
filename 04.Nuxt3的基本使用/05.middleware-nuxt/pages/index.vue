<template>
  <div class="index">
    index

  </div>
</template>

<script setup>
// 路由中间件
definePageMeta({
    middleware: [
        // 匿名
        function(to, from) {
            // console.log(to);
            // console.log(from);
            console.log("第一个中间件");
            // 如果返回的是“” 或 null 或 没有返回语句，name就会执行下一个中间件
            // 如果返回的是navigateTo，直接但会到新页面，下一个中间件不会执行
            // return navigateTo("/detail02")
            // return abortNavigation("终止导航")
        },
        // 第二个中间件
        function (to, from ) {
            console.log("第二个中间件");
        },
    ],
    middleware: ["home"]
})
</script>

<style lang="less" scoped>
</style>