//const http=require('http');
const express =require('express');

const app=express();

app.use((req,res,next)=>{
    console.log("i am in middleware");
    next();
});

app.use((req,res,next)=>{
    console.log("i am in another middleware");
    res.send('<h1> hello to node js </h1>');
});

app.listen(4000);
// const server=http.createServer(app);
// server.listen(4000);