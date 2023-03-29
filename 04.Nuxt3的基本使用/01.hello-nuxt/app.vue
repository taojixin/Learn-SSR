<template>
  <div>
    <h2>hello nuxt3</h2>
    
    <!-- 通过内置组件添加 优先级：内置组件 > .vue中的 > nuxt.config.ts -->
    <Head>
      <Meta name="key" content="key key key" />
    </Head>
  </div>
</template>

<script setup>
// 1.判断代码的运行环境
// if (process.server) {
//   console.log("运行在server");
// }
// if (process.client) {
//   console.log("运行在client");
// }
// // 获取环境变量
// const runtimeConfig = useRuntimeConfig()
// if (process.server) {
//   console.log(runtimeConfig.appKey);
//   console.log(runtimeConfig.public.baseURL);
// }
// if (process.client) {
//   console.log(runtimeConfig.appKey);
//   console.log(runtimeConfig.public.baseURL);
// }

// 3.获取appConfig
// let appConfig = useAppConfig()
// console.log(appConfig.title);
// onMounted(() => {
//   console.log(appConfig.them.primary);
// })

// 4.动态的给app所有的页面添加 head的内容
useHead({
  title: "app useHead", // 支持ref
  meta: [
    {
      name: "desc",
      content: "科教啊"
    }
  ],
  style: [],
  link: [],
  script: [
    {
      src: "http:/tjx.com",
      body: true
    }
  ]
})
</script>

<style></style>
