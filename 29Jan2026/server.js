const http = require('http');

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','rext/plain');
    res.end('Welcome to node');
});

server.listen(3000,()=>{
    console.log('Chalu ho gye kya!!!');
});