const path=require('path');
const express=require('express');

const productController=require('../controllers/products');

const router=express.Router();

//middleware
//routes ==> /shop/ (GET)
router.get('/',productController.getProducts);

//export the shopRoutes
module.exports=router;