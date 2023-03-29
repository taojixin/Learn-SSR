import {createApp} from 'vue'
import createRouter from "../router"

import App from '../App.vue'
import { createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

let app = createApp(App)

// 安装路由插件
let router = createRouter(createWebHistory())
app.use(router)

// 安装pinia插件
let pinia = createPinia()
app.use(pinia)

// 等待路由准备好
router.isReady().then(() => {
    app.mount("#app")
})

