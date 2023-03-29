import {createApp} from 'vue'
import createRouter from "../router"

import App from '../App.vue'
import { createWebHistory } from 'vue-router'

let app = createApp(App)

// 安装路由插件
let router = createRouter(createWebHistory())
app.use(router)

// 等待路由准备好
router.isReady().then(() => {
    app.mount("#app")
})

