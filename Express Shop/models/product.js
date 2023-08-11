//const products=[];
const fs=require('fs');
const path=require('path');


const p=path.join(__dirname,'../','data','products.json');

const getProductFromFile= cb=>{
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            cb([]);
        }else{
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports=class Product{
    constructor(title){
        this.title=title;
    }

    save(){
        //products.push(this);
        getProductFromFile(products=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
            });
        });
    }

    static fetchAll(cb){
        //return products;
        getProductFromFile(cb);
    }
}