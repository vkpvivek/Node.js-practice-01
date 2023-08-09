const express=require('express');
const path=require('path');

const contactController=require('../controllers/contacts');
const router=express.Router();

//routes ==>/contact-us (GET)
router.get('/contact-us',contactController.getContactUS);
//routes  ==> /success  (POST)
router.post('/success',contactController.postSuccess);

module.exports=router;