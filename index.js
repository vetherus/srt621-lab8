var http = require('http')
var path = require('path')
var express = require('express')
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || 'localhost'
const BASE_API_URL = `http://${HOST}:${PORT}`
    //
    // ## SimpleServer `SimpleServer(obj)`
    //
    // Creates a new instance of SimpleServer with the following options:
    //  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
    //
var router = express()
var server = http.createServer(router)
router.use('/', express.static(path.resolve(__dirname, '')))
router.use(
    '/home.html',
    express.static(path.resolve(__dirname, 'views/index.html')),
)
router.use(
    '/books.html',
    express.static(path.resolve(__dirname, 'views/books.html')),
)
router.use(
    '/book1.html',
    express.static(path.resolve(__dirname, 'views/book1.html')),
)
router.use(
    '/book2.html',
    express.static(path.resolve(__dirname, 'views/book2.html')),
)
router.use(
    '/book3.html',
    express.static(path.resolve(__dirname, 'views/book3.html')),
)

console.log('Booting up the server! Please wait until finished...')
server.listen(PORT, () => {
    console.info('API Running at')
    console.info(`${BASE_API_URL}`)
})