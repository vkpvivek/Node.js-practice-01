const path=require('path');

exports.get404=(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'../','views','404.html'));
    //res.status(404).sendFile("<h1>!!Page Not Found<h1>!!");
};