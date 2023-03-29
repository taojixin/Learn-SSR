// https://nuxt.com/docs/api/configuration/nuxt-config
// defineNuxtConfig为辅助函数，不需要导报
export default defineNuxtConfig({
    // 运行是配置，即定义环境变量，可通过.env中的环境变量来覆盖，优先级：.env > runtimeConfig
    runtimeConfig: {
        // 服务端可获取
        appKey: "aabbcc", // server
        // 服务端和客户端都可以获取
        public: {
            baseURL: "http:/codercba.com" // client and server
        }
    },
    // 2.定义应用的配置
    appConfig: {
        // title: "hello nuxt3",
        // them: {
        //     primary: "yellow"
        // }
    },
    // 3. app 配置 
    app: {
        // 给app所有的页面的head添加的配置（seo,添加外部的资源）
        head: {
            title: "tjx",
            charset: "UTF-8",
            viewport: "",
            meta: [
                {
                    name: "keywords",
                    content: "科教"
                },
                {
                    name: "description",
                    content: "手机商城 电商"
                }
            ],
            link: [
                {
                    rel: "shortcut icon",
                    href: "favicon.ico",
                    type: "image/x-icon"
                }
            ],
            style: [
                {
                    children: "body{color: red;}"
                }
            ]
        }
    },
    // 4.渲染模式
    ssr: false, // false为单页面模式
    // 5.更改路由模式
    router: {
        options: {
            hashMode: true // 只在spa有效
        }
    },
    // 6.路径别名
    alias: {},
    // 7.配置nuxt拓展的模块
    modules: [],
    // 8.定义路由规则，可更改为路由的渲染模式或分配基于路由缓存策略
    routeRules: {},
    // 9.指定vite还是webpack来构建应用，默认vite
    // builder: {},
    telemetry:false
})
