let path = require("path")
let nodeExternals = require("webpack-node-externals")
let {VueLoaderPlugin} = require("vue-loader/dist/index")

module.exports = {
    // 运行在node环境
    target: 'node',
    // 开发环境
    mode: "development",
    // 打包入口
    entry: "./src/server/index.js",
    // 打包出口
    output: {
        filename: "server_bundle.js",
        path: path.resolve(__dirname, "../build/server")
    },
    // 一下后缀的文件可省略后缀
    resolve: {
        extensions: ['.js', '.json', '.wasm', '.jsx', '.vue']
    },
    // 排除node_module中的包
    externals: [nodeExternals()], 
    // 打包
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }, 
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    // 打包插件
    plugins: [new VueLoaderPlugin()]
}