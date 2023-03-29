import {createRouter} from "vue-router"

const routes = [
    {
        path: "/",
        component: () => import("../views/home.vue")
    },
    {
        path: "/about",
        component: () => import("../views/about.vue")
    }
]
// 当初的是一个函数，原因有导出app相同，注意之类需要传入一个路由模式的参数，在服务端需要传入用什么路由模式
export default function(history) {
    return createRouter({
        history,
        routes
    })
}