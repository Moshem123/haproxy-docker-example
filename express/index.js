const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('*', (req, res) => {
    let resp = "Hello World!<br>"
    resp += `Hostname is: ${process.env.HOSTNAME}<br>`
    resp += `Original URL: ${req.originalUrl}<br>`
    resp += `Base URL: ${req.baseUrl}<br>`
    resp += `Req Path: ${req.path}<br>`
    resp += `Host header: ${req.header('Host')}<br>`
    resp += `IP (x-forwarded-for header): ${req.headers['x-forwarded-for']}<br>`
    resp += `IP (remote address): ${req.connection.remoteAddress}<br>`
    resp += `Headers: ${JSON.stringify(req.headers)}<br>`
    resp += `Args: ${JSON.stringify(req.query)}<br>`
    resp += `Message: ${process.env.MESSAGE}<br>`
    return res.send(resp)
  }
)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
