import express from 'express';
import path from 'node:path';
import admin from './routes/admin.js';
import products from './routes/products.js';
import search from "./controller/search.js";
import cookieParser from 'cookie-parser';

const app=express();
const port=process.env.PORT || 8081;

app.use(express.static(path.resolve('src/public')));
app.use(express.static(path.resolve('node_modules/bootstrap/dist')));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser('secret'));


app.use((req,res,next)=>{
     // console.log(`App starts at ${new Date().toLocaleString()}`);
     // console.log( req.url );
     // console.log( req.url );
     //  console.log(req.cookies);
     res.cookie("name","avi", {maxAge:86400, httpOnly: true, signed: true});
     console.log(req.signedCookies);
     next();
});

/* routing */
app.get('/',(req,res)=>{
    
     res.setHeader('Content-Type','text/html');
     res.status(200).send(`<h1>Hello Express</h1>`);
});

function auth(req,res,next){
     const hours=new Date().getHours();
     if(hours>=9 && hours<=17){
          next();
     }
     else{
          res.status(403).send('Can\'t Login');
     }
}
 
app.get('/login',auth,(req,res)=>{
     res.setHeader('Content-Type','text/html');
     res.status(200).send('Login Page');
});
app.get('/api',(req,res)=>{
     res.setHeader('Content-Type','text/html');
     res.status(200).json([{name:"aaa", id:22}]);
});

app.get("/send",(req,res)=>{
     res.status(200).send(`Get data`);
});

app.post("/send",(req,res)=>{
     console.log( req.body );

     // res.status(200).send(req.body);

     if( req.body.login=="admin" && req.body.password=="1234"){
          res.status(200).send(`Welcome ${req.body.login}`);
     }
     else{
          res.status(403).send('Forbidden');
     }
});

app.get("/search",search);


app.use("/admin",admin);
app.use("/products",products);


/* wild card handler */
app.get("/*splat",(req,res)=>{
     res.setHeader('Content-Type','text/html');
     res.status(404).send(`<h1>Page Not Found</h1>`);
});

app.listen(port,()=>{
     console.log(`App server running at http://127.0.0.1:${port}`);
});