const path=require('path');
const Product=require('../models/product');

exports.getAddProduct = (req,res,next)=>{
    console.log("i am in add-product middleware");
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    //res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><input type="text" name="describe"><button type="submit">Add Product</button></form>');
};

exports.postAddProduct = (req,res,next)=>{
    //console.log(req.body);
    const product=new Product(req.body.title);
    product.save();
    console.log("in product-page");
    res.redirect('/shop/');
};

exports.getProducts=(req,res,next)=>{
    //const products=Product.fetchAll();
    Product.fetchAll((products)=>{
        console.log("in //getProduct");
        console.log(products);
        res.sendFile(path.join(__dirname,'../','views','shop.html'));
        //res.send("<h1>Final page</h1>");
    });
};