export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            // 自定义的插件，格式化价格的插件，（常见vue实例时就会自动注册）
            formPrice: (price: number) => {
                return price.toFixed(2)
            }
        }
    }
})