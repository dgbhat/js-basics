const http = require('http');

http
    .createServer((req, res) => {
        res
            .writeHead(200)
            .end("Welcome to Datta's Den")
    })
    .listen(80);

console.log('Server started..')