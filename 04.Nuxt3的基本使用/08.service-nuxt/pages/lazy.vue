<template>
  <div class="lazy">
    lazy

  </div>
</template>

<script setup>
const BASE_URL = "http://codercba.com:9060/juanpi/api"

// 1.useFetch 默认会阻塞页面的导航(在未添加lazy:true之前需要等待请求结束后再执行onMounted)
// const {data} = await useFetch(BASE_URL + "/homeInfo", {
//     method: "GET",
//     lazy: true // 不会阻塞页面的导航 (先打印undefined再执行onMounted的)
// })
// console.log(data.value?.data);
// onMounted(() => {
//     console.log("onMounted");
// })

// 2.简写(lazy:true)
const {data} = await useLazyFetch(BASE_URL + "/homeInfo", {
    method: "GET",
})
console.log(data.value?.data);
// 确保一定可以拿到这个data数据
watch(data, (newData) => {
    console.log("data=>", data);
})
onMounted(() => {
    console.log("onMounted");
})
</script>
