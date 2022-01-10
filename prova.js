const a = 4 ;
const http = require('http');

const express=require('express');
const app=express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req,resp)=>{
    console.log("QUERY 1" + JSON.stringify(req.query));
resp.send("hello");

});

app.get("/profile" , (req,resp)=>{
    console.log("QUERY 2" + req.query);
    resp.send("My profile");
});

app.listen(3000);