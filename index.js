const http=require('http');

const routes=require('./test1');

//const server=http.createServer(routes.handleReq);
const server=http.createServer(routes);

const port=4000;
server.listen(port);