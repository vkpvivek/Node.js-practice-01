const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;

    if(url==='/'){
        //Read data from message.txt file
        fs.readFile("message.txt",{encoding:"utf-8"},(err,data)=>{
            if(err){
                console.log(err);
            }

            res.setHeader('Content-type','text/html');
            res.write('<html>');
            res.write('<head><title>READ-WRITE FILE</title></head>');
            //write message data on html body after reading
            res.write('<body>')
            res.write(data);
            res.write('</body>');

            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
            res.write('</html>');
            return res.end();
        });


    }
    else if(url==='/message' && method==='POST'){     //recive data from form action="/message" and method
        const body=[];                        
        req.on("data",(chunk)=>{                
            body.push(chunk);           //store the data in chunkwise in body
        });
        
        return req.on("end",()=>{
            const parsedBody=Buffer.concat(body).toString();    //parse the body
            //console.log(parsedBody);
            const message=parsedBody.split('=')[1];

            //Write the message in the file
            fs.writeFile("message.txt",message,()=>{
                //console.log('inside fs.writeFile');
                res.statusCode=302;
                res.setHeader("Location","/");        //>> redirecting user at "/"
                return res.end();
            });
        });
    }
    else{
        //initially when no data is present(no message.txt file)
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>READ-WRITE FILE</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }

});

const port=4000;
server.listen(port);