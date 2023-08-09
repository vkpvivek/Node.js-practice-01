const path=require('path');
const express =require('express');
const parseBody=require('body-parser');

//import controllers
const errorController=require('./controllers/error');

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

//middleware-->  routes for error page
app.use(errorController.get404);

app.listen(4000);
