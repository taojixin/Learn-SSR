<template>
  <div class="refresh">
    <button @click="refreshPage">refresh</button>
    {{ pending }}

  </div>
</template>

<script setup>
const BASE_URL = "http://codercba.com:9060/juanpi/api"
let count = ref(1)
// 1.点击刷新时,是在server端发起网络请求,客户端不会发起网络请求,水合之后客户端是可以获得当前数据
const {data, refresh, pending} = await useFetch(BASE_URL + "/goods", {
    method: "POST",
    body: {
        count
    }
})
console.log(data.value.data);

function refreshPage() {
    count.value++
    refresh() // client 刷新请求
}
</script>
