// https://nuxt.com/docs/api/configuration/nuxt-config

import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";

import ElementPlus from "unplugin-element-plus/vite"
export default defineNuxtConfig({
  telemetry: false,
  // build: {
  //   // 使用babel进行语法转换
  //   transpile: ["element-plug/es"],
  // },
  // vite: {
  //   plugins: [
  //     Components({
  //       dts: true,
  //       resolvers: [IconsResolver({})],
  //     }),
  //   ],
  // },
  // modules: [
  //   "@element-plus/nuxt"
  // ],
  // elementPlugs: {}
  build: {
    transpile: ["element-plus/es"]
  },
  vite: {
    plugins: [ElementPlus()]
  }
});
