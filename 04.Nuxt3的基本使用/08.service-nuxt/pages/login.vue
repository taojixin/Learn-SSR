<template>
  <div class="login">
    login
    <button @click="login()">登录</button>
  </div>
</template>

<script setup lang="ts">
// const {data} = await useFetch("/api/homeInfo")
// const {data} = await useFetch("/api/login", {method: "GET"})

async function login() {
  const { data } = await useFetch("/api/login?id=100", {
    method: "POST",
    body: {
      username: "admin",
      password: 123456,
    },
  });
  console.log(data.value?.code);
  const cookie = useCookie("token", {
    maxAge: 10, // 10s
  });
  cookie.value = data.value?.token as string;
  return navigateTo("/") // 登录成功回到首页
}
</script>
