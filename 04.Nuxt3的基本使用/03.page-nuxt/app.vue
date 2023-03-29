<template>
  <div>
    <!-- 使用组件的方式导航 -->
    <NuxtLink to="/">
      <button>home</button>
    </NuxtLink>
    <NuxtLink
      :to="{
        path: '/category',
        query: {
          id: 100,
        },
      }"
    >
      <button>category</button>
    </NuxtLink>
    <NuxtLink href="/cart" active-class="a">
      <button>cart</button>
    </NuxtLink>
    <NuxtLink to="https://www.jd.com" target="_blank">
      <button>跳转到外部地址</button>
    </NuxtLink>
    <hr />

    <!-- 通过navigateTo的方式导航 -->
    <NuxtLink @click="goToCategory()">
      <button>category</button>
    </NuxtLink>
    <hr />

    <!-- 通过编程的方式进行导航 -->
    <button @click="goTo">cart</button>
    <button @click="back">back</button>

    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>
function goToCategory() {
  // return navigateTo("/category")
  // return navigateTo({
  //   path: "/category",
  //   query: {
  //     id: 300
  //   },
  // },{
  //   replace: true // 是否替换当前页面
  // })
  // 跳转到外部链接，不利于seo优化
  return navigateTo("https://www.jd.com", {
    external: true,
  });
}

let router = useRouter();
function goTo() {
  router.push("/cart");
}
function back() {
  router.go(-1);
}
router.beforeEach((to, from) => {
  console.log(to);
  console.log(from);
});
</script>
