let path = require("path")
let {VueLoaderPlugin} = require("vue-loader/dist/index")
let {DefinePlugin} = require('webpack')

module.exports = {
    target: 'web',
    mode: "development",
    entry: "./src/client/index.js",
    output: {
        filename: "client_bundle.js",
        path: path.resolve(__dirname, "../build/client")
    },
    resolve: {
        extensions: ['.js', '.json', '.wasm', '.jsx', '.vue']
    },
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
    // DefinePlugin用于关闭在浏览器运行时报的警告
    plugins: [new VueLoaderPlugin(), new DefinePlugin({
        __VUE_PROD_DEVTOOLS__: false,
        __VUE_OPTIONS_API__: false
    })]
}