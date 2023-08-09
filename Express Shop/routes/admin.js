const express=require('express');
const path=require('path');

//import controller
const productsController=require('../controllers/products');

const router=express.Router();

//routes==> admin/add-product (GET)
router.get("/add-product",productsController.getAddProduct);
//routes==> admin/add-product  (POST)
router.post("/product",productsController.postAddProduct);

// router.get("/add-product",(req,res,next)=>{
//     console.log("i am in add-product middleware");
//     res.sendFile(path.join(__dirname,'../','views','add-product.html'));
//     //res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><input type="text" name="describe"><button type="submit">Add Product</button></form>');
// });

// router.post("/product",(req,res,next)=>{
//     console.log(req.body);
//     console.log("in product-page");
//     res.redirect('/shop/');
// });

//export the adminRoutes
module.exports=router;