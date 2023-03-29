let path = require("path")
let nodeExternals = require("webpack-node-externals")
let { VueLoaderPlugin } = require("vue-loader/dist/index")
let { DefinePlugin } = require('webpack')

let { merge } = require("webpack-merge")
let baseConfig = require("./base.config")
module.exports = merge(baseConfig, {
    target: 'web',
    entry: "./src/client/index.js",
    output: {
        filename: "client.js",
        path: path.resolve(__dirname, "../build/client")
    },
    plugins: [new DefinePlugin({
        __VUE_PROD_DEVTOOLS__: false,
        __VUE_OPTIONS_API__: false
    })]
})