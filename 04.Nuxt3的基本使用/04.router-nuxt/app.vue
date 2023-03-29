<template>
  <div>
    <NuxtLink to="/">
      <button>首页</button>
    </NuxtLink>
    <NuxtLink to="/detail02/23">
      <button>detail02:id</button>
    </NuxtLink>
    <NuxtLink to="/detail02/23">
      <button>detail02:id</button>
    </NuxtLink>
    <NuxtLink to="/detail03/user-123">
      <button>detail02/user-123</button>
    </NuxtLink>
    <NuxtLink to="/detail04-admin">
      <button>detail04:admin</button>
    </NuxtLink>
    <NuxtLink to="/detail05-admin/123">
      <button>detail04:admin:id</button>
    </NuxtLink>

    <NuxtLink to="/parent">
      <button>parent</button>
    </NuxtLink>
    <NuxtPage></NuxtPage>
  </div>
</template>
