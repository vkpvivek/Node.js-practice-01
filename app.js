const http=require('http');

const server=http.createServer((req,res)=>{
    const url=req.url;
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if(url==='/'){
        res.end('Vivek Pal');

    }else if(url==='/home'){
        res.end('Welcome home');

    }else if(url==='/about'){
        res.end('Welcome to About Us page');

    }else if(url==='/node'){
        res.end(' Welcome to my Node Js project');
        
    }else{
        res.end('My name is Vivek Pal');
    }
});


const port=4000;
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
