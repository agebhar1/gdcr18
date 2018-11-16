const finalhandler = require('finalhandler')
const http = require('http')
const serveStatic = require('serve-static')

const serve = serveStatic('.')

const server = http.createServer((req, res) => serve(req, res, finalhandler(req, res)))

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})