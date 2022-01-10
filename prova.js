const a = 4 ;
const http = require('http');

const express=require('express');
const app=express();
app.get('/', (req,resp)=>{
resp.send("hello");

});



app.listen(3000);