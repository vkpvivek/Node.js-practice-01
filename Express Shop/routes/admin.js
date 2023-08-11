const express=require('express');
const path=require('path');

//import controller
const productsController=require('../controllers/products');

const router=express.Router();

//routes==> admin/add-product (GET)
router.get("/add-product",productsController.getAddProduct);
//routes==> admin/add-product  (POST)
router.post("/product",productsController.postAddProduct);


//export the adminRoutes
module.exports=router;