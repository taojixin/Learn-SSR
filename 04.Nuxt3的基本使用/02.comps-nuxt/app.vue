<template>
  <div>
    <!-- 组件 -->
    <!-- NuxtWelcome:欢迎页面组件， 该组件是@nuxt/ui的一部分 -->
    <!-- <NuxtWelcome /> -->
    <!-- NuxtPage:是Nuxt自带的页面占位组件，需要显示位于目录中的顶级或嵌套页面 pages/ 是对router-view的封装 -->
    <!-- ClientOnly: 该组件中的默认插槽的内容只在客户端渲染 -->
    <!-- <ClientOnly fallback="loading>>">
      <div>只会在客户端渲染，通过js生成的</div>
    </ClientOnly> -->

    <!-- 样式 -->
    <!-- <div class="global-style">
      app.index
    </div>
    <div class="global-style1">
      app.index
    </div>
    <div class="global-style2">
      app.index
    </div> -->

    <!-- 资源的访问 -->
    <!-- public资源的访问 -->
    <!-- <img src="/public.png" alt="" srcset="">
    <div class="bg-image"></div> -->
    <!-- assets资源的访问 -->
    <!-- <img src="@/assets/images/a.png" alt=""> -->
    <!-- <img src="~/assets/images/a.png" alt="">
    <div class="bg-image"></div> -->


    <!-- 字体图标的使用 -->
    <div class="iconfont icon-chahao"></div>
    <div class="iconfont icon-icon-test"></div>


    <NuxtPage></NuxtPage>
  </div>
</template>

<style>
  .global-style {
    color: red;
  }
  .bg-image {
    width: 200px;
    height: 200px;
    border: 1px solid red;
    /* public资源 */
    /* background-image: url(/public.png); */
    /* assets资源 */
    background-image: url(@asseta/images/a.png);
  }
</style>
