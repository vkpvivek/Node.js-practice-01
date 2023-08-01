//const http=require('http');
const express =require('express');
const parseBody=require('body-parser');

const app=express();

//for parsing the body
app.use(parseBody.urlencoded({extended:false}));

app.use('/',(req,res,next)=>{
    console.log("this always run");
    next();
});

app.use("/add-product",(req,res,next)=>{
    console.log("i am in add-product middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="describe"><button type="submit">Add Product</button></form>');
});

app.use("/product",(req,res,next)=>{
    console.log(req.body);
    console.log("in product-page");
    //res.send("<h1>product page</h1>");
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    res.send("<h1>Final page</h1>");
});

app.listen(4000);
// const server=http.createServer(app);
// server.listen(4000);