const a = 4 ;
const http = require('http');

const server = http.createServer((request,response) =>
{
    const user = {name:'John', surname:"Denver"};

console.log("I hear you thank you for a request");
response.setHeader("Content-Type","application/json");
response.end(JSON.stringify(user));
});

server.listen(3000);