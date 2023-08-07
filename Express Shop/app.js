const path=require('path');
const express =require('express');
const parseBody=require('body-parser');

const app=express();

//import from routes
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const contactRoutes=require('./routes/contactUs');

app.use(parseBody.urlencoded({extended:false}));  //for reading body
app.use(express.static(path.join(__dirname,'public')));    //for statically read (read only acess) to public

//acess from routes
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use(contactRoutes);


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    //res.status(404).sendFile("<h1>!!Page Not Found<h1>!!");
});

app.listen(4000);
