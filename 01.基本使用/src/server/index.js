let express = require("express")
let server = express()

import createApp from "../app"
import { renderToString } from "@vue/server-renderer"

// 部署静态资源
server.use(express.static("build"))

server.get('/', async (req, res) => {
    let app = createApp();
    let appStringHtml = await renderToString(app)
    res.send(
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Vue3 Serve Side Render</h1>
            <div id="app">${appStringHtml}</div>
            <script src="/client/client.js"></script>
        </body>
        </html>
        `
    )
})

server.listen(3000, () => {
    console.log("start node server on 3000 ");
})