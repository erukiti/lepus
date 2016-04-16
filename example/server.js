const lepus = require('../dist/lepus')
console.dir(lepus)

const express = require('express')
const server = lepus.server

const app = express()

function renderFullPage(html, initialState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/lepus_client.js"></script>
      </body>
    </html>
    `
}

function handleRender(req, res) {
    res.send(renderFullPage(server.getHtml(), server.getInitialState()))
}

app.use('/lepus_client.js', express.static('dist/lepus_client.js'))
app.use(handleRender)

app.listen(3000)
