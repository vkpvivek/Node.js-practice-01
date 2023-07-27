const http=require('http');

const server=http.createServer((req,res)=>{
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response to the client
    res.end('My name is Vivek Pal');
});

const port=4000;
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
