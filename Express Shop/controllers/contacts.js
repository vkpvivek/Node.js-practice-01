const path=require('path');

exports.getContactUS=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','contact-us.html'));
};

exports.postSuccess=(req,res,next)=>{
    console.log(req.body);
    console.log("in sucess log");
    res.sendFile(path.join(__dirname,'../','views','success.html'));
};