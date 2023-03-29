// server:刷新浏览器的会在服务器端执行
// client:在客户端切换路由，只会在客户端执行
export default defineNuxtRouteMiddleware((to, form) => {
    console.log("home: 第二个中间件");
    
})