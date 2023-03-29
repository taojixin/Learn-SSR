<template>
  <div class="home">
    index

  </div>
</template>

<script setup>
const BASE_URL = "http://codercba.com:9060/juanpi/api"

// 1.使用$fetch发起网络请求
// server client 都会发起请求，发起两次，一般不用
// $fetch(BASE_URL + "/homeInfo", {
//     method: "GET"
// }).then((res) => {
//     console.log(res);
// })

// 2.使用官方提供的hooks API (在刷新页面时，可以减少客户端发起的一次请求)
// const {data} = await useAsyncData("homeInfo", () => {
//     return $fetch(BASE_URL + "/homeInfo", {method: "GET"})
// })

// 3.useAdyncData简写 (官方建议)
// const {data} = await useFetch(BASE_URL + "homeInfo", {
//   method: "GET"
// })

// 4.useFetch 的 options GET
// const { data } = await useFetch("/homeInfo", {
//   method: "GET",
//   baseURL: BASE_URL,
//   query: {
//     name: "liujun"
//   },
//   // params: 
//   // body: {}
//   // headers: {}
// })
// 5.useFetch 的 options POST
// const { data } = await useFetch("/goods", {
//   method: "POST",
//   baseURL: BASE_URL,
//   body: {
//     count: 6
//   }
// })

// 6.拦截器
// const {data} = await useFetch("/goods", {
//   method: "POST",
//   baseURL: BASE_URL,
//   body: {
//     count: 6
//   },
//   // 请求的拦截
//   onRequest({request, options}) {
//     console.log(options.method);
//     // options.headers = {
//     //   token: "xxx"
//     // }
//   },
//   onRequestError({request, options, error}) {
//     console.log("onRequestError");
//   },
//   onResponse({request, response, options}) {
//     console.log("onResponse");
//   },
//   onResponseError({request, response, options, error}) {
//     console.log("onResponseError");
//   }
// })
// console.log(data);

const cookie = useCookie("token")
console.log("token",cookie.value);
</script>
