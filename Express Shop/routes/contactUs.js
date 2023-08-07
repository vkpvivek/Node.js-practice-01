const express=require('express');
const path=require('path');

const router=express.Router();


router.get('/contact-us',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','contact-us.html'));
});

router.post('/success',(req,res,next)=>{
    console.log(req.body);
    console.log("in sucess log");
    res.sendFile(path.join(__dirname,'../','views','success.html'));
});

module.exports=router;