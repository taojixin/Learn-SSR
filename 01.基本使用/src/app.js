import { createSSRApp } from 'vue'
import App from './App.vue'

// 写成一个函数的原因：避免跨请求状态的污染
// 通过函数来返回app实例，可以保证每个请求都会返回新的app实例，来避免跨域请求状态的污染
export default function createApp() {
    let app = createSSRApp(App)
    return app
}