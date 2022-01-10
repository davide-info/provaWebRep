const a = 4 ;
const http = require('http');
const object = {name:'John', surname:"Denver"};

const server = http.createServer((request,response) =>{
console.log("I hear you thank you for a request");
response.setHeader("Content-Type","application/json");
response.end(object);
});

server.listen(3000);