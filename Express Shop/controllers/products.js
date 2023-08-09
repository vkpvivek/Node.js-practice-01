const path=require('path');


exports.getAddProduct = (req,res,next)=>{
    console.log("i am in add-product middleware");
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    //res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><input type="text" name="describe"><button type="submit">Add Product</button></form>');
};

exports.postAddProduct = (req,res,next)=>{
    console.log(req.body);
    console.log("in product-page");
    res.redirect('/shop/');
};

exports.getProducts=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
    //res.send("<h1>Final page</h1>");
};