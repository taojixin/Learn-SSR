<template>
  <div class="use-fetch">
use-fetch
  </div>
</template>

<script setup lang="ts">
import hyRequest from "@/services/index"
import type { IResultData } from "@/services/index";
import { fetchHomeInfoData } from "~~/services/home";
// hyRequest.get<IResultData<any>>("/homeInfo").then((res) => {
//   console.log(res);
// })
// const {data} = await hyRequest.get<IResultData<any>>("/homeInfo")
// console.log("a:", data.value?.data);

const {data} = await fetchHomeInfoData()
console.log(data.value?.data, "aaa");

</script>
