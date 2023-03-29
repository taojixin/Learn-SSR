let path = require("path")
let nodeExternals = require("webpack-node-externals")
let { VueLoaderPlugin } = require("vue-loader/dist/index")
let { merge } = require("webpack-merge")
let baseConfig = require("./base.config")
module.exports = merge(baseConfig, {
    target: 'node',
    entry: "./src/server/index.js",
    output: {
        filename: "server_bundle.js",
        path: path.resolve(__dirname, "../build/server")
    },
    externals: [nodeExternals()], // 排除node_module中的包
})