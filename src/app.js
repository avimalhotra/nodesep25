import http from "node:http";
import os from "node:os";

const ip='127.0.0.1';
const port=process.env.PORT || 8080;

const server=http.createServer((req,res)=>{
     
     // res.statusCode=200;
     // res.setHeader('Content-Type','text/html');
     // res.writeHead(200,{'Content-Type':'text/html'});
     res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'} );
     res.encoding = 'utf8';

     res.write('<h1>Hello Node JS 👍 </h1>');
     res.write(`<p>${new Date().toLocaleString()}</p>`);
     res.write(`<p>Threads: ${os.cpus().length}</p>`);
     res.write(`<p>CPU: ${os.cpus()[0].model}</p>`);
     res.write(`<p>Clock Speed: ${os.cpus()[0].speed}</p>`);
     res.write(`<p>Free Ram: ${os.freemem()/(1024*1024*1024)}</p>`);
     res.write(`<p>Total Ram: ${os.totalmem()/(1024*1024*1024)}</p>`);
     res.write(`<p>hello <b>there</b> </p>`);
     // res.write(req.url);
     // res.write(req.method);
     // res.write(req.headers.host);
     res.end();
});


server.listen(3000,()=>{
     console.log(`App running at http://${ip}:${port}`);
});