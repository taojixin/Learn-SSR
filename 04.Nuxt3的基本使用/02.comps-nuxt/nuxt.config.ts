// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    telemetry:false,
    css: [
        // 引入css样式
        "@/assets/styles/main.css",
        "@/assets/styles/global.scss",
        "@/assets/iconfonts/iconfont.css"
    ],
    // 全局变量
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    // 自动的给scss模块添加额外的数据
                    additionalData: "@use '~/assets/styles/variables.scss' as *;"
                }
            }
        }
    }
})
