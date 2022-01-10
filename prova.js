const a = 4 ;
const http = require('http');
const server = http.createServer((request,response) =>{
console.log("I hear you thank you for a request");
response.setHeader("Content-type ","text/html");
response.end("QUI");
});

server.listen(3000);