// 优先级比较高的
export default defineNuxtRouteMiddleware((to ,from ) => {
    const isLogin = true;
    console.log("index第三个中间件");
    if (!isLogin && to.fullPath !== "/login") {
        return navigateTo("/login")
    }
    
})